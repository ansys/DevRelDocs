# <a id="VM_Models_Post_DriveTrains_FEShaftSet"></a> Class FEShaftSet

Namespace: [VM.Models.Post.DriveTrains](VM.Models.Post.DriveTrains.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class FEShaftSet : ShaftSetBase, IObservableObject, IDisposableObject, IDriveTrain, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[DriveTrainBase](VM.Models.Post.DriveTrains.DriveTrainBase.md) ← 
[ShaftSetBase](VM.Models.Post.DriveTrains.ShaftSetBase.md) ← 
[FEShaftSet](VM.Models.Post.DriveTrains.FEShaftSet.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IDriveTrain, 
IEntity, 
IObject, 
IHasName, 
IHasIndex, 
IHasID

#### Inherited Members

[ShaftSetBase.CategoryType](VM.Models.Post.DriveTrains.ShaftSetBase.md\#VM\_Models\_Post\_DriveTrains\_ShaftSetBase\_CategoryType), 
[ShaftSetBase.EntityType](VM.Models.Post.DriveTrains.ShaftSetBase.md\#VM\_Models\_Post\_DriveTrains\_ShaftSetBase\_EntityType), 
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

### <a id="VM_Models_Post_DriveTrains_FEShaftSet__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> FEShaftSet\(ResultDocument, Identifier, string\)

```csharp
public FEShaftSet(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DriveTrains_FEShaftSet_FEBodyIndex"></a> FEBodyIndex

```csharp
public int FEBodyIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

