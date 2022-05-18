let count = 0;
const counter = document.querySelector(".counter");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = (e.currentTarget.classList);

        if (styles.contains("decrease-button")) {
            count--;
            if (count < 0) {
                counter.style.color = "red";
            }
        } else if (styles.contains("increase-button")) {
            count++;
            counter.style.color = "green";
        } else {
            count = 0;
            counter.style.color = "black";
        }

        //Change the text content of the counter display
        counter.textContent = count;
    });
});