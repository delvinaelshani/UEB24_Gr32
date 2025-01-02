function ticketHandle(product, isIncrease) {
    const ticketInput = document.getElementById(product + 'Input');
    if (!ticketInput) {
        console.error("Element not found: " + product + "Input");
        return;}
    const ticketNewInput = parseInt (ticketInput.value);
    let ticketLastInput = ticketNewInput;
    if (isIncrease == true) {
    ticketLastInput = ticketNewInput + 1;

    } 
     if (isIncrease == false && ticketNewInput > 0) {
    ticketLastInput = ticketNewInput-1;
  
    }
    ticketInput.value = ticketLastInput;
    let ticketNewPrice = 0;
    if (product =='firstClass'){
    ticketNewPrice = ticketLastInput * 150;
    }
    if (product =='economy') {
    ticketNewPrice = ticketLastInput * 100;
    }
  
    subTotal();
}
