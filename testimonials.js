const testimonials = [
  {
    name: "Raj",
    text: "The culinary tour in Italy was absolutely incredible! Every restaurant recommendation was perfect, and I discovered flavors I never knew existed.",
  },
  {
    name: " Lim",
    text: "Gourmet Food & Travel made my trip to Tokyo unforgettable. The combination of cultural experiences and amazing food was perfect!",
  },
  {
    name: "Emily Rodriguez",
    text: "The attention to detail and personalized service exceeded my expectations. Every meal was a celebration of local culture and tradition.",
  },
];

const testimonialsGrid = document.getElementById("testimonialsGrid");

testimonials.forEach(({ name, image, text }) => {
  const card = document.createElement("div");
  card.className = "testimonial-card";

  card.innerHTML = `
    
    <p class="testimonial-text">"${text}"</p>
    <div class="testimonial-name">${name}</div>
  `;

  testimonialsGrid.appendChild(card);
});
