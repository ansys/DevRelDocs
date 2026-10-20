# HighPass {#filters_highpass .sone-topic}

Attenuates the input signal if its frequency is lower than the chosen cut-off frequency.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|numeric|Raw input signal|
|dt|I|numeric|Sampling period \(in seconds\)|
|wc|I|numeric|Cut-off frequency \(in Hz\)|
|y|O|numeric|Filtered output signal|

