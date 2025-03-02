function calculateBMR() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let activity = document.getElementById("activity").value;

    if (!age || !height || !weight) {
        alert("Please fill in all fields.");
        return;
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
