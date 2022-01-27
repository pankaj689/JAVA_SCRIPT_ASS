function CreateObject(arr) {
    // Write your code here
    var bldict={}
    for (var i=0;i<arr.length;i=i+2){
        bldict[arr[i]]=arr[i+1]
    }
    return bldict
}

module.exports = CreateObject;
