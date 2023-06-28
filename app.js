(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();


document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Create an anchor element
    var link = document.createElement("a");

    link.href = "path/to/file.pdf"; // Replace with the actual file URL
    // Set the file name
    link.download = ".Profile.pdf"; // Replace with the desired file name

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Simulate a click on the anchor element
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
  });