document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const education = document.getElementById("education").value;
    const activities = document.getElementById("activities").value;
    const courses = document.getElementById("courses").value;
    const internships = document.getElementById("internships").value;
    const projects = document.getElementById("projects").value;
    const skills = document.getElementById("skills").value;
    const linkedin = document.getElementById("linkedin").value;
    const languages = document.getElementById("languages").value;
    const hobbies = document.getElementById("hobbies").value;

    const resumeContent = `
        <html>
        <head>
            <title>Your Resume</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f0f0f0;
                }
                h1, h2 {
                    color: #333;
                }
                p {
                    color: #444;
                }
            </style>
        </head>
        <body>
            <h1>Resume for ${name}</h1>
            <h2>Educational Qualifications</h2>
            <p>${education}</p>
            <h2>Extracurricular Activities</h2>
            <p>${activities}</p>
            <h2>Courses Completed</h2>
            <p>${courses}</p>
            <h2>Internships</h2>
            <p>${internships}</p>
            <h2>Projects</h2>
            <p>${projects}</p>
            <h2>Skills</h2>
            <p>${skills}</p>
            <h2>LinkedIn ID</h2>
            <p>${linkedin}</p>
            <h2>Languages Known</h2>
            <p>${languages}</p>
            <h2>Hobbies</h2>
            <p>${hobbies}</p>
        </body>
        </html>
    `;

    const newTab = window.open('', '_blank');
    newTab.document.open();
    newTab.document.write(resumeContent);
    newTab.document.close();
});
