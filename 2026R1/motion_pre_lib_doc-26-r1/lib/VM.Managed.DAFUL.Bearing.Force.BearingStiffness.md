# Class BearingStiffness
<a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness"></a>

Namespace: [VM.Managed.DAFUL.Bearing.Force](VM.Managed.DAFUL.Bearing.Force.md)  
Assembly: VMDBearing.dll  

This class is to represent the Bearing Stiffness

```csharp
public class BearingStiffness : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[BearingStiffness](VM.Managed.DAFUL.Bearing.Force.BearingStiffness.md)

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

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness__ctor"></a> BearingStiffness\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingStiffness()
```

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness__ctor_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> BearingStiffness\(double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingStiffness(double dDXFX, double dDYFX, double dDZFX, double dRXFX, double dRYFX, double dDXFY, double dDYFY, double dDZFY, double dRXFY, double dRYFY, double dDXFZ, double dDYFZ, double dDZFZ, double dRXFZ, double dRYFZ, double dDXMX, double dDYMX, double dDZMX, double dRXMX, double dRYMX, double dDXMY, double dDYMY, double dDZMY, double dRXMY, double dRYMY)
```

#### Parameters

`dDXFX` double

The stiffness value of dx-fx.

`dDYFX` double

The stiffness value of dy-fx.

`dDZFX` double

The stiffness value of dz-fx.

`dRXFX` double

The stiffness value of rx-fx.

`dRYFX` double

The stiffness value of ry-fx.

`dDXFY` double

The stiffness value of dx-fy.

`dDYFY` double

The stiffness value of dy-fy.

`dDZFY` double

The stiffness value of dz-fy.

`dRXFY` double

The stiffness value of rx-fy.

`dRYFY` double

The stiffness value of ry-fy.

`dDXFZ` double

The stiffness value of dx-fz.

`dDYFZ` double

The stiffness value of dy-fz.

`dDZFZ` double

The stiffness value of dz-fz.

`dRXFZ` double

The stiffness value of rx-fz.

`dRYFZ` double

The stiffness value of ry-fz.

`dDXMX` double

The stiffness value of dx-mx.

`dDYMX` double

The stiffness value of dy-mx.

`dDZMX` double

The stiffness value of dz-mx.

`dRXMX` double

The stiffness value of rx-mx.

`dRYMX` double

The stiffness value of ry-mx.

`dDXMY` double

The stiffness value of dx-my.

`dDYMY` double

The stiffness value of dy-my.

`dDZMY` double

The stiffness value of dz-my.

`dRXMY` double

The stiffness value of rx-my.

`dRYMY` double

The stiffness value of ry-my.

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_"></a> BearingStiffness\(Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Bearing.Force.BearingStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingStiffness(Variable varDXFX, Variable varDYFX, Variable varDZFX, Variable varRXFX, Variable varRYFX, Variable varDXFY, Variable varDYFY, Variable varDZFY, Variable varRXFY, Variable varRYFY, Variable varDXFZ, Variable varDYFZ, Variable varDZFZ, Variable varRXFZ, Variable varRYFZ, Variable varDXMX, Variable varDYMX, Variable varDZMX, Variable varRXMX, Variable varRYMX, Variable varDXMY, Variable varDYMY, Variable varDZMY, Variable varRXMY, Variable varRYMY)
```

#### Parameters

`varDXFX` Variable

The stiffness value of dx-fx.

`varDYFX` Variable

The stiffness value of dy-fx.

`varDZFX` Variable

The stiffness value of dz-fx.

`varRXFX` Variable

The stiffness value of rx-fx.

`varRYFX` Variable

The stiffness value of ry-fx.

`varDXFY` Variable

The stiffness value of dx-fy.

`varDYFY` Variable

The stiffness value of dy-fy.

`varDZFY` Variable

The stiffness value of dz-fy.

`varRXFY` Variable

The stiffness value of rx-fy.

`varRYFY` Variable

The stiffness value of ry-fy.

`varDXFZ` Variable

The stiffness value of dx-fz.

`varDYFZ` Variable

The stiffness value of dy-fz.

`varDZFZ` Variable

The stiffness value of dz-fz.

`varRXFZ` Variable

The stiffness value of rx-fz.

`varRYFZ` Variable

The stiffness value of ry-fz.

`varDXMX` Variable

The stiffness value of dx-mx.

`varDYMX` Variable

The stiffness value of dy-mx.

`varDZMX` Variable

The stiffness value of dz-mx.

`varRXMX` Variable

The stiffness value of rx-mx.

`varRYMX` Variable

The stiffness value of ry-mx.

`varDXMY` Variable

The stiffness value of dx-my.

`varDYMY` Variable

The stiffness value of dy-my.

`varDZMY` Variable

The stiffness value of dz-my.

`varRXMY` Variable

The stiffness value of rx-my.

`varRYMY` Variable

The stiffness value of ry-my.

## Properties

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DXFX"></a> DXFX

Gets or sets the stiffness value of dx-fx.

```csharp
public ExpressionValueVariable DXFX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DXFY"></a> DXFY

Gets or sets the stiffness value of dx-fy.

```csharp
public ExpressionValueVariable DXFY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DXFZ"></a> DXFZ

Gets or sets the stiffness value of dx-fz.

```csharp
public ExpressionValueVariable DXFZ { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DXMX"></a> DXMX

Gets or sets the stiffness value of dx-mx.

```csharp
public ExpressionValueVariable DXMX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DXMY"></a> DXMY

Gets or sets the stiffness value of dx-my.

```csharp
public ExpressionValueVariable DXMY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DYFX"></a> DYFX

Gets or sets the stiffness value of dy-fx.

```csharp
public ExpressionValueVariable DYFX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DYFY"></a> DYFY

Gets or sets the stiffness value of dy-fy.

```csharp
public ExpressionValueVariable DYFY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DYFZ"></a> DYFZ

Gets or sets the stiffness value of dy-fz.

```csharp
public ExpressionValueVariable DYFZ { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DYMX"></a> DYMX

Gets or sets the stiffness value of dy-mx.

```csharp
public ExpressionValueVariable DYMX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DYMY"></a> DYMY

Gets or sets the stiffness value of dy-my.

```csharp
public ExpressionValueVariable DYMY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DZFX"></a> DZFX

Gets or sets the stiffness value of dz-fx.

```csharp
public ExpressionValueVariable DZFX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DZFY"></a> DZFY

Gets or sets the stiffness value of dz-fy.

```csharp
public ExpressionValueVariable DZFY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DZFZ"></a> DZFZ

Gets or sets the stiffness value of dz-fz.

```csharp
public ExpressionValueVariable DZFZ { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DZMX"></a> DZMX

Gets or sets the stiffness value of dz-mx.

```csharp
public ExpressionValueVariable DZMX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_DZMY"></a> DZMY

Gets or sets the stiffness value of dz-my.

```csharp
public ExpressionValueVariable DZMY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RXFX"></a> RXFX

Gets or sets the stiffness value of rx-fx.

```csharp
public ExpressionValueVariable RXFX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RXFY"></a> RXFY

Gets or sets the stiffness value of rx-fy.

```csharp
public ExpressionValueVariable RXFY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RXFZ"></a> RXFZ

Gets or sets the stiffness value of rx-fz.

```csharp
public ExpressionValueVariable RXFZ { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RXMX"></a> RXMX

Gets or sets the stiffness value of rx-mx.

```csharp
public ExpressionValueVariable RXMX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RXMY"></a> RXMY

Gets or sets the stiffness value of rx-my.

```csharp
public ExpressionValueVariable RXMY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RYFX"></a> RYFX

Gets or sets the stiffness value of ry-fx.

```csharp
public ExpressionValueVariable RYFX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RYFY"></a> RYFY

Gets or sets the stiffness value of ry-fy.

```csharp
public ExpressionValueVariable RYFY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RYFZ"></a> RYFZ

Gets or sets the stiffness value of ry-fz.

```csharp
public ExpressionValueVariable RYFZ { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RYMX"></a> RYMX

Gets or sets the stiffness value of ry-mx.

```csharp
public ExpressionValueVariable RYMX { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_RYMY"></a> RYMY

Gets or sets the stiffness value of ry-my.

```csharp
public ExpressionValueVariable RYMY { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_Torque"></a> Torque

Gets or sets the torque value.

```csharp
public ExpressionValueVariable Torque { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

## Methods

### <a id="VM_Managed_DAFUL_Bearing_Force_BearingStiffness_SetDefaultValue"></a> SetDefaultValue\(\)

Set default value

```csharp
public void SetDefaultValue()
```

