let cart = JSON.parse(
    localStorage.getItem("cart")
) || [];




// Save cart to localStorage

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}






// Add product

function addToCart(product) {


    const existingProduct =
        cart.find(
            item =>
                item.id === product.id
        );



    if (existingProduct) {


        existingProduct.quantity++;


    } else {


        cart.push({

            ...product,

            quantity: 1

        });


    }



    saveCart();

    renderCart();


}







// Remove product

function removeFromCart(id) {


    cart =
        cart.filter(
            item =>
                item.id !== id
        );



    saveCart();

    renderCart();


}







// Increase quantity

function increaseQuantity(id) {


    const product =
        cart.find(
            item =>
                item.id === id
        );



    if (product) {

        product.quantity++;

    }



    saveCart();

    renderCart();


}








// Decrease quantity

function decreaseQuantity(id) {


    const product =
        cart.find(
            item =>
                item.id === id
        );



    if (!product) return;





    if (product.quantity > 1) {


        product.quantity--;


    } else {


        removeFromCart(id);

        return;


    }



    saveCart();

    renderCart();


}









// Render cart

function renderCart() {



    const cartItems =
        document.querySelector("#cart-items");



    const totalElement =
        document.querySelector("#total");



    const cartCount =
        document.querySelector("#cart-count");





    if (!cartItems) return;




    cartItems.innerHTML = "";



    let total = 0;




    cart.forEach(item => {



        const itemTotal =
            item.price * item.quantity;



        total += itemTotal;





        cartItems.innerHTML += `


        <li class="list-group-item">


            <div class="d-flex justify-content-between align-items-center">


                <span>

                    ${item.title}

                    x${item.quantity}

                </span>




                <span class="fw-bold">


                    $${itemTotal.toLocaleString("en-US")}


                </span>



            </div>





            <div class="mt-2">


                <button

                class="btn btn-sm btn-outline-success increase"

                data-id="${item.id}">

                    +

                </button>





                <span class="mx-2">

                    ${item.quantity}

                </span>





                <button

                class="btn btn-sm btn-outline-danger decrease"

                data-id="${item.id}">

                    -

                </button>





                <button

                class="btn btn-sm btn-danger float-end remove"

                data-id="${item.id}">

                    Remove

                </button>


            </div>



        </li>


        `;


    });







    if(totalElement){


        totalElement.textContent =
            total.toLocaleString("en-US");


    }







    if(cartCount){


        cartCount.textContent =

            cart.reduce(

                (sum,item) =>
                    sum + item.quantity,

                0

            );


    }



}
// Clear cart

function clearCart() {

    cart.length = 0;

    saveCart();

    renderCart();

}







export {

    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    renderCart,
    clearCart

};