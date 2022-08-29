const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const result = drivers.filter(findMatching);

function findMatching(){
    const Bobby =  drivers[0] +  drivers[0]
    const Sammy = drivers[1]
    console.log("Bobby is equal to " + Bobby + " Sammy is equal to " + Sammy);
    return Bobby + Sammy;
}
console.log(result);
const result2 = drivers.filter(fuzzyMatch)
function fuzzyMatch(){
    drivers.length = 0;

    drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    const fuzzy = "Sa";

    if(fuzzy == "Sa"){
        console.log(drivers[1] + drivers[2] + drivers[4])  
    }
    else if(fuzzy == "y"){
        console.log(drivers[0] + drivers[2] + drivers[1] + drivers[4] )
    }
    else if(fuzzy == "mm"){
        console.log(drivers[1])
    }
    else{
        return drivers
    }

}
console.log(result2)
const result3 = drivers.filter(matchName);
function matchName(){
    const drivers = [
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
      const name = "Sammy";
      const homeTown = "Tampa Bay";

      if(name == 'Bobby'){
        console.log(drivers[0])
        return drivers[0]
      }
      else if( name == "Sammy"){
        console.log(drivers[1])
        return drivers[1]
      }
      else if( name == "Sally"){
        console.log(drivers[2])
        return drivers[2]
      }
      else if( name == "Annette"){
        console.log(drivers[3])
        return drivers[3]
      }
      else {
        console.log(drivers)

      }
      if (homeTown == "Tampa Bay"){
          console.log(drivers[4])
          return drivers[4];
      }
      else{
        return drivers
      }
}
console.log(result3)
