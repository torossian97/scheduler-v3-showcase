export let configurations = [
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
      cancellation_url: "https://cal.nylas.com/scheduler/cancel/:booking_ref",
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
];
