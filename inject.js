const fs = require("fs");
const glob = require("glob");

let template = fs.readFileSync("template/template.html", "utf-8");

glob("markdown/*.md", function (err, files) {
  if(err) {
    console.log(err);
  }
  files.sort();
  let mds = [];
  for(file of files) {
    mds.push(fs.readFileSync(file, "utf-8"));
    console.log(file);
  }
  let to = template.replace(/\${md}/, mds.join("\n---\n"));
  fs.writeFileSync("public/index.html", to);
});

