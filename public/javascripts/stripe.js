var stripe = Stripe('pk_test_i0mAS5A7uVZDTpDWkbNkAIt7');
var elements = stripe.elements();
//add an instance of the card Element
var form = document.getElementById('payment-form');
$(".btn").hover(
  function () {
    $(this).toggleClass('zoom');
  }
  );
var card = elements.create('card', {
    hidePostalCode: true
});
//add an instance of the card Element to the card-element div
card.mount('#card-element');

//elements validating input as it is typed. If there was an error, display the error in the card-errors div.
card.addEventListener('change', function (event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) { displayError.textContent = event.error.message }
    else { displayError.textContent = '' }
})
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var extraDetails = {
        name: form.querySelector('input[name=cardholder]').value
    };
    stripe.createToken(card, extraDetails) //returns a promise that resolves with result object.
        .then(function (result) {
            if (result.error) {
                //let user know there was an error
                var error = document.getElementById('card-errors');
                error.textContent = result.error.message;
            }
            else {
                //send token to server
                stripeTokenHandler(result.token);
            }
        })
});
//submit token data to the server
function stripeTokenHandler(token) {
    var hidden = document.createElement('input');
    hidden.setAttribute('type', 'hidden');
    hidden.setAttribute('name', 'stripeToken');
    hidden.setAttribute('value', token.id);
    form.appendChild(hidden);
    form.submit();
}