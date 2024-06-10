import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(
    "https://api-staging.us.nylas.com/v3/scheduling/availability",
    ({ request }) => {
      const params = new URL(request.url).searchParams;

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
          endSlot.setMinutes(endSlot.getMinutes() + 30);

          slots.push({
            emails,
            start_time: Math.floor(startSlot.getTime() / 1000), // Convert to UNIX timestamp
            end_time: Math.floor(endSlot.getTime() / 1000), // Convert to UNIX timestamp
          });

          currentDate.setMinutes(currentDate.getMinutes() + 30);
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

  // GET /calendars
  http.get("https://api.us.nylas.com/v3/grants/me/calendars", ({ request }) => {
    const headers = request.headers;
    const params = new URL(request.url).searchParams;
    headers.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    params.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // Mock response based on the API reference
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

  // PUT /configurations

  http.put(
    "https://api.us.nylas.com/v3/grants/me/scheduling/configurations/:configuration_id",
    async ({ request, params }) => {
      const headers = request.headers;
      const { configuration_id } = params;
      headers.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      if (!configuration_id) {
        return HttpResponse.json(
          { error: "Missing configuration_id parameter" },
          { status: 400 }
        );
      }

      // Assuming the request body contains the configuration data
      let requestBody = "";

      try {
        requestBody = await request.text();
        requestBody = JSON.parse(requestBody);
      } catch (error) {
        return HttpResponse.json(
          { error: "Invalid JSON in request body" },
          { status: 400 }
        );
      }

      // Mock response based on the assumption that the configuration is updated
      const mockResponse = {
        request_id: "ddd35e13-a538-43d7-ac82-a688404949d5",
        data: {
          id: configuration_id,
          ...requestBody,
        },
      };

      return HttpResponse.json(mockResponse);
    }
  ),

  // GET_ALL configurations
  http.get(
    "https://api.us.nylas.com/v3/grants/me/scheduling/configurations",
    ({ request }) => {
      const headers = request.headers;
      const params = new URL(request.url).searchParams;
      headers.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      params.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // Mock response based on the API reference
      const mockResponse = {
        request_id: "5de05a53-2e61-4cd2-8b1d-57da9ef701e1",
        data: [
          {
            id: "ada2cb00-4996-4c0b-874d-00632b215c85",
            version: "1.0.0",
            participants: [
              {
                email: "antoine.torossian@nylas.com",
                is_organizer: true,
                name: "antoine.torossian@nylas.com",
                availability: {
                  calendar_ids: ["primary"],
                },
                booking: {
                  calendar_id: "antoine.torossian@nylas.com",
                },
              },
            ],
            requires_session_auth: false,
            availability: {
              duration_minutes: 20,
              interval_minutes: 20,
              round_to: 20,
              availability_rules: {
                availability_method: "collective",
                buffer: {
                  before: 0,
                  after: 0,
                },
                default_open_hours: [
                  {
                    days: [1, 2, 3, 4, 6],
                    exdates: null,
                    timezone: "America/Vancouver",
                    start: "09:00",
                    end: "17:00",
                  },
                  {
                    days: [5],
                    exdates: null,
                    timezone: "America/Vancouver",
                    start: "09:13",
                    end: "17:00",
                  },
                ],
                round_robin_group_id: "",
              },
            },
            event_booking: {
              title: "New meeting with rounding",
              timezone: "America/Vancouver",
              booking_type: "booking",
              hide_participants: null,
              disable_emails: null,
            },
            scheduler: {
              available_days_in_future: 30,
              min_cancellation_notice: 0,
              min_booking_notice: 60,
              rescheduling_url:
                "https://cal.nylas.com/scheduler/reschedule/:booking_ref",
              cancellation_url:
                "https://cal.nylas.com/scheduler/cancel/:booking_ref",
              hide_rescheduling_options: true,
              hide_cancellation_options: false,
              hide_additional_guests: true,
              cancellation_policy: "Please tell me why you're leaving me!",
            },
          },
          {
            id: "0bbf9f43-5abc-430d-a2cc-778e4012950a",
            version: "1.0.0",
            participants: [
              {
                email: "antoine.torossian@nylas.com",
                is_organizer: true,
                name: "Antoine Torossian",
                availability: {
                  calendar_ids: ["primary"],
                },
                booking: {
                  calendar_id: "antoine.torossian@nylas.com",
                },
              },
            ],
            requires_session_auth: false,
            availability: {
              duration_minutes: 30,
              interval_minutes: 30,
              availability_rules: {
                availability_method: "collective",
                buffer: {
                  before: 0,
                  after: 0,
                },
                default_open_hours: [
                  {
                    days: [1, 2, 3, 4, 5],
                    exdates: null,
                    timezone: "America/Vancouver",
                    start: "09:00",
                    end: "17:00",
                  },
                ],
                round_robin_group_id: "",
              },
            },
            event_booking: {
              title: "My new event!",
              timezone: "America/Vancouver",
              booking_type: "booking",
              hide_participants: null,
              disable_emails: null,
            },
            scheduler: {
              available_days_in_future: 30,
              min_cancellation_notice: 0,
              min_booking_notice: null,
            },
          },
        ],
      };

      return HttpResponse.json(mockResponse);
    }
  ),

  // GET /ui-settings
  http.get("https://api-staging.us.nylas.com/v3/scheduling/ui-settings", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
];
