// let now = require("performance-now");


let aMasterData = [
  {
    name: "Sam",
    cities: ["San Mateo", "Redwood City", "Sunnyvale", "San Jose"]
  },
  {
    name: "Lucy",
    cities: ["Redwood City", "San Mateo", "San Francisco"]
  },
  {
    name: "Aprameya",
    cities: ["San Mateo", "San Jose", "Los Vegas"]
  },
  {
    name: "Paul",
    cities: ['San Jose', 'Redwood City', 'San Francisco']
  },
  {
    name: "Rain",
    cities: ['San Francisco', 'San Mateo', 'San Jose', 'Los Vegas']
  }
];

//part 1
function findBuddy(sTraveler) {
  // let start = now();


  let iTravelerIndex = aMasterData.findIndex(element => {
    return element.name === sTraveler;
  });

  let oTravelerData = aMasterData[iTravelerIndex];
  aMasterData.splice(iTravelerIndex, 1);


  let oBuddyMap = {};
  aMasterData.forEach(e => {
    oBuddyMap[e.name] = 0;
  });

  oTravelerData.cities.forEach((sTravelerCity, iTCityIndex) => {
    for (let i = 0; i < aMasterData.length; i++) {
      let oBuddy = aMasterData[i];
      let iCityFoundIndex = -1;
      let aBuddyCities = oBuddy.cities;
      for (let iBCIndex = 0; iBCIndex < aBuddyCities.length; iBCIndex++) {

        if (aBuddyCities[iBCIndex].toLowerCase() === sTravelerCity.toLowerCase()) {
          //city found
          iCityFoundIndex = iBCIndex;
          oBuddyMap[oBuddy.name]++;
          break;
        }
      }

      if (iCityFoundIndex > -1) {
        oBuddy.cities.splice(0, iCityFoundIndex + 1);
      }
    }
  });

  let sBuddy = "";
  let iMax = 0;
  Object.entries(oBuddyMap).forEach(element => {
    if (iMax < element[1]) {
      iMax = element[1];
      sBuddy = element[0];
    }
  });

  // let end = now();
  // console.log("Time Taken:", end - start);
  return sBuddy;
}

let sBuddy = findBuddy("Sam");
console.log(sBuddy);
