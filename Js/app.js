import products from "./products.js";


import {

    addToCart,
    renderCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart

} from "./cart.js";


// Load checkout logic

import "./checkout.js";




// Product container

const productList =
    document.querySelector("#product-list");







// Render products

function renderProducts() {


    productList.innerHTML = products.map(product => {


        return `

        <div class="col">


            <div class="card h-100 shadow-sm">


                <img

                src="${product.image}"

                class="card-img-top"

                alt="${product.title}">





                <div class="card-body d-flex flex-column">





                    <h3 class="card-title h6 fw-bold">

                        ${product.title}

                    </h3>





                    <p class="text-muted small">

                        By ${product.author}

                    </p>





                    <p class="fw-bold">


                        $${product.price.toLocaleString("en-US")}


                    </p>





                    <button

                    class="btn btn-success mt-auto add-cart"

                    data-id="${product.id}">


                        🛒 Add to Cart


                    </button>





                </div>



            </div>


        </div>


        `;


    }).join("");

}





// Initial render


renderProducts();


renderCart();









// Global click handler


document.addEventListener(
    "click",
    (event) => {





        // Add product to cart


        if (
            event.target.classList.contains(
                "add-cart"
            )
        ) {



            const id =
                Number(
                    event.target.dataset.id
                );



            const product =
                products.find(
                    item =>
                        item.id === id
                );



            if(product){

                addToCart(product);

            }



        }









        // Increase quantity


        if (
            event.target.classList.contains(
                "increase"
            )
        ) {


            const id =
                Number(
                    event.target.dataset.id
                );


            increaseQuantity(id);


        }









        // Decrease quantity


        if (
            event.target.classList.contains(
                "decrease"
            )
        ) {



            const id =
                Number(
                    event.target.dataset.id
                );


            decreaseQuantity(id);


        }









        // Remove item


        if (
            event.target.classList.contains(
                "remove"
            )
        ) {



            const id =
                Number(
                    event.target.dataset.id
                );



            removeFromCart(id);



        }




    }
);