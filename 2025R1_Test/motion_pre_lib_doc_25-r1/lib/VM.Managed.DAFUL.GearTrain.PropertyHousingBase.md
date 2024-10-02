#  Class PropertyHousingBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of housing base

```csharp
public abstract class PropertyHousingBase : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyHousingBase](VM.Managed.DAFUL.GearTrain.PropertyHousingBase.md)

#### Derived

[PropertyHousingFE](VM.Managed.DAFUL.GearTrain.PropertyHousingFE.md), 
[PropertyHousingMeshFree](VM.Managed.DAFUL.GearTrain.PropertyHousingMeshFree.md), 
[PropertyShaftSetBase](VM.Managed.DAFUL.GearTrain.PropertyShaftSetBase.md), 
[PropertyShaftSetMeshBase](VM.Managed.DAFUL.GearTrain.PropertyShaftSetMeshBase.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase__ctor"></a> PropertyHousingBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyHousingBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyHousingBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_ComponentAnalysis"></a> ComponentAnalysis

Gets or sets the component analysis.

```csharp
public ComponentAnalysis ComponentAnalysis { get; set; }
```

#### Property Value

 [ComponentAnalysis](VM.Managed.DAFUL.GearTrain.ComponentAnalysis.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IPointLoads"></a> IPointLoads

Gets the point loads.

```csharp
public IPointLoad[] IPointLoads { get; }
```

#### Property Value

 [IPointLoad](VM.Managed.DAFUL.GearTrain.IPointLoad.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IUnbalanceMasses"></a> IUnbalanceMasses

Gets the unbalance masses.

```csharp
public IUnbalanceMass[] IUnbalanceMasses { get; }
```

#### Property Value

 [IUnbalanceMass](VM.Managed.DAFUL.GearTrain.IUnbalanceMass.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_PointLoads"></a> PointLoads

Gets or sets the point loads.

```csharp
public SubEntity[] PointLoads { get; set; }
```

#### Property Value

 SubEntity\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_UnbalanceMasses"></a> UnbalanceMasses

Gets or sets the unbalance masses.

```csharp
public SubEntity[] UnbalanceMasses { get; set; }
```

#### Property Value

 SubEntity\[\]

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_AddPointLoad_VM_Managed_DAFUL_GearTrain_IPointLoad_"></a> AddPointLoad\(IPointLoad\)

Adds the point load.

```csharp
public void AddPointLoad(IPointLoad pl)
```

#### Parameters

`pl` [IPointLoad](VM.Managed.DAFUL.GearTrain.IPointLoad.md)

The pl.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_AddUnbalanceMass_VM_Managed_DAFUL_GearTrain_IUnbalanceMass_"></a> AddUnbalanceMass\(IUnbalanceMass\)

Adds the unbalance mass.

```csharp
public void AddUnbalanceMass(IUnbalanceMass um)
```

#### Parameters

`um` [IUnbalanceMass](VM.Managed.DAFUL.GearTrain.IUnbalanceMass.md)

The um.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_FindAddedBuilderFromGeomInfo_VM_Managed_DAFUL_GearTrain_GeometryInfoBase_System_String_"></a> FindAddedBuilderFromGeomInfo\(GeometryInfoBase, string\)

Finds the added builder from geom information.

```csharp
public IGTBuilder FindAddedBuilderFromGeomInfo(GeometryInfoBase info, string strCategoryName)
```

#### Parameters

`info` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The information.

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string category.

#### Returns

 [IGTBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGTBuilder.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_FindLocal_System_String_"></a> FindLocal\(string\)

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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_GeometryInfos_VM_Managed_DAFUL_GearTrain_GeometryInfoBase_GeometryType_"></a> GeometryInfos\(GeometryType\)

Geometries the infos.

```csharp
public GeometryInfoBase[] GeometryInfos(GeometryInfoBase.GeometryType typeGeom)
```

#### Parameters

`typeGeom` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md).[GeometryType](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.GeometryType.md)

The type geom.

#### Returns

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_GetGlobalAxisCore_VM_Managed_CAD_Body___System_Collections_Generic_List_VM_Managed_VectorBase_____"></a> GetGlobalAxisCore\(Body\[\], ref List<VectorBase\[\]\>\)

Get the global axis

```csharp
protected virtual void GetGlobalAxisCore(Body[] arBody, ref List<VectorBase[]> lst)
```

#### Parameters

`arBody` Body\[\]

The body list.

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\[\]\>

vector list.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_GetNewNameFromChildEntityCore_System_Collections_Generic_List_System_String__System_String_"></a> GetNewNameFromChildEntityCore\(List<string\>, string\)

Gets the new name from child entity core.

```csharp
protected string GetNewNameFromChildEntityCore(List<string> lstName, string strPrefix)
```

#### Parameters

`lstName` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

Name of the LST.

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string prefix.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_GetNewNameFromPointLoad_System_String_"></a> GetNewNameFromPointLoad\(string\)

Gets the new name from point load.

```csharp
public string GetNewNameFromPointLoad(string strPrefix)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR prefix.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_GetNewNameFromUnbalanceMass_System_String_"></a> GetNewNameFromUnbalanceMass\(string\)

Gets the new name from unbalance mass.

