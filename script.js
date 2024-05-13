var quote1=document.getElementById("quote");
var authorName= document.getElementById("author");
const quoteArray=[
    {
        quote: `All the world’s a stage, and all the men and women merely players.`,
        authorName: `William Shakespeare` ,

    },
    {
        quote:`You must be the change you wish to see in the world.`,
        authorName:`Mahatma Gandhi`

    },
    {
        quote:`Genius is one percent inspiration and ninety-nine percent perspiration.`,
        authorName:`Thomas Edison`

    },
    {
        quote:`Whatever you are, be a good one.`,
        authorName:`Abraham Lincoln`

    },
    {
        quote:`That’s one small step for a man, a giant leap for mankind.`,
        authorName:`Neil Armstrong`,

    },
    {
        quote:`What doesn't kill us makes us stronger.`,
        authorName:`Friedrich Nietzsche`

    },
    {
        quote:`Power corrupts; absolute power corrupts absolutely.`,
        authorName: `John Dalberg-Acton`,

    },
    {
        quote:`Keep your friends close, but your enemies closer.`,
        authorName:`Michael Corleone `,

    },
    {
        quote:`If you want something done right, do it yourself.`,
        authorName:`Charles-Guillaume Étienne`,

    },
    {
        quote: `I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.`,
        authorName: `Martin Luther King`,

    },
]
for(let i=0;i<quoteArray.length;i++){
   const randomNumber =Math.floor(Math.random()*10);
   console.log(randomNumber);
   console.log(quoteArray[randomNumber].quote.values);
   document.getElementById("quote").innerHTML=JSON.stringify(quoteArray[randomNumber].quote);
   document.getElementById("author").innerHTML=JSON.stringify(quoteArray[randomNumber].authorName);

}