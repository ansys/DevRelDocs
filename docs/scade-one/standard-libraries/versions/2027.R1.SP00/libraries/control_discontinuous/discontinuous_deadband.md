# DeadBand {#discontinuous_deadband .sone-topic}

Reduces the signal output to the offset value when the signal is within the deadband.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|x|I|numeric|Input signal|
|halfband|I|numeric|Half value of the deadband|
|offset|I|numeric|Center point of the deadband|
|y|O|numeric|Output signal|

