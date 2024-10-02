#  Class ForceStandard

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFP.dll  

This class is to represent the force charactoristic properties of standard type.

```csharp
public sealed class ForceStandard : ForceFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ForceFunction](VM.Managed.DAFUL.Force.ForceFunction.md) ← 
[ForceStandard](VM.Managed.DAFUL.Force.ForceStandard.md)

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

[ForceFunction.WriteTemplate\(XmlWriter\)](VM.Managed.DAFUL.Force.ForceFunction.md\#VM\_Managed\_DAFUL\_Force\_ForceFunction\_WriteTemplate\_System\_Xml\_XmlWriter\_), 
[ForceFunction.ReadTemplate\(XmlReader\)](VM.Managed.DAFUL.Force.ForceFunction.md\#VM\_Managed\_DAFUL\_Force\_ForceFunction\_ReadTemplate\_System\_Xml\_XmlReader\_), 
[ForceFunction.IsUseApplyAction](VM.Managed.DAFUL.Force.ForceFunction.md\#VM\_Managed\_DAFUL\_Force\_ForceFunction\_IsUseApplyAction), 
[ForceFunction.Type](VM.Managed.DAFUL.Force.ForceFunction.md\#VM\_Managed\_DAFUL\_Force\_ForceFunction\_Type), 
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
LinkContainer.SetContainer\(IOwned, bool\), 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Managed_DAFUL_Force_ForceStandard__ctor"></a> ForceStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.ForceStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ForceStandard()
```

### <a id="VM_Managed_DAFUL_Force_ForceStandard__ctor_VM_Managed_DAFUL_Force_PropertyForce_"></a> ForceStandard\(PropertyForce\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.ForceStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ForceStandard(PropertyForce owner)
```

#### Parameters

`owner` PropertyForce

The owner force property.

## Properties

### <a id="VM_Managed_DAFUL_Force_ForceStandard_Function"></a> Function

Gets or sets the function.

```csharp
public Function Function { get; set; }
```

#### Property Value

 Function

### <a id="VM_Managed_DAFUL_Force_ForceStandard_Type"></a> Type

Gets the function type.

```csharp
public override ForceFunction.FunctionType Type { get; }
```

#### Property Value

 [ForceFunction](VM.Managed.DAFUL.Force.ForceFunction.md).[FunctionType](VM.Managed.DAFUL.Force.ForceFunction.FunctionType.md)

## Methods

### <a id="VM_Managed_DAFUL_Force_ForceStandard_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Force_ForceStandard_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

