
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortune");
const addCompBtn = document.getElementById("add");
const addQuoteBtn = document.getElementById("inspire");
const deleteBtn = document.getElementById("delete");
const createBtn = document.getElementById("create");

const form = document.querySelector('form').addEventListener("submit", e => {
    e.preventDefault();

const getCompliment = () => {
    complimentBtn.disabled = true;
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
    complimentBtn.disabled = false;
};

const getFortune = () =>{
    fortuneBtn.disabled = true;
    axios.get("http://localhost:4000/api/fortune/")
    .then(res =>{
        const data = res.data;
        alert(data);
    })
    .catch((error) =>{
        console.log(error)
    })
    fortuneBtn.disabled = false;
};


const addCompliment = () =>{
    addCompBtn.disabled = true;
    const newComp = document.getElementById("newComp").value;
    if(newComp === ""){
        alert("First you must type something before it can be added!")
        addCompBtn.disabled = false;
        return;
    }
    axios.post("http://localhost:4000/api/add",
    {data: newComp})
    .then(res => {
        const data = res.data
        console.log(res.data)
        alert(data)
        document.getElementById('newComp').value ='';
    })
    .catch((error) =>{
        console.log(error);
    })
    addCompBtn.disabled = false;
    
};

const addInspiration= () =>{
    addQuoteBtn.disabled = true;
    const newQuote = document.getElementById("quote").value;
    if(newQuote === ""){
        alert("Oops, can't add a quote that doesn't exist!")
        addCompBtn.disabled = false;
        return;
    }
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
        document.getElementById('quote').value ='';
    })
    .catch((error) =>{
        console.log(error);
    })
    addQuoteBtn.disabled = false;
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
    })
    .catch((error) => {
        console.log(error);
    });
    deleteBtn.disabled = false;
  };
  
  const createProfile = body =>{
    createBtn.disabled = true;
    axios.post("http://localhost:4000/api/create", body)
    .then(res =>{
        const data = res.data;
        alert(data);
        
    })
  }

deleteBtn.addEventListener('click', deleteQuote)
addQuoteBtn.addEventListener('click', addInspiration)
addCompBtn.addEventListener("click", addCompliment)
fortuneBtn.addEventListener("click", getFortune)
complimentBtn.addEventListener('click', getCompliment)
})
