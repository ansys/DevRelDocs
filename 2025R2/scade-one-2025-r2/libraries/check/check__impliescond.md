# ImpliesCond {#impliescond .sone-topic}

Returns the value of q until c is true starting when p is true, otherwise true.

The following figure shows the output prop for the inputs p, q and c:

![Implies Until Condition](../images/check__impliescond_00.svg)

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|p|I|bool|First input property|
|q|I|bool|Second input property|
|c|I|bool|Input condition|
|prop|O|bool|Value of the property|

**Constraint**: The ratio period / timeSample must be greater than 2.

**Parent topic:**[Check](../../libraries/check/check.md)

