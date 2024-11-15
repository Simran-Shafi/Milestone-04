"use strict";
var _a, _b, _c;
// Handle form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        degree: formData.get('degree'),
        gradDate: formData.get('gradDate'),
        jobTitle: formData.get('jobTitle'),
        companyName: formData.get('companyName'),
        duration: formData.get('duration'),
        responsibilities: formData.get('responsibilities'),
        skills: formData.get('skills'),
        profilePic: formData.get('profilePic')
    };
    generateResume(resumeData);
});
// Function to generate and display the resume
function generateResume(data) {
    let resumeHtml = '';
    if (data.profilePic) {
        const reader = new FileReader();
        reader.onload = (event) => {
            var _a;
            const imageSrc = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            resumeHtml += `<h2>Profile Picture</h2><img src="${imageSrc}" alt="Profile Picture" style="max-width: 200px; max-height: 200px; display: block; margin-bottom: 20px;">`;
            resumeHtml += `
                <h1>${data.name}</h1>
                <p>Email: ${data.email}</p>
                <p>Phone: ${data.phone}</p>
                <h2>Education</h2>
                <p>Institution: ${data.education}</p>
                <p>Degree: ${data.degree}</p>
                <p>Graduation Date: ${data.gradDate}</p>
                <h2>Work Experience</h2>
                <p>Job Title: ${data.jobTitle}</p>
                <p>Company: ${data.companyName}</p>
                <p>Duration: ${data.duration}</p>
                <p>Responsibilities: ${data.responsibilities}</p>
                <h2>Skills</h2>
                <p>${data.skills}</p>
            `;
            document.getElementById('resumeOutput').innerHTML = resumeHtml;
            document.getElementById('resumeActions').style.display = 'block'; // Show actions
            document.getElementById('resumeForm').style.display = 'none'; // Hide form
        };
        reader.readAsDataURL(data.profilePic);
    }
    else {
        resumeHtml += `
            <h1>${data.name}</h1>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <h2>Education</h2>
            <p>Institution: ${data.education}</p>
            <p>Degree: ${data.degree}</p>
            <p>Graduation Date: ${data.gradDate}</p>
            <h2>Work Experience</h2>
            <p>Job Title: ${data.jobTitle}</p>
            <p>Company: ${data.companyName}</p>
            <p>Duration: ${data.duration}</p>
            <p>Responsibilities: ${data.responsibilities}</p>
            <h2>Skills</h2>
            <p>${data.skills}</p>
        `;
        document.getElementById('resumeOutput').innerHTML = resumeHtml;
        document.getElementById('resumeActions').style.display = 'block'; // Show actions
        document.getElementById('resumeForm').style.display = 'none'; // Hide form
    }
}
// Handle edit button click
(_b = document.getElementById('editResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    document.getElementById('resumeOutput').innerHTML = ''; // Clear the resume output
    document.getElementById('resumeActions').style.display = 'none'; // Hide actions
    document.getElementById('resumeForm').style.display = 'block'; // Show form
});
// Handle download button click
(_c = document.getElementById('downloadResume')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    var _a;
    const resumeHtml = (_a = document.getElementById('resumeOutput')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (resumeHtml) {
        const blob = new Blob([resumeHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
});
