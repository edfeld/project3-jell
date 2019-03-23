# project3-jell - elevate debate

1. A website dedicated to raising the level of debate in the country.

The target audience for this web site is people interested in serious debate and those that want to learn about debate and debate topics.

This web site is built with MySQL, Express, React and Node.js, Google Authentication
& Socket IO.

The starter kit used Mongo but for this project it was converted to MySQL.  The relational model seemed to be the best solution for the Elevate Debate DB structure.

Google Authentication allows users to login in with their Google accounts.

Socket IO allow debates on each Debate topic(resolution).

1) The Home page shows all open debates

2) The Top Debates page shows debates ordered by Up votes.   Aggregation with Agreement and Disagreement is a future task.

3) The Post page shows the debate Resolution(Topic), Agreements, Disagreements, and rebuttals on both sides.  The user can create a Agreement, Disagreement or Comments with a modal box on the page.
    Future functionality:
    a) Have Agreements and disagreements listed side by side.