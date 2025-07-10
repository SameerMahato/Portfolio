$(document).ready(function() {
    // Smooth scrolling
    $('nav a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800
        );
      }
    });
  
    // Form submission
    $('#contact-form').submit(function(event) {
      event.preventDefault();
      // Perform form submission AJAX request here
      // You can use jQuery AJAX or any other method to submit the form data
      alert('Form submitted!');
    });
  });
  