# Bounds {#bounds .sone-topic}

Checks if the input signal is within an interval.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|signal|I|numeric|Signal to check|
|max|I|numeric|Upper bound|
|min|I|numeric|Lower bound|
|maxOpen|I|bool|Upper bound will be included|
|minOpen|I|bool|Lower bound will be included|
|check|O|bool|Result of the check|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)

