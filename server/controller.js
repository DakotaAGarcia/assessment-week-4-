const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
let globalId = 0
module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) =>{
        const fortunes = ["All will go well with your new project", "All your hard work will soon pay off", "All the troubles you have will pass away very quickly", "All the effort you are making will ultimately pay off", "Adventure can be real happiness", "Any day above ground is a good day"];

        let cookieIndex = Math.floor(Math.random()* fortunes.length);
        let randomCookie = fortunes[cookieIndex];

        res.status(200).send(randomCookie)
    },
    addCompliment: (req, res) =>{
        compliments.push(req.body.data);
        res.status(200).send("compliment added")
    },
   addInspiration: (req, res) =>{
    res.status(200).send("Great Quote!")
   },
   deleteQuote: (req, res) =>{
    res.status(200).send("Quote Erased")
   },

}