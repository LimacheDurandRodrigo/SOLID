-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2022 a las 05:01:28
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crudqr`
--

DELIMITER $$
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `PA_EDITARCUENTA`$$
CREATE PROCEDURE `PA_EDITARCUENTA` (IN `usuario` VARCHAR(50), IN `actual` VARCHAR(250), IN `nueva` VARCHAR(250))  BEGIN
UPDATE usuario SET
usuario.usu_contra= nueva
WHERE usuario.usu_usuario = BINARY usuario and usuario.usu_contra = BINARY actual;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `PA_EDITAR_CLIENTE`$$
CREATE PROCEDURE `PA_EDITAR_CLIENTE` (IN `ID` INT, IN `NRODOCUMENTO` VARCHAR(11), IN `NOMBRE` VARCHAR(150), IN `APEPAT` VARCHAR(100), IN `APEMAT` VARCHAR(100), IN `FECHANACIMIENTO` VARCHAR(20), IN `CELULAR` CHAR(9), IN `EMAIL` VARCHAR(250), IN `DIRECCION` VARCHAR(255), IN `ESTADO` VARCHAR(20))  BEGIN
DECLARE idtrabajador INT;
set @idtrabajador:=(select ifnull(cliente.cliente_id,0) FROM cliente where cli_nrodocumento=NRODOCUMENTO);
IF (ID = @idtrabajador) THEN
	UPDATE cliente SET
		cli_nombre = NOMBRE,
		cli_apepat = APEPAT,
		cli_apemat = APEMAT,
		cli_email  = EMAIL,
		cli_fechanacimiento = FECHANACIMIENTO,
		cli_nrodocumento = NRODOCUMENTO,
		cli_movil = CELULAR,
		cli_direccion = DIRECCION,
		cli_estatus = ESTADO
	WHERE cliente_id = ID;
	SELECT 1;
ELSE
set @idtrabajador:=(select COUNT(*) FROM cliente where cli_nrodocumento=NRODOCUMENTO);
	IF @idtrabajador = 0 THEN
		UPDATE cliente SET
			cli_nombre = NOMBRE,
			cli_apepat = APEPAT,
			cli_apemat = APEMAT,
			cli_email  = EMAIL,
			cli_fechanacimiento = FECHANACIMIENTO,
			cli_nrodocumento = NRODOCUMENTO,
			cli_movil = CELULAR,
			cli_direccion = DIRECCION,
			cli_estatus = ESTADO
		WHERE cliente_id = ID;
		SELECT 1;
	ELSE
		SELECT 2;
	END IF;
END IF;
END$$

DROP PROCEDURE IF EXISTS `PA_EDITAR_EMPLEADO`$$
CREATE PROCEDURE `PA_EDITAR_EMPLEADO` (IN `ID` INT, IN `NRODOCUMENTO` VARCHAR(11), IN `NOMBRE` VARCHAR(150), IN `APEPAT` VARCHAR(100), IN `APEMAT` VARCHAR(100), IN `FECHANACIMIENTO` VARCHAR(20), IN `CELULAR` CHAR(9), IN `EMAIL` VARCHAR(250), IN `DIRECCION` VARCHAR(255), IN `ESTADO` VARCHAR(20))  BEGIN
DECLARE idtrabajador INT;
set @idtrabajador:=(select ifnull(empleado.empleado_id,0) FROM empleado where emple_nrodocumento=NRODOCUMENTO);
IF (ID = @idtrabajador) THEN
	UPDATE empleado SET
		emple_nombre = NOMBRE,
		emple_apepat = APEPAT,
		emple_apemat = APEMAT,
		emple_email  = EMAIL,
		emple_fechanacimiento = FECHANACIMIENTO,
		emple_nrodocumento = NRODOCUMENTO,
		emple_movil = CELULAR,
		emple_direccion = DIRECCION,
		emple_estatus = ESTADO
	WHERE empleado_id = ID;
	SELECT 1;
ELSE
set @idtrabajador:=(select COUNT(*) FROM empleado where emple_nrodocumento=NRODOCUMENTO);
	IF @idtrabajador = 0 THEN
		UPDATE empleado SET
			emple_nombre = NOMBRE,
			emple_apepat = APEPAT,
			emple_apemat = APEMAT,
			emple_email  = EMAIL,
			emple_fechanacimiento = FECHANACIMIENTO,
			emple_nrodocumento = NRODOCUMENTO,
			emple_movil = CELULAR,
			emple_direccion = DIRECCION,
			emple_estatus = ESTADO
		WHERE empleado_id = ID;
		SELECT 1;
	ELSE
		SELECT 2;
	END IF;
END IF;
END$$

DROP PROCEDURE IF EXISTS `PA_EDITAR_FOTO_EMPLEADO`$$
CREATE PROCEDURE `PA_EDITAR_FOTO_EMPLEADO` (IN `IDCLIENTE` INT, IN `RUTA` VARCHAR(250))  BEGIN
UPDATE empleado SET
	empleado.foto = RUTA
WHERE empleado.empleado_id = IDCLIENTE;
SELECT 1;

END$$

DROP PROCEDURE IF EXISTS `PA_EDITAR_STUDEN`$$
CREATE PROCEDURE `PA_EDITAR_STUDEN` (IN `ID2` INT, IN `NOMBRE` VARCHAR(11), IN `APEPAT` VARCHAR(150), IN `APEMAT` VARCHAR(100), IN `FECHANACIMIENTO` VARCHAR(100), IN `NRODOCUMENTO` CHAR(9), IN `CELULAR` CHAR(9), IN `DIRECCION` VARCHAR(250), IN `EMAIL` VARCHAR(255), IN `ESTADO` VARCHAR(20))  BEGIN


UPDATE student set
STUDENTID=NRODOCUMENTO,
FIRSTNAME=NOMBRE,
MNAME=APEPAT,
LASTNAME=APEMAT,
cli_fechanacimiento=FECHANACIMIENTO,
cli_movil=CELULAR,
cli_email=EMAIL,
cli_direccion=DIRECCION,
cli_estatus=ESTADO
where ID=ID2;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `PA_REGISTRAR_CLIENTE`$$
CREATE PROCEDURE `PA_REGISTRAR_CLIENTE` (IN `NOMBRE` VARCHAR(150), IN `APEPAT` VARCHAR(100), IN `APEMAT` VARCHAR(100), IN `FECHANACIMIENTO` VARCHAR(20), IN `NRODOCUMENTO` VARCHAR(11), IN `MOVIL` CHAR(9), IN `DIRECCION` VARCHAR(255), IN `EMAIL` VARCHAR(250), IN `ARCHIVO` VARCHAR(250))  BEGIN
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) from  cliente where cli_nrodocumento=NRODOCUMENTO);
IF @CANTIDAD = 0 THEN
	INSERT INTO cliente(cli_nombre,cli_apepat,cli_apemat,cli_feccreacion,cli_fechanacimiento,cli_nrodocumento,cli_movil,cli_email,cli_estatus,cli_direccion,cli_foto)
	VALUES(NOMBRE,APEPAT,APEMAT,CURDATE(),FECHANACIMIENTO,NRODOCUMENTO,MOVIL,EMAIL,'ACTIVO',DIRECCION,ARCHIVO);
	SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `PA_REGISTRAR_EMPLEADO`$$
CREATE PROCEDURE `PA_REGISTRAR_EMPLEADO` (IN `NOMBRE` VARCHAR(150), IN `APEPAT` VARCHAR(100), IN `APEMAT` VARCHAR(100), IN `FECHANACIMIENTO` VARCHAR(20), IN `NRODOCUMENTO` VARCHAR(11), IN `MOVIL` CHAR(9), IN `DIRECCION` VARCHAR(255), IN `EMAIL` VARCHAR(250))  BEGIN
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) from  empleado where emple_nrodocumento=NRODOCUMENTO);
IF @CANTIDAD = 0 THEN
	INSERT INTO empleado(emple_nombre,emple_apepat,emple_apemat,emple_feccreacion,emple_fechanacimiento,emple_nrodocumento,emple_movil,emple_email,emple_estatus,emple_direccion)
	VALUES(NOMBRE,APEPAT,APEMAT,CURDATE(),FECHANACIMIENTO,NRODOCUMENTO,MOVIL,EMAIL,'ACTIVO',DIRECCION);
	SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `PA_REGISTRAR_STUDEN`$$
CREATE PROCEDURE `PA_REGISTRAR_STUDEN` (IN `NOMBRE` VARCHAR(150), IN `APEPAT` VARCHAR(100), IN `APEMAT` VARCHAR(100), IN `FECHANACIMIENTO` VARCHAR(20), IN `NRODOCUMENTO` VARCHAR(11), IN `MOVIL` CHAR(9), IN `DIRECCION` VARCHAR(255), IN `EMAIL` VARCHAR(250))  BEGIN
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) from  student where STUDENTID=NRODOCUMENTO);
IF @CANTIDAD = 0 THEN
	INSERT INTO student(FIRSTNAME,MNAME,LASTNAME,cli_fechanacimiento,STUDENTID,cli_movil,cli_email,cli_estatus,cli_direccion)
	VALUES(NOMBRE,APEPAT,APEMAT,FECHANACIMIENTO,NRODOCUMENTO,MOVIL,EMAIL,'ACTIVO',DIRECCION);
	SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `SP_EDITAREMPLEADO`$$
CREATE PROCEDURE `SP_EDITAREMPLEADO` (IN `ID` INT, IN `NRODOCUMENTO` VARCHAR(15), IN `NOMBRE` VARCHAR(150), IN `APEPAT` VARCHAR(100), IN `APEMAT` VARCHAR(100), IN `FECHANACIMIENTO` VARCHAR(20), IN `CELULAR` CHAR(15), IN `EMAIL` VARCHAR(250), IN `DIRECCION` VARCHAR(255), IN `ESTADO` VARCHAR(20), IN `TIPO` VARCHAR(20), IN `IDEMPRESA` INT)  BEGIN
DECLARE idtrabajador INT;
set @idtrabajador:=(select ifnull(empleado.empleado_id,0) FROM empleado where empl_nrodocumento=NRODOCUMENTO 
								AND empleado.empl_tipo = TIPO AND empresa_id = IDEMPRESA);
IF (ID = @idtrabajador) THEN
	UPDATE empleado SET
		empl_nombre = NOMBRE,
		empl_apepat = APEPAT,
		empl_apemat = APEMAT,
		empl_email  = EMAIL,
		empl_fechanacimiento = FECHANACIMIENTO,
		empl_nrodocumento = NRODOCUMENTO,
		empl_movil = CELULAR,
		empl_direccion = DIRECCION,
		empl_estado = ESTADO
	WHERE empleado_id = ID;
	SELECT 1;
ELSE
set @idtrabajador:=(select COUNT(*) FROM empleado where empl_nrodocumento=NRODOCUMENTO AND empleado.empl_tipo = TIPO
									 AND empresa_id = IDEMPRESA);
	IF @idtrabajador = 0 THEN
		UPDATE empleado SET
			empl_nombre = NOMBRE,
			empl_apepat = APEPAT,
			empl_apemat = APEMAT,
			empl_email  = EMAIL,
			empl_fechanacimiento = FECHANACIMIENTO,
			empl_nrodocumento = NRODOCUMENTO,
			empl_movil = CELULAR,
			empl_direccion = DIRECCION,
			empl_estado = ESTADO
		WHERE empleado_id = ID;
		SELECT 1;
	ELSE
		SELECT 2;
	END IF;
END IF;
END$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_ASISTENCIAS`$$
CREATE PROCEDURE `SP_LISTAR_ASISTENCIAS` ()  SELECT
attendance.ID,
attendance.STUDENTID,
attendance.TIMEIN,
attendance.TIMEOUT,
attendance.LOGDATE,
attendance.`STATUS`,
attendance.`YEAR`,
attendance.condicion,
student.ID,
student.STUDENTID,
student.FIRSTNAME,
student.MNAME,
student.LASTNAME,
CONCAT_WS(' ',FIRSTNAME,LASTNAME) as personal,
student.AGE,
student.GENDER
FROM
attendance
LEFT JOIN student ON attendance.STUDENTID = student.STUDENTID
ORDER BY LOGDATE DESC$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_CLIENTE`$$
CREATE PROCEDURE `SP_LISTAR_CLIENTE` ()  SELECT
cliente.cliente_id,
CONCAT_WS(' ',cli_nombre,cli_apepat,cli_apemat) as cliente,
cliente.cli_nombre,
cliente.cli_apepat,
cliente.cli_apemat,
cliente.cli_feccreacion,
cliente.cli_fechanacimiento,
DATE_FORMAT(cli_fechanacimiento,'%m/%d/%Y') AS fnacimiento, 
cliente.cli_nrodocumento,
cliente.cli_movil,
cliente.cli_email,
cliente.cli_estatus,
cliente.cli_direccion
FROM
cliente
ORDER BY CONCAT_WS(' - ',cliente.cli_apepat,cliente.cli_apemat)$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_EMPLEADO`$$
CREATE PROCEDURE `SP_LISTAR_EMPLEADO` ()  SELECT
empleado.empleado_id,
CONCAT_WS(' ',emple_nombre,emple_apepat,emple_apemat) as empleado,
empleado.emple_nombre,
empleado.emple_apepat,
empleado.emple_apemat,
empleado.emple_feccreacion,
empleado.emple_fechanacimiento,
DATE_FORMAT(emple_fechanacimiento,'%d/%m/%Y') AS fnacimiento, 
empleado.emple_nrodocumento,
empleado.emple_movil,
empleado.emple_email,
empleado.emple_estatus,
empleado.emple_direccion
FROM
empleado
ORDER BY CONCAT_WS(' ',empleado.emple_apepat,empleado.emple_apemat)$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_EMPLEADO_ADMINISTRATIVO`$$
CREATE PROCEDURE `SP_LISTAR_EMPLEADO_ADMINISTRATIVO` (IN `IDEMPLEADO` INT)  SELECT
empleado.empleado_id,
CONCAT_WS(' ',emple_nombre,emple_apepat,emple_apemat) as empleado,
empleado.emple_nombre,
empleado.emple_apepat,
empleado.emple_apemat,
empleado.emple_feccreacion,
empleado.emple_fechanacimiento,
DATE_FORMAT(emple_fechanacimiento,'%d/%m/%Y') AS fnacimiento, 
empleado.emple_nrodocumento,
empleado.emple_movil,
empleado.emple_email,
empleado.emple_estatus,
empleado.emple_direccion,
empleado.foto,
empleado.emple_tipodoc,
empleado.emple_sexo,
empleado.emple_depar,
empleado.emple_ciudad,
empleado.emple_tcontrato,
empleado.emple_salario
FROM
empleado
WHERE empleado.empleado_id = IDEMPLEADO
ORDER BY CONCAT_WS(' ',empleado.emple_apepat,empleado.emple_apemat)$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_PERSONAL`$$
CREATE PROCEDURE `SP_LISTAR_PERSONAL` (IN `IDEMPRESA` INT, IN `TIPO` VARCHAR(20))  SELECT
empleado.empleado_id,
empleado.empl_nombre,
empleado.empl_apepat,
empleado.empl_apemat,
CONCAT_WS(' ',empleado.empl_nombre,
empleado.empl_apepat,
empleado.empl_apemat) empleado,
empleado.empl_nrodocumento,
empleado.empl_fechanacimiento,
DATE_FORMAT(empleado.empl_fechanacimiento,'%d/%m/%Y')empl_fechanacimiento2,
empleado.empl_movil,
empleado.empl_direccion,
empleado.empl_email,
empleado.empl_estado,
empleado.empl_tipo,
empleado.empl_foto,
empleado.empresa_id
FROM
empleado
ORDER BY empleado.empl_apepat ASC$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_STUDEN`$$
CREATE PROCEDURE `SP_LISTAR_STUDEN` ()  SELECT
student.ID,
student.STUDENTID,
student.FIRSTNAME,
student.MNAME,
student.LASTNAME,
CONCAT_WS(' ',FIRSTNAME,MNAME,LASTNAME) as studen,
student.AGE,
student.GENDER,
student.cli_fechanacimiento,
student.cli_movil,
student.cli_email,
student.cli_direccion,
student.cli_estatus
FROM
student$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_USUARIO`$$
CREATE PROCEDURE `SP_LISTAR_USUARIO` ()  SELECT
	usuario.usu_id, 
	usuario.usu_usuario, 
	usuario.usu_contra, 
