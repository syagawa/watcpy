const makeObj = function(argv){
  return {
    argv: argv,
    get working_dir(){
      if(this.argv.wdir){
        return argv.wdir;
      }else{
        return ".";
      }
    },
    get dist_dir(){
      if(this.argv.ddir){
        return argv.ddir;
      }else{
        return "dist";
      }
    },
    get exts(){
      if(this.argv.exts){
        return argv.exts.split(",");
      }else{
        return [
          ".psd",
          ".ai",
          ".xls",
          ".xlsx",
          ".doc",
          ".docx"
        ];
      }
    },
    get num_pad(){
      if(argv.numpad){
        let num = Number(argv.numpad);
        if(Number.isInteger(num)){
          if(num > this.max_num_pad){
            num = this.max_num_pad;
          }
          return num;
        }
      }else{
        return 5;
      }
    },
    get max_num_pad(){
      return 20;
    },
    get mode(){
      let res = "number";
      if(argv.datetimer || argv.mode === "datetimer"){
        res = "datetimer";
      }
      if(argv.number || argv.mode === "number"){
        res = "number";
      }
      return res;
    },
    get recursive(){
      if(argv.recursive || argv.r){
        return true;
      }
      return false;
    },
    get clean_before_start(){
      if(argv.clean){
        return true;
      }
      return false;
    }
  }
};

module.exports = makeObj;