const DeepCopy = require("./DeepCopy")
const Queue = require("./Queue")
const QueueDropping = require("./QueueDropping")


console.log('test===deepCopy')
let cp_list = [{item:'125'},2,{a:'65'}]

let cp3 = DeepCopy.DeepCopy(cp_list)
cp3[0].item = 'awerawer'
cp3[1] = '511'
cp3[2].a = 'awet'
console.log('cp_list', cp_list)
console.log('cp3', cp3)


let cp2 = [...cp_list]
cp2[0].item = 'tttt'
cp2[1] = '44'
cp2[2].a = 'b'
console.log('cp_list', cp_list)
console.log('cp2', cp2)



console.log('test===queue')
function cale_cart_total(a, r){
    console.log('cale_cart_total=======', a, r)
    
}
function update_total_dom(ttt){
    console.log('update_total_dom ============ ', ttt)
}

function calc_cart_worker( cart, done){
    cale_cart_total(cart, function(total){
        console.log('calc_cart_worker-callback', total)
        update_total_dom(total);
        done(total);
    })            
}




let cart_list = [
    { name: 'test2', price: 223 },
    { name: 'test3', price: 323 },
    { name: 'test4', price: 423 },
    { name: 'test5', price: 523 },
    { name: 'test6', price: 623 },
]
let update_total_queue2 = Queue.Queue(calc_cart_worker)
update_total_queue2({ name: 'qqq1', price: 123 })
update_total_queue2({ name: 'qqq2', price: 22 })
console.log(update_total_queue2)


console.log('---------------------------------')
console.log('---------------------------------')
console.log('---------------------------------')


let update_total_queue = QueueDropping.QueueDropping(5, calc_cart_worker)
update_total_queue({ name: 'qqq1', price: 123 })
update_total_queue({ name: 'qqq2', price: 22 })
update_total_queue({ name: 'eee2', price: 16 })
update_total_queue({ name: 'eee3', price: 15 })
update_total_queue({ name: 'twe23', price: 14 })
update_total_queue({ name: 'rqwr2', price: 12 })
console.log('update_total_queue', update_total_queue)

