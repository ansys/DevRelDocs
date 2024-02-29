# <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart"></a> Class DataRoadGeometryPart

Namespace: [VM.Models.Post.VisualizationImpl.GeometryModel](VM.Models.Post.VisualizationImpl.GeometryModel.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
[DependencyResolve(typeof(IDataRoadGeometryPart))]
public class DataRoadGeometryPart : Part, IDataRoadGeometryPart
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Part ← 
[DataRoadGeometryPart](VM.Models.Post.VisualizationImpl.GeometryModel.DataRoadGeometryPart.md)

#### Implements

IDataRoadGeometryPart

#### Inherited Members

Part.getCPtr\(Part\), 
Part.Dispose\(\), 
Part.GetHashCode\(\), 
Part.data\(\), 
Part.setData\(Data\), 
Part.setId\(int\), 
Part.textureCoordinates\(\), 
Part.setTextureCoordinates\(TextureCoordinates\), 
Part.dataIndexedPolylines\(\), 
Part.dataIndexedTriangles\(\), 
Part.dataPoints\(\), 
Part.dataTriangleFan\(\), 
Part.dataTriangleStrip\(\), 
Part.Id, 
Part.Settings, 
Part.Transformation, 
Part.BoundingBox, 
RefCountedObject.swigCMemOwn, 
RefCountedObject.getCPtr\(RefCountedObject\), 
RefCountedObject.Dispose\(\), 
RefCountedObject.addRef\(\), 
RefCountedObject.release\(\), 
RefCountedObject.refCount\(\), 
RefCountedObject.setRefCountZero\(\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart__ctor"></a> DataRoadGeometryPart\(\)

```csharp
public DataRoadGeometryPart()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_ColorScheme"></a> ColorScheme

```csharp
public ColorSchemeTable ColorScheme { get; set; }
```

#### Property Value

 ColorSchemeTable

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_CurrentColorScheme"></a> CurrentColorScheme

```csharp
public IList<Color> CurrentColorScheme { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_EnableContour"></a> EnableContour

```csharp
public bool EnableContour { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_FilePath"></a> FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_FitAllRelatedViews"></a> FitAllRelatedViews

```csharp
public Action FitAllRelatedViews { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_LegendContinuousDomain"></a> LegendContinuousDomain

```csharp
public IOverlayLegendContinuousDomain LegendContinuousDomain { get; set; }
```

#### Property Value

 IOverlayLegendContinuousDomain

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_LegendFontColor"></a> LegendFontColor

```csharp
public Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_LegendVisible"></a> LegendVisible

```csharp
public bool LegendVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_ParentIndex"></a> ParentIndex

```csharp
public int ParentIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_PartColor"></a> PartColor

```csharp
public Color PartColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_PartVisible"></a> PartVisible

```csharp
public bool PartVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_SystemUnit"></a> SystemUnit

```csharp
public ExtendedUnit SystemUnit { get; set; }
```

#### Property Value

 ExtendedUnit

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_Unit"></a> Unit

```csharp
public string Unit { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_Initialize_System_Double___System_Double___"></a> Initialize\(double\[\], double\[\]\)

```csharp
public void Initialize(double[] initialtransformation, double[] localtransformation)
```

#### Parameters

`initialtransformation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`localtransformation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_LoadRoadGeometryPart_System_String_System_Double_"></a> LoadRoadGeometryPart\(string, double\)

```csharp
public void LoadRoadGeometryPart(string filepath, double lengthfactor)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lengthfactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_MakeMat4d_System_Double___"></a> MakeMat4d\(double\[\]\)

```csharp
public Mat4d MakeMat4d(double[] transformation)
```

#### Parameters

`transformation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 Mat4d

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_MakeMat4d_VM_Vector_System_Double___"></a> MakeMat4d\(Vector, double\[\]\)

```csharp
public Mat4d MakeMat4d(Vector translation, double[] orientation)
```

#### Parameters

`translation` Vector

`orientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 Mat4d

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_UpdateColorScheme_VM_Models_Post_ColorSchemeTable_"></a> UpdateColorScheme\(ColorSchemeTable\)

```csharp
public void UpdateColorScheme(ColorSchemeTable legendColorType = ColorSchemeTable.BLACK_WHITE)
```

#### Parameters

`legendColorType` ColorSchemeTable

### <a id="VM_Models_Post_VisualizationImpl_GeometryModel_DataRoadGeometryPart_UpdateTransformation_Ceetron_CeetronDesktopComponents_Mat4d_"></a> UpdateTransformation\(Mat4d\)

```csharp
public void UpdateTransformation(Mat4d mat)
```

#### Parameters

`mat` Mat4d

