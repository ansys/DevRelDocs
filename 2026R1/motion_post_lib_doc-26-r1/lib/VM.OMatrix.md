# Struct OMatrix
<a id="VM_OMatrix"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public struct OMatrix : IOMatrix
```

#### Implements

[IOMatrix](VM.IOMatrix.md)

## Constructors

### <a id="VM_OMatrix__ctor_VM_OMatrix_"></a> OMatrix\(OMatrix\)

Copy construct orientation matrix

```csharp
public OMatrix(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.OMatrix.md)

The matrix to copy

### <a id="VM_OMatrix__ctor_VM_Plane_VM_Vector_VM_Vector_"></a> OMatrix\(Plane, Vector, Vector\)

Construct orientation matrix with two principal axis

```csharp
public OMatrix(Plane type, Vector vecMaster, Vector vecSlave)
```

#### Parameters

`type` [Plane](VM.Plane.md)

The plane type

`vecMaster` [Vector](VM.Vector.md)

The master axis

`vecSlave` [Vector](VM.Vector.md)

The slave axis

### <a id="VM_OMatrix__ctor_System_Double___"></a> OMatrix\(double\[\]\)

Construct orientation matrix with array of double

```csharp
public OMatrix(double[] arr)
```

#### Parameters

`arr` double\[\]

The array contains orientation matrix

## Properties

### <a id="VM_OMatrix_Array"></a> Array

Get/Set the array of matrix value

```csharp
public double[] Array { get; set; }
```

#### Property Value

 double\[\]

### <a id="VM_OMatrix_Identity"></a> Identity

Gets the Identity Orientation Matrix.

```csharp
public static OMatrix Identity { get; }
```

#### Property Value

 [OMatrix](VM.OMatrix.md)

### <a id="VM_OMatrix_XVector"></a> XVector

Get/Set X vector of matrix

```csharp
public Vector XVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### <a id="VM_OMatrix_YVector"></a> YVector

Get/Set Y vector of matrix

```csharp
public Vector YVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### <a id="VM_OMatrix_ZVector"></a> ZVector

Get/Set Z vector of matrix

