const orderData =
    JSON.parse(
        localStorage.getItem("lastOrder")
    );



const successContainer =
    document.querySelector("#success-container");



if(successContainer && orderData){


    successContainer.innerHTML = `

    <div class="card shadow-sm text-center p-4">


        <h1 class="text-success mb-3">

            🎉 Order Successful!

        </h1>



        <p class="lead">

            Thank you for your purchase.

        </p>




        <hr>



        <p>

            <strong>

            Order ID:

            </strong>

            ${orderData.id}

        </p>





        <p>

            <strong>

            Total:

            </strong>

            $${orderData.total.toLocaleString("en-US")}

        </p>




        <a

        href="./index.html"

        class="btn btn-primary mt-3">

            Back to Store

        </a>


    </div>

    `;


}