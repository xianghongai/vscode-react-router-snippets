// https://stackoverflow.com/a/40022630
import fs from 'node:fs';
import { glob } from 'glob';

const outputPath = './snippets/';

const options = [
  {
    path: 'src/**/*.json',
    filename: 'javascript',
  },
];

function handler(files, filename) {
  try {
    const output = {};

    fs.existsSync(outputPath) || fs.mkdirSync(outputPath);

    fs.accessSync(outputPath, fs.constants.R_OK | fs.constants.W_OK);

    files.forEach((file) => {
      console.log('filename: %o', file);
      const contents = JSON.parse(fs.readFileSync(file, 'utf8'));
      Object.assign(output, contents);
    });

    fs.writeFileSync(
      `${outputPath}${filename}.json`,
      JSON.stringify(output, null, 4)
    );

    console.log(`Complete! :)`);
  } catch (err) {
    console.error(err);
    console.error(
      `${outputPath} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`
    );
    console.log('Failed! :(');
    throw err;
  }
}

async function init() {
  for (const { path, filename } of options) {
    let files;
    try {
      files = await glob(path);
    } catch (err) {
      console.error('Glob failed:', err);
      process.exit(1);
    }

    try {
      handler(files, filename);
    } catch (err) {
      console.error('Merge failed:', err);
      process.exit(1);
    }
  }
}

init().catch((err) => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
