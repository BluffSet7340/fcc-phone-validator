const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


const telephoneCheck = () => {
    const regex = /^1?\s?(\(\d{3}\)|\d{3})-?\s?(\d{3})-?\s?(\d{4})$/

    if(input.value.trim() === ""){
        alert("Please provide a phone number")
        resultsDiv.innerHTML = ""
        return;
    } else {
        if(regex.test(input.value)){
            const result = document.createElement('p');
            result.classList.add('result-text', 'valid');
            result.textContent = `Valid US number: ${input.value}`
            resultsDiv.appendChild(result);
        } else {
            const result = document.createElement('p');
            result.classList.add('result-text', 'invalid');
            result.textContent = `Invalid US number: ${input.value}`
            resultsDiv.appendChild(result);
        }
        input.value = ""
    }
}

document.addEventListener("keydown", (Event)=>{
    if(Event.key === 'Enter'){
        telephoneCheck();
    }
})

checkButton.addEventListener("click", telephoneCheck)

clearButton.addEventListener("click", ()=>{
    resultsDiv.innerHTML = ""
})
