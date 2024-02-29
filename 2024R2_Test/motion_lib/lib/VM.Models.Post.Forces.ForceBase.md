# <a id="VM_Models_Post_Forces_ForceBase"></a> Class ForceBase

Namespace: [VM.Models.Post.Forces](VM.Models.Post.Forces.md)  
Assembly: VM.Models.Post.EntityTypes.dll  

```csharp
public abstract class ForceBase : ConnectorBase, IObservableObject, IDisposableObject, IConnector, IVectorDisplayable, IPlottable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
ObjectBase ← 
EntityBase ← 
[ConnectorBase](VM.Models.Post.ConnectorBase.md) ← 
[ForceBase](VM.Models.Post.Forces.ForceBase.md)

#### Derived

[Beam](VM.Models.Post.Forces.Beam.md), 
[Bush](VM.Models.Post.Forces.Bush.md), 
[ExternalForce](VM.Models.Post.Forces.ExternalForce.md), 
[FECLoad](VM.Models.Post.Forces.FECLoad.md), 
[FEPLoad](VM.Models.Post.Forces.FEPLoad.md), 
[Matrix](VM.Models.Post.Forces.Matrix.md), 
[RScalar](VM.Models.Post.Forces.RScalar.md), 
[RSpringDamper](VM.Models.Post.Forces.RSpringDamper.md), 
[TScalar](VM.Models.Post.Forces.TScalar.md), 
[TSpringDamper](VM.Models.Post.Forces.TSpringDamper.md), 
[Tire](VM.Models.Post.Forces.Tire.md), 
[Vector](VM.Models.Post.Forces.Vector.md)

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

### <a id="VM_Models_Post_Forces_ForceBase__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_Int32___"></a> ForceBase\(ResultDocument, Identifier, string, int\[\]\)

```csharp
protected ForceBase(ResultDocument parentDocument, Identifier analysisResultID, string fullName, int[] markerIndexes)
```

#### Parameters

`parentDocument` ResultDocument

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_Forces_ForceBase_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 CategoryType

### <a id="VM_Models_Post_Forces_ForceBase_EntityType"></a> EntityType

```csharp
public override EntityType EntityType { get; }
```

#### Property Value

 EntityType

### <a id="VM_Models_Post_Forces_ForceBase_NUM_OF_VARIABLEBLOCK_RESULT"></a> NUM\_OF\_VARIABLEBLOCK\_RESULT

```csharp
public override int NUM_OF_VARIABLEBLOCK_RESULT { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

