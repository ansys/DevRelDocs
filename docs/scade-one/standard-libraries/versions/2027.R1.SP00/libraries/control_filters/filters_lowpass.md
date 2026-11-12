# LowPass {#filters_lowpass .sone-topic}

Attenuates the input signal if its frequency is greater than the chosen cut-off frequency.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|numeric|Raw input signal|
|dt|I|numeric|Sampling period \(in seconds\)|
|wc|I|numeric|Cut-off frequency \(in Hz\)|
|y|O|numeric|Filtered output signal|

