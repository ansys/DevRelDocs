# ShiftBitRt

Returns the input with all bits shifted to the right by a number. The most significant bits \(left-most bit\) are replaced by 0 and the least significant bits \(right-most bit\) are discarded. This is equivalent to the operator lsr.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<\<N\>\>|Input bit-field|
|l|I|Integer|Number of bits to shift<br>Range: \[0, N\[|
|v|O|unsigned<\<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](../../libraries/bitfield/bitfield.md)

