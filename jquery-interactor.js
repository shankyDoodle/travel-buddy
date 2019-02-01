function uncheckAll() {
  let aWrapperDOMs = document.getElementsByClassName("wrapper");
  for (let i = 0; i < aWrapperDOMs.length; i++) {
    aWrapperDOMs[i].getElementsByClassName("radioButton")[0].checked = false;
  }
}

$(document).ready(function () {

  let oTableContentDOM = document.getElementsByClassName("table-content-checkbox")[0];
  for (let sKey in oMasterData) {
    let oWrapperDOM = document.createElement('div');
    oWrapperDOM.className = "wrapper";

    let radioButton = document.createElement('input');
    radioButton.type = "radio";
    radioButton.className = "radioButton";
    radioButton.onclick = function () {
      uncheckAll();
      radioButton.checked = true;

      let sBuddy = findBuddyOptimized(sKey);
      document.getElementsByClassName("travel-buddy-ans")[0].innerText = 'Travel Buddy is: '+ sBuddy;
    };

    let name = document.createElement('div');
    name.innerHTML = '<div class="buddyName">'+ sKey + '</div>'+'<div class="travelPath">'+ oMasterData[sKey]+'</div>';
    name.className = "nameContainer";

    oWrapperDOM.appendChild(radioButton);
    oWrapperDOM.appendChild(name);
    oTableContentDOM.appendChild(oWrapperDOM)
  }

});