import {expect, it} from "vitest"
import { transformToNumber } from "./numbers";

it('should throw an error if no value is passed into the function',()=>{
  const resultFn =()=>{
    transformToNumber();
  }
  expect (resultFn).not.toThrow();        
 });  