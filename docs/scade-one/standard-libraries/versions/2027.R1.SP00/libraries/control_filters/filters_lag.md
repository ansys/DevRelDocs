# Lag {#filters_lag .sone-topic}

Adds a lag to the phase response of the input signal.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|numeric|Raw input signal|
|frac|I|numeric|Fraction of the input change. Values close to 1 provide a faster response|
|resp|I|numeric|Response time constant|
|dt|I|numeric|Sampling period \(in seconds\)|
|y|O|numeric|Filtered output signal|

