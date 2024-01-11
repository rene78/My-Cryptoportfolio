//Translations for all user facing text on the app. Attention: Keys have to be named similar to the html id's!
const translations = {
  "chart-link": [["Chart", "Show the overall value of each cryptocurrency on a pie chart"], ["Diagramm", "Zeige Gesamtwert jeder Position im Kuchendiagramm"]],
  "edit-portfolio-link": [["Edit Portfolio", "Edit your own portfolio", "Create Portfolio"], ["Portfolio editieren", "Bearbeite Dein eigenes Portfolio", "Portfolio erzeugen"]],
  "faq-link": [["FAQ", "Some frequently asked questions"], ["FAQ", "Einige häufig gestellte Fragen"]],
  "forum-link": [["Forum", "A Disqus forum for questions"], ["Forum", "Ein Disqus-Forum für Fragen"]],

  //Display Portfolio
  "coin-name": [["Name ", "Name of Cryptocurrency/Token. Click here to sort alphabetically"], ["Name ", "Name der Kryptowährung / des Tokens. Hier klicken, um alphabetisch zu sortieren"]],
  "last-price": [["Last ", "Last price. Click here to sort"], ["Kurs ", "Aktueller Kurs. Hier klicken zum sortieren"]],
  "change-perc": [["Change ", "Change in percent in the last 24h. Click here to sort"], ["Diff. % ", "Änderung in Prozent innerhalb der letzten 24h. Hier zum Sortieren klicken"]],
  "gain-loss-24h": [["G/L (24h) ", "Gain/loss in the last 24h. Click here to sort"], ["G/V (24h) ", "Gewinn/Verlust in Fiat innerhalb der letzten 24h. Hier zum Sortieren klicken"]],
  "gain-loss": [["Gain / Loss ", "Overall gain/loss. Click here to sort"], ["G/V ", "Gesamter Gewinn/Verlust. Hier zum Sortieren klicken"]],
  //Chart
  "chart-button": [["×", "Close the Chart"], ["×", "Diagramm schliessen"]],
  "chart-heading": [["Portfolio Weighting", "Displays the overall distribution of your investment on a pie chart"], ["Portfolio-Gewichtung", "Zeigt die Gesamtverteilung Deiner Investition in einem Kuchendiagramm"]],
  //FAQ
  "faq-button": [["×", "Close the FAQ"], ["×", "FAQ schliessen"]],

  //Edit Portfolio
  "edit-portfolio-button": [["×", "Close the edit table. Your changes are not saved to the server. Click Save to save changes"], ["×", "Eingabetabelle schliessen. Deine Änderungen werden nicht auf dem Server gespeichert. Klicke auf Speichern, um die Änderungen zu speichern."]],
  "edit-portfolio-heading": [["Edit Portfolio", "", "Create Portfolio"], ["Portfolio editieren", "", "Portfolio erzeugen"]],
  "edit-portfolio-select-coin": [["Selection", "Select coin..."], ["Auswahl", "Coin wählen..."]],
  "ncoins-heading": [["Number of coins", "Overall number of coins in your possession"], ["Anzahl Coins", "Gesamtzahl der in Deinem Besitz befindlichen Coins"]],
  "edit-portfolio-invested-sum": [["Invested sum", "How much fiat did you invest to buy this coin?"], ["Investierte Summe", "Wie viel Fiat hast du investiert, um diese Coins zu kaufen?"]],
  "edit-portfolio-delete": [["", "Click to remove coin from portfolio"], ["", "Klicken, um Coin aus Portfolio zu entfernen"]],
  "add-token": [["+", "Add a new coin"], ["+", "Neuen Coin hinzufügen"]],
  "fiat": [["", "Select your fiat currency"], ["", "Fiatwährung des Portfolios auswählen"]],
  "edit-portfolio-save-button": [["Save ", "Save portfolio to database"], ["Speichern ", "Portfolio in die Datenbank speichern"]],
  "edit-portfolio-delete-button": [["Delete Portfolio", "Irrevocably delete portfolio from database"], ["Portfolio löschen", "Portfolio unwiederbringlich aus Datenbank löschen"]]
};

