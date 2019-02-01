// let now = require("performance-now");

let oMasterData = {
  "Sam": ["San Mateo", "Redwood City", "Sunnyvale", "San Jose"],
  "Lucy": ["Redwood City", "San Mateo", "San Francisco"],
  "Aprameya": ["San Mateo", "San Jose", "Los Vegas"],
  "Paul": ['San Jose', 'Redwood City', 'San Francisco'],
  "Rain": ['San Francisco', 'San Mateo', 'San Jose', 'Los Vegas']
};


function longestCommonPath(aTravelerPath, aBuddyPath) {
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
      } else if (aTravelerPath[i - 1] === aBuddyPath[j - 1]) {
        aPaths[i][j] = aPaths[i - 1][j - 1] + 1;
      } else {
        aPaths[i][j] = Math.max(aPaths[i - 1][j], aPaths[i][j - 1]);
      }
    }
  }

  /* aPaths[iTrLen][iBudLen] contains length of longestCommonPath for aTravelerPath[0..iBudLen-1]
  and aBuddyPath[0..iTrLen-1] */
  return aPaths[iTrLen][iBudLen];
}

function cloneMasterData(src) {
  return JSON.parse(JSON.stringify(src));
}

function findBuddyOptimized(sTraveler) {
  // let start = now();

  let oClonedMasterData = cloneMasterData(oMasterData);

  let aTravelerCities = oClonedMasterData[sTraveler];
  delete oClonedMasterData[sTraveler];

  let iMax = -1;
  let sBuddy = "none";

  for(let sKey in oClonedMasterData){
    let iLCP = longestCommonPath(aTravelerCities, oClonedMasterData[sKey]);
    if (iMax < iLCP) {
      iMax = iLCP;
      sBuddy = sKey;
    }
  }

  // let end = now();
  // console.log("Time Taken:", end - start);

  return sBuddy;
}


// let sBuddy = findBuddyOptimized("Sam");
// console.log(sBuddy);