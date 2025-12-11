
-- Sample SQL cleaning and EDA snippets
-- 1) Remove duplicates
DELETE FROM layoffs
WHERE id NOT IN (SELECT MIN(id) FROM layoffs GROUP BY company, date, laid_off);

-- 2) Standardize company names
UPDATE layoffs SET company = INITCAP(TRIM(company));

-- 3) Convert date formats
ALTER TABLE layoffs ALTER COLUMN date TYPE DATE USING TO_DATE(date,'MM/DD/YYYY');

-- 4) Industry aggregation
SELECT industry, SUM(laid_off) AS total_laid_off
FROM layoffs
GROUP BY industry
ORDER BY total_laid_off DESC;
