(function() {

    // Variable declaration
    var board = new DepartureBoard (document.getElementById ('arr-dep-board'), { rowCount: 2, letterCount: 25 });
    var wordList = ['  Arrivals & Departures',['Have a', '        Wonderful Journey'],['       Train', '  Schedules']];
    var addData = new Firebase("https://fiery-fire-9725.firebaseio.com/");


    // Intial message display
    board.setValue (['       Train', '          Schedules']);

    // Messages are randomly selected from array every 8 seconds and displayed
    window.setInterval (function () {
        var newWord = wordList[Math.floor(Math.random() * wordList.length)];
        board.setValue (newWord);
    }, 8000);



    // Refresh schedules every 20 seconds
    window.setInterval (function () {

    }, 20000);

})();
