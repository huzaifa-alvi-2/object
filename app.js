var itemsArray = [
    {
        name: 'juice' , 
        price: '50' , 
        quantity: '3' 
    },    {
        name: 'cookie' , 
        price: '30' , 
        quantity: '9' 
    },
    {
        name: 'shirt' , 
        price: '880' , 
        quantity: '1' 
    }, 
    {
        name: 'pen' , 
        price: '100' , 
        quantity: '2' 
    }
]
// First
function calulatePrice(value){

var name = itemsArray[value].name;
var price = itemsArray[value].price;
var quantity = itemsArray[value].quantity;
console.log('name : ' , name)
console.log('price : ' , price)
console.log('quantity : ' , quantity)
console.log('Total : ' , price * quantity)

}
calulatePrice(0);

// Second
var button = document.getElementById('btn');
var output = document.getElementById('txt');
var input = document.getElementById('input')

var obj = {
    name : '' , 
    email : "" , 
    password : "" , 
    age : "" , 
    gender : "" ,
    city : "" ,
    country : ""
}
button.addEventListener('click' , function(){

// var searchWord = prompt('Enter a word to Search in Object').toLowerCase();
var searchWord = document.getElementById('search').value;
searchWord = searchWord.toLowerCase()

if(obj[searchWord] != undefined){
    output.innerHTML = searchWord + " is available in Object"
}else{
    output.innerHTML =  searchWord + " is Not available !"
}

})

// Third
console.log('Constructor...')
function Object(name , email , age){
    this.name = name;
    this.email = email;
    this.age = age;
}
var firstObj = new Object('Tahir' , 'dgsg@gmail.com' , '18');
var secondtObj = new Object('Shahrukh' , 'fhth@gmail.com' , '18');
var thirdObj = new Object('Owais' , 'greye@gmail.com' , '18');

console.log(firstObj);
console.log(secondtObj);
console.log(thirdObj);

// Fourth
function information(){

var population = document.getElementById('population').value;
var address = document.getElementById('address').value;
var educations = document.getElementById('educations').value;
var professions = document.getElementById('professions').value;
var gender = document.querySelectorAll('.gender')
if(gender[0].checked){
    gender = 'male'
}else if(gender[1].checked){
    gender = 'Female'
}

// Checking Radio for gender

function AreaInfo(population, gender ,address , educations , professions){
    this.population = population;
    this.gender = gender;
    this.address = address;
    this.educations = educations;
    this.professions = professions;
}
var record = new AreaInfo(population , gender , address , educations , professions);
console.log(record)

}
document.getElementById('save').addEventListener('click' , function(){
    information()})