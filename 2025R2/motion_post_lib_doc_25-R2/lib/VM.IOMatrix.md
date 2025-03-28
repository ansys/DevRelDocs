# Interface IOMatrix

Namespace: [VM](VM.md)  
Assembly: VM.dll  

This interface is to represent the orientation matrix.

```python
public interface IOMatrix
```

## Properties

### Array

Gets or sets the data of OMatrix.

```python
double[] Array { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### XVector

Gets or sets the XVector.

```python
Vector XVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### YVector

Gets or sets the YVector.

```python
Vector YVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

### ZVector

Gets or sets the ZVector.

```python
Vector ZVector { get; set; }
```

#### Property Value

 [Vector](VM.Vector.md)

## Methods

### GetDirectionVector\(Coordinate\)

Get the direction vector for axis.

```python
Vector GetDirectionVector(Coordinate axis)
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
Vector GetDirectionVector(int axis)
```

#### Parameters

`axis` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The type of axis.

#### Returns

 [Vector](VM.Vector.md)

The direction vector.

### Initialize\(\)

Initializes a instance of OMatrix.

```python
void Initialize()
```

### Normalize\(\)

Nomalize a instance of OMatrix.

```python
void Normalize()
```

### RotateAxisDeg\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```python
void RotateAxisDeg(Coordinate c, double dAngle)
```

#### Parameters

`c` [Coordinate](VM.Coordinate.md)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateAxisDeg\(int, double\)

To rotate counterclockwise for coordinate.

```python
void RotateAxisDeg(int nCoord, double dAngle)
```

#### Parameters

`nCoord` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateAxisDeg\(Vector, double\)

To rotate counterclockwise for axis.

```python
void RotateAxisDeg(Vector axis, double dAngle)
```

#### Parameters

`axis` [Vector](VM.Vector.md)

The rotation axis.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateAxisRad\(Coordinate, double\)

To rotate counterclockwise for coordinate.

```python
void RotateAxisRad(Coordinate c, double dAngle)
```

#### Parameters

`c` [Coordinate](VM.Coordinate.md)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateAxisRad\(int, double\)

To rotate counterclockwise for coordinate.

```python
void RotateAxisRad(int nCoord, double dAngle)
```

#### Parameters

`nCoord` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The rotation coordinate.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateAxisRad\(Vector, double\)

To rotate counterclockwise for axis.

```python
void RotateAxisRad(Vector axis, double dAngle)
```

#### Parameters

`axis` [Vector](VM.Vector.md)

The rotation axis.

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateXDeg\(double\)

To rotate counterclockwise for x-axis.

```python
void RotateXDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateXRad\(double\)

To rotate counterclockwise for x-axis.

```python
void RotateXRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateYDeg\(double\)

To rotate counterclockwise for y-axis.

```python
void RotateYDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateYRad\(double\)

To rotate counterclockwise for y-axis.

```python
void RotateYRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### RotateZDeg\(double\)

To rotate counterclockwise for z-axis.

```python
void RotateZDeg(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The degree.

### RotateZRad\(double\)

To rotate counterclockwise for z-axis.

```python
void RotateZRad(double dAngle)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radian.

### SetOrientation\(Plane, Vector, Vector\)

Set data of orientation.

```python
void SetOrientation(Plane type, Vector vecMaster, Vector vecSlave)
```

#### Parameters

`type` [Plane](VM.Plane.md)

The type of plane.

`vecMaster` [Vector](VM.Vector.md)

The vector for master.

`vecSlave` [Vector](VM.Vector.md)

The vector for slave.

### SetOrientation\(OMatrix\)

Set data of orientation.

```python
void SetOrientation(OMatrix mat)
```

#### Parameters

`mat` [OMatrix](VM.OMatrix.md)

The matrix of orientation.

### SetOrientation\(double\[\]\)

Set data of orientation.

```python
void SetOrientation(double[] arr)
```

#### Parameters

`arr` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The data of orientation.

### SetOrientationEADeg\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is degree.

```python
void SetOrientationEADeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
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

### SetOrientationEARad\(RotationAxes, double, double, double\)

Set data of orientation for euler angle. Unit is radian.

```python
void SetOrientationEARad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
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

### SetOrientationFixedAngleDeg\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is degree.

```python
void SetOrientationFixedAngleDeg(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
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

### SetOrientationFixedAngleRad\(RotationAxes, double, double, double\)

Set data of orientation for fixed angle. Unit is radian.

```python
void SetOrientationFixedAngleRad(RotationAxes ea, double dAlpha, double dBeta, double dGamma)
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

### TransposeOrientation\(\)

Transposed rows and columns of the matrix.

```python
void TransposeOrientation()
```


