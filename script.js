document.addEventListener("DOMContentLoaded", function () {
    const notifyBtn = document.getElementById("notify-btn");
    const messageInput = document.getElementById("message");

    notifyBtn.addEventListener("click", function () {
        const message = messageInput.value.trim();
        
        // Prepare data to send
        const notificationData = {
            sender: "charanika@gmail.com", // Change dynamically in future
            receiver: "ashish@gmail.com", // Change dynamically in future
            message: message || "Hey! You have a new notification ❤️"
        };
            fetch("https://cudus-backend.onrender.com", {
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
