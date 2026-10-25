import { students } from "./students.js"

const markupStudents = `<ul class="students-list">${students.map(stu => `<li class="students-item">
        <article class="student">
            <div class="student-info">
                <h2 class="student-name">${stu.firstName} ${stu.lastName}</h2>
                <div class="student-deteils">
                    <span class="student-course">${stu.course} курс</span>
                    <span class="student-group">${stu.group}</span>
                    <span class="student-major">${stu.major}</span>
                </div>
                <div class="student-results">
                <span class="student-score">${stu.avgScore}</span>
                <span class="student-debts has-dedts">${stu.hasDebts}</span>
                </div>
            </div>
            <div class="student-hobbies">
            <h3 class="student-hobbies-title">Хобі</h3>
            <ul class="hobbies-list">${stu.hobbies.map(hob => `<li class"hobbies-item">${hob}</li>`).join("")}</ul>
            </div>
            <div class="student-meta">
<span class="student-year">Початок навчання: ${stu.startYear}</span>
<span class="student-group">Групa ${stu.group}:</span>
            </div>
        </article>
    </li>`).join("")}</ul>`

const container = document.querySelector('.container');

container.innerHTML = markupStudents











