(function() {
    // Initializing EmailJS
    emailjs.init("kN1YboVU2naM_PZrh");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const btn = event.target.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'SENDING...';

    // 'this' refers to the form element
    emailjs.sendForm('service_jxw23sl', 'template_xscvots', this)
        .then(function() {
            alert('Success! Deepanraj will connect with you shortly.');
            btn.textContent = originalText;
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send. Please contact +91 8667445642 directly.');
            btn.textContent = originalText;
            console.log("Error details:", error);
        });
});