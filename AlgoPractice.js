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
      let checkerPM = s.search("PM")
      let hour = parseInt((s[0] + s[1]))
      if (checkerPM !== -1){
          hour = hour + 12
      }
      else {
          if (hour === 10 || hour === 11 || hour === 12){

          }
          else {
            hour = '0' + hour
          }
          
      }
      let restOfTime = s.slice(2,8)
      let convertedTime = (hour + restOfTime)
      console.log(convertedTime)
      return(convertedTime)
      
    }

    // timeConversion('01:05:44AM')
    // timeConversion('01:05:44PM')
    // timeConversion('09:05:44AM')
    // timeConversion('09:05:44PM')
    // timeConversion('10:05:44AM')
    // timeConversion('10:05:44PM')
    // timeConversion('11:05:44AM')
    // timeConversion('11:05:44PM')
    // timeConversion('12:05:44AM')
    // timeConversion('12:05:44PM')

    function gradingStudents(grades){
        let finalGrades = []
        for (i = 0; i < grades.length; i++){
           if (grades[i] < 37){
               
           }
           if (grades[i] % 5 === 0){
               finalGrades.push(grades[i])
           }
           else if ((grades[i] + 1) % 5 === 0){
               finalGrades.push(grades[i] + 1)
           }
           else if ((grades[i] + 2) % 5 === 0){
                finalGrades.push(grades[i] + 2)
           }
           else {
               finalGrades.push(grades[i])
           }
        }
        console.log(finalGrades)
    }

gradingStudents([4, 73, 67, 38, 33,])

    // if (grades[i] < 40){
    //     finalGrades.push(grades[i])
    // }
    // // else if (((grades[i] + 2) % 5 === 0) || ((grades[i] + 1) % 5 === 0))
    // {
    //     finalGrades.push(grades)
    // }