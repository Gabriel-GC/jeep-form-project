// Preview image input file
const preview = (file) => {
    const fr = new FileReader();
    fr.onload = () => {
        const img = document.createElement("img");
        img.src = fr.result;
        img.alt = file.name;
        document.querySelector('#preview').append(img);
    };
    fr.readAsDataURL(file);
};

document.querySelector("#files").addEventListener("change", (ev) => {
    if (!ev.target.files) return;
    [...ev.target.files].forEach(preview);
});