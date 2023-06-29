document.getElementById("copiarfrase").addEventListener("click", function() {
    var frase = "eduardaraissalucchetta@gmail.com";
    
    var textarea = document.createElement("textarea");
    textarea.value = frase;
    document.body.appendChild(textarea);
    
    textarea.select();
    document.execCommand("copy");
    
    document.body.removeChild(textarea);
    
    alert("Texto copiado para a área de transferência");
});