it//Footer
document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()

let tableInfo = 
document.querySelector(`[table-products]`)

function adminInfo() {
    try {
        let item = JSON.parse (
            localStorage.getItem('products')
        )
        item.forEach( (product, i)=> {
            tableInfo.innerHTML +=`
            <tr>
                <td>${item.name}</td>

            <td>
                <img src= "${item.image}" alt="${item.id}>" class="img-fluid w-25"
            </td> 

            <td>${item.genre}</td>

            <td>${item.amount}</td>

            <div>
                <button class="btn btn-second" data-bs-toggle="modal"
                    data-bs-target=#updateProduct> 
                <i class="bi bi-pencil-fill"
                </button>

                <button class="btn btn-primary">
                <i class="bi bi-file-x-fill></i>
                </button>
            </div>

                <div class="modal fade" id="updateProduct" tabindex"-1" 
                aria-labelledby="updateProduct" aria-hidden="true">

                <div class="modal-dialog">
                </div>
                <div class="modal-footer">
            <button type="button" class="btn btn-secondary"
            data-bs-dismiss="modal"> Close
            </button>
            <button type="button" class="btn btn-primary">Save changes
            </button>
            </div>
            </div>
            
            
            `
        }
    )}

}