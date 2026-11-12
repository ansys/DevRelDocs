# BandPass {#filters_bandpass .sone-topic}

Attenuates the input signal if its frequency is outside the chosen frequency band.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|numeric|Raw input signal.|
|f|I|numeric|Center Frequency of the Passband. Unit should be consistent with s and b.|
|s|I|numeric|Sampling Frequency. Unit should be consistent with f and b.|
|b|I|numeric|Frequency Passband. Unit should be consistent with f and s.|
|y|O|numeric|Filtered output signal.|

