const fs = require('fs');

fs.writeFile('data.txt', 'Hello World!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  console.log('File written successfully');

  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log('File contents:', data);
  });
});

//promises code 
const fs1 = require('fs').promises;

async function writeAndReadFile() {
  try {
    await fs1.writeFile('data.txt', 'Hello World!');
    console.log('File written successfully');

    const data = await fs1.readFile('data.txt', 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

writeAndReadFile();
