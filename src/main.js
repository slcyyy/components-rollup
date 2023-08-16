import foo from './foo';
import { difference } from 'lodash-es';

export default function test(){
  const arr1 = [3,2,1];
  const arr2 = [4,2];
  console.log(foo.text)
  console.log(difference(arr1,arr2))
}

test()