const userFortunes = require('./fortunes.json');
const userCompliments = require('./compliments.json');
let globalID = 6;
module.exports = {

    //returns random compliment from array
    getCompliment: (req, res) => {
        const compliments = [`Gee, you're a smart cookie!`, `Cool shirt!`, `Your Javascript skills are stellar.`];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    //returns random fortune from array
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
    //gets user submitted fortune into fortunes.json
    createFortune: (req, res) => {
        //console.log(req);
        const { fortune } = req.body;
        userFortunes.push({
            id: globalID,
            fortune,
        });
        globalID++;
        res.status(200).send(userFortunes);
    },
    //returns random fortune for fortune.json
    getUserFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * userFortunes.length);
        res.status(200).send(userFortunes[randomIndex].fortune);
    },
    //deletes the last user submitted fortune
    deleteLastFortune: () => {
        userFortunes.pop();
        res.status(200).send("successfully deleted user submitted fortune");
    },

    changeLastFortune: (req, res) => {
        const { fortune } = req.body;
        userFortunes.pop();
        user.Fortunes.push({
            id: globalID,
            fortune,
        });
        globalID++;
        res.status(200).send("successfully changed last user submitted fortune");
    },

}
