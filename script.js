function generateResume() {
    document.getElementById("previewName").innerText =
        document.getElementById("fullName").value;

    document.getElementById("previewTitle").innerText =
        document.getElementById("title").value;

    document.getElementById("previewEmail").innerText =
        document.getElementById("email").value;

    document.getElementById("previewPhone").innerText =
        document.getElementById("phone").value;

    document.getElementById("previewSkills").innerText =
        document.getElementById("skills").value;

    document.getElementById("previewExperience").innerText =
        document.getElementById("experience").value;
}
