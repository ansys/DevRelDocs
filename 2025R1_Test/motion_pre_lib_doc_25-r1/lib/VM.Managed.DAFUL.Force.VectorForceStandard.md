#  Class VectorForceStandard

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFP.dll  

This class is to represent the vector force charactoristic properties of standard type.

```csharp
public sealed class VectorForceStandard : VectorForceFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[VectorForceFunction](VM.Managed.DAFUL.Force.VectorForceFunction.md) ← 
[VectorForceStandard](VM.Managed.DAFUL.Force.VectorForceStandard.md)

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

[VectorForceFunction.WriteTemplate\(XmlWriter\)](VM.Managed.DAFUL.Force.VectorForceFunction.md\#VM\_Managed\_DAFUL\_Force\_VectorForceFunction\_WriteTemplate\_System\_Xml\_XmlWriter\_), 
[VectorForceFunction.ReadTemplate\(XmlReader\)](VM.Managed.DAFUL.Force.VectorForceFunction.md\#VM\_Managed\_DAFUL\_Force\_VectorForceFunction\_ReadTemplate\_System\_Xml\_XmlReader\_), 
[VectorForceFunction.\_ReferenceMarker](VM.Managed.DAFUL.Force.VectorForceFunction.md\#VM\_Managed\_DAFUL\_Force\_VectorForceFunction\_\_ReferenceMarker), 
[VectorForceFunction.ReferenceMarker](VM.Managed.DAFUL.Force.VectorForceFunction.md\#VM\_Managed\_DAFUL\_Force\_VectorForceFunction\_ReferenceMarker), 
[VectorForceFunction.IsUseRM](VM.Managed.DAFUL.Force.VectorForceFunction.md\#VM\_Managed\_DAFUL\_Force\_VectorForceFunction\_IsUseRM), 
[VectorForceFunction.Type](VM.Managed.DAFUL.Force.VectorForceFunction.md\#VM\_Managed\_DAFUL\_Force\_VectorForceFunction\_Type), 
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

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard__ctor"></a> VectorForceStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.VectorForceStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VectorForceStandard()
```

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard__ctor_VM_Managed_DAFUL_Force_PropertyVector_"></a> VectorForceStandard\(PropertyVector\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.VectorForceStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VectorForceStandard(PropertyVector owner)
```

#### Parameters

`owner` [PropertyVector](VM.Managed.DAFUL.Force.PropertyVector.md)

The owner vector force property.

## Properties

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_FunctionFX"></a> FunctionFX

Gets or sets the vector function FX.

```csharp
public VectorForceStandard.VectorFunction FunctionFX { get; set; }
```

#### Property Value

 [VectorForceStandard](VM.Managed.DAFUL.Force.VectorForceStandard.md).[VectorFunction](VM.Managed.DAFUL.Force.VectorForceStandard.VectorFunction.md)

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_FunctionFY"></a> FunctionFY

Gets or sets the vector function FY.

```csharp
public VectorForceStandard.VectorFunction FunctionFY { get; set; }
```

#### Property Value

 [VectorForceStandard](VM.Managed.DAFUL.Force.VectorForceStandard.md).[VectorFunction](VM.Managed.DAFUL.Force.VectorForceStandard.VectorFunction.md)

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_FunctionFZ"></a> FunctionFZ

Gets or sets the vector function FZ.

```csharp
public VectorForceStandard.VectorFunction FunctionFZ { get; set; }
```

#### Property Value

 [VectorForceStandard](VM.Managed.DAFUL.Force.VectorForceStandard.md).[VectorFunction](VM.Managed.DAFUL.Force.VectorForceStandard.VectorFunction.md)

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_FunctionTX"></a> FunctionTX

Gets or sets the vector function TX.

```csharp
public VectorForceStandard.VectorFunction FunctionTX { get; set; }
```

#### Property Value

 [VectorForceStandard](VM.Managed.DAFUL.Force.VectorForceStandard.md).[VectorFunction](VM.Managed.DAFUL.Force.VectorForceStandard.VectorFunction.md)

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_FunctionTY"></a> FunctionTY

Gets or sets the vector function TY.

```csharp
public VectorForceStandard.VectorFunction FunctionTY { get; set; }
```

#### Property Value

 [VectorForceStandard](VM.Managed.DAFUL.Force.VectorForceStandard.md).[VectorFunction](VM.Managed.DAFUL.Force.VectorForceStandard.VectorFunction.md)

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_FunctionTZ"></a> FunctionTZ

Gets or sets the vector function TZ.

```csharp
public VectorForceStandard.VectorFunction FunctionTZ { get; set; }
```

#### Property Value

 [VectorForceStandard](VM.Managed.DAFUL.Force.VectorForceStandard.md).[VectorFunction](VM.Managed.DAFUL.Force.VectorForceStandard.VectorFunction.md)

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_Type"></a> Type

Gets the function type.

```csharp
public override VectorForceFunction.FunctionType Type { get; }
```

#### Property Value

 [VectorForceFunction](VM.Managed.DAFUL.Force.VectorForceFunction.md).[FunctionType](VM.Managed.DAFUL.Force.VectorForceFunction.FunctionType.md)

## Methods

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Force_VectorForceStandard_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

