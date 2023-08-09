const DeepCopy = require("./DeepCopy");

let shopping_cart = [];
let shopping_cart_total = 0;

add_item_to_cart("test1", 5);
add_item_to_cart("test2", 5);
add_item_to_cart("test3", 10);
add_item_to_cart("test4", 2);
console.log("shopping_cart", shopping_cart);
console.log("shopping_cart_total", shopping_cart_total);

//P119 전체 코드를 봅시다
function add_item_to_cart(name, price) {
  //T:액션
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  //calc_cart_total(shopping_cart);

  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);

  shopping_cart = black_friday_promotion_safe(shopping_cart);
}

//P153
function black_friday_promotion_safe(cart) {
  let cart_copy = deepCopy(cart);
  black_friday_promotion(cart_copy);
  return deepCopy(cart_copy);
}

function black_friday_promotion(cart) {
  console.log("정의 안된 함수 = black_friday_promotion");
}

/* 삭제 P129
function calc_cart_total(cart){
    let total = calc_total(cart);
    set_cart_total_dom(total);
    update_shipping_icons(cart);
    update_tax_dom(total);
    shopping_cart_total = total
    console.log('calc_cart_total - shopping_cart_total', shopping_cart_total)
} */

//P138 refactor
function update_shipping_icons(cart) {
  let buy_buttons = get_buy_buttons_dom();
  buy_buttons?.forEach((button) => {
    let item = button.item;

    let hasFreeShipping = gets_free_shipping_with_item(cart, item);
    set_free_shipping_icon(button, hasFreeShipping);
  });
}

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

//===============================
//책엔 미선언됨
function make_item(name, price) {
  return make_cart_item(name, price);
}
//P135 추가
function make_cart_item(name, price) {
  return {
    name,
    price,
  };
}
function add_item(cart, item) {
  return add_element_last(cart, item);
}

function calc_total(cart) {
  let total = 0;
  cart?.forEach((item) => {
    total += item.price;
  });
  return total;
}

function gets_free_shipping_with_item(cart, item) {
  let new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}
function set_free_shipping_icon(button, isShow) {
  if (isShow) {
    button.show_free_shipping_icon();
  } else {
    button.hide_free_shipping_icon();
  }
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function calc_tax(amount) {
  return amount * 0.1;
}
//===================== freeTieClip P172
function freeTieClip(cart) {
  let hasTie = isInCart(cart, "tie");
  let hasTieClip = isInCart(cart, "tie clip");

  if (hasTie && !hasTieClip) {
    let tieClip = make_cart_item("tie clip", 0);
    return add_item(cart, tieClip);
  }
  return cart;
}

function isInCart(cart, name) {
  return cart.find((r) => r.name === name);
}

//===================== freeTieClip END

//===================== 껍데기 함수
function set_cart_total_dom(total) {
  console.log("set_cart_total_dom - emtpy", total);
}
function set_tax_dom(total) {
  console.log("set_tax_dom - emtpy", total);
}
function get_buy_buttons_dom() {
  //console.log('get_buy_buttons_dom - emtpy')
  let obj = {
    item: shopping_cart[0],
    show_free_shipping_icon: () => {
      console.log("icon - show");
    },
    hide_free_shipping_icon: () => {
      console.log("icon - hide");
    },
  };
  return [obj];
}
//===================== 껍데기 함수 END
//=====================
function deepCopy(cart) {
  return DeepCopy.DeepCopy(cart);
}

//===================== 카피-온-라이트
function add_element_last(array, elem) {
  let new_arr = array.slice();
  new_arr.push(elem);
  return new_arr;
}

//P118
function removeItems(array, idx, count) {
  let copy = array.slice();
  copy.splice(idx, count);
  return copy;
}
function remove_item_by_name(cart, name) {
  const idx = cart.findIndex((r) => r.name === name);
  if (idx) return removeItems(cart, idx, 1);
  return cart;
}

//P137 ~
function objectSet(object, key, value) {
  let copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
function objectDelete(object, key) {
  let copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}
function setPrice(item, new_price) {
  return objectSet(item, "price", new_price);
}
function setQuantity(item, new_quantity) {
  return objectSet(item, "quantity", new_quantity);
}
function setQuantityByName(cart, name, quantity) {
  let cartCopy = cart.slice();
  const rowIdx = cartCopy.findIndex((r) => r.name === name);
  cartCopy[rowIdx] = objectSet(cartCopy[rowIdx], "quantity", quantity);
  return cartCopy;
}
//=============================
