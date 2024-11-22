CREATE DATABASE atletacristo;

USE atletacristo;

CREATE TABLE usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
dtNasc date,
esporteFav varchar(45),
esporteNivel varchar(45),
esporteAnos varchar(45),
esporteGrau varchar(45),
cristao char(3),
cristaoAnos varchar(45),
biblia char(3),
frase varchar(45),
dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
pontosQuiz int
);

CREATE TABLE objetivo (
idObjetivo int primary key auto_increment,
textoObjetivo varchar(45),
statsObjetivo varchar(45),
fkUsuario int,
constraint fkUsuarioObjetivo foreign key (fkUsuario) references usuario (idUsuario)
);

CREATE TABLE tarefa (
idTarefa int primary key auto_increment,
textoTarefa varchar(45),
statsTarefa varchar(45),
fkObjetivo int,
constraint fkObjetivoTarefa foreign key (fkObjetivo) references objetivo (idObjetivo)
);

INSERT INTO usuario (idusuario, nome, email, senha, dtNasc, cristao, cristaoAnos, frase, dtCriacao, biblia, pontosQuiz, esporteFav, esporteNivel, esporteAnos, esporteGrau) VALUES
(default, 'João Silva', 'joao.silva@gmail.com', '@Izael123', '1990-01-15', 'Sim', 10, 'Viver é Cristo', '2024-01-01', null, 100, 'Futebol', 'Profissional', 'menos de 1 ano', 'Baixo'),
(default, 'Maria Santos', 'maria.santos@gmail.com', '@Izael123', '1985-03-22', 'Sim', 15, 'Seguir em frente sempre', '2024-01-02', null, 120, 'Vôlei', 'Profissional', 'menos de 1 ano', 'Baixo'),
(default, 'Carlos Lima', 'carlos.lima@gmail.com', '@Izael123', '2000-07-10', 'Sim', 5, 'Paz e fé', '2024-01-03', null, 80, 'Basquete', 'Diversão', 'até 5 anos', 'Baixo'),
(default, 'Ana Costa', 'ana.costa@gmail.com', '@Izael123', '1995-11-18', 'Sim', 8, 'Amar é o caminho', '2024-01-04', null, 140, 'Vôlei', 'Diversão', 'até 5 anos', 'Médio'),
(default, 'Pedro Oliveira', 'pedro.oliveira@gmail.com', '@Izael123', '1988-02-27', 'Sim', 20, 'Nunca desista', '2024-01-05', null, 60, 'Basquete', 'Amador', 'até 5 anos', 'Médio'),
(default, 'Julia Ribeiro', 'julia.ribeiro@gmail.com', '@Izael123', '1992-09-05', 'Sim', 12, 'Crescendo na fé', '2024-01-06', null, 75, 'Tênis', 'Profissional', 'mais de 5 anos', 'Médio'),
(default, 'Bruno Marques', 'bruno.marques@gmail.com', '@Izael123', '1998-12-20', 'Não', 6, 'A fé move montanhas', '2024-01-07', null, 90, 'Futebol', 'Amador', 'mais de 5 anos', 'Médio'),
(default, 'Fernanda Lima', 'fernanda.lima@gmail.com', '@Izael123', '1996-06-12', 'Não', 10, 'A graça de Deus é suficiente', '2024-01-08', null, 110, 'Futebol', 'Profissional', 'mais de 5 anos', 'Alto'),
(default, 'Rafael Almeida', 'rafael.almeida@gmail.com', '@Izael123', '1993-03-18', 'Não', 8, 'A jornada é mais importante', '2024-01-09', null, 95, 'Futebol', 'Amador', 'mais de 5 anos', 'Alto'),
(default, 'Patrícia Souza', 'patricia.souza@gmail.com', '@Izael123', '1987-04-14', 'Não', 18, 'Deus é minha fortaleza', '2024-01-10', null, 130, 'Golfe', 'Diversão', 'menos de 1 ano', 'Alto');


SELECT * FROM usuario;
SELECT * FROM objetivo;
SELECT * FROM tarefa;
SELECT t.idTarefa, t.textoTarefa, t.statsTarefa, t.fkObjetivo, o.textoObjetivo FROM tarefa as t JOIN objetivo as o ON t.fkObjetivo = o.idObjetivo WHERE t.statsTarefa = 'Em andamento' and o.fkUsuario = 1;



SELECT count(case when idUsuario = 6 THEN 1 END) AS posicao FROM usuario ORDER BY pontosQuiz DESC;

SELECT 
    idUsuario,
    RANK() OVER (ORDER BY pontosQuiz DESC) AS posicao
FROM usuario;

update usuario
set pontosQuiz = 7
where idUsuario = 3;

