
const form = document.querySelector('form').addEventListener("submit", e => {
    e.preventDefault();
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortune");
const addCompBtn = document.getElementById("add");
const addQuoteBtn = document.getElementById("inspire");
const deleteBtn = document.getElementById("delete");
const getCompliment = () => {
    complimentBtn.disabled = true;
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
        complimentBtn.disabled = false;
    });
};

const getFortune = () =>{
    fortuneBtn.disabled = true;
    axios.get("http://localhost:4000/api/fortune/")
    .then(res =>{
        const data = res.data;
        alert(data);
        fortuneBtn.disabled = false;
    })
    .catch((error) =>{
        console.log(error)
    })
};


const addCompliment = () =>{
    addCompBtn.disabled = true;
    const newComp = document.getElementById("newComp").value;
    axios.post("http://localhost:4000/api/add",
    {data: newComp})
    .then(res => {
        const data = res.data
        console.log(res.data)
        alert(data)
        document.getElementById('newComp').value ='';
        addCompBtn.disabled = false;
    })
    .catch((error) =>{
        console.log(error);
    })
    
};

const addInspiration= () =>{
    addQuoteBtn.disabled = true;
    const newQuote = document.getElementById("quote").value;
    axios.post("http://localhost:4000/api/quote",
    {data: newQuote})
    .then(res => {
        const data = res.data
        console.log(res.data)
        alert(data)
        const newQuote = document.getElementById("quote").value;
    const newListItem = document.createElement("li");
    newListItem.textContent = newQuote;
    const quotesList = document.getElementById("quotes-list");
    quotesList.appendChild(newListItem);

        addQuoteBtn.disabled = false;
    })
    .catch((error) =>{
        console.log(error);
    })
};
// const deleteQuote = () =>
// deleteBtn.disabled = true;
// const quotesList = document.getElementById("quotes-list");
// const lastQuote = quotesList.lastChild;
// quotesList.removeChild(lastQuote);

// axios.delete("http://localhost:4000/api/delete")
// .then(res =>{
//     const data = res.data
//     alert(data)
    
// deleteBtn.disabled = false;
// })
const deleteQuote = () => {
    deleteBtn.disabled = true;
    axios.delete("http://localhost:4000/api/delete")
      .then(res => {
        const data = res.data;
        alert(data);
        const quotesList = document.getElementById("quotes-list");
        const lastQuote = quotesList.lastChild;
        quotesList.removeChild(lastQuote);
        deleteBtn.disabled = false;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  


deleteBtn.addEventListener('click', deleteQuote)
addQuoteBtn.addEventListener('click', addInspiration)
addCompBtn.addEventListener("click", addCompliment)
fortuneBtn.addEventListener("click", getFortune)
complimentBtn.addEventListener('click', getCompliment)
})
