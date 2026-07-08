# Class AttributeGeometricMesher
<a id="VM_Managed_DAFUL_Mesher_AttributeGeometricMesher"></a>

Namespace: [VM.Managed.DAFUL.Mesher](VM.Managed.DAFUL.Mesher.md)  
Assembly: VMDMesher.dll  

This class is to represent the attribute for geometric mesher.

```csharp
public class AttributeGeometricMesher : AttributeFacetRefinementBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
AttributeBase ← 
AttributeFacetRefinementBase ← 
[AttributeGeometricMesher](VM.Managed.DAFUL.Mesher.AttributeGeometricMesher.md)

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

### <a id="VM_Managed_DAFUL_Mesher_AttributeGeometricMesher__ctor"></a> AttributeGeometricMesher\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Mesher.AttributeGeometricMesher" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeGeometricMesher()
```

## Properties

### <a id="VM_Managed_DAFUL_Mesher_AttributeGeometricMesher_DrawGlobalBody"></a> DrawGlobalBody

Gets or sets a value indicating whether draw global body.

```csharp
public override bool DrawGlobalBody { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Mesher_AttributeGeometricMesher_Initialize"></a> Initialize\(\)

Initializes this instance.

```csharp
public override void Initialize()
```

### <a id="VM_Managed_DAFUL_Mesher_AttributeGeometricMesher_SetDataToAttribute_VM_Managed_DAFUL_Mesher_AttributeGeometricMesher_System_String___"></a> SetDataToAttribute\(AttributeGeometricMesher, string\[\]\)

Set data to attribute

```csharp
public static void SetDataToAttribute(AttributeGeometricMesher attr, string[] arInput)
```

#### Parameters

`attr` [AttributeGeometricMesher](VM.Managed.DAFUL.Mesher.AttributeGeometricMesher.md)

The attribute.

`arInput` string\[\]

The input array.

### <a id="VM_Managed_DAFUL_Mesher_AttributeGeometricMesher_SetDefaultValue_VM_Managed_ObjectBase_"></a> SetDefaultValue\(ObjectBase\)

Set default value.

```csharp
public override void SetDefaultValue(ObjectBase objContainer)
```

#### Parameters

`objContainer` ObjectBase

The container.

