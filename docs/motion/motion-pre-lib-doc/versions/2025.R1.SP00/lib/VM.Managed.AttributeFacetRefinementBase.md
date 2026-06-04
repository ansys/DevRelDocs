#  Class AttributeFacetRefinementBase

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the attribute for facet refinement.

```csharp
public class AttributeFacetRefinementBase : AttributeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[AttributeBase](VM.Managed.AttributeBase.md) ← 
[AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

#### Derived

[AttributeMeshFreeGeometryOutputProperty](VM.Managed.AttributeMeshFreeGeometryOutputProperty.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md)

#### Inherited Members

[AttributeBase.OnDeserializationAttribute\(\)](VM.Managed.AttributeBase.md\#VM\_Managed\_AttributeBase\_OnDeserializationAttribute), 
[AttributeBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.AttributeBase.md\#VM\_Managed\_AttributeBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.SetModified\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetModified), 
[LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.GetTargetListForUpdate\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetTargetListForUpdate), 
[LinkContainer.SkipUpdateObjectImpl\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SkipUpdateObjectImpl), 
[LinkContainer.Initialize\(Unit.ConvertFactor\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[LinkContainer.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[LinkContainer.IsSerializableEvent\(Delegate\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsSerializableEvent\_System\_Delegate\_), 
[LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetSerializedData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRemovedFromDocument\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[LinkContainer.CanBeDestroy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CanBeDestroy\_System\_Object\_), 
[LinkContainer.DisposeManagedResources\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_DisposeManagedResources), 
[LinkContainer.SetContainer\(IOwned, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[LinkContainer.OnChildUpdated\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnChildUpdated\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnContainerDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnContainerDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnDeserialization\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDeserialization\_System\_Object\_), 
[LinkContainer.Verify\(VerifiedResult\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Verify\_VM\_Managed\_VerifiedResult\_), 
[LinkContainer.GetCopy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetCopy\_System\_Object\_), 
[LinkContainer.Dispose\(bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Dispose\_System\_Boolean\_), 
[LinkContainer.ClearChildInfoBeforeDeserialize](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ClearChildInfoBeforeDeserialize), 
[LinkContainer.Container](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Container), 
[LinkContainer.Owner](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Owner), 
[LinkContainer.Document](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Document), 
[LinkContainer.ID](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ID), 
[LinkContainer.IsChildExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsChildExternable), 
[LinkContainer.IsExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsExternable), 
[LinkContainer.OnRemoved](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnRemoved), 
[LinkContainer.OnAdded](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnAdded), 
[LinkContainer.OnDestroy](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroy), 
[LinkContainer.OnDestroying](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroying), 
[LinkContainer.OnUpdate](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdate), 
[LinkContainer.OnUpdating](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdating), 
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

### <a id="VM_Managed_AttributeFacetRefinementBase__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> AttributeFacetRefinementBase\(Variable, Variable, Variable, Variable, bool, bool, bool, bool, bool, bool\)

Initializes a new instance of the <xref href="VM.Managed.AttributeFacetRefinementBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeFacetRefinementBase(Variable varMaxGridLine, Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseMaximumGridLine, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseGRID_TO_EDGES, bool bDoNotUseApprox_eval)
```

#### Parameters

`varMaxGridLine` [Variable](VM.Managed.Variable.md)

The number of the maximum grid line.

`varMaxFacetSize` [Variable](VM.Managed.Variable.md)

Size of the maximum facet.

`varAngularTolerance` [Variable](VM.Managed.Variable.md)

The angular tolerance.

`varFacetAspectRatio` [Variable](VM.Managed.Variable.md)

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

### <a id="VM_Managed_AttributeFacetRefinementBase__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> AttributeFacetRefinementBase\(Variable, Variable, Variable, bool, bool, bool, bool, bool\)

Initializes a new instance of the <xref href="VM.Managed.AttributeFacetRefinementBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeFacetRefinementBase(Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseGRID_TO_EDGES, bool bDoNotUseApprox_eval)
```

#### Parameters

`varMaxFacetSize` [Variable](VM.Managed.Variable.md)

Size of the maximum facet.

`varAngularTolerance` [Variable](VM.Managed.Variable.md)

The angular tolerance.

`varFacetAspectRatio` [Variable](VM.Managed.Variable.md)

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

### <a id="VM_Managed_AttributeFacetRefinementBase__ctor"></a> AttributeFacetRefinementBase\(\)

Initializes a new instance of the <xref href="VM.Managed.AttributeFacetRefinementBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeFacetRefinementBase()
```

## Fields

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bDoNotUseApprox_eval"></a> m\_bDoNotUseApprox\_eval

Use approx evaluation.

