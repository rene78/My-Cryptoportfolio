//Write URL hash value to variable
var hash = window.location.href.split('#')[1] || '';

//Example file for coin prices
const coinpricesExample = {
  "RAW": {
    "BTC": {
      "EUR": {
        "TYPE": "5",
        "MARKET": "CCCAGG",
        "FROMSYMBOL": "BTC",
        "TOSYMBOL": "EUR",
        "FLAGS": "4",
        "PRICE": 3184.02,
        "LASTUPDATE": 1547655767,
        "LASTVOLUME": 1.16696,
        "LASTVOLUMETO": 3702.939124,
        "LASTTRADEID": "81592335",
        "VOLUMEDAY": 8270.252337500304,
        "VOLUMEDAYTO": 26401958.532578617,
        "VOLUME24HOUR": 12328.738942289996,
        "VOLUME24HOURTO": 39339435.01775897,
        "OPENDAY": 3161.84,
        "HIGHDAY": 3241.44,
        "LOWDAY": 3151.88,
        "OPEN24HOUR": 3214.08,
        "HIGH24HOUR": 3244.83,
        "LOW24HOUR": 3131.71,
        "LASTMARKET": "Bitstamp",
        "VOLUMEHOUR": 933.1616343399971,
        "VOLUMEHOURTO": 2969466.2146968357,
        "OPENHOUR": 3192.08,
        "HIGHHOUR": 3197.93,
        "LOWHOUR": 3165.8,
        "CHANGE24HOUR": -30.059999999999945,
        "CHANGEPCT24HOUR": -0.9352598566308226,
        "CHANGEDAY": 22.179999999999836,
        "CHANGEPCTDAY": 0.7014902714874831,
        "SUPPLY": 17484762,
        "MKTCAP": 55671831903.24,
        "TOTALVOLUME24H": 338060.4222636706,
        "TOTALVOLUME24HTO": 1076475629.3467011,
        "IMAGEURL": "/media/19633/btc.png"
      }
    },
    "ADA": {
      "EUR": {
        "TYPE": "5",
        "MARKET": "CCCAGG",
        "FROMSYMBOL": "ADA",
        "TOSYMBOL": "EUR",
        "FLAGS": "1",
        "PRICE": 0.03892,
        "LASTUPDATE": 1547655746,
        "LASTVOLUME": 5228.33737356,
        "LASTVOLUMETO": 203.50780392844945,
        "LASTTRADEID": "1547655746.0509",
        "VOLUMEDAY": 6049370.554766174,
        "VOLUMEDAYTO": 234996.4620444752,
        "VOLUME24HOUR": 6733302.912008209,
        "VOLUME24HOURTO": 260417.510788049,
        "OPENDAY": 0.03728,
        "HIGHDAY": 0.03971,
        "LOWDAY": 0.03703,
        "OPEN24HOUR": 0.03787,
        "HIGH24HOUR": 0.03971,
        "LOW24HOUR": 0.0364,
        "LASTMARKET": "Kraken",
        "VOLUMEHOUR": 471323.7033123001,
        "VOLUMEHOURTO": 18216.96669481839,
        "OPENHOUR": 0.0391,
        "HIGHHOUR": 0.0392,
        "LOWHOUR": 0.03854,
        "CHANGE24HOUR": 0.0010500000000000023,
        "CHANGEPCT24HOUR": 2.7726432532347562,
        "CHANGEDAY": 0.0016400000000000026,
        "CHANGEPCTDAY": 4.399141630901295,
        "SUPPLY": 25927070538,
        "MKTCAP": 1009081585.33896,
        "TOTALVOLUME24H": 764078456.3599665,
        "TOTALVOLUME24HTO": 29736290.88298259,
        "IMAGEURL": "/media/12318177/ada.png"
      }
    },
    "ETH": {
      "EUR": {
        "TYPE": "5",
        "MARKET": "CCCAGG",
        "FROMSYMBOL": "ETH",
        "TOSYMBOL": "EUR",
        "FLAGS": "4",
        "PRICE": 106.38,
        "LASTUPDATE": 1547655764,
        "LASTVOLUME": 1.70509953,
        "LASTVOLUMETO": 180.7234991847,
        "LASTTRADEID": "5814026",
        "VOLUMEDAY": 100946.41283297984,
        "VOLUMEDAYTO": 10895190.560435113,
        "VOLUME24HOUR": 179307.06566574986,
        "VOLUME24HOURTO": 19235210.558246292,
        "OPENDAY": 105.95,
        "HIGHDAY": 112.89,
        "LOWDAY": 105,
        "OPEN24HOUR": 111.55,
        "HIGH24HOUR": 113.09,
        "LOW24HOUR": 102.85,
        "LASTMARKET": "Coinbase",
        "VOLUMEHOUR": 8467.797600749996,
        "VOLUMEHOURTO": 901083.4711828467,
        "OPENHOUR": 107.36,
        "HIGHHOUR": 107.71,
        "LOWHOUR": 105.4,
        "CHANGE24HOUR": -5.170000000000002,
        "CHANGEPCT24HOUR": -4.6346929627969535,
        "CHANGEDAY": 0.4299999999999926,
        "CHANGEPCTDAY": 0.40585181689475464,
        "SUPPLY": 104406002.4678,
        "MKTCAP": 11106710542.524565,
        "TOTALVOLUME24H": 8037132.902576501,
        "TOTALVOLUME24HTO": 855150723.0888119,
        "IMAGEURL": "/media/20646/eth_logo.png"
      }
    },
    "LTC": {
      "EUR": {
        "TYPE": "5",
        "MARKET": "CCCAGG",
        "FROMSYMBOL": "LTC",
        "TOSYMBOL": "EUR",
        "FLAGS": "4",
        "PRICE": 27.39,
        "LASTUPDATE": 1547655733,
        "LASTVOLUME": 5.14545123,
        "LASTVOLUMETO": 140.8824546774,
        "LASTTRADEID": "3910241",
        "VOLUMEDAY": 47835.08494340988,
        "VOLUMEDAYTO": 1315087.4736672589,
        "VOLUME24HOUR": 67202.74247263001,
        "VOLUME24HOURTO": 1842603.567910292,
        "OPENDAY": 27.31,
        "HIGHDAY": 28.1,
        "LOWDAY": 27.11,
        "OPEN24HOUR": 28.07,
        "HIGH24HOUR": 28.22,
        "LOW24HOUR": 26.71,
        "LASTMARKET": "Coinbase",
        "VOLUMEHOUR": 970.8207838799999,
        "VOLUMEHOURTO": 26623.707689678005,
        "OPENHOUR": 27.49,
        "HIGHHOUR": 27.53,
        "LOWHOUR": 27.29,
        "CHANGE24HOUR": -0.6799999999999997,
        "CHANGEPCT24HOUR": -2.4225151407196286,
        "CHANGEDAY": 0.08000000000000185,
        "CHANGEPCTDAY": 0.29293299157818325,
        "SUPPLY": 60044000.2148228,
        "MKTCAP": 1644605165.8839965,
        "TOTALVOLUME24H": 6605826.623069917,
        "TOTALVOLUME24HTO": 180935511.65747,
        "IMAGEURL": "/media/19782/litecoin-logo.png"
      }
    }
  },
  "DISPLAY": {
    "BTC": {
      "EUR": {
        "FROMSYMBOL": "Ƀ",
        "TOSYMBOL": "€",
        "MARKET": "CryptoCompare Index",
        "PRICE": "€ 3,184.02",
        "LASTUPDATE": "Just now",
        "LASTVOLUME": "Ƀ 1.17",
        "LASTVOLUMETO": "€ 3,702.94",
        "LASTTRADEID": "81592335",
        "VOLUMEDAY": "Ƀ 8,270.25",
        "VOLUMEDAYTO": "€ 26,401,958.5",
        "VOLUME24HOUR": "Ƀ 12,328.7",
        "VOLUME24HOURTO": "€ 39,339,435.0",
        "OPENDAY": "€ 3,161.84",
        "HIGHDAY": "€ 3,241.44",
        "LOWDAY": "€ 3,151.88",
        "OPEN24HOUR": "€ 3,214.08",
        "HIGH24HOUR": "€ 3,244.83",
        "LOW24HOUR": "€ 3,131.71",
        "LASTMARKET": "Bitstamp",
        "VOLUMEHOUR": "Ƀ 933.16",
        "VOLUMEHOURTO": "€ 2,969,466.2",
        "OPENHOUR": "€ 3,192.08",
        "HIGHHOUR": "€ 3,197.93",
        "LOWHOUR": "€ 3,165.80",
        "CHANGE24HOUR": "€ -30.06",
        "CHANGEPCT24HOUR": "-0.94",
        "CHANGEDAY": "€ 22.18",
        "CHANGEPCTDAY": "0.70",
        "SUPPLY": "Ƀ 17,484,762.0",
        "MKTCAP": "€ 55.67 B",
        "TOTALVOLUME24H": "Ƀ 338.06 K",
        "TOTALVOLUME24HTO": "€ 1,076.48 M",
        "IMAGEURL": "/media/19633/btc.png"
      }
    },
    "ADA": {
      "EUR": {
        "FROMSYMBOL": "ADA",
        "TOSYMBOL": "€",
        "MARKET": "CryptoCompare Index",
        "PRICE": "€ 0.03892",
        "LASTUPDATE": "Just now",
        "LASTVOLUME": "ADA 5,228.34",
        "LASTVOLUMETO": "€ 203.51",
        "LASTTRADEID": "1547655746.0509",
        "VOLUMEDAY": "ADA 6,049,370.6",
        "VOLUMEDAYTO": "€ 234,996.5",
        "VOLUME24HOUR": "ADA 6,733,302.9",
        "VOLUME24HOURTO": "€ 260,417.5",
        "OPENDAY": "€ 0.03728",
        "HIGHDAY": "€ 0.03971",
        "LOWDAY": "€ 0.03703",
        "OPEN24HOUR": "€ 0.03787",
        "HIGH24HOUR": "€ 0.03971",
        "LOW24HOUR": "€ 0.03640",
        "LASTMARKET": "Kraken",
        "VOLUMEHOUR": "ADA 471,323.7",
        "VOLUMEHOURTO": "€ 18,217.0",
        "OPENHOUR": "€ 0.03910",
        "HIGHHOUR": "€ 0.03920",
        "LOWHOUR": "€ 0.03854",
        "CHANGE24HOUR": "€ 0.0011",
        "CHANGEPCT24HOUR": "2.77",
        "CHANGEDAY": "€ 0.0016",
        "CHANGEPCTDAY": "4.40",
        "SUPPLY": "ADA 25,927,070,538.0",
        "MKTCAP": "€ 1,009.08 M",
        "TOTALVOLUME24H": "ADA 764.08 M",
        "TOTALVOLUME24HTO": "€ 29.74 M",
        "IMAGEURL": "/media/12318177/ada.png"
      }
    },
    "ETH": {
      "EUR": {
        "FROMSYMBOL": "Ξ",
        "TOSYMBOL": "€",
        "MARKET": "CryptoCompare Index",
        "PRICE": "€ 106.38",
        "LASTUPDATE": "Just now",
        "LASTVOLUME": "Ξ 1.71",
        "LASTVOLUMETO": "€ 180.72",
        "LASTTRADEID": "5814026",
        "VOLUMEDAY": "Ξ 100,946.4",
        "VOLUMEDAYTO": "€ 10,895,190.6",
        "VOLUME24HOUR": "Ξ 179,307.1",
        "VOLUME24HOURTO": "€ 19,235,210.6",
        "OPENDAY": "€ 105.95",
        "HIGHDAY": "€ 112.89",
        "LOWDAY": "€ 105.00",
        "OPEN24HOUR": "€ 111.55",
        "HIGH24HOUR": "€ 113.09",
        "LOW24HOUR": "€ 102.85",
        "LASTMARKET": "Coinbase",
        "VOLUMEHOUR": "Ξ 8,467.80",
        "VOLUMEHOURTO": "€ 901,083.5",
        "OPENHOUR": "€ 107.36",
        "HIGHHOUR": "€ 107.71",
        "LOWHOUR": "€ 105.40",
        "CHANGE24HOUR": "€ -5.17",
        "CHANGEPCT24HOUR": "-4.63",
        "CHANGEDAY": "€ 0.43",
        "CHANGEPCTDAY": "0.41",
        "SUPPLY": "Ξ 104,406,002.5",
        "MKTCAP": "€ 11.11 B",
        "TOTALVOLUME24H": "Ξ 8,037.13 K",
        "TOTALVOLUME24HTO": "€ 855.15 M",
        "IMAGEURL": "/media/20646/eth_logo.png"
      }
    },
    "LTC": {
      "EUR": {
        "FROMSYMBOL": "Ł",
        "TOSYMBOL": "€",
        "MARKET": "CryptoCompare Index",
        "PRICE": "€ 27.39",
        "LASTUPDATE": "Just now",
        "LASTVOLUME": "Ł 5.15",
        "LASTVOLUMETO": "€ 140.88",
        "LASTTRADEID": "3910241",
        "VOLUMEDAY": "Ł 47,835.1",
        "VOLUMEDAYTO": "€ 1,315,087.5",
        "VOLUME24HOUR": "Ł 67,202.7",
        "VOLUME24HOURTO": "€ 1,842,603.6",
        "OPENDAY": "€ 27.31",
        "HIGHDAY": "€ 28.10",
        "LOWDAY": "€ 27.11",
        "OPEN24HOUR": "€ 28.07",
        "HIGH24HOUR": "€ 28.22",
        "LOW24HOUR": "€ 26.71",
        "LASTMARKET": "Coinbase",
        "VOLUMEHOUR": "Ł 970.82",
        "VOLUMEHOURTO": "€ 26,623.7",
        "OPENHOUR": "€ 27.49",
        "HIGHHOUR": "€ 27.53",
        "LOWHOUR": "€ 27.29",
        "CHANGE24HOUR": "€ -0.68",
        "CHANGEPCT24HOUR": "-2.42",
        "CHANGEDAY": "€ 0.080",
        "CHANGEPCTDAY": "0.29",
        "SUPPLY": "Ł 60,044,000.2",
        "MKTCAP": "€ 1,644.61 M",
        "TOTALVOLUME24H": "Ł 6,605.83 K",
        "TOTALVOLUME24HTO": "€ 180.94 M",
        "IMAGEURL": "/media/19782/litecoin-logo.png"
      }
    }
  }
};

