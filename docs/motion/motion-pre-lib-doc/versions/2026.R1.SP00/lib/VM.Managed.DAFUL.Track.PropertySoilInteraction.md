# Class PropertySoilInteraction
<a id="VM_Managed_DAFUL_Track_PropertySoilInteraction"></a>

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This abstract class is to represent the property of soil interaction.

```csharp
public class PropertySoilInteraction : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
[PropertySoilInteraction](VM.Managed.DAFUL.Track.PropertySoilInteraction.md)

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

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction__ctor"></a> PropertySoilInteraction\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.PropertySoilInteraction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertySoilInteraction()
```

## Properties

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_DynamicSinkage"></a> DynamicSinkage

Gets or sets the Dynamic Sinkage.

```csharp
public DynamicSinkageDefinition DynamicSinkage { get; set; }
```

#### Property Value

 [DynamicSinkageDefinition](VM.Managed.DAFUL.Track.DynamicSinkageDefinition.md)

#### Exceptions

 Exception

Dynamic Sinkage is null.

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_NormalPressureFormulation"></a> NormalPressureFormulation

Gets or sets the Normal Pressure Formulation.

```csharp
public NormalPressureFormulationBase NormalPressureFormulation { get; set; }
```

#### Property Value

 [NormalPressureFormulationBase](VM.Managed.DAFUL.Track.NormalPressureFormulationBase.md)

#### Exceptions

 Exception

Normal Pressure Formulation is null.

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_ShearPressureFormulation"></a> ShearPressureFormulation

Gets or sets the Shear Pressure Formulation.

```csharp
public ShearPressureFormulationBase ShearPressureFormulation { get; set; }
```

#### Property Value

 [ShearPressureFormulationBase](VM.Managed.DAFUL.Track.ShearPressureFormulationBase.md)

#### Exceptions

 Exception

Shear Pressure Formulation is null.

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_TypeOfSoil"></a> TypeOfSoil

Gets or sets the soil type.

```csharp
public string TypeOfSoil { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_GenerateRDFFile_VM_Models_Pre_IDocument_System_String_"></a> GenerateRDFFile\(IDocument, string\)

Generate rdf file.

```csharp
public bool GenerateRDFFile(IDocument doc, string strFilePath)
```

#### Parameters

`doc` IDocument

The document.

`strFilePath` string

The file path.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_GenerateRDFFile_VM_Models_Pre_IDocument_VM_Models_Pre_IDocument_System_String_System_String_System_Collections_Generic_Dictionary_System_String_System_Collections_Generic_List_System_Double___VM_Managed_DAFUL_IContactableRigid3D_VM_Managed_DirectionBase_"></a> GenerateRDFFile\(IDocument, IDocument, string, string, Dictionary<string, List<double\>\>, IContactableRigid3D, DirectionBase\)

Generate rdf file.

```csharp
public static bool GenerateRDFFile(IDocument docCurrent, IDocument docSoil, string strFilePath, string strSoilType, Dictionary<string, List<double>> dicProperty, IContactableRigid3D contactable, DirectionBase dirVerticalDirection)
```

#### Parameters

`docCurrent` IDocument

The current document.

`docSoil` IDocument

The soil document.

`strFilePath` string

The file path.

`strSoilType` string

The soil type.

`dicProperty` Dictionary<string, List<double\>\>

The property information.

`contactable` IContactableRigid3D

The contactable entity.

`dirVerticalDirection` DirectionBase

The vertical direction.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_GetSoilTypesFromInteractionFile_System_Collections_Generic_List_System_String___"></a> GetSoilTypesFromInteractionFile\(ref List<string\>\)

Get soil types from interaction file.

```csharp
public static bool GetSoilTypesFromInteractionFile(ref List<string> lstSoilType)
```

#### Parameters

`lstSoilType` List<string\>

The solid types

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Track_PropertySoilInteraction_ReadInteractionFile_VM_Models_Pre_IDocument_System_String__System_Xml_XmlNode__System_Double__System_Double__System_Double__System_Double__"></a> ReadInteractionFile\(IDocument, ref string, ref XmlNode, ref double, ref double, ref double, ref double\)

Read interaction file

```csharp
public static bool ReadInteractionFile(IDocument doc, ref string strSoilType, ref XmlNode nodeSoilParameter, ref double dFactorPressure, ref double dFactorSlope, ref double dFactorLength, ref double dFactorForce)
```

#### Parameters

`doc` IDocument

The document

`strSoilType` string

The soil type

`nodeSoilParameter` XmlNode

The soil paramter node

`dFactorPressure` double

The pressure factor(F/L^2)

`dFactorSlope` double

The slope factor(F/L)

`dFactorLength` double

The length factor

`dFactorForce` double

The force factor

#### Returns

 bool

