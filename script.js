function downloadResume() {
    const resumePath = './Jayakrish_MK.pdf';  // Path to your resume file

    // Fetch the resume file
    fetch(resumePath)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'Jayakrish_MK_Resume.pdf';
            link.click();
        })
        .catch(error => console.error('Error downloading resume:', error));
}
