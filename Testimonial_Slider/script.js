const testimonials = [
  {
    name: "Donald Trump",
    photoUrl:
      "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=zrbUynu9yxsQtWT1n5G9-GTyJZs11xhG3apO_e_2x5U=",
    text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
  },
  {
    name: "Peter Gill",
    photoUrl:
      "https://media.istockphoto.com/id/1487465664/photo/portrait-employee-and-asian-woman-with-happiness-selfie-and-confident-entrepreneur-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=wS14CqknuT6mj3bnzopHuMbyhSernzpXIKeKFJhHDro=",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
  },
  {
    name: "Jesus Christ",
    photoUrl:
      "https://images.unsplash.com/photo-1648219889367-d97bee935598?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGplc3VzJTIwY2hyaXN0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
];

let imgEl = document.getElementById("profile_pic");
let details = document.getElementById("details");
let userName = document.getElementById("user_name");

let indx = 0;

updateTestmonials();

function updateTestmonials() {
  const { name, photoUrl, text } = testimonials[indx];
  imgEl.src = photoUrl;
  details.innerText = text;
  userName.innerText = name;
  indx++;
  if (indx === testimonials.length) {
    indx = 0;
  }

  setTimeout(() => {
    updateTestmonials();
  }, 2000);
}
