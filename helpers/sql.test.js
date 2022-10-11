const jwt = require("jsonwebtoken");
const { sqlForPartialUpdate } = require("./sql");
const { BadRequestError } = require("../expressError");

const obj = {firstName: 'Aliya', age: 32}; 
const jsToSqlData = {other: "John"};
const emptyObject = {};

describe("sqlForPartialUpdate", function () {
  test("It should return a valid result", function () {
   
    const result = sqlForPartialUpdate(obj, jsToSqlData);
    expect(result.setCols).toEqual("\"firstName\"=$1, \"age\"=$2");
    expect(result.values).toEqual(["Aliya", 32]);
    });
});

describe("returns error for empty object", function (){
    test("it should throw an error", function(){
        try{
            sqlForPartialUpdate(emptyObject, jsToSqlData);
        }catch(e){
            expect(e instanceof BadRequestError).toBeTruthy();
        }
    })
})


