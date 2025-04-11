// Flatpickr

flatpickr("#selector-fecha", {
    dateFormat: "d/m/Y",
    minDate: "today",
    locale: "es", 
    disable: [
    function(date) {
            return (date.getDay() === 0 || date.getDay() === 6);
    }
    ],
    locale: {
        "firstDayOfWeek": 1 // start week on Monday
    }
    });