DATE_FORMAT(usuario.usu_feccreacion,'%d/%m/%Y') usu_feccreacion, 
	usuario.usu_fecupdate, 
	usuario.empleado_id, 
	usuario.usu_estatus, 
	empleado.emple_nombre, 
	empleado.emple_apepat, 
	empleado.emple_apemat, 
	CONCAT_WS(' ',empleado.emple_nombre,empleado.emple_apepat,empleado.emple_apemat) as empleado, 
	empleado.emple_feccreacion, 
	empleado.emple_fechanacimiento, 
	empleado.emple_nrodocumento, 
	empleado.emple_movil, 
	empleado.emple_estatus, 
	empleado.emple_direccion, 
	empleado.empl_fotoperfil, 
	empleado.emple_email, 
	usuario.usu_rol
FROM
	usuario
	LEFT JOIN
	empleado
	ON 
		usuario.empleado_id = empleado.empleado_id$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_ZONAS`$$
CREATE PROCEDURE `SP_LISTAR_ZONAS` ()  BEGIN
SET @row_number := 0;
SET @row_number2 := 0;
SELECT (@row_number2 :=@row_number2 + 1) AS numero,
t.* FROM(
SELECT
(@row_number :=@row_number + 1) AS numero2,
zona.zona_id,
zona.zona_nombre,
DATE_FORMAT(zona.zona_fregistro,'%d/%m/%Y') zona_fregistro,
DATE_FORMAT(zona.zona_fechaupdate,'%d/%m/%Y') AS zona_fechaupdate,
zona.zona_status
FROM
zona
ORDER BY
zona.zona_nombre
)t
ORDER BY t.zona_nombre;
END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_USUARIO`$$
CREATE PROCEDURE `SP_MODIFICAR_USUARIO` (IN `IDUSUARIO` INT, IN `ROL` VARCHAR(30), IN `EMPLEADO` INT)  UPDATE usuario SET 
	usu_rol=ROL,
  empleado_id=EMPLEADO