```csharp
protected bool m_bDoNotUseApprox_eval
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bDoNotUseGRID_TO_EDGES"></a> m\_bDoNotUseGRID\_TO\_EDGES

Use grid to edge.

```csharp
protected bool m_bDoNotUseGRID_TO_EDGES
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseDefaultValues"></a> m\_bUseDefaultValues

Use default values.

```csharp
protected bool m_bUseDefaultValues
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseFaceOption"></a> m\_bUseFaceOption

Use face option.

```csharp
protected bool m_bUseFaceOption
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseFacetAspectRatio"></a> m\_bUseFacetAspectRatio

Use facet aspect ratio.

```csharp
protected bool m_bUseFacetAspectRatio
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseMaximumFacetSize"></a> m\_bUseMaximumFacetSize

Use maximum facet size.

```csharp
protected bool m_bUseMaximumFacetSize
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseMaximumGridLine"></a> m\_bUseMaximumGridLine

Use maximum grid line.

```csharp
protected bool m_bUseMaximumGridLine
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseMinimumUGridLine"></a> m\_bUseMinimumUGridLine

Use minimum u grid line.

```csharp
protected bool m_bUseMinimumUGridLine
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseMinimumVGridLine"></a> m\_bUseMinimumVGridLine

Use minimum v grid line.

```csharp
protected bool m_bUseMinimumVGridLine
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseRepairPatch"></a> m\_bUseRepairPatch

Use repair patch.

```csharp
protected bool m_bUseRepairPatch
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseSurfaceAngularTolerance"></a> m\_bUseSurfaceAngularTolerance

Use surface angular tolerance.

```csharp
protected bool m_bUseSurfaceAngularTolerance
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_bUseSurfaceTolerance"></a> m\_bUseSurfaceTolerance

Use surface tolerance.

```csharp
protected bool m_bUseSurfaceTolerance
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_m_childAngularTolerance"></a> m\_childAngularTolerance

angular tolerance.

