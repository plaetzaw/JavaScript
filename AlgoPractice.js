function compareTriplets(a, b) {
    let aCount = 0;
    let bCount = 0;
    let result = []
    if (a[0] > b[0]){
        aCount +=1
    }
    else if (a[0] < b[0]){
        bCount +=1
    }
    if (a[1] > b[1]){
        aCount +=1
    }
    else if (a[1] < b[1]){
        bCount +=1
    }
    if (a[2] > b[2]){
        aCount +=1
    }
    else if (a[2] < b[2]){
        bCount +=1
    }
    result.push(aCount, bCount)
    return result
    }

    // compareTriplets([1,2,3], [10,11,12])

    function aVeryBigSum(ar){
        let sum = 0
        for (let i = 0; i < ar.length; i++){
            sum += ar[i]
        }
        console.log(sum)
    }

    // aVeryBigSum([1,4,5,124,4325,135325])

    function diagonalDifference(arr) {
        let primD = 0;
        let secD = 0;
        let result = 0;
        for (let i = 0; i < arr.length; i++){
                primD += arr[i][i] 
                secD += arr[i][(arr.length - i) - 1]        
        }
                                console.log(primD, secD)
                                 result = Math.abs(primD - secD)
                        console.log("The RESULT IS", result)
                        return result

    }

    function simpleArraySum(ar) {
        let result = 0
       for (let i = 0; i < ar.length; i++){
           result += arr[i]
       }
    
    }


    function timeConversion(s) {
        // If the 12 HR format has PM, we know we need to add 12 hours to the 
        // HR (1 PM => 13)
      let checker = s.search("PM")
      let hour = parseInt((s[0] + s[1]))
      if (checker !== -1){
          hour = hour + 12
      }
      else {
          hour = '0' + hour
      }
      let restOfTime = s.slice(2,8)
      let convertedTime = (hour + restOfTime)
      console.log(convertedTime)
      return(convertedTime)
      
    }

    timeConversion('11:05:44AM')