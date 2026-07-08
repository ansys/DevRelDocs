# Bitfield

The BitField library provides a set of operations on arrays of bits or integers seen as array of bits, with conversion from/to array of Boolean values. It also provides operators to make/split bit-fields from/to bytes.

|Operator Name|Description|
|-------------|-----------|
|[BitsMask](bitfield__bitsmask.md)|Returns a mask of a number of bits at the given position.|
|[ClrBit](bitfield__clrbit.md)|Returns the input with the bit set to 0 at the given position.|
|[ClrBitMask](bitfield__clrbitmask.md)|Returns the input with the bits set to 0 as per the corresponding Mask bits when set to value 1 and remaining bits will retain their original values.|
|[CopyBit](bitfield__copybit.md)|Returns the input with the bit at the given position copied from the source at another position.|
|[FromBool](bitfield__frombool.md)|Returns a bit-field from an array of Boolean values.|
|[FromByte](bitfield__frombyte.md)|Returns a bit-field from an array of bytes.|
|[GetBit](bitfield__getbit.md)|Returns whether the bit at the given position of the input is 1.|
|[GetBits](bitfield__getbits.md)|Returns a number of bits for the input starting at the given position.|
|[High](bitfield__high.md)|Returns the bit-field with the most significant bits of the input.|
|[Low](bitfield__low.md)|Returns the bit-field with the least significant bits of the input.|
|[Make](bitfield__make.md)|Returns a bit-field from the concatenation of two bit-fields.|
|[PutBit](bitfield__putbit.md)|Returns the input with the bit set to 1 if status, otherwise 0, at the given position.|
|[PutBits](bitfield__putbits.md)|Returns the input with a number of bits of the pattern copied at the given position.|
|[PutBitsMask](bitfield__putbitsmask.md)|Returns the input with the bits from pattern copied, with respect to a mask.|
|[RotBitLt](bitfield__rotbitlt.md)|Returns the input with all bits rotated to the left by a number. The most significant bit is rotated to the least significant bit location for every single bit shift cycle.|
|[RotBitRt](bitfield__rotbitrt.md)|Returns the input with all bits rotated to the right by a number. The least significant bit is rotated to the most significant bit location for every single bit shift cycle.|
|[SetBit](bitfield__setbit.md)|Returns the input with the bit set to 1 at the given position.|
|[SetBitMask](bitfield__setbitmask.md)|Returns the input with the bits set to 1 as per the corresponding Mask bits when set to value 1 and the remaining bits will retain their original values. This is equivalent to the operator lor.|
|[SetBits](bitfield__setbits.md)|Returns the input with a number of bits set to either 0 or 1, starting at the given position.|
|[ShiftBitLt](bitfield__shiftbitlt.md)|Returns the input with all bits shifted to the left by a number. The least significant bits \(right-most bit\) are replaced by 0 and the most significant bits \(left-most bit\) are discarded. This is equivalent to the operator lsl.|
|[ShiftBitRt](bitfield__shiftbitrt.md)|Returns the input with all bits shifted to the right by a number. The most significant bits \(left-most bit\) are replaced by 0 and the least significant bits \(right-most bit\) are discarded. This is equivalent to the operator lsr.|
|[Split](bitfield__split.md)|Returns the input split in two parts.|
|[ToBool](bitfield__tobool.md)|Returns an array of Boolean values from the input.|
|[ToByte](bitfield__tobyte.md)|Returns an array of bytes from the input.|
|[ToggleBitMask](bitfield__togglebitmask.md)|Returns the input with the bits toggled when the corresponding bit of the mask is 1 and the remaining bits will retain their original values. This is equivalent to the operator lxor.|
|[ToggleBits](bitfield__togglebits.md)|Returns the input with all bits toggled: 0 replaced by 1 and vice versa. This is equivalent to the operator lnot.|
|[TstBitLnMask](bitfield__tstbitlnmask.md)|Returns whether at least one of the bits defined in mask is set in the input.|
|[TstBitMask](bitfield__tstbitmask.md)|Returns whether all bits defined in mask are set in the input.|
|[TstParityEven](bitfield__tstparityeven.md)|Returns whether the number of bits defined and set to 1 if the input is even.|

**Parent topic:**[Libraries](./../../index.md)

