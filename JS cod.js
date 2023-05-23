let nome, idade, gasto, tempo_de_estudo, tempo_livre, soma;

nome=prompt("Qual o seu nome?","(seu nome)");

idade=parseInt(prompt("idade?"));

gasto=parseFloat(prompt("gastos com locomoção"));

tempo_de_estudo=parseFloat(prompt("Tempo de estudos?"));

tempo_livre=parseFloat(prompt("Tempo de livre?"));
	
soma= tempo_livre*100/(tempo_livre + tempo_de_estudo);

let conta =document.getElementById('sobre');

conta.innerHTML = "<p> Nome: " + nome + "</p>";
conta.innerHTML += "<p> Idade: " + idade + "</p>";
conta.innerHTML += "<p> Gasto: " + gasto + "</p>";
conta.innerHTML += "<p> Tempo De Estudo: " + tempo_de_estudo + "</p>";
conta.innerHTML += "<p> Tempo Livre: " + tempo_livre + "</p>";
conta.innerHTML += "<p> Soma: " + soma.toFixed(2) + "</p>";
