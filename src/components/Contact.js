export default function () {
  const content = document.querySelector("#content");
  if (content.hasChildNodes()) {
    content.removeChild(content.children[0]);
  }

  // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30774143.9666594!2d60.992796590375484!3d19.68666406285818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1672495923597!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  const contact = document.createElement("div");
  const headingContainer = document.createElement("div");
  const heading = document.createElement("h1");
  const addr = document.createElement("p");
  const phoneNo = document.createElement("p");
  const map = document.createElement("p");
  const iFrame = document.createElement("iframe");

  contact.classList.add("contact");
  headingContainer.classList.add("heading");

  heading.textContent = "Contact Us";
  addr.textContent = "Address:";
  phoneNo.textContent = "Contact no:";
  map.textContent = "Map: ";
  iFrame.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30774143.9666594!2d60.992796590375484!3d19.68666406285818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1672495923597!5m2!1sen!2sin";
  iFrame.loading = "lazy";

  headingContainer.appendChild(heading);
  contact.appendChild(headingContainer);
  contact.appendChild(addr);
  contact.appendChild(phoneNo);
  contact.appendChild(map)
  contact.appendChild(iFrame);
  content.appendChild(contact);
}