const demoportfolio = {
  "fiat": "EUR",
  "token":
    [
      {
        "cryptoTicker": "BTC",
        "cryptoName": "Bitcoin",
        "cryptoQty": "0.5",
        "cryptoInvestedSum": "2000"
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
const fiats = ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "USD", "ZAR"];
var coinPrices = {};
var portfolio = {};

//Fill out coin list for search filter array with all coin options on load
var coinlistFiltered = coinlist;

//Counter for up/down arrow coin selection
var locNumber;

//Display Portfolio on load
getPortfolioFromDB();

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
    downloadCoinPrices();
    createEditTable();

    return;
  }

  //Else download from database via Azure Function
  // var url = "http://localhost:7071/api/getPortfolio?id=" + hash; //Local Function URL - !!Make sure to remove the Cors entry in local_settings of Function before uploading to Azure
  var url = "https://cryptoportfolio-functions-rene78.azurewebsites.net/api/GetPortfolio?id=" +hash; //Azure Function URL
  fetch(url)
    .then(handleErrors)
    .then(res => {
      //console.log(res.clone());//res.json() cannot be used twice in the callback. Thus res.clone() (see https://stackoverflow.com/q/46742251/5263954)
      resStatus = res.status;
      //console.log(resStatus);
      return res.json();
    })
    .then(data => {
      //console.log(data);
      portfolio = data;
      downloadCoinPrices();
      createEditTable();
    })
    .catch(error => {
      console.error('There was an error:', error.message)
      window.location.href = "http://127.0.0.1:5500/index.html#"; //Remove hash value from URL
      //Get hash
      hash = window.location.href.split('#')[1] || '';
      //Display demoportfolio
      getPortfolioFromDB();

      infotext = "<span><strong>An error occured</strong><br>" + error.message + "<span>";
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

  //Hide fetch and undhide 2 lines below to show portfolio with locally saved demo prices
  // coinPrices = coinpricesExample;
  // displayPortfolio();

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
    })
    .catch(error => console.error('There was an error while downloading coin prices:', error.message));
}

