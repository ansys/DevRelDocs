# BoundedEventCountDown

Decreases the count by one at each cycle when the input is down to a limit value.

When the limit value is reached, the output is held at this value and the sat flag is raised.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|in|I|bool|Observed flow|
|init|I|integer|Counter Initialization value|
|limit|I|integer|Counter limit|
|count|O|integer|Rising edge count|
|sat|O|bool|Saturation flag|

**Parent topic:**[Flows](../../libraries/flows/flows.md)

