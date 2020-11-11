document.addEventListener('DOMContentLoaded', () => {
    // console.log('dom loaded');
    var friends = ['Mariottide', 'Gerry', 'Pasquale', 'Osvaldo', 'Ermenegildo'];
    var rooms = [
        'living',
        'bath',
        'computer',
        'fart',
        'burp',
        'dreaming',
        'smoking',
        'screaming',
        'self-love',
        'sex',
    ];

    var weapons = [
        'tampax',
        'rubber duck',
        'underwear',
        'toblerone',
        'c++',
        'keyboard',
        'sock',
        'carillon',
        'story of his life',
        'picture of his wife',
        'smell of his armpit',
        'vegan diet',
        'sound of his music',
        'selfie he made that morning',
        'bla bla bla',
        'karate move',
        'chuck norris name invocation',
        'smell of his fart',
        'chore of having to choose 20 different weapon names',
        'watergun',
    ];
    // load 100 h3
    for (var i = 0; i < 100; i++) {
        var heading = document.createElement('h3');
        heading.classList.add(
            'animate__animated',
            `${i % 2 === 0 ? 'animate__backInLeft' : 'animate__backInRight'}`
        );
        heading.innerText = `Accusation ${i} `;
        heading.id = `${i + 1}`;
        document.querySelector('.container').appendChild(heading);

        // taking only indexes from 0 to 4
        var friend = i % 10 > 4 ? friends[(i - 5) % 10] : friends[i % 10];
        // heading.innerText = friend;
        var weapon;
        var room;

        heading.addEventListener('click', letsTryClosures(i));
    }
    // console.log(i);

    function letsTryClosures(num) {
        return function () {
            // console.log(e.currentTarget, friend);
            console.log(num);
            // console.log(e.currentTarget);
        };
    }
});
