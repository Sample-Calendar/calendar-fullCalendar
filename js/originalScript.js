// js/originalscript.js
import { events2 } from './eventData.js';

document.addEventListener('DOMContentLoaded', function() {
    const events = [
      {
        title: 'Looking for a Companion',
        start: '2025-01-01',
        person: 'Ram',
        phone: '',
        origin: 'MSP',
        type: 'traveler',
        destination: 'HYD'
      },
      {
        title: 'Help my mom',
        start: '2025-01-07',
        end: '2025-01-10',
        person: 'Laxman',
        phone: '',
        origin: 'JFK',
        type: 'traveler',
        destination: 'HYD'
      },
      {
        groupId: '999',
        title: 'Help me',
        start: '2025-01-09T16:00:00',
        person: 'Bharath',
        phone: '',
        origin: 'DLS',
        type: 'traveler',
        destination: 'DLH'
      },
      {
        title: 'Travel Companion for Mom',
        start: '2025-01-16T16:00:00',
        end: '2025-01-16T18:00:00',
        person: 'Sita',
        phone: '',
        origin: 'AST',
        type: 'traveler',
        destination: 'TPT'
      },
      {
        title: 'Travel Companion for Mom',
        start: '2025-02-11',
        end: '2025-02-13',
        person: 'Urmila',
        phone: '',
        origin: 'NWL',
        type: 'traveler',
        destination: 'VZG'
      },
      {
        title: 'Ready to Help',
        start: '2025-01-12',
        end: '2025-01-12',
        person: 'Karna',
        phone: '',
        origin: 'PSU',
        type: 'helper',
        destination: 'HYD'
      },
      {
        title: 'Travel Companion for Mom',
        start: '2025-01-12',
        person: 'Arjuna',
        phone: '',
        origin: 'WSL',
        type: 'traveler',
        destination: 'PUN'
      },
      {
        title: 'Travel Companion for Mom',
        start: '2025-01-12T14:30:00',
        end: '2025-01-13T13:30:00',
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
        title: 'Willing to help',
        start: '2025-01-28',
        person: 'Sahayam',
        phone: '',
        origin: 'EST',
        type: 'helper',
        destination: 'BLR'
      }
    ];
    const importedEvents = events2;
    console.log('Imported events '+importedEvents);
    const calendarEl = document.getElementById('calendar');
    const originFilter = document.getElementById('origin-filter'); 
    const destinationFilter = document.getElementById('destination-filter');
    const showHelpersCheckbox = document.getElementById('showHelpers'); 
    
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2025-01-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: events,
      eventOverlap: false,
      eventDataTransform: function(event) {
        if (event.type === 'helper') { 
          event.backgroundColor = '#FFA500';
          event.borderColor = '#FFA500';
        } else {
          event.backgroundColor = '#3788d8'; 
        }
        return event;
      },
      eventContent: function(arg) {
        return { 
          html: `
            ${arg.event.title} <br>
            Person: ${arg.event.extendedProps.person} <br>
            Phone: ${arg.event.extendedProps.phone} <br>
            Origin: ${arg.event.extendedProps.origin} <br>
            Type: ${arg.event.extendedProps.type} <br>
            Destination: ${arg.event.extendedProps.destination}
          ` 
        };
      }
    });
    calendar.render();


    //Handlers and Helpers
    // Filter by Origin
  originFilter.addEventListener('change', function() {
    let filteredEvents = events;
    const selectedOrigin = this.value;
    if (selectedOrigin) {
      filteredEvents = events.filter(event => event.origin === selectedOrigin);
    }

    calendar.setOption('events', filteredEvents); 
  });

  // Filter by Destination
  destinationFilter.addEventListener('change', function() {
    let filteredEvents = events;
    const selectedDestination = this.value;

    if (selectedDestination) {
      filteredEvents = events.filter(event => event.destination === selectedDestination);
    }

    calendar.setOption('events', filteredEvents);
  });
  showHelpersCheckbox.addEventListener('change', function() {
    let filteredEvents = events;

    if (this.checked) {
      filteredEvents = events.filter(event => event.type === 'helper');
    }

    calendar.setOption('events', filteredEvents);
  });
});

export default calendar;