# Class TMatrix

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the matrix of transform.

```csharp
public sealed class TMatrix : MatrixBase, IOMatrix
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MatrixBase](VM.Managed.MatrixBase.md) ← 
[TMatrix](VM.Managed.TMatrix.md)

#### Implements

[IOMatrix](VM.Managed.IOMatrix.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### TMatrix\(double\[\]\)

Initializes a new instance of the <xref href="VM.Managed.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TMatrix(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation.

### TMatrix\(Plane, VectorBase, VectorBase, VectorBase\)

Initializes a new instance of the <xref href="VM.Managed.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TMatrix(Plane type, VectorBase vecMaster, VectorBase vecSlave, VectorBase vecPos)
```

#### Parameters

`type` Plane

The type of plane.

`vecMaster` [VectorBase](VM.Managed.VectorBase.md)

The vector for master.

`vecSlave` [VectorBase](VM.Managed.VectorBase.md)

The vector for slave.

`vecPos` [VectorBase](VM.Managed.VectorBase.md)

The position.

### TMatrix\(Plane, VectorBase, VectorBase\)

Initializes a new instance of the <xref href="VM.Managed.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TMatrix(Plane type, VectorBase vecMaster, VectorBase vecSlave)
```

#### Parameters

`type` Plane

The type of plane.

`vecMaster` [VectorBase](VM.Managed.VectorBase.md)

The vector for master.

`vecSlave` [VectorBase](VM.Managed.VectorBase.md)

The vector for slave.

### TMatrix\(TMatrix\)

Initializes a new instance of the <xref href="VM.Managed.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TMatrix(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.Managed.TMatrix.md)

The matrix of transform

### TMatrix\(\)

Initializes a new instance of the <xref href="VM.Managed.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TMatrix()
```

### TMatrix\(SerializationInfo, StreamingContext\)

