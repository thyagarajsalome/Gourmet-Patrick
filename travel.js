const destinations = [
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Santorini",
    title: "Santorini, Greece",
    desc: "Stunning sunsets and Mediterranean cuisine",
  },
  {
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Tokyo",
    title: "Tokyo, Japan",
    desc: "Modern culture meets ancient traditions",
  },
  {
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Paris",
    title: "Paris, France",
    desc: "The city of lights and culinary excellence",
  },
  {
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Bali",
    title: "Bali, Indonesia",
    desc: "Tropical paradise with exotic flavors",
  },
];

const travelGrid = document.getElementById("travelGrid");

travelGrid.innerHTML = destinations
  .map(
    ({ img, alt, title, desc }) => `
  <div class="travel-card">
    <img src="${img}" alt="${alt}" />
    <div class="travel-card-overlay">
      <h3>${title}</h3>
      <p>${desc}</p>
    </div>
  </div>
`
  )
  .join("");
