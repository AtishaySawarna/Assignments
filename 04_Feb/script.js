

document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter")
    apiRequest();
});

document.querySelector("#search").addEventListener("click", () => {
    apiRequest();
});

apiRequest = () => {

  document.querySelector("#grid").textContent = "";

  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

  fetch(url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      loadImages(data);
   })

   .catch(error => console.log(error));   
}

loadImages = (data) => {
  for(let i = 0;i < data.results.length;i++){
    let image = document.createElement("div");
    image.className = "img";
    image.addEventListener('click', imageClicked);
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    document.querySelector("#grid").appendChild(image);
  }
  function imageClicked(event) {
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.remove("d-none");
    
    var img_r = img_prev_r.children[0];
    img_r.src = event.target.backgroundImage.url;
  }
  
  getBack.addEventListener('click',cross);
  
  function cross(){
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.add("d-none");
  
  }
  
}



