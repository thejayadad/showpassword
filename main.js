
let num = 0;
function showPassword(){
    if (num==0){
        document.getElementById("password").type="text";
        document.getElementById("btn").innerHTML = "Hide Password"
        num = 1;
    } else {
        document.getElementById("password").type="password";
        document.getElementById("btn").innerHTML = "Show Password"

        num = 0;
    }
}