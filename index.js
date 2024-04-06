const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(10); //saltRound = 10, higher ~ complexity
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};


//we save hashed pw with salt in DB, not plain text.
//Compare method compares, plain pw and resulting hashedPw is same.
const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw); //compare methods
    if (result) {
        console.log("logged in");
    } else {
        console.log("incorrect");
    }
};



login("monkey","$2b$10$hf58DCW/n7/J/RAnq9maxOBDOKBALn/CpG0.cW.zoiWDG6bFzCN9C");