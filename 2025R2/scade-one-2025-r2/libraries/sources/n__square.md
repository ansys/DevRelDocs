# Square

The flow is 0 the first half of the interval and 1 the second half for every number of cycles.

The figure shows the output flow for a square waveform with the following inputs:

-   cycles: 10
-   amplitude: 2
-   offset: -1

![](../images/n__square_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|cycles|I|unsigned|Number of cycles for a period<br>Range: \> 1|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Parent topic:**[Sources::N](./sources_n.md)

