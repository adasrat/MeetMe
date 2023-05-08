// Get all the questions and answers
const faqs = document.querySelectorAll('.faq');

// Loop through each question and answer
for (let i = 0; i < faqs.length; i++) {
  const faq = faqs[i];

  // Add a click event listener to each question
  faq.querySelector('h2').addEventListener('click', function() {
    // Toggle the "active" class on the question
    faq.classList.toggle('active');

    // Get the answer element
    const answer = faq.querySelector('p');

    // If the question is active, show the answer, otherwise hide it
    if (faq.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
}
