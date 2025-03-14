const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://4wiicbik5zkmxh7u4rmk2edy6m0lvrzx.lambda-url.us-east-2.on.aws/")
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();