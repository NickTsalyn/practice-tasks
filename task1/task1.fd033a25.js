var images=document.querySelectorAll(".thumbnail"),mainImg=document.querySelector("#mainImage");images.forEach((function(e){e.addEventListener("click",(function(t){var c=e.getAttribute("src");mainImg.setAttribute("src",c),images.forEach((function(e){e.classList.remove("selected")})),e.classList.add("selected")}))}));
//# sourceMappingURL=task1.fd033a25.js.map
