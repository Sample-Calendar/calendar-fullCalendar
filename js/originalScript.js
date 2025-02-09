// js/originalscript.js
import { events } from './eventData.js';

document.addEventListener('DOMContentLoaded', function() {
    const events = events;
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