const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'app', 'scripts', 'docker-entrypoint.sh');
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\r\n/g, '\n');
  fs.writeFileSync(file, content, { encoding: 'utf8', mode: 0o755 });
  console.log('Fixed line endings and permissions for docker-entrypoint.sh');
} else {
  console.error('File not found:', file);
}
