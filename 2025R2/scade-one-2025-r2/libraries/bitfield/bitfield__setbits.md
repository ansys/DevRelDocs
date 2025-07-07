# SetBits {#setbits .sone-topic}

Returns the input with a number of bits set to either 0 or 1, starting at the given position.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<<N\>\>|Input bit-field|
|p|I|integer|Start bit position

Range: \[0, N\[

|
|l|I|integer|Number of bits to set

Range: \[0, N-p\[

|
|status|I|integer|Value to set to the selected bits

Range: \[0, 1\]

|
|v|O|unsigned<<N\>\>|Result of the operation|

**Parent topic:**[Bitfield](../../libraries/bitfield/bitfield.md)

