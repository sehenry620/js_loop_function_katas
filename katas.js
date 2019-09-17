(function(){
    
    
    function oneThroughTwenty() {
        const numbers = []
        
      // Your code goes below

      for ( let counter = 1; counter <=20; counter++){
        numbers.push(counter)
        
    }

        return numbers;
    }
    // console.log(oneThroughTwenty())

    function evensToTwenty() {
        const numbers = []

        // Your code goes below

        for (let counter = 0; counter <= 20; counter++){
             if (counter % 2 == 0){
                numbers.push(counter);
             }
    
        }

        return numbers;
    }
    // console.log(evensToTwenty())


    function oddsToTwenty() {
        const numbers = []

        // Your code goes below

        for (let counter = 1; counter <=20; counter++){
            if (counter % 2 != 0){
                numbers.push(counter);
            }
        }

        return numbers;
    }

    // console.log(oddsToTwenty())

    function multiplesOfFive() {
        const numbers = []

        // Your code goes below

        for (let counter = 5; counter <=100; counter++){
            if (counter % 5 == 0){
                numbers.push(counter)
            }
        }

        return numbers;
    }
        // console.log(multiplesOfFive())

    function squareNumbers() {
        const numbers = []

        // Your code goes below

        for (let counter = 1; counter <=100; counter++){
            if (counter % Math.sqrt (counter) ===0)
                numbers.push(counter)
        }

        return numbers;
    }
        // console.log(squareNumbers())

    function countingBackwards() {
        const numbers = []

        // Your code goes below

        for (let counter = 20; counter >0; counter--){

            numbers.push(counter)
        }

        return numbers;
    }
        // console.log(countingBackwards())

    function evenNumbersBackwards() {
        const numbers = []

        // Your code goes below

        for (let counter = 20; counter >0; counter--){
            if (counter % 2 == 0){
                numbers.push(counter)
            }
        }

        return numbers;
    }


        // console.log(evenNumbersBackwards())

    function oddNumbersBackwards() {
        const numbers = []

        // Your code goes below

        for (let counter = 20; counter >0; counter--){
            if (counter % 2 != 0){
                numbers.push(counter)
            }
        }

        return numbers;
    }
        // console.log(oddNumbersBackwards())

    function multiplesOfFiveBackwards() {
        const numbers = []

        // Your code goes below

        for (let counter = 100; counter >=5; counter--){
            if (counter % 5 == 0){
                numbers.push(counter)
            }
        }

        return numbers;
    }
        // console.log(multiplesOfFiveBackwards())
        

    function squareNumbersBackwards() {
        const numbers = []

        // Your code goes below

        for (let counter = 100; counter >=1; counter--){
            if (counter % Math.sqrt (counter) ===0)
                numbers.push(counter)
        }

        return numbers;
    }

        console.log(squareNumbersBackwards())
    
    
})();