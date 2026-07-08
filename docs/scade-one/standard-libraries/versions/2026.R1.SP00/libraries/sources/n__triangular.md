# Triangular

The flow varies linearly from 0 to 1 and then back to 0 for every number of cycles.

The figure shows the output flow for a triangular waveform with the following input:

-   cycles: 10
-   amplitude: 2
-   offset: -1

![](./../images/n__triangular_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|cycles|I|unsigned|Number of cycles for a period<br>Range: \> 1|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Parent topic:**[Sources::N](./sources_n.md)

