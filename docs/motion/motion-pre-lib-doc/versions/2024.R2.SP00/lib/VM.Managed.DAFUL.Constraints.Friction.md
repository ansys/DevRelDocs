# Class Friction

Namespace: [VM.Managed.DAFUL.Constraints](VM.Managed.DAFUL.Constraints.md)  
Assembly: VMDCB.dll  

This base class is to represent the friction.

```csharp
public abstract class Friction : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Friction](VM.Managed.DAFUL.Constraints.Friction.md)

#### Derived

[FrictionCylindrical](VM.Managed.DAFUL.Constraints.FrictionCylindrical.md), 
[FrictionRevolute](VM.Managed.DAFUL.Constraints.FrictionRevolute.md), 
[FrictionTranslational](VM.Managed.DAFUL.Constraints.FrictionTranslational.md)

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

### Friction\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.Friction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Friction()
```

## Properties

### BendingMoment

Gets or sets a value indicating whether [bending moment].

```csharp
public bool BendingMoment { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DynamicsThreshold

Gets or sets the transition velocity coefficient.

```csharp
public ExpressionValueVariable DynamicsThreshold { get; set; }
```

#### Property Value

 ExpressionValueVariable

### Effect

Gets or sets the effect type.

```csharp
public Friction.EffectType Effect { get; set; }
```

#### Property Value

 [Friction](VM.Managed.DAFUL.Constraints.Friction.md).[EffectType](VM.Managed.DAFUL.Constraints.Friction.EffectType.md)

### IsUseFriction

Gets or sets a value indicating whether this instance is use friction.

```csharp
public bool IsUseFriction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaximumStictionDeformation

Gets or sets the maximum stiction deformation.

```csharp
public ExpressionValueVariable MaximumStictionDeformation { get; set; }
```

#### Property Value

 ExpressionValueVariable

### MuDynamic

Gets or sets the dynamic friction coefficient.

```csharp
public ExpressionValueVariable MuDynamic { get; set; }
```

#### Property Value

 ExpressionValueVariable

### MuStatic

Gets or sets the static friction coefficient.

```csharp
public ExpressionValueVariable MuStatic { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ReactionForce

Gets or sets a value indicating whether [reaction force].

```csharp
public bool ReactionForce { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StictionTransitionVelocity

Gets or sets the stiction transition velocity.

```csharp
public ExpressionValueVariable StictionTransitionVelocity { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### GetConnector\(\)

Get connector

```csharp
public IConnector GetConnector()
```

#### Returns

 IConnector

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public virtual void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public virtual void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.


