# Class ContactStandard

Namespace: [VM.Managed.DAFUL.Contact](VM.Managed.DAFUL.Contact.md)  
Assembly: VMDCt.dll  

This class is to represent the contact charactoristic properties of standard type.

```csharp
public sealed class ContactStandard : ContactFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReserved, ILinkOwner, ILinkUpdateOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ContactFunction](VM.Managed.DAFUL.Contact.ContactFunction.md) ← 
[ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md)

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
IReserved, 
ILinkOwner, 
ILinkUpdateOwner

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

### ContactStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactStandard()
```

### ContactStandard\(PropertyContact\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactStandard(PropertyContact objParent)
```

#### Parameters

`objParent` [PropertyContact](VM.Managed.DAFUL.Contact.PropertyContact.md)

Owner contact property.

## Fields

### \_\_a$\_a\_VM.Models.Pre.LinkAttribute

```csharp
protected LinkAttribute __a$_a_VM.Models.Pre.LinkAttribute
```

#### Field Value

 LinkAttribute

### \_\_a$\_a\_VM.Models.Pre.LinkUpdateAttribute

```csharp
protected LinkUpdateAttribute __a$_a_VM.Models.Pre.LinkUpdateAttribute
```

#### Field Value

 LinkUpdateAttribute

## Properties

### ActionPoissonsRatio

Gets or sets the poisson's ratio of action surface.

```csharp
public ExpressionValueVariable ActionPoissonsRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ActionYoungsModulus

Gets or sets the young's modulus of action surface.

```csharp
public ExpressionValueVariable ActionYoungsModulus { get; set; }
```

#### Property Value

 ExpressionValueVariable

### BasePoissonsRatio

Gets or sets the poisson's ratio of base surface.

```csharp
public ExpressionValueVariable BasePoissonsRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### BaseYoungsModulus

Gets or sets the young's modulus of base surface.

```csharp
public ExpressionValueVariable BaseYoungsModulus { get; set; }
```

#### Property Value

 ExpressionValueVariable

### BounceOffDampingFactor

Gets or sets the bounce off damping factor.

```csharp
public ExpressionValueVariable BounceOffDampingFactor { get; set; }
```

#### Property Value

 ExpressionValueVariable

### BoundaryPenetration

Gets or sets the boundary penetration.

```csharp
public ExpressionValueVariable BoundaryPenetration { get; set; }
```

#### Property Value

 ExpressionValueVariable

### CalculatedFromMaterial

Gets or sets a value indicating whether [Calculated from material].

```csharp
public bool CalculatedFromMaterial { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CalculationMethodOfContactArea

Gets or sets the calculation method of contact area.

```csharp
public ContactStandard.CalculationMethodType CalculationMethodOfContactArea { get; set; }
```

#### Property Value

 [ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md).[CalculationMethodType](VM.Managed.DAFUL.Contact.ContactStandard.CalculationMethodType.md)

### DampCoef

Gets or sets the damping coefficient.

```csharp
public ExpressionValueVariable DampCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DampCoefRatio

Gets or sets the damping coefficient ratio.

```csharp
public ExpressionValueVariable DampCoefRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DampingSpline

Gets or sets the damping spline.

```csharp
public Spline DampingSpline { get; set; }
```

#### Property Value

 Spline

### DampingType

Gets or sets the type of the damping.

```csharp
public ContactStandard.DampingCoefficientType DampingType { get; set; }
```

#### Property Value

 [ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md).[DampingCoefficientType](VM.Managed.DAFUL.Contact.ContactStandard.DampingCoefficientType.md)

### DynFriCoef

Gets or sets the dynamic friction coefficient

```csharp
public ExpressionValueVariable DynFriCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### DynThreshold

Gets or sets the dynamic threshold.

```csharp
public ExpressionValueVariable DynThreshold { get; set; }
```

#### Property Value

 ExpressionValueVariable

### FrictionSpline

Gets or sets the friction spline.

```csharp
public Spline FrictionSpline { get; set; }
```

#### Property Value

 Spline

### FrictionSplineInfo

Gets or sets the friction spline information.

```csharp
public FrictionSplineInfo[] FrictionSplineInfo { get; set; }
```

#### Property Value

 [FrictionSplineInfo](VM.Managed.DAFUL.Contact.FrictionSplineInfo.md)\[\]

### FrictionType

Gets or sets the type of the friction.

```csharp
public ContactStandard.InputType FrictionType { get; set; }
```

#### Property Value

 [ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md).[InputType](VM.Managed.DAFUL.Contact.ContactStandard.InputType.md)

### MaxSticDeform

Gets or sets the max stiction deformation.

```csharp
public ExpressionValueVariable MaxSticDeform { get; set; }
```

#### Property Value

 ExpressionValueVariable

### StaFriCoef

Gets or sets the static friction coefficient.

```csharp
public ExpressionValueVariable StaFriCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### SticVel

Gets or sets the stiction velocity.

```csharp
public ExpressionValueVariable SticVel { get; set; }
```

#### Property Value

 ExpressionValueVariable

### StiffCoef

Gets or sets the stiffness coefficient.

```csharp
public ExpressionValueVariable StiffCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### StiffOrder

Gets or sets the stiffness order.

```csharp
public ExpressionValueVariable StiffOrder { get; set; }
```

#### Property Value

 ExpressionValueVariable

### StiffPerContactArea

Gets or sets the stiffness per contact area.

```csharp
public ExpressionValueVariable StiffPerContactArea { get; set; }
```

#### Property Value

 ExpressionValueVariable

### StiffnessSpline

Gets or sets the stiffness spline.

```csharp
public Spline StiffnessSpline { get; set; }
```

#### Property Value

 Spline

### StiffnessType

Gets or sets the type of the siffness.

```csharp
public ContactStandard.StiffnessCoefficientType StiffnessType { get; set; }
```

#### Property Value

 [ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md).[StiffnessCoefficientType](VM.Managed.DAFUL.Contact.ContactStandard.StiffnessCoefficientType.md)

### ThicknessOfContactSurface

Gets or sets the thickness of contact surface.

```csharp
public ExpressionValueVariable ThicknessOfContactSurface { get; set; }
```

#### Property Value

 ExpressionValueVariable

### Type

Get function type of itself.

```csharp
public override ContactFunction.FunctionType Type { get; }
```

#### Property Value

 [ContactFunction](VM.Managed.DAFUL.Contact.ContactFunction.md).[FunctionType](VM.Managed.DAFUL.Contact.ContactFunction.FunctionType.md)

### UseBounceOffDampingFactor

Gets or sets a value indicating whether [use bounce off damping factor].

```csharp
public bool UseBounceOffDampingFactor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseStiction

Gets or sets a value indicating whether [use stiction].

```csharp
public bool UseStiction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetSortedFrictionSplineInfo\(\)

Gets sorted friction spline Information.

```csharp
public FrictionSplineInfo[] GetSortedFrictionSplineInfo()
```

#### Returns

 [FrictionSplineInfo](VM.Managed.DAFUL.Contact.FrictionSplineInfo.md)\[\]

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

### OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected override void OnLinkReserved(ILink link, object objNotifer, EventArgs args)
```

#### Parameters

`link` ILink

`objNotifer` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.


