SELECT "g"."name" AS "genre",
COUNT("genreId") AS "numberOfFilms"
FROM "actors"
JOIN "castMembers" USING ("actorId")
JOIN "films" USING ("filmId")
JOIN "filmGenre" USING ("filmId")
JOIN "genres" AS "g" USING ("genreId")
WHERE "firstName" = 'Lisa'
AND "lastName" = 'Monroe'
GROUP BY "g"."name";
