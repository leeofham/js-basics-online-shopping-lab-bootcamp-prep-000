var cart = [];

function getCart() {
 return cart;
};

function setCart(c) {
  cart = c;
  return cart;
};


function addToCart(item) {
  var item = newItem(item);
  getCart().push(item);
  return `${item.itemName} has been added to your cart.`;
};

function newItem(itemName){
  return {
    itemName: itemName,
    itemPrice: Math.floor(Math.random(1, 100) * (100 - 1 + 1)) + 1
 };
};

function viewCart() {
var inCart = "In your cart, you have ";
  if (getCart().length === 0){
    return "Your shopping cart is empty."
  }

  if (getCart().length >= 1){
    inCart += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }

  if (getCart().length >= 2) {
    var secondCart = '';
    for (let i = 1; i<getCart().length-1; i++) {
      secondCart += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }

    var lastCart = `, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`

    secondCart += lastCart;
    inCart += secondCart;
  }
return `${inCart}.`
}

function total() {
  var newTotal = 0
  for (let i = 0; i < getCart().length; i++){
    newTotal += getCart().itemPrice[i];
  }
  return newTotal;
}

function removeFromCart(item) {
  for (let i = 0; i<getCart().length; i++){
    var removed = getCart().itemName[i]
  }
  if (removed.itemName != item){
    return "That item is not in your cart."
  }
  else{
    remove.splice(i, 1)
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
2
