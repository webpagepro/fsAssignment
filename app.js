const fs = require('fs');
/*
fs.readFile("./challenge1/info.txt", "utf8", (data, err) =>
{
    if(err){      
      console.log(err);
} else{
    console.log(data);
}
});

let file = fs.readFileSync("./challenge2/info.txt", "utf8");

let textAdd = "\nthis is what i added";
fs.appendFile("./challenge2/info.txt", textAdd, "utf8", (data, err) => {
    if(err){      
        console.log(err);
  } else{
      console.log(data);
  }
});


fs.rename("./challenge3/binfo.txt", "./challenge3/info.txt", (data, err) => {
    if(err){      
        console.log(err);
  } else{
      console.log(data);
  }
});



fs.copyFile("./challenge4/info.txt", "./challenge4/info_copied.txt", (err) => {
    if (err) {throw err;
    console.log('source.txt was copied to destination.txt');
    }
});


let data = fs.readFileSync("./challenge5/info.txt", "utf8");
let newData = "";
for(let i = 0; i < data.length; i++){
  if(data[i] === '-'){
    newData += " ";
  }else{
    newData += data[i];
  }
}
fs.writeFileSync("./challenge5/info.txt", newData);

*/
let files;
fs.readdir("./challenge6/", (data, err) => {
    if(err){
        console.log(err);
      }else{
          files = data;
          let txtFiles = [];
          for(let i = 0; i < files.length; i++){
              if(files.endsWith(".txt")){
                 txtFiles.push(files[i]);
              }
            }
        }
    });