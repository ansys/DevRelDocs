# Class AttributeMassProperty
<a id="VM_Managed_DAFUL_AttributeMassProperty"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the attribute for mass property.

```csharp
public class AttributeMassProperty : AttributeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
AttributeBase ← 
[AttributeMassProperty](VM.Managed.DAFUL.AttributeMassProperty.md)

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

AttributeBase.OnDeserializationAttribute\(\), 
AttributeBase.LinkRequestUpdate\(object, LinkEventArgs\), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_AttributeMassProperty__ctor"></a> AttributeMassProperty\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AttributeMassProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMassProperty()
```

### <a id="VM_Managed_DAFUL_AttributeMassProperty__ctor_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_VM_Managed_Vector_"></a> AttributeMassProperty\(double, double, double, double, double, double, double, Vector\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AttributeMassProperty" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeMassProperty(double dMass, double dIxx, double dIyy, double dIzz, double dIxy, double dIxz, double dIyz, Vector vecMassCenter)
```

#### Parameters

`dMass` double

The mass.

`dIxx` double

The ixx of moment of inertia.

`dIyy` double

The iyy of moment of inertia.

`dIzz` double

The izz of moment of inertia.

`dIxy` double

The ixy of moment of inertia.

`dIxz` double

The ixz of moment of inertia.

`dIyz` double

The iyz of moment of inertia.

`vecMassCenter` Vector

The mass center.

## Properties

### <a id="VM_Managed_DAFUL_AttributeMassProperty_Ixx"></a> Ixx

Gets or sets the ixx of moment of inertia.

```csharp
public double Ixx { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_AttributeMassProperty_Ixy"></a> Ixy

Gets or sets the ixy of moment of inertia.

```csharp
public double Ixy { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_AttributeMassProperty_Ixz"></a> Ixz

Gets or sets the ixz of moment of inertia.

```csharp
public double Ixz { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_AttributeMassProperty_Iyy"></a> Iyy

Gets or sets the iyy of moment of inertia.

```csharp
public double Iyy { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_AttributeMassProperty_Iyz"></a> Iyz

Gets or sets the iyz of moment of inertia.

```csharp
public double Iyz { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_AttributeMassProperty_Izz"></a> Izz

Gets or sets the izz of moment of inertia.

```csharp
public double Izz { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_AttributeMassProperty_Mass"></a> Mass

Gets or sets the mass.

```csharp
public double Mass { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_AttributeMassProperty_MassCenter"></a> MassCenter

Gets or sets the mass center.

```csharp
public Vector MassCenter { get; set; }
```

#### Property Value

 Vector

