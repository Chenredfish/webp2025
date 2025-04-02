var container = document.getElementById("container");
window.addEventListener("keyup", function(e){
    console.log(e.key);
    if(e.key){
        //檢查第一個字元是否和e.key一樣
        first_char = container.innerHTML.charAt(0);
        if(e.key == first_char){
            //刪除第一個字元
            container.innerHTML = container.innerHTML.substring(1);
        }
    }
    add_new_chars();
});
function add_new_chars(){
    //亂數增加一到三個字元進去container裡面
    let container = document.getElementById("container");
    let new_chars = Math.floor(Math.random() * 3) + 1; // 1 to 3 characters
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let new_string = "";
    for(let i = 0; i < new_chars; i++){
        new_string += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    container.innerHTML += new_string;
}