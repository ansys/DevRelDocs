# CheckSlope {#common_checkslope .sone-topic}

Returns whether the absolute value of the input flow slope is less than a maximal value.

This corresponds to the operator [Gradient](../check/check__gradient.md) from the library Check.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|input|I|numeric|Input value|
|min|I|numeric|The minimum value of the range|
|max|I|numeric|The maximum value of the range|
|check|O|bool|Whether input is within min and max|


