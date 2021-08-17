// Your code here
function mapToNegativize(rootArray){
    return rootArray.map(x => x * -1);
}

function mapToNoChange(src){
const newSrc = [...src]
return newSrc
}

function mapToDouble(rootArr) {
   return rootArr.map(x => x*2)
}

 function mapToSquare(root){
    let newRoot = []
     for (const num in root) {
     const xx2 = root[num] **2
     newRoot.push(xx2)
 }
    return newRoot
}

function reduceToTotal(root, begin=0) {
    let all = begin
    for (let i = 0; i < root.length; i++ ) {
      all = all + root[i]
    }
    return all
  }

  function reduceToAllTrue(root) {
    for (let i = 0; i < root.length; i++ ) {
      if (!root[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(rootArray){
    const reducer = function(collector, currentValue){  
        if(collector == true){
            return true
        } else {
            return !!currentValue
        } 
    }
    return rootArray.reduce(reducer, false)
}

