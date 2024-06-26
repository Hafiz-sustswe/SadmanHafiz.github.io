(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();

let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Submitting..";
    let data = new FormData(form);
    fetch("https://script.google.com/macros/s/AKfycbzwx4gzQncfAKmZFayNRnpojtabL3rTDg380oS3JiPgHRlnFXzj_uvZDOGnA-RRoGTSqg/exec", {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#msg").innerHTML = data;
            document.querySelector("#sub").value = "Submit";
        });
});
