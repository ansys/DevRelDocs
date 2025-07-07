# PutBit

Returns the input with the bit set to 1 if status, otherwise 0, at the given position.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<\<N\>\>|Input bit-field|
|p|I|integer|Bit position<br>Range: \[0, N\[|
|status|I|bool|Specify whether the bit is to be set or cleared|
|v|O|unsigned<\<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](./bitfield.md)

