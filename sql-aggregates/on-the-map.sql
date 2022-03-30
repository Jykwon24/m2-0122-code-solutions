SELECT "c"."name" AS "country",
COUNT("countryId") AS "numberOfCities"
FROM "countries" AS "c"
JOIN "cities" USING ("countryId")
GROUP BY "c"."countryId"
