SELECT "line1",
"city"."name",
"district",
"country"."name" as "country"
FROM "addresses"
JOIN "cities" as "city" USING ("cityId")
JOIN "countries" as "country" USING("countryId")
