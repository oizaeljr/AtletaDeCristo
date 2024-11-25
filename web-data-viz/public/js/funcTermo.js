var palavras = []
var linha = ''
var aleatorio = 0
var palavraJogo = ''
var iniciou = false
function abrirHelp() {
    if (iniciou) {
        btnJogar.innerHTML = 'Voltar'
        btnJogar.onclick = voltar
    } else {
        btnJogar.style.display = 'block'
        btnJogar.onclick = jogar
    }
    div_help.style.display = 'block'
    divJogo.style.display = 'none'
}

function voltar() {
    div_help.style.display = 'none'
    divJogo.style.display = 'flex'
}

function jogar() {
    limpar()
    iniciou = true
    palavras = ['amigo', 'cores', 'viver', 'chave', 'borda', 'somar', 'leite', 'forca', 'livro', 'ponto', 'sabor', 'claro', 'tempo', 'atuar', 'brisa', 'frete', 'finta', 'verde', 'morte', 'tinta'];
    linha = 'primeira'
    aleatorio = parseInt(Math.random() * palavras.length) + 1
    palavraJogo = palavras[aleatorio]
    div_help.style.display = 'none'
    divJogo.style.display = 'flex'
    A1.focus()
}
function verificar() {
    if (linha == 'primeira') {
        if (A1.value != '' && A2.value != '' && A3.value != '' && A4.value != '' && A5.value != '') {
            if (palavraJogo[0] == A1.value) {
                A1.classList.add('verde');
            } else if (palavraJogo.includes(A1.value)) {
                A1.classList.add('possui')
            } else {
                A1.classList.add('nenhum')
            }

            if (palavraJogo[1] == A2.value) {
                A2.classList.add('verde');
            } else if (palavraJogo.includes(A2.value)) {
                A2.classList.add('possui')
            } else {
                A2.classList.add('nenhum')
            }


            if (palavraJogo[2] == A3.value) {
                A3.classList.add('verde');
            } else if (palavraJogo.includes(A3.value)) {
                A3.classList.add('possui')
            } else {
                A3.classList.add('nenhum')
            }

            if (palavraJogo[3] == A4.value) {
                A4.classList.add('verde');
            } else if (palavraJogo.includes(A4.value)) {
                A4.classList.add('possui')
            } else {
                A4.classList.add('nenhum')
            }

            if (palavraJogo[4] == A5.value) {
                A5.classList.add('verde');
            } else if (palavraJogo.includes(A5.value)) {
                A5.classList.add('possui')
            } else {
                A5.classList.add('nenhum')
            }

            if (palavraJogo[0] == A1.value && palavraJogo[1] == A2.value && palavraJogo[2] == A3.value && palavraJogo[3] == A4.value && palavraJogo[4] == A5.value) {
                ganhou()
            } else {
                linha = 'segunda'
                B1.disabled = false;
                B2.disabled = false;
                B3.disabled = false;
                B4.disabled = false;
                B5.disabled = false;
                B1.focus()
            }

        } else {
            alert('Preencha todos os campos!')
        }
    } else if (linha == 'segunda') {
        if (B1.value != '' && B2.value != '' && B3.value != '' && B4.value != '' && B5.value != '') {
            if (palavraJogo[0] == B1.value) {
                B1.classList.add('verde');
            } else if (palavraJogo.includes(B1.value)) {
                B1.classList.add('possui')
            } else {
                B1.classList.add('nenhum')
            }

            if (palavraJogo[1] == B2.value) {
                B2.classList.add('verde');
            } else if (palavraJogo.includes(B2.value)) {
                B2.classList.add('possui')
            } else {
                B2.classList.add('nenhum')
            }


            if (palavraJogo[2] == B3.value) {
                B3.classList.add('verde');
            } else if (palavraJogo.includes(B3.value)) {
                B3.classList.add('possui')
            } else {
                B3.classList.add('nenhum')
            }

            if (palavraJogo[3] == B4.value) {
                B4.classList.add('verde');
            } else if (palavraJogo.includes(B4.value)) {
                B4.classList.add('possui')
            } else {
                B4.classList.add('nenhum')
            }

            if (palavraJogo[4] == B5.value) {
                B5.classList.add('verde');
            } else if (palavraJogo.includes(B5.value)) {
                B5.classList.add('possui')
            } else {
                B5.classList.add('nenhum')
            }

            if (palavraJogo[0] == B1.value && palavraJogo[1] == B2.value && palavraJogo[2] == B3.value && palavraJogo[3] == B4.value && palavraJogo[4] == B5.value) {
                ganhou()
            } else {
                linha = 'terceira'
                C1.disabled = false;
                C2.disabled = false;
                C3.disabled = false;
                C4.disabled = false;
                C5.disabled = false;
                C1.focus()
            }

        } else {
            alert('Preencha todos os campos!')
        }
    } else if (linha == 'terceira') {
        if (C1.value != '' && C2.value != '' && C3.value != '' && C4.value != '' && C5.value != '') {
            if (palavraJogo[0] == C1.value) {
                C1.classList.add('verde');
            } else if (palavraJogo.includes(C1.value)) {
                C1.classList.add('possui')
            } else {
                C1.classList.add('nenhum')
            }

            if (palavraJogo[1] == C2.value) {
                C2.classList.add('verde');
            } else if (palavraJogo.includes(C2.value)) {
                C2.classList.add('possui')
            } else {
                C2.classList.add('nenhum')
            }


            if (palavraJogo[2] == C3.value) {
                C3.classList.add('verde');
            } else if (palavraJogo.includes(C3.value)) {
                C3.classList.add('possui')
            } else {
                C3.classList.add('nenhum')
            }

            if (palavraJogo[3] == C4.value) {
                C4.classList.add('verde');
            } else if (palavraJogo.includes(C4.value)) {
                C4.classList.add('possui')
            } else {
                C4.classList.add('nenhum')
            }

            if (palavraJogo[4] == C5.value) {
                C5.classList.add('verde');
            } else if (palavraJogo.includes(C5.value)) {
                C5.classList.add('possui')
            } else {
                C5.classList.add('nenhum')
            }

            if (palavraJogo[0] == C1.value && palavraJogo[1] == C2.value && palavraJogo[2] == C3.value && palavraJogo[3] == C4.value && palavraJogo[4] == C5.value) {
                ganhou()
            } else {
                linha = 'quarta'
                D1.disabled = false;
                D2.disabled = false;
                D3.disabled = false;
                D4.disabled = false;
                D5.disabled = false;
                D1.focus()
            }

        } else {
            alert('Preencha todos os campos!')
        }
    } else if (linha == 'quarta') {
        if (D1.value != '' && D2.value != '' && D3.value != '' && D4.value != '' && D5.value != '') {
            if (palavraJogo[0] == D1.value) {
                D1.classList.add('verde');
            } else if (palavraJogo.includes(D1.value)) {
                D1.classList.add('possui')
            } else {
                D1.classList.add('nenhum')
            }

            if (palavraJogo[1] == D2.value) {
                D2.classList.add('verde');
            } else if (palavraJogo.includes(D2.value)) {
                D2.classList.add('possui')
            } else {
                D2.classList.add('nenhum')
            }


            if (palavraJogo[2] == D3.value) {
                D3.classList.add('verde');
            } else if (palavraJogo.includes(D3.value)) {
                D3.classList.add('possui')
            } else {
                D3.classList.add('nenhum')
            }

            if (palavraJogo[3] == D4.value) {
                D4.classList.add('verde');
            } else if (palavraJogo.includes(D4.value)) {
                D4.classList.add('possui')
            } else {
                D4.classList.add('nenhum')
            }

            if (palavraJogo[4] == D5.value) {
                D5.classList.add('verde');
            } else if (palavraJogo.includes(D5.value)) {
                D5.classList.add('possui')
            } else {
                D5.classList.add('nenhum')
            }

            if (palavraJogo[0] == D1.value && palavraJogo[1] == D2.value && palavraJogo[2] == D3.value && palavraJogo[3] == D4.value && palavraJogo[4] == D5.value) {
                ganhou()
            } else {
                linha = 'quinta'
                E1.disabled = false;
                E2.disabled = false;
                E3.disabled = false;
                E4.disabled = false;
                E5.disabled = false;
                E1.focus()
            }

        } else {
            alert('Preencha todos os campos!')
        }
    } else if (linha == 'quinta') {
        if (E1.value != '' && E2.value != '' && E3.value != '' && E4.value != '' && E5.value != '') {
            if (palavraJogo[0] == E1.value) {
                E1.classList.add('verde');
            } else if (palavraJogo.includes(E1.value)) {
                E1.classList.add('possui')
            } else {
                E1.classList.add('nenhum')
            }

            if (palavraJogo[1] == E2.value) {
                E2.classList.add('verde');
            } else if (palavraJogo.includes(E2.value)) {
                E2.classList.add('possui')
            } else {
                E2.classList.add('nenhum')
            }


            if (palavraJogo[2] == E3.value) {
                E3.classList.add('verde');
            } else if (palavraJogo.includes(E3.value)) {
                E3.classList.add('possui')
            } else {
                E3.classList.add('nenhum')
            }

            if (palavraJogo[3] == E4.value) {
                E4.classList.add('verde');
            } else if (palavraJogo.includes(E4.value)) {
                E4.classList.add('possui')
            } else {
                E4.classList.add('nenhum')
            }

            if (palavraJogo[4] == E5.value) {
                E5.classList.add('verde');
            } else if (palavraJogo.includes(E5.value)) {
                E5.classList.add('possui')
            } else {
                E5.classList.add('nenhum')
            }

            if (palavraJogo[0] == E1.value && palavraJogo[1] == E2.value && palavraJogo[2] == E3.value && palavraJogo[3] == E4.value && palavraJogo[4] == E5.value) {
                ganhou()
            } else {
                linha = 'sexta'
                F1.disabled = false;
                F2.disabled = false;
                F3.disabled = false;
                F4.disabled = false;
                F5.disabled = false;
                F1.focus()
            }

        } else {
            alert('Preencha todos os campos!')
        }
    } else if (linha == 'sexta') {
        if (F1.value != '' && F2.value != '' && F3.value != '' && F4.value != '' && F5.value != '') {
            if (palavraJogo[0] == F1.value) {
                F1.classList.add('verde');
            } else if (palavraJogo.includes(F1.value)) {
                F1.classList.add('possui')
            } else {
                F1.classList.add('nenhum')
            }

            if (palavraJogo[1] == F2.value) {
                F2.classList.add('verde');
            } else if (palavraJogo.includes(F2.value)) {
                F2.classList.add('possui')
            } else {
                F2.classList.add('nenhum')
            }


            if (palavraJogo[2] == F3.value) {
                F3.classList.add('verde');
            } else if (palavraJogo.includes(F3.value)) {
                F3.classList.add('possui')
            } else {
                F3.classList.add('nenhum')
            }

            if (palavraJogo[3] == F4.value) {
                F4.classList.add('verde');
            } else if (palavraJogo.includes(F4.value)) {
                F4.classList.add('possui')
            } else {
                F4.classList.add('nenhum')
            }

            if (palavraJogo[4] == F5.value) {
                F5.classList.add('verde');
            } else if (palavraJogo.includes(F5.value)) {
                F5.classList.add('possui')
            } else {
                F5.classList.add('nenhum')
            }

            if (palavraJogo[0] == F1.value && palavraJogo[1] == F2.value && palavraJogo[2] == F3.value && palavraJogo[3] == F4.value && palavraJogo[4] == F5.value) {
                ganhou()
            } else {
                perdeu()
            }

        } else {
            alert('Preencha todos os campos!')
        }
    }
}

