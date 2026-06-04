# Class PropertyGearSetBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of GearSetBase

```csharp
public abstract class PropertyGearSetBase : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IPostDeserialized
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

#### Derived

[PropertyGearSet](VM.Managed.DAFUL.GearTrain.PropertyGearSet.md), 
[PropertyGearSetCrossHelical](VM.Managed.DAFUL.GearTrain.PropertyGearSetCrossHelical.md), 
[PropertyGearSetCustom](VM.Managed.DAFUL.GearTrain.PropertyGearSetCustom.md), 
[PropertyGearSetCycloidPin](VM.Managed.DAFUL.GearTrain.PropertyGearSetCycloidPin.md), 
[PropertyGearSetInternal](VM.Managed.DAFUL.GearTrain.PropertyGearSetInternal.md), 
[PropertyGearSetPlanetary](VM.Managed.DAFUL.GearTrain.PropertyGearSetPlanetary.md), 
[PropertyGearSetPlanetaryDP](VM.Managed.DAFUL.GearTrain.PropertyGearSetPlanetaryDP.md), 
[PropertyGearSetRackAndPinion](VM.Managed.DAFUL.GearTrain.PropertyGearSetRackAndPinion.md), 
[PropertyGearSetWormAndWormWheel](VM.Managed.DAFUL.GearTrain.PropertyGearSetWormAndWormWheel.md)

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

### PropertyGearSetBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyGearSetBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyGearSetBase()
```

## Properties

### AdvancedGearGeometry

Gets the advanced gear geometry state.

```csharp
public bool AdvancedGearGeometry { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BasicInvoluteProperty

Gets or sets the basic involute property.

```csharp
public BasicInvolute BasicInvoluteProperty { get; set; }
```

#### Property Value

 [BasicInvolute](VM.Managed.DAFUL.GearTrain.BasicInvolute.md)

### Color

Gets or sets the color.
Use SetColor() when this instance sets for undo/redo

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ContactAnalysisProperty

Gets or sets the contact analysis property.

```csharp
public ContactAnalysis ContactAnalysisProperty { get; set; }
```

#### Property Value

 [ContactAnalysis](VM.Managed.DAFUL.GearTrain.ContactAnalysis.md)

### CreationMethod

Gets or sets the type of the creation method.

```csharp
public PropertyGearSetBase.CreationMethodType CreationMethod { get; set; }
```

#### Property Value

 [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md).[CreationMethodType](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.CreationMethodType.md)

### DrawingColor

Gets the color of the drawing.

```csharp
public Color DrawingColor { get; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### GearPairs

Gets or sets the gear pairs.

```csharp
public GearPair[] GearPairs { get; set; }
```

#### Property Value

 [GearPair](VM.Managed.DAFUL.GearTrain.GearPair.md)\[\]

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

GearPair list is null.
or
GearPair list is null.
or
GearPair is null.

### GeometryInfos

Gets or sets the geometry infos.

```csharp
public GearGeometryInfo[] GeometryInfos { get; set; }
```

#### Property Value

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)\[\]

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

GeometryInfo list is null.
or
GeometryInfo list is null.
or
GeometryInfo is null.

### KissSoftInterfaceFilePath

Gets or sets the kiss soft interface file path

