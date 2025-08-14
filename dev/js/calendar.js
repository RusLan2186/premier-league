let calendarEl = document.getElementById('calendar');

const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  events: [
    {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/arsenal.png',
        awayLogo: '/images/man-city.png',
        homeShort: 'ars',
        awayShort: 'man',
        time: '2 : 0',
        matchUrl: '#'
      }
    },

     {
      start: '2025-08-04',
      extendedProps: {
        homeLogo: '/images/everton.png',
        awayLogo: '/images/wolver.png',
        homeShort: 'evr',
        awayShort: 'wol',
        time: '3 : 1',
        matchUrl: '#'
      }
    },
      {
      start: '2025-08-08',
      extendedProps: {
        homeLogo: '/images/arsenal.png',
        awayLogo: '/images/man-city.png',
        homeShort: 'ars',
        awayShort: 'man',
        time: '2 : 0',
        matchUrl: '#'
      }
    },

     {
      start: '2025-08-08',
      extendedProps: {
        homeLogo: '/images/everton.png',
        awayLogo: '/images/wolver.png',
        homeShort: 'evr',
        awayShort: 'wol',
        time: '3 : 1',
        matchUrl: '#'
      }
    },
      {
      start: '2025-08-17',
      extendedProps: {
        homeLogo: '/images/arsenal.png',
        awayLogo: '/images/man-city.png',
        homeShort: 'ars',
        awayShort: 'man',
        time: '2 : 0',
        matchUrl: '#'
      }
    },

     {
      start: '2025-08-19',
      extendedProps: {
        homeLogo: '/images/everton.png',
        awayLogo: '/images/wolver.png',
        homeShort: 'evr',
        awayShort: 'wol',
        time: '3 : 1',
        matchUrl: '#'
      }
    },
     
      {
      start: '2025-08-23',
      extendedProps: {
        homeLogo: '/images/arsenal.png',
        awayLogo: '/images/man-city.png',
        homeShort: 'ars',
        awayShort: 'man',
        time: '2 : 0',
        matchUrl: '#'
      }
    },

     {
      start: '2025-08-23',
      extendedProps: {
        homeLogo: '/images/everton.png',
        awayLogo: '/images/wolver.png',
        homeShort: 'evr',
        awayShort: 'wol',
        time: '3 : 1',
        matchUrl: '#'
      }
    },
      {
      start: '2025-08-23',
      extendedProps: {
        homeLogo: '/images/brighton.png',
        awayLogo: '/images/brentford.png',
        homeShort: 'evr',
        awayShort: 'wol',
        time: '3 : 1',
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
