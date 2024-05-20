# Class OMatrix

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the orientation matrix.

```csharp
public sealed class OMatrix : MatrixBase, IOMatrix
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MatrixBase](VM.Managed.MatrixBase.md) ← 
[OMatrix](VM.Managed.OMatrix.md)

#### Implements

[IOMatrix](VM.Managed.IOMatrix.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### OMatrix\(double\[\]\)

Initializes a new instance of the <xref href="VM.Managed.OMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OMatrix(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation.

### OMatrix\(Plane, VectorBase, VectorBase\)

Initializes a new instance of the <xref href="VM.Managed.OMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OMatrix(Plane type, VectorBase vecMaster, VectorBase vecSlave)
```

#### Parameters

`type` Plane

The type of plane.

`vecMaster` [VectorBase](VM.Managed.VectorBase.md)

The vector for master.

`vecSlave` [VectorBase](VM.Managed.VectorBase.md)

The vector for slave.

### OMatrix\(OMatrix\)

Initializes a new instance of the <xref href="VM.Managed.OMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OMatrix(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

The matrix of orientation

### OMatrix\(\)

Initializes a new instance of the <xref href="VM.Managed.OMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OMatrix()
```

### OMatrix\(SerializationInfo, StreamingContext\)

```csharp
protected OMatrix(SerializationInfo info, StreamingContext context)
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

Set data of orientation.

```csharp
public void Set(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation

### Set\(OMatrix\)

Set Matrix of orientation.

```csharp
public void Set(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

The matrix of orientation

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

### op\_MultiplicationAssignment\(VectorBase, OMatrix\)

```csharp
public static VectorBase op_MultiplicationAssignment(VectorBase vec, OMatrix mat)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

`mat` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### op\_MultiplicationAssignment\(OMatrix, OMatrix\)

```csharp
public static OMatrix op_MultiplicationAssignment(OMatrix mat1, OMatrix mat2)
```

#### Parameters

`mat1` [OMatrix](VM.Managed.OMatrix.md)

`mat2` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [OMatrix](VM.Managed.OMatrix.md)

## Operators

### operator ==\(OMatrix, OMatrix\)

```csharp
public static bool operator ==(OMatrix mat1, OMatrix mat2)
```

#### Parameters

`mat1` [OMatrix](VM.Managed.OMatrix.md)

`mat2` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### implicit operator OMatrix\(OMatrix\)

```csharp
public static implicit operator OMatrix(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 OMatrix

### implicit operator OMatrix\(OMatrix\)

```csharp
public static implicit operator OMatrix(OMatrix mat)
```

#### Parameters

`mat` OMatrix

#### Returns

 [OMatrix](VM.Managed.OMatrix.md)

### operator \!=\(OMatrix, OMatrix\)

```csharp
public static bool operator !=(OMatrix mat1, OMatrix mat2)
```

#### Parameters

`mat1` [OMatrix](VM.Managed.OMatrix.md)

`mat2` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \*\(VectorBase, OMatrix\)

```csharp
public static VectorBase operator *(VectorBase vec, OMatrix mat)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

`mat` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### operator \*\(OMatrix, OMatrix\)

```csharp
public static OMatrix operator *(OMatrix mat1, OMatrix mat2)
```

#### Parameters

`mat1` [OMatrix](VM.Managed.OMatrix.md)

`mat2` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [OMatrix](VM.Managed.OMatrix.md)


