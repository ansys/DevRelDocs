#  Class PropertyGearSetCustom

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of custom gear set

```csharp
public class PropertyGearSetCustom : PropertyGearSetBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IPostDeserialized
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md) ← 
[PropertyGearSetCustom](VM.Managed.DAFUL.GearTrain.PropertyGearSetCustom.md)

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
IHasID, 
IPostDeserialized

#### Inherited Members

[PropertyGearSetBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[PropertyGearSetBase.FindLocal\(string\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_FindLocal\_System\_String\_), 
[PropertyGearSetBase.GetSelectedGearInfo\(string, GearGeometryInfo\[\]\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_GetSelectedGearInfo\_System\_String\_VM\_Managed\_DAFUL\_GearTrain\_GearGeometryInfo\_\_\_), 
[PropertyGearSetBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[PropertyGearSetBase.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_OnDeserialization\_System\_Object\_), 
[PropertyGearSetBase.AddAttributes\(\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_AddAttributes), 
[PropertyGearSetBase.AddUnitAttribute\(Document\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_AddUnitAttribute\_VM\_Managed\_Document\_), 
[PropertyGearSetBase.InitChild\(int, string\[\], Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_InitChild\_System\_Int32\_System\_String\_\_\_VM\_Unit\_ConvertFactor\_), 
[PropertyGearSetBase.SetModified\(\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_SetModified), 
[PropertyGearSetBase.ReadResultCore\(XmlDocument\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ReadResultCore\_System\_Xml\_XmlDocument\_), 
[PropertyGearSetBase.PostBuildGear\(\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_PostBuildGear), 
[PropertyGearSetBase.ReadResultForDatFile\(string\[\], int\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ReadResultForDatFile\_System\_String\_\_\_System\_Int32\_), 
[PropertyGearSetBase.BuildGear\(\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_BuildGear), 
[PropertyGearSetBase.BuildGear\(bool\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_BuildGear\_System\_Boolean\_), 
[PropertyGearSetBase.BuildGearWithKissSoftInterface\(bool, KissSoftInterface.OutputData\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_BuildGearWithKissSoftInterface\_System\_Boolean\_VM\_Managed\_DAFUL\_GearTrain\_KissSoftInterface\_OutputData\_), 
[PropertyGearSetBase.BuildGearWithKissSoftInterface\(string\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_BuildGearWithKissSoftInterface\_System\_String\_), 
[PropertyGearSetBase.BuildGearWithKissSoftInterface\(\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_BuildGearWithKissSoftInterface), 
[PropertyGearSetBase.ReadResultWithKissSoftInterface\(uint, uint, uint, double, double, double\[\], double, KissSoftInterface.GearData\[\]\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ReadResultWithKissSoftInterface\_System\_UInt32\_System\_UInt32\_System\_UInt32\_System\_Double\_System\_Double\_System\_Double\_\_\_System\_Double\_VM\_Managed\_DAFUL\_GearTrain\_KissSoftInterface\_GearData\_\_\_), 
[PropertyGearSetBase.BuildGearCore\(bool, string, string, string\[\]\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_BuildGearCore\_System\_Boolean\_System\_String\_System\_String\_System\_String\_\_\_), 
[PropertyGearSetBase.GetIndexForGeomInfo\(GearGeometryInfo\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_GetIndexForGeomInfo\_VM\_Managed\_DAFUL\_GearTrain\_GearGeometryInfo\_), 
[PropertyGearSetBase.FindWebValue\(GearGeometryInfo\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_FindWebValue\_VM\_Managed\_DAFUL\_GearTrain\_GearGeometryInfo\_), 
[PropertyGearSetBase.FindWebBuilder\(IGearBuilder\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_FindWebBuilder\_VM\_Managed\_DAFUL\_GearTrain\_CAD\_IGearBuilder\_), 
[PropertyGearSetBase.SetSimulationType\(PropertyGearSetBase.CreateDATType\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_SetSimulationType\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_CreateDATType\_), 
[PropertyGearSetBase.SetColor\(string\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_SetColor\_System\_String\_), 
[PropertyGearSetBase.OnPostDeserializedImpl\(StreamingContext\)](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_OnPostDeserializedImpl\_System\_Runtime\_Serialization\_StreamingContext\_), 
[PropertyGearSetBase.ModifiedParam](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ModifiedParam), 
[PropertyGearSetBase.GeometryInfos](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_GeometryInfos), 
[PropertyGearSetBase.GearPairs](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_GearPairs), 
[PropertyGearSetBase.BasicInvoluteProperty](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_BasicInvoluteProperty), 
[PropertyGearSetBase.ToolProperty](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ToolProperty), 
[PropertyGearSetBase.ToleranceProperty](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ToleranceProperty), 
[PropertyGearSetBase.ModificationProperty](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ModificationProperty), 
[PropertyGearSetBase.MaterialProperty](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_MaterialProperty), 
[PropertyGearSetBase.WebProperty](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_WebProperty), 
[PropertyGearSetBase.ContactAnalysisProperty](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ContactAnalysisProperty), 
[PropertyGearSetBase.ToothStiffnessProperty](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_ToothStiffnessProperty), 
[PropertyGearSetBase.SimulationType](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_SimulationType), 
[PropertyGearSetBase.Color](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_Color), 
[PropertyGearSetBase.DrawingColor](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_DrawingColor), 
[PropertyGearSetBase.UseKissSoftInterface](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_UseKissSoftInterface), 
[PropertyGearSetBase.KissSoftInterfaceFilePath](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_KissSoftInterfaceFilePath), 
[PropertyGearSetBase.CreationMethod](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_CreationMethod), 
[PropertyGearSetBase.AdvancedGearGeometry](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md\#VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_AdvancedGearGeometry), 
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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetCustom__ctor"></a> PropertyGearSetCustom\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyGearSetCustom" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyGearSetCustom()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetCustom_GearProfileType"></a> GearProfileType

Gear profile type [0 : Involute, 1 : Cycloid, 2 : General]

```csharp
public int GearProfileType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetCustom_BuildGear_System_Boolean_"></a> BuildGear\(bool\)

Builds the gear.

```csharp
public override bool BuildGear(bool bCreate)
```

#### Parameters

`bCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetCustom_PostBuildGear"></a> PostBuildGear\(\)

post builder gear.

```csharp
protected override void PostBuildGear()
```

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetCustom_ReadResultCore_System_Xml_XmlDocument_"></a> ReadResultCore\(XmlDocument\)

Reads the result core.

```csharp
protected override void ReadResultCore(XmlDocument xmlDoc)
```

#### Parameters

`xmlDoc` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XML document.

