# SetBitMask {#setbitmask .sone-topic}

Returns the input with the bits set to 1 as per the corresponding Mask bits when set to value 1 and the remaining bits will retain their original values. This is equivalent to the operator lor.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<<N\>\>|Input bit-field|
|mask|I|unsigned<<N\>\>|Mask used to set the bits|
|v|O|unsigned<<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](../../libraries/bitfield/bitfield.md)

