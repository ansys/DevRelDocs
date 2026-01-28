# Class AttributeMeshFreeBody
<a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody"></a>

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

This class is to represent the attribute for geometry output property of MeshFree.

```csharp
public class AttributeMeshFreeBody : AttributeMeshFreeGeometryOutputProperty, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
AttributeBase ← 
AttributeFacetRefinementBase ← 
[AttributeMeshFreeGeometryOutputProperty](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md) ← 
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

[AttributeMeshFreeGeometryOutputProperty.Initialize\(\)](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_Initialize), 
[AttributeMeshFreeGeometryOutputProperty.OnDeserializationAttribute\(\)](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_OnDeserializationAttribute), 
[AttributeMeshFreeGeometryOutputProperty.UseDefaultSetting](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_UseDefaultSetting), 
[AttributeMeshFreeGeometryOutputProperty.TypeOfOutput](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_TypeOfOutput), 
[AttributeMeshFreeGeometryOutputProperty.GeomPrecision](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_GeomPrecision), 
[AttributeMeshFreeGeometryOutputProperty.TypeOfGeometry](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_TypeOfGeometry), 
[AttributeMeshFreeGeometryOutputProperty.GINFPath](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_GINFPath), 
[AttributeMeshFreeGeometryOutputProperty.IsUseUserDefinedDistance](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_IsUseUserDefinedDistance), 
[AttributeMeshFreeGeometryOutputProperty.UserDefinedDistanceX](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_UserDefinedDistanceX), 
[AttributeMeshFreeGeometryOutputProperty.UserDefinedDistanceY](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_UserDefinedDistanceY), 
[AttributeMeshFreeGeometryOutputProperty.UserDefinedDistanceZ](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_UserDefinedDistanceZ), 
[AttributeMeshFreeGeometryOutputProperty.ReferenceFrame](VM.Managed.DAFUL.MeshFree.AttributeMeshFreeGeometryOutputProperty.md\#VM\_Managed\_DAFUL\_MeshFree\_AttributeMeshFreeGeometryOutputProperty\_ReferenceFrame), 
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

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody__ctor"></a> AttributeMeshFreeBody\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.AttributeMeshFreeBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMeshFreeBody()
```

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_AnalysisLevelGroup"></a> AnalysisLevelGroup

Gets or sets analysis level group for MeshFree

```csharp
[Obsolete]
public AnalysisLevelGroup AnalysisLevelGroup { get; set; }
```

#### Property Value

 [AnalysisLevelGroup](VM.Managed.DAFUL.MeshFree.AnalysisLevelGroup.md)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_AnalysisParameter"></a> AnalysisParameter

Gets or sets the analysis parameter

```csharp
public AttributeEigenvalueAnalysisParameter AnalysisParameter { get; set; }
```

#### Property Value

 [AttributeEigenvalueAnalysisParameter](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/AttributeEigenvalueAnalysisParameter.cs)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_DrawGlobalBody"></a> DrawGlobalBody

Gets or sets a value indicating whether draw global body.

```csharp
public override bool DrawGlobalBody { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_LevelGroupOfAnalysis"></a> LevelGroupOfAnalysis

Gets or sets the analysis level group.

```csharp
public AnalysisLevelGroup LevelGroupOfAnalysis { get; set; }
```

#### Property Value

 [AnalysisLevelGroup](VM.Managed.DAFUL.MeshFree.AnalysisLevelGroup.md)

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_RecommendDistanceX"></a> RecommendDistanceX

```csharp
public double RecommendDistanceX { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_RecommendDistanceY"></a> RecommendDistanceY

Gets the recommend distance Y.

```csharp
public double RecommendDistanceY { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_RecommendDistanceZ"></a> RecommendDistanceZ

Gets the recommend distance Z.

```csharp
public double RecommendDistanceZ { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_XScale"></a> XScale

Gets or sets scale of X

```csharp
public double XScale { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_YScale"></a> YScale

Gets or sets scale of Y

```csharp
public double YScale { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_ZScale"></a> ZScale

Gets or sets scale of Z

```csharp
public double ZScale { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_InitUserDefinedDistance"></a> InitUserDefinedDistance\(\)

Initialize User Defined Distance.

```csharp
public void InitUserDefinedDistance()
```

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_Initialize"></a> Initialize\(\)

Initializes this instance.

```csharp
public override void Initialize()
```

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_OnDeserializationAttribute"></a> OnDeserializationAttribute\(\)

Called when [deserialization attribute].

```csharp
public override void OnDeserializationAttribute()
```

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_SetDefaultValue_VM_Managed_ObjectBase_"></a> SetDefaultValue\(ObjectBase\)

Set default value.

```csharp
public override void SetDefaultValue(ObjectBase objContainer)
```

#### Parameters

`objContainer` ObjectBase

The container.

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_SetDefaultValue_VM_Managed_ObjectBase_System_Boolean_"></a> SetDefaultValue\(ObjectBase, bool\)

Set default value.

```csharp
public void SetDefaultValue(ObjectBase objContainer, bool useDefault)
```

#### Parameters

`objContainer` ObjectBase

The container.

`useDefault` bool

The useDefault.

### <a id="VM_Managed_DAFUL_MeshFree_AttributeMeshFreeBody_UpdateMeshFreeNode"></a> UpdateMeshFreeNode\(\)

Updaete meshfree node.

```csharp
public void UpdateMeshFreeNode()
```

