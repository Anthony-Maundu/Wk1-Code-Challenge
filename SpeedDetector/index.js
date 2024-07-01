document.getElementById('speedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let licenseNumber = document.getElementById('licenseNumber').value;
    let speedInput = document.getElementById('speed');
    let speed = Number(speedInput.value);

    if (isNaN(speed)) {
        alert('Please enter a numerical value for Speed (km/hr).');
        speedInput.value = ''; // Clear the input field
        speedInput.focus();    // Focus back on the input field
        return;
    }

    let exceed = function() {
        const speedExceed = 5;
        const recommendedSpeed = 70;
        const maxPoints = 12;
        const speedDifference = speed - recommendedSpeed;
        const pointsLost = Math.floor(speedDifference / speedExceed);

        if (speed <= recommendedSpeed) {
            alert(`License number ${licenseNumber} is good to go`);
        } else if (pointsLost >= maxPoints) {
            alert(`License number ${licenseNumber} is suspended`);
        } else {
            alert(`Deduct ${pointsLost} points from license number ${licenseNumber}\nRemainder points: ${maxPoints - pointsLost}`);
        }
    };
    
    exceed();
});
