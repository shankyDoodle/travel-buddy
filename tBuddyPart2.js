// let now = require("performance-now");

let oMasterDataPart2 = {
  "Sam": ["San Mateo", "Redwood City", "Sunnyvale", "San Jose"],
  "Lucy": ["Redwood City", "San Mateo", "San Francisco"],
  "Aprameya": ["Burlingame", "San Jose", "Los Vegas"],
  "Paul": ['San Jose', 'Redwood City', 'San Francisco'],
  "Rain": ['San Francisco', 'San Mateo', 'San Jose', 'Los Vegas']
};

let oCityCoOrdinates = {
  "San Mateo": [37.562992, -122.325523],
  "Redwood City": [37.484779, -122.228149],
  "Sunnyvale": [37.368832, -122.036346],
  "San Jose": [37.338207, -121.886330],
  "San Francisco": [37.774929, -122.419418],
  "Los Vegas": [38.754860, -121.292130],
  "Burlingame": [37.577869, -122.348091]
};

function findDistanceBetweenCities(sCity1, sCity2) {

  let lat1 = oCityCoOrdinates[sCity1][0];
  let lon1 = oCityCoOrdinates[sCity1][1];

  let lat2 = oCityCoOrdinates[sCity2][0];
  let lon2 = oCityCoOrdinates[sCity2][1];

  let radlat1 = Math.PI * lat1/180;
  let radlat2 = Math.PI * lat2/180;

  let theta = lon1-lon2;
  let radtheta = Math.PI * theta/180;
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 0.8684;
  return dist;
}


function longestCommonPathPart2(aTravelerPath, aBuddyPath) {
  let iTrLen = aTravelerPath.length;
  let iBudLen = aBuddyPath.length;

  //create 2d array with value initialized as -1
  let aPaths = new Array(iTrLen + 1);
  for (let i = 0; i < aPaths.length; i++) {
    aPaths[i] = new Array(iBudLen + 1);
  }

  /* build aPaths[iTrLen+1][iBudLen+1] in bottom up fashion.
   aPaths[i][j] contains length of longest common path of aTravelerPath[0..i-1] and aBuddyPath[0..j-1] */
  for (let i = 0; i < iTrLen + 1; i++) {
    for (let j = 0; j < iBudLen + 1; j++) {
      if (i === 0 || j === 0) {
        aPaths[i][j] = 0;
      } else if (findDistanceBetweenCities(aTravelerPath[i - 1], aBuddyPath[j - 1]) <= 15) {
        aPaths[i][j] = aPaths[i - 1][j - 1] + 1;
      } else {
        aPaths[i][j] = Math.max(aPaths[i - 1][j], aPaths[i][j - 1]);
      }
    }
  }

  /* aPaths[iTrLen][iBudLen] contains length of longestCommonPath for
  aTravelerPath[0..iBudLen-1] and aBuddyPath[0..iTrLen-1] */
  return aPaths[iTrLen][iBudLen];
}

function cloneMasterData(src) {
  return JSON.parse(JSON.stringify(src));
}

function findBuddyPart2(sTraveler) {
  // let start = now();

  let oClonedMasterData = cloneMasterData(oMasterDataPart2);

  let aTravelerCities = oClonedMasterData[sTraveler];
  delete oClonedMasterData[sTraveler];

  let iMax = -1;
  let sBuddy = "none";

  for(let sKey in oClonedMasterData){
    let iLCP = longestCommonPathPart2(aTravelerCities, oClonedMasterData[sKey]);
    if (iMax < iLCP) {
      iMax = iLCP;
      sBuddy = sKey;
    }
  }

  // let end = now();
  // console.log("Time Taken:", end - start);

  return sBuddy;
}


// let sBuddy = findBuddyPart2("Lucy");
// console.log(sBuddy);
