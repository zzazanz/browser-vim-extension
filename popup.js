window.addEventListener("load", () => {
    const input = document.querySelector("input");
    const vimUse = document.querySelector("#use");

    chrome.storage.sync.get("vimUse", (value) => {
        if (value.vimUse) {
            input.checked = true;
            vimUse.innerHTML = true;
        } else {
            input.checked = false;
            vimUse.innerHTML = false;
        }

    });

    input.addEventListener("click", () => {
        if (input.checked) {
            vimUse.innerHTML = true;
            chrome.storage.sync.set({ "vimUse": true });
        } else {
            vimUse.innerHTML = false;
            chrome.storage.sync.set({ "vimUse": false });
        }
    });
});