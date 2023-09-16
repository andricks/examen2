// Obtén una referencia al botón "Cards"
var cardsButton = document.getElementById("option-cards");

// Agrega un evento de clic al botón "Cards"
cardsButton.addEventListener("click", function() {
  // Obtén una referencia al contenedor de contenido
  var contentContainer = document.getElementById("content");

  // Crea tarjetas y agrégalas a las columnas
  for (var i = 0; i < 2; i++) {
    var card = document.createElement("div");
    card.className = "cards";
    
    var title = document.createElement("h2");
    title.textContent = "Título de la tarjeta " + (i + 1);
    
    var image = document.createElement("img");
    image.src = "imagen" + (i + 1) + ".jpg"; // Ajusta las rutas de tus imágenes
    
    var description = document.createElement("p");
    description.textContent = "Descripción de la tarjeta " + (i + 1);
    
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    
    // Agrega la tarjeta a una de las tres columnas de manera intercalada
    var columnNumber = (i % 3) + 1;
    var column = document.getElementById("column" + columnNumber);
    column.appendChild(cards);
  }
});

