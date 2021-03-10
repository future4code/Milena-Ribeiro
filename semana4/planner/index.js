function criandoTarefas() {
    const inputTarefa =  document.getElementById('tarefa')
    const diasSemana = document.getElementById('dias-semana')
    const coluna = document.getElementById(diasSemana.value)
        // console.log(inputTarefa.value, diasSemana.value, coluna)

        if (inputTarefa.value !== ''){
            coluna.innerHTML += `<p>${inputTarefa.value}</p>`
            inputTarefa.value = ''
        } else {
            alert('Erro')
        }

        console.log(diasSemana.value)
}