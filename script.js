function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (!weight || !height || weight <= 0 || height <= 0) {
        result.textContent = "Please enter valid weight and height";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let message = `Your BMI is ${bmi} - `;

    if (bmi < 18.5) {
        message += "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message += "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message += "Overweight";
    } else if (bmi >= 30) {
        message += "Obese";
    }
    result.textContent = message;
}