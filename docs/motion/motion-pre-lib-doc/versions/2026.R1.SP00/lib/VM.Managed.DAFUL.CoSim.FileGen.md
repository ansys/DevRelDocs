# Class FileGen
<a id="VM_Managed_DAFUL_CoSim_FileGen"></a>

Namespace: [VM.Managed.DAFUL.CoSim](VM.Managed.DAFUL.CoSim.md)  
Assembly: VMDCoSimCore.dll  

The file generation setting class

```csharp
public class FileGen : CoSimSettingsBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, INamed, IEnabled, INavigatorItem
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[CoSimBase](VM.Managed.DAFUL.CoSim.CoSimBase.md) ← 
[CoSimSettingsBase](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md) ← 
[FileGen](VM.Managed.DAFUL.CoSim.FileGen.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
INamed, 
IEnabled, 
INavigatorItem

#### Inherited Members

[CoSimSettingsBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimSettingsBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[CoSimSettingsBase.OnDeserialization\(object\)](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimSettingsBase\_OnDeserialization\_System\_Object\_), 
[CoSimSettingsBase.Use](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimSettingsBase\_Use), 
[CoSimSettingsBase.ExecutingProgramPath](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimSettingsBase\_ExecutingProgramPath), 
[CoSimSettingsBase.InterfaceProgramType](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimSettingsBase\_InterfaceProgramType), 
[CoSimSettingsBase.\_InterfaceTimeStep](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimSettingsBase\_\_InterfaceTimeStep), 
[CoSimSettingsBase.\_IOList](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimSettingsBase\_\_IOList), 
[CoSimBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.DAFUL.CoSim.CoSimBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimBase\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[CoSimBase.FixUp\(ObjectBase\)](VM.Managed.DAFUL.CoSim.CoSimBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimBase\_FixUp\_VM\_Managed\_ObjectBase\_), 
[CoSimBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](VM.Managed.DAFUL.CoSim.CoSimBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimBase\_SetOldNameWithNewEntity\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
[CoSimBase.FullName](VM.Managed.DAFUL.CoSim.CoSimBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimBase\_FullName), 
[CoSimBase.Name](VM.Managed.DAFUL.CoSim.CoSimBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimBase\_Name), 
[CoSimBase.NonSymmetricName](VM.Managed.DAFUL.CoSim.CoSimBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimBase\_NonSymmetricName), 
[CoSimBase.IsEnabled](VM.Managed.DAFUL.CoSim.CoSimBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimBase\_IsEnabled), 
[CoSimBase.Comment](VM.Managed.DAFUL.CoSim.CoSimBase.md\#VM\_Managed\_DAFUL\_CoSim\_CoSimBase\_Comment), 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
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

### <a id="VM_Managed_DAFUL_CoSim_FileGen__ctor"></a> FileGen\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FileGen()
```

### <a id="VM_Managed_DAFUL_CoSim_FileGen__ctor_System_String_"></a> FileGen\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FileGen(string strName)
```

#### Parameters

`strName` string

Name of the <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref> class.

## Properties

### <a id="VM_Managed_DAFUL_CoSim_FileGen_Description"></a> Description

Gets or sets the name of description.

```csharp
public string Description { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_CoSim_FileGen_FMIVersion"></a> FMIVersion

Gets or sets the name of the FMI version.

```csharp
public double FMIVersion { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_CoSim_FileGen_FilePath"></a> FilePath

Gets or sets the name of the exported file.

```csharp
public string FilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_CoSim_FileGen_MessageLevel"></a> MessageLevel

Gets or sets the level of the solver message during co-simulation.

```csharp
public MessageLevel MessageLevel { get; set; }
```

#### Property Value

 [MessageLevel](VM.Managed.DAFUL.CoSim.MessageLevel.md)

### <a id="VM_Managed_DAFUL_CoSim_FileGen_ScaleFactor"></a> ScaleFactor

Gets or sets the scale factor for Maximum step size

```csharp
public ExpressionValueVariable ScaleFactor { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

## Methods

### <a id="VM_Managed_DAFUL_CoSim_FileGen_Get_MessageLevel"></a> Get\_MessageLevel\(\)

```csharp
public int Get_MessageLevel()
```

#### Returns

 int

### <a id="VM_Managed_DAFUL_CoSim_FileGen_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_CoSim_FileGen_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

