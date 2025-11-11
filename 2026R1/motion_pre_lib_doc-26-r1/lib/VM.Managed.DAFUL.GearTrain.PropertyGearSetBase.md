# Class PropertyGearSetBase
<a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of GearSetBase

```csharp
public abstract class PropertyGearSetBase : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IPostDeserialized
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
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
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IPostDeserialized

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase__ctor"></a> PropertyGearSetBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyGearSetBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyGearSetBase()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_AdvancedGearGeometry"></a> AdvancedGearGeometry

Gets the advanced gear geometry state.

```csharp
public bool AdvancedGearGeometry { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_BasicInvoluteProperty"></a> BasicInvoluteProperty

Gets or sets the basic involute property.

```csharp
public BasicInvolute BasicInvoluteProperty { get; set; }
```

#### Property Value

 [BasicInvolute](VM.Managed.DAFUL.GearTrain.BasicInvolute.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_Color"></a> Color

Gets or sets the color.
Use SetColor() when this instance sets for undo/redo

```csharp
public string Color { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ContactAnalysisProperty"></a> ContactAnalysisProperty

Gets or sets the contact analysis property.

```csharp
public ContactAnalysis ContactAnalysisProperty { get; set; }
```

#### Property Value

 [ContactAnalysis](VM.Managed.DAFUL.GearTrain.ContactAnalysis.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_CreationMethod"></a> CreationMethod

Gets or sets the type of the creation method.

```csharp
public PropertyGearSetBase.CreationMethodType CreationMethod { get; set; }
```

#### Property Value

 [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md).[CreationMethodType](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.CreationMethodType.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_DrawingColor"></a> DrawingColor

Gets the color of the drawing.

```csharp
public Color DrawingColor { get; }
```

#### Property Value

 Color

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_GearPairs"></a> GearPairs

Gets or sets the gear pairs.

```csharp
public GearPair[] GearPairs { get; set; }
```

#### Property Value

 [GearPair](VM.Managed.DAFUL.GearTrain.GearPair.md)\[\]

#### Exceptions

 Exception

GearPair list is null.
or
GearPair list is null.
or
GearPair is null.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_GeometryInfos"></a> GeometryInfos

Gets or sets the geometry infos.

```csharp
public GearGeometryInfo[] GeometryInfos { get; set; }
```

#### Property Value

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)\[\]

#### Exceptions

 Exception

GeometryInfo list is null.
or
GeometryInfo list is null.
or
GeometryInfo is null.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_KissSoftInterfaceFilePath"></a> KissSoftInterfaceFilePath

Gets or sets the kiss soft interface file path

```csharp
public string KissSoftInterfaceFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_MaterialProperty"></a> MaterialProperty

Gets or sets the material property.

```csharp
public Material MaterialProperty { get; set; }
```

#### Property Value

 [Material](VM.Managed.DAFUL.GearTrain.Material.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ModificationProperty"></a> ModificationProperty

Gets or sets the modification property.

```csharp
public Modification ModificationProperty { get; set; }
```

#### Property Value

 [Modification](VM.Managed.DAFUL.GearTrain.Modification.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ModifiedParam"></a> ModifiedParam

Gets or sets the whether this instance's parameter is modified or not.

```csharp
public bool ModifiedParam { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_SimulationType"></a> SimulationType

Gets or sets the type of the simulation.
Use SetSimulationType() when this instance sets for undo/redo

```csharp
public PropertyGearSetBase.CreateDATType SimulationType { get; set; }
```

#### Property Value

 [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md).[CreateDATType](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.CreateDATType.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ToleranceProperty"></a> ToleranceProperty

Gets or sets the tolerance property.

```csharp
public Tolerance ToleranceProperty { get; set; }
```

#### Property Value

 [Tolerance](VM.Managed.DAFUL.GearTrain.Tolerance.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ToolProperty"></a> ToolProperty

Gets or sets the tool property.

```csharp
public Tool ToolProperty { get; set; }
```

#### Property Value

 [Tool](VM.Managed.DAFUL.GearTrain.Tool.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ToothStiffnessProperty"></a> ToothStiffnessProperty

Gets or sets the tooth stiffness property.

```csharp
public ToothStiffness ToothStiffnessProperty { get; set; }
```

#### Property Value

 [ToothStiffness](VM.Managed.DAFUL.GearTrain.ToothStiffness.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_UseKissSoftInterface"></a> UseKissSoftInterface

Gets or sets the kiss soft interface use flag

```csharp
public bool UseKissSoftInterface { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_WebProperty"></a> WebProperty

Gets or sets the web property.

```csharp
public Web WebProperty { get; set; }
```

#### Property Value

 [Web](VM.Managed.DAFUL.GearTrain.Web.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_AddAttributes"></a> AddAttributes\(\)

Add attributes

```csharp
protected void AddAttributes()
```

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_AddUnitAttribute_VM_Managed_Document_"></a> AddUnitAttribute\(Document\)

Add unit attribute

```csharp
public void AddUnitAttribute(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_BuildGear"></a> BuildGear\(\)

Builds the gear.

```csharp
public bool BuildGear()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_BuildGear_System_Boolean_"></a> BuildGear\(bool\)

Builds the gear.

```csharp
public virtual bool BuildGear(bool bCreate)
```

#### Parameters

`bCreate` bool

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_BuildGearCore_System_Boolean_System_String_System_String_System_String___"></a> BuildGearCore\(bool, string, string, string\[\]\)

Build gear core.

```csharp
protected void BuildGearCore(bool bCreate, string strInputPath, string strResultPath, string[] arDatPath)
```

#### Parameters

`bCreate` bool

create state.

`strInputPath` string

input path.

`strResultPath` string

result path.

`arDatPath` string\[\]

dat file path array.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_BuildGearWithKissSoftInterface_System_Boolean_VM_Managed_DAFUL_GearTrain_KissSoftInterface_OutputData_"></a> BuildGearWithKissSoftInterface\(bool, OutputData\)

Builds the gear with kiss soft interface.

```csharp
public bool BuildGearWithKissSoftInterface(bool bCreate, KissSoftInterface.OutputData outputData)
```

#### Parameters

`bCreate` bool

`outputData` [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[OutputData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.OutputData.md)

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_BuildGearWithKissSoftInterface_System_String_"></a> BuildGearWithKissSoftInterface\(string\)

Builds the gear with kiss soft interface.

```csharp
public bool BuildGearWithKissSoftInterface(string strFilePath)
```

#### Parameters

`strFilePath` string

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_BuildGearWithKissSoftInterface"></a> BuildGearWithKissSoftInterface\(\)

Builds the gear with kiss soft interface.

```csharp
public bool BuildGearWithKissSoftInterface()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_FindLocal_System_String_"></a> FindLocal\(string\)

Finds the local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name of the string.

#### Returns

 IObjectBase

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_FindWebBuilder_VM_Managed_DAFUL_GearTrain_CAD_IGearBuilder_"></a> FindWebBuilder\(IGearBuilder\)

Finds the web builder.

```csharp
public AddedWebBuilder FindWebBuilder(IGearBuilder geombuilder)
```

#### Parameters

`geombuilder` [IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)

The geombuilder.

#### Returns

 [AddedWebBuilder](VM.Managed.DAFUL.GearTrain.CAD.AddedWebBuilder.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_FindWebValue_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> FindWebValue\(GearGeometryInfo\)

Finds the web value.

```csharp
public WebPropertyValue FindWebValue(GearGeometryInfo info)
```

#### Parameters

`info` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The information.

#### Returns

 [WebPropertyValue](VM.Managed.DAFUL.GearTrain.WebPropertyValue.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_GetIndexForGeomInfo_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> GetIndexForGeomInfo\(GearGeometryInfo\)

Get index for gear geometry information

```csharp
public int GetIndexForGeomInfo(GearGeometryInfo gFindInfo)
```

#### Parameters

`gFindInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The finding information.

#### Returns

 int

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_GetSelectedGearInfo_System_String_VM_Managed_DAFUL_GearTrain_GearGeometryInfo___"></a> GetSelectedGearInfo\(string, GearGeometryInfo\[\]\)

Gets the selected gear Information

```csharp
public virtual GearGeometryInfo GetSelectedGearInfo(string strText, GearGeometryInfo[] arGeomInfo)
```

#### Parameters

`strText` string

The text

`arGeomInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)\[\]

The geometry information

#### Returns

 [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_InitChild_System_Int32_System_String___VM_Unit_ConvertFactor_"></a> InitChild\(int, string\[\], ConvertFactor\)

Initializes the child.

```csharp
public virtual void InitChild(int nNum, string[] arName, Unit.ConvertFactor factor)
```

#### Parameters

`nNum` int

The n number.

`arName` string\[\]

Name of the ar.

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_OnPostDeserializedImpl_System_Runtime_Serialization_StreamingContext_"></a> OnPostDeserializedImpl\(StreamingContext\)

OnPostDeserialized

```csharp
protected virtual void OnPostDeserializedImpl(StreamingContext context)
```

#### Parameters

`context` StreamingContext

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_PostBuildGear"></a> PostBuildGear\(\)

post builder gear.

```csharp
protected virtual void PostBuildGear()
```

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ReadResultCore_System_Xml_XmlDocument_"></a> ReadResultCore\(XmlDocument\)

Reads the result core.

```csharp
protected virtual void ReadResultCore(XmlDocument xmlDoc)
```

#### Parameters

`xmlDoc` XmlDocument

The XML document.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ReadResultForDatFile_System_String___System_Int32_"></a> ReadResultForDatFile\(string\[\], int\)

Read result for dat file.

```csharp
protected virtual void ReadResultForDatFile(string[] arDatPath, int nIdx)
```

#### Parameters

`arDatPath` string\[\]

The dat path array.

`nIdx` int

The index.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_ReadResultWithKissSoftInterface_System_UInt32_System_UInt32_System_UInt32_System_Double_System_Double_System_Double___System_Double_VM_Managed_DAFUL_GearTrain_KissSoftInterface_GearData___"></a> ReadResultWithKissSoftInterface\(uint, uint, uint, double, double, double\[\], double, GearData\[\]\)

Read result with KissSoft interface

```csharp
protected virtual void ReadResultWithKissSoftInterface(uint nNumInvolute, uint nNumTrochoid, uint nNumSlice, double dNormalModule, double dNormalPressureAngle, double[] ardCenterDistance, double dAxialCrossingAngle, KissSoftInterface.GearData[] arGearData)
```

#### Parameters

`nNumInvolute` uint

The number of Involute

`nNumTrochoid` uint

The number of trochoid

`nNumSlice` uint

The number of slice

`dNormalModule` double

The normal module

`dNormalPressureAngle` double

The normal pressure angle

`ardCenterDistance` double\[\]

The center distancte

`dAxialCrossingAngle` double

The axial crossing angle

`arGearData` [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[GearData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.GearData.md)\[\]

The gear data array

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_SetColor_System_String_"></a> SetColor\(string\)

Set color.

```csharp
public void SetColor(string color)
```

#### Parameters

`color` string

The color.

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_SetModified"></a> SetModified\(\)

Sets modified flag.

```csharp
protected override void SetModified()
```

### <a id="VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_SetSimulationType_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_CreateDATType_"></a> SetSimulationType\(CreateDATType\)

Set reference point.

```csharp
public void SetSimulationType(PropertyGearSetBase.CreateDATType type)
```

#### Parameters

`type` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md).[CreateDATType](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.CreateDATType.md)

The reference point.

