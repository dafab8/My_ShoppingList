let products = [
  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },

  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },

  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },

  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },

  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },

  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },

  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },

  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },

  {
    name: "Take the dog for a walk",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image:
      "https://cdn.pixabay.com/photo/2017/06/21/22/32/planner-2428871_1280.jpg",
    PriorityLevel: 0,
    deadline: "27.01.2022",
  },
];

function showCards() {
  document.getElementById("result").innerHTML = "";

  products.forEach((item, index) => {
    document.getElementById("result").innerHTML += `
    <div>
        <div class="card my-5">
            <img src="${item.image}" class="card-img-top" alt="${item.image}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <div class="card-text p-2 d-flex">
                  <span> \u26A0 Priority level: </span>
                  <button class="btn btn-success PriorityBtn">${item.PriorityLevel} </button>
                </div>
                 <p class="card-text p-2"> \u{1F4C5} Deadline: <span>${item.deadline} </span> </p>
            </div>
      </div>
    `;
  });
}
showCards();

function PriorityCard() {
  let PriorityBtn = document.querySelectorAll(".PriorityBtn");

  PriorityBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (products[index].PriorityLevel < 5) {
        products[index].PriorityLevel++;
        console.log(products[index]);
        btn.innerText = products[index].PriorityLevel;

        if (products[index].PriorityLevel <= 1) {
          btn.className = "btn btn-success PriorityBtn";
        } else if (products[index].PriorityLevel <= 3) {
          btn.className = "btn btn-warning PriorityBtn";
        } else {
          btn.className = "btn btn-danger PriorityBtn";
        }
      }
    });
  });
}

PriorityCard();

//Sort bttn
document.getElementById("sortBtn").addEventListener("click", function () {
  products.sort((a, b) => a.PriorityLevel - b.PriorityLevel);
  console.log(products);
});
