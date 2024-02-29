# <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil"></a> Class CuttingPlaneUtil

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class CuttingPlaneUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CuttingPlaneUtil](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlaneUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil__ctor"></a> CuttingPlaneUtil\(\)

```csharp
public CuttingPlaneUtil()
```

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_ChangeDegreeRadian_System_Boolean_System_Double_"></a> ChangeDegreeRadian\(bool, double\)

```csharp
public static double ChangeDegreeRadian(bool bdtor, double angle)
```

#### Parameters

`bdtor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`angle` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_CreateMat4d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> CreateMat4d\(Vec3d, Vec3d, Vec3d, Vec3d\)

```csharp
public static Mat4d CreateMat4d(Vec3d axixX, Vec3d axixY, Vec3d axixZ, Vec3d position)
```

#### Parameters

`axixX` Vec3d

`axixY` Vec3d

`axixZ` Vec3d

`position` Vec3d

#### Returns

 Mat4d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_GetAxis_Ceetron_CeetronDesktopComponents_Mat4d_System_Int32_"></a> GetAxis\(Mat4d, int\)

```csharp
public static Vec3d GetAxis(Mat4d mat, int ntype)
```

#### Parameters

`mat` Mat4d

`ntype` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_GetPerpendicularVector_Ceetron_CeetronDesktopComponents_Vec3d_"></a> GetPerpendicularVector\(Vec3d\)

```csharp
public static Vec3d GetPerpendicularVector(Vec3d vecTarget)
```

#### Parameters

`vecTarget` Vec3d

#### Returns

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_GetPosition_Ceetron_CeetronDesktopComponents_Mat4d_"></a> GetPosition\(Mat4d\)

```csharp
public static Vec3d GetPosition(Mat4d mat)
```

#### Parameters

`mat` Mat4d

#### Returns

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_GetValidVector_Ceetron_CeetronDesktopComponents_Vec3d_"></a> GetValidVector\(Vec3d\)

```csharp
public static void GetValidVector(Vec3d vector)
```

#### Parameters

`vector` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_RotateMatrix_Ceetron_CeetronDesktopComponents_Mat4d_Ceetron_CeetronDesktopComponents_Vec3d_System_Double_"></a> RotateMatrix\(Mat4d, Vec3d, double\)

```csharp
public static Mat4d RotateMatrix(Mat4d orgMat, Vec3d axis, double radian)
```

#### Parameters

`orgMat` Mat4d

`axis` Vec3d

`radian` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 Mat4d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_RotateVector_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_System_Double_"></a> RotateVector\(Vec3d, Vec3d, double\)

```csharp
public static Vec3d RotateVector(Vec3d tartgetPt, Vec3d axis, double angle)
```

#### Parameters

`tartgetPt` Vec3d

`axis` Vec3d

`angle` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_SetPosition_Ceetron_CeetronDesktopComponents_Mat4d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> SetPosition\(Mat4d, Vec3d\)

```csharp
public static void SetPosition(Mat4d mat, Vec3d position)
```

#### Parameters

`mat` Mat4d

`position` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_SetTransFormation_Ceetron_CeetronDesktopComponents_Mat4d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> SetTransFormation\(Mat4d, Vec3d\)

```csharp
public static Vec3d SetTransFormation(Mat4d mat, Vec3d point)
```

#### Parameters

`mat` Mat4d

`point` Vec3d

#### Returns

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlaneUtil_VectorGetAngle_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> VectorGetAngle\(Vec3d, Vec3d, Vec3d\)

```csharp
public static double VectorGetAngle(Vec3d vec1, Vec3d vec2, Vec3d axis)
```

#### Parameters

`vec1` Vec3d

`vec2` Vec3d

`axis` Vec3d

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

