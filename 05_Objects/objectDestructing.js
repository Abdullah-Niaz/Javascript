const course = {
    name:"Python For Absolute Begginers",
    price:2100,
    duration:22.1,
    description:"This course is for those who are just stepping into the world of programming, see you in the course module. Don't foreget to enroll. For queries, you can mail us on coureinfo@gmail.com",
    author:"Abdullah",
    image:"python.jpg",
    id:123121
}



// these are just a synthetical ways to reterive the proerties from the objects
// console.log(course.author)
// console.log(course["author"])

const {author:au} = course
console.log(au)



// probs using object destructing

// const navbar = ({company}) => {
//     return `<div class="navbar">`
// }

// (company = "Allah Dita")
// console.log(navbar.company)