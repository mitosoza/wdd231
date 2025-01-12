function createCourseDivs() {
    const certificatesBody = document.getElementById('certificates-container');

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.textContent = `${course.subject} ${course.number}`;
        courseDiv.classList.add('course-div');
        if (course.completed) {
            courseDiv.classList.add('completed');
        }
        courseDiv.dataset.subject = course.subject;
        certificatesBody.appendChild(courseDiv);
    });
}

function filterCourses(subject) {
    const courseDivs = document.querySelectorAll('.course-div');
    courseDivs.forEach(div => {
        if (subject === 'All' || div.dataset.subject === subject) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createCourseDivs();

    const filterContainer = document.getElementById('filter-container');

    const allButton = document.createElement('button');
    allButton.textContent = 'All';
    allButton.addEventListener('click', () => filterCourses('All'));

    const cseButton = document.createElement('button');
    cseButton.textContent = 'CSE';
    cseButton.addEventListener('click', () => filterCourses('CSE'));

    const wddButton = document.createElement('button');
    wddButton.textContent = 'WDD';
    wddButton.addEventListener('click', () => filterCourses('WDD'));

    filterContainer.appendChild(allButton);
    filterContainer.appendChild(cseButton);
    filterContainer.appendChild(wddButton);
});