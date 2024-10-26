// Select membership elements
const joinButton = document.getElementById('join-button');
const membershipForm = document.querySelector('.membership-form');
const membershipFormForm = document.getElementById('membership-form');
const submitButton = document.getElementById('submit-button');

// Function to show/hide membership form
function toggleMembershipForm() {
  membershipForm.style.display = membershipForm.style.display === 'block' ? 'none' : 'block';
}

// Function to handle membership form submission
function handleMembershipSubmission(event) {
  event.preventDefault();
  const formData = new FormData(membershipFormForm);
  const membershipData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    businessName: formData.get('business-name'),
    businessPhoto: formData.get('business-photo'),
  };
  console.log(membershipData);
  // Add logic to send data to server or store in local storage
  alert('Thank you for your interest in joining our chamber!');
  toggleMembershipForm();
}

// Event listeners
joinButton.addEventListener('click', toggleMembershipForm);
submitButton.addEventListener('click', handleMembershipSubmission);



// Function to handle membership form submission
function handleMembershipSubmission(event) {
    event.preventDefault();
    const formData = new FormData(membershipFormForm);
    const membershipData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        businessName: formData.get('business-name'),
        businessPhoto: formData.get('business-photo'),
    };
    // Add application to applications array
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(membershipData);
    localStorage.setItem('applications', JSON.stringify(applications));
    alert('Thank you for your interest in joining our chamber!');
    toggleMembershipForm();
}


