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
  const result = document.getElementById("result");
  result.innerHTML = "";

  products.forEach((item, index) => {
    // Dynamisch Button-Farbe setzen
    let buttonClass = "";
    if (item.PriorityLevel <= 1) {
      buttonClass = "btn-success";
    } else if (item.PriorityLevel <= 3) {
      buttonClass = "btn-warning";
    } else {
      buttonClass = "btn-danger";
    }

    // HTML für eine Card hinzufügen
    result.innerHTML += `
      <div class="col mb-4">
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
            <div>
              <div class="card-text p-2 d-flex align-items-center gap-2">
                <span>⚠️ Priority level:</span>
                <button class="btn ${buttonClass} PriorityBtn" data-index="${index}">
                  ${item.PriorityLevel}
                </button>
              </div>
              <p class="card-text p-2">📅 Deadline: <span>${item.deadline}</span></p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  PriorityCard(); // Events setzen
}

// 3. Funktion zum Hinzufügen der Event-Listener
function PriorityCard() {
  const buttons = document.querySelectorAll(".PriorityBtn");

  buttons.forEach((btn) => {
    const index = parseInt(btn.getAttribute("data-index"));

    btn.addEventListener("click", function () {
      if (products[index].PriorityLevel < 5) {
        products[index].PriorityLevel++;
        products.sort((a, b) => b.PriorityLevel - a.PriorityLevel);
        showCards(); // neu rendern
      }
    });
  });
}

// 4. Initialisieren
products.sort((a, b) => b.PriorityLevel - a.PriorityLevel);
showCards();
