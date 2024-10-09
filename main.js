const person = {
    name :"montaser",
    age : 22,
    greet : function (){
       console.log( `Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}

person.greet()


//////////////tsk2////////////////////

const calculator ={
    num1 : 10,
    num2 : 20,
    sum : function (){
        return this.sum1 + this.sum2
    },
    describeSum : function (){
        console.log(`The sum of ${this.num1} and ${this.num2} is ${this.sum()}`)
    }

}

calculator.describeSum()


///////////////task3/////////////////////

// const book = new Object()
// book.title = "Rich Dad Poor Dad"
// book.autor = "Robert Toru Kiyosaki"
// book.pages = 465
// book["get-Summary"] = 


const book = {
    title : "Rich Dad Poor Dad",
    autor : "Robert Toru Kiyosaki",
    pages : 465,
    getSummary (){
     return  `The book ${this.title} by ${this.autor} has ${this.pages} pages.`
    }

}

console.log(book.getSummary());

///////////////task4/////////////////////

const car ={
    brand :"Nissan",
    model : "2021",
    price : 100,
    getPriceWithTax (){
        let price = this.price
        let taxRate = (this.price/100) *  10
        return price + taxRate
    }
}

console.log(car.getPriceWithTax())

///////////////task5/////////////////////

const student ={
    firstName : "Montaser",
    lastName  : "Gohar",
    age       : 22,
    grades    : [10 , 20 , 30],
    fullName (){
        return `${this.firstName} ${this.lastName}`
    },
    calculateAverage (){
        let sum = 0
        this.grades.map((grade)=>{
            sum += grade
        })
        return sum
    },
    getStudentInfo (){
        return `Student: ${this.fullName()}, Age: ${this.age}, Average Grade: ${this.calculateAverage()}.`
    }
}
console.log(student.getStudentInfo())