```csharp
public string KissSoftInterfaceFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaterialProperty

Gets or sets the material property.

```csharp
public Material MaterialProperty { get; set; }
```

#### Property Value

 [Material](VM.Managed.DAFUL.GearTrain.Material.md)

### ModificationProperty

Gets or sets the modification property.

```csharp
public Modification ModificationProperty { get; set; }
```

#### Property Value

 [Modification](VM.Managed.DAFUL.GearTrain.Modification.md)

### ModifiedParam

Gets or sets the whether this instance's parameter is modified or not.

```csharp
public bool ModifiedParam { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SimulationType

Gets or sets the type of the simulation.
Use SetSimulationType() when this instance sets for undo/redo

```csharp
public PropertyGearSetBase.CreateDATType SimulationType { get; set; }
```

#### Property Value

 [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md).[CreateDATType](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.CreateDATType.md)

### ToleranceProperty

Gets or sets the tolerance property.

```csharp
public Tolerance ToleranceProperty { get; set; }
```

#### Property Value

 [Tolerance](VM.Managed.DAFUL.GearTrain.Tolerance.md)

### ToolProperty

Gets or sets the tool property.

```csharp
public Tool ToolProperty { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md)

### ToothStiffnessProperty

Gets or sets the tooth stiffness property.

```csharp
public ToothStiffness ToothStiffnessProperty { get; set; }
```

#### Property Value

 [ToothStiffness](VM.Managed.DAFUL.GearTrain.ToothStiffness.md)

### UseKissSoftInterface

Gets or sets the kiss soft interface use flag

```csharp
public bool UseKissSoftInterface { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WebProperty

Gets or sets the web property.

```csharp
public Web WebProperty { get; set; }
```

#### Property Value

 [Web](VM.Managed.DAFUL.GearTrain.Web.md)

## Methods

### AddAttributes\(\)

Add attributes

```csharp
protected void AddAttributes()
```

### AddUnitAttribute\(Document\)

Add unit attribute

```csharp
public void AddUnitAttribute(Document doc)
```

#### Parameters

`doc` Document

### BuildGear\(\)

Builds the gear.

```csharp
public bool BuildGear()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BuildGear\(bool\)

Builds the gear.

```csharp
public virtual bool BuildGear(bool bCreate)
```

#### Parameters

`bCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BuildGearCore\(bool, string, string, string\[\]\)

Build gear core.

```csharp
protected void BuildGearCore(bool bCreate, string strInputPath, string strResultPath, string[] arDatPath)
```

#### Parameters

`bCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

create state.

`strInputPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

input path.

`strResultPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

result path.

`arDatPath` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

dat file path array.

### BuildGearWithKissSoftInterface\(bool, OutputData\)

Builds the gear with kiss soft interface.

```csharp
public bool BuildGearWithKissSoftInterface(bool bCreate, KissSoftInterface.OutputData outputData)
```

#### Parameters

`bCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`outputData` [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[OutputData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.OutputData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BuildGearWithKissSoftInterface\(string\)

Builds the gear with kiss soft interface.

```csharp
public bool BuildGearWithKissSoftInterface(string strFilePath)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BuildGearWithKissSoftInterface\(\)

Builds the gear with kiss soft interface.

```csharp
public bool BuildGearWithKissSoftInterface()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FindLocal\(string\)

Finds the local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

#### Returns

 IObjectBase

### FindWebBuilder\(IGearBuilder\)

Finds the web builder.

```csharp
public AddedWebBuilder FindWebBuilder(IGearBuilder geombuilder)
```

#### Parameters

`geombuilder` [IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)

The geombuilder.

#### Returns

 [AddedWebBuilder](VM.Managed.DAFUL.GearTrain.CAD.AddedWebBuilder.md)

### FindWebValue\(GearGeometryInfo\)

Finds the web value.

```csharp
public WebPropertyValue FindWebValue(GearGeometryInfo info)
```

#### Parameters

`info` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The information.

#### Returns

 [WebPropertyValue](VM.Managed.DAFUL.GearTrain.WebPropertyValue.md)

### GetIndexForGeomInfo\(GearGeometryInfo\)

Get index for gear geometry information

```csharp
public int GetIndexForGeomInfo(GearGeometryInfo gFindInfo)
```

#### Parameters

`gFindInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The finding information.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetSelectedGearInfo\(string, GearGeometryInfo\[\]\)

Gets the selected gear Information

```csharp
public virtual GearGeometryInfo GetSelectedGearInfo(string strText, GearGeometryInfo[] arGeomInfo)
```

#### Parameters

`strText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The text

`arGeomInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)\[\]

The geometry information

#### Returns

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### InitChild\(int, string\[\], ConvertFactor\)

Initializes the child.

```csharp
public virtual void InitChild(int nNum, string[] arName, Unit.ConvertFactor factor)
```

#### Parameters

`nNum` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n number.

`arName` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Name of the ar.

`factor` Unit.ConvertFactor

The factor.

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### OnPostDeserializedImpl\(StreamingContext\)

OnPostDeserialized

```csharp
protected virtual void OnPostDeserializedImpl(StreamingContext context)
```

#### Parameters

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### PostBuildGear\(\)

post builder gear.

```csharp
protected virtual void PostBuildGear()
```

### ReadResultCore\(XmlDocument\)

Reads the result core.

```csharp
protected virtual void ReadResultCore(XmlDocument xmlDoc)
```

#### Parameters

`xmlDoc` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XML document.

### ReadResultForDatFile\(string\[\], int\)

Read result for dat file.

```csharp
protected virtual void ReadResultForDatFile(string[] arDatPath, int nIdx)
```

#### Parameters

`arDatPath` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The dat path array.

`nIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index.

### ReadResultWithKissSoftInterface\(uint, uint, uint, double, double, double\[\], double, GearData\[\]\)

Read result with KissSoft interface

```csharp
protected virtual void ReadResultWithKissSoftInterface(uint nNumInvolute, uint nNumTrochoid, uint nNumSlice, double dNormalModule, double dNormalPressureAngle, double[] ardCenterDistance, double dAxialCrossingAngle, KissSoftInterface.GearData[] arGearData)
```

#### Parameters

`nNumInvolute` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The number of Involute

`nNumTrochoid` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The number of trochoid

`nNumSlice` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The number of slice

`dNormalModule` [double](https://learn.microsoft.com/dotnet/api/system.double)

The normal module

`dNormalPressureAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The normal pressure angle

`ardCenterDistance` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The center distancte

`dAxialCrossingAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The axial crossing angle

`arGearData` [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[GearData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.GearData.md)\[\]

The gear data array

### SetColor\(string\)

Set color.

```csharp
public void SetColor(string color)
```

#### Parameters

`color` [string](https://learn.microsoft.com/dotnet/api/system.string)

The color.

### SetModified\(\)

Sets modified flag.

```csharp
protected override void SetModified()
```

### SetSimulationType\(CreateDATType\)

Set reference point.

```csharp
public void SetSimulationType(PropertyGearSetBase.CreateDATType type)
```

#### Parameters

`type` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md).[CreateDATType](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.CreateDATType.md)

The reference point.


