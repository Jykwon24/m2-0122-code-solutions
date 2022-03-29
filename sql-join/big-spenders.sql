SELECT "firstName",
"lastName",
"amount"
FROM "payments"
JOIN "customers" USING ("customerId")
ORDER BY "amount" DESC
LIMIT 10;
