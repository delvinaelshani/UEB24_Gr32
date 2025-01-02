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
