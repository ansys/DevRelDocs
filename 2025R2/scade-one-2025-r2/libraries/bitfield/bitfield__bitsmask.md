# BitsMask {#bitsmask .sone-topic}

Returns a mask of a number of bits at the given position.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|p|I|integer|Start bit position

Range: \[0, N\[

|
|l|I|integer|Number of bits to set

Range: \[0, N-p\[

|
|mask|O|unsigned<<N\>\>|Resulting mask|

**Parent topic:**[Bitfield](../../libraries/bitfield/bitfield.md)

