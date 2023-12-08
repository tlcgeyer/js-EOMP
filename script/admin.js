document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()

let manga = JSON.parse(localStorage.getItem('products') ) 
let tableBod = document.querySelector('#mangaTableBod');


function displayProducts() {
    tableBod.innerHTML = "";
    try {
        if(manga) {
            manga.forEach((item, index)=> {
                tableBod.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.genre}</td>
                    <td><img class="img-fluid w-25" src="${item.image}" alt="${item.name}" </td>
                    <td>${item.about}</td>
                    <td>R${item.amount},00</td>

                    <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editManga${item.id}">
                    <i class="bi bi-pen"></i>
                    </button>
                    <!-- Modal -->
                    <div class="modal fade" id="editManga${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="Kop">EDIT MANGA</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!--for the goed-->
                   <div class="modal-body">
                   <form>
                   <br><br>
                   <label>Name</label>
                   <br> <br>
                   <input type="text" id="deName${item.id}" placeholder="Enter the mangas name..." value="${
                    item.id 
                  }">
                   <label>Genre</label>
                   <br><br>
                   <input type="text" id="deGenre${item.id}" placeholder="Enter the genres name..." value="${
                     item.id
                   }">
                   <br><br>
                   <label>Image</label>
                   <br><br>
                   <input type="text" id="deImage${item.id}" placeholder="Enter the images..." value="${
                     item.image
                   }">
                   <br><br>
                   <label>About</label>
                   <br><br>
                   <input type="text" id="deAbout${item.id}" placeholder="Enter the manga's about..." value="${
                     item.about
                   }">
                   <br><br>
                   <label>Amount</label>
                   <br><br>
                   <input type="text" id="deAmount${item.id}" placeholder="Enter the manga's amount" value="${
                     item.amount
                   }">
                   <br><br>
                 </form>


                   </div>
                 <div class="modal-footer">
            
               <button type="button" class="btn btn-warning onclick='new EditManga(${JSON.stringify(item)},
               ${JSON.stringify(index)})'"><i class="bi bi-floppy2"></i></button>
              </div>
              </div>
              </div>
              </div>
               <!--delete the goed-->
             <button id="btnD" value='${index} onclick='deleteManga(${JSON.stringify(index)})'><i class="bi bi-trash"></i></button>
              </td>
               
             
              </tr>
               `;
                
            });
        }else {
            mangaTable.innerHTML = `<div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>`;
        }}catch (e) {

        }
        
        
}
displayProducts();

//deleting the goed
function deleteManga(item) {
    manga.splice(item,1);
    localStorage.setItem("products", JSON.stringify(manga));
    displayProducts();
}



  let btnAddManga = document.querySelector("#btn");
  function addNewManga() {
    let id = manga.map(item => item.id).at(-1) + 1 || 1;
    let name = document.getElementById("newName").value;
    let image = document.getElementById("newImage").value;
    let genre = document.getElementById("newGenre").value;
    let amount = document.getElementById("newAmount").value;
    manga.push({ id, name, image, genre, amount });
    localStorage.setItem("products", JSON.stringify(manga));
    displayProducts();
  }
  btnAddManga.addEventListener("click", addNewManga);
  function UpdateManga(item, index) {
      this.id = item.id
      this.name = document.getElementById("itemName"+item.id).value
      this.image = document.getElementById("itemImage"+item.id).value
      this.genre = document.getElementById("itemGenre"+item.id).value
      this.amount = +document.getElementById("itemAmount"+item.id).value
      products[index] = Object.assign({}, this);
      localStorage.setItem("products", JSON.stringify(manga));
      displayProducts();
      location.reload()
  }