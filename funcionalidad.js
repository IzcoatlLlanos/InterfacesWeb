function login(){
    var usr,pwd;
    usr = document.getElementById("usr").value;
    pwd = document.getElementById("pwd").value;
    if(usr=="admin" && pwd=="admin"){
        window.open("admin.html");
        alert("¡Bienvenido administrador!");
    }else if(usr=="user" && pwd=="user"){
        alert("¡Bienvenido usuario!");
        window.open("user.html")
    }else alert("¡Contraseña o Usuario Incorrecto!");
}