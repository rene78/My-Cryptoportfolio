//Write URL hash value to variable
let hash = window.location.href.split('#')[1] || '';

//The demoportfolio which is shown on the start page
const demoportfolio = {
  "fiat": "EUR",
  "token":
    [
      {
        "cryptoTicker": "BTC",
        "cryptoName": "Bitcoin",
        "cryptoQty": "0.5",
        "cryptoInvestedSum": "4000"
      },
      {
        "cryptoTicker": "ADA",
        "cryptoName": "Cardano",
        "cryptoQty": "25000",
        "cryptoInvestedSum": "1000"
      },
      {
        "cryptoTicker": "ETH",
        "cryptoName": "Ethereum",
        "cryptoQty": "15",
        "cryptoInvestedSum": "1500"
      },
      {
        "cryptoTicker": "XMR",
        "cryptoName": "Monero",
        "cryptoQty": "50",
        "cryptoInvestedSum": "1000"
      }
    ]
};
const fiats = [
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
  { code: "BRL", name: "Brazilian real", symbol: "R$" },
  { code: "CAD", name: "Canadian dollar", symbol: "$" },
  { code: "CHF", name: "Swiss franc", symbol: "Fr." },
  { code: "CLP", name: "Chilean peso", symbol: "$" },
  { code: "CNY", name: "Chinese yuan", symbol: "¥" },
  { code: "CZK", name: "Czech koruna", symbol: "Kč" },
  { code: "DKK", name: "Danish krone", symbol: "kr" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "Pound sterling", symbol: "£" },
  { code: "HKD", name: "Hong Kong dollar", symbol: "$" },
  { code: "HUF", name: "Hungarian forint", symbol: "Ft" },
  { code: "IDR", name: "Indonesian rupiah", symbol: "Rp" },
  { code: "ILS", name: "Israeli new shekel", symbol: "₪" },
  { code: "INR", name: "Indian rupee", symbol: "₹" },
  { code: "JPY", name: "Japanese yen", symbol: "¥" },
  { code: "KRW", name: "South Korean won", symbol: "₩" },
  { code: "MXN", name: "Mexican peso", symbol: "$" },
  { code: "MYR", name: "Malaysian ringgit", symbol: "RM" },
  { code: "NOK", name: "Norwegian krone", symbol: "kr" },
  { code: "NZD", name: "New Zealand dollar", symbol: "$" },
  { code: "PHP", name: "Philippine peso", symbol: "₱" },
  { code: "PKR", name: "Pakistani rupee", symbol: "Rs" },
  { code: "PLN", name: "Polish złoty", symbol: "zł" },
  { code: "RUB", name: "Russian ruble", symbol: "₽" },
  { code: "SEK", name: "Swedish krona", symbol: "kr" },
  { code: "SGD", name: "Singapore dollar", symbol: "S$" },
  { code: "THB", name: "Thai baht", symbol: "฿" },
  { code: "TRY", name: "Turkish lira", symbol: "₺" },
  { code: "TWD", name: "New Taiwan dollar", symbol: "NT$" },
  { code: "USD", name: "United States dollar", symbol: "$" },
  { code: "ZAR", name: "South African rand", symbol: "R" }
];
let coinPrices = {};
let portfolio = {};
let portfolioChart;

//Preferred language of app user
let userLang;

//Available languages. Order has to be similar to the translations
const languages = ["en", "de"];

//Fill out coin list for search filter array with all coin options on load
let coinlistFiltered = coinlist;

//Counter for up/down arrow coin selection
let locNumber;

//Set user language on load
setUserLang();

//Display Portfolio on load
getPortfolioFromDB();

//Set the user language on page load
function setUserLang() {
  //default language: en
  userLang = "en";
  //First check, if a preferred language is saved in localstorage
  let prefLanguage = localStorage.getItem("prefLanguage");
  if (prefLanguage) userLang = prefLanguage;
  //Else, i.e. no pref language saved in local storage
  else {
    // console.log(userLang);
    console.log(navigator.languages);
    let navigatorLanguage;
    //Go through all preferred languages defined in the browser and take the first match, i.e. de or en
    for (let i = 0; i < navigator.languages.length; i++) {
      navigatorLanguage = navigator.languages[i].slice(0, 2); //Just keep the first 2 letters (e.g. en-US --> en)
      // if (navigatorLanguage === "en" || navigatorLanguage === "de") {
      if (languages.indexOf(navigatorLanguage) !== -1) {
        userLang = navigatorLanguage;
        localStorage.setItem("prefLanguage", userLang);
        break;
      }
    }
  }
  // console.log(userLang);
}

//Get all relevant DOM elements and translate it according to selected language
function changeAppLanguage(currLangIndex) {
  // console.log(currLangIndex);
  //If language has been selected from drop down
  if (!currLangIndex) {
    currLangIndex = document.getElementById("lang-selection").selectedIndex;
    userLang = languages[currLangIndex];
    //Write selected language to local storage
    localStorage.setItem("prefLanguage", userLang);
  }
  //else: function started after page load (lang coming from browser/local storage)
  else document.getElementById("lang-selection").selectedIndex = currLangIndex;//select language in drop down

  //Go through all elements in "translations" and change strings in DOM
  let numberOfTextElements = Object.keys(translations).length;
  // console.log(currLangIndex);
  for (let i = 0; i < numberOfTextElements; i++) {
    let textToChange = document.getElementById(Object.keys(translations)[i]);
    // console.log(textToChange);
    // console.log(Object.values(translations)[i][currLangIndex][0]);

    //Special case for "Create" Portfolio link: If hash is empty and the loop reaches the id "edit-portfolio-link" or "edit-portfolio-heading" take the translation for "Create Portfolio"
    if (hash === "" && (Object.keys(translations)[i] === "edit-portfolio-link" || Object.keys(translations)[i] === "edit-portfolio-heading")) {
      textToChange.childNodes[0].nodeValue = Object.values(translations)[i][currLangIndex][2];
      //If there is a tooltip --> Translate as well:
      if (textToChange.title) textToChange.title = Object.values(translations)[i][currLangIndex][1];
      continue;
    }

    textToChange.childNodes[0].nodeValue = Object.values(translations)[i][currLangIndex][0];
    //Check, if there is a tooltip. If yes: Translate!
    if (textToChange.title) textToChange.title = Object.values(translations)[i][currLangIndex][1];
  }

  //Translate all the tooltips in the edit table
  let cryptoQtyDom = document.querySelectorAll(".crypto-qty");
  let cryptoInvestedSum = document.querySelectorAll(".crypto-invested-sum");
  let editPortfolioDelete = document.querySelectorAll(".delete-cell");
  // console.log(cryptoQtyDom[0]);
  for (let i = 0; i < cryptoQtyDom.length; i++) {
    cryptoQtyDom[i].title = translations["ncoins-heading"][currLangIndex][1];
    cryptoInvestedSum[i].title = translations["edit-portfolio-invested-sum"][currLangIndex][1];
    editPortfolioDelete[i].title = translations["edit-portfolio-delete"][currLangIndex][1];
  }

  //Now translate the FAQ's
  for (let i = 0; i < Object.keys(translFAQ).length; i++) {
    let textToReplace = document.getElementById(Object.keys(translFAQ)[i]);
    // console.log(textToReplace);
    textToReplace.innerHTML = Object.values(translFAQ)[i][currLangIndex];
  }
}

