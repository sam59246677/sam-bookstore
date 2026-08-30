
import { cart, clearCart } from "./cart.js";


// Elements

const checkoutBtn =
    document.querySelector("#checkout-btn");


const checkoutModal =
    new bootstrap.Modal(
        document.querySelector("#checkoutModal")
    );


const checkoutForm =
    document.querySelector("#checkout-form");


const reviewBtn =
    document.querySelector("#review-btn");


const backBtn =
    document.querySelector("#back-btn");


const stepInfo =
    document.querySelector("#step-info");


const stepReview =
    document.querySelector("#step-review");


const reviewItems =
    document.querySelector("#review-items");


const reviewTotal =
    document.querySelector("#review-total");



const customerName =
    document.querySelector("#customer-name");


const customerPhone =
    document.querySelector("#customer-phone");


const customerAddress =
    document.querySelector("#customer-address");




// Store customer information

let customer = {};




// Open checkout modal

checkoutBtn.addEventListener(
    "click",
    () => {


        if (cart.length === 0) {

            alert(
                "Your cart is empty"
            );

            return;

        }


        checkoutModal.show();


    }
);






// Go to review step

reviewBtn.addEventListener(
    "click",
    () => {


        const name =
            customerName.value.trim();


        const phone =
            customerPhone.value.trim();


        const address =
            customerAddress.value.trim();



        if (
            !name ||
            !phone ||
            !address
        ) {

            alert(
                "Please complete all fields"
            );

            return;

        }




        customer = {

            name,
            phone,
            address

        };



        renderReview();



        stepInfo.style.display =
            "none";


        stepReview.style.display =
            "block";


    }
);








// Render order summary

function renderReview() {


    reviewItems.innerHTML = "";


    let total = 0;



    cart.forEach(item => {


        const itemTotal =
            item.price * item.quantity;



        total += itemTotal;



        reviewItems.innerHTML += `

        <li class="list-group-item d-flex justify-content-between align-items-center">


            <span>

                ${item.title}

                x

                ${item.quantity}

            </span>



            <span>

                ${itemTotal.toLocaleString()}

                $

            </span>


        </li>

        `;


    });



    reviewTotal.textContent =
        total.toLocaleString();


}








// Back to information step

backBtn.addEventListener(
    "click",
    () => {


        stepReview.style.display =
            "none";


        stepInfo.style.display =
            "block";


    }
);









// Submit order

checkoutForm.addEventListener(
    "submit",
    (event) => {


        event.preventDefault();



        const order = {


            id:
                Date.now(),


            customer,


            items: cart,


            total:
                cart.reduce(
                    (sum, item) =>
                        sum +
                        item.price *
                        item.quantity,
                    0
                ),



            createdAt:
                new Date()
                .toLocaleString(
                    "en-US"
                )


        };





        // Save last order

        localStorage.setItem(

            "lastOrder",

            JSON.stringify(order)

        );






        // Clear cart

    clearCart();




window.location.href =
    "./success.html";



    }
);