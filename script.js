const obj = new XMLHttpRequest();
obj.open("GET","https://github.com/DS-Senai/SENAI_ALUNO_DS_2.2024.git");
obj.onload = function () {

    if (obj.status === 200){
        const data = 
        JSON.parse(obj.responseText);
        console.log(data)
    } else {
        console.error("Erro ao carregar JSON");
    }
}
obj.send();




















