/**
 * P241
- 필드명을 문자열로 사용하면 버그가 생기지 않을까요? - typescript 로 해결
- 일급 필드를 사용하면 api를 사용하기 더 어렵나요?
 */

let validItemFields = ['name', 'price', 'quantity', 'shopping', 'tax', 'number']
let translations = {
    'quantity':'number'
}

function setFieldByName( cart, name, field, value){
    if( !validItemFields.includes(field) ){
        throw "Not a valid item field '" + field + "'.";
    }
    if( translations.hasOwnProperty(field) ){
        field = translations[field]
    }
    let item = cart[name];
    let newItem = objectSet(item, field, value);
    let newCart = objectSet(cart, name, newItem);
    return newCart
}

function objectSet(object, key, value){
    let copy = Object.assign({}, object);
    copy[key] = value;
    return copy
}



let carts = {
    'tie':{ name: 'test1', price: 111 },
    'tie2':{ name: 'test2', price: 222 },
    'tie3':{ name: 'test3', price: 333 },
    'tie4':{ name: 'test4', price: 443 }
}

console.log('1===',carts)
carts = setFieldByName(carts, 'tie','name','change1' )
console.log('2===',carts)