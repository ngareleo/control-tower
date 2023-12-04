const isHuaweiRouterPage = document.getElementById("spanwelcomtext") != null;

if (!isHuaweiRouterPage) {
    throw Error("Wrong page");
}

function fillCredFields() {
    const storage = {};

    const initStorage = chrome.storage.local
        .get(["HUAWEI_ROUTER_CREDS"])
        .then((res) => Object.assign(storage, res))
        .catch(e => console.error(e));

    if (!initStorage) {
        renderForm();
        return;
    }
    const usernameField = document.getElementById("txt_Username");
    const passwordField = document.getElementById("txt_Password");
    const snField = document.getElementById("txt_loginsn");

    if (usernameField && passwordField && snField) {
        usernameField.setAttribute("value", "username");
        passwordField.setAttribute("value", "")
        snField.setAttribute("value", "")
    }
}

fillCredFields();