```csharp
public Vector ZVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### <a id="VM_OMatrix_Item_System_Int32_"></a> this\[int\]

Get/Set the specific vector of matrix

```csharp
public Vector this[int nIndex] { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### <a id="VM_OMatrix_Item_VM_Coordinate_"></a> this\[Coordinate\]

Get/Set the specific vector of matrix

```csharp
public Vector this[Coordinate enIndex] { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### <a id="VM_OMatrix_Item_System_Int32_System_Int32_"></a> this\[int, int\]

Get/Set the specific value of matrix element

```csharp
public double this[int nRow, int nCol] { get; set; }
```

#### Property Value

 double

### <a id="VM_OMatrix_Item_VM_Coordinate_VM_Coordinate_"></a> this\[Coordinate, Coordinate\]

Get/Set the specific value of matrix element

```csharp
public double this[Coordinate enRow, Coordinate enCol] { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_OMatrix_CopyTo_System_Double___System_Int32_"></a> CopyTo\(double\[\], int\)

Copy matrix values to the array

```csharp
public void CopyTo(double[] arr, int nStartIndex)
```

#### Parameters

`arr` double\[\]

The array values copied to

`nStartIndex` int

The start index of array

### <a id="VM_OMatrix_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

The object to compare.

#### Returns

 bool

true if the objects are equal, otherwise false.

### <a id="VM_OMatrix_GetDirectionVector_VM_Coordinate_"></a> GetDirectionVector\(Coordinate\)

Get the direction vector for axis.

```csharp
public Vector GetDirectionVector(Coordinate axis)
```

#### Parameters

`axis` [Coordinate](VM.Coordinate.md)

The type of axis.

#### Returns

 [Vector](VM.Vector.md)

The direction vector.

### <a id="VM_OMatrix_GetDirectionVector_System_Int32_"></a> GetDirectionVector\(int\)

Get the direction vector for axis.

```csharp
public Vector GetDirectionVector(int axis)
```

#### Parameters

`axis` int

The type of axis.

#### Returns

 [Vector](VM.Vector.md)

The direction vector.

### <a id="VM_OMatrix_GetHashCode"></a> GetHashCode\(\)

Returns the hash code for this vector

```csharp
public override int GetHashCode()
```

#### Returns

 int

A 32-bit signed integer hash code.

### <a id="VM_OMatrix_Initialize"></a> Initialize\(\)

Initialize the Orientation Matrix

```csharp
public void Initialize()
```

### <a id="VM_OMatrix_Normalize"></a> Normalize\(\)

Normalize the Orientation Matrix

```csharp
public void Normalize()
```

#### Exceptions

 InvalidOperationException

The normalize operation failed .

### <a id="VM_OMatrix_RotateAxisDeg_VM_Coordinate_System_Double_"></a> RotateAxisDeg\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisDeg(Coordinate c, double dAngle)
```

#### Parameters

`c` [Coordinate](VM.Coordinate.md)

The rotation coordinate.

`dAngle` double

The degree.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateAxisDeg_System_Int32_System_Double_"></a> RotateAxisDeg\(int, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisDeg(int nCoord, double dAngle)
```

#### Parameters

`nCoord` int

The rotation coordinate.

`dAngle` double

The degree.

### <a id="VM_OMatrix_RotateAxisDeg_VM_Vector_System_Double_"></a> RotateAxisDeg\(Vector, double\)

To rotate counterclockwise for axis.

```csharp
public void RotateAxisDeg(Vector axis, double dAngle)
```

#### Parameters

`axis` [Vector](VM.Vector.md)

The rotation axis.

`dAngle` double

The degree.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateAxisRad_VM_Coordinate_System_Double_"></a> RotateAxisRad\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisRad(Coordinate c, double dAngle)
```

#### Parameters

`c` [Coordinate](VM.Coordinate.md)

The rotation coordinate.

`dAngle` double

The radian.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateAxisRad_System_Int32_System_Double_"></a> RotateAxisRad\(int, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisRad(int nCoord, double dAngle)
```

#### Parameters

`nCoord` int

The rotation coordinate.

`dAngle` double

The radian.

### <a id="VM_OMatrix_RotateAxisRad_VM_Vector_System_Double_"></a> RotateAxisRad\(Vector, double\)

To rotate counterclockwise for axis.

```csharp
public void RotateAxisRad(Vector axis, double dAngle)
```

#### Parameters

`axis` [Vector](VM.Vector.md)

The rotation axis.

`dAngle` double

The radian.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateXDeg_System_Double_"></a> RotateXDeg\(double\)

To rotate counterclockwise for x-axis.

```csharp
public void RotateXDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateXRad_System_Double_"></a> RotateXRad\(double\)

To rotate counterclockwise for x-axis.

```csharp
public void RotateXRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateYDeg_System_Double_"></a> RotateYDeg\(double\)

To rotate counterclockwise for y-axis.

```csharp
public void RotateYDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateYRad_System_Double_"></a> RotateYRad\(double\)

To rotate counterclockwise for y-axis.

```csharp
public void RotateYRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateZDeg_System_Double_"></a> RotateZDeg\(double\)

To rotate counterclockwise for z-axis.

```csharp
public void RotateZDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_RotateZRad_System_Double_"></a> RotateZRad\(double\)

To rotate counterclockwise for z-axis.

```csharp
public void RotateZRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

#### Exceptions

 InvalidOperationException

The rotate operation failed .

### <a id="VM_OMatrix_SetOrientation_VM_Plane_VM_Vector_VM_Vector_"></a> SetOrientation\(Plane, Vector, Vector\)

Set data of orientation.

```csharp
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

 InvalidOperationException

The set data of orientation operation failed .

### <a id="VM_OMatrix_SetOrientation_VM_OMatrix_"></a> SetOrientation\(OMatrix\)

Set data of orientation.

```csharp
public void SetOrientation(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.OMatrix.md)

The matrix of orientation.

### <a id="VM_OMatrix_SetOrientation_System_Double___"></a> SetOrientation\(double\[\]\)

Set data of orientation.

```csharp
public void SetOrientation(double[] arr)
```

#### Parameters

`arr` double\[\]

The data of orientation.

### <a id="VM_OMatrix_SetOrientationEADeg_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationEADeg\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is degree.

```csharp
public void SetOrientationEADeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` [RotationAxes](VM.RotationAxes.md)

The type of euler angle.

`dAlpha` double

The alpha of euler angle.

`dBeta` double

The beta of euler angle.

`dGamma` double

The gamma of euler angle.

#### Exceptions

 InvalidOperationException

The set data of orientation operation failed .

### <a id="VM_OMatrix_SetOrientationEARad_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationEARad\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is radian.

```csharp
public void SetOrientationEARad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` [RotationAxes](VM.RotationAxes.md)

The type of euler angle.

`dAlpha` double

The alpha of euler angle.

`dBeta` double

The beta of euler angle.

`dGamma` double

The gamma of euler angle.

#### Exceptions

 InvalidOperationException

The set data of orientation operation failed .

### <a id="VM_OMatrix_SetOrientationFixedAngleDeg_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationFixedAngleDeg\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is degree.

```csharp
public void SetOrientationFixedAngleDeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` [RotationAxes](VM.RotationAxes.md)

The type of fixed angle.

`dAlpha` double

The alpha of fixed angle.

`dBeta` double

The beta of fixed angle.

`dGamma` double

The gamma of fixed angle.

#### Exceptions

 InvalidOperationException

The set data of orientation operation failed .

### <a id="VM_OMatrix_SetOrientationFixedAngleRad_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationFixedAngleRad\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is radian.

```csharp
public void SetOrientationFixedAngleRad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` [RotationAxes](VM.RotationAxes.md)

The type of fixed angle.

`dAlpha` double

The alpha of fixed angle.

`dBeta` double

The beta of fixed angle.

`dGamma` double

The gamma of fixed angle.

#### Exceptions

 InvalidOperationException

The set data of orientation operation failed .

### <a id="VM_OMatrix_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 string

### <a id="VM_OMatrix_TransposeOrientation"></a> TransposeOrientation\(\)

Transposed rows and columns of the matrix.

```csharp
public void TransposeOrientation()
```

#### Exceptions

 InvalidOperationException

The transpose operation failed .

## Operators

### <a id="VM_OMatrix_op_Equality_VM_OMatrix_VM_OMatrix_"></a> operator ==\(OMatrix, OMatrix\)

Compare two orientation matrices are same or not

```csharp
public static bool operator ==(OMatrix matLeft, OMatrix matRight)
```

#### Parameters

`matLeft` [OMatrix](VM.OMatrix.md)

The left matrix to compare

`matRight` [OMatrix](VM.OMatrix.md)

The right matrix to compare

#### Returns

 bool

true if two matrices are same, otherwise false.

#### Exceptions

 InvalidOperationException

The equality operation failed .

### <a id="VM_OMatrix_op_Inequality_VM_OMatrix_VM_OMatrix_"></a> operator \!=\(OMatrix, OMatrix\)

Compare two orientation matrices are same or not

```csharp
public static bool operator !=(OMatrix matLeft, OMatrix matRight)
```

#### Parameters

`matLeft` [OMatrix](VM.OMatrix.md)

The left matrix to compare

`matRight` [OMatrix](VM.OMatrix.md)

The right matrix to compare

#### Returns

 bool

true if two matrices are not same, otherwise false.

#### Exceptions

 InvalidOperationException

The inequality operation failed .

### <a id="VM_OMatrix_op_Multiply_VM_OMatrix_VM_OMatrix_"></a> operator \*\(OMatrix, OMatrix\)

Cross product two orientation matrices.

```csharp
public static OMatrix operator *(OMatrix matA, OMatrix matB)
```

#### Parameters

`matA` [OMatrix](VM.OMatrix.md)

The left matrix to cross product

`matB` [OMatrix](VM.OMatrix.md)

The right matrix to cross product

#### Returns

 [OMatrix](VM.OMatrix.md)

The cross product matrix.

#### Exceptions

 InvalidOperationException

The multiply operation failed .

### <a id="VM_OMatrix_op_Multiply_VM_Vector_VM_OMatrix_"></a> operator \*\(Vector, OMatrix\)

Multiply vector to the matrix.

```csharp
public static Vector operator *(Vector vec, OMatrix mat)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

The vector to multiply value

`mat` [OMatrix](VM.OMatrix.md)

The matrix to multiply

#### Returns

 [Vector](VM.Vector.md)

The Multiplied vector.

#### Exceptions

 InvalidOperationException

The multiply operation failed .