const translInfotextMessages = {
  "errorWhileDownloading": ["There was an error while downloading your portfolio from the DB", "Fehler beim Herunterladen Deines Portfolios von der Datenbank"],
  "errorWhileDownloadingCoinPrices": ["There was an error while downloading coin prices from CryptoCompare", "Fehler beim Herunterladen der Coinpreise aufgetreten"],
  "errorWhileUploading": ["There was an error while uploading your portfolio to the database", "Fehler beim Hochladen Deines Portfolios zur Datenbank"],
  "uploadSuccessUpdate": ["<strong>Portfolio has been saved</strong><br>The URL is unchanged (see address bar). Please bookmark this URL if you have not done so already.", "<strong>Portfolio wurde gespeichert</strong><br>Die URL ist unverändert und wird momentan in der Adresszeile angezeigt. Bitte diese URL als Favorit speichern, falls noch nicht geschehen"],
  "uploadSuccessCreate": ["<strong>Portfolio has been created</strong><br>It can be accessed and edited in the future via the URL in the address bar. Please <strong>bookmark this URL</strong>.", "<strong>Portfolio wurde erzeugt</strong><br>Es kann ab jetzt angezeigt und editiert werden durch das Aufrufen der URL, die in der Adresszeile zu sehen ist. Bitte <strong>diese URL als Favorit speichern</strong>."],
  "deleteConfirm": ["Do you really want to irretrievably delete the portfolio?", "Willst Du das Portfolio wirklich unwiederbringlich löschen?"],
  "deleteSuccess": ["<strong>Portfolio has been deleted</strong><br>It can no longer be accessed.", "<strong>Portfolio wurde gelöscht</strong><br>Es kann von nun an nicht mehr abgerufen werden."],
  "deleteFail": ["There was an error while deleting the portfolio from the database: ", "Beim Löschen des Portfolios aus der Datenbank ist ein Fehler aufgetreten: "],
  "selectCoinFirst": ["Select a coin in the previous input field first", "Bitte erst einen Coin in dem vorherigen Auswahlmenü selektieren"],
  "nothingFound": ["Nothing found...", "Nichts gefunden..."],
  "eachCoinOnlyOnce": ["Each and every coin can only be in the portfolio once! Please correct", "Ein und derselbe Coin darf nur ein mal im Portfolio erscheinen! Bitte korrigieren"],
  "createPersonalPortfolio": ["Create your personal portfolio first!", "Bitte erst Dein persönliches Portfolio anlegen!"]
}

