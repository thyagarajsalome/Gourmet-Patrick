const destinations = [
  {
    img: "./images/t1.jpg",
    alt: "People on a boat on a serene lake surrounded by lush green mountains under a clear blue sky.",
    title: "Scenic Lake and Mountains",
    desc: "Nature",
  },
  {
    img: "./images/t2.jpg",
    alt: "A person with a backpack hiking beside a moss-covered cliff with a small waterfall.",
    title: "Lush Green Forest Hike",
    desc: "An adventurous hike.",
  },
  {
    img: "./images/t3.jpg",
    alt: "A harbor filled with boats and yachts, with a cityscape and a tall tower in the background under a blue sky.",
    title: "Vibrant City Harbor",
    desc: "A bustling city.",
  },
  {
    img: "./images/t4.jpg",
    alt: "A busy street intersection in a city with red double-decker buses and pedestrians, flanked by classical buildings.",
    title: "Historic City Street",
    desc: "A lively street scene in a historic city. ",
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
