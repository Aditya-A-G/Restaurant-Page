import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

NavBar();
// Home();
// Menu()
   Contact()
const nav = document.querySelectorAll(".nav");

nav[0].addEventListener("click", Home);
nav[1].addEventListener("click", Menu);
nav[2].addEventListener("click", Contact);

