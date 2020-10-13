// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

var csvPath = "https://www.redfin.com/stingray/api/gis-csv?al=1&market=sanfrancisco&min_stories=1&num_homes=350&ord=redfin-recommended-asc&page_number=1&region_id=6671&region_type=6&sf=1,2,3,5,6,7&status=9&uipt=1,2,3,4,5,6&v=8";

var urls = [

]
var myInteval, iUrl = 0;
var loadUrl = function (tab) {
  console.log("in the load url");

  ""
  if (iUrl >= urls.length) clearInterval(myInteval)
  else {
    chrome.tabs.executeScript(
      tab.id,
      { code: 'window.open("' + urls[iUrl] + '","_self");' },
      getDomcontent()
    );
    iUrl++;
  }
}
//Download the Html DOM content using content.js in a new tab
var getDomcontent = function () {
  console.log("in getDomcontent")
  setTimeout(function () {
    chrome.tabs.executeScript(
      null,
      { file: 'content.js' }
    )
  }, 1000);
}
// Loop over all the csv  Data to get home listing URLs
var processCSV = function (allText) {
  var rows = allText.split("\n");
  for (var iRow = 0; iRow < rows.length; iRow++) {
    var cals = rows[iRow].split(",");
    console.log(cals[20]);
    if (cals[20]) {
      urls.push(cals[20]);
    }
  }
  console.log(urls);


}

chrome.browserAction.onClicked.addListener(function (tab) {
  // fetch(csvPath)
  // .then((response) => {
  //   console.log(response.body);
  //   return response.body.getReader();
  // })
  // .then((data) => {
  //   console.log(data);
  // });

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", csvPath, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        var allText = rawFile.responseText;
        processCSV(allText);
      }
    }
  }
  rawFile.send(null);
  console.log("starting");
  loadUrl(tab)
  /**
   * every 10 seconds trigger a reload of the new URL
   */
  myInteval = setInterval(function () { loadUrl(tab) }, 10000);
});
