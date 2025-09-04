# from_bytes

<a id="ansys.meshing.prime.IntersectionMask.from_bytes"></a>

#### IntersectionMask.from_bytes(/, bytes, byteorder='big', \*, signed=False)

Return the integer represented by the given array of bytes.

bytes
: Holds the array of bytes to convert.  The argument must either
  support the buffer protocol or be an iterable object producing bytes.
  Bytes and bytearray are examples of built-in objects that support the
  buffer protocol.

byteorder
: The byte order used to represent the integer.  If byteorder is ‘big’,
  the most significant byte is at the beginning of the byte array.  If
  byteorder is ‘little’, the most significant byte is at the end of the
  byte array.  To request the native byte order of the host system, use
  <br/>
  ```
  `
  ```
  <br/>
  sys.byteorder’ as the byte order value.  Default is to use ‘big’.

signed
: Indicates whether two’s complement is used to represent the integer.

<!-- !! processed by numpydoc !! -->
