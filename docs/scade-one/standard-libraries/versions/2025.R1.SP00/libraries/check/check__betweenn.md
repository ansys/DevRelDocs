# BetweenN

Returns false if p has not been true within the next n cycles once c becomes true.

The following figure shows the output prop for the input p, c and 3 cycles:

![Between N Cycles](../images/check__betweenn_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|Input property|
|c|I|bool|Input condition|
|n|I|unsigned|Number of cycles|
|prop|O|bool|Value of the property|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](./check.md)

