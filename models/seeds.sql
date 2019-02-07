
use project3_db;

-- drop table comments IF EXISTS;
-- drop table posts IF EXISTS;
-- drop table users IF EXISTS;

INSERT INTO users (username, userType, firstName, lastName, googleId, email, badges)
VALUES ("dardin-dale", "admin", "Logan", "Crecraft", "5c3bcfc11f47fc8c57a5e868", "dardinsouffle@gmail.com", "basic");

INSERT INTO users (username, userType, firstName, lastName, googleId, email, badges)
VALUES ("hamburder", "basic", "dave", "hamberder", "5c3bcfc11f47fc8c57a5e868", "fakeyfake@gmail.com", "basic");

INSERT INTO users (username, userType, firstName, lastName, googleId, email, badges)
VALUES ("gaffney", "basic", "jeff", "foxworthy", "5c3bcfc11f47fc8c57a5e868", "applehorsepie@gmail.com", "basic");

INSERT INTO users (username, userType, firstName, lastName, googleId, email, badges)
VALUES ("ussrbotnet", "basic", "petrov", "usbladevik", "5c3bcfc11f47fc8c57a5e868", "bitiditls@gmail.com","basic");

INSERT INTO posts (title, context, userID)
VALUES ("crunchy peanutbutter is best", "there are several forms of peanutbutter. Stir vs. non-stir, refrigerated vs. non-refrigerated.", 1);

INSERT INTO posts (title, context, userID)
VALUES ("free will does not exist.", "discussion on whether or not choices exist or if life is predetermined.", 1);

INSERT INTO posts (title, context, userID)
VALUES ("Is wind power sustainable?", "Wind is dependent on weather, temperature, geography, and sunlight...", 1);

INSERT INTO posts (title, context, userID)
VALUES ("cats or doggos? what mo better?", "cats pee everywhere, dogs chew up stuff", 1);

INSERT INTO comments (content, isRebuttal, isChild, children, upVotes, downVotes, userID, postID)
VALUES ("Creamy peanut butter is best.", TRUE, FALSE,"3:5", 5, 2,1,1);

INSERT INTO comments (content, isRebuttal, isChild, children, upVotes, downVotes, userID, postID)
VALUES ("Crunchy peanut butter adds texture to the sammy.", FALSE, FALSE,"4", 5, 2,1,1);

INSERT INTO comments (content, isRebuttal, isChild, children, upVotes, downVotes, userID, postID)
VALUES ("Crunch tho...", TRUE, TRUE, "", 3, 2, 1, 1);

INSERT INTO comments (content, isRebuttal, isChild, children, upVotes, downVotes, userID, postID)
VALUES ("Creamy is easier to eat and doesn't get stuck in your teeth.", TRUE, TRUE, "", 2, 2, 1, 1);

INSERT INTO comments (content, isRebuttal, isChild, children, upVotes, downVotes, userID, postID)
VALUES ("creamy so good. like so good.", FALSE, TRUE,"", 4, 2, 1, 1);

INSERT INTO comments (content, isRebuttal, isChild, children, upVotes, downVotes, userID, postID)
VALUES ("Creamy for sauces, crunchy for sammiches", TRUE, FALSE,"", 2, 2, 1, 1);