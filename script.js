const minimumAverage = 7;

const students = [
  {
    name: "Diego",
    tests: [2, 4]
  },

  {
    name: "Julia",
    tests: [8, 6]
  }
];

for(let student of students) {
  alert(calcAverage(student));
}

function calcAverage(student) {
  const average = student.tests.reduce((prev, curr) => prev + curr ,0) / student.tests.length

  const message = `
  A média do(a) aluno(a) ${student.name} é: ${average}
  ${(average < minimumAverage) ? 
    `Não foi dessa vez, ${student.name}! Tente novamente` : 
    `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`}
  `;

  return message;
}