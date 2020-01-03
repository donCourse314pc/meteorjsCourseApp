Meteor.methods({
    add:function(number1, number2){
        console.log("number1 + number2 = ", number1 + number2)
        return number1 + number2;
    },
    printString: function(str){
        console.log("str", str)
        return str;
    },
    getFirstItemInArray:function(array){
        if(array){
            return array[2];
        }else{
            throw new Meteor.Error('error', "array not found");
        }
    },
})