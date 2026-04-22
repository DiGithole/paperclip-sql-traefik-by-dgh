const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/scripts/docker-entrypoint.sh'
];

filesToFix.forEach(file => {
  const filePath = path.resolve(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`Fixing line endings for ${file}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\r\n/g, '\n');
    fs.writeFileSync(filePath, content, { encoding: 'utf8', mode: 0o755 });
    console.log(`Done!`);
  } else {
    console.warn(`File not found: ${file}`);
  }
});
