function renderForm() {
    document.getElementById("form").outerHTML = `
            <form name="login-form" id="login" ons>
                <input type="text" name="username" id="inserted_form_username">
                <input type="text" name="password" id="inserted_form_password">
                <input type="text" name="sn" id="inserted_form_sn">
                <input type="submit" value="login">
            </form>
            `;
}

function updateKeys(e) {
    e.preventDefault();
    const username = document.getElementById("inserted_form_username").getAttribute("value");
    const password = document.getElementById("inserted_form_password").getAttribute("value");
    const sn = document.getElementById("inserted_form_sn").getAttribute("value");

    chrome.storage.local.set({
        HUAWEI_ROUTER_CREDS: {
            username: username,
            password: password,
            sn: sn
        }
    }).then(() => { alert("Updated successfully!") }).catch(e => console.error(e));

}

document.getElementById("update").addEventListener("click", () => { renderForm() });
document.getElementById("form").addEventListener("submit", updateKeys)
