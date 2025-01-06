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
function subTotal() {
    const firstclassTicketCount=ticketInput('firstClass');
    const economyTicketCount = ticketInput('economy');
    const subTotal = firstclassTicketCount * 150 + economyTicketCount*100;
    document.getElementById('subTotal').innerText=subTotal;
    const tax = Math.round (subTotal * 0.1);
    document.getElementById('tax') .innerText = tax;
    const grandTotal = subTotal + tax;
    document.getElementById ('total') .innerText = grandTotal;
}
function ticketInput (product) {
    const ticketInput =document.getElementById (product +'Input')
    const ticketCount = parseInt (ticketInput.value);
    return ticketCount;
}

function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    // Play audio when dropping an image
    playAudio();
  }

  function playAudio() {
    var audio = new Audio('Cash Register (Kaching) - Sound Effect (HD).mp3'); 
    audio.play();
  }
