# HitCrossing {#common_hitcrossing .sone-topic}

Returns whether the input flow crosses a value in a given direction or both.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|signal|I|numeric|Input signal|
|value|I|numeric|Value to hit|
|direction|I|Direction|Direction of the check, either RISING, FALLING or BOTH.<br>Default: BOTH|
|check|O|bool|Whether the flow crosses the value depending on the direction:<br>-   RISING: When the signal crosses from lower than value to higher than value<br>-   FALLING: When the signal crosses from higher than value to lower than value<br>-   BOTH: When the signal crosses the value in either direction|

