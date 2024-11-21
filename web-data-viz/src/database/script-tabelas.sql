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

SELECT * FROM usuario;
SELECT * FROM objetivo;

SELECT count(case when idUsuario = 6 THEN 1 END) AS posicao FROM usuario ORDER BY pontosQuiz DESC;

SELECT 
    idUsuario,
    RANK() OVER (ORDER BY pontosQuiz DESC) AS posicao
FROM usuario;

update usuario
set pontosQuiz = 7
where idUsuario = 3;

