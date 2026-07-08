#  Class AttributeMeshFreeGeometryOutputProperty

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

This class is to represent the attribute for geometry output property.

```csharp
public abstract class AttributeMeshFreeGeometryOutputProperty : AttributeFacetRefinementBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
AttributeFacetRefinementBase ← 
[AttributeMeshFreeGeometryOutputProperty](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md)

#### Derived

[AttributeMeshFreeBody](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeBody.md)

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

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty__ctor"></a> AttributeMeshFreeGeometryOutputProperty\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMeshFreeGeometryOutputProperty()
```

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_VM_Managed_DAFUL_MeshFree_OutputType_System_Boolean_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_TransformBase_"></a> AttributeMeshFreeGeometryOutputProperty\(Variable, Variable, Variable, bool, bool, bool, bool, bool, bool, OutputType, bool, Variable, Variable, Variable, TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMeshFreeGeometryOutputProperty(Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseGRID_TO_EDGES, bool bDoNotUseApprox_eval, bool bUseDefaultSetting, OutputType eOutputType, bool bUseUserDefinedDistance, Variable varUserDefinedDistanceX, Variable varUserDefinedDistanceY, Variable varUserDefinedDistanceZ, TransformBase matReferenceFrame)
```

#### Parameters

`varMaxFacetSize` Variable

Size of the var max facet.

`varAngularTolerance` Variable

The var angular tolerance.

`varFacetAspectRatio` Variable

The var facet aspect ratio.

`bUseMaximumFacetSize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use maximum facet size].

`bUseSurfaceAngularTolerance` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use surface angular tolerance].

`bUseFacetAspectRatio` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use facet aspect ratio].

`bDoNotUseGRID_TO_EDGES` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b do not use GRI d_ T o_ EDGES].

`bDoNotUseApprox_eval` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b do not use approx_eval].

`bUseDefaultSetting` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use default setting].

`eOutputType` [OutputType](VM.Managed.DAFUL.MeshFree.OutputType.md)

Type of the e output.

`bUseUserDefinedDistance` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use user defined distance].

`varUserDefinedDistanceX` Variable

The user defined distance's X value.

`varUserDefinedDistanceY` Variable

The user defined distance's Y value.

`varUserDefinedDistanceZ` Variable

The user defined distance's Z value.

`matReferenceFrame` TransformBase

The reference frame for user defined distance.

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_VM_Managed_DAFUL_MeshFree_OutputType_System_Boolean_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_TransformBase_"></a> AttributeMeshFreeGeometryOutputProperty\(Variable, Variable, Variable, Variable, bool, bool, bool, bool, bool, bool, bool, OutputType, bool, Variable, Variable, Variable, TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMeshFreeGeometryOutputProperty(Variable varMaxGridLine, Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseMaximumGridLine, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseGRID_TO_EDGES, bool bDoNotUseApprox_eval, bool bUseDefaultSetting, OutputType eOutputType, bool bUseUserDefinedDistance, Variable varUserDefinedDistanceX, Variable varUserDefinedDistanceY, Variable varUserDefinedDistanceZ, TransformBase matReferenceFrame)
```

#### Parameters

`varMaxGridLine` Variable

The var max grid line.

`varMaxFacetSize` Variable

Size of the var max facet.

`varAngularTolerance` Variable

The var angular tolerance.

`varFacetAspectRatio` Variable

The var facet aspect ratio.

`bUseMaximumGridLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use maximum grid line].

`bUseMaximumFacetSize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use maximum facet size].

`bUseSurfaceAngularTolerance` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use surface angular tolerance].

`bUseFacetAspectRatio` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use facet aspect ratio].

`bDoNotUseGRID_TO_EDGES` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b do not use GRI d_ T o_ EDGES].

`bDoNotUseApprox_eval` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b do not use approx_eval].

`bUseDefaultSetting` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use default setting].

`eOutputType` [OutputType](VM.Managed.DAFUL.MeshFree.OutputType.md)

Type of the e output.

`bUseUserDefinedDistance` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use user defined distance].

`varUserDefinedDistanceX` Variable

The user defined distance's X value.

`varUserDefinedDistanceY` Variable

The user defined distance's Y value.

`varUserDefinedDistanceZ` Variable

The user defined distance's Z value.

`matReferenceFrame` TransformBase

The reference frame for user defined distance.

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_GINFPath"></a> GINFPath

Gets or sets GINF file path for MeshFree

```csharp
public string GINFPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_GeomPrecision"></a> GeomPrecision

Gets or sets geometry precision of solid body for MeshFree

```csharp
public uint GeomPrecision { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_IsUseUserDefinedDistance"></a> IsUseUserDefinedDistance

Gets or sets a value indicating whether [use user defined distance].

```csharp
public bool IsUseUserDefinedDistance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_ReferenceFrame"></a> ReferenceFrame

Gets or sets the reference frame for user defined distance

```csharp
public TransformBase ReferenceFrame { get; set; }
```

#### Property Value

 TransformBase

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_TypeOfGeometry"></a> TypeOfGeometry

Gets or sets geometry type of solid body for MeshFree

```csharp
public GeometryType TypeOfGeometry { get; set; }
```

#### Property Value

 [GeometryType](VM.Managed.DAFUL.MeshFree.GeometryType.md)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_TypeOfOutput"></a> TypeOfOutput

Gets or sets the type of the output.

```csharp
public OutputType TypeOfOutput { get; set; }
```

#### Property Value

 [OutputType](VM.Managed.DAFUL.MeshFree.OutputType.md)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_UseDefaultSetting"></a> UseDefaultSetting

Gets or sets a value indicating whether [use default setting].

```csharp
[Obsolete]
public bool UseDefaultSetting { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_UserDefinedDistanceX"></a> UserDefinedDistanceX

Gets or sets the user defined distance's X value

```csharp
public ExpressionValueVariable UserDefinedDistanceX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_UserDefinedDistanceY"></a> UserDefinedDistanceY

Gets or sets the user defined distance's Y value

```csharp
public ExpressionValueVariable UserDefinedDistanceY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_UserDefinedDistanceZ"></a> UserDefinedDistanceZ

Gets or sets the user defined distance's Z value

```csharp
public ExpressionValueVariable UserDefinedDistanceZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_Initialize"></a> Initialize\(\)

Initializes this instance.

```csharp
public override void Initialize()
```

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeGeometryOutputProperty_OnDeserializationAttribute"></a> OnDeserializationAttribute\(\)

Called when [deserialization attribute].

```csharp
public override void OnDeserializationAttribute()
```

