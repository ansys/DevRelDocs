# Gap

Checks if the input signal is out of an interval.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|signal|I|numeric|Signal to check|
|max|I|numeric|Upper gap|
|min|I|numeric|Lower gap|
|maxOpen|I|bool|Upper gap will be included|
|minOpen|I|bool|Lower gap will be included|
|check|O|bool|Result of the check|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)

