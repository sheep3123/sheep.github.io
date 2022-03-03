document.addEventListener("DOMContentLoaded", function(event) {
   let targetImage = document.querySelector("#smart-image");
   if (targetImage.classList.contains("small")) {
    targetImage.addEventListener("click", function() {
    alert("点击了图片");
   targetImage.classList.remove("small");
});
});
} else {
    targetImage.addEventListener("click", function() {
    alert("点击了图片");
   targetImage.classList.add("small");
});
});
}
