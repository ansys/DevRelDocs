# to_bytes

<a id="ansys.meshing.prime.SplineFeatureCaptureType.to_bytes"></a>

#### SplineFeatureCaptureType.to_bytes(/, length=1, byteorder='big', \*, signed=False)

Return an array of bytes representing an integer.

length
: Length of bytes object to use.  An OverflowError is raised if the
  integer is not representable with the given number of bytes.  Default
  is length 1.

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
: Determines whether two’s complement is used to represent the integer.
  If signed is False and a negative integer is given, an OverflowError
  is raised.

<!-- !! processed by numpydoc !! -->
