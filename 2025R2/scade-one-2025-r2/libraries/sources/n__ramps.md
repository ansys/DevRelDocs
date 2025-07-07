# Ramps {#n__ramps .sone-topic}

The flow is the sequence of an array of ramps. Each ramp is defined by a number of cycles, an amplitude, and an offset.

The figure shows the output flow for a sequence of 3 ramps with the following inputs:

-   cycles: \[5, 15, 5\]
-   amplitudes: \[1.8, -1.4, 1.0\]
-   offsets: \[-0.8, 1.0, -0.4\]

![](../images/n__ramps_00.svg)

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|SIZE|P|n/a|Number of ramps|
|cycles|I|unsigned ^ SIZE|Number of cycles for each ramp

Range: \>1

|
|amplitudes|I|float ^ SIZE|Gain to be applied to the output flow of each ramp \(default 1 ^ SIZE\)|
|offsets|I|float ^ SIZE|Offset to be added to the output flow of each ramp \(default 0 ^ SIZE\)|
|flow|O|float|Output flow|

**Parent topic:**[Sources::N](../../libraries/sources/sources_n.md)

