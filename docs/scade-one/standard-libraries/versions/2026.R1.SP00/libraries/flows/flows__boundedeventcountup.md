# BoundedEventCountUp

Increases the count by one at each cycle when the input is up to a limit value.

When the limit value is reached, the output is held at this value and the sat flag is raised.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|init|I|integer|Counter Initialization value|
|limit|I|integer|Counter limit|
|in|I|bool|Observed flow|
|count|O|integer|Rising edge count|
|sat|O|bool|Saturation flag|

**Parent topic:**[Flows](./flows.md)