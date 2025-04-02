#  Class ContactUserSubroutine

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent the contact charactoristic properties of user subroutine type.

```csharp
public sealed class ContactUserSubroutine : ContactFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ContactFunction](VM.Managed.DAFUL.Contact.ContactFunction.md) ← 
[ContactUserSubroutine](VM.Managed.DAFUL.Contact.ContactUserSubroutine.md)

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
IVerifiable, 
IReservable

#### Inherited Members

[ContactFunction.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Contact.ContactFunction.md\#VM\_Managed\_DAFUL\_Contact\_ContactFunction\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ContactFunction.WriteTemplate\(XmlWriter\)](VM.Managed.DAFUL.Contact.ContactFunction.md\#VM\_Managed\_DAFUL\_Contact\_ContactFunction\_WriteTemplate\_System\_Xml\_XmlWriter\_), 
[ContactFunction.ReadTemplate\(XmlReader\)](VM.Managed.DAFUL.Contact.ContactFunction.md\#VM\_Managed\_DAFUL\_Contact\_ContactFunction\_ReadTemplate\_System\_Xml\_XmlReader\_), 
[ContactFunction.Type](VM.Managed.DAFUL.Contact.ContactFunction.md\#VM\_Managed\_DAFUL\_Contact\_ContactFunction\_Type), 
[ContactFunction.BufferRangeFactor](VM.Managed.DAFUL.Contact.ContactFunction.md\#VM\_Managed\_DAFUL\_Contact\_ContactFunction\_BufferRangeFactor), 
[ContactFunction.MaxStepFactor](VM.Managed.DAFUL.Contact.ContactFunction.md\#VM\_Managed\_DAFUL\_Contact\_ContactFunction\_MaxStepFactor), 
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

### <a id="VM_Managed_DAFUL_Contact_ContactUserSubroutine__ctor"></a> ContactUserSubroutine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactUserSubroutine()
```

### <a id="VM_Managed_DAFUL_Contact_ContactUserSubroutine__ctor_VM_Managed_DAFUL_Contact_PropertyContact_"></a> ContactUserSubroutine\(PropertyContact\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactUserSubroutine(PropertyContact objParent)
```

#### Parameters

`objParent` [PropertyContact](VM.Managed.DAFUL.Contact.PropertyContact.md)

Owner contact property.

## Properties

### <a id="VM_Managed_DAFUL_Contact_ContactUserSubroutine_Type"></a> Type

Get function type of itself.

```csharp
public override ContactFunction.FunctionType Type { get; }
```

#### Property Value

 [ContactFunction](VM.Managed.DAFUL.Contact.ContactFunction.md).[FunctionType](VM.Managed.DAFUL.Contact.ContactFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Contact_ContactUserSubroutine_UserSubroutine"></a> UserSubroutine

Gets or sets the user subroutine.

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 UserSubroutine

## Methods

### <a id="VM_Managed_DAFUL_Contact_ContactUserSubroutine_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Contact_ContactUserSubroutine_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

