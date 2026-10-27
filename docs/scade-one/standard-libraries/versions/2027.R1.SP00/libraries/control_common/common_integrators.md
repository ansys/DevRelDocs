# IntegratorBackward {#common_integrators .sone-topic}

Approximates the integral value of a signal using the Backward Euler method, applying the input value from the end of the sampling period.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|float|Input|
|reset|I|bool|Reset flag|
|init|I|float|Initialization and reset value|
|dt|I|float|Integration step|
|y|O|float|Output|


