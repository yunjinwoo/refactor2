
let shopping_cart = [];
let shopping_cart_total = 0;

add_item_to_cart('test1',5)
add_item_to_cart('test2',5)
add_item_to_cart('test3',10)
add_item_to_cart('test4',2)
console.log('shopping_cart', shopping_cart)
console.log('shopping_cart_total', shopping_cart_total)

//P119 전체 코드를 봅시다
function add_item_to_cart(name, price){  //T:액션
    let item = make_cart_item(name, price)
    shopping_cart = add_item(shopping_cart, item)
    //calc_cart_total(shopping_cart);
    
    let total = calc_total(shopping_cart);
    set_cart_total_dom(total);
    update_shipping_icons(shopping_cart);
    update_tax_dom(total);
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
function update_shipping_icons(cart){
    let buy_buttons = get_buy_buttons_dom();
    buy_buttons?.forEach((button)=>{
        let item = button.item;

        let hasFreeShipping = gets_free_shipping_with_item(cart, item)
        set_free_shipping_icon(button, hasFreeShipping)
    })
}

function update_tax_dom(total){
    set_tax_dom(calc_tax(total))
}

//===============================
//P135 추가
function make_cart_item(name, price){
    return {
        name, price
    }
}
function add_item(cart, item){
    return add_element_last(cart, item);
}

function calc_total(cart){    
    let total = 0;
    cart?.forEach((item)=>{
        total += item.price;
    })
    return total
}

function gets_free_shipping_with_item(cart, item){
    let new_cart = add_item(cart, item)
    return gets_free_shipping(new_cart)
}
function set_free_shipping_icon(button, isShow){
    if(isShow){
        button.show_free_shipping_icon();
    }else{
        button.hide_free_shipping_icon();
    }
}

function gets_free_shipping(cart){
    return calc_total(cart) >= 20
}

function calc_tax(amount){
    return amount*0.10
}


//===================== 껍데기 함수
function set_cart_total_dom(total){
    console.log('set_cart_total_dom - emtpy', total)
}
function set_tax_dom(total){
    console.log('set_tax_dom - emtpy', total)
}
function get_buy_buttons_dom(){
    //console.log('get_buy_buttons_dom - emtpy')
    let obj = {
        item:shopping_cart[0],
        show_free_shipping_icon:()=>{ console.log('icon - show') },
        hide_free_shipping_icon:()=>{ console.log('icon - hide') }
    }
    return [obj]
}
//===================== 껍데기 함수 END
//===================== 카피-온-라이트 END
function add_element_last(array, elem){
    let new_arr = array.slice();
    new_arr.push(elem)
    return new_arr;
}




//=============================