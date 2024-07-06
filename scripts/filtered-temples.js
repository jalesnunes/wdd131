const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, November, 11",
        area: 59246,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-756468-wallpaper.jpg"
      },
      {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "2002, May, 2",
        area: 48100,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
      },
      {
        templeName: "Las Vegas Nevada",
        location: "Las Vegas, Nevada",
        dedicated: "1989, December, 18",
        area: 80350,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/400x250/las-vegas-temple-lds-758757-wallpaper.jpg"
      },
  ];

  const hamburger = document.querySelector('.hamburger');
  const navUL = document.querySelector('nav ul');
  const logo = document.getElementById('logo');
  
  hamburger.addEventListener('click', () => {
      navUL.classList.toggle('show');
      logo.classList.toggle('hide');
      const isOpen = navUL.classList.contains('show');
      hamburger.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });
  
  function renderTemplesData(filteredTemples = temples) {
      const container = document.querySelector('.figure-container');
      container.innerHTML = '';
      for (let i = 0; i < filteredTemples.length; i++) {
          const temple = filteredTemples[i];
          const li = document.createElement('li');
          li.innerHTML = `
              <div class="temple-card">
                  <h3>${temple.templeName}</h3>
                  <p><span>Location: </span>${temple.location}</p>
                  <p><span>Dedicated: </span>${temple.dedicated}</p>
                  <p><span>Size: </span>${temple.area} sq ft</p>
                  <img src="${temple.imageUrl}" alt="${temple.templeName}">
              </div>
          `;
          container.appendChild(li);
      }
  }
  
  function filterOldTemples() {
      const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      renderTemplesData(oldTemples);
  }
  
  function filterNewTemples() {
      const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      renderTemplesData(newTemples);
  }
  
  function filterLargeTemples() {
      const largeTemples = temples.filter(temple => temple.area > 90000);
      renderTemplesData(largeTemples);
  }
  
  function filterSmallTemples() {
      const smallTemples = temples.filter(temple => temple.area < 10000);
      renderTemplesData(smallTemples);
  }
  
  function showAllTemples() {
      renderTemplesData(temples);
  }
  
  document.querySelector('nav ul li:nth-child(1) a').addEventListener('click', showAllTemples);
  document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', filterOldTemples);
  document.querySelector('nav ul li:nth-child(3) a').addEventListener('click', filterNewTemples);
  document.querySelector('nav ul li:nth-child(4) a').addEventListener('click', filterLargeTemples);
  document.querySelector('nav ul li:nth-child(5) a').addEventListener('click', filterSmallTemples);
  
  window.addEventListener("load", showAllTemples);