

PRAGMA foreign_keys = ON ;

DROP TABLE IF EXISTS users ;


CREATE TABLE users (
  id INTEGER PRIMARY KEY, 
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS questions ;
CREATE TABLE questions (
  id INTEGER PRIMARY KEY, 
  title VARCHAR(255) NOT NULL,
  body VARCHAR(255) NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users (id)
);


DROP TABLE IF EXISTS question_follows ;

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (question_id) REFERENCES questions (id)
);

DROP TABLE IF EXISTS replies ;

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_reply_id INTEGER,
  user_id INTEGER NOT NULL,
  body VARCHAR(255) NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (question_id) REFERENCES questions (id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies (id)
);

DROP TABLE IF EXISTS question_likes ;

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (question_id) REFERENCES questions (id)
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Scott', 'Haha'),
  ('Susan', 'Chuchu'),
  ('Ryan', 'Mapa'),
  ('Marshall', 'Strong?') ;

INSERT INTO
  questions (title, body, user_id)
VALUES
  ('How many hours does aA take?', 'Title. Please, I can''t take it anymore', (SELECT id FROM users WHERE fname='Scott' AND lname='Haha')),
  ('What do?','Chicken nugget.',(SELECT id FROM users WHERE fname='Susan' AND lname='Chuchu')),
  ('Ryan is asking what''s your favorite food', 'I like sushi.', (SELECT id FROM users WHERE fname='Ryan' AND lname='Mapa')),
  ('Purple Dinosaur', 'Africa', (SELECT id FROM users WHERE fname='Marshall' AND lname='Strong?'));


  INSERT INTO
    question_follows(question_id, user_id)
  VALUES
    ((SELECT id FROM questions WHERE title='How many hours does aA take?'), (SELECT id FROM users WHERE fname='Scott' AND lname='Haha')),
    ((SELECT id FROM questions WHERE title='What do?'), (SELECT id FROM users WHERE fname='Scott' AND lname='Haha')),
    ((SELECT id FROM questions WHERE title='Ryan is asking what''s your favorite food'), (SELECT id FROM users WHERE fname='Scott' AND lname='Haha')),
    ((SELECT id FROM questions WHERE title='Purple Dinosaur'), (SELECT id FROM users WHERE fname='Scott' AND lname='Haha'));

  INSERT INTO 
    replies(question_id, parent_reply_id, user_id, body)
  VALUES 
    ((SELECT id FROM questions WHERE title='How many hours does aA take?'), NULL, (SELECT id FROM users WHERE fname='Ryan' AND lname='Mapa'), 'This is his reply.'),
    ((SELECT id FROM questions WHERE title='How many hours does aA take?'), (SELECT id FROM replies WHERE body='This is his reply.'), (SELECT id FROM users WHERE fname='Ryan' AND lname='Mapa'), 'This is his reply.');
    

 INSERT INTO
    question_likes(question_id, user_id)
  VALUES
    ((SELECT id FROM questions WHERE title='How many hours does aA take?'), (SELECT id FROM users WHERE fname='Scott' AND lname='Haha')),
    ((SELECT id FROM questions WHERE title='What do?'), (SELECT id FROM users WHERE fname='Scott' AND lname='Haha')),
    ((SELECT id FROM questions WHERE title='Ryan is asking what''s your favorite food'), (SELECT id FROM users WHERE fname='Scott' AND lname='Haha')),
    ((SELECT id FROM questions WHERE title='Purple Dinosaur'), (SELECT id FROM users WHERE fname='Scott' AND lname='Haha'));
  