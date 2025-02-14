document.addEventListener("DOMContentLoaded", function () {
    const notifyBtn = document.getElementById("notify-btn");
    const messageInput = document.getElementById("message");

    notifyBtn.addEventListener("click", function () {
        const message = messageInput.value.trim();
        // Load environment variables safely
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE;
const ashishPhone = process.env.ASHISH_PHONE;
const charanikaPhone = process.env.CHARANIKA_PHONE;

// Ensure required env variables are set
if (!accountSid || !authToken || !twilioPhone || !ashishPhone || !charanikaPhone) {
    console.error("❌ Missing environment variables! Check TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE, ASHISH_PHONE, and CHARANIKA_PHONE.");
    process.exit(1);
}

        // Prepare data to send
        const notificationData = {
            sender: "charanika@gmail.com", // Change dynamically in future
            receiver: "ashish@gmail.com", // Change dynamically in future
            message: message || "Hey! You have a new notification ❤️"
        };
            fetch("https://cudus-backend.onrender.com/send-notification", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(notificationData)
        })
        .then(response => response.json( {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }))
        .then(data => {
            alert("Notification sent successfully!");
            messageInput.value = ""; // Clear input after sending
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to send notification.");
        });
    });
});
