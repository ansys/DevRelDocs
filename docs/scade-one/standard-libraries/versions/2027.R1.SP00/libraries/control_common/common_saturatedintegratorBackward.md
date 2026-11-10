# SaturatedIntegratorBackward {#common_saturatedintegratorBackward .sone-topic}

Approximates the integral value of a signal using the Backward Euler method, applying the input value from the end of the sampling period and limits the output to configured bounds.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|float|Input|
|reset|I|bool|Reser flag|
|high|I|float|Upper output limit|
|low|I|float|Lower output limit|
|init|I|float|Initialization and reset value|
|dt|I|float|Integration step|
|raw|L|float|Output before saturation|
|y|O|float|Saturated output|
|saturation|O|bool|Saturation flag|


