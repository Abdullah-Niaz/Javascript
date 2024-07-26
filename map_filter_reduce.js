var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
const officerID = []

officers.forEach(element => {
    officerID.push(element.id)
});
// console.log(officerID)


// using map
var officersIds = officers.map(function (officer) {
    return officer.id
});
console.log(officersIds)

const officersIds_ = officers.map(officer => officer.id);
console.log(officersIds_);