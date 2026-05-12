# RotBitLt

Returns the input with all bits rotated to the left by a number. The most significant bit is rotated to the least significant bit location for every single bit shift cycle.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<\<N\>\>|Input bit-field|
|l|I|Integer|Number of bits to rotate<br>Range: \[0, N\[|
|v|O|unsigned<\<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](../../libraries/bitfield/bitfield.md)

