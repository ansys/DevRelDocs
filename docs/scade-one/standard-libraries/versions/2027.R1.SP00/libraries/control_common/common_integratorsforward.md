# IntegratorForward {#common_integratorsforward .sone-topic}

Approximates the integral value of a signal using the Forward Euler method, applying the current input value over the sampling period.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|float|Input|
|reset|I|bool|Reset flag|
|init|I|float|Initialization and reset value|
|dt|I|float|Integration step|
|y|O|float|Output|


