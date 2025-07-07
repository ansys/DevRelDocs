# Triangular {#t__triangular .sone-topic}

The flow varies linearly from 0 to 1 and then back to 0 at every period.

The figure shows the output flow for a triangular waveform with the following input:

-   period: 1
-   ts \(timesample\): 0.1
-   amplitude: 2
-   offset: -1

![](../images/t__triangular_00.svg)

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|period|I|float|Value of the period

Range: \>0

|
|ts|I|float|Time sample during the period

Range: \>0

|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Constraint**: The ratio period / ts must be greater than 2.

**Parent topic:**[Sources::T](../../libraries/sources/sources_t.md)

