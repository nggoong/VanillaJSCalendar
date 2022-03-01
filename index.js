(()=> {
    let dateObj;
    let currentYear;
    let currentMonth;
    let dateMatrix = Array.from(Array(5), ()=> Array(7).fill(''));

    

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

    const setPrevDate = () => {
        let prevDateObj;
        let prevMonth;
        let prevYear;
        let prevLastDate;
        let prevLastDay;
        let index = 0;

        if(currentMonth == 1) {
            prevMonth = 12;
            prevYear = currentYear - 1;
        }
        else {
            prevMonth = currentMonth - 1;
            prevYear = currentYear;
        }

        prevDateObj = new Date(prevYear, prevMonth, 0);
        prevLastDate = prevDateObj.getDate();
        prevLastDay = prevDateObj.getDay();

        for(let i = prevLastDate - prevLastDay; i <= prevLastDate; i++) {
            dateMatrix[0][index] = i;
            index += 1;
        }
        return index;
    }

    const setCurrentDate = () => {
        let dateValue = 1;
        let prevIndex = setPrevDate();
        let currentDateObj = new Date(currentYear, currentMonth, 0);
        let currentLastDate = currentDateObj.getDate();
        for(let i = prevIndex; i< dateMatrix[0].length; i++) {
            dateMatrix[0][i] = dateValue;
            dateValue += 1;
        }
        for(let i = 1; i<5; i++) {
            for(let j = 0; j < dateMatrix[i].length; j++) {
                dateMatrix[i][j] = dateValue;
                dateValue += 1;
                if(dateValue > currentLastDate) break;
            }
        }

        return prevIndex;
    }

    const RenderDate = () => {
        let prevIndex = setCurrentDate();
        let wrapper = document.querySelector('.dates-wrapper');
        let weekDiv;
        let dateDiv;
        for(let i = 0; i< dateMatrix.length; i++) {
            weekDiv = document.createElement('div');
            weekDiv.classList.add('week');
            console.log('hello')
            for(let j = 0; j < dateMatrix[i].length; j++) {
                dateDiv = document.createElement('div');
                if(i == 0 && j < prevIndex) {
                    dateDiv.classList.add('prev-month-date');
                }
                dateDiv.classList.add('date');
                dateDiv.innerText = dateMatrix[i][j];
                weekDiv.appendChild(dateDiv);
            }
            wrapper.appendChild(weekDiv);
        }
    }








    initYearMonth();
    setEvent();
    RenderMonthYear(currentYear, currentMonth);
    RenderDate();

    
    


    
})();