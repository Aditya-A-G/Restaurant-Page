import food1 from "../images/food1.png";
import Button from "./Button";

export default function ([dishName, price]) {
  const cardDiv = document.createElement("div");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");

  const foodImg = document.createElement("img");

  const name = document.createElement("p");
  const desc = document.createElement("p");

  cardDiv.classList.add("card");
  rightDiv.classList.add("details");
  foodImg.src = food1;

  name.textContent = `${dishName} ${price}`;
  desc.textContent =
  "Treat yourself to our signature dish, expertly prepared with the freshest ingredients. Every bite is a flavor explosion you won't want to miss.";

  rightDiv.appendChild(name);
  rightDiv.appendChild(desc);
  rightDiv.appendChild(Button());
  leftDiv.appendChild(foodImg);
  cardDiv.appendChild(leftDiv);
  cardDiv.appendChild(rightDiv);
  return cardDiv;
}
