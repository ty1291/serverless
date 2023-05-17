const getRandomDadJoke = async () => {
  const url = "/.netlify/functions/jokes";
  const jokeStream = await fetch(url);
  const jsonJoke = await jokeStream.json();
  const joke = jsonJoke.joke;
  return joke;
};

const displayJoke = (joke) => {
  const h1 = document.querySelector("h1");
  h1.textContent = joke;
};

const refreshJoke = async () => {
  const joke = await getRandomDadJoke();
  displayJoke(joke);
};

refreshJoke();

setInterval(refreshJoke, 10000);
