# UpperBound

Checks if the input signal is less than the upper bound.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|signal|I|numeric|Signal to check|
|max|I|numeric|Upper bound|
|maxOpen|I|bool|Upper bound will be included|
|check|O|bool|Result of the check|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)

