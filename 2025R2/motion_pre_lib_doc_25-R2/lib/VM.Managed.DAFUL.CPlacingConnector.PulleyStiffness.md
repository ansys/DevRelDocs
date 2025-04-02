#  Class PulleyStiffness

Namespace: [VM.Managed.DAFUL.CPlacingConnector](VM.Managed.DAFUL.CPlacingConnector.md)  
Assembly: VMDCPlacingConnector.dll  

This class is to represent the attribute for pulley stiffness.

```csharp
public class PulleyStiffness : ComponentStiffness, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ComponentStiffness](VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness.md) ← 
[PulleyStiffness](VM.Managed.DAFUL.CPlacingConnector.PulleyStiffness.md)

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

[ComponentStiffness.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness.md\#VM\_Managed\_DAFUL\_CPlacingConnector\_ComponentStiffness\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ComponentStiffness.Name](VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness.md\#VM\_Managed\_DAFUL\_CPlacingConnector\_ComponentStiffness\_Name), 
[ComponentStiffness.Calculated](VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness.md\#VM\_Managed\_DAFUL\_CPlacingConnector\_ComponentStiffness\_Calculated), 
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

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyStiffness__ctor"></a> PulleyStiffness\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.PulleyStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PulleyStiffness()
```

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyStiffness__ctor_System_String_"></a> PulleyStiffness\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.PulleyStiffness" data-throw-if-not-resolved="false"></xref> class.
<param name="strName">The name.</param>

```csharp
public PulleyStiffness(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyStiffness_RadialDeformationRatio"></a> RadialDeformationRatio

Gets or sets the radial deformation ratio.

```csharp
public Spline RadialDeformationRatio { get; set; }
```

#### Property Value

 Spline

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The radial deformation ratio is null.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyStiffness_Stiffness"></a> Stiffness

Gets or sets the stiffness.

```csharp
public Spline Stiffness { get; set; }
```

#### Property Value

 Spline

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The stiffness is null.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyStiffness_TangentialDeformationRatio"></a> TangentialDeformationRatio

Gets or sets the tangential deformation ratio.

```csharp
public Spline[] TangentialDeformationRatio { get; set; }
```

#### Property Value

 Spline\[\]

## Methods

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyStiffness_GetPulley_VM_Managed_Document_"></a> GetPulley\(Document\)

Gets pulley

```csharp
public Pulley GetPulley(Document document)
```

#### Parameters

`document` Document

The document

#### Returns

 [Pulley](VM.Managed.DAFUL.CPlacingConnector.Pulley.md)

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyStiffness_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PulleyStiffness_TangentialStiffnessText"></a> TangentialStiffnessText\(\)

Gets the tangential stiffness text

```csharp
public string TangentialStiffnessText()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

