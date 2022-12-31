import Card from "./Card";

export default function () {
  const content = document.querySelector("#content");
  if (content.hasChildNodes()) {
    content.removeChild(content.children[0]);
  }

  const menu = document.createElement("div");

  const arr = [
    ["Burger", "5$"],
    ["Pizza", "10$"],
    ["Pasta", "7$"],
    ["Noodles", "9$"],
  ];
  arr.forEach((element) => {
    menu.appendChild(Card(element));
  });

  content.appendChild(menu);
}
