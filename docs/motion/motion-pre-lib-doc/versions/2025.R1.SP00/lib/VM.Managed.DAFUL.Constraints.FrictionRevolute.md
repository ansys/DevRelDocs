#  Class FrictionRevolute

Namespace: [VM.Managed.DAFUL.Constraints](VM.Managed.DAFUL.Constraints.md)  
Assembly: VMDCB.dll  

This class is to represent the friction that use for revolute.

```csharp
public class FrictionRevolute : Friction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Friction](VM.Managed.DAFUL.Constraints.Friction.md) ← 
[FrictionRevolute](VM.Managed.DAFUL.Constraints.FrictionRevolute.md)

#### Derived

[FrictionBall](VM.Managed.DAFUL.Constraints.FrictionBall.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

[Friction.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Friction.WriteTemplate\(XmlWriter\)](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_WriteTemplate\_System\_Xml\_XmlWriter\_), 
[Friction.ReadTemplate\(XmlReader\)](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_ReadTemplate\_System\_Xml\_XmlReader\_), 
[Friction.GetConnector\(\)](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_GetConnector), 
[Friction.OnDeserialization\(object\)](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_OnDeserialization\_System\_Object\_), 
[Friction.MuStatic](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_MuStatic), 
[Friction.MuDynamic](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_MuDynamic), 
[Friction.StictionTransitionVelocity](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_StictionTransitionVelocity), 
[Friction.DynamicsThreshold](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_DynamicsThreshold), 
[Friction.MaximumStictionDeformation](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_MaximumStictionDeformation), 
[Friction.Effect](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_Effect), 
[Friction.ReactionForce](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_ReactionForce), 
[Friction.BendingMoment](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_BendingMoment), 
[Friction.IsUseFriction](VM.Managed.DAFUL.Constraints.Friction.md\#VM\_Managed\_DAFUL\_Constraints\_Friction\_IsUseFriction), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute__ctor"></a> FrictionRevolute\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.FrictionRevolute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FrictionRevolute()
```

## Properties

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute_BendingReactionArm"></a> BendingReactionArm

Gets or sets the bending reaction arm.

```csharp
public ExpressionValueVariable BendingReactionArm { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute_FrictionArm"></a> FrictionArm

Gets or sets the friction arm.

```csharp
public ExpressionValueVariable FrictionArm { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute_PinRadius"></a> PinRadius

Gets or sets the pin radius.

```csharp
public ExpressionValueVariable PinRadius { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute_PreTorque"></a> PreTorque

Gets or sets the pre torque.

```csharp
public ExpressionValueVariable PreTorque { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### <a id="VM_Managed_DAFUL_Constraints_FrictionRevolute_WriteTemplate_System_Xml_XmlWriter_System_String_"></a> WriteTemplate\(XmlWriter, string\)

```csharp
protected virtual void WriteTemplate(XmlWriter writer, string frictionName)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

`frictionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

