# Interface IOMatrix
<a id="VM_Managed_IOMatrix"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the orientation matrix.

```csharp
public interface IOMatrix
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_IOMatrix_Array"></a> Array

Gets or sets the data of OMatrix.

```csharp
double[] Array { get; set; }
```

#### Property Value

 double\[\]

### <a id="VM_Managed_IOMatrix_XVector"></a> XVector

Gets the XVector.

```csharp
VectorBase XVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_IOMatrix_YVector"></a> YVector

Gets the YVector.

```csharp
VectorBase YVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_IOMatrix_ZVector"></a> ZVector

Gets the ZVector.

```csharp
VectorBase ZVector { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

## Methods

### <a id="VM_Managed_IOMatrix_GetDirectionVector_System_UInt32_"></a> GetDirectionVector\(uint\)

Get the direction vector for axis.

```csharp
VectorBase GetDirectionVector(uint axis)
```

#### Parameters

`axis` uint

The type of axis.

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

The direction vector.

### <a id="VM_Managed_IOMatrix_GetDirectionVector_VM_Coordinate_"></a> GetDirectionVector\(Coordinate\)

Get the direction vector for axis.

```csharp
VectorBase GetDirectionVector(Coordinate axis)
```

#### Parameters

`axis` Coordinate

The type of axis.

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)

The direction vector.

### <a id="VM_Managed_IOMatrix_Initialize"></a> Initialize\(\)

Initializes a instance of OMatrix.

```csharp
void Initialize()
```

### <a id="VM_Managed_IOMatrix_Normalize"></a> Normalize\(\)

Nomalize a instance of OMatrix.

```csharp
void Normalize()
```

### <a id="VM_Managed_IOMatrix_RotateAxisDeg_VM_Managed_VectorBase_System_Double_"></a> RotateAxisDeg\(VectorBase, double\)

To rotate counterclockwise for axis.

```csharp
void RotateAxisDeg(VectorBase axis, double dAngle)
```

#### Parameters

`axis` [VectorBase](VM.Managed.VectorBase.md)

The rotation axis.

`dAngle` double

The degree.

### <a id="VM_Managed_IOMatrix_RotateAxisDeg_System_UInt32_System_Double_"></a> RotateAxisDeg\(uint, double\)

To rotate counterclockwise for coordinate.

```csharp
void RotateAxisDeg(uint nCoord, double dAngle)
```

#### Parameters

`nCoord` uint

The rotation coordinate.

`dAngle` double

The degree.

### <a id="VM_Managed_IOMatrix_RotateAxisDeg_VM_Coordinate_System_Double_"></a> RotateAxisDeg\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
void RotateAxisDeg(Coordinate c, double dAngle)
```

#### Parameters

`c` Coordinate

The rotation coordinate.

`dAngle` double

The degree.

### <a id="VM_Managed_IOMatrix_RotateAxisRad_VM_Managed_VectorBase_System_Double_"></a> RotateAxisRad\(VectorBase, double\)

To rotate counterclockwise for axis.

```csharp
void RotateAxisRad(VectorBase axis, double dAngle)
```

#### Parameters

`axis` [VectorBase](VM.Managed.VectorBase.md)

The rotation axis.

`dAngle` double

The radian.

### <a id="VM_Managed_IOMatrix_RotateAxisRad_System_UInt32_System_Double_"></a> RotateAxisRad\(uint, double\)

To rotate counterclockwise for coordinate.

```csharp
void RotateAxisRad(uint nCoord, double dAngle)
```

#### Parameters

`nCoord` uint

The rotation coordinate.

`dAngle` double

The radian.

### <a id="VM_Managed_IOMatrix_RotateAxisRad_VM_Coordinate_System_Double_"></a> RotateAxisRad\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```csharp
void RotateAxisRad(Coordinate c, double dAngle)
```

#### Parameters

`c` Coordinate

The rotation coordinate.

`dAngle` double

The radian.

### <a id="VM_Managed_IOMatrix_RotateXDeg_System_Double_"></a> RotateXDeg\(double\)

To rotate counterclockwise for x-axis.

```csharp
void RotateXDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

### <a id="VM_Managed_IOMatrix_RotateXRad_System_Double_"></a> RotateXRad\(double\)

To rotate counterclockwise for x-axis.

```csharp
void RotateXRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

### <a id="VM_Managed_IOMatrix_RotateYDeg_System_Double_"></a> RotateYDeg\(double\)

To rotate counterclockwise for y-axis.

```csharp
void RotateYDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

### <a id="VM_Managed_IOMatrix_RotateYRad_System_Double_"></a> RotateYRad\(double\)

To rotate counterclockwise for y-axis.

```csharp
void RotateYRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

### <a id="VM_Managed_IOMatrix_RotateZDeg_System_Double_"></a> RotateZDeg\(double\)

To rotate counterclockwise for z-axis.

```csharp
void RotateZDeg(double dAngle)
```

#### Parameters

`dAngle` double

The degree.

### <a id="VM_Managed_IOMatrix_RotateZRad_System_Double_"></a> RotateZRad\(double\)

To rotate counterclockwise for z-axis.

```csharp
void RotateZRad(double dAngle)
```

#### Parameters

`dAngle` double

The radian.

### <a id="VM_Managed_IOMatrix_SetOrientation_System_Double___"></a> SetOrientation\(double\[\]\)

Set data of orientation.

```csharp
void SetOrientation(double[] arr)
```

#### Parameters

`arr` double\[\]

The data of orientation.

### <a id="VM_Managed_IOMatrix_SetOrientation_VM_Managed_OMatrix_"></a> SetOrientation\(OMatrix\)

Set data of orientation.

```csharp
void SetOrientation(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.Managed.OMatrix.md)

The matrix of orientation.

### <a id="VM_Managed_IOMatrix_SetOrientation_VM_Plane_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> SetOrientation\(Plane, VectorBase, VectorBase\)

Set data of orientation.

```csharp
void SetOrientation(Plane type, VectorBase vecMaster, VectorBase vecSlave)
```

#### Parameters

`type` Plane

The type of plane.

`vecMaster` [VectorBase](VM.Managed.VectorBase.md)

The vector for master.

`vecSlave` [VectorBase](VM.Managed.VectorBase.md)

The vector for slave.

### <a id="VM_Managed_IOMatrix_SetOrientationEADeg_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationEADeg\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is degree.

```csharp
void SetOrientationEADeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
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

### <a id="VM_Managed_IOMatrix_SetOrientationEARad_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationEARad\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is radian.

```csharp
void SetOrientationEARad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
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

### <a id="VM_Managed_IOMatrix_SetOrientationFixedAngleDeg_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationFixedAngleDeg\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is degree.

```csharp
void SetOrientationFixedAngleDeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
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

### <a id="VM_Managed_IOMatrix_SetOrientationFixedAngleRad_VM_RotationAxes_System_Double_System_Double_System_Double_"></a> SetOrientationFixedAngleRad\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is radian.

```csharp
void SetOrientationFixedAngleRad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
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

### <a id="VM_Managed_IOMatrix_TransposeOrientation"></a> TransposeOrientation\(\)

Transposed rows and columns of the matrix.

```csharp
void TransposeOrientation()
```