/* GET Portfolio from database
/ Example for working URL: http://127.0.0.1:5500/index.html#5c3c8b7893902f2004a421a3
*/
function getPortfolioFromDB() {
  //console.log(hash);
  //Render demoportfolio if coming from main site
  if (hash == "") {
    console.log("Hash is empty --> Load Demoportfolio!");
    portfolio = demoportfolio;
    //console.log(portfolio);
    createEditTable();
    downloadCoinPrices();

    return;
  }

  //Else download from database via Azure Function and - if available - from local storage (LS) first

  // Try to retrieve from LS
  const retrievedStringFromLocalStorage = localStorage.getItem(hash);
  //console.log(retrievedStringFromLocalStorage);

  //Is portfolio with given ID available in LS?
  //If yes: Use this data to display portfolio on website immediately. Cold start time of Azure Functions won't impact user experience
  if (retrievedStringFromLocalStorage != null) {
    console.log("Portfolio found in local storage! I will use this data to display the portfolio first. In the meantime the version from the DB is downloaded as well (Takes 10s, if Azure function is cold-started).");
    portfolioFromLocalStorage = JSON.parse(retrievedStringFromLocalStorage);
    portfolio = portfolioFromLocalStorage;
    downloadCoinPrices();
    createEditTable();
  } else {
    console.log("Portfolio NOT available in local storage! Load it as usual from DB and save a copy in LS.");
  }

  // var url = "http://localhost:7071/api/getPortfolio?id=" + hash; //Local Function URL - !!Make sure to remove the Cors entry in local_settings of Function before uploading to Azure
  var url = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/GetPortfolio?id=" + hash; //Azure Function URL
  fetch(url)
    .then(handleErrors)
    .then(res => {
      //console.log(res.clone());//res.json() cannot be used twice in the callback. Thus res.clone() (see https://stackoverflow.com/q/46742251/5263954)
      //resStatus = res.status;
      //console.log(resStatus);
      return res.json();
    })
    .then(data => {
      //console.log(data);
      //Compare portfolio from local storage with version in DB to check whether LS version is up-to-date
      if (retrievedStringFromLocalStorage != null) {
        if (portfolioFromLocalStorage.updatedAt == data.updatedAt) {
          console.log("'updatedAt' from portfolio in DB is SIMILAR with the one in local storage. No need to update display.");
          return;
        }
      }
      console.log("DB version of portfolio is NEWER as the one in local storage or local storage is empty! Update display & Update local storage.");
      portfolio = data;
      downloadCoinPrices();
      createEditTable();
      localStorage.setItem(hash, JSON.stringify(portfolio));
    })
    .catch(error => {
      console.error('There was an error:', error.message)
      hash = "";
      location.hash = "";
      //window.location.href = "/index.html#"; //Remove hash value from URL
      //Get hash
      //hash = window.location.href.split('#')[1] || '';
      //Display demoportfolio
      getPortfolioFromDB();
      let infotext = "<strong>" + translInfotextMessages.errorWhileDownloading[languages.indexOf(userLang)] + "</strong><br>" + error.message;
      // infotext = "<strong>An error occured</strong><br>" + error.message;
      showAlert(infotext, "fail");
    });
}

//Handle errors from fetch operation
function handleErrors(response) {
  //console.log(response);
  if (!response.ok) {
    // response.json().then(function(responseBody) {
    //   console.log(responseBody.message);
    //   //throw Error(responseBody.message); //This approach does not work because body stream is already locked by fetch operation.
    // });
    throw Error(response.statusText);
  }
  return response;
}

// Download current coin prices from external API. Then call the displayPortfolio function
function downloadCoinPrices() {
  //Array "allTickers" is filled with all crypto tickers.
  var allTickers = portfolio.token.map(item => item.cryptoTicker);
  //console.log('allTicker: ' + allTickers);

  //Create API request URL
  var coinAPI = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + allTickers + "&tsyms=" + portfolio.fiat;
  //console.log('coinAPI: ' + coinAPI);

  //Hide fetch and undhide 5 lines below to show portfolio with locally saved demo prices
  // coinPrices = coinpricesExample;
  // displayPortfolio();
  // createChartData();
  // let index = languages.indexOf(userLang);
  // changeAppLanguage(index);

  ///*
  fetch(coinAPI)
    .then(handleErrors)
    .then(res => {
      //console.log(res.clone());//res.json() cannot be used twice in the callback. Thus res.clone() (see https://stackoverflow.com/q/46742251/5263954)
      return res.json();
    })
    .then(prices => {
      //console.log(prices);
      coinPrices = prices;
      displayPortfolio();
      createChartData();
      //Once tables are fully rendered run the translate function to translate the app)
      let index = languages.indexOf(userLang);
      changeAppLanguage(index);
    })
    .catch(error => {
      console.error('There was an error while downloading coin prices:', error.message);
      let infotext = "<strong>" + translInfotextMessages.errorWhileDownloadingCoinPrices[languages.indexOf(userLang)] + "</strong><br>" + error.message;
      showAlert(infotext, "fail");
    });
  //*/
}

