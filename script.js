const n1 = Number(prompt("Insira o primeiro número:"))
const n2 = Number(prompt("Insira o segundo número:"))


const sum = n1 + n2
const sub = n1 - n2
const multiplication = n1 * n2
const division = n1 / n2
const rest = n1 % n2

alert(`A soma dos números é ${sum}`)
alert(`A subtração dos números é ${sub}`)
alert(`A multiplicação dos números é ${multiplication}`)
alert(`A division dos números é ${division}`)
alert(`O resto da divisão dos números é ${rest}`)

if (sum % 2 == 0) {
  alert(`O número ${sum} é par`)
} else {
  alert(`O número ${sum} é ímpar`)
}

if (n1 === n2) {
  alert(`Os números são iguais.`)
} else {
  alert(`Os números são diferentes.`)
}