let btn = document.getElementById('btn');
let output = document.getElementById('output');
let  quote =
 [
    '"Life is a long lesson in humility." -J.M. Barrie ',
    '“Because of your smile, you make life more beautiful.” ​–  Thich Nhat Hanh',
    '“Peace begins with a smile.” — Mother Teresa',
    '“Life is short. Smile while you still have teeth.” — Unknown',
    '“There is fear when frowning. There is love when smiling.” —Maxime Lagacé',
    '“Nothing shakes the smiling heart.” – Santosh Kalwar',
    '“Share your smile with the world. It’s a symbol of friendship and peace.”– Christie Brinkley',
    '“The world always looks brighter from behind a smile.” — Unknown',
    '“Nothing you wear is more important than your smile.” – Connie Stevens',
    '“I love those who can smile in trouble.”- Leonardo da Vinci',
];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
})