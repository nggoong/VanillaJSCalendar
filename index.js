(()=> {
    let dateObj;
    let currentYear;
    let currentMonth;

    

    const modifyNumber = (num) => { 
        if(num < 10) return '0' + num
        else return num;
    }

    const initYearMonth = () => {
        dateObj = new Date();
        currentYear = dateObj.getFullYear();
        currentMonth = modifyNumber(dateObj.getMonth() + 1);
    }

    const RenderMonthYear = (year, month) => {
        let monthArea = document.querySelector('.month');
        monthArea.innerHTML=`${year}.${month}`;
    }

    const moveNextMonth = () => {
        if(currentMonth == 12){
            currentMonth = 1;
            currentYear = parseInt(currentYear) + 1;
        } 
        else {
            currentMonth = parseInt(currentMonth) + 1;
        }

        RenderMonthYear(modifyNumber(currentYear), modifyNumber(currentMonth));
        
    }

    const movePrevMonth = () => {
        if(currentMonth == 1) {
            currentMonth = 12;
            currentYear = parseInt(currentYear) - 1;
        }
        else {
            currentMonth = parseInt(currentMonth) - 1;
        }
        RenderMonthYear(modifyNumber(currentYear), modifyNumber(currentMonth));
    }

    const setButtonEvent = () => {
        prevBtn = document.querySelector('.prev');
        nextBtn = document.querySelector('.next');

        nextBtn.addEventListener('click', moveNextMonth);
        prevBtn.addEventListener('click', movePrevMonth);
    }








    initYearMonth();
    setButtonEvent();
    RenderMonthYear(currentYear, currentMonth);

    
    


    
})();