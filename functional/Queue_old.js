
/**
 * //P490
 * function Queue(){
    let queue_items = [];
    let working = false;

    function runNext(){
        if( working )    return ;     
        if(queue_items.length === 0 ) return ;
        
        working = true;
        let cart = queue_items.shift();
        function worker( cart, done){
            cale_cart_total(cart, function(total){
                update_total_dom(total);
                done(total);
            })            
        }
        worker(cart, function(){
            working = false;
            runNext()
        })
    }

    return function(cart){
        queue_items.push(cart);
        setTimeout(runNext, 0)
    }
}
let update_total_queue = Queue()
 */

function Queue(worker){
    let queue_items = [];
    let working = false;

    function runNext(){
        if( working )    return ;     
        if(queue_items.length === 0 ) return ;
        
        working = true;
        let cart = queue_items.shift();
        
        worker(cart, function(){
            working = false;
            runNext()
        })
    }

    return function(cart){
        queue_items.push(cart);
        setTimeout(runNext, 0)
    }
}

function calc_cart_worker( cart, done){
    cale_cart_total(cart, function(total){
        update_total_dom(total);
        done(total);
    })            
}
let update_total_queue = Queue(calc_cart_worker)