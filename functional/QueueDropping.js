//P495
function QueueDropping(max, worker){
    let queue_items = [];
    let working = false;

    function runNext(){
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
        while(queue_items.length > max )
            queue_items.shift();

        setTimeout(runNext, 0)
    }
}


module.exports = { ...module.exports, QueueDropping };
