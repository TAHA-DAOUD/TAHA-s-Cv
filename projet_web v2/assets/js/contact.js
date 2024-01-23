/*=============== EMAIL JS ===============-*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()
        // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_yq38858', 'template_123sdpi', '#contact-form', '_7sidFKulwWZ3yrnw')
        .then(() => {
            // Show sent message
            contactMessage.textContent = ' Message sent successfully ✅'
            setTimeout(() => {
                    // Remove message after five seconds
                    contactMessage.textContent = ''
                }, 5000)
                // Clear input fields
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.taxtContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)