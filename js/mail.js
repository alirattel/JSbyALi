const btn = document.getElementById('button');
const form = document.getElementById('form'); 
const message = document.getElementById("message");
const subject = document.getElementById("subject");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Sending...';

    const serviceID = 'service_5u8xsk8';
    const templateID = 'template_r17w0sp';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        message.value = "";
        subject.value = "";
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });
