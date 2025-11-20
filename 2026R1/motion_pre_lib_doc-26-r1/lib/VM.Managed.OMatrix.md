# Class OMatrix
<a id="VM_Managed_OMatrix"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the orientation matrix.

```csharp
public sealed class OMatrix : MatrixBase, IOMatrix
```

#### Inheritance

object ← 
[MatrixBase](VM.Managed.MatrixBase.md) ← 
[OMatrix](VM.Managed.OMatrix.md)

#### Implements

[IOMatrix](VM.Managed.IOMatrix.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_OMatrix__ctor_System_Double___"></a> OMatrix\(double\[\]\)

Initializes a new instance of the <xref href="VM.Managed.OMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OMatrix(double[] arr)
```

#### Parameters

`arr` double\[\]

The data of orientation.

### <a id="VM_Managed_OMatrix__ctor_VM_Plane_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> OMatrix\(Plane, VectorBase, VectorBase\)

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

### <a id="VM_Managed_OMatrix__ctor_VM_Managed_OMatrix_"></a> OMatrix\(OMatrix\)

Initializes a new instance of the <xref href="VM.Managed.OMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OMatrix(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

The matrix of orientation

### <a id="VM_Managed_OMatrix__ctor"></a> OMatrix\(\)

Initializes a new instance of the <xref href="VM.Managed.OMatrix" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OMatrix()
```

### <a id="VM_Managed_OMatrix__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> OMatrix\(SerializationInfo, StreamingContext\)

```csharp
protected OMatrix(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` SerializationInfo

`context` StreamingContext

## Properties

### <a id="VM_Managed_OMatrix_Array"></a> Array

Gets or sets the data of OMatrix.

```csharp
public virtual double[] Array { get; set; }
```

#### Property Value

 double\[\]

### <a id="VM_Managed_OMatrix_XVector"></a> XVector

Gets the XVector.

```csharp
public virtual VectorBase XVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_OMatrix_YVector"></a> YVector

Gets the YVector.

```csharp
public virtual VectorBase YVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_OMatrix_ZVector"></a> ZVector

Gets the ZVector.

```csharp
public virtual VectorBase ZVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_OMatrix_Item_System_UInt32_System_UInt32_"></a> this\[uint, uint\]

```csharp
public double this[uint r, uint c] { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_OMatrix_Item_VM_Coordinate_VM_Coordinate_"></a> this\[Coordinate, Coordinate\]

```csharp
public double this[Coordinate r, Coordinate c] { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_OMatrix_Item_System_UInt32_"></a> this\[uint\]

```csharp
public VectorBase this[uint n] { get; set; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_OMatrix_Item_VM_Coordinate_"></a> this\[Coordinate\]

```csharp
public VectorBase this[Coordinate n] { get; set; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

## Methods

### <a id="VM_Managed_OMatrix_Clone"></a> Clone\(\)

```csharp
public object Clone()
```

#### Returns

 object

### <a id="VM_Managed_OMatrix_GetArray"></a> GetArray\(\)

```csharp
public double[] GetArray()
```

#### Returns

 double\[\]

### <a id="VM_Managed_OMatrix_GetDirectionVector_System_UInt32_"></a> GetDirectionVector\(uint\)

Get the direction vector for axis.

```csharp
public VectorBase GetDirectionVector(uint axis)
```

#### Parameters

`axis` uint

The type of axis.

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

The direction vector.

### <a id="VM_Managed_OMatrix_GetDirectionVector_VM_Coordinate_"></a> GetDirectionVector\(Coordinate\)

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

### <a id="VM_Managed_OMatrix_GetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetObjectData\(SerializationInfo, StreamingContext\)

```csharp
public void GetObjectData(SerializationInfo info, StreamingContext __unnamed001)
```

#### Parameters

`info` SerializationInfo

`__unnamed001` StreamingContext

### <a id="VM_Managed_OMatrix_GetSchema"></a> GetSchema\(\)

```csharp
public XmlSchema GetSchema()
```

#### Returns

 XmlSchema

### <a id="VM_Managed_OMatrix_Initialize"></a> Initialize\(\)

Initializes a instance of OMatrix.

```csharp
public void Initialize()
```

### <a id="VM_Managed_OMatrix_Normalize"></a> Normalize\(\)

Nomalize a instance of OMatrix.

```csharp
public void Normalize()
```

### <a id="VM_Managed_OMatrix_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

### <a id="VM_Managed_OMatrix_RotateAxisDeg_VM_Managed_VectorBase_System_Double_"></a> RotateAxisDeg\(VectorBase, double\)

To rotate counterclockwise for axis.

```csharp
public void RotateAxisDeg(VectorBase axis, double dAngle)
```

#### Parameters

`axis` [VectorBase](VM.Managed.VectorBase.md)

The rotation axis.

`dAngle` double

The degree.

### <a id="VM_Managed_OMatrix_RotateAxisDeg_System_UInt32_System_Double_"></a> RotateAxisDeg\(uint, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisDeg(uint nCoord, double dAngle)
```

#### Parameters

`nCoord` uint

The rotation coordinate.

`dAngle` double

The degree.

### <a id="VM_Managed_OMatrix_RotateAxisDeg_VM_Coordinate_System_Double_"></a> RotateAxisDeg\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisDeg(Coordinate c, double dAngle)
```

#### Parameters

`c` Coordinate

The rotation coordinate.

`dAngle` double

The degree.

### <a id="VM_Managed_OMatrix_RotateAxisRad_VM_Managed_VectorBase_System_Double_"></a> RotateAxisRad\(VectorBase, double\)

To rotate counterclockwise for axis.

```csharp
public void RotateAxisRad(VectorBase axis, double dAngle)
```

#### Parameters

`axis` [VectorBase](VM.Managed.VectorBase.md)

The rotation axis.

`dAngle` double

The radian.

### <a id="VM_Managed_OMatrix_RotateAxisRad_System_UInt32_System_Double_"></a> RotateAxisRad\(uint, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisRad(uint nCoord, double dAngle)
```

#### Parameters

`nCoord` uint

The rotation coordinate.

`dAngle` double

The radian.

### <a id="VM_Managed_OMatrix_RotateAxisRad_VM_Coordinate_System_Double_"></a> RotateAxisRad\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
public void RotateAxisRad(Coordinate c, double dAngle)
```

#### Parameters

`c` Coordinate

The rotation coordinate.

`dAngle` double

The radian.

### <a id="VM_Managed_OMatrix_RotateXDeg_System_Double_"></a> RotateXDeg\(double\)

To rotate counterclockwise for x-axis.

```csharp
public void RotateXDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

### <a id="VM_Managed_OMatrix_RotateXRad_System_Double_"></a> RotateXRad\(double\)

To rotate counterclockwise for x-axis.

```csharp
public void RotateXRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

### <a id="VM_Managed_OMatrix_RotateYDeg_System_Double_"></a> RotateYDeg\(double\)

To rotate counterclockwise for y-axis.

```csharp
public void RotateYDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

### <a id="VM_Managed_OMatrix_RotateYRad_System_Double_"></a> RotateYRad\(double\)

To rotate counterclockwise for y-axis.

```csharp
public void RotateYRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

### <a id="VM_Managed_OMatrix_RotateZDeg_System_Double_"></a> RotateZDeg\(double\)

To rotate counterclockwise for z-axis.

```csharp
public void RotateZDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

### <a id="VM_Managed_OMatrix_RotateZRad_System_Double_"></a> RotateZRad\(double\)

To rotate counterclockwise for z-axis.

```csharp
public void RotateZRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

### <a id="VM_Managed_OMatrix_Set_System_Double___"></a> Set\(double\[\]\)

Set data of orientation.

```csharp
public void Set(double[] arr)
```

#### Parameters

`arr` double\[\]

The data of orientation

### <a id="VM_Managed_OMatrix_Set_VM_Managed_OMatrix_"></a> Set\(OMatrix\)

Set Matrix of orientation.

```csharp
public void Set(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

The matrix of orientation

### <a id="VM_Managed_OMatrix_SetOrientation_System_Double___"></a> SetOrientation\(double\[\]\)

Set data of orientation.

```csharp
public void SetOrientation(double[] arr)
```

#### Parameters

`arr` double\[\]

The data of orientation.

### <a id="VM_Managed_OMatrix_SetOrientation_VM_Managed_OMatrix_"></a> SetOrientation\(OMatrix\)

Set data of orientation.

```csharp
public void SetOrientation(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

The matrix of orientation.

### <a id="VM_Managed_OMatrix_SetOrientation_VM_Plane_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> SetOrientation\(Plane, VectorBase, VectorBase\)

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

### <a id="VM_Managed_OMatrix_SetOrientationEADeg_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationEADeg\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is degree.

```csharp
public void SetOrientationEADeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` RotationAxes

The type of euler angle.

`dAlpha` double

The alpha of euler angle.

`dBeta` double

The beta of euler angle.

`dGamma` double

The gamma of euler angle.

### <a id="VM_Managed_OMatrix_SetOrientationEARad_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationEARad\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is radian.

```csharp
public void SetOrientationEARad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` RotationAxes

The type of euler angle.

`dAlpha` double

The alpha of euler angle.

`dBeta` double

The beta of euler angle.

`dGamma` double

The gamma of euler angle.

### <a id="VM_Managed_OMatrix_SetOrientationFixedAngleDeg_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationFixedAngleDeg\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is degree.

```csharp
public void SetOrientationFixedAngleDeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` RotationAxes

The type of fixed angle.

`dAlpha` double

The alpha of fixed angle.

`dBeta` double

The beta of fixed angle.

`dGamma` double

The gamma of fixed angle.

### <a id="VM_Managed_OMatrix_SetOrientationFixedAngleRad_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationFixedAngleRad\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is radian.

```csharp
public void SetOrientationFixedAngleRad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
```

#### Parameters

`ea` RotationAxes

The type of fixed angle.

`dAlpha` double

The alpha of fixed angle.

`dBeta` double

The beta of fixed angle.

`dGamma` double

The gamma of fixed angle.

### <a id="VM_Managed_OMatrix_TransposeOrientation"></a> TransposeOrientation\(\)

Transposed rows and columns of the matrix.

```csharp
public void TransposeOrientation()
```

### <a id="VM_Managed_OMatrix_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

### <a id="VM_Managed_OMatrix_op_MultiplicationAssignment_VM_Managed_VectorBase_VM_Managed_OMatrix_"></a> op\_MultiplicationAssignment\(VectorBase, OMatrix\)

```csharp
public static VectorBase op_MultiplicationAssignment(VectorBase vec, OMatrix mat)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

`mat` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_OMatrix_op_MultiplicationAssignment_VM_Managed_OMatrix_VM_Managed_OMatrix_"></a> op\_MultiplicationAssignment\(OMatrix, OMatrix\)

```csharp
public static OMatrix op_MultiplicationAssignment(OMatrix mat1, OMatrix mat2)
```

#### Parameters

`mat1` [OMatrix](VM.Managed.OMatrix.md)

`mat2` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [OMatrix](VM.Managed.OMatrix.md)

## Operators

### <a id="VM_Managed_OMatrix_op_Equality_VM_Managed_OMatrix_VM_Managed_OMatrix_"></a> operator ==\(OMatrix, OMatrix\)

```csharp
public static bool operator ==(OMatrix mat1, OMatrix mat2)
```

#### Parameters

`mat1` [OMatrix](VM.Managed.OMatrix.md)

`mat2` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 bool

### <a id="VM_Managed_OMatrix_op_Implicit_VM_Managed_OMatrix__VM_OMatrix"></a> implicit operator OMatrix\(OMatrix\)

```csharp
public static implicit operator OMatrix(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 OMatrix

### <a id="VM_Managed_OMatrix_op_Implicit_VM_OMatrix__VM_Managed_OMatrix"></a> implicit operator OMatrix\(OMatrix\)

```csharp
public static implicit operator OMatrix(OMatrix mat)
```

#### Parameters

`mat` OMatrix

#### Returns

 [OMatrix](VM.Managed.OMatrix.md)

### <a id="VM_Managed_OMatrix_op_Inequality_VM_Managed_OMatrix_VM_Managed_OMatrix_"></a> operator \!=\(OMatrix, OMatrix\)

```csharp
public static bool operator !=(OMatrix mat1, OMatrix mat2)
```

#### Parameters

`mat1` [OMatrix](VM.Managed.OMatrix.md)

`mat2` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 bool

### <a id="VM_Managed_OMatrix_op_Multiply_VM_Managed_VectorBase_VM_Managed_OMatrix_"></a> operator \*\(VectorBase, OMatrix\)

```csharp
public static VectorBase operator *(VectorBase vec, OMatrix mat)
```

#### Parameters

`vec` [VectorBase](VM.Managed.VectorBase.md)

`mat` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_OMatrix_op_Multiply_VM_Managed_OMatrix_VM_Managed_OMatrix_"></a> operator \*\(OMatrix, OMatrix\)

```csharp
public static OMatrix operator *(OMatrix mat1, OMatrix mat2)
```

#### Parameters

`mat1` [OMatrix](VM.Managed.OMatrix.md)

`mat2` [OMatrix](VM.Managed.OMatrix.md)

#### Returns

 [OMatrix](VM.Managed.OMatrix.md)

