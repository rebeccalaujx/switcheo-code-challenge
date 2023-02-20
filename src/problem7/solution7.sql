SELECT DISTINCT b.address
FROM (
  SELECT b.address,
    SUM(CASE 
      WHEN b.denom = 'usdc' THEN b.amount * 0.000001
      WHEN b.denom = 'swth' THEN b.amount * 0.00000005
      WHEN b.denom = 'tmz' THEN b.amount * 0.003
      ELSE b.amount 
    END) AS standardised_balance
  FROM balances b
  GROUP BY b.address
) b
JOIN trades t ON t.address = b.address
WHERE t.block_height > 730000 AND b.standardised_balance > 500;
