# Pwm {#n__pwm .sone-topic}

The flow of Pulse-Width Modulation is 1 during the first part of the period and 0 during the second one for every number of cycles. The length of the part is defined by the duty cycle, from 0% to 100% of the period.

The figure shows the output flow for a PWM with the following inputs:

-   cycles: 10
-   dutyCycle: 0.7 \(70%\)
-   amplitude: 1
-   offset: 0

![](../images/n__pwm_00.svg)

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|cycles|I|unsigned|Number of cycles for a period

Range: \> 1

|
|dutyCycle|I|float|Switch reference value for on power, expressed in percent, 100% being fully on.

Range: \[0, 1\]

|
|amplitude|I|float|Gain to be applied to the output flow \(default 1\)|
|offset|I|float|Offset to be added to the output flow \(default 0\)|
|flow|O|float|Output flow|

**Parent topic:**[Sources::N](../../libraries/sources/sources_n.md)

