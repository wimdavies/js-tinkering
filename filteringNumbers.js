const numbers = [
  '1763687364', 
  '4763687363', 
  '7867867862', 
  'AAAA#####AAAA#87@768767382672', 
  '4763687363', 
  '4763687363'
];

const checkLength = (number) => {
  if (number.length <= 10) {
    return true
  } else {
    return false
  }
}

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
}

console.log(filterLongNumbers(numbers));

module.exports = filterLongNumbers