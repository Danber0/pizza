const obj = {
  name: '123',
  method() {
    console.log(this.name);
    return true;
  },
};

var f = obj.method();

obj.method();
console.log(f);
