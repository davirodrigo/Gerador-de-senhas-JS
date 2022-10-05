let slider = document.querySelector(".slider");
let button = document.querySelector(".button");
let sizePassWord = document.querySelector('.valor');
let passWordShow = document.querySelector('.password');
let containerAppear = document.querySelector('.container-pw-show');
let lotOfWords = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&*+_-";
let novaSenha = "";
sizePassWord.innerHTML = slider.value;

slider.addEventListener('input' , (e)=>{
    sizePassWord.innerHTML = e.target.value;
});

button.addEventListener('click' , ()=>{
        let pass = "";
        for(let i = 0, n = lotOfWords.length; i < slider.value ; i++){
            pass += lotOfWords.charAt(Math.random() * n);
        }
        containerAppear.classList.remove('container-pw-hide');
        passWordShow.innerHTML = pass;
        pass = novaSenha;
});
function copyPassword(){
    navigator.clipboard.writeText(novaSenha).then(()=>{
        alert('senha copiada com sucesso!');
    })
}
//adiciona um on... click? input? change? mouseover? vc q decide no primeiro parâmetro, o segunda é para o evento 

