const { exec } = require("child_process")

repo = 'https://' + process.env.GH_TOKEN + '@github.com/minibox24/Scratch.git'
cmd = `gh-pages -t --branch l10n-build --repo ${repo} -m "Build for $(git log --pretty=format:%H -n1)"`


exec(cmd, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})
