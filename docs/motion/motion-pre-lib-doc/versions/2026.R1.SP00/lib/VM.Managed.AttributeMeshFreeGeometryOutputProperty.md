# Class AttributeMeshFreeGeometryOutputProperty
<a id="VM_Managed_AttributeMeshFreeGeometryOutputProperty"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the attribute for geometry output property of MeshFree.

```csharp
[Obsolete]
public class AttributeMeshFreeGeometryOutputProperty : AttributeFacetRefinementBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[AttributeBase](VM.Managed.AttributeBase.md) ← 
[AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md) ← 
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

[AttributeFacetRefinementBase.m\_childMaxGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_childMaxGridLine), 
[AttributeFacetRefinementBase.m\_childMaxFacetSize](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_childMaxFacetSize), 
[AttributeFacetRefinementBase.m\_childAngularTolerance](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_childAngularTolerance), 
[AttributeFacetRefinementBase.m\_childFacetAspectRatio](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_childFacetAspectRatio), 
[AttributeFacetRefinementBase.m\_childMinUGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_childMinUGridLine), 
[AttributeFacetRefinementBase.m\_childMinVGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_childMinVGridLine), 
[AttributeFacetRefinementBase.m\_childSurfaceTolerance](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_childSurfaceTolerance), 
[AttributeFacetRefinementBase.m\_bUseMaximumGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseMaximumGridLine), 
[AttributeFacetRefinementBase.m\_bUseMaximumFacetSize](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseMaximumFacetSize), 
[AttributeFacetRefinementBase.m\_bUseSurfaceAngularTolerance](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseSurfaceAngularTolerance), 
[AttributeFacetRefinementBase.m\_bUseFacetAspectRatio](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseFacetAspectRatio), 
[AttributeFacetRefinementBase.m\_bDoNotUseGRID\_TO\_EDGES](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bDoNotUseGRID\_TO\_EDGES), 
[AttributeFacetRefinementBase.m\_bDoNotUseApprox\_eval](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bDoNotUseApprox\_eval), 
[AttributeFacetRefinementBase.m\_bUseMinimumUGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseMinimumUGridLine), 
[AttributeFacetRefinementBase.m\_bUseMinimumVGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseMinimumVGridLine), 
[AttributeFacetRefinementBase.m\_bUseSurfaceTolerance](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseSurfaceTolerance), 
[AttributeFacetRefinementBase.m\_bUseFaceOption](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseFaceOption), 
[AttributeFacetRefinementBase.m\_bUseRepairPatch](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseRepairPatch), 
[AttributeFacetRefinementBase.m\_bUseDefaultValues](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_m\_bUseDefaultValues), 
[AttributeFacetRefinementBase.Copy\(AttributeFacetRefinementBase, ref AttributeFacetRefinementBase\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_Copy\_VM\_Managed\_AttributeFacetRefinementBase\_VM\_Managed\_AttributeFacetRefinementBase\_\_), 
[AttributeFacetRefinementBase.Copy\(\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_Copy), 
[AttributeFacetRefinementBase.GetXml\(AttributeFacetRefinementBase\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_GetXml\_VM\_Managed\_AttributeFacetRefinementBase\_), 
[AttributeFacetRefinementBase.GetXml\(\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_GetXml), 
[AttributeFacetRefinementBase.GetFacetOption\(\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_GetFacetOption), 
[AttributeFacetRefinementBase.Initialize\(\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_Initialize), 
[AttributeFacetRefinementBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[AttributeFacetRefinementBase.SetDefaultValue\(ObjectBase\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_SetDefaultValue\_VM\_Managed\_ObjectBase\_), 
[AttributeFacetRefinementBase.OnDeserialization\(object\)](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_OnDeserialization\_System\_Object\_), 
[AttributeFacetRefinementBase.DrawGlobalBody](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_DrawGlobalBody), 
[AttributeFacetRefinementBase.UseDefaultValues](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseDefaultValues), 
[AttributeFacetRefinementBase.UseFaceOption](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseFaceOption), 
[AttributeFacetRefinementBase.UseSurfaceTolerance](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseSurfaceTolerance), 
[AttributeFacetRefinementBase.UseMinimumVGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseMinimumVGridLine), 
[AttributeFacetRefinementBase.UseMinimumUGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseMinimumUGridLine), 
[AttributeFacetRefinementBase.UseRepairPatch](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseRepairPatch), 
[AttributeFacetRefinementBase.UseApprox\_eval](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseApprox\_eval), 
[AttributeFacetRefinementBase.UseGRID\_TO\_EDGES](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseGRID\_TO\_EDGES), 
[AttributeFacetRefinementBase.UseFacetAspectRatio](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseFacetAspectRatio), 
[AttributeFacetRefinementBase.UseSurfaceAngularTolerance](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseSurfaceAngularTolerance), 
[AttributeFacetRefinementBase.UseMaximumFacetSize](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseMaximumFacetSize), 
[AttributeFacetRefinementBase.UseMaximumGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_UseMaximumGridLine), 
[AttributeFacetRefinementBase.SurfaceTolerance](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_SurfaceTolerance), 
[AttributeFacetRefinementBase.MinimumVGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_MinimumVGridLine), 
[AttributeFacetRefinementBase.MinimumUGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_MinimumUGridLine), 
[AttributeFacetRefinementBase.FacetAspectRatio](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_FacetAspectRatio), 
[AttributeFacetRefinementBase.SurfaceAngularTolerance](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_SurfaceAngularTolerance), 
[AttributeFacetRefinementBase.MaximumFacetSize](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_MaximumFacetSize), 
[AttributeFacetRefinementBase.MaximumGridLine](VM.Managed.AttributeFacetRefinementBase.md\#VM\_Managed\_AttributeFacetRefinementBase\_MaximumGridLine), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_AttributeMeshFreeGeometryOutputProperty__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_VM_Managed_MeshFreeOutputType_"></a> AttributeMeshFreeGeometryOutputProperty\(Variable, Variable, Variable, Variable, bool, bool, bool, bool, bool, bool, bool, MeshFreeOutputType\)

Initializes a new instance of the <xref href="VM.Managed.AttributeMeshFreeGeometryOutputProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMeshFreeGeometryOutputProperty(Variable varMaxGridLine, Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseMaximumGridLine, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseGRID_TO_EDGES, bool bDoNotUseApprox_eval, bool bUseDefaultSetting, MeshFreeOutputType eOutputType)
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

`bUseMaximumGridLine` bool

if set to <code>true</code> [use maximum grid line].

`bUseMaximumFacetSize` bool

if set to <code>true</code> [use maximum facet size].

`bUseSurfaceAngularTolerance` bool

if set to <code>true</code> [use surface angular tolerance].

`bUseFacetAspectRatio` bool

if set to <code>true</code> [use facet aspect ratio].

`bDoNotUseGRID_TO_EDGES` bool

if set to <code>true</code> [unuse GRID_TO_EDGE.

`bDoNotUseApprox_eval` bool

if set to <code>true</code> [unuse approximated evaluation].

`bUseDefaultSetting` bool

if set to <code>true</code> [use default setting values].

`eOutputType` [MeshFreeOutputType](VM.Managed.MeshFreeOutputType.md)

The mesh free output type.

### <a id="VM_Managed_AttributeMeshFreeGeometryOutputProperty__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_VM_Managed_MeshFreeOutputType_"></a> AttributeMeshFreeGeometryOutputProperty\(Variable, Variable, Variable, bool, bool, bool, bool, bool, bool, MeshFreeOutputType\)

Initializes a new instance of the <xref href="VM.Managed.AttributeMeshFreeGeometryOutputProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMeshFreeGeometryOutputProperty(Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseGRID_TO_EDGES, bool bDoNotUseApprox_eval, bool bUseDefaultSetting, MeshFreeOutputType eOutputType)
```

