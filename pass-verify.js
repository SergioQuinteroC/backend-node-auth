const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$v2xdNuwpDIYasyAspo.o5eeyrEjSycU6fsra2BOXM2d7vUn3Nh.2W';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
