const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")

const apikey = "B9oiyLZv58Nf9jRLVKpBEw==oFtEi3zO0Xwj7g1j";

const options = {
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getjoke() {
    jokeEl.innerText = "updating...";
    btnEl.disabled = true;
    btnEl.innerText = "loading...";
    const response =await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
}
btnEl.addEventListener("click",getjoke);