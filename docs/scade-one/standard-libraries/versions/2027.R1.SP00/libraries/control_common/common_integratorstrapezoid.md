# IntegratorTrapezoid {#common_integratorstrapezoid .sone-topic}

Approximates the integral value of a signal using the trapezoid method, applying the average of the current and previous input values.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|float|Input|
|reset|I|bool|Reset flag|
|init|I|float|Initialization and reset value|
|dt|I|float|Integration step|
|y|O|float|Output|


