let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading ", { origin: 'top' });
ScrollReveal().reveal(
  ".education-container,.projects-box, .contact form,.home-img",
  { origin: 'bottom' }
);
ScrollReveal().reveal(
  ".home-content h1, .about-img",
  { origin: 'left' }
);
ScrollReveal().reveal(
  ".home-content p, .about-content",
  { origin: 'right' }
);



function downloadPDF(){
    var pdfUrl = "images/cv2.pdf";

    // Create a temporary <a> element
    var link = document.createElement("a");
    link.href = pdfUrl;
    
    // Set the download attribute and filename
    link.setAttribute("download", "document.pdf");
    
    // Simulate a click on the link to start the download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
}

