document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const body = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    sendEmail(subject, body);
  });

  function sendEmail(subject, message) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "hackathon.d211@gmail.com",
      Password: "4CE2D4A17E09D6B84BC7E903F8300DA512C6",
      To: "hackathon.d211@gmail.com",
      From: "hackathon.d211@gmail.com",
      Subject: "Message from Website: " + subject,
      Body: message,
      Port: 2525,
    })
      .then((response) => {
        console.log("", response)
        if (response === "OK") {
          alert("Message sent successfully!");
          contactForm.reset();
        } else {
          alert("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => console.error("Error:", error));
  }
});
