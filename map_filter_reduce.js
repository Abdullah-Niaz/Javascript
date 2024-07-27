// var officers = [
//     { id: 20, name: 'Captain Piett' },
//     { id: 24, name: 'General Veers' },
//     { id: 56, name: 'Admiral Ozzel' },
//     { id: 88, name: 'Commander Jerjerrod' }
// ];
// const officerID = []

// officers.forEach(element => {
//     officerID.push(element.id)
// });
// // console.log(officerID)


// // using map
// var officersIds = officers.map(function (officer) {
//     return officer.id
// });
// console.log(officersIds)

// const officersIds_ = officers.map(officer => officer.id);
// console.log(officersIds_);



const officers = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
    { id: 4, name: 'Jill' }
  ];
  
  // Extracting officer IDs using map
  const officersIds = officers.map(officer => officer.id);
  console.log(officersIds); // Output: [1, 2, 3, 4]
  
  // Filtering officers with even IDs using filter
  const evenIdOfficers = officers.filter(officer => officer.id % 2 === 0);
  console.log(evenIdOfficers); // Output: [{ id: 2, name: 'Jane' }, { id: 4, name: 'Jill' }]
  
  // Summing up all officer IDs using reduce
  const totalIds = officers.reduce((accumulator, officer) => accumulator + officer.id, 0);
  console.log(totalIds); // Output: 10
  