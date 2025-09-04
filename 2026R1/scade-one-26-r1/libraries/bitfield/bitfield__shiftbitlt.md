# ShiftBitLt

Returns the input with all bits shifted to the left by a number. The least significant bits \(right-most bit\) are replaced by 0 and the most significant bits \(left-most bit\) are discarded. This is equivalent to the operator lsl.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<\<N\>\>|Input bit-field|
|l|I|Integer|Number of bits to shift<br>Range: \[0, N\[|
|v|O|unsigned<\<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](./bitfield.md)

