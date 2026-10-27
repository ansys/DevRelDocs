# SecondOrderSeries {#filters_secondorderseries .sone-topic}

Cascaded second-order structure sections filter.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Number of coefficients|
|x|I|numeric|Raw input signal|
|b|I|numeric^3^N|B coefficients|
|a|I|numeric^3^N|A coefficients<br>A\[0\] can be equal to 1 if all the other coefficients are normalized.|
|y|O|numeric|Filtered output signal|
