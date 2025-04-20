// load DOM
document.addEventListener("DOMContentLoaded", () => {
    // select button by its ID
    const volunteerButton = document.getElementById("volunteer-button");

    // select the container with additional charity details 
    const charityDetailsContainer = document.getElementById("charity-details");

    // add an event listener to the button
    volunteerButton.addEventListener("click", () => {
        // prompt user to enter contact information
        const name = prompt("Please enter your name:");
        const email = prompt("Please enter your email address:");
        const phone = prompt("Please enter your phone number:");

        // if all fields are filled out- show the thank you message
        if (name && email && phone) {
            alert(`Thank you for your interest in volunteering, ${name}! We will contact you at ${email} or ${phone}.`);
        } else {
            alert("Please fill out all the fields.");
        }

        // dynamically create a new div to display the volunteer information
        const volunteerDetails = document.createElement("div");
        volunteerDetails.innerHTML = `
            <h3>Your Volunteer Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        `;

        // append new info to charity details container
        charityDetailsContainer.appendChild(volunteerDetails);
    });

    // step 4 enhancement requirement: show benefits of volunteering for personal health
    const charityName = document.querySelector(".charity-name");
    const extraDetails = document.createElement("div");
    extraDetails.innerHTML = `
        <br>
        <h4>Why Volunteer?</h4>
        <p> Did you know that volunteering has been proven to boost serotonin levels in the brain, which is often referred to as the "happy chemical." This helps promote feelings of calm and contentment, reducing anxiety and depression. Recent research reveals that volunteering not only nourishes the soul but also provides a variety of health benefits.</p>
    `;
    extraDetails.style.display = "none"; // Initially hide the extra details

    // append the extra details to charity section
    charityDetailsContainer.appendChild(extraDetails);

    // show extra details when user hovers over charity name
    charityName.addEventListener("mouseover", () => {
        extraDetails.style.display = "block";
    });

    // hide extra details when user stops hovering
    charityName.addEventListener("mouseout", () => {
        extraDetails.style.display = "none";
    });
});