// Display portfolio on page
function displayPortfolio() {
  var myContainer = document.getElementById("display-portfolio");

  //GET-Anfrage an cryptocompare API
  var thisHTML = "";
  thisHTML += "<table id='portfolio-table'>";
  thisHTML += "<thead>";
  thisHTML += "<tr>";
  thisHTML += "<th id='coin-name' onclick='sortTable(0)' title='xxName of Cryptocurrency/Token. Click here to sort alphabetically'>xxName <div class='arrows-name'><div title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='last-price' onclick='sortTable(1)' title='xxLast price. Click here to sort.'>xxLast <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='change-perc' onclick='sortTable(2)' title='xxChange in percent in the last 24h. Click here to sort.'>xxChange <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='gain-loss-24h' onclick='sortTable(3)' title='xxGain/loss in the last 24h. Click here to sort.'>xxG/L Today <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "<th id='gain-loss' onclick='sortTable(4)' title='xxOverall gain/loss. Click here to sort.'>xxGain / Loss <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></div></th>";
  thisHTML += "</tr>";
  thisHTML += "</thead>";

  var i = 0;
  var overallGainLoss = 0;
  var overallGainLossToday = 0;
  var cryptoStyle = "class='cryptoUp'";
  var fiatSymbol = fiats.find(i => i.code === portfolio.fiat).symbol;

  thisHTML += "<tbody>";
  thisHTML += "<tr>";

  for (i = 0; i < portfolio.token.length; i++) {
    var cryptoTicker = portfolio.token[i].cryptoTicker;
    let check = coinPrices['RAW'][cryptoTicker];
    if (typeof check == 'undefined') { continue; } //If a ticker symbol is not available on cryptocompare it will be skipped
    var fullName = portfolio.token[i].cryptoName;
    var cryptoQty = portfolio.token[i].cryptoQty;
    var cryptoInvestedSum = portfolio.token[i].cryptoInvestedSum;
    var lastPrice = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['PRICE'];
    var changePct24H = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['CHANGEPCT24HOUR'];
    var change24H = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['CHANGE24HOUR'];
    // var fiatSymbol = coinPrices['DISPLAY'][cryptoTicker][portfolio.fiat]['TOSYMBOL'];

    var cryptoGainLoss = 0;
    var cryptoGainLossToday = 0;
    var cryptoBuyingPrice = 0;

    //Some values on CryptoCompare return "null". That would break ".toFixed" below:
    if (changePct24H != null) {
      changePct24H = changePct24H.toFixed(1).concat(" %"); //Example: 2.36: toFixed: Only one digit after the comma (2.4). Concat: Add percentage sign (2.4%).
    }

    if (cryptoQty != 0) {
      cryptoBuyingPrice = cryptoInvestedSum / cryptoQty;
      cryptoGainLoss = cryptoQty * (lastPrice - cryptoBuyingPrice);
      cryptoGainLossToday = cryptoQty * change24H;
      overallGainLoss += cryptoGainLoss;
      overallGainLossToday += cryptoGainLossToday;
    }

    //Code below makes sure that there are not too many digits after the comma. parseFloat is necessary, because lastPrice is apparently considered a string and toFixed only works with numbers.
    if (lastPrice < 0.1) {
      lastPrice = parseFloat(lastPrice).toFixed(3);
    } else if (lastPrice < 10) {
      lastPrice = parseFloat(lastPrice).toFixed(2);
    } else {
      lastPrice = parseFloat(lastPrice).toFixed(0);
    }

    thisHTML += "<td><a href='https://coinmarketcap.com/currencies/" + fullName.toLowerCase() + "' target=_blank>" + fullName + "</a></td>";
    thisHTML += "<td>" + lastPrice + " " + fiatSymbol + "</td>";

    //Change color of changePct24H and cryptoGainLossToday number according to value (-, 0, + -> red, black, green)
    cryptoStyle = redOrGreen(change24H);

    thisHTML += "<td " + cryptoStyle + ">" + changePct24H + "</td>";
    thisHTML += "<td " + cryptoStyle + ">" + cryptoGainLossToday.toFixed(0) + " " + fiatSymbol + "</td>";

    thisHTML += "<td " + redOrGreen(cryptoGainLoss) + ">" + cryptoGainLoss.toFixed(0) + " " + fiatSymbol + "</td>";
    thisHTML += "</tr>";
  }

  thisHTML += "</tbody>";
  thisHTML += "<tfoot>";
  thisHTML += "<tr>";
  thisHTML += "<td>Total</td>";
  thisHTML += "<td></td>";
  thisHTML += "<td></td>";

  thisHTML += "<td " + redOrGreen(overallGainLossToday) + ">" + add1000Separators(overallGainLossToday.toFixed(0)) + " " + fiatSymbol + "</td>";

  thisHTML += "<td " + redOrGreen(overallGainLoss) + ">" + add1000Separators(overallGainLoss.toFixed(0)) + " " + fiatSymbol + "</td>";
  thisHTML += "</tr>";
  thisHTML += "</tfoot>";
  thisHTML += "</table>"
  thisHTML += "<div class='watermark'>Demoportfolio</div>";

  myContainer.innerHTML = thisHTML;

  //If demoportfolio is shown:
  if (hash == "") {
    //Show watermark
    document.querySelector(".watermark").style.display = "inline-block";
    //Change link from "Edit Portfolio" to "Create Portfolio"
    document.getElementById("edit-portfolio-link").innerText = "xxCreate Portfolio";
  } else {
    //Only relevant after first upload from start page
    document.getElementById("edit-portfolio-link").innerText = "xxEdit Portfolio";
  }
}

