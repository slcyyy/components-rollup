import foo from './foo.js';
import difference$1 from './node_modules/lodash-es/difference.js';

function test(){
  const arr1 = [3,2,1];
  const arr2 = [4,2];
  console.log(foo.text);
  console.log(difference$1(arr1,arr2));
}

test();

export { test as default };
