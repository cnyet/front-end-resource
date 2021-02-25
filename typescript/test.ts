function greet(params: any) {
  console.log(params);
}

@greet
class Foo {
  name: string;
  constructor (name: string) {
    this.name = name;
  }
}

var foo = new Foo('hello');
console.log(foo);