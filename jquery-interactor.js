function uncheckAll(isForPart2) {
  let sDesiredClassName = isForPart2 ? "wrapper2" : "wrapper";
  let aWrapperDOMs = document.getElementsByClassName(sDesiredClassName);
  for (let i = 0; i < aWrapperDOMs.length; i++) {
    aWrapperDOMs[i].getElementsByClassName("radioButton")[0].checked = false;
  }
}

$(document).ready(function () {

  //************************************************ Part 1 Rendering *************************************************

  let oTableContentDOM = document.getElementsByClassName("table-content-checkbox")[0];
  for (let sKey in oMasterData) {
    let oWrapperDOM = document.createElement('div');
    oWrapperDOM.className = "wrapper";

    let radioButton = document.createElement('input');
    radioButton.type = "radio";
    radioButton.className = "radioButton";

    let name = document.createElement('div');
    name.innerHTML = '<div class="buddyName">'+ sKey + '</div>'+'<div class="travelPath">'+ oMasterData[sKey]+'</div>';
    name.className = "nameContainer";

    oWrapperDOM.onclick = function () {
      uncheckAll();
      radioButton.checked = true;

      let sBuddy = findBuddyOptimized(sKey);
      document.getElementsByClassName("travel-buddy-ans")[0].innerText = 'Travel Buddy is:\t'+ sBuddy;
    };
    oWrapperDOM.appendChild(radioButton);
    oWrapperDOM.appendChild(name);
    oTableContentDOM.appendChild(oWrapperDOM)
  }


  //************************************************ Part 2 Rendering *************************************************

  let oTableContentDOM2 = document.getElementsByClassName("table-content-checkbox2")[0];
  for (let sKey in oMasterDataPart2) {
    let oWrapperDOM = document.createElement('div');
    oWrapperDOM.className = "wrapper2";

    let radioButton = document.createElement('input');
    radioButton.type = "radio";
    radioButton.className = "radioButton";


    let name = document.createElement('div');
    name.innerHTML = '<div class="buddyName">'+ sKey + '</div>'+'<div class="travelPath">'+ oMasterDataPart2[sKey]+'</div>';
    name.className = "nameContainer";

    oWrapperDOM.onclick = function () {
      uncheckAll(true);
      radioButton.checked = true;

      let sBuddy2 = findBuddyPart2(sKey);
      document.getElementsByClassName("travel-buddy-ans2")[0].innerText = 'Travel Buddy is:\t'+ sBuddy2;
    };
    oWrapperDOM.appendChild(radioButton);
    oWrapperDOM.appendChild(name);
    oTableContentDOM2.appendChild(oWrapperDOM)
  }

});