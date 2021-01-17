const basicsJsTheoryTest = require('./src/basic-theory/test/1_basics-test').basicsJsTheoryTest;
const functionJsTheoryTest = require('./src/basic-theory/test/2_func-test').functionJsTheoryTest;
const arrayAndObjectJsTheory = require('./src/basic-theory/test/3_arrayAndObject-test').arrayAndObjectJsTheory;
const closuresJsTheoryTest = require('./src/basic-theory/test/4_closures-test').closuresJsTheoryTest
const objectAndConstructorsJsTheoryTest = require('./src/basic-theory/test/5_objectsAndConstructors-test').objectAndConstructorsJsTheoryTest

basicsJsTheoryTest()
functionJsTheoryTest()
arrayAndObjectJsTheory()
closuresJsTheoryTest()
objectAndConstructorsJsTheoryTest()