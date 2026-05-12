# IgnoreCond

Returns the input property as soon as the input condition turns to true, otherwise true.

The following figure shows the output prop for the inputs p and c:

![Ignore Until Condition](../images/check__ignorecond_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|Input property|
|c|I|bool|Condition|
|prop|O|bool|Output property|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)

