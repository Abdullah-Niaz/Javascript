const d = new Date();
console.log(d);
console.log(d.toString());
// you can override it according to your need like
const dd = new Date('2023-01-04');
console.log(dd);
console.log(dd.toDateString());



//? There are 9 ways to create a new date object:

    //! new Date()
    //! new Date(date string)
    //! new Date(year,month)
    //! new Date(year,month,day)
    //! new Date(year,month,day,hours)
    //! new Date(year,month,day,hours,minutes)
    //! new Date(year,month,day,hours,minutes,seconds)
    //! new Date(year,month,day,hours,minutes,seconds,ms)
    //! new Date(milliseconds)