// If value fell: red, value rose: green
function redOrGreen(value) {
  var cryptoStyle;
  if (value == 0) {
    cryptoStyle = "";
  } else if (value < 0) {
    cryptoStyle = "class='cryptoDown'";
  } else {
    cryptoStyle = "class='cryptoUp'";
  }
  return cryptoStyle;
}

//Add a dot as thousand separator
function add1000Separators(nStr) {
  //Example: nStr = 1427900000.45
  nStr += ''; //Convert input to string
  const x = nStr.split('.');//Split string at . into arrays [ '1427900000', '45' ]
  let x1 = x[0]; // 1427900000
  const x2 = x.length > 1 ? ',' + x[1] : ''; //,45
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + '.' + '$2'); // 1427900.000 --> 1427.900.000 --> 1.427.900.000
  }
  return x1 + x2; // 1.427.900.000,45
}

// Sort DISPLAY PORTFOLIO table by clicking on the table headers
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0, xGreaterThanY;
  table = document.getElementById("portfolio-table");
  switching = true;
  var arrowDown = document.getElementsByClassName("arrows-name")[n].firstElementChild;
  var arrowUp = document.getElementsByClassName("arrows-name")[n].lastElementChild;

  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers and the
    last - table footers):*/
    for (i = 1; i < (rows.length - 2); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      xGreaterThanY = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:
      n=0: Compare strings
      n>0: Compare numbers*/
      if (n === 0) { //Compare strings
        x = rows[i].getElementsByTagName("TD")[n].innerText.toLowerCase();
        y = rows[i + 1].getElementsByTagName("TD")[n].innerText.toLowerCase();
        if (x > y) xGreaterThanY = true;
      } else { //Compare numbers
        x = rows[i].getElementsByTagName("TD")[n].innerText.replace(/[^-0-9.]/g, '');//Regex: Remove everything except numbers, "-" and ".",e.g. "-35.6 %" --> "-35.6"
        y = rows[i + 1].getElementsByTagName("TD")[n].innerText.replace(/[^-0-9.]/g, '');
        if (Number(x) > Number(y)) xGreaterThanY = true;
      }
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        //xGreaterThanY = true: switch rows!
        if (xGreaterThanY) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        //if xGreaterThanY = false AND the 2 numbers are not equal: switch rows! 2nd condition important because if numbers are equal there would be an infinite loop
        if (!xGreaterThanY && Number(x) !== Number(y)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  //Set the display of arrows according to "asc" or "desc"
  showAllArrows(); //Show all arrows in the header, which might have been hidden during previous sort operation
  if (dir == "asc") arrowDown.classList.remove("triangle-down"); //Change display to UP arrow only.
  else if (dir == "desc") arrowUp.classList.remove("triangle-up"); //Change display to DOWN arrow only.
}

//Show all sort arrows
function showAllArrows() {
  var allArrows = document.getElementsByClassName("arrows-name");
  for (let i = 0; i < allArrows.length; i++) {
    var arrowDown = document.getElementsByClassName("arrows-name")[i].firstElementChild;
    var arrowUp = document.getElementsByClassName("arrows-name")[i].lastElementChild;
    arrowDown.classList.add("triangle-down");
    arrowUp.classList.add("triangle-up");
  }
}

//Render chart
function createChartData() {
  let chartLabels = [], coinOverallValue = [];

  for (i = 0; i < portfolio.token.length; i++) {
    var cryptoTicker = portfolio.token[i].cryptoTicker;
    var cryptoQty = portfolio.token[i].cryptoQty;
    let check = coinPrices['RAW'][cryptoTicker];
    if (typeof check == 'undefined') { continue; } //If a ticker symbol is not available on cryptocompare it will be skipped
    var lastPrice = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['PRICE'];
    var fiatSymbol = coinPrices['DISPLAY'][cryptoTicker][portfolio.fiat]['TOSYMBOL'];

    chartLabels.push(portfolio.token[i].cryptoName);
    coinOverallValue.push(Math.round(cryptoQty * lastPrice));
  }
  // console.log(chartLabels);
  // console.log(coinOverallValue);

  let chartData = {
    type: 'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'Overall Value',
        data: coinOverallValue,
        //backgroundColor:'green',
        backgroundColor: [
          'green',
          'red',
          'blue',
          'yellow',
          'brown',
          'orange',
          'violet',
          'lime',
          'darkcyan',
          'wheat',
          'mistyrose',
          'slategray',
          'goldenrod',
          'olive',
          'lavender',
          'moccasin'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
      }]
    },
    options: {
      title: {
        display: false,
        text: 'Portfolio Weighting',
        fontSize: 25
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          fontColor: '#000'
        }
      },
      tooltips: {
        // enabled: true,
        callbacks: {
          label: (tooltipItem, data) => {
            // console.log(tooltipItem);
            // console.log(data);
            // console.log(tooltipItem.index);
            let datasetLabel = data.labels[tooltipItem.index] || 'Other';
            // console.log(datasetLabel);
            let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || 'Other';
            return datasetLabel + ": " + value + " " + fiatSymbol;
          }
        }
      }
    }
  }
  //In case there is an old graph: Remove it from the DOM in order to render the new graph
  if (portfolioChart !== undefined) portfolioChart.destroy();
  //Render chart
  let myChart = document.getElementById('chart-canvas').getContext('2d');
  portfolioChart = new Chart(myChart, chartData);
}

