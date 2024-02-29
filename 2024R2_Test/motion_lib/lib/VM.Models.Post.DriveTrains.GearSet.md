# <a id="VM_Models_Post_DriveTrains_GearSet"></a> Class GearSet

Namespace: [VM.Models.Post.DriveTrains](VM.Models.Post.DriveTrains.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class GearSet : DriveTrainBase, IObservableObject, IDisposableObject, IGearSet, IDriveTrain, IDriveTrainVectorDisplayable, IVectorDisplayable, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[DriveTrainBase](VM.Models.Post.DriveTrains.DriveTrainBase.md) ← 
[GearSet](VM.Models.Post.DriveTrains.GearSet.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IGearSet, 
IDriveTrain, 
IDriveTrainVectorDisplayable, 
IVectorDisplayable, 
IPlottable, 
IEntity, 
IObject, 
IHasName, 
IHasIndex, 
IHasID

#### Inherited Members

[DriveTrainBase.AddSubRequest\(ISubRequest\)](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_AddSubRequest\_VM\_Models\_Post\_ISubRequest\_), 
[DriveTrainBase.DisplayName](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_DisplayName), 
[DriveTrainBase.ChartCharacteristics](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_ChartCharacteristics), 
[DriveTrainBase.DataCount](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_DataCount), 
[DriveTrainBase.Datas](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_Datas), 
[DriveTrainBase.FilePath](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_FilePath), 
[DriveTrainBase.MainFileType](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_MainFileType), 
[DriveTrainBase.SubRequests](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_SubRequests), 
[DriveTrainBase.Times](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_Times), 
[DriveTrainBase.TransientData](VM.Models.Post.DriveTrains.DriveTrainBase.md\#VM\_Models\_Post\_DriveTrains\_DriveTrainBase\_TransientData), 
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

### <a id="VM_Models_Post_DriveTrains_GearSet__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> GearSet\(ResultDocument, Identifier, string\)

```csharp
public GearSet(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DriveTrains_GearSet_BodyIndexes"></a> BodyIndexes

```csharp
public int[] BodyIndexes { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DriveTrains_GearSet_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_DriveTrains_GearSet_Characteristics"></a> Characteristics

```csharp
public IList<VectorDisplayCharacteristicInfo> Characteristics { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<VectorDisplayCharacteristicInfo\>

### <a id="VM_Models_Post_DriveTrains_GearSet_DrivingProfiles"></a> DrivingProfiles

```csharp
public IList<int> DrivingProfiles { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_Post_DriveTrains_GearSet_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_DriveTrains_GearSet_GearPairs"></a> GearPairs

```csharp
public IEnumerable<GearPair> GearPairs { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[GearPair](VM.Models.Post.DriveTrains.GearPair.md)\>

### <a id="VM_Models_Post_DriveTrains_GearSet_GearSetFileType"></a> GearSetFileType

```csharp
public DriveTrainFileType GearSetFileType { get; set; }
```

#### Property Value

 DriveTrainFileType

### <a id="VM_Models_Post_DriveTrains_GearSet_GearSetResultFilePath"></a> GearSetResultFilePath

```csharp
public string GearSetResultFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DriveTrains_GearSet_IsAvailable"></a> IsAvailable

```csharp
public bool IsAvailable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DriveTrains_GearSet_PlottableType"></a> PlottableType

```csharp
public PlottableType PlottableType { get; }
```

#### Property Value

 PlottableType

### <a id="VM_Models_Post_DriveTrains_GearSet_SamplingTimes"></a> SamplingTimes

```csharp
public IList<double> SamplingTimes { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_DriveTrains_GearSet_VectorForceIndexes"></a> VectorForceIndexes

```csharp
public IList<int> VectorForceIndexes { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

## Methods

### <a id="VM_Models_Post_DriveTrains_GearSet_AddGearPair_VM_Models_Post_DriveTrains_GearPair_"></a> AddGearPair\(GearPair\)

```csharp
public void AddGearPair(GearPair gearPair)
```

#### Parameters

`gearPair` [GearPair](VM.Models.Post.DriveTrains.GearPair.md)

### <a id="VM_Models_Post_DriveTrains_GearSet_AddSamplingTime_System_Double_"></a> AddSamplingTime\(double\)

```csharp
public void AddSamplingTime(double time)
```

#### Parameters

`time` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_DriveTrains_GearSet_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

