# Sawtooth {#n__sawtooth .sone-topic}

The flow varies linearly \(by default, from 0 to 1\) for every number of cycles.

The figure shows the output flow for a sawtooth waveform with the following inputs:

-   cycles: 10
-   amplitude: 1
-   offset: 0

![](../images/n__sawtooth_00.svg)

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|cycles|I|unsigned|Number of cycles for a period

Range: \> 1

|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Parent topic:**[Sources::N](../../libraries/sources/sources_n.md)

