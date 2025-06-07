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

for (item of products) {
  document.getElementById("result").innerHTML += `
    <div>
        <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.image}">
            <div class="card-body">
                <h5 class="card-title fs-10">${item.name}</h5>
                <p class="card-text fs-4">${item.description}</p>
                <p class="card-text p-2">\u26A0 Priority level: <span>${item.PriorityLevel}</span> </p>
                <p class="card-text p-2">\u{1F4C5} Deadline: <span>${item.deadline} </span> </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
</div>



    
    `;
}
