CREATE SCHEMA IF NOT EXISTS `mundoApp` DEFAULT CHARACTER SET utf8 ;
USE `mundoApp` ;

-- -----------------------------------------------------
-- Table `mundoApp`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mundoApp`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `contacto` VARCHAR(45) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `edad` INT(10) NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mundoApp`.`trabajador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mundoApp`.`trabajador` (
  `idtrabajador` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `contacto` VARCHAR(45) NOT NULL,
  `cedula` INT(10) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `edad` INT(10) NULL,
  PRIMARY KEY (`idtrabajador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mundoApp`.`servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mundoApp`.`servicio` (
  `idservicio` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `imagenURL` VARCHAR(45) NOT NULL,
  `trabajador_idtrabajador` INT NOT NULL,
  PRIMARY KEY (`idservicio`),
  INDEX `fk_servicio_trabajador1_idx` (`trabajador_idtrabajador` ASC) VISIBLE,
  CONSTRAINT `fk_servicio_trabajador1`
    FOREIGN KEY (`trabajador_idtrabajador`)
    REFERENCES `mundoApp`.`trabajador` (`idtrabajador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mundoApp`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mundoApp`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `cliente_idcliente` INT NOT NULL,
  `servicio_idservicio` INT NOT NULL,
  `descripcion` VARCHAR(100) NULL,
  PRIMARY KEY (`idproducto`),
  INDEX `fk_producto_cliente_idx` (`cliente_idcliente` ASC) VISIBLE,
  INDEX `fk_producto_servicio1_idx` (`servicio_idservicio` ASC) VISIBLE,
  CONSTRAINT `fk_producto_cliente`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `mundoApp`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_servicio1`
    FOREIGN KEY (`servicio_idservicio`)
    REFERENCES `mundoApp`.`servicio` (`idservicio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;