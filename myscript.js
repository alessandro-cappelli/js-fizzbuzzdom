let scatola = document.getElementById("container");

for(let i = 1; i <= 100; i++){
    if((i%3 == 0) && (i%5 == 0)){ //multipli di 5 e di 3
    scatola.innerHTML += '<div class=box-3-5 square>FizzBuzz</div>';
    }

    else if(i%3 == 0){ //multipli di 3
        scatola.innerHTML += '<div class=box-3 square>Fizz</div>';
    }

    else if(i%5 == 0){ //multipli di 5
        scatola.innerHTML += '<div class=box-5 square>Buzz</div>';
    }

    else{
        console.log('iterazione: ', i);
        scatola.innerHTML += '<div class=box square>' + i + '</div>';
    }
}