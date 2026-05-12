# CopyBit

Returns the input with the bit at the given position copied from the source at another position.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<\<N\>\>|Input bit-field|
|p|I|integer|Bit position<br>Range: \[0, N\[|
|sbf|I|unsigned<\<N\>\>|Source bit-field|
|sp|I|integer|Source bit position<br>Range: \[0, N\[|
|v|O|unsigned<\<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](../../libraries/bitfield/bitfield.md)

