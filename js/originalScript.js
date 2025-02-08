// js/originalscript.js
//import { events } from './eventData.js';

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
      //events: events,
      events: [
        {
          title: 'Looking for a Companion',
          start: '2025-01-01',
          person: 'Ram',
          phone: '',
          origin: 'MSP',
          type: 'helper',
          destination: 'HYD'
        },
        {
          title: 'Help my mom',
          start: '2025-01-07',
          end: '2025-01-10',
          person: 'Laxman',
          phone: '',
          origin: 'JFK',
          type: 'helper',
          destination: 'HYD'
        },
        {
          groupId: '999',
          title: 'Help me',
          start: '2025-01-09T16:00:00',
          person: 'Bharath',
          phone: '',
          origin: 'DLS',
          type: 'helper',
          destination: 'DLH'
        },
        {
          groupId: '999',
          title: 'Travel Companion for Mom',
          start: '2025-01-16T16:00:00',
          person: 'Sita',
          phone: '',
          origin: 'AST',
          type: 'helper',
          destination: 'TPT'
        },
        {
          title: 'Will help anyone',
          start: '2025-01-11',
          end: '2025-01-13',
          person: 'Urmila',
          phone: '',
          origin: 'NWL',
          type: 'helper',
          destination: 'VZG'
        },
        {
          title: 'Travel Companion for Mom',
          start: '2025-01-12T10:30:00',
          end: '2025-01-12T12:30:00',
          person: 'Karna',
          phone: '',
          origin: 'PSU',
          type: 'traveler',
          destination: 'HYD'
        },
        {
          title: 'Travel Companion for Mom',
          start: '2025-01-12T12:00:00',
          person: 'Arjuna',
          phone: '',
          origin: 'WSL',
          type: 'traveler',
          destination: 'PUN'
        },
        {
          title: 'Travel Companion for Mom',
          start: '2025-01-12T14:30:00',
          person: 'Bheema',
          phone: '',
          origin: 'PST',
          type: 'traveler',
          destination: 'DLH'
        },
        {
          title: 'Travel Companion for Mom',
          start: '2025-01-13T07:00:00',
          person: 'Nakul',
          phone: '',
          origin: 'CST',
          type: 'traveler',
          destination: 'HYD'
        },
        {
          title: 'Ready to help',
          start: '2025-01-28',
          person: 'Sahayam',
          phone: '',
          origin: 'EST',
          type: 'helper',
          destination: 'BLR'
        }
      ],
      eventContent: function(arg) {
        if (arg.event.extendedProps.type === 'helper') {
          arg.event.setProp('backgroundColor', 'orange'); 
          arg.event.setProp('borderColor', 'orange'); 
        }
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


    //Handlers and Helpers
    // Filter by Origin
  originFilter.addEventListener('change', function() {
    let filteredEvents = events;
    const selectedOrigin = this.value;

    if (selectedOrigin) {
      filteredEvents = events.filter(event => event.extendedProps.origin === selectedOrigin);
    }

    calendar.setOption('events', filteredEvents); 
  });

  // Filter by Destination
  destinationFilter.addEventListener('change', function() {
    let filteredEvents = events;
    const selectedDestination = this.value;

    if (selectedDestination) {
      filteredEvents = events.filter(event => event.extendedProps.destination === selectedDestination);
    }

    calendar.setOption('events', filteredEvents);
  });
  })