where usu_id=IDUSUARIO$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_USUARIO_CONTRA`$$
CREATE PROCEDURE `SP_MODIFICAR_USUARIO_CONTRA` (IN `IDUSUARIO` INT, IN `CONTRA` VARCHAR(255))  UPDATE usuario SET 
	usu_contra=CONTRA
	where usu_id=IDUSUARIO$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_USUARIO_ESTATUS`$$
CREATE PROCEDURE `SP_MODIFICAR_USUARIO_ESTATUS` (IN `ID` INT, IN `ESTATUS` VARCHAR(10))  UPDATE usuario set
usu_estatus=ESTATUS
where usu_id=ID$$

DROP PROCEDURE IF EXISTS `SP_REGISTRAREMPLEADO`$$
CREATE PROCEDURE `SP_REGISTRAREMPLEADO` (IN `DNI` VARCHAR(15), IN `NOMBRE` VARCHAR(150), IN `APEPAT` VARCHAR(100), IN `APEMAT` VARCHAR(100), IN `FECHANACIMIENTO` VARCHAR(20), IN `CELULAR` VARCHAR(15), IN `EMAIL` VARCHAR(150), IN `DIRECCION` VARCHAR(250), IN `ARCHIVO` VARCHAR(255), IN `TIPO` VARCHAR(20), IN `IDEMPRESA` INT)  BEGIN
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) from  empleado where empl_nrodocumento=DNI AND empl_tipo = TIPO AND empresa_id = IDEMPRESA);
IF @CANTIDAD = 0 THEN
	INSERT INTO empleado(empl_nombre,empl_apepat,empl_apemat,empl_nrodocumento,empl_fechanacimiento,
											empl_movil,empl_direccion,empl_email,empl_estado,empl_tipo,empl_foto,empresa_id)
								VALUES(NOMBRE,APEPAT,APEMAT,DNI,FECHANACIMIENTO,
											CELULAR,DIRECCION,EMAIL,'ACTIVO',TIPO,ARCHIVO,IDEMPRESA);
	SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `SP_REGISTRAR_USUARIO`$$
CREATE PROCEDURE `SP_REGISTRAR_USUARIO` (IN `USUARIO` VARCHAR(20), IN `CONTRA` VARCHAR(255), IN `ROL` VARCHAR(30), IN `EMPLEADO` INT)  BEGIN
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) from usuario where usu_usuario = BINARY USUARIO);
IF @CANTIDAD = 0 THEN
	INSERT INTO usuario(usu_usuario,usu_contra,usu_rol,empleado_id,usu_feccreacion,usu_estatus)
	VALUES(USUARIO,CONTRA,ROL,EMPLEADO,CURDATE(),'ACTIVO');
	SELECT 1;
