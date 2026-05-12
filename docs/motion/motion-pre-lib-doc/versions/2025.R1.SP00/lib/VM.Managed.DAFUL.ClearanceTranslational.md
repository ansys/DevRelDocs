#  Class ClearanceTranslational

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDCB.dll  

This class is to represent the clearance revolute.

```csharp
public class ClearanceTranslational : Clearance, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, ILinkOwner, ILinkUpdateOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Clearance](VM.Managed.DAFUL.Clearance.md) ← 
[ClearanceTranslational](VM.Managed.DAFUL.ClearanceTranslational.md)

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
ILinkOwner, 
ILinkUpdateOwner

#### Inherited Members

[Clearance.\_\_a$\_a\_VM.Models.Pre.LinkAttribute](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_\_\_a\_\_a\_VM\_Models\_Pre\_LinkAttribute), 
[Clearance.\_\_a$\_a\_VM.Models.Pre.LinkUpdateAttribute](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_\_\_a\_\_a\_VM\_Models\_Pre\_LinkUpdateAttribute), 
[Clearance.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Clearance.WriteTemplate\(XmlWriter\)](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_WriteTemplate\_System\_Xml\_XmlWriter\_), 
[Clearance.ReadTemplate\(XmlReader\)](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_ReadTemplate\_System\_Xml\_XmlReader\_), 
[Clearance.UseClearance](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_UseClearance), 
[Clearance.StiffnessCoefficient](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_StiffnessCoefficient), 
[Clearance.ExponentOfPenetration](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_ExponentOfPenetration), 
[Clearance.MaxDampingCoefficient](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_MaxDampingCoefficient), 
[Clearance.UseDampingEffectInVoid](VM.Managed.DAFUL.Clearance.md\#VM\_Managed\_DAFUL\_Clearance\_UseDampingEffectInVoid), 
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

### <a id="VM_Managed_DAFUL_ClearanceTranslational__ctor"></a> ClearanceTranslational\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ClearanceTranslational" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ClearanceTranslational()
```

## Properties

### <a id="VM_Managed_DAFUL_ClearanceTranslational_XClearance"></a> XClearance

Gets or sets the radial clearance.

```csharp
public ExpressionValueVariable XClearance { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_ClearanceTranslational_YClearance"></a> YClearance

Gets or sets the axial clearance.

```csharp
public ExpressionValueVariable YClearance { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_ClearanceTranslational_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_ClearanceTranslational_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_ClearanceTranslational_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### <a id="VM_Managed_DAFUL_ClearanceTranslational_WriteTemplate_System_Xml_XmlWriter_System_String_"></a> WriteTemplate\(XmlWriter, string\)

```csharp
protected virtual void WriteTemplate(XmlWriter writer, string frictionName)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

`frictionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