#### Parameters

`varMaxFacetSize` [Variable](VM.Managed.Variable.md)

Size of the maximum facet.

`varAngularTolerance` [Variable](VM.Managed.Variable.md)

The angular tolerance.

`varFacetAspectRatio` [Variable](VM.Managed.Variable.md)

The facet aspect ratio.

`bUseMaximumFacetSize` bool

if set to <code>true</code> [use maximum facet size].

`bUseSurfaceAngularTolerance` bool

if set to <code>true</code> [use surface angular tolerance].

`bUseFacetAspectRatio` bool

if set to <code>true</code> [use facet aspect ratio].

`bDoNotUseGRID_TO_EDGES` bool

if set to <code>true</code> [unuse GRID_TO_EDGE.

`bDoNotUseApprox_eval` bool

if set to <code>true</code> [unuse approximated evaluation].

`bUseDefaultSetting` bool

if set to <code>true</code> [use default setting values].

`eOutputType` [MeshFreeOutputType](VM.Managed.MeshFreeOutputType.md)

The mesh free output type.

### <a id="VM_Managed_AttributeMeshFreeGeometryOutputProperty__ctor"></a> AttributeMeshFreeGeometryOutputProperty\(\)

Initializes a new instance of the <xref href="VM.Managed.AttributeMeshFreeGeometryOutputProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMeshFreeGeometryOutputProperty()
```

## Fields

### <a id="VM_Managed_AttributeMeshFreeGeometryOutputProperty_m_bUseDefaultSetting"></a> m\_bUseDefaultSetting

```csharp
protected bool m_bUseDefaultSetting
```

#### Field Value

 bool

### <a id="VM_Managed_AttributeMeshFreeGeometryOutputProperty_m_eOutputType"></a> m\_eOutputType

```csharp
protected MeshFreeOutputType m_eOutputType
```

#### Field Value

 [MeshFreeOutputType](VM.Managed.MeshFreeOutputType.md)

## Properties

### <a id="VM_Managed_AttributeMeshFreeGeometryOutputProperty_OutputType"></a> OutputType

Gets or sets a value indicating which [output type].

```csharp
public MeshFreeOutputType OutputType { get; set; }
```

#### Property Value

 [MeshFreeOutputType](VM.Managed.MeshFreeOutputType.md)

### <a id="VM_Managed_AttributeMeshFreeGeometryOutputProperty_UseDefaultSetting"></a> UseDefaultSetting

Gets or sets a value indicating whether use [default setting].

```csharp
public bool UseDefaultSetting { get; set; }
```

#### Property Value

 bool

