# Class PropertyShaftSetBase
<a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of Shaft set base

```csharp
public abstract class PropertyShaftSetBase : PropertyHousingBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
[PropertyHousingBase](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md) ← 
[PropertyShaftSetBase](VM.Managed.DAFUL.GearTrain.PropertyShaftSetBase.md)

#### Derived

[PropertyShaftSet](VM.Managed.DAFUL.GearTrain.PropertyShaftSet.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

[PropertyHousingBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[PropertyHousingBase.GetUnnamedObjectName\(object\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_GetUnnamedObjectName\_System\_Object\_), 
[PropertyHousingBase.FindLocal\(string\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_FindLocal\_System\_String\_), 
[PropertyHousingBase.GeometryInfos\(GeometryInfoBase.GeometryType\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_GeometryInfos\_VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_GeometryType\_), 
[PropertyHousingBase.FindAddedBuilderFromGeomInfo\(GeometryInfoBase, string\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_FindAddedBuilderFromGeomInfo\_VM\_Managed\_DAFUL\_GearTrain\_GeometryInfoBase\_System\_String\_), 
[PropertyHousingBase.IsAvaiableToAddOrModifyGearWithAxis\(GearTrainDocument, string, VectorBase, VectorBase, GearGeometryInfo\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IsAvaiableToAddOrModifyGearWithAxis\_VM\_Managed\_DAFUL\_GearTrain\_GearTrainDocument\_System\_String\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_VM\_Managed\_DAFUL\_GearTrain\_GearGeometryInfo\_), 
[PropertyHousingBase.IsAvaiableToAddOrModifyCrossHelicalGearWithAxis\(GearTrainDocument, string, VectorBase, VectorBase, GearGeometryInfo\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IsAvaiableToAddOrModifyCrossHelicalGearWithAxis\_VM\_Managed\_DAFUL\_GearTrain\_GearTrainDocument\_System\_String\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_VM\_Managed\_DAFUL\_GearTrain\_GearGeometryInfo\_), 
[PropertyHousingBase.IsAvaiableToAddOrModifyGearWithCenterDistance\(GearTrainDocument, string, VectorBase, VectorBase, GearGeometryInfo\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IsAvaiableToAddOrModifyGearWithCenterDistance\_VM\_Managed\_DAFUL\_GearTrain\_GearTrainDocument\_System\_String\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_VM\_Managed\_DAFUL\_GearTrain\_GearGeometryInfo\_), 
[PropertyHousingBase.GetGlobalAxisCore\(Body\[\], ref List<VectorBase\[\]\>\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_GetGlobalAxisCore\_VM\_Managed\_CAD\_Body\_\_\_System\_Collections\_Generic\_List\_VM\_Managed\_VectorBase\_\_\_\_\_), 
[PropertyHousingBase.AddPointLoad\(IPointLoad\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_AddPointLoad\_VM\_Managed\_DAFUL\_GearTrain\_IPointLoad\_), 
[PropertyHousingBase.RemovePointLoad\(IPointEntity\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_RemovePointLoad\_VM\_Managed\_DAFUL\_GearTrain\_IPointEntity\_), 
[PropertyHousingBase.IsContainsNameOfPointLoad\(string\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IsContainsNameOfPointLoad\_System\_String\_), 
[PropertyHousingBase.GetPointLoadPoint\(\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_GetPointLoadPoint), 
[PropertyHousingBase.IsContainsOffsetOfPointLoad\(double\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IsContainsOffsetOfPointLoad\_System\_Double\_), 
[PropertyHousingBase.GetNewNameFromPointLoad\(string\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_GetNewNameFromPointLoad\_System\_String\_), 
[PropertyHousingBase.AddUnbalanceMass\(IUnbalanceMass\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_AddUnbalanceMass\_VM\_Managed\_DAFUL\_GearTrain\_IUnbalanceMass\_), 
[PropertyHousingBase.RemoveUnbalanceMass\(IPointEntity\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_RemoveUnbalanceMass\_VM\_Managed\_DAFUL\_GearTrain\_IPointEntity\_), 
[PropertyHousingBase.IsContainsNameOfUnbalanceMass\(string\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IsContainsNameOfUnbalanceMass\_System\_String\_), 
[PropertyHousingBase.GetUnbalanceMassPoint\(\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_GetUnbalanceMassPoint), 
[PropertyHousingBase.IsContainsOffsetOfUnbalanceMass\(double\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IsContainsOffsetOfUnbalanceMass\_System\_Double\_), 
[PropertyHousingBase.GetNewNameFromUnbalanceMass\(string\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_GetNewNameFromUnbalanceMass\_System\_String\_), 
[PropertyHousingBase.GetNewNameFromChildEntityCore\(List<string\>, string\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_GetNewNameFromChildEntityCore\_System\_Collections\_Generic\_List\_System\_String\_\_System\_String\_), 
[PropertyHousingBase.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_OnDeserialization\_System\_Object\_), 
[PropertyHousingBase.PointLoads](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_PointLoads), 
[PropertyHousingBase.IPointLoads](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IPointLoads), 
[PropertyHousingBase.UnbalanceMasses](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_UnbalanceMasses), 
[PropertyHousingBase.IUnbalanceMasses](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_IUnbalanceMasses), 
[PropertyHousingBase.ComponentAnalysis](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyHousingBase\_ComponentAnalysis), 
[Property.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.Draw\(Canvas, TMatrix, TMatrix, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
ContainerObject<PropertyEventCore\>.Find\(string\), 
ContainerObject<PropertyEventCore\>.FindLocal\(string\), 
ContainerObject<PropertyEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<PropertyEventCore\>.GetKey\(\), 
Object<PropertyEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<PropertyEventCore\>.SetIconColor\(Canvas\), 
Object<PropertyEventCore\>.OnDeserialization\(object\), 
Object<PropertyEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<PropertyEventCore\>.RollbackEvent\(\), 
Object<PropertyEventCore\>.OnDeserializedCore\(object\), 
Object<PropertyEventCore\>.Key, 
Object<PropertyEventCore\>.UntypedEventCore, 
Object<PropertyEventCore\>.EventCore, 
Object<PropertyEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase__ctor"></a> PropertyShaftSetBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyShaftSetBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyShaftSetBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_AssemblyTolerance"></a> AssemblyTolerance

Gets or sets the assembly tolerance

```csharp
public static double AssemblyTolerance { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_BeamSectionRatio"></a> BeamSectionRatio

Gets or sets the beam section ratio.

```csharp
public ExpressionValueVariable BeamSectionRatio { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_Color"></a> Color

Gets or sets the color.
Use SetColor() when this instance sets for undo/redo

```csharp
public string Color { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_DrawingColor"></a> DrawingColor

Gets the color of the drawing.

```csharp
public Color DrawingColor { get; }
```

#### Property Value

 Color

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_EccentricDirection"></a> EccentricDirection

Gets or sets the eccentric direction.

```csharp
public DirectionBase EccentricDirection { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_InputPowerLoad"></a> InputPowerLoad

Gets the input power load.

```csharp
public PowerLoad InputPowerLoad { get; }
```

#### Property Value

 [PowerLoad](VM.Managed.DAFUL.GearTrain.PowerLoad.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_MeasurePoints"></a> MeasurePoints

Gets or sets the Measure points.

```csharp
public MeasurePoint[] MeasurePoints { get; set; }
```

#### Property Value

 [MeasurePoint](VM.Managed.DAFUL.GearTrain.MeasurePoint.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_OutputPowerLoad"></a> OutputPowerLoad

Gets the output power load.

```csharp
public PowerLoad OutputPowerLoad { get; }
```

#### Property Value

 [PowerLoad](VM.Managed.DAFUL.GearTrain.PowerLoad.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_PowerLoads"></a> PowerLoads

Gets or sets the power loads.

```csharp
public PowerLoad[] PowerLoads { get; set; }
```

#### Property Value

 [PowerLoad](VM.Managed.DAFUL.GearTrain.PowerLoad.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_SectionInfos"></a> SectionInfos

Gets or sets the section infos.

```csharp
public SectionInfo[] SectionInfos { get; set; }
```

#### Property Value

 [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)\[\]

#### Exceptions

 Exception

Section Info List is null.
or
Section Info list is null.
or
Section information object is null.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_StartAxis"></a> StartAxis

Gets or sets the start axis.

```csharp
public DirectionBase StartAxis { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_StartAxisValue"></a> StartAxisValue

Gets the start axis value.

```csharp
public VectorBase StartAxisValue { get; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_StartPoint"></a> StartPoint

Gets or sets the start point.

```csharp
public PointBase StartPoint { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_TotalSectionLength"></a> TotalSectionLength

Gets the total length of the section.

```csharp
public double TotalSectionLength { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_UseMiddleElementReferenceFrame"></a> UseMiddleElementReferenceFrame

Use middle element reference frame

```csharp
public bool UseMiddleElementReferenceFrame { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_WidthForDurabilityAnalysis"></a> WidthForDurabilityAnalysis

Gets or sets the width for durability analysis.

```csharp
public ExpressionValueVariable WidthForDurabilityAnalysis { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_AddGearInfo_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_System_Double_VM_Managed_Document3D_VM_Managed_DAFUL_GearTrain_IOpenDesignerForGearTrain_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_"></a> AddGearInfo\(GearGeometryInfo, double, Document3D, IOpenDesignerForGearTrain, RacewayGeometryInfo\)

Adds the gear information.

```csharp
public bool AddGearInfo(GearGeometryInfo info, double dOffset, Document3D doc, IOpenDesignerForGearTrain objParent, RacewayGeometryInfo rInfo)
```

#### Parameters

`info` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The information.

`dOffset` double

The d offset.

`doc` Document3D

The document.

`objParent` [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

The object parent.

`rInfo` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The r information.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_AddGeometryInfo_VM_Managed_DAFUL_GearTrain_GeometryInfoBase_System_Double_VM_Managed_Document3D_VM_Managed_DAFUL_GearTrain_IOpenDesignerForGearTrain_"></a> AddGeometryInfo\(GeometryInfoBase, double, Document3D, IOpenDesignerForGearTrain\)

Adds the geometry information.

```csharp
public bool AddGeometryInfo(GeometryInfoBase info, double dOffset, Document3D doc, IOpenDesignerForGearTrain objParent)
```

#### Parameters

`info` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The information.

`dOffset` double

The d offset.

`doc` Document3D

The document.

`objParent` [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

The object parent.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_AddGeometryInfo_VM_Managed_DAFUL_GearTrain_GeometryInfoBase_System_Double_VM_Managed_Document3D_VM_Managed_DAFUL_GearTrain_IOpenDesignerForGearTrain_System_Boolean_"></a> AddGeometryInfo\(GeometryInfoBase, double, Document3D, IOpenDesignerForGearTrain, bool\)

Adds the geometry information.

```csharp
public bool AddGeometryInfo(GeometryInfoBase info, double dOffset, Document3D doc, IOpenDesignerForGearTrain objParent, bool bRack)
```

#### Parameters

`info` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The information.

`dOffset` double

The d offset.

`doc` Document3D

The document.

`objParent` [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

The object parent.

`bRack` bool

The object rack.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_AddMeasurePoint_VM_Managed_DAFUL_GearTrain_MeasurePoint_"></a> AddMeasurePoint\(MeasurePoint\)

Adds the Measure point.

```csharp
public void AddMeasurePoint(MeasurePoint ip)
```

#### Parameters

`ip` [MeasurePoint](VM.Managed.DAFUL.GearTrain.MeasurePoint.md)

The ip.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_AddPowerLoad_VM_Managed_DAFUL_GearTrain_PowerLoad_"></a> AddPowerLoad\(PowerLoad\)

Adds the power load.

```csharp
public void AddPowerLoad(PowerLoad pl)
```

#### Parameters

`pl` [PowerLoad](VM.Managed.DAFUL.GearTrain.PowerLoad.md)

The pl.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_AddSectionInfo_VM_Managed_DAFUL_GearTrain_SectionInfo_"></a> AddSectionInfo\(SectionInfo\)

Adds the section information.

```csharp
public void AddSectionInfo(SectionInfo info)
```

#### Parameters

`info` [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

The information.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_ClearSectionInfo"></a> ClearSectionInfo\(\)

Clear section information.

```csharp
public void ClearSectionInfo()
```

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_FindLocal_System_String_"></a> FindLocal\(string\)

Finds the specified string name.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name of the string.

#### Returns

 IObjectBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_FindRack_System_Double_System_Double_VM_Managed_Document3D_"></a> FindRack\(double, double, Document3D\)

Finds the rack from geom information.

```csharp
public Section FindRack(double dLength, double dOffset, Document3D doc)
```

#### Parameters

`dLength` double

Length of the d.

`dOffset` double

The d offset.

`doc` Document3D

The document.

#### Returns

 [Section](VM.Managed.DAFUL.GearTrain.CAD.Section.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_FindSection_System_Double_System_Double_VM_Managed_Document3D_"></a> FindSection\(double, double, Document3D\)

Finds the section from gear information.

```csharp
public Section FindSection(double dLength, double dOffset, Document3D doc)
```

#### Parameters

`dLength` double

Length of the d.

`dOffset` double

The d offset.

`doc` Document3D

The document.

#### Returns

 [Section](VM.Managed.DAFUL.GearTrain.CAD.Section.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_FindSection_System_Double_"></a> FindSection\(double\)

Find section

```csharp
public SectionInfo FindSection(double dOffset)
```

#### Parameters

`dOffset` double

THe offset

#### Returns

 [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_FindSectionWithGearInfo_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_System_Double_"></a> FindSectionWithGearInfo\(GearGeometryInfo, double\)

Finds the section with gear information.

```csharp
public SectionInfo FindSectionWithGearInfo(GearGeometryInfo info, double dOffset)
```

#### Parameters

`info` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The information.

`dOffset` double

The d offset.

#### Returns

 [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_FindSectionWithRacewayInfo_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_System_Double_"></a> FindSectionWithRacewayInfo\(RacewayGeometryInfo, double\)

Finds the section with raceway information.

```csharp
public SectionInfo FindSectionWithRacewayInfo(RacewayGeometryInfo info, double dOffset)
```

#### Parameters

`info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The information.

`dOffset` double

The d offset.

#### Returns

 [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_FindSectionWithSlidingBearingInfo_VM_Managed_DAFUL_GearTrain_SBGeometryInfo_System_Double_"></a> FindSectionWithSlidingBearingInfo\(SBGeometryInfo, double\)

Finds the section with sliding bearing information.

```csharp
public SectionInfo FindSectionWithSlidingBearingInfo(SBGeometryInfo info, double dOffset)
```

#### Parameters

`info` [SBGeometryInfo](VM.Managed.DAFUL.GearTrain.SBGeometryInfo.md)

The information.

`dOffset` double

The d offset.

#### Returns

 [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetBearingStartEndPoint"></a> GetBearingStartEndPoint\(\)

Gets the bearing start end point.

```csharp
public List<Vector> GetBearingStartEndPoint()
```

#### Returns

 List<Vector\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetGearStartEndPoint"></a> GetGearStartEndPoint\(\)

Gets the gear start end point.

```csharp
public List<Vector> GetGearStartEndPoint()
```

#### Returns

 List<Vector\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetGlobalAxisCore_VM_Managed_CAD_Body___System_Collections_Generic_List_VM_Managed_VectorBase_____"></a> GetGlobalAxisCore\(Body\[\], ref List<VectorBase\[\]\>\)

Get the global axis

```csharp
protected override void GetGlobalAxisCore(Body[] arBody, ref List<VectorBase[]> lst)
```

#### Parameters

`arBody` Body\[\]

The body list.

`lst` List<VectorBase\[\]\>

vector list.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetLengthUntilTargetSegment_VM_Managed_DAFUL_GearTrain_SectionInfo_"></a> GetLengthUntilTargetSegment\(SectionInfo\)

Gets the length until target segment.

```csharp
public double GetLengthUntilTargetSegment(SectionInfo target)
```

#### Parameters

`target` [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

The target segment.

#### Returns

 double

The length until target segment.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetNewNameFromMeasurePoint_System_String_"></a> GetNewNameFromMeasurePoint\(string\)

Gets the new name from Measure point.

```csharp
public string GetNewNameFromMeasurePoint(string strPrefix)
```

#### Parameters

`strPrefix` string

The string prefix.

#### Returns

 string

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetNewNameFromPowerLoad_System_String_"></a> GetNewNameFromPowerLoad\(string\)

Gets the new name from power load.

```csharp
public string GetNewNameFromPowerLoad(string strPrefix)
```

#### Parameters

`strPrefix` string

The string prefix.

#### Returns

 string

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetNextLocationPoint_VM_Managed_DAFUL_GearTrain_SectionGeometryBase_VM_Managed_Vector_VM_Managed_VectorBase_"></a> GetNextLocationPoint\(SectionGeometryBase, Vector, VectorBase\)

Gets the next location.

```csharp
public VectorBase GetNextLocationPoint(SectionGeometryBase sgb, Vector vecAxis, VectorBase vecOffsetDirection)
```

#### Parameters

`sgb` [SectionGeometryBase](VM.Managed.DAFUL.GearTrain.SectionGeometryBase.md)

The SGB.

`vecAxis` Vector

The vec axis.

`vecOffsetDirection` VectorBase

The offset direction.

#### Returns

 VectorBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetPowerLoadPoint"></a> GetPowerLoadPoint\(\)

Gets the power load point.

```csharp
public List<Vector> GetPowerLoadPoint()
```

#### Returns

 List<Vector\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_GetShaftStartEndPoint"></a> GetShaftStartEndPoint\(\)

Gets the shaft start end point.

```csharp
public List<Vector> GetShaftStartEndPoint()
```

#### Returns

 List<Vector\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_InsertSectionInfo_VM_Managed_DAFUL_GearTrain_SectionInfo_VM_Managed_DAFUL_GearTrain_SectionInfo___"></a> InsertSectionInfo\(SectionInfo, SectionInfo\[\]\)

Inserts the section information.

```csharp
public void InsertSectionInfo(SectionInfo beforeSectionInfo, SectionInfo[] infos)
```

#### Parameters

`beforeSectionInfo` [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

The before section information.

`infos` [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)\[\]

The infos.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_IsContainsNameOfMeasurePoint_System_String_"></a> IsContainsNameOfMeasurePoint\(string\)

Determines whether [is contains name of Measure point] [the specified string name].

```csharp
public bool IsContainsNameOfMeasurePoint(string strName)
```

#### Parameters

`strName` string

Name of the string.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_IsContainsNameOfPowerLoad_System_String_"></a> IsContainsNameOfPowerLoad\(string\)

Determines whether [is contains name of power load] [the specified string name].

```csharp
public bool IsContainsNameOfPowerLoad(string strName)
```

#### Parameters

`strName` string

Name of the string.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_IsContainsOffsetOfMeasurePoint_System_Double_"></a> IsContainsOffsetOfMeasurePoint\(double\)

Determines whether [is contains offset of Measure point] [the specified d offset].

```csharp
public bool IsContainsOffsetOfMeasurePoint(double dOffset)
```

#### Parameters

`dOffset` double

The d offset.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_IsContainsOffsetOfPowerLoad_System_Double_"></a> IsContainsOffsetOfPowerLoad\(double\)

Determines whether [is contains offset of power load] [the specified d offset].

```csharp
public bool IsContainsOffsetOfPowerLoad(double dOffset)
```

#### Parameters

`dOffset` double

The d offset.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_IsLooseSameValue_System_Double_System_Double_"></a> IsLooseSameValue\(double, double\)

Determines whether is same value.

```csharp
public static bool IsLooseSameValue(double dVal1, double dVal2)
```

#### Parameters

`dVal1` double

value.

`dVal2` double

The another value.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_IsLooseSameVector_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> IsLooseSameVector\(VectorBase, VectorBase\)

Determines whether is same value.

```csharp
public static bool IsLooseSameVector(VectorBase vecVal1, VectorBase vecVal2)
```

#### Parameters

`vecVal1` VectorBase

value.

`vecVal2` VectorBase

The another value.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_IsSameValue_System_Double_System_Double_"></a> IsSameValue\(double, double\)

Determines whether is same value.

```csharp
public static bool IsSameValue(double dVal1, double dVal2)
```

#### Parameters

`dVal1` double

value.

`dVal2` double

The another value.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_IsSameVector_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> IsSameVector\(VectorBase, VectorBase\)

Determines whether is same value.

```csharp
public static bool IsSameVector(VectorBase vecVal1, VectorBase vecVal2)
```

#### Parameters

`vecVal1` VectorBase

value.

`vecVal2` VectorBase

The another value.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Links the request destroying.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_RemoveMeasurePoint_VM_Managed_DAFUL_GearTrain_PointEntityOnShaftSet_"></a> RemoveMeasurePoint\(PointEntityOnShaftSet\)

Removes the Measure point.

```csharp
public void RemoveMeasurePoint(PointEntityOnShaftSet ip)
```

#### Parameters

`ip` [PointEntityOnShaftSet](VM.Managed.DAFUL.GearTrain.PointEntityOnShaftSet.md)

The ip.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_RemovePowerLoad_VM_Managed_DAFUL_GearTrain_PointEntityOnShaftSet_"></a> RemovePowerLoad\(PointEntityOnShaftSet\)

Removes the power load.

```csharp
public void RemovePowerLoad(PointEntityOnShaftSet pl)
```

#### Parameters

`pl` [PointEntityOnShaftSet](VM.Managed.DAFUL.GearTrain.PointEntityOnShaftSet.md)

The pl.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_RemoveRackSectionInfo_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> RemoveRackSectionInfo\(GearGeometryInfo\)

Removes the rack section information.

```csharp
public void RemoveRackSectionInfo(GearGeometryInfo gInfo)
```

#### Parameters

`gInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The g information.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_RemoveSectionInfo_VM_Managed_DAFUL_GearTrain_SectionInfo_"></a> RemoveSectionInfo\(SectionInfo\)

Removes the section information.

```csharp
public SectionInfo RemoveSectionInfo(SectionInfo info)
```

#### Parameters

`info` [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

The information.

#### Returns

 [SectionInfo](VM.Managed.DAFUL.GearTrain.SectionInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetBase_SetColor_System_String_"></a> SetColor\(string\)

Set color.

```csharp
public void SetColor(string color)
```

#### Parameters

`color` string

The color.