function ordem(input) {
    if (input == 'A1') {
        if (A1.value != '') {
            A2.focus()
        }
    } else if (input == 'A2') {
        if (A2.value != '') {
            A3.focus()
        }
    } else if (input == 'A3') {
        if (A3.value != '') {
            A4.focus()
        }
    } else if (input == 'A4') {
        if (A4.value != '') {
            A5.focus()
        }
    } else if (input == 'B1') {
        if (B1.value != '') {
            B2.focus()
        }
    } else if (input == 'B2') {
        if (B2.value != '') {
            B3.focus()
        }
    } else if (input == 'B3') {
        if (B3.value != '') {
            B4.focus()
        }
    } else if (input == 'B4') {
        if (B4.value != '') {
            B5.focus()
        }
    } else if (input == 'C1') {
        if (C1.value != '') {
            C2.focus()
        }
    } else if (input == 'C2') {
        if (C2.value != '') {
            C3.focus()
        }
    } else if (input == 'C3') {
        if (C3.value != '') {
            C4.focus()
        }
    } else if (input == 'C4') {
        if (C4.value != '') {
            C5.focus()
        }
    } else if (input == 'D1') {
        if (D1.value != '') {
            D2.focus()
        }
    } else if (input == 'D2') {
        if (D2.value != '') {
            D3.focus()
        }
    } else if (input == 'D3') {
        if (D3.value != '') {
            D4.focus()
        }
    } else if (input == 'D4') {
        if (D4.value != '') {
            D5.focus()
        }
    } else if (input == 'E1') {
        if (E1.value != '') {
            E2.focus()
        }
    } else if (input == 'E2') {
        if (E2.value != '') {
            E3.focus()
        }
    } else if (input == 'E3') {
        if (E3.value != '') {
            E4.focus()
        }
    } else if (input == 'E4') {
        if (E4.value != '') {
            E5.focus()
        }
    } else if (input == 'F1') {
        if (F1.value != '') {
            F2.focus()
        }
    } else if (input == 'F2') {
        if (F2.value != '') {
            F3.focus()
        }
    } else if (input == 'F3') {
        if (F3.value != '') {
            F4.focus()
        }
    } else if (input == 'F4') {
        if (F4.value != '') {
            F5.focus()
        }
    }
}

