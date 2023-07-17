var circle = document.getElementById("circle")
const title = document.getElementById("title")
const advice = document.getElementById("advice")



function getAdvice(){
    axios.get("https://api.adviceslip.com/advice")
    .then(response => {
        title.textContent = "ADVICE #" + response.data.slip.id
        advice.textContent = `“${response.data.slip.advice}”`
    })
}



circle.addEventListener("click",getAdvice)
window.addEventListener('load', getAdvice);
window.addEventListener('load', function() {
    if('ontouchstart' in window || navigator.maxTouchPoints) {
        document.body.addEventListener('touchstart', function() {}, false);
        circle.setAttribute('id','circle-mobile')
    }
})
