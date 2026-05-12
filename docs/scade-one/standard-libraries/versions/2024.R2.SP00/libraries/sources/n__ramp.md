# Ramp

The flow varies linearly from 0 to 1 for a number of cycles and then remains at 1.

The figure shows the output flow for a ramp with the following inputs:

-   cycles: 10
-   amplitude: 1
-   offset: 0

![](../images/n__ramp_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|cycles|I|unsigned|Number of cycles for the ramp<br>Range: \> 1|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Parent topic:**[Sources::N](../../libraries/sources/sources_n.md)

