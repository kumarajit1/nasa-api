function LoadPhotos(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
         for(var item of data.photos)
         {
             var div = document.createElement("div");
             div.className = "card m-2 p-2";
             div.style.width = "400px"
             div.innerHTML = `
              <div class="d-flex">
                <div>
                <img src=${item.img_src} height="150" class="card-img-top">
                </div>
                <div class="justify-content-between">
                    <dl>
                        <dt>Camera Id</dt>
                        <dd> ${item.id}</dd>
                        <dt>Camera Name</dt>
                        <dd>${item.camera.full_name}</dd>
                        <dt>Rover Name</dt>
                        <dd>${item.rover.name}</dd>
                    </dl>
                </div>
              </div>
             `;
             document.getElementById("photosContainer").appendChild(div);
         }
    })
}
function bodyload(){
    LoadPhotos();
}