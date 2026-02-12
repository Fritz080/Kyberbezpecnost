const dictionary = ["password","123456","qwerty","admin","letmein"];
function checkPasswordStrength(password) {
    if (password.length < 12) return "Heslo musí mať aspoň 12 znakov.";
    if (!/[A-Z]/.test(password)) return "Heslo musí obsahovať veľké písmeno.";
    if (!/[a-z]/.test(password)) return "Heslo musí obsahovať malé písmeno.";
    if (!/\d/.test(password)) return "Heslo musí obsahovať číslo.";
    if (!/[!@#$%^&*()_+=<>?/]/.test(password)) return "Heslo musí obsahovať špeciálny znak.";
    for (let word of dictionary) if (password.toLowerCase().includes(word)) return "Heslo obsahuje bežné slovníkové slovo.";
    return null;
}
document.getElementById("password").addEventListener("input", e => {
    const msg = document.getElementById("passwordMsg");
    const result = checkPasswordStrength(e.target.value);
    if (result) { msg.textContent = result; msg.className = "msg text-danger"; }
    else { msg.textContent = "Heslo je silné ✔"; msg.className = "msg text-success"; }
});
