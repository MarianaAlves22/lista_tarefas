const tarefa = [];
let repetida = false;
$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        alerta();

        if(!repetida) {
            const nomeTarefa = $('#tarefa').val();
            const li = document.createElement('li');
            li.innerHTML = `${nomeTarefa}`;
            $('ul').append(li)
            $('#tarefa').val('')
            $(li).click(function(){
                $(li).toggleClass('finalizado')
            })
        }
    })
})

function alerta(){
    const inputTarefa = document.getElementById('tarefa');

    if (tarefa.includes(inputTarefa.value)) {
        repetida = true;
        alert(`Esta tarefa: ${inputTarefa.value} já foi adicionada`);
    } else {
        tarefa.push(inputTarefa.value);
    }
}