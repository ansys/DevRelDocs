#  Class PropertyShaftSetMeshBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of fe shaftset

```csharp
public class PropertyShaftSetMeshBase : PropertyHousingBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyHousingBase](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md) ← 
[PropertyShaftSetMeshBase](VM.Managed.DAFUL.GearTrain.PropertyShaftSetMeshBase.md)

#### Derived

[PropertyShaftSetFE](VM.Managed.DAFUL.GearTrain.PropertyShaftSetFE.md), 
[PropertyShaftSetMeshFree](VM.Managed.DAFUL.GearTrain.PropertyShaftSetMeshFree.md)

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
IHistoryObjectSerializable, 
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
Property.Initialize\(Unit.ConvertFactor\), 
Property.PropertyRequestUpdate\(object, LinkEventArgs\), 
Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
Property.GetUnnamedObjectName\(object\), 
Property.FindLocal\(string\), 
Property.Draw\(Canvas, TMatrix, TMatrix, bool\), 
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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase__ctor"></a> PropertyShaftSetMeshBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyShaftSetMeshBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyShaftSetMeshBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase_InputPowerLoad"></a> InputPowerLoad

Gets the input power load.

```csharp
public PowerLoadOnRBE InputPowerLoad { get; }
```

#### Property Value

 [PowerLoadOnRBE](VM.Managed.DAFUL.GearTrain.PowerLoadOnRBE.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase_OutputPowerLoad"></a> OutputPowerLoad

Gets the output power load.

```csharp
public PowerLoadOnRBE OutputPowerLoad { get; }
```

#### Property Value

 [PowerLoadOnRBE](VM.Managed.DAFUL.GearTrain.PowerLoadOnRBE.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase_PowerLoadOnRBEs"></a> PowerLoadOnRBEs

Gets or sets the power loads on rbe.

```csharp
public PowerLoadOnRBE[] PowerLoadOnRBEs { get; set; }
```

#### Property Value

 [PowerLoadOnRBE](VM.Managed.DAFUL.GearTrain.PowerLoadOnRBE.md)\[\]

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase_AddPowerLoadOnRBE_VM_Managed_DAFUL_GearTrain_PowerLoadOnRBE_"></a> AddPowerLoadOnRBE\(PowerLoadOnRBE\)

Adds the power load on rbe.

```csharp
public void AddPowerLoadOnRBE(PowerLoadOnRBE pl)
```

#### Parameters

`pl` [PowerLoadOnRBE](VM.Managed.DAFUL.GearTrain.PowerLoadOnRBE.md)

The pl.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase_IsContainsNameOfPowerLoadOnRBE_System_String_"></a> IsContainsNameOfPowerLoadOnRBE\(string\)

Determines whether [is contains name of power load on RBE] [the specified STR name].

```csharp
public bool IsContainsNameOfPowerLoadOnRBE(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [is contains name of power load on RBE] [the specified STR name]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyShaftSetMeshBase_RemovePowerLoadOnRBE_VM_Managed_DAFUL_GearTrain_PowerLoadOnRBE_"></a> RemovePowerLoadOnRBE\(PowerLoadOnRBE\)

Removes the power load on rbe.

```csharp
public void RemovePowerLoadOnRBE(PowerLoadOnRBE pl)
```

#### Parameters

`pl` [PowerLoadOnRBE](VM.Managed.DAFUL.GearTrain.PowerLoadOnRBE.md)

The pl.

