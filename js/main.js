const btn = document.getElementById('btn');
const form = document.getElementById('contactForm');
btn.addEventListener('click', function(e) {
e.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

    // Check if all fields are filled
if (name && email && subject && message) {
    const body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Subject: ' + subject + '<br/> Message: ' + message;

    Email.send({
        SecureToken: "e338c765-6605-4c7c-bab7-f585c18e85a5",
        To: 'bahatiremy05@gmail.com',
        From: "bahatiremy05@gmail.com",
        Subject: 'Personalized Contacts',
        Body: body
    }).then(
        message => {
            Swal.fire({
                title: "Good job!",
                text: "Email sent successfully!",
                icon: "success"
                });
                form.reset();
            // alert("Email sent successfully!");
        }
    );
    } else {
    Swal.fire({
        title: "Try again!",
        text: "Please fill in all fields before sending.",
        icon: "warning"
        });
    // alert("Please fill in all fields before sending.");
    }
    });