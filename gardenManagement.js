// gardenManagement.js

// Initial Variables
const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// ✅ Watering Control
if (temperature > 80) {
    console.log("Watering on");
} else {
    console.log("Watering off");
}

// ✅ Garden Lights Control
if (timeOfDay === "evening" || timeOfDay === "night") {
    console.log("Lights on");
} else {
    console.log("Lights off");
}

// ✅ Soil Moisture Adjustment
while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);  // Prints each updated moisture level until it reaches 40
}

// Exporting for Testing
module.exports = { temperature, timeOfDay, soilMoisture };
