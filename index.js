function writeCards (names) {

    let thanksCard = []
    
    for(let i = 0; i < names.length; i++) {
        thanksCard.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thanksCard
}

function countDown(number) {


    while(number > 0) {
        console.log(number)
        number -=1 ;
        
    }
    console.log(number)
}