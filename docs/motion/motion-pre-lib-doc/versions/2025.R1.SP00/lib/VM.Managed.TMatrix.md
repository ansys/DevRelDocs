#  Class TMatrix

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

### <a id="VM_Managed_TMatrix__ctor_System_Double___"></a> TMatrix\(double\[\]\)

Initializes a new instance of the <xref href="VM.Managed.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TMatrix(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation.

### <a id="VM_Managed_TMatrix__ctor_VM_Plane_VM_Managed_VectorBase_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> TMatrix\(Plane, VectorBase, VectorBase, VectorBase\)

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

### <a id="VM_Managed_TMatrix__ctor_VM_Plane_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> TMatrix\(Plane, VectorBase, VectorBase\)

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

### <a id="VM_Managed_TMatrix__ctor_VM_Managed_TMatrix_"></a> TMatrix\(TMatrix\)

Initializes a new instance of the <xref href="VM.Managed.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TMatrix(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.Managed.TMatrix.md)

The matrix of transform

### <a id="VM_Managed_TMatrix__ctor"></a> TMatrix\(\)

Initializes a new instance of the <xref href="VM.Managed.TMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TMatrix()
```

### <a id="VM_Managed_TMatrix__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> TMatrix\(SerializationInfo, StreamingContext\)

```csharp
protected TMatrix(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

### <a id="VM_Managed_TMatrix_Array"></a> Array

Gets or sets the data of OMatrix.

```csharp
public virtual double[] Array { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_TMatrix_InverseTransformationMatrix"></a> InverseTransformationMatrix

Gets the matrix of inverse transform.

```csharp
public TMatrix InverseTransformationMatrix { get; }
```

#### Property Value

 [TMatrix](VM.Managed.TMatrix.md)

### <a id="VM_Managed_TMatrix_Orientation"></a> Orientation

Gets the matrix of orientation.

```csharp
public OMatrix Orientation { get; }
```

#### Property Value

 [OMatrix](VM.Managed.OMatrix.md)

### <a id="VM_Managed_TMatrix_Position"></a> Position

Gets or sets the position of transform.

```csharp
public VectorBase Position { get; set; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_TMatrix_XVector"></a> XVector

Gets the XVector.

```csharp
public virtual VectorBase XVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_TMatrix_YVector"></a> YVector

Gets the YVector.

```csharp
public virtual VectorBase YVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_TMatrix_ZVector"></a> ZVector

Gets the ZVector.

```csharp
public virtual VectorBase ZVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_TMatrix_Item_System_UInt32_System_UInt32_"></a> this\[uint, uint\]

```csharp
public double this[uint r, uint c] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_TMatrix_Item_VM_Coordinate_VM_Coordinate_"></a> this\[Coordinate, Coordinate\]

```csharp
public double this[Coordinate r, Coordinate c] { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_TMatrix_Item_System_UInt32_"></a> this\[uint\]

```csharp
public VectorBase this[uint n] { get; set; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_TMatrix_Item_VM_Coordinate_"></a> this\[Coordinate\]

```csharp
public VectorBase this[Coordinate n] { get; set; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

## Methods

### <a id="VM_Managed_TMatrix_Clone"></a> Clone\(\)

```csharp
public object Clone()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Managed_TMatrix_GetArray"></a> GetArray\(\)

```csharp
public double[] GetArray()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_TMatrix_GetDirectionVector_System_UInt32_"></a> GetDirectionVector\(uint\)

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

### <a id="VM_Managed_TMatrix_GetDirectionVector_VM_Coordinate_"></a> GetDirectionVector\(Coordinate\)

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

### <a id="VM_Managed_TMatrix_GetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetObjectData\(SerializationInfo, StreamingContext\)

```csharp
public void GetObjectData(SerializationInfo info, StreamingContext __unnamed001)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`__unnamed001` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### <a id="VM_Managed_TMatrix_GetSchema"></a> GetSchema\(\)

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

### <a id="VM_Managed_TMatrix_Initialize"></a> Initialize\(\)

Initializes a instance of OMatrix.

```csharp
public void Initialize()
```

### <a id="VM_Managed_TMatrix_Normalize"></a> Normalize\(\)

Nomalize a instance of OMatrix.

```csharp
public void Normalize()
```

### <a id="VM_Managed_TMatrix_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### <a id="VM_Managed_TMatrix_RotateAxisDeg_VM_Managed_VectorBase_System_Double_"></a> RotateAxisDeg\(VectorBase, double\)

To rotate counterclockwise for axis.

```csharp
public void RotateAxisDeg(VectorBase axis, double dAngle)
```

#### Parameters

`axis` [VectorBase](VM.Managed.VectorBase.md)

The rotation axis.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### <a id="VM_Managed_TMatrix_RotateAxisDeg_System_UInt32_System_Double_"></a> RotateAxisDeg\(uint, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisDeg(uint nCoord, double dAngle)
```

#### Parameters

`nCoord` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### <a id="VM_Managed_TMatrix_RotateAxisDeg_VM_Coordinate_System_Double_"></a> RotateAxisDeg\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisDeg(Coordinate c, double dAngle)
```

#### Parameters

`c` Coordinate

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### <a id="VM_Managed_TMatrix_RotateAxisRad_VM_Managed_VectorBase_System_Double_"></a> RotateAxisRad\(VectorBase, double\)

To rotate counterclockwise for axis.

```csharp
public void RotateAxisRad(VectorBase axis, double dAngle)
```

#### Parameters

`axis` [VectorBase](VM.Managed.VectorBase.md)

The rotation axis.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### <a id="VM_Managed_TMatrix_RotateAxisRad_System_UInt32_System_Double_"></a> RotateAxisRad\(uint, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisRad(uint nCoord, double dAngle)
```

#### Parameters

`nCoord` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### <a id="VM_Managed_TMatrix_RotateAxisRad_VM_Coordinate_System_Double_"></a> RotateAxisRad\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisRad(Coordinate c, double dAngle)
```

#### Parameters

`c` Coordinate

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### <a id="VM_Managed_TMatrix_RotateXDeg_System_Double_"></a> RotateXDeg\(double\)

To rotate counterclockwise for x-axis.

```csharp
public void RotateXDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### <a id="VM_Managed_TMatrix_RotateXRad_System_Double_"></a> RotateXRad\(double\)

To rotate counterclockwise for x-axis.

```csharp
public void RotateXRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### <a id="VM_Managed_TMatrix_RotateYDeg_System_Double_"></a> RotateYDeg\(double\)

To rotate counterclockwise for y-axis.

```csharp
public void RotateYDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### <a id="VM_Managed_TMatrix_RotateYRad_System_Double_"></a> RotateYRad\(double\)

To rotate counterclockwise for y-axis.

```csharp
public void RotateYRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### <a id="VM_Managed_TMatrix_RotateZDeg_System_Double_"></a> RotateZDeg\(double\)

To rotate counterclockwise for z-axis.

```csharp
public void RotateZDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### <a id="VM_Managed_TMatrix_RotateZRad_System_Double_"></a> RotateZRad\(double\)

To rotate counterclockwise for z-axis.

```csharp
public void RotateZRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### <a id="VM_Managed_TMatrix_Set_System_Double___"></a> Set\(double\[\]\)

Set data of transform.

```csharp
public void Set(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of transform

### <a id="VM_Managed_TMatrix_Set_VM_Managed_TMatrix_"></a> Set\(TMatrix\)

Set Matrix of transform.

```csharp
public void Set(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.Managed.TMatrix.md)

The matrix of transform

### <a id="VM_Managed_TMatrix_SetOrientation_System_Double___"></a> SetOrientation\(double\[\]\)

Set data of orientation.

```csharp
public void SetOrientation(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation.

### <a id="VM_Managed_TMatrix_SetOrientation_VM_Managed_OMatrix_"></a> SetOrientation\(OMatrix\)

Set data of orientation.

```csharp
public void SetOrientation(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

The matrix of orientation.

### <a id="VM_Managed_TMatrix_SetOrientation_VM_Plane_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> SetOrientation\(Plane, VectorBase, VectorBase\)

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

### <a id="VM_Managed_TMatrix_SetOrientationEADeg_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationEADeg\(RotationAxes, double, double, double\)

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

### <a id="VM_Managed_TMatrix_SetOrientationEARad_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationEARad\(RotationAxes, double, double, double\)

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

### <a id="VM_Managed_TMatrix_SetOrientationFixedAngleDeg_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationFixedAngleDeg\(RotationAxes, double, double, double\)

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

### <a id="VM_Managed_TMatrix_SetOrientationFixedAngleRad_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationFixedAngleRad\(RotationAxes, double, double, double\)

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

### <a id="VM_Managed_TMatrix_Translate_System_Double_System_Double_System_Double_"></a> Translate\(double, double, double\)

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

### <a id="VM_Managed_TMatrix_Translate_VM_Managed_VectorBase_"></a> Translate\(VectorBase\)

To translate for position.

```csharp
public void Translate(VectorBase vec)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

The vector

### <a id="VM_Managed_TMatrix_TransposeOrientation"></a> TransposeOrientation\(\)

Transposed rows and columns of the matrix.

```csharp
public void TransposeOrientation()
```

### <a id="VM_Managed_TMatrix_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### <a id="VM_Managed_TMatrix_op_MultiplicationAssignment_VM_Managed_VectorBase_VM_Managed_TMatrix_"></a> op\_MultiplicationAssignment\(VectorBase, TMatrix\)

```csharp
public static VectorBase op_MultiplicationAssignment(VectorBase vec, TMatrix mat)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

`mat` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_TMatrix_op_MultiplicationAssignment_VM_Managed_TMatrix_VM_Managed_TMatrix_"></a> op\_MultiplicationAssignment\(TMatrix, TMatrix\)

```csharp
public static TMatrix op_MultiplicationAssignment(TMatrix mat1, TMatrix mat2)
```

#### Parameters

`mat1` [TMatrix](VM.Managed.TMatrix.md)

`mat2` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [TMatrix](VM.Managed.TMatrix.md)

## Operators

### <a id="VM_Managed_TMatrix_op_Equality_VM_Managed_TMatrix_VM_Managed_TMatrix_"></a> operator ==\(TMatrix, TMatrix\)

```csharp
public static bool operator ==(TMatrix mat1, TMatrix mat2)
```

#### Parameters

`mat1` [TMatrix](VM.Managed.TMatrix.md)

`mat2` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_TMatrix_op_Implicit_VM_Managed_TMatrix__VM_TMatrix"></a> implicit operator TMatrix\(TMatrix\)

```csharp
public static implicit operator TMatrix(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 TMatrix

### <a id="VM_Managed_TMatrix_op_Implicit_VM_TMatrix__VM_Managed_TMatrix"></a> implicit operator TMatrix\(TMatrix\)

```csharp
public static implicit operator TMatrix(TMatrix mat)
```

#### Parameters

`mat` TMatrix

#### Returns

 [TMatrix](VM.Managed.TMatrix.md)

### <a id="VM_Managed_TMatrix_op_Inequality_VM_Managed_TMatrix_VM_Managed_TMatrix_"></a> operator \!=\(TMatrix, TMatrix\)

```csharp
public static bool operator !=(TMatrix mat1, TMatrix mat2)
```

#### Parameters

`mat1` [TMatrix](VM.Managed.TMatrix.md)

`mat2` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_TMatrix_op_Multiply_VM_Managed_VectorBase_VM_Managed_TMatrix_"></a> operator \*\(VectorBase, TMatrix\)

```csharp
public static VectorBase operator *(VectorBase vec, TMatrix mat)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

`mat` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_TMatrix_op_Multiply_VM_Managed_TMatrix_VM_Managed_TMatrix_"></a> operator \*\(TMatrix, TMatrix\)

```csharp
public static TMatrix operator *(TMatrix mat1, TMatrix mat2)
```

#### Parameters

`mat1` [TMatrix](VM.Managed.TMatrix.md)

`mat2` [TMatrix](VM.Managed.TMatrix.md)

#### Returns

 [TMatrix](VM.Managed.TMatrix.md)

