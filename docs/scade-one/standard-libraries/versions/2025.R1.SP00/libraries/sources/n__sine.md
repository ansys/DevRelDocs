# Sine

The flow is a sinusoidal waveform with an optional delay, sampled with several cycles.

The figure shows the output flow for a sine with the following inputs:

-   cycles: 10
-   delay: 0
-   amplitude: 1
-   offset: 0

![](../images/n__sine_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|cycles|I|unsigned|Number of cycles for a period<br>Range: \> 1|
|delay|I|unsigned|Delay of the signal<br>Unit: cycles|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Parent topic:**[Sources::N](./sources_n.md)

