#  Class VectorForceUserSubroutine

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFP.dll  

This class is to represent the vector force charactoristic properties of user-subroutine type.

```csharp
public sealed class VectorForceUserSubroutine : VectorForceFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[VectorForceFunction](VM.Managed.DAFUL.Force.VectorForceFunction.md) ← 
[VectorForceUserSubroutine](VM.Managed.DAFUL.Force.VectorForceUserSubroutine.md)

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

### <a id="VM_Managed_DAFUL_Force_VectorForceUserSubroutine__ctor"></a> VectorForceUserSubroutine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.VectorForceUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VectorForceUserSubroutine()
```

### <a id="VM_Managed_DAFUL_Force_VectorForceUserSubroutine__ctor_VM_Managed_DAFUL_Force_PropertyVector_"></a> VectorForceUserSubroutine\(PropertyVector\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.VectorForceUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VectorForceUserSubroutine(PropertyVector owner)
```

#### Parameters

`owner` [PropertyVector](VM.Managed.DAFUL.Force.PropertyVector.md)

The owner vector force property.

## Properties

### <a id="VM_Managed_DAFUL_Force_VectorForceUserSubroutine_Type"></a> Type

Gets the function type.

```csharp
public override VectorForceFunction.FunctionType Type { get; }
```

#### Property Value

 [VectorForceFunction](VM.Managed.DAFUL.Force.VectorForceFunction.md).[FunctionType](VM.Managed.DAFUL.Force.VectorForceFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Force_VectorForceUserSubroutine_UserSubroutine"></a> UserSubroutine

Gets or sets the user subroutine.

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 UserSubroutine

## Methods

### <a id="VM_Managed_DAFUL_Force_VectorForceUserSubroutine_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Force_VectorForceUserSubroutine_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

