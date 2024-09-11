fetch('https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?type=single')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.joke;
       
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText
        
    })

