# Struct TMatrix

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public struct TMatrix : IOMatrix
```

#### Implements

[IOMatrix](VM.IOMatrix.md)

## Constructors

### TMatrix\(TMatrix\)

Copy construct transformation matrix

```python
public TMatrix(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.TMatrix.md)

The matrix to copy

### TMatrix\(Plane, Vector, Vector, Vector?\)

Initializes a new instance of the <xref href="VM.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```python
public TMatrix(Plane type, Vector vecMaster, Vector vecSlave, Vector? vecPos = null)
```

#### Parameters

`type` [Plane](VM.Plane.md)

The type of plane.

`vecMaster` [Vector](VM.Vector.md)

The vector for master.

`vecSlave` [Vector](VM.Vector.md)

The vector for slave.

`vecPos` [Vector](VM.Vector.md)?

The position.

### TMatrix\(double\[\]\)

Initializes a new instance of the <xref href="VM.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```python
public TMatrix(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation.

## Properties

### Array

Get/Set the array of matrix value

```python
public double[] Array { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### Identity

Gets the Identity Transformation Matrix.

```python
public static TMatrix Identity { get; }
```

#### Property Value

 [TMatrix](VM.TMatrix.md)

### InverseTransformationMatrix

Gets the matrix of inverse transform.

```python
public TMatrix InverseTransformationMatrix { get; }
```

#### Property Value

 [TMatrix](VM.TMatrix.md)

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The inverse transform of matrix operation failed.

### Orientation

Get Orientation vector of matrix

```python
public OMatrix Orientation { get; }
```

#### Property Value

 [OMatrix](VM.OMatrix.md)

### Position

Get/Set Position vector of matrix

```python
public Vector Position { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### XVector

Get/Set X vector of matrix

```python
public Vector XVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### YVector

Get/Set Y vector of matrix

```python
public Vector YVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### ZVector

Get/Set Z vector of matrix

```python
public Vector ZVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### this\[int\]

```python
public Vector this[int nIndex] { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### this\[Coordinate\]

Get/Set the specific vector of matrix

```python
public Vector this[Coordinate enIndex] { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### this\[int, int\]

```python
public double this[int nRow, int nCol] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[Coordinate, Coordinate\]

Get/Set the specific value of matrix element

```python
public double this[Coordinate enRow, Coordinate enCol] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CopyTo\(double\[\], int\)

Copy matrix values to the array

```python
public void CopyTo(double[] arr, int nStartIndex)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array values copied to

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index of array

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The condition : 16 &gt; arr.Length - nStartIndex

### Equals\(object\)

Determines whether the specified object is equal to the current object.

```python
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the objects are equal, otherwise false.

### GetDirectionVector\(Coordinate\)

Get the direction vector for axis.

```python
public Vector GetDirectionVector(Coordinate axis)
```

#### Parameters

`axis` [Coordinate](VM.Coordinate.md)

The type of axis.

#### Returns

 [Vector](VM.Vector.md)

The direction vector.

### GetDirectionVector\(int\)

Get the direction vector for axis.

```python
public Vector GetDirectionVector(int axis)
```

#### Parameters

`axis` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The type of axis.

#### Returns

 [Vector](VM.Vector.md)

The direction vector.

### GetHashCode\(\)

Returns the hash code for this vector

```python
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A 32-bit signed integer hash code.

### Initialize\(\)

Initialize the Orientation Matrix

```python
public void Initialize()
```

### Normalize\(\)

Normalize the Orientation Matrix

```python
public void Normalize()
```

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The normalize operation failed .

### RotateAxisDeg\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```python
public void RotateAxisDeg(Coordinate c, double dAngle)
```

#### Parameters

`c` [Coordinate](VM.Coordinate.md)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateAxisDeg\(int, double\)

To rotate counterclockwise for coordinate.

```python
public void RotateAxisDeg(int nCoord, double dAngle)
```

#### Parameters

`nCoord` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateAxisDeg\(Vector, double\)

To rotate counterclockwise for axis.

```python
public void RotateAxisDeg(Vector axis, double dAngle)
```

#### Parameters

`axis` [Vector](VM.Vector.md)

The rotation axis.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateAxisRad\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```python
public void RotateAxisRad(Coordinate c, double dAngle)
```

#### Parameters

`c` [Coordinate](VM.Coordinate.md)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateAxisRad\(int, double\)

To rotate counterclockwise for coordinate.

```python
public void RotateAxisRad(int nCoord, double dAngle)
```

#### Parameters

`nCoord` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateAxisRad\(Vector, double\)

To rotate counterclockwise for axis.

```python
public void RotateAxisRad(Vector axis, double dAngle)
```

#### Parameters

`axis` [Vector](VM.Vector.md)

The rotation axis.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateXDeg\(double\)

To rotate counterclockwise for x-axis.

```python
public void RotateXDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateXRad\(double\)

To rotate counterclockwise for x-axis.

```python
public void RotateXRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateYDeg\(double\)

To rotate counterclockwise for y-axis.

```python
public void RotateYDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateYRad\(double\)

To rotate counterclockwise for y-axis.

```python
public void RotateYRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateZDeg\(double\)

To rotate counterclockwise for z-axis.

```python
public void RotateZDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### RotateZRad\(double\)

To rotate counterclockwise for z-axis.

```python
public void RotateZRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The rotate operation failed .

### Set\(TMatrix\)

Set data of transformation.

```python
public void Set(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.TMatrix.md)

The transform matrix.

### Set\(double\[\]\)

Set data of transformation.

```python
public void Set(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The transform array.

### SetOrientation\(Plane, Vector, Vector\)

Set data of orientation.

```python
public void SetOrientation(Plane type, Vector vecMaster, Vector vecSlave)
```

#### Parameters

`type` [Plane](VM.Plane.md)

The type of plane.

`vecMaster` [Vector](VM.Vector.md)

The vector for master.

`vecSlave` [Vector](VM.Vector.md)

The vector for slave.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The set data of orientation operation failed .

### SetOrientation\(OMatrix\)

Set data of orientation.

```python
public void SetOrientation(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.OMatrix.md)

The matrix of orientation.

### SetOrientation\(double\[\]\)

Set data of orientation.

```python
public void SetOrientation(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation.

### SetOrientationEADeg\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is degree.

```python
public void SetOrientationEADeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` [RotationAxes](VM.RotationAxes.md)

The type of euler angle.

`dAlpha` [double](https://learn.microsoft.com/dotnet/api/system.double)

The alpha of euler angle.

`dBeta` [double](https://learn.microsoft.com/dotnet/api/system.double)

The beta of euler angle.

`dGamma` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gamma of euler angle.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The set data of orientation operation failed .

### SetOrientationEARad\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is radian.

```python
public void SetOrientationEARad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` [RotationAxes](VM.RotationAxes.md)

The type of euler angle.

`dAlpha` [double](https://learn.microsoft.com/dotnet/api/system.double)

The alpha of euler angle.

`dBeta` [double](https://learn.microsoft.com/dotnet/api/system.double)

The beta of euler angle.

`dGamma` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gamma of euler angle.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The set data of orientation operation failed .

### SetOrientationFixedAngleDeg\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is degree.

```python
public void SetOrientationFixedAngleDeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` [RotationAxes](VM.RotationAxes.md)

The type of fixed angle.

`dAlpha` [double](https://learn.microsoft.com/dotnet/api/system.double)

The alpha of fixed angle.

`dBeta` [double](https://learn.microsoft.com/dotnet/api/system.double)

The beta of fixed angle.

`dGamma` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gamma of fixed angle.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The set data of orientation operation failed .

### SetOrientationFixedAngleRad\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is radian.

```python
public void SetOrientationFixedAngleRad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` [RotationAxes](VM.RotationAxes.md)

The type of fixed angle.

`dAlpha` [double](https://learn.microsoft.com/dotnet/api/system.double)

The alpha of fixed angle.

`dBeta` [double](https://learn.microsoft.com/dotnet/api/system.double)

The beta of fixed angle.

`dGamma` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gamma of fixed angle.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The set data of orientation operation failed .

### SetPositionVector\(Vector\)

Set the position vector.

```python
public void SetPositionVector(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vector.

### ToString\(\)

```python
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Translate\(Vector\)

To translate for position.

```python
public void Translate(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vector

### Translate\(double, double, double\)

To translate for position.

```python
public void Translate(double dX, double dY, double dZ)
```

#### Parameters

`dX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of X

`dY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of y

`dZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of z

### TransposeOrientation\(\)

Transposed rows and columns of the matrix.

```python
public void TransposeOrientation()
```

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The transpose operation failed .

## Operators

### operator ==\(TMatrix, TMatrix\)

Compare two transformation matrices are same or not

```python
public static bool operator ==(TMatrix matLeft, TMatrix matRight)
```

#### Parameters

`matLeft` [TMatrix](VM.TMatrix.md)

The left matrix to compare

`matRight` [TMatrix](VM.TMatrix.md)

The right matrix to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two matrices are same, otherwise false.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The equality operation failed .

### operator \!=\(TMatrix, TMatrix\)

Compare two transformation matrices are same or not

```python
public static bool operator !=(TMatrix matLeft, TMatrix matRight)
```

#### Parameters

`matLeft` [TMatrix](VM.TMatrix.md)

The left matrix to compare

`matRight` [TMatrix](VM.TMatrix.md)

The right matrix to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two matrices are not same, otherwise false.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The inequality operation failed .

### operator \*\(TMatrix, TMatrix\)

Cross product two orientation matrices.

```python
public static TMatrix operator *(TMatrix matA, TMatrix matB)
```

#### Parameters

`matA` [TMatrix](VM.TMatrix.md)

The left matrix to cross product

`matB` [TMatrix](VM.TMatrix.md)

The right matrix to cross product

#### Returns

 [TMatrix](VM.TMatrix.md)

The cross product matrix.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The multiply operation failed .

### operator \*\(Vector, TMatrix\)

Multiply vector to the matrix.

```python
public static Vector operator *(Vector vec, TMatrix mat)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vector to multiply value

`mat` [TMatrix](VM.TMatrix.md)

The matrix to multiply

#### Returns

 [Vector](VM.Vector.md)

The Multiplied vector.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The multiply operation failed .


