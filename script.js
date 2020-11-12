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
        'lightsaber',
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
            `${i % 2 === 0 ? 'animate__backInLeft' : 'animate__backInRight'}`,
            'my-0'
        );
        heading.innerText = `Accusation ${i} `;

        // heading.id = `${i}`;
        // heading.setAttribute('data-toggle', 'modal');
        setAttributes(heading, {
            id: `${i}`,
            'data-toggle': 'modal',
            'data-target': '#staticBackdrop',
        });

        document.querySelector('.container').appendChild(heading);

        heading.addEventListener('click', letsTryClosures(i));
    }

    function letsTryClosures(num) {
        return function (e) {
            // taking only indexes from 0 to 4
            var friend =
                num % 10 > 4 ? friends[(num - 5) % 10] : friends[num % 10];
            var weapon = weapons[num % weapons.length];
            var room = `${rooms[num % rooms.length]} room`;
            document.querySelector(
                '.modal-title'
            ).innerText = `Accusation ${num}`;

            document.querySelector(
                '.modal-body'
            ).innerText = `Accusation ${num}: I accuse ${friend}, with the ${weapon} in the ${room}`;
            // console.log(num, friend, e.currentTarget);
        };
    }

    function setAttributes(element, attributesObject) {
        Object.keys(attributesObject).forEach((key) =>
            element.setAttribute(key, attributesObject[key])
        );
    }

    // const h3s = document.querySelectorAll('h3');

    // for (var index = 0; index < h3s.length; index++) {
    //     let ind = index;
    //     console.log(ind, index);
    //     h3s[index].addEventListener('click', () => console.log(index));
    // }
});
