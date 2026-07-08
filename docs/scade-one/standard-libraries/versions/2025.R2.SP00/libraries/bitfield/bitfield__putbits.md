# PutBits

Returns the input with a number of bits of the pattern copied at the given position.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<\<N\>\>|Input bit-field|
|p|I|integer|Start bit position<br>Range: \[0, N\[|
|l|I|integer|Number of bits to set<br>Range: \[0, N-p\[|
|pattern|I|unsigned<\<N\>\>|Pattern to be set|
|v|O|unsigned<\<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](./bitfield.md)

