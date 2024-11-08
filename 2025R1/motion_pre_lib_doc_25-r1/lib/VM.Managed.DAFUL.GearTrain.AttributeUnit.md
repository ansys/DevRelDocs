#  Class AttributeUnit

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The attribute of unit

```csharp
public class AttributeUnit : AttributeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
[AttributeUnit](VM.Managed.DAFUL.GearTrain.AttributeUnit.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit__ctor"></a> AttributeUnit\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.AttributeUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeUnit()
```

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit__ctor_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> AttributeUnit\(double, double, double, double, double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.AttributeUnit" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeUnit(double dLengthFactor, double dMassFactor, double dTimeFactor, double dForceFactor, double dAngleFactor, double dTemperatureFactor, double dPowerFactor, double dWorkFactor)
```

#### Parameters

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor

`dMassFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass factor

`dTimeFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The time factor

`dForceFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The force factor

`dAngleFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The angle factor

`dTemperatureFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The temperature factor

`dPowerFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The power factor

`dWorkFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The work factor

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit_AngleFactor"></a> AngleFactor

Gets or sets the angle factor.

```csharp
public double AngleFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit_ForceFactor"></a> ForceFactor

Gets or sets the force factor.

```csharp
public double ForceFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit_LengthFactor"></a> LengthFactor

Gets or sets the length factor.

```csharp
public double LengthFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit_MassFactor"></a> MassFactor

Gets or sets the mass factor.

```csharp
public double MassFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit_PowerFactor"></a> PowerFactor

Gets or sets the power factor.

```csharp
public double PowerFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit_TemperatureFactor"></a> TemperatureFactor

Gets or sets the temperature factor.

```csharp
public double TemperatureFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit_TimeFactor"></a> TimeFactor

Gets or sets the time factor.

```csharp
public double TimeFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_AttributeUnit_WorkFactor"></a> WorkFactor

Gets or sets the work factor.

```csharp
public double WorkFactor { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

