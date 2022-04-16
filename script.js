const timeLoop = ()  =>  {
    // changing time remaining and formatting it
    const timeRemaining = endTime - Date.now();
    function millisToMinutesAndSeconds(timeRemaining) {
        var minutes = Math.floor(timeRemaining / 60000);
        var seconds = ((timeRemaining % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    // Break case: We are out of time! Done.
    if (timeRemaining === 0) return;
    let timeRemainingFormatted = millisToMinutesAndSeconds(timeRemaining);
    //printing it to the timeRemaining table element of timeRemaining
    console.log(timeRemainingFormatted);
    document.getElementById('timeRemaining').innerHTML = timeRemainingFormatted;
    setTimeout(timeLoop, 1000);
}

let endTime;

const updateTime = ()   =>  {
    const startTime = Date.now();  // => 973457982327546
    const startTimeFormatted = formatTime(startTime);
    // Pull number from out input element
    let inputTime = document.getElementById('time-amount').value;
    // Convert input time from seconds to milliseconds
    inputTime *= 60000;  // 60,000ms === 1min
    // Establish our end time
    endTime = startTime + inputTime;
    const endTimeFormatted = formatTime(endTime);
    // Populate the table with data
    document.getElementById('startTime').innerHTML = startTimeFormatted;
    document.getElementById('finishTime').innerHTML = endTimeFormatted;
    // Hide the button
    document.getElementById('time-select').style.display = 'none';
    // Display the table
    document.getElementById('table').style.display = 'initial';
    
    // Create a popup on the website once the time expires
    setTimeout(() => {window.alert('Time\'s up! Go stretch your legs.')}, inputTime);
    // Start loop
    timeLoop();
}

const formatTime = (dateNumber) => {
    const date = new Date(dateNumber);
    const hours = ('' + date.getHours()).padStart(2, '0');  // '5' => '05'
    const minutes = ('' + date.getMinutes()).padStart(2, '0');  // '12' => '12'
    const seconds = ('' + date.getSeconds()).padStart(2, '0');
    return `${hours !== '00' ? hours + ':' : ''}${minutes}:${seconds}`;
}

document.getElementById('button').addEventListener('click', updateTime);