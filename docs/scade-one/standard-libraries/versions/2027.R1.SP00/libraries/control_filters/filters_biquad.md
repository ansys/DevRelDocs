# BiQuad {#filters_biquad .sone-topic}

Second-order recursive filter.

Implemented as the following recursive equation \(normalized by \):

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Number of coefficients|
|input|I|numeric|Raw input signal|
|b|I|numeric^3|B coefficients|
|a|I|numeric^3|A coefficients<br>A\[0\] can be equal to 1 if all the other coefficients are normalized.|
|output|O|numeric|Filtered output signal|

