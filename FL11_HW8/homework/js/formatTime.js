function formatTime(minutesFormat) {
    let days = (minutesFormat / 1440);
    let rndDays = Math.floor(days);
    let hours = ((minutesFormat % 1440) / 60);
    let rndHours = Math.floor(hours);
    let minutes = ((minutesFormat % 1440) % 60);
    let rndMinutes = Math.floor(minutes);

    return `${rndDays} day(s) ${rndHours} hour(s) ${rndMinutes} minute(s)`;
}



formatTime(120);
formatTime(59);
formatTime(3601);