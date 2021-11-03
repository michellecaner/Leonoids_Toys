
const toyToFind = 2;

const toys = [
  {
    id: 1,
    name: "Dr. Leonid's Chem Set",
    price: 49.99,
    maker: "Leonid",
    agesTenAndUp: true,
    inventory: 99,
    weight: 7.5
  },

  {
    id: 2,
    name: "Galaxy Games",
    price: 19.99,
    maker: "Hasbro",
    agesTenAndUp: true,
    inventory: 65,
    weight: 4
  },

  {
    id: 3,
    name: "Marvin the Martian Action Figure",
    price: 29.99,
    maker: "Warner Bros",
    agesTenAndUp: true,
    inventory: 7,
    weight: 3
  }
]

const robotKit = {
  id: 4,
  name: "Bot Buddy Kit",
  price: 99.99,
  maker: "Leonid",
  agesTenAndUp: true,
  inventory: 200,
  weight: 15
}

const galaxyProjector = {
  id: 5,
  name: "Starlight Projector",
  price: 79.99,
  maker: "Star Magic",
  agesTenAndUp: true,
  inventory: 57,
  weight: 12
}

toys.push(robotKit);

toys.push(galaxyProjector);

// for (const toy of toys) {
//  console.log(`The ${toy.maker} ${toy.name} costs $${toy.price}.`)
// }

//  for (const toy of toys) {
//    toy.price = toy.price/.95
//    console.log(`The ${toy.maker} ${toy.name} costs $${toy.price}. It weighs ${toy.weight} lbs.`)
//  }
  
for (const toy of toys) {
  if (toy.id === toyToFind) {
    toy.price = toy.price/.95
    console.log(`The ${toy.maker} ${toy.name} costs $${toy.price}. It weighs ${toy.weight} lbs.`)
  }
}

const erectorSet = {
  name: "Leonoid's Classic Erector Set",
  price: 49.99,
  maker: "Leonoid",
  agesTenAndUp: true,
  inventory: 78,
  weight: 4
}

const drone = {
  name: "Drone Daddy",
  price: 599.99,
  maker: "LG",
  agesTenAndUp: false,
  inventory: 20,
  weight: 9
}

// WHAT??? vvvvv I get it after reading the explanation but how do you get good at breaking down this kind thinking??

const addToyToDirectory = (toyObject) => {
  const lastIndex = toys.length -1
  const currentLastToy = toys[lastIndex]
  const maxID = currentLastToy.id
  const idForNewToy = maxID + 1

  toyObject.id = idForNewToy
  toys.push(toyObject)
}

addToyToDirectory(drone)

for (const toy of toys) {
  console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} USD. It weighs ${toy.weight}lbs.`)
}

console.log(toys);