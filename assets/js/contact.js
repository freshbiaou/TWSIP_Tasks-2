/* ========== EMAIL JS ================ */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')


const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID -#form - publickey
    emailjs.sendForm('service_4r8cvtr', 'template_83h6akc', '#contact-message', 'Vs_VRrM0tB6FsMIkc')
    .then(() => {
        //show sent messgage 
        contactMessage.textContent = 'Message sent successfully'
        
        //Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields 
        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Message not send (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)


