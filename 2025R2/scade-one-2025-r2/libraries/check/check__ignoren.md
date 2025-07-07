# IgnoreN {#ignoren .sone-topic}

Returns the input property after a given number of cycles, otherwise true.

The following figure shows the output prop for the input p and 3 cycles:

![Ignore Until N Cycles](../images/check__ignoren_00.svg)

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|Input property|
|n|I|unsigned|Number of cycles|
|prop|O|bool|Value of p after n cycles|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)

