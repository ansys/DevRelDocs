# Gradient

Checks if the absolute value of the input signal gradient is less than a maximum value.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|signal|I|numeric|Signal to check|
|max|I|numeric|Maximum value of the gradient|
|check|O|bool|Result of the check|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](./check.md)

