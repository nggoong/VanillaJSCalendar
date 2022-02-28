(()=> {
    let dateObj;
    let currentYear;
    let currentMonth;
    let prevYear;
    let dateMatrix = [];

    

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

    const setEvent = () => {
        prevBtn = document.querySelector('.prev');
        nextBtn = document.querySelector('.next');
        YearMonth = document.querySelector('.month');

        YearMonth.addEventListener('click', ()=> {
            initYearMonth();
            RenderMonthYear(currentYear, currentMonth);
        })
        nextBtn.addEventListener('click', moveNextMonth);
        prevBtn.addEventListener('click', movePrevMonth);
    }

    








    initYearMonth();
    setEvent();
    RenderMonthYear(currentYear, currentMonth);

    
    


    
})();