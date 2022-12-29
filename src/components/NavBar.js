import "../styles.css";
import Logo from "../images/logo.png";
import Svg from "../images/profile.svg";

export default function () {

  const headerDiv = document.createElement("div");

  const navDiv = document.createElement("div");
  const ul = document.createElement("ul");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  headerDiv.classList.add("header");

  const logoImg = document.createElement("img");
  const profileSvg = document.createElement("img");

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  home.classList.add("nav");
  menu.classList.add("nav");
  contact.classList.add("nav");

  logoImg.src = Logo;

  profileSvg.src = Svg;
  profileSvg.classList.add("profile");

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  navDiv.appendChild(ul);

  headerDiv.appendChild(navDiv);
  headerDiv.appendChild(logoImg);
  headerDiv.appendChild(profileSvg);

    document.body.insertBefore(headerDiv,document.body.firstChild);
}
