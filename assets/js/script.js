const cpfInput = document.getElementById('cpf');
const cpfMenssage = document.querySelector('.mensagem');

// Função que valida o CPF
const isValidCPF = (cpf) => {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(9, 10))) return false
    soma = 0
    for (var i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11)) resto = 0
    if (resto != parseInt(cpf.substring(10, 11))) return false
    return true
}



// Função que adiciona a máscara de CPF e verifica se é válido
const maskCPF = () => {
    let cpf = cpfInput.value;

    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '')

    // Adiciona a máscara de CPF
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

    cpfInput.value = cpf;
    
    // Verifica se o CPF é válido
    if (isValidCPF(cpf)) {
        cpfMenssage.innerHTML ="CPF válido ✅"
    } else if(cpfInput.value !== '') {
        cpfMenssage.innerHTML ="CPF inválido ❌"
    }else{
        cpfMenssage.innerHTML =""
    }
};

cpfInput.addEventListener('input', maskCPF)
cpfInput.addEventListener('change', maskCPF);