// blog page to home page
let homeBtnElement = findElement("homeBtn");
if (homeBtnElement) {
  homeBtnElement.addEventListener("click", function () {
    window.location.href = "./index.html";
  });
}

//home page to blog page
let blogBtnElement = findElement("blogBtn");
if (blogBtnElement) {
  blogBtnElement.addEventListener("click", function () {
    window.location.href = "./blog.html";
  });
}