// Create portfolio edit table, fill it with values (i.e. names and numbers) from portfolio and create a search filter
function createEditTable() {
  var tableHTML = '<button id="edit-portfolio-button" onclick="toggleSegmentDisplay(\'.edit-portfolio\')" class="close" title="xxxClose the edit tablexx" aria-label="Close the portfolio edit table">&times;</button>'
  tableHTML += "<h1 id='edit-portfolio-heading'>xxEdit Portfolioxx</h1>";
  tableHTML += '<table id="portfolio-update-form">';
  tableHTML += "<thead>";
  tableHTML += "<tr>";
  tableHTML += '<th id="edit-portfolio-select-coin" title="xxSelect coinxx">xxSelectionxx</th>';
  tableHTML += '<th id="ncoins-heading" title="xxOverall number of coins in your possessionxx">xxNumber of coinsxx</th>';
  tableHTML += '<th id="edit-portfolio-invested-sum" title="xxHow much fiat did you invest to buy this coin?xx">xxInvested sumxx</th>';
  tableHTML += '<th id="edit-portfolio-delete" title="xx">xx</th>';
  tableHTML += '<th>Ticker Symbol</th>';
  tableHTML += '<th>Name</th>';
  tableHTML += '</tr>';
  tableHTML += '</thead>';
  tableHTML += '<tbody id="token">';

  for (let i = 0; i < portfolio.token.length; i++) {
    tableHTML += "<tr class='token-row'>";
    tableHTML += '<td><button onclick="showHideDropdown(this); createOptions(this)" class="dropdown-button">Select coin...<div class="triangle-down"></div></button><div class="dropdown-content"><input class="my-input" type="text" placeholder="Search.." onkeyup="filterCoins(this)" autocomplete="off"><div class="all-token"></div></div></td>';
    tableHTML += '<td><input type="number" name="cryptoQty" class="crypto-qty" value="" min="0" placeholder="e.g. 5" title="Overall number of coins in your possession" required="true"></td>';
    tableHTML += '<td><input type="number" class="crypto-invested-sum" value="" min="0" placeholder="e.g. 1000" title="How much fiat did you invest to buy this coin?" required="true"></td>';
    tableHTML += '<td class="delete-cell" onclick="deleteRow(this)" title="Click to delete coin"><svg class="dustbin"><use xlink:href="img/icons.svg#dustbin-logo"></use></svg></td>';
    tableHTML += '<td><input type="text" class="crypto-ticker" value="" placeholder="e.g. BTC" title="Ticker symbol of cryptocurrency" name="cryptoTicker" required="true" disabled> </td>';
    tableHTML += '<td><input type="text" class="crypto-name" value="" placeholder="e.g. Bitcoin" title="Name of cryptocurrency" name="cryptoName" required="true" disabled> </td>';
    tableHTML += "</tr>";
  }

  tableHTML += "</tbody>";
  tableHTML += "<tfoot>"
  tableHTML += "<tr>";
  tableHTML += '<td id="add-token" title="xxAdd a new tokenxx" onclick="insertRow()">+</td>';
  tableHTML += "</tr>";
  tableHTML += "</tfoot>"
  tableHTML += "</table>";
  tableHTML += '<div class="fiat">';
  tableHTML += '<label for="fiat" class="fiat-label">Fiat </label>';
  tableHTML += '<select id="fiat" class="fiat-select" title="xxSelect your fiat currencyxx">';
  for (let i = 0; i < fiats.length; i++) {
    tableHTML += '<option value="' + fiats[i].code + '">' + fiats[i].code + ' - ' + fiats[i].name + '</option>';
  }
  tableHTML += '</select>';
  tableHTML += '</div>';
  tableHTML += '<button id="edit-portfolio-save-button" class="save-button" onclick="postPortfolio()" title="xxSave portfolio to databasexx"> xxSavexx <svg id="upload-icon"><use xlink:href="img/icons.svg#upload-logo"></use></svg><div class="loading-animation"></div></button>'
  tableHTML += '<button id="edit-portfolio-delete-button" class="delete-portfolio-button" onclick="deletePortfolio()" title="xxIrrevocably delete portfolio from databasexx">xxDelete Portfolioxx</button>';
  tableHTML += '<div id="edit-table-foot"></div>';
  document.querySelector(".edit-portfolio").innerHTML = tableHTML;
  //Fill out table with values from DB
  fillOutTable();

  //If demoportfolio is shown:
  if (hash === "") {
    //Change heading from "Edit Portfolio" to "Create Portfolio" - Not necessary anymore. Translate function takes care of that
    document.getElementById("edit-portfolio-heading").innerText = "xxCreate Portfolio";
    //Hide delete button
    document.querySelector(".delete-portfolio-button").style.display = "none";
  }
}

//Insert row in edit table and open coin selection menu
function insertRow() {
  //First check, if a token has been selected in last input field. If no: cancel! We don't want empty rows.
  var lastInputField = document.getElementById("token").lastElementChild.querySelector(".crypto-ticker").value;
  //console.log(lastInputField);
  if (lastInputField === "") {
    showAlert(translInfotextMessages.selectCoinFirst[languages.indexOf(userLang)], "fail");
    // showAlert("Select a coin in the previous input field first.", "fail");
    console.log("Select a coin in the previous input field first.");
    return;
  };

  var entries = document.getElementById("token");
  var tableHTML = "<tr class='token-row'>";
  tableHTML += '<td><button onclick="showHideDropdown(this); createOptions(this)" class="dropdown-button">' + translations["edit-portfolio-select-coin"][languages.indexOf(userLang)][1] + '<div class="triangle-down"></div></button><div class="dropdown-content"><input class="my-input" type="text" placeholder="Search.." onkeyup="filterCoins(this)" autocomplete="off"><div class="all-token"></div></div></td>';
  tableHTML += '<td><input type="number" name="cryptoQty" class="crypto-qty" value="" min="0" placeholder="e.g. 5" title="' + translations["ncoins-heading"][languages.indexOf(userLang)][1] + '" required="true"></td>';
  tableHTML += '<td><input type="number" class="crypto-invested-sum" value="" min="0" placeholder="e.g. 1000" title="' + translations["edit-portfolio-invested-sum"][languages.indexOf(userLang)][1] + '" required="true"></td>';
  tableHTML += '<td class="delete-cell" onclick="deleteRow(this)" title="' + translations["edit-portfolio-delete"][languages.indexOf(userLang)][1] + '"><svg class="dustbin"><use xlink:href="img/icons.svg#dustbin-logo"></use></svg></td>';
  tableHTML += '<td><input type="text" class="crypto-ticker" value="" placeholder="e.g. BTC" title="Ticker symbol of cryptocurrency" name="cryptoTicker" required="true" disabled> </td>';
  tableHTML += '<td><input type="text" class="crypto-name" value="" placeholder="e.g. Bitcoin" title="Name of cryptocurrency" name="cryptoName" required="true" disabled> </td>';
  tableHTML += "</tr>";

  entries.insertAdjacentHTML("beforeend", tableHTML);
  SelectCoinButton = document.querySelector("#token").lastElementChild.querySelector(".dropdown-button");
  // console.log(SelectCoinButton);
  createOptions(SelectCoinButton);
  showHideDropdown(SelectCoinButton);
}