// Display portfolio on page
function displayPortfolio() {
  var myContainer = document.getElementById("display-portfolio");

  //GET-Anfrage an cryptocompare API
  var thisHTML = "";
  thisHTML += "<table id='portfolio-table'>";
  thisHTML += "<thead>";
  thisHTML += "<tr>";
  thisHTML += "<th id='coin-name' onclick='sortTable(0)' title='Select cryptotoken. Click here to sort alphabetically.'>Name <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></th>";
  thisHTML += "<th onclick='sortTable(1)' title='Last price. Click here to sort.'>Last <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></th>";
  thisHTML += "<th onclick='sortTable(2)' title='Change in percent in the last 24h. Click here to sort.'>Change <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></th>";
  thisHTML += "<th onclick='sortTable(3)' title='Gain/loss in the last 24h. Click here to sort.'>G/L Today <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></th>";
  thisHTML += "<th onclick='sortTable(4)' title='Overall gain/loss. Click here to sort.'>Gain / Loss <div class='arrows-name'><div class='triangle-down' title='Descending'></div><div class='triangle-up' title='Ascending'></div></th>";
  thisHTML += "</tr>";
  thisHTML += "</thead>";

  var i = 0;
  var overallGainLoss = 0;
  var overallGainLossToday = 0;
  var cryptoStyle = "class='cryptoUp'";

  thisHTML += "<tbody>";

  for (i = 0; i < Object.keys(coinPrices['RAW']).length; i++) {
    var cryptoTicker = portfolio.token[i].cryptoTicker;
    var fullName = portfolio.token[i].cryptoName;
    var cryptoQty = portfolio.token[i].cryptoQty;
    var cryptoInvestedSum = portfolio.token[i].cryptoInvestedSum;
    var lastPrice = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['PRICE'];
    var changePct24H = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['CHANGEPCT24HOUR'];
    var change24H = coinPrices['RAW'][cryptoTicker][portfolio.fiat]['CHANGE24HOUR'];
    var fiatSymbol = coinPrices['DISPLAY'][cryptoTicker][portfolio.fiat]['TOSYMBOL'];

    var cryptoGainLoss = "";
    var cryptoGainLossToday = "";
    var cryptoBuyingPrice = "";

    //Some values on CryptoCompare return "null". That would break ".toFixed" below:
    if (changePct24H != null) {
      changePct24H = changePct24H.toFixed(1).concat("%"); //Example: 2.36: toFixed: Only one digit after the comma (2.4). Concat: Add percentage sign (2.4%).
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

    thisHTML += "<td><a href='https://coinmarketcap.com/currencies/" + fullName + "' target=_blank>" + fullName + "</a></td>";
    thisHTML += "<td>" + lastPrice + fiatSymbol + "</td>";

    //Change color of changePct24H and cryptoGainLossToday number according to value (-, 0, + - red, black, green)
    cryptoStyle = redOrGreen(change24H);

    thisHTML += "<td " + cryptoStyle + ">" + changePct24H + "</td>";
    thisHTML += "<td " + cryptoStyle + ">" + cryptoGainLossToday.toFixed(0) + fiatSymbol + "</td>";

    thisHTML += "<td " + redOrGreen(cryptoGainLoss) + ">" + cryptoGainLoss.toFixed(0) + fiatSymbol + "</td>";
    thisHTML += "</tr>";
  }

  thisHTML += "</tbody>";
  thisHTML += "<tfoot>";
  thisHTML += "<tr>";
  thisHTML += "<td>Total</td>";
  thisHTML += "<td></td>";
  thisHTML += "<td></td>";

  thisHTML += "<td " + redOrGreen(overallGainLossToday) + ">" + overallGainLossToday.toFixed(0) + fiatSymbol + "</td>";

  thisHTML += "<td " + redOrGreen(overallGainLoss) + ">" + overallGainLoss.toFixed(0) + fiatSymbol + "</td>";
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
    document.getElementById("edit-portfolio-link").innerText = "Create Portfolio";
  } else {
    //Only relevant after first upload from start page
    document.getElementById("edit-portfolio-link").innerText = "Edit Portfolio";
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
      if (n === 0) {
        x = rows[i].getElementsByTagName("TD")[n].innerText.toLowerCase();
        y = rows[i + 1].getElementsByTagName("TD")[n].innerText.toLowerCase();
        if (x > y) {
          //if so, mark as a switch and break the loop:
          xGreaterThanY = true;
        }
      } else {
        x = rows[i].getElementsByTagName("TD")[n].innerText.replace(/\D/g, '');
        y = rows[i + 1].getElementsByTagName("TD")[n].innerText.replace(/\D/g, '');
        if (Number(x) > Number(y)) {
          //if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          xGreaterThanY = true;
        }
      }
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (xGreaterThanY) {
          //if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          //Change display to UP arrow only. Before just showing UP arrow, make all other arrows, which might have been hidden, visible again
          showAllArrows();
          arrowDown.classList.remove("triangle-down");
          arrowUp.classList.add("triangle-up");
          break;
        }
      } else if (dir == "desc") {
        if (xGreaterThanY === false) {
          //if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          //Change display to DOWN arrow only. Before just showing UP arrow, make all other arrows, which might have been hidden, visible again
          showAllArrows();
          arrowDown.classList.add("triangle-down");
          arrowUp.classList.remove("triangle-up");
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

// Create portfolio edit table, fill it with values (i.e. names and numbers) from portfolio and create a search filter
function createEditTable() {
  var tableHTML = '<button onclick="closeSegment(this)" class="close" title="Close the edit table. Your changes are not saved to the server. Click Submit to save changes." aria-label="Close the portfolio edit table">&times;</button>'
  tableHTML += "<h1 id='edit-portfolio-heading'>Edit Portfolio</h1>";
  // tableHTML += '<form name="myForm" id="my-form" method="POST">';
  tableHTML += '<table id="portfolio-update-form">';
  tableHTML += "<thead>";
  tableHTML += "<tr>";
  tableHTML += '<th title="Select coin">Selection</th>';
  tableHTML += '<th id="ncoins-heading" title="Overall number of coins in your possession">Number of coins</th>';
  tableHTML += '<th title="How much fiat did you invest to buy this coin?">Invested sum</th>';
  tableHTML += "<th></th>";
  tableHTML += "<th>Ticker Symbol</th>";
  tableHTML += "<th>Name</th>";
  tableHTML += "</tr>";
  tableHTML += "</thead>";
  tableHTML += '<tbody id="token">';

  for (let i = 0; i < portfolio.token.length; i++) {
    tableHTML += "<tr class='token-row'>";
    tableHTML += '<td><button onclick="showHideDropdown(this); createOptions(this)" class="dropdown-button">Select coin...<div class="triangle-down"></div></button><div class="dropdown-content"><input class="my-input" type="text" placeholder="Search.." onkeyup="filterCoins(this)" autocomplete="off"><div class="all-token"></div></div></td>';
    tableHTML += '<td><input type="number" name="cryptoQty" class="crypto-qty" value="" min="0" placeholder="e.g. 5" title="Overall number of coins in your possession" required="true"></td>';
    tableHTML += '<td><input type="number" class="crypto-invested-sum" value="" min="0" placeholder="e.g. 1000" title="How much fiat did you invest to buy this coin?" required="true"></td>';
    tableHTML += '<td id="delete-cell" onclick="deleteRow(this)" title="Click to delete coin"><svg id="dustbin"><use xlink:href="img/icons.svg#dustbin-logo"></use></svg></td>';
    tableHTML += '<td><input type="text" class="crypto-ticker" value="" placeholder="e.g. BTC" title="Ticker symbol of cryptocurrency" name="cryptoTicker" required="true" disabled> </td>';
    tableHTML += '<td><input type="text" class="crypto-name" value="" placeholder="e.g. Bitcoin" title="Name of cryptocurrency" name="cryptoName" required="true" disabled> </td>';
    tableHTML += "</tr>";
  }

  tableHTML += "</tbody>";
  tableHTML += "<tfoot>"
  tableHTML += "<tr>";
  tableHTML += '<td id="add-token" title="Add a new token" onclick="insertRow()">+</td>';
  tableHTML += "</tr>";
  tableHTML += "</tfoot>"
  tableHTML += "</table>";
  tableHTML += '<div class="fiat">';
  tableHTML += '<label for="fiat" class="fiat-label">Fiat </label>';
  tableHTML += '<select id="fiat" class="fiat-select" title="Select your fiat currency">';
  for (let i = 0; i < fiats.length; i++) {
    tableHTML += '<option value="' + fiats[i] + '">' + fiats[i] + '</option>';
  }
  tableHTML += '</select>';
  tableHTML += '</div>';
  tableHTML += '<button class="save-button" onclick="postPortfolio()" title="Save portfolio to database">Save <svg id="upload-icon"><use xlink:href="img/icons.svg#upload-logo"></use></svg></button>'
  // tableHTML += '<input type="button" value="Submit" class="submit-button" onclick="postPortfolio()">';
  // tableHTML += "</form>";
  tableHTML += '<button class="delete-portfolio-button" onclick="deletePortfolio()" title="Irrevocably delete portfolio from database">Delete Portfolio</button>';
  // tableHTML += '<button onclick="writeToTable()">Write to table</button>';
  tableHTML += '<div id="edit-table-foot"></div>';
  document.getElementById("edit-portfolio").innerHTML = tableHTML;
  //Fill out table with values from DB
  fillOutTable();

  //If demoportfolio is shown:
  if (hash == "") {
    //Change heading from "Edit Portfolio" to "Create Portfolio"
    document.getElementById("edit-portfolio-heading").innerText = "Create Portfolio";
    //Hide delete button
    document.querySelector(".delete-portfolio-button").style.display = "none";
  }
}

//Insert row in edit table
function insertRow() {
  //First check, if a token has been selected in last input field. If no: cancel! We don't want empty rows.
  var lastInputField = document.getElementById("token").lastElementChild.querySelector(".crypto-ticker").value;
  console.log(lastInputField);
  if (lastInputField === "") {
    showAlert("Select a coin in the previous input field first.", "fail");
    console.log("Select a coin in the previous input field first.");
    return;
  };

  var entries = document.getElementById("token");
  var tableHTML = "<tr class='token-row'>";
  tableHTML += '<td><button onclick="showHideDropdown(this); createOptions(this)" class="dropdown-button">Select coin...<div class="triangle-down"></div></button><div class="dropdown-content"><input class="my-input" type="text" placeholder="Search.." onkeyup="filterCoins(this)" autocomplete="off"><div class="all-token"></div></div></td>';
  tableHTML += '<td><input type="number" name="cryptoQty" class="crypto-qty" value="" min="0" placeholder="e.g. 5" title="Overall number of coins in your possession" required="true"></td>';
  tableHTML += '<td><input type="number" class="crypto-invested-sum" value="" min="0" placeholder="e.g. 1000" title="How much fiat did you invest to buy this coin?" required="true"></td>';
  tableHTML += '<td id="delete-cell" onclick="deleteRow(this)" title="Click to delete coin"><svg id="dustbin"><use xlink:href="img/icons.svg#dustbin-logo"></use></svg></td>';
  tableHTML += '<td><input type="text" class="crypto-ticker" value="" placeholder="e.g. BTC" title="Ticker symbol of cryptocurrency" name="cryptoTicker" required="true" disabled> </td>';
  tableHTML += '<td><input type="text" class="crypto-name" value="" placeholder="e.g. Bitcoin" title="Name of cryptocurrency" name="cryptoName" required="true" disabled> </td>';
  tableHTML += "</tr>";

  entries.insertAdjacentHTML("beforeend", tableHTML);
}

//Delete row in edit table
function deleteRow(b) {
  //console.log(b);
  var i = b.parentNode.rowIndex;
  //console.log("b.parentNode.rowIndex: "+ i);
  document.getElementById("portfolio-update-form").deleteRow(i);
}

//On load write fiat, full name, symbol and coin name into fields of edit table. Take ticker from DB, the rest comes from coinlist
function fillOutTable() {
  var fiatIndex = fiats.indexOf(portfolio.fiat);
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
  var allToken = window.event.path[0].nextElementSibling.children;
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
    console.log(allToken[locNumber])
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
    option = "<a href='javascript:void(0)' class='nothing-found'>Nothing found...</option>";
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
  dropDownContent.classList.toggle("show");
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
      showAlert("Each and every coin can only be in the portfolio once! Please correct.", "fail");
      // alert("Each and every coin can only be in the portfolio once! Please correct.");
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
    showAlert("Create your personal portfolio first!", "fail");
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

      //Close edit table (closeSegment function cannot be used, cause no "this")
      document.getElementById("edit-portfolio").style.display = "none";
      document.getElementById("display-portfolio").scrollIntoView();

      /*Create success message*/
      var infotext;
      if (hash !== "") {
        infotext = "<span><strong>Portfolio has been saved</strong><br>The URL is unchanged (<a href=" + window.location.href + ">#" + hash + "</a>). Please bookmark this URL if you have not done so already.<span>";
        showAlert(infotext, "success");
      } else {
        //Update hash variable
        hash = window.location.href.split('#')[1] || '';
        infotext = "<span><strong>Portfolio has been created</strong><br>It can be accessed under <a href=" + window.location.href + ">#" + hash + "</a>. Please <strong>bookmark this URL</strong> in order to access it in the future.<span>";
        showAlert(infotext, "success");
      }
      downloadCoinPrices();
      createEditTable(); //Necessary because the app autosorts the list alphabetically according to token name
    })
    .catch(error => {
      //console.log(error);
      console.error("There was an error while uploading the portfolio to the DB: ", error);
      var infotext = "<span>There was an error while uploading the portfolio to the DB: " + error + "</span>";
      showAlert(infotext, "fail");
    });
}

// DELETE Portfolio from database
function deletePortfolio() {
  if (confirm("Do you really want to delete the portfolio?") == false) {
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
      window.location.href = "" + "#"; //Remove hash value from URL
      //Get hash
      hash = window.location.href.split('#')[1] || '';
      //Display demoportfolio
      getPortfolioFromDB();

      infotext = "<span><strong>Portfolio has been deleted</strong><br>It can no longer be accessed.<span>";
      showAlert(infotext, "success");

      //Close edit table (closeSegment function cannot be used, cause no "this")
      document.getElementById("edit-portfolio").style.display = "none";
      document.getElementById("display-portfolio").scrollIntoView();
    })
    .catch(error => {
      var infotext = "<span>There was an error while deleting the portfolio from the DB: " + error + "</span>";
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

//Open the portfolio edit table, FAQ or Forum when clicking on the link in menu
function showSegment(segment) {
  var div = document.getElementById(segment);
  // console.log(segment);
  div.style.display = "block";
  div.scrollIntoView();
  document.getElementById("menu-btn").checked = false; //hide menu again in mobile view
}

//Close the portfolio edit table, FAQ or Forum when clicking the cross
function closeSegment(button) {
  // console.log(button);
  button.parentElement.style.display = "none";
  // editPortfolioContainer.style.display = "none";
  document.getElementById("display-portfolio").scrollIntoView();
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