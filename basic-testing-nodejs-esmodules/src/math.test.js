import {expect, it} from "vitest"
import { add } from "./math";

it('should summarize all number valus in an array',()=>{
//Arrange
  const numbers=[1,2,3]
// ACt
const result=  add(numbers);
//Assert
const expectedResult = numbers.reduce((prevValue, curValue)=>prevValue+curValue,0);
expect(result).toBe(expectedResult)
});

it('should yield NaN if a least one invalid number is provided',()=>{
  //Arrange
    const inputs=['invalid',2]
  // ACt
  const result=  add(inputs);
  //Assert
 // const expectedResult = numbers.reduce((prevValue, curValue)=>prevValue+curValue,0);
  expect(result).toBeNaN();
  });

  it('should yield a correct sum if an array of numeric string values is provided',()=>{
    //Arrange
    const numbers=['1','2']
    // ACt
    const result=  add(numbers);
    //Assert
    const expectedResult = numbers.reduce((prevValue, curValue)=> +prevValue + +curValue,0);
    expect(result).toBe(expectedResult);
    });

    it('should yield 0 if an empty array is provided',()=>{
      //Arrange
      const numbers=[]
      // ACt
      const result=  add(numbers);
      //Assert
      //const expectedResult = numbers.reduce((prevValue, curValue)=> +prevValue + +curValue,0);
      expect(result).toBe(0);
      });

    it('should throw an error if no value is passed into the function',()=>{
     const resultFn =()=>{
      add();
     }
     expect (resultFn).not.toThrow();        
    });  
  
    it('should throw an error if provided with multiple argum',()=>{
      
      const num1 =1;
      const num2 =2;

      const resultFn =()=>{
       add(num1,num2);
      }
      expect (resultFn).toThrow(/is not iterable/);        
     });  
