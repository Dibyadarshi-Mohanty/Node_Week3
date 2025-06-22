const fs = require('fs').promises;

async function writeAndReadFile() {
  try {
    await fs.writeFile('data.txt', 'Hello World!');
    console.log('File written successfully');

    const data = await fs.readFile('data.txt', 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

writeAndReadFile();
