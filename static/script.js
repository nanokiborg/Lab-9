document.getElementById('clear-button').addEventListener('click', function() {
    clearExperiences();
});

function addProject() {
    let projName = document.getElementById('proj_name').value
    let link = document.getElementById('link').value
    fetch('/add', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'proj_name': projName,
                             'link': link})
    })

}
function clearProject() {
    fetch('/clear', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
        const ProjectsList = document.getElementById('id');
        ProjectsList.innerHTML = '';
        console.log(data.message);
    })
    .catch(error => console.error('Error clearing projects:', error));
}