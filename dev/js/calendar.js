let calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  events: [
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/arsenal-DOYE_ayn.png',
        awayLogo: '/images/man-city-B2tuz1bd.png',
        homeShort: 'ars',
        awayShort: 'man',
        time: '2 : 0',
        matchUrl: '#'
      }
    },

    {
      start: '2025-08-05',
      extendedProps: {
        homeLogo: '/images/brighton-B8hPJd2c.png',
        awayLogo: '/images/brentford-CqikDS27.png',
        homeShort: 'bri',
        awayShort: 'bre',
        time: '2 : 0',
        matchUrl: '#'
      }
    },

    {
      start: '2025-08-12',
      extendedProps: {
        homeLogo: '/images/arsenal-DOYE_ayn.png',
        awayLogo: '/images/man-city-B2tuz1bd.png',
        homeShort: 'ars',
        awayShort: 'man',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
      {
      start: '2025-08-12',
      extendedProps: {
        homeLogo: '/images/brighton-B8hPJd2c.png',
        awayLogo: '/images/brentford-CqikDS27.png',
        homeShort: 'bri',
        awayShort: 'bre',
        time: '2 : 0',
        matchUrl: '#'
      }
    },
      
       {
      start: '2025-08-17',
      extendedProps: {
        homeLogo: '/images/arsenal-DOYE_ayn.png',
        awayLogo: '/images/man-city-B2tuz1bd.png',
        homeShort: 'ars',
        awayShort: 'man',
        time: '2 : 0',
        matchUrl: '#'
      }
    },

    {
      start: '2025-08-18',
      extendedProps: {
        homeLogo: '/images/brighton-B8hPJd2c.png',
        awayLogo: '/images/brentford-CqikDS27.png',
        homeShort: 'bri',
        awayShort: 'bre',
        time: '2 : 0',
        matchUrl: '#'
      }
    },

  ],
  eventContent: function (arg) {
    const { homeLogo, awayLogo, homeShort, awayShort, time, matchUrl } = arg.event.extendedProps;

    return {
      html: `
        <div class="event-wrapper">
          <div class="event-top">
            <a href="${matchUrl}"  class="team">
              <img src="${homeLogo}" alt="${homeShort}" class="team-logo" />
              <div class="team-code">${homeShort}</div>
            </a>
            <div class="time">${time}</div>
            <a href="${matchUrl}" class="team">
              <img src="${awayLogo}" alt="${awayShort}" class="team-logo" />
              <div class="team-code">${awayShort}</div>
            </a>
          </div>
          <div class="event-bottom">
            <a href="${matchUrl}" class="match-center-btn">Match center</a>
          </div>
        </div>
      `
    };
  }
});

calendar.render();
