CREATE TABLE `db1`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `npessoa` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(200) NOT NULL,
  `campus` VARCHAR(45) NOT NULL,
  `curso` VARCHAR(45) NOT NULL,
  `nascimento` DATE NULL,
  `tipouser` BINARY(1) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `idusers_UNIQUE` (`idusers` ASC) VISIBLE);

  CREATE TABLE `db1`.`projetos` (
  `id` INT NOT NULL,
  `nomeProjeto` VARCHAR(45) NOT NULL,
  `descricaoProjeto` VARCHAR(1000) NULL,
  `dataInicio` DATE NULL,
  `logradouro` VARCHAR(60) NULL,
  `cep` VARCHAR(45) NULL,
  `nIntegrantes` INT NULL,
  `nEndereco` INT NULL,
  `complemento` VARCHAR(45) NULL,
  `anexarPDF` BLOB NOT NULL,
  PRIMARY KEY (`id`));