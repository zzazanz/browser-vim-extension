chrome.storage.sync.get("vimUse", (value) => {
    if (value.vimUse) {
        let h = false;
        let j = false;
        let k = false;
        let l = false;

        window.addEventListener("keydown", (key) => {
            switch (key.key) {
                case "h":
                    h = true;
                    break;
                case "j":
                    j = true;
                    break;
                case "k":
                    k = true;
                    break;
                case "l":
                    l = true;
                    break;
            }
        });

        window.addEventListener("keyup", (key) => {
            switch (key.key) {
                case "h":
                    h = false;
                    break;
                case "j":
                    j = false;
                    break;
                case "k":
                    k = false;
                    break;
                case "l":
                    l = false;
                    break;
            }
        });

        setInterval(() => {
            if (h) document.scrollingElement.scrollLeft = document.scrollingElement.scrollLeft - 10
            if (j) document.scrollingElement.scrollTop = document.scrollingElement.scrollTop + 10
            if (k) document.scrollingElement.scrollTop = document.scrollingElement.scrollTop - 10
            if (l) document.scrollingElement.scrollLeft = document.scrollingElement.scrollLeft + 10
        }, 10);
    }
});