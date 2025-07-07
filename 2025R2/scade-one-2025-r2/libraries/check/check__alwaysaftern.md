# AlwaysAfterN

Returns true while the input property has never been false after a given number of cycles.

The following figure shows the output prop for the input p and 3 cycles:

![Always After N Cycles](../images/check__alwaysaftern_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|Input property|
|n|I|unsigned|Number of cycles|
|prop|O|bool|Output property|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](./check.md)