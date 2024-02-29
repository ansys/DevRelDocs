# <a id="VM_Models_Post_DriveTrains_GearPair"></a> Class GearPair

Namespace: [VM.Models.Post.DriveTrains](VM.Models.Post.DriveTrains.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class GearPair : EntityBase, IObservableObject, IDisposableObject, IGearPair, IDriveTrainVectorDisplayable, IVectorDisplayable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[GearPair](VM.Models.Post.DriveTrains.GearPair.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IGearPair, 
IDriveTrainVectorDisplayable, 
IVectorDisplayable, 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Models_Post_DriveTrains_GearPair__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> GearPair\(ResultDocument, Identifier, string\)

```csharp
public GearPair(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DriveTrains_GearPair_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_DriveTrains_GearPair_Characteristics"></a> Characteristics

```csharp
public IList<VectorDisplayCharacteristicInfo> Characteristics { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<VectorDisplayCharacteristicInfo\>

### <a id="VM_Models_Post_DriveTrains_GearPair_Deformations"></a> Deformations

```csharp
public IList<double[]> Deformations { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DriveTrains_GearPair_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_DriveTrains_GearPair_GMFSplineIndexes"></a> GMFSplineIndexes

```csharp
public IList<int> GMFSplineIndexes { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DriveTrains_GearPair_ParentIndex"></a> ParentIndex

```csharp
public int ParentIndex { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DriveTrains_GearPair_Pressures"></a> Pressures

```csharp
public IList<double[]> Pressures { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DriveTrains_GearPair_RangeX"></a> RangeX

```csharp
public IList<double[]> RangeX { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DriveTrains_GearPair_RangeY"></a> RangeY

```csharp
public IList<double[]> RangeY { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

## Methods

### <a id="VM_Models_Post_DriveTrains_GearPair_AddDeformation_System_Double___"></a> AddDeformation\(double\[\]\)

```csharp
public void AddDeformation(double[] deformation)
```

#### Parameters

`deformation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DriveTrains_GearPair_AddPressure_System_Double___"></a> AddPressure\(double\[\]\)

```csharp
public void AddPressure(double[] pressure)
```

#### Parameters

`pressure` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DriveTrains_GearPair_AddRange_System_Double___System_Double___"></a> AddRange\(double\[\], double\[\]\)

```csharp
public void AddRange(double[] x, double[] y)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`y` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

