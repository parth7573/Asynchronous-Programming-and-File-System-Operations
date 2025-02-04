
document.getElementById('fileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const directoryPath = document.getElementById('directoryPath').value;
    document.getElementById('status').textContent = "Organizing files...";

    fetch('/organize-files', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ directoryPath })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('status').textContent = data.message;
    })
    .catch(error => {
        document.getElementById('status').textContent = "Error: " + error.message;
    });
});