```csharp
public string GetNewNameFromUnbalanceMass(string strPrefix)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR prefix.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_GetPointLoadPoint"></a> GetPointLoadPoint\(\)

Gets the point load point.

```csharp
public List<Vector> GetPointLoadPoint()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_GetUnbalanceMassPoint"></a> GetUnbalanceMassPoint\(\)

Gets the unbalance mass point.

```csharp
public List<Vector> GetUnbalanceMassPoint()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob unnamed.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IsAvaiableToAddOrModifyCrossHelicalGearWithAxis_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_VectorBase_VM_Managed_VectorBase_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> IsAvaiableToAddOrModifyCrossHelicalGearWithAxis\(GearTrainDocument, string, VectorBase, VectorBase, GearGeometryInfo\)

Determines whether [is avaiable to add or modify cross helical gear with axis] [the specified geartrain document].

```csharp
public bool IsAvaiableToAddOrModifyCrossHelicalGearWithAxis(GearTrainDocument docGT, string strExistShaftsetName, VectorBase vecPoint, VectorBase vecAxis, GearGeometryInfo addedGearInfo)
```

#### Parameters

`docGT` [GearTrainDocument](VM.Managed.DAFUL.GearTrain.GearTrainDocument.md)

The document gt.

`strExistShaftsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string exist shaftset.

`vecPoint` VectorBase

The vec point.

`vecAxis` VectorBase

The vec axis.

`addedGearInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The added gear information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IsAvaiableToAddOrModifyGearWithAxis_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_VectorBase_VM_Managed_VectorBase_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> IsAvaiableToAddOrModifyGearWithAxis\(GearTrainDocument, string, VectorBase, VectorBase, GearGeometryInfo\)

Determines whether [is avaiable to add or modify gear with axis] [the specified geartrain document].

```csharp
public bool IsAvaiableToAddOrModifyGearWithAxis(GearTrainDocument docGT, string strExistShaftsetName, VectorBase vecPoint, VectorBase vecAxis, GearGeometryInfo addedGearInfo)
```

#### Parameters

`docGT` [GearTrainDocument](VM.Managed.DAFUL.GearTrain.GearTrainDocument.md)

The document gt.

`strExistShaftsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string exist shaftset.

`vecPoint` VectorBase

The vec point.

`vecAxis` VectorBase

The vec axis.

`addedGearInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The added gear information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IsAvaiableToAddOrModifyGearWithCenterDistance_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_VM_Managed_VectorBase_VM_Managed_VectorBase_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> IsAvaiableToAddOrModifyGearWithCenterDistance\(GearTrainDocument, string, VectorBase, VectorBase, GearGeometryInfo\)

Determines whether [is avaiable to add or modify gear with center distance] [the specified document gt].

```csharp
public bool IsAvaiableToAddOrModifyGearWithCenterDistance(GearTrainDocument docGT, string strExistShaftsetName, VectorBase vecPoint, VectorBase vecAxis, GearGeometryInfo ggInfo)
```

#### Parameters

`docGT` [GearTrainDocument](VM.Managed.DAFUL.GearTrain.GearTrainDocument.md)

The document gt.

`strExistShaftsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string exist shaftset.

`vecPoint` VectorBase

The vec point.

`vecAxis` VectorBase

The vec axis.

`ggInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The gear geometry information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IsContainsNameOfPointLoad_System_String_"></a> IsContainsNameOfPointLoad\(string\)

Determines whether [is contains name of point load] [the specified STR name].

```csharp
public bool IsContainsNameOfPointLoad(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [is contains name of point load] [the specified STR name]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IsContainsNameOfUnbalanceMass_System_String_"></a> IsContainsNameOfUnbalanceMass\(string\)

Determines whether [is contains name of unbalance mass] [the specified STR name].

```csharp
public bool IsContainsNameOfUnbalanceMass(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [is contains name of unbalance mass] [the specified STR name]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IsContainsOffsetOfPointLoad_System_Double_"></a> IsContainsOffsetOfPointLoad\(double\)

Determines whether [is contains offset of point load] [the specified d offset].

```csharp
public bool IsContainsOffsetOfPointLoad(double dOffset)
```

#### Parameters

`dOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d offset.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [is contains offset of point load] [the specified d offset]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_IsContainsOffsetOfUnbalanceMass_System_Double_"></a> IsContainsOffsetOfUnbalanceMass\(double\)

Determines whether [is contains offset of unbalance mass] [the specified d offset].

```csharp
public bool IsContainsOffsetOfUnbalanceMass(double dOffset)
```

#### Parameters

`dOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d offset.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [is contains offset of unbalance mass] [the specified d offset]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_RemovePointLoad_VM_Managed_DAFUL_GearTrain_IPointEntity_"></a> RemovePointLoad\(IPointEntity\)

Removes the point load.

```csharp
public void RemovePointLoad(IPointEntity pl)
```

#### Parameters

`pl` [IPointEntity](VM.Managed.DAFUL.GearTrain.IPointEntity.md)

The pl.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyHousingBase_RemoveUnbalanceMass_VM_Managed_DAFUL_GearTrain_IPointEntity_"></a> RemoveUnbalanceMass\(IPointEntity\)

Removes the unbalance mass.

```csharp
public void RemoveUnbalanceMass(IPointEntity um)
```

#### Parameters

`um` [IPointEntity](VM.Managed.DAFUL.GearTrain.IPointEntity.md)

The um.

