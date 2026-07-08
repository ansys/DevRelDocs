#  Class ContactStandard

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

### <a id="VM_Managed_DAFUL_Contact_ContactStandard__ctor"></a> ContactStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactStandard()
```

### <a id="VM_Managed_DAFUL_Contact_ContactStandard__ctor_VM_Managed_DAFUL_Contact_PropertyContact_"></a> ContactStandard\(PropertyContact\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Contact.ContactStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactStandard(PropertyContact objParent)
```

#### Parameters

`objParent` [PropertyContact](VM.Managed.DAFUL.Contact.PropertyContact.md)

Owner contact property.

## Fields

### <a id="VM_Managed_DAFUL_Contact_ContactStandard___a__a_VM_Models_Pre_LinkAttribute"></a> \_\_a$\_a\_VM.Models.Pre.LinkAttribute

```csharp
protected LinkAttribute __a$_a_VM.Models.Pre.LinkAttribute
```

#### Field Value

 LinkAttribute

### <a id="VM_Managed_DAFUL_Contact_ContactStandard___a__a_VM_Models_Pre_LinkUpdateAttribute"></a> \_\_a$\_a\_VM.Models.Pre.LinkUpdateAttribute

```csharp
protected LinkUpdateAttribute __a$_a_VM.Models.Pre.LinkUpdateAttribute
```

#### Field Value

 LinkUpdateAttribute

## Properties

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_ActionPoissonsRatio"></a> ActionPoissonsRatio

Gets or sets the poisson's ratio of action surface.

