//P174
function freeTieClip_old(cart) {
  let hasTie = false;
  let hasTieClip = false;

  let i = 0;
  for (; i < cart.length; i++) {
    if (item.name === "tie") {
      hasTie = true;
    }
    if (item.name === "tie clip") {
      hasTieClip = true;
    }
  }
  if( hasTie && !hasTieClip ){
    let tieClip = make_item("tie clip", 0)
    return add_item(cart, tieClip)
  }
}

//P176 step end
function freeTieClip(cart) {
  let hasTie = isInCart(cart, "tie");
  let hasTieClip = isInCart(cart, "tie clip");

  if (hasTie && !hasTieClip) {
    let tieClip = make_cart_item("tie clip", 0);
    return add_item(cart, tieClip);
  }
  return cart;
}



function isInCart_old(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (item.name === name) {
      return true;
    }
  }
  return false;
}



function isInCart(cart, name) {
  return cart.find(r=>r.name === name)
}

function freeTieClip(cart) {
  let hasTie = isInCart(cart, "tie");
  let hasTieClip = isInCart(cart, "tie clip");
  
  if( hasTie && hasTieClip ){
    let tieClip = make_item("tie clip", 0)
    return add_item(cart, tieClip)
  }
  return cart
}

module.exports = { ...module.exports, freeTieClip };
