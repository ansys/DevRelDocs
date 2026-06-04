# ToggleBitMask

Returns the input with the bits toggled when the corresponding bit of the mask is 1 and the remaining bits will retain their original values. This is equivalent to the operator lxor.

## Interface

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<\<N\>\>|Input bit-field|
|mask|I|unsigned<\<N\>\>|Mask used to toggle the bits|
|v|O|unsigned<\<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](./bitfield.md)

