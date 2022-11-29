const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array,  item){
 return array.filter(x =>{
  if(x === item){ 
    return item
  }
  else if (x === item.toLowerCase()){
    return x
  }
 })
}
function fuzzyMatch(array, item){
  return array.filter(x => 
    x.indexOf(item) === 0)
  
}
console.log(fuzzyMatch(drivers, "Sa"))
function matchName(array, item){
  const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  return array.filter(x=> x.name.toUpperCase() === item.toUpperCase())
}