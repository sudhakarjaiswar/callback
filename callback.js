// -------------QUESTION - 1  -------------//

const numbers = [2, 4, 5, 7, 9];
const doubled = numbers.map((number) =>{
    return number * 2;
})
console.log(doubled);

// -------------QUESTION - 2  -------------//

function manipulateString(name, callback) {
    const string = `${name}`
    callback(string);
}
function logString(string) {
    console.log(string.toUpperCase());
}
manipulateString("hello world!", logString);

// -------------QUESTION - 3  -------------//

function ageInDay(firstName, lastName, age, callback) {
    const fullName = `The person's full name is ${firstName} ${lastName} and their age in days is ${age}`
    callback(fullName);
}
function person(fullName) {
    console.log(fullName);
}
ageInDay("Sudhakar", "Jaiswar", 3500, person);

// ----------------- QUESTION - 4 -------------//

const books = [
    {
        id: 1, 
        title: "the problems of rupees",
        authorName: "ambedkar",
        year: 1945
    },

    {
        id: 2, 
        title: "the constitution of India",
        authorName: "bhimraoambedkar",
        year: 1950
    },

    {
        id: 3,
        title: "gitanjali",
        authorName: "rabindranth tagore",
        year: 1949
    }
];

const mapTitle = books.map((book) => {
    return book.title;
})

console.log(mapTitle);

// -------------QUESTION - 5  -------------//

function createGreeting(name, callback) {
    const greeting = `Hello ${name}!!`;
    callback(greeting);
}
function logGreeting(greeting) {
    console.log(greeting);
}
createGreeting("Sudhakar", logGreeting)

//--------------------- QUESTION - 9------------------//

async function getQuotes() {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("API reuest closed");
    }
}
getQuotes();


//--------------------- QUESTION - 6------------------//

async function getQuotes() {
    const response = await fetch("https://goweather.herokuapp.com/weather/Ny");
    const data = response.json();
    console.log(data);
}
getQuotes();


