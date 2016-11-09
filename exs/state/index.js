var files = ["file.js", "log.txt", "test.scala", "data.json"];
var errors = [];

for (var i = 0; i < files.length; i++) {
    console.log(files[i], ": ", /^.+\.(js|json)$/.test(files[i]))
    if (!/^.+\.(js|json)$/.test(files[i])) {
        files.splice(i, 1);
        i--;
    }
}