```csharp
public ExpressionValueVariable ActionPoissonsRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_ActionYoungsModulus"></a> ActionYoungsModulus

Gets or sets the young's modulus of action surface.

```csharp
public ExpressionValueVariable ActionYoungsModulus { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_BasePoissonsRatio"></a> BasePoissonsRatio

Gets or sets the poisson's ratio of base surface.

```csharp
public ExpressionValueVariable BasePoissonsRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_BaseYoungsModulus"></a> BaseYoungsModulus

Gets or sets the young's modulus of base surface.

```csharp
public ExpressionValueVariable BaseYoungsModulus { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_BounceOffDampingFactor"></a> BounceOffDampingFactor

Gets or sets the bounce off damping factor.

```csharp
public ExpressionValueVariable BounceOffDampingFactor { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_BoundaryPenetration"></a> BoundaryPenetration

Gets or sets the boundary penetration.

```csharp
public ExpressionValueVariable BoundaryPenetration { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_CalculatedFromMaterial"></a> CalculatedFromMaterial

Gets or sets a value indicating whether [Calculated from material].

```csharp
public bool CalculatedFromMaterial { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_CalculationMethodOfContactArea"></a> CalculationMethodOfContactArea

Gets or sets the calculation method of contact area.

```csharp
public ContactStandard.CalculationMethodType CalculationMethodOfContactArea { get; set; }
```

#### Property Value

 [ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md).[CalculationMethodType](VM.Managed.DAFUL.Contact.ContactStandard.CalculationMethodType.md)

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_DampCoef"></a> DampCoef

Gets or sets the damping coefficient.

```csharp
public ExpressionValueVariable DampCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_DampCoefRatio"></a> DampCoefRatio

Gets or sets the damping coefficient ratio.

```csharp
public ExpressionValueVariable DampCoefRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_DampingSpline"></a> DampingSpline

Gets or sets the damping spline.

```csharp
public Spline DampingSpline { get; set; }
```

#### Property Value

 Spline

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_DampingType"></a> DampingType

Gets or sets the type of the damping.

```csharp
public ContactStandard.DampingCoefficientType DampingType { get; set; }
```

#### Property Value

 [ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md).[DampingCoefficientType](VM.Managed.DAFUL.Contact.ContactStandard.DampingCoefficientType.md)

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_DynFriCoef"></a> DynFriCoef

Gets or sets the dynamic friction coefficient

```csharp
public ExpressionValueVariable DynFriCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_DynThreshold"></a> DynThreshold

Gets or sets the dynamic threshold.

```csharp
public ExpressionValueVariable DynThreshold { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_FrictionSpline"></a> FrictionSpline

Gets or sets the friction spline.

```csharp
public Spline FrictionSpline { get; set; }
```

#### Property Value

 Spline

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_FrictionSplineInfo"></a> FrictionSplineInfo

Gets or sets the friction spline information.

```csharp
public FrictionSplineInfo[] FrictionSplineInfo { get; set; }
```

#### Property Value

 [FrictionSplineInfo](VM.Managed.DAFUL.Contact.FrictionSplineInfo.md)\[\]

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_FrictionType"></a> FrictionType

Gets or sets the type of the friction.

```csharp
public ContactStandard.InputType FrictionType { get; set; }
```

#### Property Value

 [ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md).[InputType](VM.Managed.DAFUL.Contact.ContactStandard.InputType.md)

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_MaxSticDeform"></a> MaxSticDeform

Gets or sets the max stiction deformation.

```csharp
public ExpressionValueVariable MaxSticDeform { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_StaFriCoef"></a> StaFriCoef

Gets or sets the static friction coefficient.

```csharp
public ExpressionValueVariable StaFriCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_SticVel"></a> SticVel

Gets or sets the stiction velocity.

```csharp
public ExpressionValueVariable SticVel { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_StiffCoef"></a> StiffCoef

Gets or sets the stiffness coefficient.

```csharp
public ExpressionValueVariable StiffCoef { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_StiffOrder"></a> StiffOrder

Gets or sets the stiffness order.

```csharp
public ExpressionValueVariable StiffOrder { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_StiffPerContactArea"></a> StiffPerContactArea

Gets or sets the stiffness per contact area.

```csharp
public ExpressionValueVariable StiffPerContactArea { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_StiffnessSpline"></a> StiffnessSpline

Gets or sets the stiffness spline.

```csharp
public Spline StiffnessSpline { get; set; }
```

#### Property Value

 Spline

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_StiffnessType"></a> StiffnessType

Gets or sets the type of the siffness.

```csharp
public ContactStandard.StiffnessCoefficientType StiffnessType { get; set; }
```

#### Property Value

 [ContactStandard](VM.Managed.DAFUL.Contact.ContactStandard.md).[StiffnessCoefficientType](VM.Managed.DAFUL.Contact.ContactStandard.StiffnessCoefficientType.md)

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_ThicknessOfContactSurface"></a> ThicknessOfContactSurface

Gets or sets the thickness of contact surface.

```csharp
public ExpressionValueVariable ThicknessOfContactSurface { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_Type"></a> Type

Get function type of itself.

```csharp
public override ContactFunction.FunctionType Type { get; }
```

#### Property Value

 [ContactFunction](VM.Managed.DAFUL.Contact.ContactFunction.md).[FunctionType](VM.Managed.DAFUL.Contact.ContactFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_UseBounceOffDampingFactor"></a> UseBounceOffDampingFactor

Gets or sets a value indicating whether [use bounce off damping factor].

```csharp
public bool UseBounceOffDampingFactor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_UseStiction"></a> UseStiction

Gets or sets a value indicating whether [use stiction].

```csharp
public bool UseStiction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_GetSortedFrictionSplineInfo"></a> GetSortedFrictionSplineInfo\(\)

Gets sorted friction spline Information.

```csharp
public FrictionSplineInfo[] GetSortedFrictionSplineInfo()
```

#### Returns

 [FrictionSplineInfo](VM.Managed.DAFUL.Contact.FrictionSplineInfo.md)\[\]

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_OnLinkReserved_VM_Managed_ILink_System_Object_System_EventArgs_"></a> OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected override void OnLinkReserved(ILink link, object objNotifer, EventArgs args)
```

#### Parameters

`link` ILink

`objNotifer` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_ReadTemplate_System_Xml_XmlReader_"></a> ReadTemplate\(XmlReader\)

Reads the template.

```csharp
public override void ReadTemplate(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_DAFUL_Contact_ContactStandard_WriteTemplate_System_Xml_XmlWriter_"></a> WriteTemplate\(XmlWriter\)

Writes the template.

```csharp
public override void WriteTemplate(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

