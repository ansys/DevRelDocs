# Split {#split .sone-topic}

Returns the input split in two parts.

## Interface { .section}

|Name|Kind|Type|Comment|
|----|:--:|----|-------|
|N|P|N/A|Size of the bit-field|
|bf|I|unsigned<<N\>\>|Input bit-field|
|bl|O|unsigned<<N/2\>\>|Least significant bits|
|bh|O|unsigned<<N/2\>\>|Most significant bits|

**Parent topic:**[Bitfield](../../libraries/bitfield/bitfield.md)

