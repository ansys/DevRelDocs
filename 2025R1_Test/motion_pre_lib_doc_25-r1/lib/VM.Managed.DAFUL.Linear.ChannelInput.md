#  Class ChannelInput

Namespace: [VM.Managed.DAFUL.Linear](VM.Managed.DAFUL.Linear.md)  
Assembly: VMDLinear.dll  

This class is to represent to input channel.

```csharp
[CanNotOpenWithNewPreprocessor]
public class ChannelInput : Marker, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, INamed, INavigatorItem, IDesignSubEntity, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IInterface, ITemplateObject, IEntityRelation, IDraw, IDrawIcon, ITransform, IPoint, IOrientation, IDirectionContainer, IDesignParameter, IReferencable, ITransformable, IVisible, IDesignFrame, IArgument, IMarker, IMultiChangable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
DesignSubEntity ← 
DesignFrame ← 
Marker ← 
[ChannelInput](VM.Managed.DAFUL.Linear.ChannelInput.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
INamed, 
INavigatorItem, 
IDesignSubEntity, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
IInterface, 
ITemplateObject, 
IEntityRelation, 
IDraw, 
IDrawIcon, 
ITransform, 
IPoint, 
IOrientation, 
IDirectionContainer, 
IDesignParameter, 
IReferencable, 
ITransformable, 
IVisible, 
IDesignFrame, 
IArgument, 
IMarker, 
IMultiChangable

#### Inherited Members

Marker.Initialize\(Unit.ConvertFactor\), 
Marker.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
Marker.LinkRequestUpdating\(object, LinkEventArgs\), 
Marker.LinkRequestUpdate\(object, LinkEventArgs\), 
Marker.LinkRequestDestroy\(object, LinkEventArgs\), 
Marker.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Marker.GetModelNavigatorInformationImplCore\(XmlDocument, XmlElement, bool\), 
Marker.ParentConnectable, 
Marker.\_ParentConnectable, 
Marker.ReferenceType, 
Marker.ArgumentType, 
Marker.FrameIconName, 
DesignFrame.Initialize\(Unit.ConvertFactor\), 
DesignFrame.LinkRequestUpdate\(object, LinkEventArgs\), 
DesignFrame.GetDirection\(Coordinate\), 
DesignFrame.GetFullName\(\), 
DesignFrame.Draw\(Canvas\), 
DesignFrame.ReDraw\(\), 
DesignFrame.InstantiateImpl\(Reference, Canvas\), 
DesignFrame.BindInterfaceImpl\(TMatrix, TMatrix, IInterface\), 
DesignFrame.WriteTemplateImpl\(XmlWriter\), 
DesignFrame.ReadTemplateImpl\(XmlReader\), 
DesignFrame.Transformation, 
DesignFrame.Value, 
DesignFrame.X, 
DesignFrame.Y, 
DesignFrame.Z, 
DesignFrame.Orientation, 
DesignFrame.Position, 
DesignFrame.TransformationMatrix, 
DesignFrame.Hide, 
DesignFrame.FrameIconName, 
DesignFrame.Layer, 
DesignFrame.IsVisible, 
DesignSubEntity.m\_bSkipToUpdateSymmetric, 
DesignSubEntity.g\_dicUpdatedDesignSubEntity, 
DesignSubEntity.FixUp\(ObjectBase\), 
DesignSubEntity.CheckCircularReference\(\), 
DesignSubEntity.BindInterfaceImpl\(TMatrix, TMatrix, IInterface\), 
DesignSubEntity.IsInterface, 
SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
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

### <a id="VM_Managed_DAFUL_Linear_ChannelInput__ctor"></a> ChannelInput\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Linear.ChannelInput" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ChannelInput()
```

### <a id="VM_Managed_DAFUL_Linear_ChannelInput__ctor_System_String_"></a> ChannelInput\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Linear.ChannelInput" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ChannelInput(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

## Properties

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_Actuator"></a> Actuator

Gets or sets the actuator.

```csharp
public ObjectBase Actuator { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_FrameIconName"></a> FrameIconName

Gets the name of the frame icon.
In order to distinguish from Marker.

```csharp
protected override string FrameIconName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_Input"></a> Input

Gets or sets the input.

```csharp
public InputType Input { get; set; }
```

#### Property Value

 [InputType](VM.Managed.DAFUL.Linear.InputType.md)

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_InputMode"></a> InputMode

Gets or sets the input mode.
Use SetInputMode() when this instance sets for undo/redo

```csharp
public InputModeType InputMode { get; set; }
```

#### Property Value

 [InputModeType](VM.Managed.DAFUL.Linear.InputModeType.md)

## Methods

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Linear_ChannelInput_SetInputMode_VM_Managed_DAFUL_Linear_InputModeType_"></a> SetInputMode\(InputModeType\)

Set input mode.

```csharp
public void SetInputMode(InputModeType type)
```

#### Parameters

`type` [InputModeType](VM.Managed.DAFUL.Linear.InputModeType.md)

The input mode.