function ganhou() {
    alert('ganhou')
    btnVerifica.innerHTML = 'Novo Jogo'
    btnVerifica.onclick = jogar
}

function perdeu() {
    alert('perdeu')
    btnVerifica.innerHTML = 'Novo Jogo'
    btnVerifica.onclick = jogar
}

function limpar() {
    // A1.style.backgroundColor = 'white'
    // A2.style.backgroundColor = 'white'
    // A3.style.backgroundColor = 'white'
    // A4.style.backgroundColor = 'white'
    // A5.style.backgroundColor = 'white'
    A1.value = ''
    A2.value = ''
    A3.value = ''
    A4.value = ''
    A5.value = ''

    // B1.classList.add('simples')
    // B2.classList.add('simples')
    // B3.classList.add('simples')
    // B4.classList.add('simples')
    // B5.classList.add('simples')
    B1.disabled = true
    B2.disabled = true
    B3.disabled = true
    B4.disabled = true
    B5.disabled = true
    B1.value = ''
    B2.value = ''
    B3.value = ''
    B4.value = ''
    B5.value = ''

    // C1.classList.add('simples')
    // C2.classList.add('simples')
    // C3.classList.add('simples')
    // C4.classList.add('simples')
    // C5.classList.add('simples')
    C1.disabled = true
    C2.disabled = true
    C3.disabled = true
    C4.disabled = true
    C5.disabled = true
    C1.value = ''
    C2.value = ''
    C3.value = ''
    C4.value = ''
    C5.value = ''

    // D1.classList.add('simples')
    // D2.classList.add('simples')
    // D3.classList.add('simples')
    // D4.classList.add('simples')
    // D5.classList.add('simples')
    D1.disabled = true
    D2.disabled = true
    D3.disabled = true
    D4.disabled = true
    D5.disabled = true
    D1.value = ''
    D2.value = ''
    D3.value = ''
    D4.value = ''
    D5.value = ''

    // E1.classList.add('simples')
    // E2.classList.add('simples')
    // E3.classList.add('simples')
    // E4.classList.add('simples')
    // E5.classList.add('simples')
    E1.disabled = true
    E2.disabled = true
    E3.disabled = true
    E4.disabled = true
    E5.disabled = true
    E1.value = ''
    E2.value = ''
    E3.value = ''
    E4.value = ''
    E5.value = ''

    // F1.classList.add('simples')
    // F2.classList.add('simples')
    // F3.classList.add('simples')
    // F4.classList.add('simples')
    // F5.classList.add('simples')
    F1.disabled = true
    F2.disabled = true
    F3.disabled = true
    F4.disabled = true
    F5.disabled = true
    F1.value = ''
    F2.value = ''
    F3.value = ''
    F4.value = ''
    F5.value = ''
}