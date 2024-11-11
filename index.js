// Profile photo upload
document.getElementById('photoUpload').addEventListener('change', function(event) {
    const profilePhoto = document.getElementById('profilePhoto');
    profilePhoto.src = URL.createObjectURL(event.target.files[0]);
});

// ELab image upload
document.getElementById('elabUpload').addEventListener('change', function(event) {
    const elabImage = document.getElementById('elabImage');
    elabImage.src = URL.createObjectURL(event.target.files[0]);
});

// Certificate image upload
document.getElementById('certificateUpload').addEventListener('change', function(event) {
    const certificateImage = document.getElementById('certificateImage');
    certificateImage.src = URL.createObjectURL(event.target.files[0]);
});

// Coding competition image upload
document.getElementById('codingUpload').addEventListener('change', function(event) {
    const codingImage = document.getElementById('codingImage');
    codingImage.src = URL.createObjectURL(event.target.files[0]);
});
