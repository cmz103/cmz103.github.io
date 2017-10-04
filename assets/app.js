document.addEventListener('DOMContentLoaded', function () {

    var typed = new Typed('#typed', {
        strings: [
            'let dev = new Person("Cedric Maniquiz");^1000\n`dev.skills= ["UI", "UX", "designer", "developer"];`^1000\n`dev.greet = (name) => \n{\n  console.log("Hello " + name);\n};`'
        ],
        typeSpeed: 20,
        backSpeed: 0,
        loop: false,
        startDelay: 1000,
        cursorChar: '',
        onComplete: function (self) {
            let input = document.getElementById("input");
            let un = document.getElementById("userName");
            prettyLog('onComplete ' + self);
            input.style.display = "block";
            un.placeholder = "Please enter your name";
            // un.focus();
            $(un).on("keyup", function(e){
                printName(this, e);
            });
        },
        preStringTyped: function (pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
        onStringTyped: function (pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
        onLastStringBackspaced: function (self) { prettyLog('onLastStringBackspaced ' + self) },
        onTypingPaused: function (pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
        onTypingResumed: function (pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
        onReset: function (self) { prettyLog('onReset ' + self) },
        onStop: function (pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
        onStart: function (pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
        onDestroy: function (self) { prettyLog('onDestroy ' + self) }
    });

});

function printName(sender, e) {
    console.log(sender, e);

    //Enter
    if (e.which == 13) {
        var typed = new Typed('#output', {
            strings: [
                'Hello ' + sender.value + ''
            ],
            cursorChar: '',
            typeSpeed: 40,
            backSpeed: 0,
            loop: false,
        });

        $(sender).off("keyup");
    }
}

function prettyLog(str) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
}