# ImpliesN

Returns the value of q during n cycles starting when p is true, otherwise true.

The following figure shows the output prop for the input p, q and 3 cycles:

![Implies N Cycles](../images/check__impliesn_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|First input property|
|q|I|bool|Second input property|
|n|I|unsigned|Number of cycles|
|prop|O|bool|Value of the property|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](./check.md)

