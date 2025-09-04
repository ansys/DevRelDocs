#  Class AttributeFacetRefinement

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the attribute for facet refinement.

```csharp
public class AttributeFacetRefinement : AttributeFacetRefinementBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
AttributeFacetRefinementBase ← 
[AttributeFacetRefinement](VM.Managed.DAFUL.AttributeFacetRefinement.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

AttributeFacetRefinementBase.m\_childMaxGridLine, 
AttributeFacetRefinementBase.m\_childMaxFacetSize, 
AttributeFacetRefinementBase.m\_childAngularTolerance, 
AttributeFacetRefinementBase.m\_childFacetAspectRatio, 
AttributeFacetRefinementBase.m\_childMinUGridLine, 
AttributeFacetRefinementBase.m\_childMinVGridLine, 
AttributeFacetRefinementBase.m\_childSurfaceTolerance, 
AttributeFacetRefinementBase.m\_bUseMaximumGridLine, 
AttributeFacetRefinementBase.m\_bUseMaximumFacetSize, 
AttributeFacetRefinementBase.m\_bUseSurfaceAngularTolerance, 
AttributeFacetRefinementBase.m\_bUseFacetAspectRatio, 
AttributeFacetRefinementBase.m\_bDoNotUseGRID\_TO\_EDGES, 
AttributeFacetRefinementBase.m\_bDoNotUseApprox\_eval, 
AttributeFacetRefinementBase.m\_bUseMinimumUGridLine, 
AttributeFacetRefinementBase.m\_bUseMinimumVGridLine, 
AttributeFacetRefinementBase.m\_bUseSurfaceTolerance, 
AttributeFacetRefinementBase.m\_bUseFaceOption, 
AttributeFacetRefinementBase.m\_bUseRepairPatch, 
AttributeFacetRefinementBase.m\_bUseDefaultValues, 
AttributeFacetRefinementBase.Copy\(AttributeFacetRefinementBase, ref AttributeFacetRefinementBase\), 
AttributeFacetRefinementBase.Copy\(\), 
AttributeFacetRefinementBase.GetXml\(AttributeFacetRefinementBase\), 
AttributeFacetRefinementBase.GetXml\(\), 
AttributeFacetRefinementBase.GetFacetOption\(\), 
AttributeFacetRefinementBase.Initialize\(\), 
AttributeFacetRefinementBase.LinkRequestUpdate\(object, LinkEventArgs\), 
AttributeFacetRefinementBase.SetDefaultValue\(ObjectBase\), 
AttributeFacetRefinementBase.OnDeserialization\(object\), 
AttributeFacetRefinementBase.DrawGlobalBody, 
AttributeFacetRefinementBase.UseDefaultValues, 
AttributeFacetRefinementBase.UseFaceOption, 
AttributeFacetRefinementBase.UseSurfaceTolerance, 
AttributeFacetRefinementBase.UseMinimumVGridLine, 
AttributeFacetRefinementBase.UseMinimumUGridLine, 
AttributeFacetRefinementBase.UseRepairPatch, 
AttributeFacetRefinementBase.UseApprox\_eval, 
AttributeFacetRefinementBase.UseGRID\_TO\_EDGES, 
AttributeFacetRefinementBase.UseFacetAspectRatio, 
AttributeFacetRefinementBase.UseSurfaceAngularTolerance, 
AttributeFacetRefinementBase.UseMaximumFacetSize, 
AttributeFacetRefinementBase.UseMaximumGridLine, 
AttributeFacetRefinementBase.SurfaceTolerance, 
AttributeFacetRefinementBase.MinimumVGridLine, 
AttributeFacetRefinementBase.MinimumUGridLine, 
AttributeFacetRefinementBase.FacetAspectRatio, 
AttributeFacetRefinementBase.SurfaceAngularTolerance, 
AttributeFacetRefinementBase.MaximumFacetSize, 
AttributeFacetRefinementBase.MaximumGridLine, 
AttributeBase.OnDeserializationAttribute\(\), 
AttributeBase.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
LinkableBase.OnDeserialization\(object\), 
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

### <a id="VM_Managed_DAFUL_AttributeFacetRefinement__ctor"></a> AttributeFacetRefinement\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AttributeFacetRefinement" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeFacetRefinement()
```

### <a id="VM_Managed_DAFUL_AttributeFacetRefinement__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> AttributeFacetRefinement\(Variable, Variable, Variable, bool, bool, bool, bool, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AttributeFacetRefinement" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeFacetRefinement(Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseGRID_TO_EDGES, bool bDoNotUseApprox_eval)
```

#### Parameters

`varMaxFacetSize` Variable

Size of the maximum facet.

`varAngularTolerance` Variable

The angular tolerance.

`varFacetAspectRatio` Variable

The facet aspect ratio.

`bUseMaximumFacetSize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use maximum facet size].

`bUseSurfaceAngularTolerance` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use surface angular tolerance].

`bUseFacetAspectRatio` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use facet aspect ratio].

`bDoNotUseGRID_TO_EDGES` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [unuse GRID_TO_EDGE.

`bDoNotUseApprox_eval` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [unuse approximated evaluation].

### <a id="VM_Managed_DAFUL_AttributeFacetRefinement__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> AttributeFacetRefinement\(Variable, Variable, Variable, Variable, bool, bool, bool, bool, bool, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AttributeFacetRefinement" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeFacetRefinement(Variable varMaxGridLine, Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseMaximumGridLine, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseGRID_TO_EDGES, bool bDoNotUseApprox_eval)
```

#### Parameters

`varMaxGridLine` Variable

The maximum grid line.

`varMaxFacetSize` Variable

Size of the maximum facet.

`varAngularTolerance` Variable

The angular tolerance.

`varFacetAspectRatio` Variable

The facet aspect ratio.

`bUseMaximumGridLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use maximum grid line].

`bUseMaximumFacetSize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use maximum facet size].

`bUseSurfaceAngularTolerance` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use surface angular tolerance].

`bUseFacetAspectRatio` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use facet aspect ratio].

`bDoNotUseGRID_TO_EDGES` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [unuse GRID_TO_EDGE.

`bDoNotUseApprox_eval` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [unuse approximated evaluation].

## Methods

### <a id="VM_Managed_DAFUL_AttributeFacetRefinement_Initialize"></a> Initialize\(\)

Initializes this instance.

```csharp
public override void Initialize()
```

### <a id="VM_Managed_DAFUL_AttributeFacetRefinement_SetDefaultValue_VM_Managed_ObjectBase_"></a> SetDefaultValue\(ObjectBase\)

Set default value.

```csharp
public override void SetDefaultValue(ObjectBase objContainer)
```

#### Parameters

`objContainer` ObjectBase

The container.

