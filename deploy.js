const fs = require('fs');
const path = require('path');

// Copy dist contents to root for GitHub Pages
const distPath = './dist';
const rootPath = './';

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean root of any previous deployment files
const rootFiles = fs.readdirSync(rootPath);
rootFiles.forEach(file => {
  if (file !== 'src' && file !== 'node_modules' && file !== '.git' && file !== 'package.json' && file !== 'package-lock.json' && file !== 'vite.config.js' && file !== 'eslint.config.js' && file !== 'README.md' && file !== 'deploy.js') {
    const filePath = path.join(rootPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(filePath);
    }
  }
});

// Copy dist contents to root
copyDir(distPath, rootPath);

console.log('Deployment files copied to root directory'); 