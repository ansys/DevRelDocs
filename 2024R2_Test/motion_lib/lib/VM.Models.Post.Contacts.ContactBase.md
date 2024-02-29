# <a id="VM_Models_Post_Contacts_ContactBase"></a> Class ContactBase

Namespace: [VM.Models.Post.Contacts](VM.Models.Post.Contacts.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public abstract class ContactBase : ConnectorBase, IObservableObject, IDisposableObject, IVectorDisplayable, IPlottable, IContact, IConnector, IContourable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[ConnectorBase](VM.Models.Post.ConnectorBase.md) ← 
[ContactBase](VM.Models.Post.Contacts.ContactBase.md)

#### Derived

[CYTMC](VM.Models.Post.Contacts.CYTMC.md), 
[FTF2D](VM.Models.Post.Contacts.FTF2D.md), 
[FTF3D](VM.Models.Post.Contacts.FTF3D.md), 
[FTR2D](VM.Models.Post.Contacts.FTR2D.md), 
[FTR3D](VM.Models.Post.Contacts.FTR3D.md), 
[GENERAL](VM.Models.Post.Contacts.GENERAL.md), 
[MCTMC](VM.Models.Post.Contacts.MCTMC.md), 
[NTSF](VM.Models.Post.Contacts.NTSF.md), 
[RTR2D](VM.Models.Post.Contacts.RTR2D.md), 
[RTR3D](VM.Models.Post.Contacts.RTR3D.md), 
[SPTMC](VM.Models.Post.Contacts.SPTMC.md), 
[TIE](VM.Models.Post.Contacts.TIE.md)

#### Implements

IObservableObject, 
IDisposableObject, 
IVectorDisplayable, 
IPlottable, 
IContact, 
IConnector, 
IContourable, 
IEntity, 
IObject, 
IHasName, 
IHasIndex, 
IHasID

#### Inherited Members

[ConnectorBase.ContainsMarker\(int\)](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_ContainsMarker\_System\_Int32\_), 
[ConnectorBase.TryGetParentActionType\(string, out ActionType\)](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_TryGetParentActionType\_System\_String\_VM\_Models\_Post\_ActionType\_\_), 
[ConnectorBase.Dispose\(bool\)](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_Dispose\_System\_Boolean\_), 
[ConnectorBase.SetGeneralVectorDisplay\(\)](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_SetGeneralVectorDisplay), 
[ConnectorBase.ActionBodyIndex](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_ActionBodyIndex), 
[ConnectorBase.BaseBodyIndex](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_BaseBodyIndex), 
[ConnectorBase.Characteristics](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_Characteristics), 
[ConnectorBase.ConnectorType](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_ConnectorType), 
[ConnectorBase.CoordinateSystem](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_CoordinateSystem), 
[ConnectorBase.DisplayName](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_DisplayName), 
[ConnectorBase.MarkerIndexes](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_MarkerIndexes), 
[ConnectorBase.NUM\_OF\_RESULT](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_NUM\_OF\_RESULT), 
[ConnectorBase.NUM\_OF\_VARIABLEBLOCK\_RESULT](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_NUM\_OF\_VARIABLEBLOCK\_RESULT), 
[ConnectorBase.ParentIndexes](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_ParentIndexes), 
[ConnectorBase.PlottableType](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_PlottableType), 
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

### <a id="VM_Models_Post_Contacts_ContactBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_Int32___"></a> ContactBase\(ResultDocument, Identifier, string, int\[\]\)

```csharp
protected ContactBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName, int[] markerIndexes)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_Contacts_ContactBase_ActionBody"></a> ActionBody

```csharp
public IBody ActionBody { get; }
```

#### Property Value

 IBody

### <a id="VM_Models_Post_Contacts_ContactBase_ActionBodyIndex"></a> ActionBodyIndex

```csharp
public int ActionBodyIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Contacts_ContactBase_BaseBody"></a> BaseBody

```csharp
public IBody BaseBody { get; }
```

#### Property Value

 IBody

### <a id="VM_Models_Post_Contacts_ContactBase_BaseBodyIndex"></a> BaseBodyIndex

```csharp
public int BaseBodyIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Contacts_ContactBase_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_Contacts_ContactBase_ContourTypes"></a> ContourTypes

```csharp
public Dictionary<AnalysisResultType, Dictionary<ContourMappingType, Dictionary<string, (string, int)[]>>> ContourTypes { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<AnalysisResultType, [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<ContourMappingType, [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), \([string](https://learn.microsoft.com/dotnet/api/system.string), [int](https://learn.microsoft.com/dotnet/api/system.int32)\)\[\]\>\>\>

### <a id="VM_Models_Post_Contacts_ContactBase_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_Contacts_ContactBase_FlagForStiction"></a> FlagForStiction

```csharp
public int FlagForStiction { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Contacts_ContactBase_NUM_OF_VARIABLEBLOCK_GAP_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_GAP\_RESULT

```csharp
public int NUM_OF_VARIABLEBLOCK_GAP_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Contacts_ContactBase_NUM_OF_VARIABLEBLOCK_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_RESULT

```csharp
public override int NUM_OF_VARIABLEBLOCK_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Contacts_ContactBase_NumberofVariableblockContactGapResult"></a> NumberofVariableblockContactGapResult

```csharp
protected int NumberofVariableblockContactGapResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Contacts_ContactBase_NumberofVariableblockContactResult"></a> NumberofVariableblockContactResult

```csharp
protected int NumberofVariableblockContactResult { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_Contacts_ContactBase_Parameters"></a> Parameters

```csharp
public IList<double> Parameters { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## Methods

### <a id="VM_Models_Post_Contacts_ContactBase_CanContour_VM_Models_ContourMappingType_"></a> CanContour\(ContourMappingType\)

```csharp
public bool CanContour(ContourMappingType contourMappingType)
```

#### Parameters

`contourMappingType` ContourMappingType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

