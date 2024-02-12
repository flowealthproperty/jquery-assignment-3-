$(document).ready(function() {
    // Load timeline data and initialize timeline animation
    
    // Sample data for demonstration
    var timelineData = [
      { date: "2023", event: "organization", details: "being part of a huge organization that changed my life" },
      { date: "2022", event: "visitation", details: "Had fun with my friends and Family" },
      { date: "2023", event: "Snow riding", details: "Created Memories with my Friends in Canada" },
      { date: "2022", event: "Learning Skills", details: "Learnt how to create a website with html and css" },

      // Add more events here
    ];
  
    // Render timeline events
    renderTimeline(timelineData);
  });
  
  function renderTimeline(data) {
    var timeline = $('#timeline');
    $.each(data, function(index, event) {
      var eventElement = $('<div class="event bg-gray-200 rounded-lg p-4 mb-4 transition-transform hover:-translate-y-1">' +
        '<div class="date text-lg font-bold">' + event.date + '</div>' +
        '<div class="info">' +
          '<div class="event-title font-semibold">' + event.event + '</div>' +
          '<div class="event-details">' + event.details + '</div>' +
        '</div>' +
      '</div>');
      timeline.append(eventElement);
    });
  }
  