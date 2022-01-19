function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    var lis=hasDrivingLiscence
    var tir=isTired
    var sob=isSober
    if (lis===false){
        return "You cannot drive"
    } else if(tir===true){
            return "You shouldn't drive"
    }else if(sob===true){
                return "You can drive"
    }else{
                return "You shouldn't drive"
            }
        
    
}

module.exports = CanDrive;
