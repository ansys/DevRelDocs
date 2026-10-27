# DigitalFilter {#filters_digitalfilter .sone-topic}

Implements a digital filter.

Implemented as the following recursive equation \(normalized by \):

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|I|N/A|Number of coefficients|
|x|I|numeric|Raw input signal|
|b|I|numeric^N|B coefficients|
|a|I|numeric^N|A coefficients A\[0\] can be equal to 1 if all the other coefficients are normalized.|
|y|O|numeric|Filtered output signal|

