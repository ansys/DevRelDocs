# AtLeastCond

Returns true if the input property has always been true before the first occurrence of the condition.

The following figure shows the output prop for the inputs p and c:

![At Least Until Condition](../images/check__atleastcond_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|Input property|
|c|I|bool|Input condition|
|prop|O|bool|Value of the property|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)