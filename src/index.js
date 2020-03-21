function eval() {
    return;
}

function expressionCalculator(expr) {
    let arr= expr.replace(/\s/g,"").split("");
    console.log(arguments);
    error_new(arr);

    function error_new(arr) {
        let a = 0;
        for(let i = 0; i<arr.length;i++){
            if(arr[i]==="("){
                a++;
            }
            if(arr[i]===")"){
                a--;
            }
        }
        if(a!==0){
            throw new Error("ExpressionError: Brackets must be paired.");
        }

        for(let i = 0; i<arr.length;i++){
            if(arr[i]==="/"){
                if(arr[i+1] === "0")
                throw new Error("TypeError: Division by zero.")
            }
        }
    }
    itog = new Function("return " + expr.replace(/\s/g,""));
    return itog();
}

module.exports = {
    expressionCalculator
}