//Delete row in edit table
function deleteRow(b) {
  //console.log(b);
  var nRows = document.getElementById("portfolio-update-form").rows.length;
  //console.log(nRows);
  //Only delete row, if at least 2 token are there.
  if (nRows > 3) {
    var i = b.parentNode.rowIndex;
    //console.log("b.parentNode.rowIndex: "+ i);
    document.getElementById("portfolio-update-form").deleteRow(i);
  } else {
    console.log("Last token row cannot be deleted!");
  }
}

//On load write fiat, full name, symbol and coin name into fields of edit table. Take ticker from DB, the rest comes from coinlist
function fillOutTable() {
  //var fiatIndex = fiats.indexOf(portfolio.fiat);
  var fiatIndex = fiats.findIndex(i => i.code === portfolio.fiat);
  //console.log(fiatIndex);
  document.getElementById("fiat").selectedIndex = fiatIndex;
  for (i = 0; i < portfolio.token.length; i++) {
    var ticker = portfolio.token[i].cryptoTicker;
    var n = coinlist.findIndex(i => i.Symbol === ticker);
    // console.log(portfolio.token[i].cryptoTicker);
    // console.log(portfolio);
    // console.log(n);
    // console.log(coinlist[n]);
    var selectCoin = document.getElementsByClassName("dropdown-button")[i];
    var ticker = document.getElementsByClassName("crypto-ticker")[i];
    var name = document.getElementsByClassName("crypto-name")[i];
    var quantity = document.getElementsByClassName("crypto-qty")[i];
    var investedSum = document.getElementsByClassName("crypto-invested-sum")[i];

    //Write values from coinlist/portfolio into input fields. Do a simple input sanitization beforehand in order to prevent XSS attacks.
    selectCoin.innerHTML = sanitizeHTML(coinlist[n].FullName) + "<div class='triangle-down'></div>";
    ticker.setAttribute("value", sanitizeHTML(coinlist[n].Symbol));
    name.setAttribute("value", sanitizeHTML(coinlist[n].CoinName));
    quantity.setAttribute("value", sanitizeHTML(portfolio.token[i].cryptoQty));
    investedSum.setAttribute("value", sanitizeHTML(portfolio.token[i].cryptoInvestedSum));
  }
}

//Filter and display coins while typing
function filterCoins(e) {

  //console.log(window.event);
  // var event = window.event
  // var event = window.event ? window.event : e;
  //console.log(event);
  //var allToken = window.event.composedPath()[0].nextElementSibling.children;
  var allToken = e.closest(".dropdown-content").querySelector(".all-token").children;
  //console.log(allToken);
  //console.log(event.keyCode)
  if (event.keyCode == '38') {
    console.log("Up arrow");
    if (locNumber > 0) {
      locNumber--;
      console.log("locNumber", locNumber);
      // allToken[locNumber].style.backgroundColor = "#ddd";
      allToken[locNumber].classList.add("active");
      if (locNumber < allToken.length) {
        // allToken[locNumber + 1].style.backgroundColor = null;
        allToken[locNumber + 1].classList.remove("active");
      }
    }
    return;
  }
  else if (event.keyCode == '40') {
    console.log("Down arrow");
    if (locNumber < allToken.length - 1) {
      locNumber++;
      console.log("locNumber", locNumber);
      // allToken[locNumber].style.backgroundColor = "#ddd";
      allToken[locNumber].classList.add("active");
      if (locNumber > 0) {
        // allToken[locNumber - 1].style.backgroundColor = null;
        allToken[locNumber - 1].classList.remove("active");
      }
    }
    return;
  }
  else if (event.keyCode == '13') {
    console.log("Enter");
    //console.log(allToken[locNumber])
    //If Arrow up/down has not been used: Select uppermost coin. Else forward the selected coin.
    if (locNumber > -1) {
      writeToNameField(allToken[locNumber], locNumber);
    } else {
      writeToNameField(allToken[0], 0);
    }

    return;
  }
  else if (event.keyCode == '27') {
    console.log("Escape");
    showHideDropdown(e.parentElement);
  }

  var input = e.value.toUpperCase();
  // console.log(input);
  coinlistFiltered = coinlist.filter(function (coin) {
    if (coin.FullName.toUpperCase().indexOf(input) > -1) {
      return coin;
    }
  });
  //console.log(coinlistFiltered);
  createOptions(e);
  locNumber = -1; //Reset counter so that after typing the first press of Arrow down starts at the top
}

//Create options for dropdown menu.
function createOptions(e) {
  var option = "";
  if (coinlistFiltered.length > 0) {
    for (index in coinlistFiltered) {
      option += "<a href='javascript:void(0)' onclick='writeToNameField(this, " + index + ")'>" + coinlistFiltered[index].FullName + "</option>";
      //Limit amount of tokens shown to 6
      if (index >= 5) {
        break;
      }
    }
  } else {
    option = "<a href='javascript:void(0)' class='nothing-found'>" + translInfotextMessages.nothingFound[languages.indexOf(userLang)] + "</option>";
  }

  var tokenContainer = e.closest(".token-row").querySelector('.all-token');
  //console.log(tokenContainer);
  tokenContainer.innerHTML = option;
}

