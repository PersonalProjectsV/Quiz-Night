CREATE DATABASE  IF NOT EXISTS `quiz_night`;
USE `quiz_night`;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `answers`;
DROP TABLE IF EXISTS `questions`;
DROP TABLE IF EXISTS `movie_quiz`;



    
CREATE TABLE `movie_quiz` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `employee`
--

INSERT INTO `movie_quiz` VALUES 
	(1,'Game of Thrones'),
	(2,'Breaking Bad');
    
 
CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(200) DEFAULT NULL,
  `movie_id` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`movie_id`) REFERENCES movie_quiz(id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `employee`
--

INSERT INTO `questions` VALUES 
	(1,'What is the surname given to bastards born in Dorne?',1),
	(2,"'The Mountain' is the nickname for which character?",1),
    (3,'Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?',1),
    (4,"Who was Margaery Tyrell's first husband?",1),
    (5,"Who is known as 'The-King-Beyond-the-Wall'?",1),
    
    (6,'What is Walt’s middle name?',2),
    (7,'What is the plant Walt used to poison Brock?',2),
    (8,'What is the name of the boy Todd shot in the desert?',2),
    (9,'What is the model of Walt’s original car?',2),
    (10,'Before becoming Walt’s partner, Jesse cooked his meth with what special ingredient?',2);


CREATE TABLE `answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `answer` varchar(200) DEFAULT NULL,
  `is_Correct` BIT(1) DEFAULT NULL,
  `question_id` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`question_id`) REFERENCES questions(id)
  
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `employee`
--

INSERT INTO `answers` VALUES 
	(1,'Rivers',false,1),
	(2,"Waters",false,1),
    (3,'Stone',false,1),
    (4,"Sand",true,1),
    
    (5,"Gerold Clegane",false,2),
    (6,'Gregor Clegane',true,2),
    (7,'Oberyn Martell',false,2),
    (8,'Sandor Clegane',false,2),
    
    (9,'Ser Barristan Selmy',true,3),
    (11,'Ser Loras Tyrell',false,3),
    (12,'Ser Jaime Lannister',false,3),
    (13,'Ser Jeor Mormont',false,3),
    
    (14,'Renly Baratheon',true,4),
    (15,'Joffrey Baratheon',false,4),
    (16,'Tommen Baratheon',false,4),
    (17,'Stannis Baratheon',false,4),
    
    (18,'Mance Rayder',true,5),
    (19,'Tormund Giantsbane',false,5),
    (20,'Stannis Baratheon',false,5),
    (21,'The Night King',false,5),
    
    (22,'Archibald',false,6),
    (23,'Matthew',true,6),
    (24,'Hartwell',false,6),
    
    (25,'Narcissus',false,7),
    (26,'Lily-of-the-valley',true,7),
    (27,'Black Nightshade',false,7),
    
    (28,'Drew Sharp',true,8),
    (29,'David Stewart',false,8),
    (30,'Donnie Solis',true,8),
    
    (31,'1987 Toyota Tercel',false,9),
    (32,'2004 Pontiac Aztek',true,9),
    (33,'2006 PT Cruiser',false,9),
    
    (34,'Chili powder',true,10),
    (35,'A1 Steal Sauce',false,10),
    (36,'Oregano',false,10);
    
    
    

CREATE USER 'quiz_user'@'localhost' IDENTIFIED BY 'quizPerson';
CREATE USER 'quiz_user'@'%' IDENTIFIED BY 'quizPerson';
GRANT ALL PRIVILEGES ON quiz_night.* TO 'quiz_user'@'localhost';
    

