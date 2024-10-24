// Retrieve applications from local storage or database
const applications = JSON.parse(localStorage.getItem('applications')) || [];

// Function to render applications
function renderApplications() {
    const applicationsContainer = document.getElementById('applications-container');
    applicationsContainer.innerHTML = '';
    applications.forEach((application, index) => {
        const applicationHTML = `
            <div class="application">
                <h3>${application.businessName}</h3>
                <p>${application.name}</p>
                <p>${application.email}</p>
                <p>${application.phone}</p>
                <img src="${application.businessPhoto}" alt="Business Photo">
                <button class="approve-button" data-index="${index}">Approve</button>
            </div>
        `;
        applicationsContainer.insertAdjacentHTML('beforeend', applicationHTML);
    });
}

// Event listener for approve button clicks
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('approve-button')) {
        const index = event.target.dataset.index;
        const approvedApplication = applications[index];
        // Add approved application to approved businesses array
        const approvedBusinesses = JSON.parse(localStorage.getItem('approvedBusinesses')) || [];
        approvedBusinesses.push(approvedApplication);
        localStorage.setItem('approvedBusinesses', JSON.stringify(approvedBusinesses));
        // Remove approved application from applications array
        applications.splice(index, 1);
        localStorage.setItem('applications', JSON.stringify(applications));
        renderApplications();
    }
});

renderApplications();

// Function to render applications
function renderApplications() {
    const applicationsContainer = document.getElementById('applications-container');
    applicationsContainer.innerHTML = '';
    applications.forEach((application, index) => {
        const applicationHTML = `
            <div class="application">
                <h3>${application.businessName}</h3>
                <p>${application.name}</p>
                <p>${application.email}</p>
                <p>${application.phone}</p>
                <img src="${application.businessPhoto}" alt="Business Photo">
                <button class="approve-button" data-index="${index}">Approve</button>
                <button class="delete-button" data-index="${index}">Delete</button>
            </div>
        `;
        applicationsContainer.insertAdjacentHTML('beforeend', applicationHTML);
    });
}
renderApplications();

// Event listener for approve and delete button clicks
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('approve-button')) {
        const index = event.target.dataset.index;
        const approvedApplication = applications[index];
        // Add approved application to approved businesses array
        const approvedBusinesses = JSON.parse(localStorage.getItem('approvedBusinesses')) || [];
        approvedBusinesses.push(approvedApplication);
        localStorage.setItem('approvedBusinesses', JSON.stringify(approvedBusinesses));
        // Remove approved application from applications array
        applications.splice(index, 1);
        localStorage.setItem('applications', JSON.stringify(applications));
        renderApplications();
    } else if (event.target.classList.contains('delete-button')) {
        const index = event.target.dataset.index;
        applications.splice(index, 1);
        localStorage.setItem('applications', JSON.stringify(applications));
        renderApplications();
    }
});

