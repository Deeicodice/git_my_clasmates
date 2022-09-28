// function fortune()
// person.numberOfChildren = '4'
// person.jobTitle = "bartender"
// person.partnersName = "Katie"
// person.address = "4200 w lake ave"

// console.log(person.numberOfChildren)
// console.log(person.jobTitle)
// console.log(partnersName)
// console.log(person.address)


function fortuneTeller(jobTitle, address, partnersName,numberOfChildren) {
    console.log(jobTitle, address, partnersName,numberOfChildren)
    console.log(`You will be a ${jobTitle} in ${address}, and marry to ${partnersName} with ${numberOfChildren} children.`)
}
fortuneTeller("Developer", "4200 w lake", "Katie", 2)
fortuneTeller("IT Engineer", "5005 Newport", "Katie", 4)
