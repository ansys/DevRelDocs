# <a id="VM_Models_Post_DriveTrains_DriveTrainBase"></a> Class DriveTrainBase

Namespace: [VM.Models.Post.DriveTrains](VM.Models.Post.DriveTrains.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public abstract class DriveTrainBase : EntityBase, IObservableObject, IDisposableObject, IDriveTrain, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[DriveTrainBase](VM.Models.Post.DriveTrains.DriveTrainBase.md)

#### Derived

[AssemblyManager](VM.Models.Post.DriveTrains.AssemblyManager.md), 
[BearingSet](VM.Models.Post.DriveTrains.BearingSet.md), 
[GearSet](VM.Models.Post.DriveTrains.GearSet.md), 
[ShaftSetBase](VM.Models.Post.DriveTrains.ShaftSetBase.md)

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

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_"></a> DriveTrainBase\(ResultDocument, Identifier, string\)

```csharp
protected DriveTrainBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_ChartCharacteristics"></a> ChartCharacteristics

```csharp
public IList<string> ChartCharacteristics { get; protected set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_DataCount"></a> DataCount

```csharp
public int DataCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_Datas"></a> Datas

```csharp
public IDictionary<string, IList<string>> Datas { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_DisplayName"></a> DisplayName

```csharp
public override string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_FilePath"></a> FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_MainFileType"></a> MainFileType

```csharp
public DriveTrainFileType MainFileType { get; set; }
```

#### Property Value

 DriveTrainFileType

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_SubRequests"></a> SubRequests

```csharp
public IList<SubRequest> SubRequests { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<SubRequest\>

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_Times"></a> Times

```csharp
public IList<double> Times { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_TransientData"></a> TransientData

```csharp
public IList<IList<double>> TransientData { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

## Methods

### <a id="VM_Models_Post_DriveTrains_DriveTrainBase_AddSubRequest_VM_Models_Post_ISubRequest_"></a> AddSubRequest\(ISubRequest\)

```csharp
public void AddSubRequest(ISubRequest subRequest)
```

#### Parameters

`subRequest` ISubRequest

