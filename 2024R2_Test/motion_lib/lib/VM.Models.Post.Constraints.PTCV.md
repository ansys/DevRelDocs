# <a id="VM_Models_Post_Constraints_PTCV"></a> Class PTCV

Namespace: [VM.Models.Post.Constraints](VM.Models.Post.Constraints.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public sealed class PTCV : ConstraintsBase, IObservableObject, IDisposableObject, IConnector, IVectorDisplayable, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[ConnectorBase](VM.Models.Post.ConnectorBase.md) ← 
[ConstraintsBase](VM.Models.Post.Constraints.ConstraintsBase.md) ← 
[PTCV](VM.Models.Post.Constraints.PTCV.md)

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

[ConstraintsBase.EntityType](VM.Models.Post.Constraints.ConstraintsBase.md\#VM\_Models\_Post\_Constraints\_ConstraintsBase\_EntityType), 
[ConstraintsBase.CategoryType](VM.Models.Post.Constraints.ConstraintsBase.md\#VM\_Models\_Post\_Constraints\_ConstraintsBase\_CategoryType), 
[ConstraintsBase.NUM\_OF\_VARIABLEBLOCK\_RESULT](VM.Models.Post.Constraints.ConstraintsBase.md\#VM\_Models\_Post\_Constraints\_ConstraintsBase\_NUM\_OF\_VARIABLEBLOCK\_RESULT), 
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

### <a id="VM_Models_Post_Constraints_PTCV__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_VM_Models_Post_IDFMInfo_System_Int32___"></a> PTCV\(ResultDocument, Identifier, string, IDFMInfo, int\[\]\)

```csharp
public PTCV(ResultDocument parentDocument, Identifier analysisResultID, string fullName, IDFMInfo dfmInfo, int[] markerIndexes)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dfmInfo` IDFMInfo

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_Constraints_PTCV_ConnectorType"></a> ConnectorType

```csharp
public override ConnectorType ConnectorType { get; }
```

#### Property Value

 ConnectorType

### <a id="VM_Models_Post_Constraints_PTCV_NUM_OF_RESULT"></a> NUM\_OF\_RESULT

```csharp
public override int NUM_OF_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

