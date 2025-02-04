// js/originalscript.js

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar')
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2025-01-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2025-01-01',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          title: 'Long Event',
          start: '2025-01-07',
          end: '2025-01-10',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2025-01-09T16:00:00',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2025-01-16T16:00:00',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          title: 'Conference',
          start: '2025-01-11',
          end: '2025-01-13',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          title: 'Meeting',
          start: '2025-01-12T10:30:00',
          end: '2025-01-12T12:30:00',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          title: 'Lunch',
          start: '2025-01-12T12:00:00',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          title: 'Meeting',
          start: '2025-01-12T14:30:00',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          title: 'Birthday Party',
          start: '2025-01-13T07:00:00',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        },
        {
          title: 'Click for Google',
          start: '2025-01-28',
          person: '',
          phone: '',
          origin: '',
          destination: ''
        }
      ],
      eventContent: function(arg) { 
        return { 
          html: `
          ${arg.event.title} <br>
          Person: ${arg.event.extendedProps.person} <br>
          Phone: ${arg.event.extendedProps.phone} <br>
          Origin: ${arg.event.extendedProps.origin} <br>
          Destination: ${arg.event.extendedProps.destination}
        ` 
        };
      }
    })
    calendar.render()
  })