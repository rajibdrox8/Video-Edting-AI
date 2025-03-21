document.getElementById('processBtn').addEventListener('click', function () {
    const videoInput = document.getElementById('videoInput');
    const outputVideo = document.getElementById('outputVideo');

    if (videoInput.files.length === 0) {
        alert('Please upload a video first.');
        return;
    }

    const file = videoInput.files[0];
    const videoURL = URL.createObjectURL(file);
    outputVideo.src = videoURL;
    outputVideo.style.display = 'block';
});
async function generateCaption(videoFile) {
    const formData = new FormData();
    formData.append('file', videoFile);

    const response = await fetch('https://api-inference.huggingface.co/models/your-model-name', {
        method: 'POST',
        headers: {
            'Authorization': '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',
        },
        body: formData,
    });

    const result = await response.json();
    return result;
}

document.getElementById('processBtn').addEventListener('click', async function () {
    const videoInput = document.getElementById('videoInput');
    const outputVideo = document.getElementById('outputVideo');

    if (videoInput.files.length === 0) {
        alert('Please upload a video first.');
        return;
    }

    const file = videoInput.files[0];
    const videoURL = URL.createObjectURL(file);
    outputVideo.src = videoURL;
    outputVideo.style.display = 'block';

    const caption = await generateCaption(file);
    console.log('Generated Caption:', caption);
});