//On selection write full name, symbol and coin name into fields of edit table
function writeToNameField(e, index) {
  /*var fullName = coinlistFiltered[index].FullName;
  console.log(fullName);*/
  var dropdownName = e.closest(".token-row").querySelector(".dropdown-button");
  var cryptoTicker = e.closest(".token-row").querySelector('.crypto-ticker');
  var cryptoName = e.closest(".token-row").querySelector('.crypto-name');

  dropdownName.innerHTML = coinlistFiltered[index].FullName + "<div class='triangle-down'></div>";
  cryptoTicker.value = coinlistFiltered[index].Symbol;
  cryptoName.value = coinlistFiltered[index].CoinName;
  showHideDropdown(e.closest(".token-row").querySelector(".dropdown-button"));
}

//When the user clicks on the text field, toggle between hiding and showing the dropdown content. Remove old text in input field
function showHideDropdown(e) {
  var dropDownContent = e.closest(".token-row").querySelector(".dropdown-content");
  dropDownContent.classList.toggle("show-dropdown-content");
  var searchField = e.closest(".token-row").querySelector(".my-input");
  //console.log(searchField);
  searchField.value = "";
  searchField.focus();
  searchField.scrollIntoView();
  coinlistFiltered = coinlist; //Reset coinlistFiltered
  locNumber = -1; //Reset arrow up/down counter
}

//Write form input into portfolio variable. Do some validation checks beforehand. Sort it alphabetically
function createPortfolioObject() {
  //console.log("Portfolio before update: ",portfolio);
  portfolio = {};
  portfolio["fiat"] = document.getElementById("fiat").value;
  portfolio["token"] = [];

  var nToken = document.getElementById("token").childElementCount;
  var cryptoTicker = document.getElementsByClassName("crypto-ticker");
  var cryptoName = document.getElementsByClassName("crypto-name");
  var cryptoQty = document.getElementsByClassName("crypto-qty");
  var cryptoInvestedSum = document.getElementsByClassName("crypto-invested-sum");

  /*
  / Some validation
  */
  //If no entries in form: Delete portfolio
  if (cryptoTicker.length == 0) {
    console.log("No entries in form. Delete Portfolio?");
    deletePortfolio();
    return false;
  }

  //Check if a ticker symbol is more than once in the portfolio
  var ticker = [];
  // console.log(cryptoTicker[0].value);
  for (var j = 0; j < cryptoTicker.length; j++) {
    ticker[j] = cryptoTicker[j].value;
  }
  var ticker = ticker.sort(); //sort ticker alphabetically
  // console.log(ticker);
  //var doubleEntry = false;
  //var results = [];

  for (var j = 0; j < ticker.length; j++) {
    if (ticker[j + 1] == ticker[j]) {
      // showAlert("Each and every coin can only be in the portfolio once! Please correct.", "fail");
      showAlert(translInfotextMessages.eachCoinOnlyOnce[languages.indexOf(userLang)], "fail");
      return false;
      //results.push(ticker[j]);
    }
    //console.log("j: ", j);
  }

  //Check if there are only empty entries in form
  var empty = true;
  ticker.forEach(entry => {
    if (entry.trim() !== "") {
      //console.log("This entry is NOT empty: " +entry);
      empty = false;
    }
  });
  if (empty == true) {
    showAlert("Coinnames are all EMPTY! Please correct.", "fail");
    // alert("Coinnames are all EMPTY! Please correct.");
    return false;
  }

  for (let i = 0; i < nToken; i++) {
    //Make sure that a valid number is entered for qty and invested_sum
    if (cryptoInvestedSum[i].value == "") {
      console.log("'cryptoInvestedSum' for " + cryptoName[i].value + " is empty! Will be changed to 0.");
      cryptoInvestedSum[i].value = 0;
    }
    if (cryptoQty[i].value < 0) {
      console.log("'cryptoQty' for " + cryptoName[i].value + " is negative! Will be changed to absolute value.");
      cryptoQty[i].value = Math.abs(cryptoQty[i].value);
    }
    if (cryptoInvestedSum[i].value < 0) {
      console.log("'cryptoInvestedSum' for " + cryptoName[i].value + " is negative! Will be changed to absolute value.");
      cryptoInvestedSum[i].value = Math.abs(cryptoInvestedSum[i].value);
    }
    if (cryptoQty[i].value == "") {
      console.log("'cryptoQty' for " + cryptoName[i].value + " is empty! Will be changed to 0.");
      cryptoQty[i].value = 0;
    }

    //Don't write rows with empty ticker into object
    if (cryptoTicker[i].value.trim() === "") {
      console.log("Row " + i + " will be omitted. Empty!");
      continue;
    }

    var obj = { cryptoTicker: cryptoTicker[i].value, cryptoName: cryptoName[i].value, cryptoQty: cryptoQty[i].value, cryptoInvestedSum: cryptoInvestedSum[i].value };
    //console.log(obj);
    portfolio.token.push(obj);
  }

  //Return error if demoportfolio has not been changed
  if (JSON.stringify(portfolio) === JSON.stringify(demoportfolio)) {
    // showAlert("Create your personal portfolio first!", "fail");
    showAlert(translInfotextMessages.createPersonalPortfolio[languages.indexOf(userLang)], "fail");
    // alert("Create your personal portfolio first!");
    return false;
  }

  //Sort token alphabetically
  sortPortfolio();
  //console.log("Portfolio after update: ",portfolio);
}

