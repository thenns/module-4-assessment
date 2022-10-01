module.exports = {

    getCompliment: (req, res) => {
        const compliments = [`Gee, you're a smart cookie!`, `Cool shirt!`, `Your Javascript skills are stellar.`];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [`no snowflake in an avalanche ever feels responsible`,
                          `if you eat something and nobody sees you eat it, it has no calories`,
                          `you will marry a professional athlete - if competitive eating can be considered a sport`,
                          `ask not what your fortune cookie can do for you but what you can do for your fortune cookie`, 
                          `you are not illiterate`];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    createCompliment: (req, res) => {},
     

}
