# SaturatedIntegratorTrapezoid {#common_saturatedintegratortrapezoid .sone-topic}

Approximates the integral value of a signal using the trapezoid method, applying the average of the current and previous input values and limits the output to configured bounds.

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

