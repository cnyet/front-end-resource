class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
      this.hello = m;
  }
  great = function () {
    return 'Greater';
  }
  static getName() {
    console.log('getName')
  }
}

class Greet {
  constructor() {
    Greeter.call(this, 123);
  }
}

class Combine extends Greet {
  name = '合并';
}

console.log(new Combine());

