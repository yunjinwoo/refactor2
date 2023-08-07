//책에도 나와있지만 Lodash의 _.cloneDeep 으로 쓰는걸 추천함
//P160
function DeepCopy(thing){
    if( Array.isArray(thing) ){
        let copy = [];
        thing.forEach(r=>{
            copy.push(DeepCopy(r))
        })
        return copy
    } else if ( thing === null ){
        return null
    }else if ( typeof thing === "object" ){    
        let copy = {};    
        Object.keys(thing).forEach(r=>{
            copy[r] = DeepCopy(thing[r])
        })
        return copy
    }else{
        return thing
    }
}


module.exports = { ...module.exports, DeepCopy };
