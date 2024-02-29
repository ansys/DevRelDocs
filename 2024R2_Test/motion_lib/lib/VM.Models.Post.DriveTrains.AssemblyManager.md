# <a id="VM_Models_Post_DriveTrains_AssemblyManager"></a> Class AssemblyManager

Namespace: [VM.Models.Post.DriveTrains](VM.Models.Post.DriveTrains.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class AssemblyManager : DriveTrainBase, IObservableObject, IDisposableObject, IDriveTrain, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[DriveTrainBase](VM.Models.Post.DriveTrains.DriveTrainBase.md) ← 
[AssemblyManager](VM.Models.Post.DriveTrains.AssemblyManager.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IDriveTrain, 
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

### <a id="VM_Models_Post_DriveTrains_AssemblyManager__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> AssemblyManager\(ResultDocument, Identifier, string\)

```csharp
public AssemblyManager(ResultDocument parentDocumentID, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocumentID` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DriveTrains_AssemblyManager_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_DriveTrains_AssemblyManager_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_DriveTrains_AssemblyManager_PlottableType"></a> PlottableType

```csharp
public PlottableType PlottableType { get; }
```

#### Property Value

 PlottableType

