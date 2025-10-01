function updateCalendar() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('id-ID', options);
    const calendarElement = document.getElementById('calendar');
    if (calendarElement) {
        calendarElement.textContent = dateString;
    }
}

window.onload = function() {
    updateClock();
    updateCalendar();
};