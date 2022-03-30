SELECT "firstName", "lastName",
SUM("amount") AS "totalSpent"
FROM "payments"
JOIN "customers" USING ("customerId")
GROUP BY "firstName", "lastName"
ORDER BY "totalSpent" DESC;
