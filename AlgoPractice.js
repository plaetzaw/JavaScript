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