//P495
function Queue(worker){
    let queue_items = [];
    let working = false;

    function runNext(){
       // console.log('runNext', queue_items)
        if( working )    return ;     
        if(queue_items.length === 0 ) return ;
        
        working = true;
        let cart = queue_items.shift();
        
        worker(cart, function(val){
            working = false;
            setTimeout(item.callback,0,val)
            runNext()
        })
    }

    return function(cart, callback){
        queue_items.push({
            data:cart,
            callback:callback || function(){}
        });
        setTimeout(runNext, 0)
    }
}


module.exports = { ...module.exports, Queue };
