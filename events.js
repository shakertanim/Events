addEventListener("keydown", keyPress);
addEventListener("keyup", keyUp);
    function keyPress(event){
        const a = document.querySelectorAll("h1");


        a.forEach((h1) => {
            let audio = `audio${h1.id}`
            var audio1 = document.getElementById(audio);
            if (parseInt(event.keyCode) === parseInt(h1.id)) {
                h1.classList.toggle("transition");


                audio1.play();
                audio1.currentTime = 0;




            }a

        });

    }

    function keyUp(event) {
        const b = document.querySelectorAll("h1");
        b.forEach((h1) => {
            if (parseInt(event.keyCode) === parseInt(h1.id)) {
                h1.classList.toggle("key");


            }

        });
    }

function duplicateElement() {
    // Select the original element
    const original = document.getElementById('originalElement');

    // Create a deep clone of the original element
    const clone = original.cloneNode(true);

    // Append the clone to the document body or any desired parent element
    document.body.appendChild(clone);
}