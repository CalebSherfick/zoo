console.log('start')




import Alligator from "./models/alligator.js";
import Bear from "./models/bear.js";
import Crab from "./models/crab.js";
import Donkey from "./models/donkey.js";
import Elephant from "./models/elephant.js";
import Flamingo from "./models/flamingo.js";
import Gorilla from "./models/gorilla.js";
import Horse from "./models/horse.js";
import Iguana from "./models/iguana.js";
import Jaguar from "./models/jaguar.js";
import Koala from "./models/koala.js";
import Lynx from "./models/lynx.js";
import Meerkat from "./models/meerkat.js";
import Narwhal from "./models/narwhal.js";
import Ostrich from "./models/ostrich.js";
import Penguin from "./models/penguin.js";
import Quail from "./models/quail.js";
import Raccoon from "./models/raccoon.js";
import Snake from "./models/snake.js";
import Turtle from "./models/turtle.js";
import Urchin from "./models/urchin.js";
import Vulture from "./models/vulture.js";
import Whale from "./models/whale.js";
import Xerux from "./models/xerus.js";
import Yak from "./models/yak.js";
import Zebra from "./models/zebra.js"


let alex = new Alligator('Alex', 4, true)
let barry = new Bear('Barry', 4, true)
let chris = new Crab('Chris', 6, false)
let darryl = new Donkey('Darryl', 4, true)
let ellie = new Elephant('Ellie', 4, true)
let frank = new Flamingo('Frank', 2, true)
let george = new Gorilla('George', 2, true)
let harry = new Horse('Harry', 2, true)
let izzy = new Iguana('Izzy', 2, true)
let james = new Jaguar('James', 2, true)
let karen = new Koala('Karen', 2, true)
let laurel = new Lynx('Laurel', 2, true)
let mary = new Meerkat('Mary', 2, true)
let narth = new Narwhal('Narth', 2, true)
let olly = new Ostrich('Olly', 2, true)
let patty = new Penguin('Patty', 2, true)
let quinn = new Quail('Quinn', 2, true)
let rich = new Raccoon('Rich', 2, true)
let sally = new Snake('Sally', 2, true)
let trevor = new Turtle('Trevor', 2, true)
let uni = new Urchin('Uni', 2, true)
let vivian = new Vulture('Vivian', 2, true)
let wanda = new Whale('Wanda', 2, true)
let xavier = new Xerux('Xavier', 2, true)
let yanny = new Yak('Yanny', 2, true)
let zack = new Zebra('Zack', 2, true)

let animals = [alex, barry, chris, darryl, ellie, frank, george, harry, izzy, james, karen, laurel, mary, narth, olly, patty, quinn, rich, sally, trevor, uni, vivian, wanda, xavier, yanny, zack]

function isTail(animal) {
  if (animal.tail == true) {
    return "have a tail"
  } else {
    return "does not have a tail"
  }
}


function draw(arr) {
  let template = ''
  arr.forEach(animal => {
    template += `<li> ${animal.name} the ${animal.constructor.name} has ${animal.legs} legs and ${isTail(animal)}.</li>`
  })
  document.getElementById('animals').innerHTML = template
}
draw(animals)

console.log('end')