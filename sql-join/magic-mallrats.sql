SELECT "firstName", "lastName"
FROM "rentals"
JOIN "inventory" USING ("inventoryId")
JOIN "films" USING ("filmId")
JOIN "customers" USING ("customerId")
WHERE "films"."title" = 'Magic Mallrats';
