use project3_db;

INSERT INTO users (username, userType, firstName, lastName, googleId, email)
VALUES ("dardin-dale", "admin", "Logan", "Crecraft", "5c3bcfc11f47fc8c57a5e868", "dardinsouffle@gmail.com");

INSERT INTO users (username, userType, firstName, lastName, googleId, email)
VALUES ("hamburder", "basic", "dave", "hamberder", "5c3bcfc11f47fc8c57a5e868", "fakeyfake@gmail.com");

INSERT INTO users (username, userType, firstName, lastName, googleId, email)
VALUES ("gaffney", "basic", "jeff", "foxworthy", "5c3bcfc11f47fc8c57a5e868", "applehorsepie@gmail.com");

INSERT INTO users (username, userType, firstName, lastName, googleId, email)
VALUES ("ussrbotnet", "basic", "petrov", "usbladevik", "5c3bcfc11f47fc8c57a5e868", "bitiditls@gmail.com");

INSERT INTO posts (title, context, userID)
VALUES ("crunchy peanutbutter is best", "there are several forms of peanutbutter. Stir vs. non-stir, refrigerated vs. non-refrigerated.", 1);

INSERT INTO posts (title, context, userID)
VALUES ("free will does not exist.", "discussion on whether or not choices exist or if life is predetermined.", 1);

INSERT INTO posts (title, context, userID)
VALUES ("Is wind power sustainable?", "Wind is dependent on weather, temperature, geography, and sunlight...", 1);

INSERT INTO posts (title, context, userID)
VALUES ("cats or doggos? what mo better?", "cats pee everywhere, dogs chew up stuff", 1);



