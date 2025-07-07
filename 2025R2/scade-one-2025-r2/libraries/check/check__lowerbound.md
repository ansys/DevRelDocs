# LowerBound {#lowerbound .sone-topic}

Checks if the input signal is greater than the lower bound.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|signal|I|numeric|Signal to check|
|min|I|numeric|Lower bound|
|minOpen|I|bool|Lower bound will be included|
|check|O|bool|Result of the check|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)

