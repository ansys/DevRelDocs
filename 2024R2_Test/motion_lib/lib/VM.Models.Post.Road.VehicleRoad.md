# <a id="VM_Models_Post_Road_VehicleRoad"></a> Class VehicleRoad

Namespace: [VM.Models.Post.Road](VM.Models.Post.Road.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public class VehicleRoad : EntityBase, IObservableObject, IDisposableObject, IHasRoadGeometry, IContour, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[VehicleRoad](VM.Models.Post.Road.VehicleRoad.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IHasRoadGeometry, 
IContour, 
IEntity, 
IObject, 
IHasName, 
IHasIndex, 
IHasID

#### Inherited Members

EntityBase.IsSupported\(EntityFilterMode\), 
EntityBase.CategoryType, 
EntityBase.EntityType, 
EntityBase.HasGeometry, 
EntityBase.ID, 
EntityBase.Index, 
EntityBase.InitialValues, 
EntityBase.IsDummy, 
EntityBase.IsPlottable, 
EntityBase.IsSupportedGeneralMode, 
EntityBase.IsSupportedVectorDisplayMode, 
ObjectBase.GetUnstructGridModel\(\), 
ObjectBase.SetName\(string\), 
ObjectBase.UpdateAnimation\(UpdateActionType\), 
ObjectBase.AnalysisResult, 
ObjectBase.AnalysisResultID, 
ObjectBase.AnalysisResultType, 
ObjectBase.DisplayName, 
ObjectBase.FullName, 
ObjectBase.Name, 
ObjectBase.ParentDocument, 
ObjectBase.CanLoad, 
ObjectBase.CanSave, 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_Road_VehicleRoad__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_VM_Models_Post_IDataRoadGeometryPart_"></a> VehicleRoad\(ResultDocument, Identifier, string, IDataRoadGeometryPart\)

```csharp
public VehicleRoad(ResultDocument parentDocumentID, Identifier analysisResultID, string fullName, IDataRoadGeometryPart dataVehicleRoadPart)
```

#### Parameters

`parentDocumentID` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dataVehicleRoadPart` IDataRoadGeometryPart

## Properties

### <a id="VM_Models_Post_Road_VehicleRoad_CanLoad"></a> CanLoad

```csharp
protected override bool CanLoad { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Road_VehicleRoad_CanSave"></a> CanSave

```csharp
protected override bool CanSave { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Road_VehicleRoad_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_Road_VehicleRoad_Color"></a> Color

```csharp
[SaveProperty(false)]
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Road_VehicleRoad_DataRoadGeometryPart"></a> DataRoadGeometryPart

```csharp
public IDataRoadGeometryPart DataRoadGeometryPart { get; }
```

#### Property Value

 IDataRoadGeometryPart

### <a id="VM_Models_Post_Road_VehicleRoad_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_Road_VehicleRoad_FilePath"></a> FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_Road_VehicleRoad_IsContourEnabled"></a> IsContourEnabled

```csharp
[SaveProperty(false)]
public bool IsContourEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Road_VehicleRoad_IsLegendVisible"></a> IsLegendVisible

```csharp
[SaveProperty(false)]
public bool IsLegendVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Road_VehicleRoad_IsVisible"></a> IsVisible

```csharp
[SaveProperty(false)]
public bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Road_VehicleRoad_LegendColorType"></a> LegendColorType

```csharp
[SaveProperty(false)]
public ColorSchemeTable LegendColorType { get; set; }
```

#### Property Value

 ColorSchemeTable

### <a id="VM_Models_Post_Road_VehicleRoad_LegendFontColor"></a> LegendFontColor

```csharp
[SaveProperty(false)]
public Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_Road_VehicleRoad_ParentIndex"></a> ParentIndex

```csharp
public int ParentIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Road_VehicleRoad_Position"></a> Position

```csharp
public double[] Position { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Road_VehicleRoad_RoadGeometry"></a> RoadGeometry

```csharp
public IDataRoadGeometryPart RoadGeometry { get; }
```

#### Property Value

 IDataRoadGeometryPart

### <a id="VM_Models_Post_Road_VehicleRoad_Unit"></a> Unit

```csharp
public string Unit { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_Road_VehicleRoad_CurrentContourColor"></a> CurrentContourColor\(\)

```csharp
public IList<Color> CurrentContourColor()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

