declare module '*.mp4' {
    const src: string;
    export default src;
  }
declare module '*.webm' {
    const src: string;
    export default src;
  }
declare namespace gapi.client {
    const calendar: {
      events: gapi.client.calendar.EventsResource;
    };
  }
  declare namespace gapi.client.calendar {
    interface Event {
      summary: string;
      start: { dateTime: string };
      end: { dateTime: string };
    }
  
    interface EventsResource {
      insert: (params: { calendarId: string; resource: Event }) => Promise<void>;
    }
  }