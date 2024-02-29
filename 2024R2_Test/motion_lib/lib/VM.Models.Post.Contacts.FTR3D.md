# <a id="VM_Models_Post_Contacts_FTR3D"></a> Class FTR3D

Namespace: [VM.Models.Post.Contacts](VM.Models.Post.Contacts.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class FTR3D : ContactBase, IObservableObject, IDisposableObject, IVectorDisplayable, IPlottable, IContact, IConnector, IContourable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[ConnectorBase](VM.Models.Post.ConnectorBase.md) ← 
[ContactBase](VM.Models.Post.Contacts.ContactBase.md) ← 
[FTR3D](VM.Models.Post.Contacts.FTR3D.md)

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

[ContactBase.CanContour\(ContourMappingType\)](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_CanContour\_VM\_Models\_ContourMappingType\_), 
[ContactBase.ActionBody](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_ActionBody), 
[ContactBase.ActionBodyIndex](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_ActionBodyIndex), 
[ContactBase.BaseBody](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_BaseBody), 
[ContactBase.BaseBodyIndex](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_BaseBodyIndex), 
[ContactBase.CategoryType](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_CategoryType), 
[ContactBase.ContourTypes](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_ContourTypes), 
[ContactBase.EntityType](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_EntityType), 
[ContactBase.NUM\_OF\_VARIABLEBLOCK\_RESULT](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_NUM\_OF\_VARIABLEBLOCK\_RESULT), 
[ContactBase.NUM\_OF\_VARIABLEBLOCK\_GAP\_RESULT](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_NUM\_OF\_VARIABLEBLOCK\_GAP\_RESULT), 
[ContactBase.FlagForStiction](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_FlagForStiction), 
[ContactBase.Parameters](VM.Models.Post.Contacts.ContactBase.md\#VM\_Models\_Post\_Contacts\_ContactBase\_Parameters), 
[ConnectorBase.ContainsMarker\(int\)](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_ContainsMarker\_System\_Int32\_), 
[ConnectorBase.TryGetParentActionType\(string, out ActionType\)](VM.Models.Post.ConnectorBase.md\#VM\_Models\_Post\_ConnectorBase\_TryGetParentActionType\_System\_String\_VM\_Models\_Post\_ActionType\_\_), 
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

### <a id="VM_Models_Post_Contacts_FTR3D__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_VM_Models_Post_IDFMInfo_System_Int32___"></a> FTR3D\(ResultDocument, Identifier, string, IDFMInfo, int\[\]\)

```csharp
public FTR3D(ResultDocument parentDocument, Identifier analysisResultID, string fullName, IDFMInfo dfmInfo, int[] markerIndexes)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dfmInfo` IDFMInfo

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_Contacts_FTR3D_ConnectorType"></a> ConnectorType

```csharp
public override ConnectorType ConnectorType { get; }
```

#### Property Value

 ConnectorType

### <a id="VM_Models_Post_Contacts_FTR3D_NUM_OF_RESULT"></a> NUM\_OF\_RESULT

```csharp
public override int NUM_OF_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

