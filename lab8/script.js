window.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    var counter = 0;

    window.addEventListener("keyup", function(e) {
        console.log(e.key);
        if (e.key) {
            let first_char = container.textContent.charAt(0);
            if (e.key == first_char) {
                container.textContent = container.textContent.substring(1);
                counter = 0;
            }
            else {
                counter++;
                if(counter >= 3){
                    //新增六個新字元
                    let new_chars = Math.floor(Math.random() * 6) + 1;
                    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    let new_string = "";
                    for (let i = 0; i < new_chars; i++) {
                        new_string += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    container.textContent += new_string;
                    counter = 0;
                }
            }
        }
        add_new_chars();
    });

    function add_new_chars() {
        let new_chars = Math.floor(Math.random() * 3) + 1;
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let new_string = "";
        for (let i = 0; i < new_chars; i++) {
            new_string += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        container.textContent += new_string;
    }
});