// Select the contact form
const contactForm = document.getElementById('contactForm');

// Add an event listener for the form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Collect the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate form submission (you can add actual backend handling here)
    console.log("Form submitted!");
    alert(`Thank you, ${name}! Your message has been received.`);

    // Clear the form
    contactForm.reset();
});