```csharp
protected TMatrix(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

### Array

Gets or sets the data of OMatrix.

```csharp
public virtual double[] Array { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### InverseTransformationMatrix

Gets the matrix of inverse transform.

```csharp
public TMatrix InverseTransformationMatrix { get; }
```

#### Property Value

 [TMatrix](VM.Managed.TMatrix.md)

### Orientation

Gets the matrix of orientation.

```csharp
public OMatrix Orientation { get; }
```

#### Property Value

 [OMatrix](VM.Managed.OMatrix.md)

### Position

Gets or sets the position of transform.

```csharp
public VectorBase Position { get; set; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### XVector

Gets the XVector.

```csharp
public virtual VectorBase XVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### YVector

Gets the YVector.

```csharp
public virtual VectorBase YVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### ZVector

Gets the ZVector.

```csharp
public virtual VectorBase ZVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### this\[uint, uint\]

```csharp
public double this[uint r, uint c] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[Coordinate, Coordinate\]

```csharp
public double this[Coordinate r, Coordinate c] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### this\[uint\]

```csharp
public VectorBase this[uint n] { get; set; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### this\[Coordinate\]

```csharp
public VectorBase this[Coordinate n] { get; set; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

## Methods

### Clone\(\)

```csharp
public object Clone()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GetArray\(\)

```csharp
public double[] GetArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetDirectionVector\(uint\)

Get the direction vector for axis.

```csharp
public VectorBase GetDirectionVector(uint axis)
```

#### Parameters

`axis` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The type of axis.

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

The direction vector.

### GetDirectionVector\(Coordinate\)

Get the direction vector for axis.

```csharp
public VectorBase GetDirectionVector(Coordinate axis)
```

#### Parameters

`axis` Coordinate

The type of axis.

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

The direction vector.

### GetObjectData\(SerializationInfo, StreamingContext\)

```csharp
public void GetObjectData(SerializationInfo info, StreamingContext __unnamed001)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`__unnamed001` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### GetSchema\(\)

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### Initialize\(\)

Initializes a instance of OMatrix.

```csharp
public void Initialize()
```

### Normalize\(\)

Nomalize a instance of OMatrix.

```csharp
public void Normalize()
```

### ReadXml\(XmlReader\)

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### RotateAxisDeg\(VectorBase, double\)

To rotate counterclockwise for axis.

```csharp
public void RotateAxisDeg(VectorBase axis, double dAngle)
```

#### Parameters

`axis` [VectorBase](VM.Managed.VectorBase.md)

The rotation axis.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateAxisDeg\(uint, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisDeg(uint nCoord, double dAngle)
```

#### Parameters

`nCoord` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateAxisDeg\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisDeg(Coordinate c, double dAngle)
```

#### Parameters

`c` Coordinate

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateAxisRad\(VectorBase, double\)

To rotate counterclockwise for axis.

```csharp
public void RotateAxisRad(VectorBase axis, double dAngle)
```

#### Parameters

`axis` [VectorBase](VM.Managed.VectorBase.md)

The rotation axis.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateAxisRad\(uint, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisRad(uint nCoord, double dAngle)
```

#### Parameters

`nCoord` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateAxisRad\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisRad(Coordinate c, double dAngle)
```

#### Parameters

`c` Coordinate

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateXDeg\(double\)

To rotate counterclockwise for x-axis.

```csharp
public void RotateXDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateXRad\(double\)

To rotate counterclockwise for x-axis.

```csharp
public void RotateXRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateYDeg\(double\)

To rotate counterclockwise for y-axis.

```csharp
public void RotateYDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateYRad\(double\)

To rotate counterclockwise for y-axis.

```csharp
public void RotateYRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateZDeg\(double\)

To rotate counterclockwise for z-axis.

```csharp
public void RotateZDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateZRad\(double\)

To rotate counterclockwise for z-axis.

```csharp
public void RotateZRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### Set\(double\[\]\)

Set data of transform.

```csharp
public void Set(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of transform

### Set\(TMatrix\)

Set Matrix of transform.

```csharp
public void Set(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.Managed.TMatrix.md)

The matrix of transform

### SetOrientation\(double\[\]\)

Set data of orientation.

```csharp
public void SetOrientation(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation.

### SetOrientation\(OMatrix\)

Set data of orientation.

```csharp
public void SetOrientation(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

The matrix of orientation.

### SetOrientation\(Plane, VectorBase, VectorBase\)

Set data of orientation.

```csharp
public void SetOrientation(Plane type, VectorBase vecMaster, VectorBase vecSlave)
```

#### Parameters

`type` Plane

The type of plane.

`vecMaster` [VectorBase](VM.Managed.VectorBase.md)

The vector for master.

`vecSlave` [VectorBase](VM.Managed.VectorBase.md)

The vector for slave.

### SetOrientationEADeg\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is degree.

```csharp
public void SetOrientationEADeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` RotationAxes

The type of euler angle.

`dAlpha` [double](https://learn.microsoft.com/dotnet/api/system.double)

The alpha of euler angle.

`dBeta` [double](https://learn.microsoft.com/dotnet/api/system.double)

The beta of euler angle.

`dGamma` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gamma of euler angle.

### SetOrientationEARad\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is radian.

```csharp
public void SetOrientationEARad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` RotationAxes

The type of euler angle.

`dAlpha` [double](https://learn.microsoft.com/dotnet/api/system.double)

The alpha of euler angle.

`dBeta` [double](https://learn.microsoft.com/dotnet/api/system.double)

The beta of euler angle.

`dGamma` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gamma of euler angle.

### SetOrientationFixedAngleDeg\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is degree.

```csharp
public void SetOrientationFixedAngleDeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` RotationAxes

The type of fixed angle.

`dAlpha` [double](https://learn.microsoft.com/dotnet/api/system.double)

The alpha of fixed angle.

`dBeta` [double](https://learn.microsoft.com/dotnet/api/system.double)

The beta of fixed angle.

`dGamma` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gamma of fixed angle.

### SetOrientationFixedAngleRad\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is radian.

```csharp
public void SetOrientationFixedAngleRad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` RotationAxes

The type of fixed angle.

`dAlpha` [double](https://learn.microsoft.com/dotnet/api/system.double)

The alpha of fixed angle.

`dBeta` [double](https://learn.microsoft.com/dotnet/api/system.double)

The beta of fixed angle.

`dGamma` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gamma of fixed angle.

### Translate\(double, double, double\)

To translate for position.

```csharp
public void Translate(double dX, double dY, double dZ)
```

#### Parameters

`dX` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of X

`dY` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of y

`dZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value of z

### Translate\(VectorBase\)

To translate for position.

```csharp
public void Translate(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vector

### TransposeOrientation\(\)

Transposed rows and columns of the matrix.

```csharp
public void TransposeOrientation()
```

### WriteXml\(XmlWriter\)

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### op\_MultiplicationAssignment\(VectorBase, TMatrix\)

```csharp
public static VectorBase op_MultiplicationAssignment(VectorBase vec, TMatrix mat)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

`mat` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### op\_MultiplicationAssignment\(TMatrix, TMatrix\)

```csharp
public static TMatrix op_MultiplicationAssignment(TMatrix mat1, TMatrix mat2)
```

#### Parameters

`mat1` [TMatrix](VM.Managed.TMatrix.md)

`mat2` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [TMatrix](VM.Managed.TMatrix.md)

## Operators

### operator ==\(TMatrix, TMatrix\)

```csharp
public static bool operator ==(TMatrix mat1, TMatrix mat2)
```

#### Parameters

`mat1` [TMatrix](VM.Managed.TMatrix.md)

`mat2` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator TMatrix\(TMatrix\)

```csharp
public static implicit operator TMatrix(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 TMatrix

### implicit operator TMatrix\(TMatrix\)

```csharp
public static implicit operator TMatrix(TMatrix mat)
```

#### Parameters

`mat` TMatrix

#### Returns

 [TMatrix](VM.Managed.TMatrix.md)

### operator \!=\(TMatrix, TMatrix\)

```csharp
public static bool operator !=(TMatrix mat1, TMatrix mat2)
```

#### Parameters

`mat1` [TMatrix](VM.Managed.TMatrix.md)

`mat2` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \*\(VectorBase, TMatrix\)

```csharp
public static VectorBase operator *(VectorBase vec, TMatrix mat)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

`mat` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### operator \*\(TMatrix, TMatrix\)

```csharp
public static TMatrix operator *(TMatrix mat1, TMatrix mat2)
```

#### Parameters

`mat1` [TMatrix](VM.Managed.TMatrix.md)

`mat2` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [TMatrix](VM.Managed.TMatrix.md)


