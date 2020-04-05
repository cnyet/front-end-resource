## jest 测试用例 Expect
- .toBe(value) 浅层比较两个值是否相同
- .toEqual(value) 深层比较两个值是否相同
- .toBeNull() 检查值是否为 null，等同 .toBe(null)
- .toContain(item) 检查一个元素是否在数组中

## jest 测试用例 Methods
### test(name, fn, timeout)
test执行一个测试用例，name是测试用例的名字，fn是包含检测方法的的函数，timeout是执行的延迟时间，默认是5秒
```
const sum = require('./index.js');
test('sum测试用例', () => {
  expect(sum(1, 2)).toBe(3);
});
```

### describe(name, fn)
创建一个区域，将多个测试放在一起测试
```
const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
```
### test.each(table)(name, fn, timeout)
用多组数据测试同一个函数
```
test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});
```
### beforeAll(fn, timeout)
在测试之前执行的函数，如果返回一个promise对象，当promise.resolve()以后再执行测试
```
const globalDatabase = makeGlobalDatabase();
beforeAll(() => {
  return globalDatabase.clear().then(() => {
    return globalDatabase.insert({testData: 'foo'});
  });
});
test('can find things', () => {
  return globalDatabase.find('thing', {}, results => {
    expect(results.length).toBeGreaterThan(0);
  });
});
```