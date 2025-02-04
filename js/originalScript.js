// js/originalscript.js

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar')
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',initialDate: '2025-01-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2025-01-01',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          title: 'Long Event',
          start: '2025-01-07',
          end: '2025-01-10',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2025-01-09T16:00:00',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2025-01-16T16:00:00',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          title: 'Conference',
          start: '2025-01-11',
          end: '2025-01-13',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          title: 'Meeting',
          start: '2025-01-12T10:30:00',
          end: '2025-01-12T12:30:00',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          title: 'Lunch',
          start: '2025-01-12T12:00:00',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          title: 'Meeting',
          start: '2025-01-12T14:30:00',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          title: 'Birthday Party',
          start: '2025-01-13T07:00:00',
          description: 'Travelling to Hyd',
          location: 'JFK'
        },
        {
          title: 'Click for Google',
          url: 'https://google.com/',
          start: '2025-01-28',
          description: 'Travelling to Hyd',
          location: 'JFK'
        }
      ],
      eventContent: function(arg) { 
        return { 
          html: `${arg.event.title} - ${arg.event.extendedProps.description} (${arg.event.extendedProps.location})` 
        };
      }
    })
    calendar.render()
  })