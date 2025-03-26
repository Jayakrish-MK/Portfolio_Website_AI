function downloadResume() {
    fetch('https://your-backend-url.com/download-resume')
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'Jayakrish_MK.pdf';
            link.click();
        })
        .catch(error => console.error('Error downloading resume:', error));
}
