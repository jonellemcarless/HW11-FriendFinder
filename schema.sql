-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema FriendFinderdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema FriendFinderdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `FriendFinderdb` DEFAULT CHARACTER SET utf8 ;
USE `FriendFinderdb` ;

-- -----------------------------------------------------
-- Table `FriendFinderdb`.`friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `FriendFinderdb`.`friends` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  `Photo` VARCHAR(100) NULL,
  `Answer1` INT NULL,
  `Answer2` INT NULL,
  `Answer3` INT NULL,
  `Answer4` INT NULL,
  `Answer5` INT NULL,
  `Answer6` INT NULL,
  `Answer7` INT NULL,
  `Answer8` INT NULL,
  `Answer9` INT NULL,
  `Answer10` INT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;