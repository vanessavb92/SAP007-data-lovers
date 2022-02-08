
const validator = {
  valid() {
    // e.preventDefault();

    let cardNumber = document.getElementsByName("cardNumber");

    let cardNumberValue = cardNumber.value;
    console.log(cardNumberValue);
    console.log(typeof cardNumberValue);

  }
} 