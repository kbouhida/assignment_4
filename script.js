//1 
//var Animal = Animal || {};
//Animal.Cat = function (color) {
    //this._color = color;
//}
//Animal.dog = function(breed) {
    //this._breed = breed;
//}

//2
//function Cat () {}
    //var finny = new Cat ();


//function Dog() {
    //window.console.log("My dog's name is buster");
//}
//var buster = new Dog();
//window.console.log(buster.constructor);

//3
//function Dog() {
    //window.console.log("My dog's name is cooper");
//}
//var cooper = new Dog();
//window.console.log(cooper.constructor);

//4
//function Animal() {
   //window.console.log("The Animal has been created!");
//}
//var x = new Animal();

//5
//function Animal() {
//}
//var louisDog = new Animal();
  //window.console.log(louisDog.constructor);

//6

//6
//var pet = function (type, breed, color, height, length) {
//this._type = type;
//this._breed = breed;
//this._color = color;
//this._height = height;
//this._length = length;
//this.myPet = function() {

// window.console.log("This is my dog");
// } 
//}
//var myAnimal = new pet ();

//7
//var pet = function (type, breed, color, height, length) {
//this._dog = type;
//this._shitzu = breed;
//this._brown = color;
//this._2 = height;
//this._2 = length;
//this.myPet = function() {

//window.console.log("This is my dog");
//} 
//}
//var myAnimal = new pet ();
//for (var property in myAnimal) {
//window.console.log(property);
//}

//8
//I have no idea how to do the rest, i find it  difficult to go from abstract concepts straight to homework without some practice. It Would help a lot if we did similar exercises for practice on Tuesdays!

//The recipe Card
//var recipe = {
// 'title': 'Guacamole',
//'servings': 4,
//'ingredients': ['3 Avocados', '1 lime', '1 Teaspoon Salt', //'1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced //Tomatoes', '1 Teaspon Garlic', '1 Pinch Ground Pepper']
//};

//console.log(recipe.title);
//console.log('Servings: ' + recipe.servings);
//console.log('Ingredients:');
//for (var i = 0; i < recipe.ingredients.length; i++) {
// console.log(recipe.ingredients[i]);
//}

//The Reading List
//var books = [
//{title: 'Slaughter House Five',
//author: 'Kurt Vonnegut',
//alreadyRead: true
// },

//{title: 'South of the Border, West of the Sun',
//author: 'Haruki Murakami',
//alreadyRead: false
//},

//{title: 'The Magic of Reality',
//author: 'Richard Dawkins',
//alreadyRead: true
//},

//{title: 'Norwegian Wood',
//author: 'Haruki Murakami',
//alreadyRead: false
//},

//{title: 'Freewill',
//author: 'Sam Harris',
//alreadyRead: true
//},];

//for (var i = 0; i < books.length; i++) {
//var book = books[i];
//var bookInfo = book.title + '" by ' + book.author;
//if (book.alreadyRead) {
// console.log('You already read "' + bookInfo);
//} else {
// console.log('You still need to read "' + bookInfo);
//}
//}

