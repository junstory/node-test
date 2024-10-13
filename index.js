
const fs = require("fs-extra");
const markdown = require('markdown-it')();
(async function () {
    console.log("Converting Markdown to HTML...");
  
    // markdown source
    const content = await fs.readFile("./content/index.md", "utf8");
  
    // converted to HTML
    const rendered = await markdown.render(content);

    console.log(rendered);
  })();