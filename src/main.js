"use strict";

const itemData = {
  item1: {
    name: "Finalista 01",
    image: "https://picsum.photos/seed/animal/250/200",
    photographer: "John Doe",
    description:
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    score: 42,
  },
  item2: {
    name: "Finalista 2",
    image: "https://picsum.photos/seed/beach/250/200",
    photographer: "Jane Smith",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    score: 84,
  },
  item3: {
    name: "Finalista 3",
    image: "https://picsum.photos/seed/mountain/250/200",
    photographer: "Alice Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    score: 36,
  },
};

const select = document.getElementById("items");
const defaultOption = document.createElement("option");
defaultOption.value = "-1";
defaultOption.textContent = "Seleccione un valor";
defaultOption.disabled = true;
defaultOption.selected = true;
defaultOption.hidden = true;
select.appendChild(defaultOption);

// Recorre las entradas del objeto itemData
Object.entries(itemData).forEach(([key, item]) => {
  const option = document.createElement("option");
  option.value = key; // Usamos la clave (item1, item2, etc.) como valor
  option.textContent = item.name; // Mostramos el nombre
  select.appendChild(option);
});

select.addEventListener("change", (event) => {
  const selectedKey = event.target.value; // Obtenemos la clave del item seleccionado
  const item = itemData[selectedKey]; // Accedemos al objeto del item seleccionado

  // Actualizamos el contenido de los elementos HTML con los datos del item seleccionado
  document.getElementById("displayImage").src = item.image;
  document.getElementById("photographer").value = item.photographer;
  document.getElementById("description").value = item.description;
  document.getElementById("score").value = item.score;
});

const increaseBtn = document.getElementById("increaseScore");
const decreaseBtn = document.getElementById("decreaseScore");

increaseBtn.addEventListener("click", () => {
  const selectedKey = select.value;
  if (selectedKey) {
    itemData[selectedKey].score += 1; // Incrementa el score
    document.getElementById("score").value = itemData[selectedKey].score; // Actualiza el campo de score
  }
});

decreaseBtn.addEventListener("click", () => {
  const selectedKey = select.value;
  if (selectedKey) {
    itemData[selectedKey].score -= 1;
    document.getElementById("score").value = itemData[selectedKey].score;
  }
});
