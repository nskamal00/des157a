(function() {

    'use strict';

    const openBtns = document.querySelectorAll('.open');
    console.log(openBtns);
    const closeBtns = document.querySelectorAll('.close');
    const showImageButton = document.getElementById("heart");
    const myImage = document.getElementById("filledheart");
    var p = document.getElementById("paragraph");


    for (const eachBtn of openBtns) {
        eachBtn.addEventListener('click', function(event) {
            event.preventDefault();
            const thisBtn = this.id;
            console.log(thisBtn);
            if (document.getElementById(`ol-${thisBtn}`).classList.contains('overlay-wide')) {
                document.getElementById(`ol-${thisBtn}`).className = `overlay-wide showing`;
            } else {
                document.getElementById(`ol-${thisBtn}`).className = `overlay-tall showing`;
            }


        });
    }

    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden';
        }
    });
    showImageButton.addEventListener("click", () => {
        myImage.style.display = "block";
        p.style.display = "block";
    });

})();