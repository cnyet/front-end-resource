/**
 * 工厂模式 - 将对象的创建和对象的实现分离
 * 工厂 - 客户：客户只需知道产品名就可以从工厂获取对应的产品，不用关心产品的制造过程
 * 工厂只需要根据产品名制作产品就行了，工厂又可以将产品的制作抽象为子类，工厂类提供扩展产品的接口
 * 应用场景: document.createElement()
 */
class Factory {
  static getInstance(type) {
    switch(type) {
      case 'product1': 
        return new Product1();
      case 'product2': 
        return new Product2();
      default: 
        return new Error('without');
    }
  }
}

class Product1 {
  constructor() {
    this.name = 'product 1';
  }
  operate() {
    console.log(this.name);
  }
}

class Product2 {
  constructor() {
    this.name = 'product 2';
  }
  operate() {
    console.log(this.name);
  }
}

var prod1 = Factory.getInstance('product1');
prod1.operate();