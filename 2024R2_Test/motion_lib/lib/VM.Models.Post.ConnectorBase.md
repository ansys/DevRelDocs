# <a id="VM_Models_Post_ConnectorBase"></a> Class ConnectorBase

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public abstract class ConnectorBase : EntityBase, IObservableObject, IDisposableObject, IConnector, IVectorDisplayable, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[ConnectorBase](VM.Models.Post.ConnectorBase.md)

#### Derived

[ConstraintsBase](VM.Models.Post.Constraints.ConstraintsBase.md), 
[ContactBase](VM.Models.Post.Contacts.ContactBase.md), 
[EasyFlexEntityBase](VM.Models.Post.EasyFlexEntityBase.md), 
[ForceBase](VM.Models.Post.Forces.ForceBase.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IConnector, 
IVectorDisplayable, 
IPlottable, 
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

### <a id="VM_Models_Post_ConnectorBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_Int32___"></a> ConnectorBase\(ResultDocument, Identifier, string, int\[\]\)

```csharp
protected ConnectorBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName, int[] markerIndexes)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_ConnectorBase_ActionBodyIndex"></a> ActionBodyIndex

```csharp
public int ActionBodyIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ConnectorBase_BaseBodyIndex"></a> BaseBodyIndex

```csharp
public int BaseBodyIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ConnectorBase_Characteristics"></a> Characteristics

```csharp
public IList<VectorDisplayCharacteristicInfo> Characteristics { get; protected set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<VectorDisplayCharacteristicInfo\>

### <a id="VM_Models_Post_ConnectorBase_ConnectorType"></a> ConnectorType

```csharp
public abstract ConnectorType ConnectorType { get; }
```

#### Property Value

 ConnectorType

### <a id="VM_Models_Post_ConnectorBase_CoordinateSystem"></a> CoordinateSystem

```csharp
public GeneralMarker CoordinateSystem { get; set; }
```

#### Property Value

 GeneralMarker

### <a id="VM_Models_Post_ConnectorBase_DisplayName"></a> DisplayName

```csharp
public override string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_ConnectorBase_MarkerIndexes"></a> MarkerIndexes

```csharp
public int[] MarkerIndexes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_ConnectorBase_NUM_OF_RESULT"></a> NUM\_OF\_RESULT

```csharp
public abstract int NUM_OF_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ConnectorBase_NUM_OF_VARIABLEBLOCK_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_RESULT

```csharp
public abstract int NUM_OF_VARIABLEBLOCK_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_ConnectorBase_ParentIndexes"></a> ParentIndexes

```csharp
public int[] ParentIndexes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_ConnectorBase_PlottableType"></a> PlottableType

```csharp
public PlottableType PlottableType { get; }
```

#### Property Value

 PlottableType

## Methods

### <a id="VM_Models_Post_ConnectorBase_ContainsMarker_System_Int32_"></a> ContainsMarker\(int\)

```csharp
public bool ContainsMarker(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ConnectorBase_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_ConnectorBase_SetGeneralVectorDisplay"></a> SetGeneralVectorDisplay\(\)

```csharp
protected void SetGeneralVectorDisplay()
```

### <a id="VM_Models_Post_ConnectorBase_TryGetParentActionType_System_String_VM_Models_Post_ActionType__"></a> TryGetParentActionType\(string, out ActionType\)

```csharp
public bool TryGetParentActionType(string bodyFullName, out ActionType actionType)
```

#### Parameters

`bodyFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`actionType` ActionType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

