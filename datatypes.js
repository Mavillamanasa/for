//1)
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

delete person.city;
person.country = "USA";
person.age = 31;

console.log(person);//output-{ name: "Alice", age: 31, country: "USA" }


const smartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 799
};




