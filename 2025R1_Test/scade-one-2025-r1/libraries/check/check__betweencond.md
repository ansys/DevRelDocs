# BetweenCond

Returns false if p has not been true after the start condition is true and before the end condition is true.

The following figure shows the output prop for the inputs p, s and e:

![Between Conditions](../images/check__betweencond_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|Input property|
|s|I|bool|Start condition input|
|e|I|bool|End condition input|
|prop|O|bool|Value of the property|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)

