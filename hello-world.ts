const sayHello = (word: string) => {
    return "Hello " + word;
}

const word = "World!";

document.body.textContent = sayHello(word);
