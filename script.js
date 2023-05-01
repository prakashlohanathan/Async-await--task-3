var container = document.createElement("div");
 container.className = "container";
 var row = document.createElement("div");
 row.classList.add("row", "m-3");
 container.append(row);



// Function to get a random card from the deck
async function getRandomCard() {
  try {
    var response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    var data = await response.json();
    var cardId = data.deck_id;

        
    var cardResponse = await fetch(`https://deckofcardsapi.com/api/deck/${cardId}/draw/?count=2`);
    var cardData = await cardResponse.json();
    var cardImage = cardData.cards[0].images.svg;
    //console.log(cardImage);
    row.innerHTML +=`<div class="col-md-1">
    <div class="card border-primary mb-1 " style="width: 18rem;">
    <h4 align = center color = blue class="card-title1">deck_id:${cardId}</h4>
    <img src="${cardImage}" class="card-img-top" alt="Deck of Cards">
</div>
</div>`
document.body.append(container);

   
  } catch (error) {
    console.error("Error:", error);
    alert("Reload the page and try again");
  }
}

// Call the function to get a random card
getRandomCard();

