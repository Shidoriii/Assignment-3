function toggleUnits() {
    let unit = document.getElementById("unit").value;
    let heightUnit = document.getElementById("heightUnit");
    let weightUnit = document.getElementById("weightUnit");

    if (unit === "imperial") {
        heightUnit.innerText = "in";
        weightUnit.innerText = "lbs";
    } else {
        heightUnit.innerText = "cm";
        weightUnit.innerText = "kg";
    }
}

function calculateBMR() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let activity = document.getElementById("activity").value;
    let unit = document.getElementById("unit").value;

    if (!age || !height || !weight) {
        alert("Please fill in all fields.");
        return;
    }

    if (unit === "imperial") {
        height = height * 2.54; // Convert inches to cm
        weight = weight * 0.453592; // Convert lbs to kg
    }

    let bmr;
    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    let dailyCalories = bmr * activity;

    document.getElementById("bmrResult").innerText = `BMR: ${bmr.toFixed(2)} kcal/day`;
    document.getElementById("calorieResult").innerText = `Daily Caloric Needs: ${dailyCalories.toFixed(2)} kcal/day`;
}
