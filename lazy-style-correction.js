const fs = require('fs');
const path = require('path');

function removeHashInBundleCssFile(location, prefix) {
    const regex = new RegExp(`^${prefix}\..+\.bundle\.css$`);
    const files = fs.readdirSync(location);
    files.forEach(file => {
        if (!regex.test(file)) {
            return;
        }

        const oldPath = path.join(location, file);
        const newPath = path.join(location, `${prefix}.bundle.css`);
        console.log('Found:', oldPath);
        console.log('>>> Replacing to', newPath);
        fs.renameSync(oldPath, newPath);
    });
}

removeHashInBundleCssFile('./dist', 'compiled-theme-yellow');
removeHashInBundleCssFile('./dist', 'compiled-theme-green');



