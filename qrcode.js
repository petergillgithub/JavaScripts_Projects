const reviews = [
  {
    id: 1,
    author: "Mike",
    job: "Project Manager",
    img: "https://i.pravatar.cc/120?img=1",
    text: "Amazing experience! Highly recommended.",
  },
  {
    id: 2,
    author: "Peter",
    job: "IT  Manager",
    img: "https://i.pravatar.cc/120?img=2",
    text: "Loved the design and usability.",
  },
  {
    id: 3,
    author: "John",
    job: "UX Manager",
    img: "https://i.pravatar.cc/120?img=3",
    text: "Very helpful and responsive team.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  showperson(currentIndex);
});

function showperson(index) {
  let item = reviews[index];
  img.src = item.img;
  author.textContent = item.author;
  job.innerText = item.job;
  text.innerText = item.text;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > reviews.length - 1) {
    currentIndex = 0;
  }
  showperson(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  showperson(currentIndex);
});
