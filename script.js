
const startDate =           document.querySelector('#startDateInput');
const endDate =             document.querySelector('#endDateInput');
const judgment =            document.querySelector('#judgmentAmountInput');
const percentage =          document.querySelector('#percentageInput');
const submit =              document.querySelector('#submit'); 

const startDateOutput =     document.querySelector("#startDateOutput");
const endDateOutput =       document.querySelector("#endDateOutput");
const totalDaysOutput =     document.querySelector("#totalDaysOutput");
const perDayAmountOutput =  document.querySelector("#perDayAmountOutput");
const totalOutput =         document.querySelector("#totalOutput");

const inputValues = {
};

submit.addEventListener('click', (event)=> {
    event.preventDefault(); 
    getValues(); 
    const numDays = calculateDays(inputValues.startDate, inputValues.endDate)
    const judgment = inputValues.judgment; 
    const percentage = inputValues.percentage / 100
    const perDayAmt = ((judgment * percentage) / 365).toFixed(2);
    const total = ((numDays * perDayAmt) + judgment).toLocaleString({style: 'currency', currency: 'USD' }); 
   
    startDateOutput.innerHTML = new Date(inputValues.startDate).toLocaleString('en-US',{ month: 'short', day: 'numeric', year: 'numeric'}); 
    endDateOutput.innerHTML = new Date(inputValues.endDate).toLocaleString('en-US',{ month: 'short', day: 'numeric', year: 'numeric'}); ; 
    totalDaysOutput.innerHTML = numDays; 
    perDayAmountOutput.innerHTML = perDayAmt; 
    totalOutput.innerHTML = total;

});

function calculateDays(start, end) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(start);
    const secondDate = new Date(end);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return diffDays
}

function getValues() {
    inputValues.startDate=      startDate.value; 
    inputValues.endDate=        endDate.value; 
    inputValues.judgment=       parseInt(judgment.value); 
    inputValues.percentage=     parseInt(percentage.value);
}
