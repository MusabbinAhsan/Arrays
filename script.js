const form = document.getElementById('marksForm');
const resultsTable = document.getElementById('results');
const balloonsContainer = document.getElementById('balloons');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const marks = Array.from(document.querySelectorAll('.subject-mark')).map(input => Number(input.value));
    
    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
    const percentage = ((totalMarks / (marks.length * 100)) * 100).toFixed(2);
    
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${totalMarks}</td>
        <td>${percentage}%</td>
    `;
    
    resultsTable.appendChild(newRow);
    
    createBalloons();
    form.reset();
});

function createBalloons() {
    const balloonCount = 5; // Number of balloons to create

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        const randomX = Math.random() * (window.innerWidth - 50);
        balloon.style.left = `${randomX}px`;

        const colors = ['#ff6f61', '#6b5b93', '#88b04b', '#f7cac9', '#92a8d1'];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        balloonsContainer.appendChild(balloon);

        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }
}
