//  made by Ali Ratel 

// local reviews data
const reviews = [
    {
      id: 1,
      name: "Jack Nicholson",
      job: "American actor",
      img:
        "https://www.hollywoodreporter.com/wp-content/uploads/2010/12/nicholson_2010_a_p.jpg?w=681&h=383&crop=1",
      text:
        "John Joseph Nicholson, better known as, was born on April 22, 1937, in New York City, in the state of New York, in the United States of America. He is an American Actor, Director, and Producer; His film career spanned nearly 60 years",
    },
    {
      id: 2,
      name: "Al Pacino",
      job: "American actor and filmmaker",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/170px-Al_Pacino.jpg",
      text:
        "Alfredo James 'Al' Pacino established himself as a film actor during one of cinema's most vibrant decades, the 1970s, and became an enduring and iconic figure in the American film world.He was born on April 25, 1940 in Manhattan, New York City, to Italian-American parents",
    },
    {
      id: 3,
      name: "Kate Winslet",
      job: "English actress",
      img:
        "data:image/jpeg;base64,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",
      text:
        "Kate Elizabeth Winslet was born on October 5, 1975 in Reading, Berkshire, is an English actress and singer. Winslet is known for her work in historical dramas, often depicting women suffering from anxiety.",
    },
    {
      id: 4,
      name: "Denzel Washington",
      job: "American actor, director, and producer",
      img:
        "https://ca-times.brightspotcdn.com/dims4/default/73a9b2c/2147483647/strip/true/crop/3712x5455+0+0/resize/2000x2939!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F61%2F9f%2Fb82dcede420e9c80a92d19b5eea2%2F918889-env-0225-denzel-washington-cover-photo-cmh-02.jpg",
      text:
        "Denzel Washington is one of the biggest actors in Hollywood and is also serious in their tone, yet he has talent and consistency in all of his drama, suspense and comedic roles. Recipient of the Cecil B. Prize. DeMille Lifetime Achievement at the 73rd Golden Globe Awards.",
    },
    {
      id: 5,
      name: "Steve Carell",
      job: "American actor and comedian",
      img:
        "https://www.hollywoodreporter.com/wp-content/uploads/2021/10/GettyImages-1052054178-H-2021.jpg",
      text:
        "Stephen John 'Steve' Carle is an American comedian, director, producer and writer. After five years working on The Daily Show with Jon Stewart, Steve found an even greater opportunity by playing Michael Scott on the American version of The Office, where he also worked some times as a writer.",
    },
];
// select items
//
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});