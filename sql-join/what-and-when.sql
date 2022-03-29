SELECT "releaseYear",
"genres"."name",
"title"
FROM "filmGenre"
JOIN "genres" USING ("genreId")
JOIN "films" USING ("filmId")
WHERE "films"."title" = 'Boogie Amelie'
