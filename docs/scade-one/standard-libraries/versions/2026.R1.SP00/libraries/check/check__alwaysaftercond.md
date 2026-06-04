# AlwaysAfterCond

Returns true while the input property has never been false after a condition becomes true.

The following figure shows the output prop for the inputs p and c:

![Always](./../images/check__alwaysaftercond_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|Input property|
|c|I|bool|Condition|
|prop|O|bool|Output property|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](./check.md)