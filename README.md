npm init -y
npm i bcrypt 
Salt adds randomness 
SaltRound adds complexity, and higher number takes longer time to complete
We save hashed pw with salt in DB, not plain text.
Compare method compares, plain pw and resulting hashedPw is same.