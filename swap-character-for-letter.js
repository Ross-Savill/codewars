// code for returning the position in the alphabet where the character is

function alphabetPosition(theText) {
    result = []
    toExamine = theText.toLowerCase()
    const array = toExamine.split("")
    const alphabet = [ 'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z' ];
    array.forEach((character) => {
        alphabet.forEach((letter, index) => {
            if(character === letter) {
                result.push(index)
            } else {
                index + 1
            }
            })
    })
    const answer = result.toString()
    return answer
  }

  const text = "The sunset sets at twelve o' clock."

  alphabetPosition(text)