-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE AtletaCristo;

USE AtletaCristo;

CREATE TABLE usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

CREATE TABLE objetivo (
idObjetivo int primary key auto_increment,
textoObjetivo varchar(45),
stats varchar(45),
fkUsuario int,
constraint fkUsuarioObjetivo foreign key (fkUsuario) references usuario (idUsuario)
);

CREATE TABLE tarefa (
idTarefa int primary key auto_increment,
textoTarefa varchar(45),
fkObjetivo int,
constraint fkObjetivoTarefa foreign key (fkObjetivo) references objetivo (idObjetivo)
);

SELECT * FROM usuario;
SELECT * FROM objetivo;