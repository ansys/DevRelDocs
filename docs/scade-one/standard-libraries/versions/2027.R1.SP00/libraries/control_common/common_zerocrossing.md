# ZeroCrossing {#common_zerocrossing .sone-topic}

Returns whether the input flow crosses zero in a given direction or both.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|signal|I|numeric|Input signal|
|direction|I|Direction|Direction of the check, either RISING, FALLING or BOTH.<br>Default: BOTH|
|check|O|bool|Whether the flow crosses zero depending on the direction: <br>-   RISING: When the signal crosses from lower than zero to higher than zero<br>-   FALLING: When the signal crosses from higher than zero to lower than zero<br>-   BOTH: When the signal crosses zero in either direction|

