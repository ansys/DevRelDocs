# Class ForceUserSubroutine
<a id="VM_Managed_DAFUL_Force_ForceUserSubroutine"></a>

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFP.dll  

This class is to represent the force charactoristic properties of user-subroutine type.

```csharp
public sealed class ForceUserSubroutine : ForceFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[ForceFunction](VM.Managed.DAFUL.Force.ForceFunction.md) ← 
[ForceUserSubroutine](VM.Managed.DAFUL.Force.ForceUserSubroutine.md)

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

### <a id="VM_Managed_DAFUL_Force_ForceUserSubroutine__ctor"></a> ForceUserSubroutine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.ForceUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ForceUserSubroutine()
```

### <a id="VM_Managed_DAFUL_Force_ForceUserSubroutine__ctor_VM_Managed_DAFUL_Force_PropertyForce_"></a> ForceUserSubroutine\(PropertyForce\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.ForceUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ForceUserSubroutine(PropertyForce owner)
```

#### Parameters

`owner` [PropertyForce](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFB/Force.cs)

The owner force property.

## Properties

### <a id="VM_Managed_DAFUL_Force_ForceUserSubroutine_Type"></a> Type

Gets the function type.

```csharp
public override ForceFunction.FunctionType Type { get; }
```

#### Property Value

 [ForceFunction](VM.Managed.DAFUL.Force.ForceFunction.md).[FunctionType](VM.Managed.DAFUL.Force.ForceFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Force_ForceUserSubroutine_UserSubroutine"></a> UserSubroutine

Gets or sets the user subroutine.

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

## Methods

### <a id="VM_Managed_DAFUL_Force_ForceUserSubroutine_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The reader.

### <a id="VM_Managed_DAFUL_Force_ForceUserSubroutine_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