ELSE
	SELECT 2;
END IF;

END$$

DROP PROCEDURE IF EXISTS `SP_SELECT_EMPLEADO`$$
CREATE PROCEDURE `SP_SELECT_EMPLEADO` ()  SELECT
	empleado.empleado_id, 
	empleado.emple_nrodocumento,
	CONCAT_WS(' ',empleado.emple_nombre,empleado.emple_apepat,empleado.emple_apemat) AS empleado
FROM empleado$$

DROP PROCEDURE IF EXISTS `SP_SELECT_TURNO`$$
CREATE PROCEDURE `SP_SELECT_TURNO` ()  SELECT
turno.turno_id,
turno.tur_nombre,
turno.tur_horae,
turno.tur_horas
FROM
turno$$

DROP PROCEDURE IF EXISTS `SP_VERIFICAR_USUARIO`$$
CREATE PROCEDURE `SP_VERIFICAR_USUARIO` (IN `USUARIO` VARCHAR(255))  SELECT
	usuario.usu_id, 
	usuario.usu_usuario, 
	usuario.usu_contra, 
	usuario.usu_feccreacion, 
	usuario.usu_fecupdate, 
	usuario.empleado_id, 
	usuario.usu_estatus, 
	empleado.emple_nombre, 
	empleado.emple_apepat, 
	empleado.emple_apemat, 
	empleado.emple_feccreacion, 
	DATE_FORMAT(empleado.emple_fechanacimiento,'%d/%m/%Y') AS emple_fechanacimiento, 
	empleado.emple_nrodocumento, 
	empleado.emple_movil, 
	empleado.emple_estatus, 
	empleado.emple_direccion, 
	empleado.empl_fotoperfil, 
	empleado.emple_email, 
	usuario.usu_rol
FROM
	usuario
	LEFT JOIN
	empleado
	ON 
		usuario.empleado_id = empleado.empleado_id
	where usuario.usu_usuario = BINARY USUARIO$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attendance`
--

DROP TABLE IF EXISTS `attendance`;
CREATE TABLE `attendance` (
  `ID` int(11) NOT NULL,
  `STUDENTID` varchar(250) NOT NULL,
  `TIMEIN` varchar(250) NOT NULL,
  `TIMEOUT` varchar(250) NOT NULL,
  `LOGDATE` varchar(250) NOT NULL,
  `STATUS` varchar(250) NOT NULL,
  `YEAR` varchar(120) NOT NULL,
  `fecha` date DEFAULT NULL,
  `condicion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `attendance`
--

