const { exec } = require("child_process")
const fs = require("fs")

indexhtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google" value="notranslate">
    <link rel="shortcut icon" href="static/favicon.ico">
    <title>Scratch 3.0 GUI</title>
    
    <meta name="og:site_name" content="미니스크래치">
    <meta property="og:title" content="MiniScratch">
    <meta property="og:description" content="다양한 확장 기능 체험.">
    <meta name="theme-color" content="#6bedd4">
    <meta name="theme-color" content="#f7a31f">
    <meta property="og:image" content="https://media.discordapp.net/attachments/737138407498580061/763322724960567296/memed-io-output_1.jpeg?width=608&height=683">
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-179978164-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-179978164-1');
    </script>

    
  </head>
  <body>
  <script type="text/javascript" src="lib.min.js"></script><script type="text/javascript" src="chunks/gui.js"></script></body>
</html>`

repo = 'https://' + process.env.GH_TOKEN + '@github.com/minibox24/Scratch.git'
cmd = `gh-pages -t -d build -b build --repo ${repo} -m "Build for $(git log --pretty=format:%H -n1)"`

exec("touch build/.nojekyll", (error, stdout, stderr) => {
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

fs.writeFile('build/CNAME', 'scratch.minibox.xyz', (error) => {console.log(`error: ${error}`)})
fs.writeFile('build/index.html', indexhtml, (error) => {console.log(`error: ${error}`)})

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
