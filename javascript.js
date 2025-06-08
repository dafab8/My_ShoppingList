let products = [
  {
    name: "banana",
    description: "buy 4 banana",
    image:
      "https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.05.27",
  },

  {
    name: "apple",
    description: "buy 5 apples",
    image:
      "https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.07.31",
  },

  {
    name: "dates",
    description: "buy 1 kg of dates in the supermarket",
    image:
      "https://cdn.pixabay.com/photo/2021/09/19/19/18/dates-6638825_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.05.30",
  },

  {
    name: "garlic",
    description: "need to buy garlic",
    image:
      "https://cdn.pixabay.com/photo/2018/05/21/21/23/garlic-3419544_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.06.07",
  },

  {
    name: "carrots",
    description: "go buy carrots",
    image:
      "https://cdn.pixabay.com/photo/2016/08/26/21/16/carrot-juice-1623157_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.06.15",
  },

  {
    name: "salad",
    description: "salad for dinner",
    image:
      "https://cdn.pixabay.com/photo/2015/12/16/09/40/salad-1095649_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.06.20",
  },

  {
    name: "pasta",
    description: "500 gramms of pasta ",
    image: "https://cdn.pixabay.com/photo/2010/12/13/10/00/pasta-2093_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.06.29",
  },

  {
    name: "Milk",
    description: "2l of milk are needed",
    image:
      "https://cdn.pixabay.com/photo/2014/11/05/16/35/milk-518067_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.07.01",
  },

  {
    name: "cake",
    description: "cake for friends birthday",
    image:
      "https://cdn.pixabay.com/photo/2015/02/17/09/45/wedding-cake-639181_1280.jpg",
    PriorityLevel: 0,
    deadline: "2025.07.20",
  },
];

function showCards() {
  document.getElementById("result").innerHTML = "";

  products.forEach((item, index) => {
    document.getElementById("result").innerHTML += `
    <div>
        <div class="col mb-4">
        <div class="card h-100">
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

//Sort button
document.getElementById("sortBtn").addEventListener("click", function () {
  products.sort((a, b) => {
    if (a.deadline < b.deadline) return -1;
    if (a.deadline > b.deadline) return 1;
    return 0;
  });
  console.log(products);
});
