#  Class CoSimSettingsBase

Namespace: [VM.Managed.DAFUL.CoSim](VM.Managed.DAFUL.CoSim.md)  
Assembly: VMDCoSimCore.dll  

Setting class for Co-simulation

```csharp
public abstract class CoSimSettingsBase : CoSimBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, INamed, IEnabled, INavigatorItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[CoSimBase](VM.Managed.DAFUL.CoSim.CoSimBase.md) ← 
[CoSimSettingsBase](VM.Managed.DAFUL.CoSim.CoSimSettingsBase.md)

#### Derived

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
IHistoryObjectSerializable, 
IAttributeContainer, 
INamed, 
IEnabled, 
INavigatorItem

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase__ctor"></a> CoSimSettingsBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.CoSimSettingsBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected CoSimSettingsBase()
```

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase__ctor_System_String_System_String_"></a> CoSimSettingsBase\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.CoSimSettingsBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected CoSimSettingsBase(string strProxyName, string strBuildInfo)
```

#### Parameters

`strProxyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the proxy.

`strBuildInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The build info.

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase__ctor_System_String_"></a> CoSimSettingsBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.CoSimSettingsBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected CoSimSettingsBase(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the setting.

## Properties

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase_ExecutingProgramPath"></a> ExecutingProgramPath

Gets or sets the execute program path.

```csharp
public string ExecutingProgramPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase_InterfaceProgramType"></a> InterfaceProgramType

Gets and sets the type of the interface program.

```csharp
public virtual InterfaceType InterfaceProgramType { get; set; }
```

#### Property Value

 [InterfaceType](VM.Managed.DAFUL.CoSim.InterfaceType.md)

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase_Use"></a> Use

Gets or sets a value indicating whether this instance is use.

```csharp
public bool Use { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase__IOList"></a> \_IOList

Gets or sets the I/O list.

```csharp
public CoSimIOList _IOList { get; set; }
```

#### Property Value

 [CoSimIOList](VM.Managed.DAFUL.CoSim.CoSimIOList.md)

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase__InterfaceTimeStep"></a> \_InterfaceTimeStep

Gets or sets the interface time step.

```csharp
public ExpressionValueVariable _InterfaceTimeStep { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_CoSim_CoSimSettingsBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

