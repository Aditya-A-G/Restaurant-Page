import food from "../images/bowl.png";
import offer from "../images/offer.svg";

export default function () {
  const content = document.querySelector("#content");
  if (content.hasChildNodes()) {
    content.removeChild(content.children[0]);
  }

  const heroDiv = document.createElement("div");
  const infoDiv = document.createElement("div");
  const heading = document.createElement("h1");
  const para = document.createElement("p");
  const button = document.createElement("button");
  const media = document.createElement("div");
  const bowlImg = document.createElement("img");
  const offerImg = document.createElement("img");

  heroDiv.classList.add("hero");
  infoDiv.classList.add("info");
  media.classList.add("media");
  bowlImg.classList.add("bowl");
  offerImg.classList.add("offer");

  heading.textContent = "Adding flavours to your meal!";
  para.textContent =
    "Explore our healthy meal delivery options. Create your own recipe by adding flavours to them!";
  button.textContent = "Order Now";

  bowlImg.src = food;
  offerImg.src = offer;

  infoDiv.appendChild(heading);
  infoDiv.appendChild(para);
  infoDiv.appendChild(button);

  media.appendChild(bowlImg);
  media.appendChild(offerImg);

  heroDiv.appendChild(infoDiv);
  heroDiv.appendChild(media);

  content.appendChild(heroDiv);
}
