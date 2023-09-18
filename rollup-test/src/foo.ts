import {difference} from 'lodash-es';

export const foo = 'hello world'

export const log = (name:string) => {
  // 写一条注释
  let arr = [1,2,3];
  arr.push(4);
  console.log(name)
  return difference(arr,[5])
}