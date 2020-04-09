/**
 * 装饰者模式
 * 在不改变原有对象的基础上，对其添加属性和方法进行扩展，使原有对象具有更多功能
 */
class House {
  constructor(name) {
    this.name = name;
  }
  getDesc() {
    console.log('原始样子');
  }
}

class Furniture {
  constructor(house) {
    this.house = house;
  }
  getDesc() {
    this.house.getDesc();
    console.log('搬入家具');
  }
}

let house = new House('房子');
house = new Furniture(house);

house.getDesc();