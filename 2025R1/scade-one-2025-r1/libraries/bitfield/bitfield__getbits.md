# GetBits

Returns a number of bits for the input starting at the given position.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<\<N\>\>|Input bit-field|
|p|I|integer|Start bit position<br>Range: \[0, N\[|
|l|I|integer|Number of bits to get<br>Range: \[0, N-p\[|
|v|O|unsigned<\<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](./bitfield.md)