/*Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com/preventing-cross-site-scripting-attacks-when-using-innerhtml-in-vanilla-javascript/
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
function sanitizeHTML(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

// POST Portfolio to database. The saved portfolio will be in the response from the database
function postPortfolio() {
  //Create portfolio object
  var validityCheck = createPortfolioObject();
  //console.log(validityCheck);
  if (validityCheck == false) {
    console.log("Validation failed! Upload cancelled!");
    return;
  }

  //URL of Azure Function
  var urlPost;
  if (hash !== "") {
    console.log("Hash is NOT empty! Overwrite current portfolio in the DB");
    urlPost = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/PostPortfolio?id=" + hash;
    // urlPost = "http://localhost:7071/api/PostPortfolio?id=" + hash;
  } else {
    console.log("Hash IS empty! Create a new portfolio entry in the DB");
    urlPost = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/PostPortfolio";
    // urlPost = "http://localhost:7071/api/PostPortfolio";
  }

  //Deactivate save button during save operation. Else the user could send the portfolio multiple times to the DB
  deactivateSaveButton();

  // Default options are marked with *
  fetch(urlPost, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    //mode: "no-cors", // no-cors, cors, *same-origin
    //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    //redirect: "follow", // manual, *follow, error
    //referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(portfolio), // body data type must match "Content-Type" header
  })
    .then(handleErrors)
    .then(res => res.json()) // parses response
    .then(response => {
      //console.log(response);
      window.location.href = "" + "#" + response._id; //Azure Function returns id of created portfolio
      portfolio = response;
      //console.log(portfolio);
      localStorage.setItem(response._id, JSON.stringify(portfolio)); //Update local storage with new portfolio

      //Activate save button again
      deactivateSaveButton();

      //Close edit table
      toggleSegmentDisplay('.edit-portfolio');
      document.getElementById("display-portfolio").scrollIntoView();

      /*Create success message*/
      var infotext;
      if (hash !== "") {
        // infotext = "<strong>Portfolio has been saved</strong><br>The URL is unchanged (<a href=" + window.location.href + ">#" + hash + "</a>). Please bookmark this URL if you have not done so already.";
        infotext = translInfotextMessages.uploadSuccessUpdate[languages.indexOf(userLang)];
        showAlert(infotext, "success");
      } else {
        //Update hash variable
        hash = window.location.href.split('#')[1] || '';
        // infotext = "<strong>Portfolio has been created</strong><br>It can be accessed and edited in the future via the URL in the address bar <a href=" + window.location.href + ">#" + hash + "</a>. Please <strong>bookmark this URL</strong>.";
        infotext = translInfotextMessages.uploadSuccessCreate[languages.indexOf(userLang)];
        showAlert(infotext, "success");
      }
      downloadCoinPrices();
      createEditTable(); //Necessary because the app autosorts the list alphabetically according to token name
    })
    .catch(error => {
      //console.log(error);
      console.error("There was an error while uploading the portfolio to the DB: ", error);
      let infotext = translInfotextMessages.errorWhileUploading[languages.indexOf(userLang)] + " " + error;
      // var infotext = "There was an error while uploading the portfolio to the DB: " + error;
      showAlert(infotext, "fail");
      //Activate save button again
      deactivateSaveButton();
    });
}

//Deactivate Save button during write operation & grey out button
function deactivateSaveButton() {
  var saveButton = document.querySelector(".save-button");
  saveButton.classList.toggle("deactivate");
  document.querySelector(".loading-animation").classList.toggle("show");
  // saveButton.classList.add("loading-animation");
}

// DELETE Portfolio from database
function deletePortfolio() {
  if (confirm(translInfotextMessages.deleteConfirm[languages.indexOf(userLang)]) == false) {
    return;
  }
  //Get hash
  // var hash = window.location.href.split('#')[1] || '';
  //URL of Azure Function
  // const urlPost = "http://localhost:7071/api/DeletePortfolio?id=" + hash;
  const urlPost = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/DeletePortfolio?id=" + hash;
  // Default options are marked with *
  fetch(urlPost, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    //mode: "no-cors", // no-cors, cors, *same-origin
    //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: "same-origin", // include, *same-origin, omit
    // headers: {
    //   "Content-Type": "application/json; charset=utf-8",
    //   // "Content-Type": "application/x-www-form-urlencoded",
    // },
    //redirect: "follow", // manual, *follow, error
    //referrer: "no-referrer", // no-referrer, *client
    //body: JSON.stringify(postDemoPortfolio), // body data type must match "Content-Type" header
  }).then(res => res.text()) // parses response
    .then(response => {
      console.log(response);
      window.location.hash = ""; //Remove hash value from URL

      //Delete portfolio from local storage
      localStorage.removeItem(hash);

      //Reset hash hash variable
      hash = "";
      //Display demoportfolio
      getPortfolioFromDB();

      let infotext = translInfotextMessages.deleteSuccess[languages.indexOf(userLang)];
      // infotext = "<strong>Portfolio has been deleted</strong><br>It can no longer be accessed.";
      showAlert(infotext, "success");

      //Close edit table
      toggleSegmentDisplay('.edit-portfolio');
      document.getElementById("display-portfolio").scrollIntoView();
    })
    .catch(error => {
      let infotext = translInfotextMessages.deleteFail[languages.indexOf(userLang)] + " " + error;
      // let infotext = "There was an error while deleting the portfolio from the DB: " + error;
      showAlert(infotext, "fail");
      console.error('Error:', error)
    });
}

//Sort token of portfolio EDIT TABLE alphabetically before uploading to DB
function sortPortfolio() {
  var token = portfolio.token;
  //console.log(temp);
  token.sort(function (a, b) {
    return a.cryptoName.localeCompare(b.cryptoName)
  });
  //console.log(portfolio);
}

//Open the portfolio chart, edit table, FAQ or Forum when clicking on the link in menu
function toggleSegmentDisplay(segment) {
  var div = document.querySelector(segment);
  // console.log(segment);
  div.classList.toggle("toggle-segment-display");
  div.scrollIntoView();
  document.getElementById("menu-btn").checked = false; //hide menu again in mobile view
}

//Close alert box
function closeAlert() {
  var alert = document.getElementById("alert");
  alert.style.opacity = "0";
  setTimeout(function () { alert.style.display = "none"; }, 300);
}

//Show alert with custom message
function showAlert(text, colorClass) {
  var alert = document.getElementById("alert");
  var alertText = document.getElementById("alert-text");
  alertText.innerHTML = text;
  alert.style.display = "block";
  alert.className = ""; //remove all former classnames, i.e. background colors
  alert.classList.add(colorClass);
  setTimeout(function () { alert.style.opacity = "1"; }, 10); //fade-in does not work without timeout
  alert.scrollIntoView();
}