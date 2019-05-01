function narcissistic(value) {
    let stringNums = value.toString()
    let result = 0
    const array = stringNums.split("")
    const power = array.length
        array.forEach(function(stringNum) {
            const num = parseInt(stringNum)
            result = result + Math.pow(num, power)
        })
        if (result == value) {
            return true
        } else {
            return false
        }
  }
  
  console.log(narcissistic(153))