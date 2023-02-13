(function() {
    "use strict";
    console.log('reading js');
    const myForm = document.querySelector("#myform");
    const madlib = document.querySelector("#madlib");


    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const firstname = document.querySelector('#firstname').value;
        const birthmonth = document.querySelector('#birthmonth').value;
        const adjective1 = document.querySelector('#adjective1').value;
        const adjective2 = document.querySelector('#adjective2').value;
        const verb = document.querySelector('#verb').value;
        const pluralnoun = document.querySelector('#pluralnoun').value;
        const bestie = document.querySelector('#bestie').value;

        let myText;

        if (firstname && birthmonth && adjective1 && adjective2 && verb && pluralnoun && bestie) {
            myText = `Surprise! <br>  <span>${firstname}</span>, <br> Since it is <span>${birthmonth}</span>  I thought I would get us two tickets to Amsterdam for your birthday! There we can enjoy <span>${adjective1}</span> adventures exploring the Van Gogh Museum, Vondelpark, and the Royal Palace. I heard Dutch people are <span>${adjective2}</span> and we will be sure to <span>${verb}</span> with many of the locals. I cannot wait to fall asleep to the sounds of <span>${pluralnoun}</span> under the beautiful canals. 
                               <br> <br> Love you the most, <br>
             <span>${bestie}</span>`;
        } else {
            myText = ("Please fill out the rest of the form!");
        }

        madlib.classList.add('reveal');
        myForm.classList.add('hide');
        madlib.innerHTML = myText;
    });


})();