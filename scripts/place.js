document.addEventListener("DOMContentLoaded", () => {
    const temp = 10
    const windSpeed = 5
    let windChill;

    document.getElementById("temp").textContent = temp
    document.getElementById("wind").textContent = windSpeed

    if(temp >= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temp, windSpeed)
        document.getElementById("wind-chill").textContent = windChill + " °C"
    } else {
        windChill = "N/A"
        document.getElementById("wind-chill").textContent = "N/A"
    }

})

function calculateWindChill (temp, windSpeed) {
    return Math.round((13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)) * 10) / 10;
}