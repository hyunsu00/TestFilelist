const fs = require("fs");

function getFiles (dir, files_){
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files){
      var name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()){
          getFiles(name, files_);
      } else {
          files_.push(name);
      }
  }
  return files_;
}

const files = getFiles('./public/libs');
let rFiles = [];
for (var i in files){
  // console.log(files[i]);
  rFiles.push(files[i].replace('./public', ''));
}
for (var i in rFiles){
  console.log(rFiles[i]);
}

fs.writeFileSync("123.txt", JSON.stringify(rFiles));