INSERT INTO `attendance` (`ID`, `STUDENTID`, `TIMEIN`, `TIMEOUT`, `LOGDATE`, `STATUS`, `YEAR`, `fecha`, `condicion`) VALUES
(254, '22196507', '09:34:52 AM', '09:35:33 AM', '2022-05-26', '1', '', '2022-05-26', 'ENTRADA'),
(258, '22196507', '09:50:06 AM', '09:50:09 AM', '2022-05-25', '1', '', '2022-05-25', 'ENTRADA'),
(259, '22196507', '09:50:32 AM', '09:50:39 AM', '2022-05-24', '1', '', '2022-05-24', 'ENTRADA'),
(263, '22196507', '09:58:55 AM', '09:58:59 AM', '2022-05-28', '1', '', '2022-05-28', 'ENTRADA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `cliente_id` int(11) NOT NULL,
  `cli_nombre` varchar(150) DEFAULT NULL,
  `cli_apepat` varchar(100) DEFAULT NULL,
  `cli_apemat` varchar(100) DEFAULT NULL,
  `cli_feccreacion` date DEFAULT NULL,
  `cli_fechanacimiento` date DEFAULT NULL,
  `cli_nrodocumento` char(12) DEFAULT NULL,
  `cli_movil` char(9) DEFAULT NULL,
  `cli_email` varchar(250) DEFAULT NULL,
  `cli_estatus` enum('ACTIVO','INACTIVO') DEFAULT NULL,
  `cli_direccion` varchar(255) DEFAULT NULL,
  `cli_fotoperfil` varchar(255) DEFAULT 'Fotos/admin.png',
  `cli_foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`cliente_id`, `cli_nombre`, `cli_apepat`, `cli_apemat`, `cli_feccreacion`, `cli_fechanacimiento`, `cli_nrodocumento`, `cli_movil`, `cli_email`, `cli_estatus`, `cli_direccion`, `cli_fotoperfil`, `cli_foto`) VALUES
(1, 'ANGELLO MARTIN', 'NAVARRO ', 'GARCIA', '2021-03-25', '1996-01-08', '77777778', '343867', 'ruyer56@gmail.com', 'ACTIVO', 'jh', 'Fotos/admin.png', 'Fotos/77777778.jpg'),
(2, 'MARSELLO', 'GALINDO', 'CUYA', '2021-03-25', '1996-07-03', '77777777', '956968915', 'marsello@gmail.com', 'ACTIVO', 'Haraz-grt', 'Fotos/admin.png', 'Fotos/77777777.jpg'),
(3, 'JULIO', 'ANICAMA', 'LOPEZ', '2021-09-08', '0000-00-00', '99999999', '88888888', 'ER@GMAIL.COM', 'ACTIVO', 'MANZANILLA', 'Fotos/admin.png', 'Fotos/99999999.jpg'),
(4, 'MILAGRO', 'RRRRR', 'REERER', '2021-09-08', '0000-00-00', '2323', '323232', 'ER@GMAIL.COM', 'ACTIVO', 'SDSDSD', 'Fotos/admin.png', 'Fotos/2323.jpg'),
(5, 'MARCOS', 'SANCHEZ', 'GUTIERREZ', '2021-09-28', '0000-00-00', '632541', '232323434', 'MARCOS@HOTMAIL.COM', 'ACTIVO', 'SDSDerererere', 'Fotos/admin.png', 'Fotos/632541.jpg'),
(6, 'DALILA', 'YARASCA', 'CARLOS', '2021-09-28', '0000-00-00', '21212', '212121', 'DALILA@GMAIL.COM', 'ACTIVO', 'SACRA', 'Fotos/admin.png', 'Fotos/21212.jpg'),
(7, 'CARLOS', 'SANCHEZ', 'MANDEIER', '2021-09-28', '0000-00-00', '25147896', '34343', 'CARLOS@GMAIL.COM', 'ACTIVO', 'CARACAS', 'Fotos/admin.png', 'Fotos/25147896.jpg'),
(8, 'juan pablo', 'REWREWREWR', 'WEREWREWR', '2021-09-28', '0000-00-00', '23232', '232323', 'ER@HOTMAIL.COM', 'ACTIVO', '23232', 'Fotos/admin.png', 'Fotos/23232.jpg'),
(9, 'SDSDSDSDSD', 'SDSDSDS', 'DSDSDSD', '2021-09-28', '0000-00-00', '323232', '23232', 'ER@GMAIL.COM', 'ACTIVO', 'SDSDSD', 'Fotos/admin.png', 'Fotos/323232.jpg'),
(10, 'SDSDS', 'SDSDSD', 'SDSDSDS', '2021-09-28', '0000-00-00', '3232', '323232', 'S@GMAIL.COM', 'ACTIVO', 'SDSD', 'Fotos/admin.png', 'Fotos/3232.jpg'),
(11, 'RICARDO', 'YARASCA', 'GALINDO', '2021-09-28', '0000-00-00', '22196507', '212121', 'A@GMAIL.COM', 'ACTIVO', 'SDSDSD', 'Fotos/admin.png', 'Fotos/22196507.jpg'),
(12, 'CARLOS MANUEL', 'CASO', 'PAREDES', '2021-09-28', '0000-00-00', '74125868', '956321478', 'CARLOS@GMAIL.COM', 'ACTIVO', 'EL HARAZ-sancristobal', 'Fotos/admin.png', 'Fotos/74125868.jpg'),
(13, 'JUAN PER', 'PEREZ', 'SANCHES', '2021-11-21', '0000-00-00', '12457888', '956362541', 'ER@HOTMAIL.COM', 'ACTIVO', 'CARACAS', 'Fotos/admin.png', 'Fotos/12457888.jpg'),
(14, 'JACINTO', 'CARRASCO', 'PEñA', '2022-02-15', '1990-02-06', '65656565', '32323', 'ART@GMAIL.COM', 'ACTIVO', 'DSDSD', 'Fotos/admin.png', 'Fotos/ALU-65656565.JPG'),
(15, 'MARILIZ', 'NAVARRO', 'LOPEZ', '2022-02-18', '0000-00-00', '36985214', '965656565', 'DALILA@GMAIL.COM', 'ACTIVO', 'EEEERRE', 'Fotos/admin.png', 'Fotos/ALU-36985214.JPG'),
(16, 'KINKO', 'PAREJA', 'GALINDO', '2022-02-19', '0000-00-00', '741258', '852147', 'KIKO@GMAIL.COM', 'ACTIVO', 'RERER', 'Fotos/admin.png', 'Fotos/ALU-741258.JPG'),
(17, 'JUAN ANTONIO', 'PEREZ', 'CASTILLA', '2022-02-21', '0000-00-00', '32146678', '52525252', 'ERER@GMAIL.COM', 'ACTIVO', 'SDSDSDS', 'Fotos/admin.png', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

DROP TABLE IF EXISTS `empleado`;
CREATE TABLE `empleado` (
  `empleado_id` int(11) NOT NULL,
  `emple_nombre` varchar(150) DEFAULT NULL,
  `emple_apepat` varchar(100) DEFAULT NULL,
  `emple_apemat` varchar(100) DEFAULT NULL,
  `emple_feccreacion` date DEFAULT NULL,
  `emple_fechanacimiento` date DEFAULT NULL,
  `emple_nrodocumento` char(12) DEFAULT NULL,
  `emple_movil` char(9) DEFAULT NULL,
  `emple_email` varchar(250) DEFAULT NULL,
  `emple_estatus` enum('ACTIVO','INACTIVO') DEFAULT NULL,
  `emple_direccion` varchar(255) DEFAULT NULL,
  `empl_fotoperfil` varchar(255) DEFAULT 'Fotos/admin.png'
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`empleado_id`, `emple_nombre`, `emple_apepat`, `emple_apemat`, `emple_feccreacion`, `emple_fechanacimiento`, `emple_nrodocumento`, `emple_movil`, `emple_email`, `emple_estatus`, `emple_direccion`, `empl_fotoperfil`) VALUES
(1, 'RICARDO', 'YAUCA', 'YARASCA', '2021-03-25', '1996-01-08', '77777778', '343867', 'yarasca@gmail.com', 'ACTIVO', 'jh', 'Fotos/admin.png'),
(2, 'RICARDO', 'GALINDO', 'YARASCA', '2021-06-30', '0000-00-00', '22196577', '956968915', 'ERMAN_SY@HOTMAIL.COM', 'ACTIVO', 'EL HARAZ A14', 'Fotos/admin.png'),
(3, 'MARIA', 'YAUCA', 'QUINTANILLA', '2021-06-30', '1994-08-12', '70169036', '95689555', 'ERMAN_SY@HOTMAIL.COM', 'ACTIVO', 'JUAN JOSE MIRANDA 104', 'Fotos/admin.png'),
(4, 'RITA', 'RITA', 'RITA MATERNO', '2021-07-02', '0000-00-00', '41787890', '956326521', 'RITA@GMAIL.COM', 'ACTIVO', 'ICA', 'Fotos/admin.png'),
(5, 'ANGELICA', 'LARA', 'LARA', '2021-07-15', '0000-00-00', '7777777', '965874', 'ANGELICA@GMAIL.COM', 'ACTIVO', 'PARCONA', 'Fotos/admin.png'),
(6, 'JUAN ANTONIOHHH', 'MEDEZ', 'CARDENAS', '2022-04-24', '0000-00-00', '3434455', '89999', 'GUU@GMAIL.COM', 'ACTIVO', 'DFDFDFD', 'Fotos/admin.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado2`
--

DROP TABLE IF EXISTS `empleado2`;
CREATE TABLE `empleado2` (
  `empleado_id` int(11) NOT NULL,
  `emple_nombre` varchar(150) DEFAULT NULL,
  `emple_apepat` varchar(100) DEFAULT NULL,
  `emple_apemat` varchar(100) DEFAULT NULL,
  `emple_feccreacion` date DEFAULT NULL,
  `emple_fechanacimiento` date DEFAULT NULL,
  `emple_nrodocumento` char(12) DEFAULT NULL,
  `emple_movil` char(9) DEFAULT NULL,
  `emple_email` varchar(250) DEFAULT NULL,
  `emple_estatus` enum('ACTIVO','INACTIVO') DEFAULT NULL,
  `emple_direccion` varchar(255) DEFAULT NULL,
  `empl_fotoperfil` varchar(255) DEFAULT 'Fotos/admin.png',
  `foto` varchar(200) NOT NULL,
  `emple_tipodoc` varchar(20) NOT NULL,
  `emple_sexo` varchar(30) NOT NULL,
  `emple_depar` varchar(45) NOT NULL,
  `emple_ciudad` varchar(45) NOT NULL,
  `emple_tcontrato` varchar(45) NOT NULL,
  `emple_salario` varchar(15) NOT NULL
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `empleado2`
--

INSERT INTO `empleado2` (`empleado_id`, `emple_nombre`, `emple_apepat`, `emple_apemat`, `emple_feccreacion`, `emple_fechanacimiento`, `emple_nrodocumento`, `emple_movil`, `emple_email`, `emple_estatus`, `emple_direccion`, `empl_fotoperfil`, `foto`, `emple_tipodoc`, `emple_sexo`, `emple_depar`, `emple_ciudad`, `emple_tcontrato`, `emple_salario`) VALUES
(1, 'RICARDO', 'YARASCA', 'NAVARRO', '2021-03-25', '1996-01-08', '77777778', '343867888', 'ruyer56@gmail.com', 'ACTIVO', 'jhsdsds', 'Fotos/admin.png', '', '', '', '', '', '', ''),
(2, 'ANGELLO', 'GALINDOD', 'LOPEZ', '2021-03-25', '1996-03-07', '77777777', '777777777', 'RUYER56@GMAIL.COM', 'ACTIVO', 'Hgggg', 'Fotos/admin.png', 'Fotos/EMPL-77777777-11.JPG', '', '', '', '', 'hhhhhhh', ''),
(3, 'SDSD', 'SDSD', 'SDSD', '2021-12-20', '0000-00-00', '12121', '1212', 'ERR@GMAIL.COM', 'ACTIVO', 'DSSDS', 'Fotos/admin.png', '', '32323', '', 'sdsdsdsd', 'sdsdsd', 'sdsdsdsd', '12333'),
(4, 'JUAN', 'CARRASCO', 'MENDEZ', '2022-02-22', '0000-00-00', '4343', '34343', 'ER@GMAIL.COM', 'ACTIVO', 'SDSDSDdddddddd', 'Fotos/admin.png', '', '', '', '', '', '', ''),
(5, 'ARMANDO', 'GARCIA', 'FREEE', '2022-02-22', '0000-00-00', '434343', '4343434', 'ER@GMAIL.COM', 'ACTIVO', 'DSDSDS', 'Fotos/admin.png', 'Fotos/EMPL-434343.JPG', '4343434', '', 'dsds', 'sdsdsd', 'sddsds', '2212121'),
(6, 'JUAN SEBATIAN', 'CASTILLO', 'LOPEZ', '2022-02-23', '0000-00-00', '1313113', '31313131', 'ER@GMAIL.COM', 'ACTIVO', 'SDSDSD', 'Fotos/admin.png', 'Fotos/ALU-1313113.JPG', '365214', 'M', 'ICA', 'FRE', 'ERERER', '3232'),
(7, 'ALBERTO', 'JUARADO', 'GUEVARA', '2022-02-23', '0000-00-00', '32146879', '21212', 'ER@GMAIL.COM', 'ACTIVO', 'SDDSDS', 'Fotos/admin.png', 'Fotos/ALU-32146879.JPG', 'CEDULA', 'M', 'LOS ANGBELLS', 'SDDDDD', 'ERERER', '120'),
(8, 'MARIAANA', 'SALCEDO', 'LINO', '2022-02-23', '0000-00-00', '23232', '32323', 'DSDSD@GMAIL.COM', 'ACTIVO', 'SDDSD', 'Fotos/admin.png', 'Fotos/EMPL-23232.JPG', '365821', 'NULL', 'SDSDS', 'DDSDS', 'SDDSD', '422'),
(9, 'LILIANA ANTONIA', 'SARMIENTO', 'LOPEZ', '2022-02-25', '0000-00-00', '12345678', '23455666', 'LOPEZ@GMAIL.COM', 'ACTIVO', 'LAS ALCASIAS', 'Fotos/admin.png', 'Fotos/EMPL-12345678.JPG', 'CEDULA', 'NULL', 'ICA', 'ICA', 'PERMANENTE', '140'),
(10, 'FELIZ ANTONIO', 'MATTA', 'SUAREZ', '2022-02-25', '0000-00-00', '36985214', '3652478', 'MATTA@GMAIL.COM', 'ACTIVO', 'LAS ALCASIAS', 'Fotos/admin.png', 'Fotos/EMPL-36985214.JPG', 'CEDULA', 'NULL', 'ICA', 'ICA', 'PERMANENTE', '150'),
(11, 'SDSDSD', 'SDSDSD', 'SDSDSD', '2022-03-29', '0000-00-00', '1212', '232323', 'ASS@GMAIL.COM', 'ACTIVO', 'WSASA', 'Fotos/admin.png', '', 'undefined', 'UNDEFINED', 'UNDEFINED', 'UNDEFINED', 'UNDEFINED', 'UNDEFINED');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE `empresa` (
  `empresa_id` int(11) NOT NULL,
  `emp_razon` varchar(250) DEFAULT NULL,
  `emp_ruc` varchar(12) DEFAULT NULL,
  `emp_responsable` varchar(250) DEFAULT NULL,
  `emp_direccion` varchar(250) DEFAULT NULL,
  `emp_celular` char(15) DEFAULT NULL,
  `emp_estado` enum('ACTIVO','INACTIVO') NOT NULL,
  `emp_tipo` enum('Principal','Otros') DEFAULT NULL,
  `emp_codigo` varchar(255) DEFAULT NULL,
  `emp_logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`empresa_id`, `emp_razon`, `emp_ruc`, `emp_responsable`, `emp_direccion`, `emp_celular`, `emp_estado`, `emp_tipo`, `emp_codigo`, `emp_logo`) VALUES
(1, 'ONESYSTEMAS', '10733403182', 'Ricardo yarasca', 'COISHCO', '982255930', 'ACTIVO', 'Principal', '51', 'logo/E-169202121679.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inquilino`
--

DROP TABLE IF EXISTS `inquilino`;
CREATE TABLE `inquilino` (
  `inquilino_id` int(11) NOT NULL,
  `inqui_nombre` varchar(150) DEFAULT NULL,
  `inqui_apepat` varchar(100) DEFAULT NULL,
  `inqui_apemat` varchar(100) DEFAULT NULL,
  `inqui_feccreacion` date DEFAULT NULL,
  `inqui_fechanacimiento` date DEFAULT NULL,
  `inqui_nrodocumento` char(12) DEFAULT NULL,
  `inqui_movil` char(9) DEFAULT NULL,
  `inqui_email` varchar(250) DEFAULT NULL,
  `inqui_estatus` enum('ACTIVO','INACTIVO') DEFAULT NULL,
  `inqui_direccion` varchar(255) DEFAULT NULL,
  `inqui_fotoperfil` varchar(255) DEFAULT 'Fotos/admin.png',
  `inqui_tipopersona` enum('NATURAL','JURIDICA') DEFAULT NULL,
  `inqui_sexo` enum('M','F') DEFAULT NULL,
  `zona_id` int(11) DEFAULT NULL,
  `avenida_id` int(11) DEFAULT NULL
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `inquilino`
--

INSERT INTO `inquilino` (`inquilino_id`, `inqui_nombre`, `inqui_apepat`, `inqui_apemat`, `inqui_feccreacion`, `inqui_fechanacimiento`, `inqui_nrodocumento`, `inqui_movil`, `inqui_email`, `inqui_estatus`, `inqui_direccion`, `inqui_fotoperfil`, `inqui_tipopersona`, `inqui_sexo`, `zona_id`, `avenida_id`) VALUES
(1, 'JUAN PABLO', 'CARRASCO', 'SANCHEZ', '2022-01-27', '0000-00-00', '12345678', '36521788', 'PABLO@GMAIL.COM', 'ACTIVO', 'LAS ALCASIAS H4', 'Fotos/admin.png', 'NATURAL', 'M', 1, 1),
(2, 'ANA MARIA', 'MENDIETA', 'SOLIZ', '2022-01-27', '0000-00-00', '2121', '121212', 'MENDIETA@GMAIL.COM', 'ACTIVO', 'ASASASAS', 'Fotos/admin.png', 'NATURAL', 'M', 1, 1),
(3, 'ANEGLLO MARTIN', 'GALINDO', 'YARASCA', '2022-01-30', '0000-00-00', '47852136', '3652188', 'ANGELLO@GMAIL.COM', 'ACTIVO', 'SACRAMENTO', 'Fotos/admin.png', 'NATURAL', 'M', 1, 2),
(4, 'MARILIZ', 'SANCHES', 'PATIÑO', '2022-02-19', '0000-00-00', '212121', '323232', 'DSDSDS@HOTMAIL.COM', 'ACTIVO', 'SDSD', 'Fotos/admin.png', 'NATURAL', 'F', 0, 0),
(5, 'SASAA', 'SAASAS', 'SASASAS', '2022-02-19', '0000-00-00', '14785', '3232', 'ERER@GMAIL.COM', 'ACTIVO', 'ERERE', 'Fotos/admin.png', 'NATURAL', 'M', 0, 0),
(6, 'JACINTO', 'TUEROS', 'LOPEZ', '2022-03-12', '0000-00-00', '34343434', '45454', 'JAC@GMAIL.COM', 'ACTIVO', 'RERERERERER', 'Fotos/admin.png', NULL, 'M', NULL, NULL),
(7, 'SDSDSD', 'SDSDSD', 'SDSDSD', '2022-03-12', '0000-00-00', '34343', '34434', 'SAS@GMAIL.COM', 'ACTIVO', 'SDSDSDS', 'Fotos/admin.png', NULL, 'M', NULL, NULL),
(8, 'EDGAR', 'LUCANA', 'JURADO', '2022-03-12', '0000-00-00', '23456799', '956323232', 'LUCA@GMAIL.COM', 'ACTIVO', 'DSDSDSDD', 'Fotos/admin.png', NULL, 'M', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schedules`
--

DROP TABLE IF EXISTS `schedules`;
CREATE TABLE `schedules` (
  `ID` int(11) NOT NULL,
  `TIMEIN` time NOT NULL,
  `TIMEOUT` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `schedules`
--

INSERT INTO `schedules` (`ID`, `TIMEIN`, `TIMEOUT`) VALUES
(1, '07:00:00', '16:00:00'),
(2, '08:00:00', '17:00:00'),
(3, '09:00:00', '18:00:00'),
(4, '10:00:00', '19:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `ID` int(11) NOT NULL,
  `STUDENTID` varchar(250) NOT NULL,
  `FIRSTNAME` varchar(250) NOT NULL,
  `MNAME` varchar(250) NOT NULL,
  `LASTNAME` varchar(250) NOT NULL,
  `AGE` varchar(250) NOT NULL,
  `GENDER` varchar(250) NOT NULL,
  `cli_fechanacimiento` date NOT NULL,
  `cli_movil` char(12) NOT NULL,
  `cli_email` varchar(40) NOT NULL,
  `cli_direccion` varchar(60) NOT NULL,
  `cli_estatus` enum('ACTIVO','INACTIVO') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `student`
--

INSERT INTO `student` (`ID`, `STUDENTID`, `FIRSTNAME`, `MNAME`, `LASTNAME`, `AGE`, `GENDER`, `cli_fechanacimiento`, `cli_movil`, `cli_email`, `cli_direccion`, `cli_estatus`) VALUES
(15, '45555', 'ALFREDO', 'CASAS', 'MEDIOLA', '', '', '1996-02-10', '334343', 'UHH@GMAIL.COM', 'ERERER', 'ACTIVO'),
(16, '1998-05-1', '234566', 'HUGOFF', 'CARRASCO', '', '', '0000-00-00', '88888', 'DSDS', 'JIO@GMAIL.COM', 'ACTIVO'),
(17, '22196507', 'RAUL', 'SANCHEZ', 'ANICAMA', '', '', '1992-10-17', '96532541', 'RERERE', 'YYY@GMAIL.COM', 'ACTIVO'),
(18, '365478', 'GARCIA', 'KARINA', 'JUAREZGG', '', '', '1998-02-10', '323232', 'DSDSD', 'UY@GMAIL.COM', 'ACTIVO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbladmin`
--

DROP TABLE IF EXISTS `tbladmin`;
CREATE TABLE `tbladmin` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `admin_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbladmin`
--

INSERT INTO `tbladmin` (`id`, `username`, `password`, `admin_name`) VALUES
(1, 'admin', '123456', 'Angello Yarasca Navarro'),
(2, 'user', 'user', 'Crischel T Amorio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tblusers`
--

DROP TABLE IF EXISTS `tblusers`;
CREATE TABLE `tblusers` (
  `id` int(11) NOT NULL,
  `FirstName` varchar(150) NOT NULL,
  `LastName` varchar(150) NOT NULL,
  `ContactNumber` char(11) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `PostingDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `EmailId` varchar(120) NOT NULL,
  `Photo` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tblusers`
--

INSERT INTO `tblusers` (`id`, `FirstName`, `LastName`, `ContactNumber`, `Address`, `PostingDate`, `EmailId`, `Photo`) VALUES
(16, 'Andres', 'Jario', '936552411', 'Dumaguete City', '2021-07-26 08:11:26', 'andresjario@gmail.com', 'upload/user2-160x160.jpg'),
(17, 'Futterkiste', ' Alfreds M', '00912121', 'Obere Str. 57', '2021-07-26 08:52:15', 'Futterkiste@gmail.com', 'upload/user3-128x128.jpg'),
(18, 'Antonio G', 'Moreno Taquería', '09111111222', 'Mataderos 2312', '2021-07-28 08:18:49', 'Mataderos@gmail.com', 'upload/user7-128x128.jpg'),
(19, 'Crischel', 'Amorio', '00931322', 'Mabinay Negros Oriental', '2021-07-28 08:19:03', 'crischelamorio@gmail.com', 'upload/user1-128x128.jpg'),
(20, 'Familia K', 'Arquibaldo', '09882121', 'Rua Orós, 92', '2021-07-28 08:17:43', 'Arquibaldo@gmail.com', 'upload/219604930_865796534320809_3427328319495791222_n.jpg'),
(21, 'Carnes', 'Hanari O', '099812121', 'Rua do Paço, 67', '2021-07-27 08:55:34', 'Carnes@gmail.com', 'upload/user3-128x128.jpg'),
(22, 'Eastern B', 'Connection', '09212121', '35 King George', '2021-07-26 07:01:42', 'Eastern@gmail.com', 'upload/user5-128x128.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `city` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `mobile`, `city`) VALUES
(7, 'pki-validation', 'user@gmail.com', '8887919632', 'Lucknow'),
(8, 'pki-validation', 'user@gmail.com', '8887919632', 'Lucknow'),
(9, 'Rajs', 'user@gmail.com', '8887919632', 'Lucknow'),
(10, 'Amrendra', 'user@gmail.com', '434334', 'Lucknow'),
(11, 'Bahubalis', 'user@gmail.com', '434334', 'Lucknow'),
(12, 'Alok Kumar bisht', 'user@gmail.com', '434334', 'Lucknow'),
(13, 'admin', 'admin@gmail.com', '9988999999', 'Lucknow'),
(15, 'ninebroadband', 'superadmin@gmail.com', '8127956219', 'Lucknow'),
(16, 'index.html', 'superadmin@gmail.com', '8127956219', 'Lucknow'),
(18, 'index.html', 'user@gmail.com', '8127956219', 'Lucknow'),
(19, 'sfd', 'sfdasf@Gmail.com', 'adsffsaf', 'safdsa'),
(20, 'sfd', 'sfdasf@Gmail.com', 'adsffsaf', 'safdsa'),
(21, 'ricardosssffff', 'onesystemas@gmail.com', '2323', '323232323'),
(22, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(23, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(24, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(25, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(26, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(27, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(28, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(29, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(30, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(31, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(32, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(33, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(34, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(35, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(36, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(37, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(38, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(39, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(40, 'ricardo', 'erman_sy@hotmail.com', '123333sdsdsdsd', 'SDSDSDSD'),
(41, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(42, 'ricardo', 'erman_sy@hotmail.com', '1233334444', 'SDSDSDSD'),
(43, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(44, 'ricardo', 'erman_sy@hotmail.com', '123333', 'SDSDSDSD'),
(45, 'ricardo', 'one@gmail.com', 'dwdwdw', '3232323'),
(46, 'tata kareoka', 'marcelo@gmail.com', '96325874', 'sdsdsd'),
(47, 'raul', 'raul@gmail.com', '96325874', 'arequipa'),
(48, 'MILAGROS', 'manager@example.com', '96325874', 'ica'),
(49, 'JUSTINIANO PAREDES', 'admin@gmail.com', '96325874', 'PIURA'),
(50, 'FAVIO', 'onesystemas@gmail.com', '365214', 'DDDD'),
(51, 'TULIO', 'admin@gmail.com', '21212', 'ILO'),
(52, 'KILOSSS', 'onesystemas@gmail.com', '96325874', '3232323'),
(53, 'julio narro', 'manager@example.com', '96325874', 'ica'),
(54, 'sdds', 'onesystemas@gmail.com', 'sdsdsd', 'sdsdsd'),
(55, 'rerer', 'rerer@hptmail.com', 'onesys@gmail.com', 'sdsdsd'),
(56, 'pedro', 'pedro@gmail.com', '365214', 'piura'),
(57, 'ricardo', 'onesystemas@gmail.com', '22222', 'sdsdsd'),
(58, 'ricardo', 'onesystemas@gmail.com', '96325874', '3232323'),
(59, 'tata kareoka', 'erman_sy@hotmail.com', 'sdsdsd', 'sdsd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `usu_id` int(11) NOT NULL,
  `usu_usuario` varchar(250) DEFAULT NULL,
  `usu_contra` varchar(250) DEFAULT NULL,
  `usu_feccreacion` date DEFAULT NULL,
  `usu_fecupdate` date DEFAULT NULL,
  `empleado_id` int(11) DEFAULT NULL,
  `usu_estatus` enum('ACTIVO','INACTIVO') DEFAULT NULL,
  `usu_rol` enum('ADMINISTRADOR','ADMINISTRATIVO','CAJERO','ARBITRIOS') DEFAULT NULL
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usu_id`, `usu_usuario`, `usu_contra`, `usu_feccreacion`, `usu_fecupdate`, `empleado_id`, `usu_estatus`, `usu_rol`) VALUES
(4, 'admin', '$2y$10$9f73EzbIt.emnMGPCLgwjOzli.P/snMNGX7kNXWrBx.jrovJ34Bq6', '2021-03-25', NULL, 1, 'ACTIVO', 'ADMINISTRATIVO'),
(10, 'admin00', '$2y$10$6rW5V.MjloEzXKcGH9juBeEfOTqEIm2KBpYbLiE6.07MZBSyJtwQG', '2021-03-25', NULL, 1, 'ACTIVO', 'ADMINISTRADOR'),
(14, 'jose', '$2y$12$4uMBehn33LuWAJpRXJzgF.B21WlytqWCJgTko7RgYq9W8Wr2cub1C', '2022-02-18', NULL, 2, 'ACTIVO', 'ADMINISTRATIVO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zona`
--

DROP TABLE IF EXISTS `zona`;
CREATE TABLE `zona` (
  `zona_id` int(11) NOT NULL,
  `zona_nombre` varchar(255) DEFAULT NULL,
  `zona_fregistro` date DEFAULT NULL,
  `zona_status` enum('ACTIVO','INACTIVO') DEFAULT NULL,
  `zona_fechaupdate` date DEFAULT NULL
) ENGINE=InnoDB;

--
-- Volcado de datos para la tabla `zona`
--

INSERT INTO `zona` (`zona_id`, `zona_nombre`, `zona_fregistro`, `zona_status`, `zona_fechaupdate`) VALUES
(1, 'ZONA 1', '2021-03-25', 'ACTIVO', NULL),
(2, 'ZONA 2', '2021-03-25', 'ACTIVO', NULL),
(3, 'ZONA 3', '2021-04-13', 'ACTIVO', NULL),
(4, 'ZONA 4', NULL, NULL, NULL),
(5, 'ZONA 5', NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`cliente_id`) USING BTREE;

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`empleado_id`) USING BTREE;

--
-- Indices de la tabla `empleado2`
--
ALTER TABLE `empleado2`
  ADD PRIMARY KEY (`empleado_id`) USING BTREE;

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`empresa_id`) USING BTREE;

--
-- Indices de la tabla `inquilino`
--
ALTER TABLE `inquilino`
  ADD PRIMARY KEY (`inquilino_id`) USING BTREE;

--
-- Indices de la tabla `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `tbladmin`
--
ALTER TABLE `tbladmin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tblusers`
--
ALTER TABLE `tblusers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usu_id`) USING BTREE,
  ADD KEY `empleado_id` (`empleado_id`) USING BTREE;

--
-- Indices de la tabla `zona`
--
ALTER TABLE `zona`
  ADD PRIMARY KEY (`zona_id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `attendance`
--
ALTER TABLE `attendance`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=264;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `cliente_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `empleado_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `empleado2`
--
ALTER TABLE `empleado2`
  MODIFY `empleado_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `empresa_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `inquilino`
--
ALTER TABLE `inquilino`
  MODIFY `inquilino_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `schedules`
--
ALTER TABLE `schedules`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `student`
--
ALTER TABLE `student`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `tbladmin`
--
ALTER TABLE `tbladmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tblusers`
--
ALTER TABLE `tblusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `zona`
--
ALTER TABLE `zona`
  MODIFY `zona_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
