const dragArea = document.querySelector(".drag-area");
const dragText = document.querySelector(".header");

let button = document.querySelector(".button");
let input = document.querySelector("input");

let file;

button.onclick = () => {
  input.click();
};

// When Browse
input.addEventListener("change", function () {
  file = this.files[0];
  dragArea.classList.add("active");
  displayFile();
});

// When file is inside Drag Area
dragArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dragText.textContent = "Release To Upload";
  dragArea.classList.add("active");
  //   console.log("File is Inside the Drag Area");
});

// When file is outside Drag Area
dragArea.addEventListener("dragleave", (event) => {
  dragText.textContent = "Drag & Drop";
  dragArea.classList.remove("active");
  //   console.log("File is Outside the Drag Area");
});

// When file is dropped inside Drag Area
dragArea.addEventListener("drop", (event) => {
  event.preventDefault();

  file = event.dataTransfer.files[0];
  displayFile();
});

function displayFile() {
  let fileType = file.type;

  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];

  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="">`;
      dragArea.innerHTML = imgTag;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("Invalid Image Type");
    dragArea.classList.remove("active");
  }
  //   console.log("File is Dropped inside the Drag Area");
}
