import { http, HttpResponse } from "msw";
import { configurations } from "./configurations";
import { bookings } from "./bookings";

// Helper function to generate unique booking IDs
const generateId = () => `booking-${Math.random().toString(36).substr(2, 9)}`;
const findConfigurationById = (id) =>
  configurations.find((config) => config.id === id);

export const handlers = [
  http.get(
    "https://api.us.nylas.com/v3/scheduling/availability",
    ({ request }) => {
      const params = new URL(request.url).searchParams;

      const configurationId = params.get("configuration_id");

      const configuration = configurations.find(
        (config) => config.id === configurationId
      );
      const eventDuration = configuration
        ? configuration.availability.duration_minutes
        : 30;

      const startTimeParam = params.get("start_time");
      const endTimeParam = params.get("end_time");
      if (!startTimeParam) {
        return HttpResponse.json(
          { error: "Missing start_time parameter" },
          { status: 400 }
        );
      }

      const startTime = new Date(parseInt(startTimeParam) * 1000);
      const endTime = new Date(parseInt(endTimeParam) * 1000);

      if (isNaN(startTime) || isNaN(endTime)) {
        return HttpResponse.json(
          { error: "Invalid start_time or end_time parameter" },
          { status: 400 }
        );
      }

      // Round up to the nearest half hour
      const roundUpToNearestHalfHour = (date) => {
        const minutes = date.getMinutes();
        if (minutes > 0 && minutes <= 30) {
          date.setMinutes(30);
        } else if (minutes > 30) {
          date.setHours(date.getHours() + 1);
          date.setMinutes(0);
        } else {
          date.setMinutes(0);
        }
        date.setSeconds(0);
        date.setMilliseconds(0);
      };

      roundUpToNearestHalfHour(startTime);

      // Generate time slots starting from the given start time
      const generateTimeSlots = (start, end) => {
        const slots = [];
        const emails = ["user1@example.com", "user2@example.com"];
        let currentDate = new Date(start);

        while (currentDate < end) {
          const startSlot = new Date(currentDate);
          const endSlot = new Date(currentDate);
          endSlot.setMinutes(endSlot.getMinutes() + eventDuration);

          slots.push({
            emails,
            start_time: Math.floor(startSlot.getTime() / 1000), // Convert to UNIX timestamp
            end_time: Math.floor(endSlot.getTime() / 1000), // Convert to UNIX timestamp
          });

          currentDate.setMinutes(currentDate.getMinutes() + eventDuration);
          if (currentDate.getHours() === 0) {
            currentDate.setHours(9, 0, 0, 0); // Start from 9 AM on next day
          }
        }

        return slots;
      };

      const timeSlots = generateTimeSlots(startTime, endTime);

      return HttpResponse.json({
        request_id: "5fa64c92-e840-4357-86b9-2aa364d35b88",
        data: {
          order: ["user1@example.com", "user2@example.com"],
          time_slots: timeSlots,
        },
      });
    }
  ),

  // GET /v3/scheduling/ui-settings
  http.get(
    "https://api.us.nylas.com/v3/scheduling/ui-settings",
    ({ request }) => {
      const params = new URL(request.url).searchParams;
      const configurationId = params.get("configuration_id");

      if (!configurationId) {
        return HttpResponse.json(
          { error: "Missing configuration_id parameter" },
          { status: 400 }
        );
      }

      const configuration = findConfigurationById(configurationId);

      if (!configuration) {
        return HttpResponse.json(
          { error: "Configuration not found" },
          { status: 404 }
        );
      }

      const response = {
        request_id: "505ff7c0-b7e5-4c83-bd3e-eefda5e7ae5f",
        data: {
          scheduler: {
            available_days_in_future:
              configuration.scheduler.available_days_in_future,
            min_cancellation_notice:
              configuration.scheduler.min_cancellation_notice,
            min_booking_notice: configuration.scheduler.min_booking_notice,
            rescheduling_url: configuration.scheduler.rescheduling_url,
            cancellation_url: configuration.scheduler.cancellation_url,
            hide_rescheduling_options:
              configuration.scheduler.hide_rescheduling_options,
            hide_cancellation_options:
              configuration.scheduler.hide_cancellation_options,
            hide_additional_guests:
              configuration.scheduler.hide_additional_guests,
            cancellation_policy: configuration.scheduler.cancellation_policy,
          },
          organizer: {
            email: configuration.participants[0].email,
            name: configuration.participants[0].name,
          },
        },
      };

      return HttpResponse.json(response);
    }
  ),

  // POST /v3/scheduling/bookings
  http.post(
    "https://api.us.nylas.com/v3/scheduling/bookings",
    async ({ request }) => {
      let requestBody;
      try {
        requestBody = await request.json();
      } catch (error) {
        return HttpResponse.json(
          { error: "Invalid JSON in request body" },
          { status: 400 }
        );
      }

      const { guest, start_time, end_time } = requestBody;
      if (!guest || !guest.email || !guest.name || !start_time || !end_time) {
        return HttpResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }

      const newBooking = {
        booking_id: generateId(),
        email: guest.email,
        name: guest.name,
        start_time,
        end_time,
        status: "confirmed",
        organizer: {
          email: "antoine.torossian@nylas.com",
          name: "Antoine Torossian",
        },
      };

      bookings.push(newBooking);

      return HttpResponse.json({
        request_id: "booking-request-id",
        data: newBooking,
      });
    }
  ),

  // PUT /v3/scheduling/bookings/:booking_id
  http.put(
    "https://api.us.nylas.com/v3/scheduling/bookings/:booking_id",
    async ({ request, params }) => {
      const { booking_id } = params;
      let requestBody;

      try {
        requestBody = await request.json();
      } catch (error) {
        return HttpResponse.json(
          { error: "Invalid JSON in request body" },
          { status: 400 }
        );
      }

      const bookingIndex = bookings.findIndex(
        (booking) => booking.id === booking_id
      );
      if (bookingIndex === -1) {
        return HttpResponse.json(
          { error: "Booking not found" },
          { status: 404 }
        );
      }

      bookings[bookingIndex] = { ...bookings[bookingIndex], ...requestBody };

      return HttpResponse.json({
        request_id: "booking-update-request-id",
        data: bookings[bookingIndex],
      });
    }
  ),

  // DELETE /v3/scheduling/bookings/:booking_id
  http.delete(
    "https://api.us.nylas.com/v3/scheduling/bookings/:booking_id",
    ({ params }) => {
      const { booking_id } = params;

      console.log(bookings);

      const bookingIndex = bookings.findIndex(
        (booking) => booking.booking_id === booking_id
      );
      if (bookingIndex === -1) {
        return HttpResponse.json(
          { error: "Booking not found" },
          { status: 404 }
        );
      }

      bookings.splice(bookingIndex, 1);

      return HttpResponse.json({ request_id: "booking-delete-request-id" });
    }
  ),

  // GET /calendars
  http.get("https://api.us.nylas.com/v3/grants/me/calendars", ({ request }) => {
    const headers = request.headers;
    const params = new URL(request.url).searchParams;
    headers.forEach((value, key) => {
      //console.log(`${key}: ${value}`);
    });
    params.forEach((value, key) => {
      //console.log(`${key}: ${value}`);
    });

    const mockResponse = {
      request_id: "5fa64c92-e840-4357-86b9-2aa364d35b88",
      data: [
        {
          description: "Description of my new calendar",
          hex_color: "#039BE5",
          hex_foreground_color: "#039BE5",
          id: "5d3qmne77v32r8l4phyuksl2x",
          is_owned_by_user: true,
          is_primary: true,
          location: "Los Angeles, CA",
          metadata: {
            "your-key": "value",
          },
          name: "Work Calendar",
          object: "calendar",
          read_only: false,
          timezone: "America/Los_Angeles",
        },
        {
          description: "Description of my new calendar",
          hex_color: "#039BE5",
          hex_foreground_color: "#039BE5",
          id: "5d3qmne77v32r8l4phyuksl2x",
          is_owned_by_user: true,
          is_primary: true,
          location: "Los Angeles, CA",
          metadata: {
            "your-key": "value",
          },
          name: "Personal Calendar",
          object: "calendar",
          read_only: false,
          timezone: "America/Los_Angeles",
        },
      ],
      next_cursor:
        "CigKGjRlaDdyNGQydTFqbWJ0bGo5a2QxdWJtdDZnGAEggIDAu7fw7bEYGg8IABIAGPjh2PGEi_0CIAEiBwgCEOqs6i4=",
    };

    return HttpResponse.json(mockResponse);
  }),

  // GET configurations
  http.get(
    "https://api.us.nylas.com/v3/grants/me/scheduling/configurations",
    () => {
      return HttpResponse.json({
        request_id: "5de05a53-2e61-4cd2-8b1d-57da9ef701e1",
        data: configurations,
      });
    }
  ),

  // GET specific configuration
  http.get(
    "https://api.us.nylas.com/v3/grants/me/scheduling/configurations/:configuration_id",
    ({ params }, res, ctx) => {
      const { configuration_id } = params;
      const configuration = configurations.find(
        (config) => config.id === configuration_id
      );

      if (!configuration) {
        return HttpResponse.json(
          { error: "Configuration not found" },
          { status: 404 }
        );
      }

      return HttpResponse.json({
        request_id: "unique-request-id",
        data: configuration,
      });
    }
  ),

  // PUT configuration
  http.put(
    "https://api.us.nylas.com/v3/grants/me/scheduling/configurations/:configuration_id",
    async ({ request, params }) => {
      const { configuration_id } = params;
      let requestBody;

      try {
        requestBody = await request.text();
        requestBody = JSON.parse(requestBody);
      } catch (error) {
        return HttpResponse.json(
          { error: "Invalid JSON in request body" },
          { status: 400 }
        );
      }

      let configIndex = configurations.findIndex(
        (config) => config.id === configuration_id
      );
      if (configIndex === -1) {
        return HttpResponse.json(
          { error: "Configuration not found" },
          { status: 404 }
        );
      }

      configurations[configIndex] = { id: configuration_id, ...requestBody };

      return HttpResponse.json({
        request_id: "ddd35e13-a538-43d7-ac82-a688404949d5",
        data: configurations[configIndex],
      });
    }
  ),

  // POST configuration
  http.post(
    "https://api.us.nylas.com/v3/grants/me/scheduling/configurations",
    async ({ request }) => {
      let requestBody;

      try {
        requestBody = await request.text();
        requestBody = JSON.parse(requestBody);
      } catch (error) {
        return HttpResponse.json(
          { error: "Invalid JSON in request body" },
          { status: 400 }
        );
      }

      const newConfig = {
        id: (Math.random() * 1000000).toString(),
        ...requestBody,
      }; // Mock ID generation
      configurations.push(newConfig);

      return HttpResponse.json({
        request_id: "aaa35e13-a538-43d7-ac82-a688404949d5",
        data: newConfig,
      });
    }
  ),

  // DELETE configuration
  http.delete(
    "https://api.us.nylas.com/v3/grants/me/scheduling/configurations/:configuration_id",
    ({ params }) => {
      const { configuration_id } = params;

      const configIndex = configurations.findIndex(
        (config) => config.id === configuration_id
      );
      if (configIndex === -1) {
        return HttpResponse.json(
          { error: "Configuration not found" },
          { status: 404 }
        );
      }

      configurations.splice(configIndex, 1);

      return HttpResponse.json({
        request_id: "aaa35e13-a538-43d7-ac82-a688404949d5",
      });
    }
  ),
];