const translFAQ = {
  //FAQ
  "question1":
    ['<summary><h2>What are the advantages of this portfolio app compared to others?</h2></summary><ul><li><b>Not-for-profit.</b> This app was solely written for my personal use and as an exercise. But I would be glad if you would find it useful, too. The source code can be accessed on <a href="https://github.com/rene78/My-Cryptoportfolio">Github.</a></li> <li><b>Ad-free.</b> No annoying ads, which slow down page load and impair user experience.</li> <li><b>Cookie-free.</b> No user information is saved to servers.</li> <li><b>Hassle-free.</b> Personal portfolio can be accessed via a unique URL. No login required.</li> <li><b>Web app.</b> No installation needed.</li> <li><b>Responsive.</b> Works on all devices.</li> <img src="img/multi-devices.png" alt="Multi Devices"></ul>',
      '<summary><h2>Was sind die Vorteile dieser Portfolio App im Vergleich zu anderen?</h2></summary><ul><li><b>Nicht gewinnortientiert.</b> Dieses Programm wurde lediglich zum Eigengebrauch und zu Trainingszwecken geschrieben. Dennoch würde es mich freuen, wenn der ein oder andere damit auch was anfangen kann. Der Quellcode kann auf <a href="https://github.com/rene78/My-Cryptoportfolio">Github</a> abgerufen werden.</li> <li><b>Werbefrei.</b> Keine nervige Werbung, die die Ladezeit verlängert und die Anwenderfreundlichkeit verschlechtert.</li> <li><b>Frei von Cookies.</b> Keine Anwenderinformationen werden auf Servern gespeichert.</li> <li><b>Unkompliziert.</b> Persönliches Portfolio kann über eindeutige URL angezeigt werden. Kein Einloggen notwendig.</li> <li><b>Web App.</b> Keine Installation notwendig.</li> <li><b>Responsiv.</b> Funktioniert auf allen Geräten.</li> <img src="img/multi-devices.png" alt="Multi Devices"></ul>'],
  "question2":
    ['<summary><h2>Is it safe to enter my portfolio on this site?</h2></summary><p>As long as you do not share your personal portfolio URL your  should be safe. All portfolios are saved to the database in a completely anonymous fashion with no link to the user whatsoever. This web app does not collect any cookies (except third-party cookies from Disqus), does not have ads and is 100% open source. The source code can be viewed and changed on Github (<a href="https://github.com/rene78/My-Cryptoportfolio">My Cryptoportfolio)</a>.</p>',
      '<summary><h2>Ist es sicher, mein Portfolio auf dieser Seite einzutragen?</h2></summary><p>Solange Du Deine persönliche Portfolio-URL nicht weitergibst, sollte es keine Probleme geben. Alle Portfolios werden völlig anonym in der Datenbank gespeichert, ohne jegliche Verknüpfung zum Ersteller. Diese App sammelt keine Cookies (außer Drittanbieter-Cookies von Disqus), hat keine Werbung und ist zu 100% Open Source. Der Quellcode kann auf Github eingesehen und geändert werden (<a href="https://github.com/rene78/My-Cryptoportfolio">My Cryptoportfolio)</a>.</p>'],
  "question3":
    ['<summary><h2>How to use the app?</h2></summary><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aPPmpXDy4LM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      '<summary><h2>Wie benutzt man die App?</h2></summary><p>Siehe Video. Bitte bei Bedarf deutschen Untertitel aktivieren.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aPPmpXDy4LM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
  "question4":
    ['<summary><h2>Can I support the development?</h2></summary><p>This would be very much appreciated! There are four ways:</p><ol><li>Leave your suggestions in the forum on this site</li><li>Even better: If you know some JS, HTML and CSS you can <a href="https://github.com/rene78/My-Cryptoportfolio">improve the app</a></li><li>Help to <a href="https://github.com/rene78/My-Cryptoportfolio/tree/master/data#translate">translate the app to your mother tongue</a></li><li>Currently Microsoft Azure wants an exploitative 0.40€/year for hosting the site. Help me to cover these immense costs <div class="tallypay" data-user_name="rene78" data-button="Donate"></div> </li></ol>',
      '<summary><h2>Kann ich die Entwicklung unterstützen?</h2></summary><p>Das wäre sehr willkommen! Es gibt vier Möglichkeiten:</p><ol><li>Veröffentliche deine Vorschläge im Forum auf dieser Seite.</li><li>Besser: Falls Du ein wenig JS, HTML und CSS beherrschst, kannst Du <a href="https://github.com/rene78/My-Cryptoportfolio">die App verbessern.</a></li><li>Hilf dabei, die App in eine andere Sprache zu <a href="https://github.com/rene78/My-Cryptoportfolio/tree/master/data#translate">übersetzen.</a></li><li>Momentan will Microsoft Azure ausbeuterische 0.40€/Jahr für das Hosten der Seite. Hilf mir doch beim Decken dieser immensen Kosten. <div class="tallypay" data-user_name="rene78" data-button="Spende via Lightning"></div> </li></ol>'],
  "question5":
    ['<summary><h2>Where are the coin prices coming from?</h2></summary><p>From the <a href="https://min-api.cryptocompare.com/">Cryptocampare API</a>. The prices are an average value of all well-known crypto exchanges.</p>',
      '<summary><h2>Wo kommen die Coinpreise her?</h2></summary><p>Von der <a href="https://min-api.cryptocompare.com/">Cryptocampare API</a>. Die Kurse sind ein Mittelwert aller namhafter Kryptobörsen.</p>'],
  "question6":
    ['<summary><h2>Why does this website have such a weird logo?</h2></summary><p>It is a celtic Triple Crescent Moon symbol. Triple moons symbolize change and disruption, just like the blockchain technology in general. And "moon" - as in "to the moon"...</p>',
      '<summary><h2>Warum hat diese Webseite so ein komisches Logo?</h2></summary><p>Dies ist ein keltisches Symbol für den dreifachen Halbmond. Dreifachmonde symbolisieren Veränderung, genau wie die Blockchain-Technologie im Allgemeinen. Und weil der Mond der Ort ist, an dem wir alle die Kurse sehen wollen...</p>']
};