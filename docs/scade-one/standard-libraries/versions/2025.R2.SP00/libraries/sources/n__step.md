# Step

The flow is 0 for a number of cycles and then remains at 1.

The figure shows the output flow for a step with the following inputs:

-   cycles: 10
-   amplitude: 1
-   offset: 0

![](../images/n__step_00.svg)

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|cycles|I|unsigned|Number of cycles for the step<br>Range: \> 1|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Parent topic:**[Sources::N](./sources_n.md)