```csharp
protected Child<Variable, LinkContainer.Update> m_childAngularTolerance
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[Variable](VM.Managed.Variable.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

### <a id="VM_Managed_AttributeFacetRefinementBase_m_childFacetAspectRatio"></a> m\_childFacetAspectRatio

facet aspect ratio.

```csharp
protected Child<Variable, LinkContainer.Update> m_childFacetAspectRatio
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[Variable](VM.Managed.Variable.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

### <a id="VM_Managed_AttributeFacetRefinementBase_m_childMaxFacetSize"></a> m\_childMaxFacetSize

max facet size.

```csharp
protected Child<Variable, LinkContainer.Update> m_childMaxFacetSize
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[Variable](VM.Managed.Variable.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

### <a id="VM_Managed_AttributeFacetRefinementBase_m_childMaxGridLine"></a> m\_childMaxGridLine

max grid line.

```csharp
protected Child<Variable, LinkContainer.Update> m_childMaxGridLine
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[Variable](VM.Managed.Variable.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

### <a id="VM_Managed_AttributeFacetRefinementBase_m_childMinUGridLine"></a> m\_childMinUGridLine

minimum u grid line.

```csharp
protected Child<Variable, LinkContainer.Update> m_childMinUGridLine
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[Variable](VM.Managed.Variable.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

### <a id="VM_Managed_AttributeFacetRefinementBase_m_childMinVGridLine"></a> m\_childMinVGridLine

minimum v grid line.

```csharp
protected Child<Variable, LinkContainer.Update> m_childMinVGridLine
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[Variable](VM.Managed.Variable.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

### <a id="VM_Managed_AttributeFacetRefinementBase_m_childSurfaceTolerance"></a> m\_childSurfaceTolerance

surface tolerence.

```csharp
protected Child<Variable, LinkContainer.Update> m_childSurfaceTolerance
```

#### Field Value

 [Child](VM.Managed.Child\-2.md)<[Variable](VM.Managed.Variable.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>

## Properties

### <a id="VM_Managed_AttributeFacetRefinementBase_DrawGlobalBody"></a> DrawGlobalBody

Gets or sets a value indicating whether draw global body.

```csharp
public virtual bool DrawGlobalBody { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_FacetAspectRatio"></a> FacetAspectRatio

Gets or sets the facet aspect ratio.

```csharp
public ExpressionValueVariable FacetAspectRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_AttributeFacetRefinementBase_MaximumFacetSize"></a> MaximumFacetSize

Gets or sets the maximum size of the facet.

```csharp
public ExpressionValueVariable MaximumFacetSize { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_AttributeFacetRefinementBase_MaximumGridLine"></a> MaximumGridLine

Gets or sets the maximum grid line.

```csharp
public ExpressionValueVariable MaximumGridLine { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_AttributeFacetRefinementBase_MinimumUGridLine"></a> MinimumUGridLine

Gets or sets the minimum U grid line.

```csharp
public ExpressionValueVariable MinimumUGridLine { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_AttributeFacetRefinementBase_MinimumVGridLine"></a> MinimumVGridLine

Gets or sets the minimum V grid line.

```csharp
public ExpressionValueVariable MinimumVGridLine { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_AttributeFacetRefinementBase_SurfaceAngularTolerance"></a> SurfaceAngularTolerance

Gets or sets the surface angular tolerance.

```csharp
public ExpressionValueVariable SurfaceAngularTolerance { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_AttributeFacetRefinementBase_SurfaceTolerance"></a> SurfaceTolerance

Gets or sets the surface tolerance.

```csharp
public ExpressionValueVariable SurfaceTolerance { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_AttributeFacetRefinementBase_UseApprox_eval"></a> UseApprox\_eval

Gets or sets a value indicating whether use [approximated evaluation].

```csharp
public bool UseApprox_eval { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseDefaultValues"></a> UseDefaultValues

Gets or sets a value indicating whether use [default values].

```csharp
public bool UseDefaultValues { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseFaceOption"></a> UseFaceOption

Gets or sets a value indicating whether use [face option].

```csharp
public bool UseFaceOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseFacetAspectRatio"></a> UseFacetAspectRatio

Gets or sets a value indicating whether use [facet aspect ratio].

```csharp
public bool UseFacetAspectRatio { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseGRID_TO_EDGES"></a> UseGRID\_TO\_EDGES

Gets or sets a value indicating whether use [GRID_TO_EDGE].

```csharp
public bool UseGRID_TO_EDGES { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseMaximumFacetSize"></a> UseMaximumFacetSize

Gets or sets a value indicating whether use [maximum facet size].

```csharp
public bool UseMaximumFacetSize { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseMaximumGridLine"></a> UseMaximumGridLine

Gets or sets a value indicating whether use [maximum grid line].

```csharp
public bool UseMaximumGridLine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseMinimumUGridLine"></a> UseMinimumUGridLine

Gets or sets a value indicating whether use [minimum U grid line].

```csharp
public bool UseMinimumUGridLine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseMinimumVGridLine"></a> UseMinimumVGridLine

Gets or sets a value indicating whether use [minimum V grid line].

```csharp
public bool UseMinimumVGridLine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseRepairPatch"></a> UseRepairPatch

Gets or sets a value indicating whether use [repair patch].

```csharp
public bool UseRepairPatch { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseSurfaceAngularTolerance"></a> UseSurfaceAngularTolerance

Gets or sets a value indicating whether use [surface angular tolerance].

```csharp
public bool UseSurfaceAngularTolerance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_AttributeFacetRefinementBase_UseSurfaceTolerance"></a> UseSurfaceTolerance

Gets or sets a value indicating whether use [surface tolerance].

```csharp
public bool UseSurfaceTolerance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_AttributeFacetRefinementBase_Copy_VM_Managed_AttributeFacetRefinementBase_VM_Managed_AttributeFacetRefinementBase__"></a> Copy\(AttributeFacetRefinementBase, ref AttributeFacetRefinementBase\)

Copy attribute.

```csharp
public static void Copy(AttributeFacetRefinementBase attrOld, ref AttributeFacetRefinementBase attrNew)
```

#### Parameters

`attrOld` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

The old attribute.

`attrNew` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

The new attribute.

### <a id="VM_Managed_AttributeFacetRefinementBase_Copy"></a> Copy\(\)

```csharp
public AttributeFacetRefinementBase Copy()
```

#### Returns

 [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

### <a id="VM_Managed_AttributeFacetRefinementBase_GetXml_VM_Managed_AttributeFacetRefinementBase_"></a> GetXml\(AttributeFacetRefinementBase\)

Get xml information of this instance.

```csharp
public static string GetXml(AttributeFacetRefinementBase attr)
```

#### Parameters

`attr` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

The old attribute.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_AttributeFacetRefinementBase_GetXml"></a> GetXml\(\)

```csharp
public string GetXml()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_AttributeFacetRefinementBase_Initialize"></a> Initialize\(\)

Initializes this instance.

```csharp
public virtual void Initialize()
```

### <a id="VM_Managed_AttributeFacetRefinementBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### <a id="VM_Managed_AttributeFacetRefinementBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_AttributeFacetRefinementBase_SetDefaultValue_VM_Managed_ObjectBase_"></a> SetDefaultValue\(ObjectBase\)

Set default values.

```csharp
public virtual void SetDefaultValue(ObjectBase objContainer)
```

#### Parameters

`objContainer` [ObjectBase](VM.Managed.ObjectBase.md)

The container.

