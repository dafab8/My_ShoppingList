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
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and 
                make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
</div>



    
    `;
}
