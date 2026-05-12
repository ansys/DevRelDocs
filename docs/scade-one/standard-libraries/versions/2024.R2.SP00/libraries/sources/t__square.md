# Square

The flow is 0 the first half of the interval and 1 the second half for every period.

The figure shows the output flow for a square waveform with the following inputs:

-   period: 1
-   ts \(timesample\): 0.1
-   amplitude: 2
-   offset: -1

![](../images/t__square_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|period|I|float|Value of the period<br>Range: \>0|
|ts|I|float|Time sample during the period<br>Range: \>0|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Constraint**: The ratio period / ts must be greater than 2.

**Parent topic:**[Sources::T](../../libraries/sources/sources_t.md)

