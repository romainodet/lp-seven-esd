var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('sauvez votre âme')
    .pauseFor(2500)
    .deleteAll()
    .typeString('il  est temps...')
    .pauseFor(2500)
    .deleteAll()
    .typeString('en avez vous la force?')
    .pauseFor(2500)
    .start();