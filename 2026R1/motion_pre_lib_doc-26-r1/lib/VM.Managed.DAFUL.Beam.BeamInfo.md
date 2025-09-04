#  Class BeamInfo

Namespace: [VM.Managed.DAFUL.Beam](VM.Managed.DAFUL.Beam.md)  
Assembly: VMDBeamGroup.dll  

Beam Information Class
Beam Group have several beam information classes

```csharp
public class BeamInfo : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[BeamInfo](VM.Managed.DAFUL.Beam.BeamInfo.md)

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

### <a id="VM_Managed_DAFUL_Beam_BeamInfo__ctor"></a> BeamInfo\(\)

Constructor of BeamInfo Class

```csharp
public BeamInfo()
```

## Fields

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_m_CrossSectionType"></a> m\_CrossSectionType

Cross section type of beam information

```csharp
protected CrossSectionType m_CrossSectionType
```

#### Field Value

 CrossSectionType

## Properties

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_BeamElements"></a> BeamElements

Container of beam elements

```csharp
public BeamElement[] BeamElements { get; set; }
```

#### Property Value

 [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_Color"></a> Color

Gets or sets the color.

```csharp
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_CrossSectionType"></a> CrossSectionType

Cross section type of beam information

```csharp
public CrossSectionType CrossSectionType { get; set; }
```

#### Property Value

 CrossSectionType

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_DampingRatio"></a> DampingRatio

Damping ratio of material

```csharp
public double DampingRatio { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_DefaultStraightBodyPoints"></a> DefaultStraightBodyPoints

Get containers of points of bodies

```csharp
public List<Vector> DefaultStraightBodyPoints { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_Density"></a> Density

Density of material

```csharp
public double Density { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_EndPoint"></a> EndPoint

End point of beam information

```csharp
public PointBase EndPoint { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_EndPointVector"></a> EndPointVector

End point of beam information using vector class

```csharp
public VectorBase EndPointVector { get; set; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_GeomInfoArray"></a> GeomInfoArray

Gets or sets the geom info array.

```csharp
public double[] GeomInfoArray { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_GeomInfos"></a> GeomInfos

Gets or sets the geom infos.

```csharp
public Variable[] GeomInfos { get; set; }
```

#### Property Value

 Variable\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_HtmlColor"></a> HtmlColor

Gets or sets the color of the HTML.

```csharp
public string HtmlColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_IsFirstBeamInfo"></a> IsFirstBeamInfo

Whether the beam information is first among beam informations.

```csharp
public bool IsFirstBeamInfo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_IsLastBeamInfo"></a> IsLastBeamInfo

Whether the beam information is last among beam informations.

```csharp
public bool IsLastBeamInfo { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_Material"></a> Material

Matrial object of beam information to use

```csharp
public IMaterial Material { get; set; }
```

#### Property Value

 IMaterial

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_MaterialISO"></a> MaterialISO

Matrial object casted by ISO type of beam information

```csharp
public ISO MaterialISO { get; }
```

#### Property Value

 ISO

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_NumOfElements"></a> NumOfElements

The number of element of beam information

```csharp
public uint NumOfElements { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_PoissonRatio"></a> PoissonRatio

Poisson ratio of material

```csharp
public double PoissonRatio { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_ShearModulus"></a> ShearModulus

Shear's modulus of material

```csharp
public double ShearModulus { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_StartPoint"></a> StartPoint

Start point of beam information

```csharp
public PointBase StartPoint { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_StartPointVector"></a> StartPointVector

Start point of beam information using vector class

```csharp
public VectorBase StartPointVector { get; set; }
```

#### Property Value

 VectorBase

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_UseMiddleElementReferenceFrame"></a> UseMiddleElementReferenceFrame

Use middle element reference frame

```csharp
public bool UseMiddleElementReferenceFrame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_YDirection"></a> YDirection

Normal direction of beam cross geometry

```csharp
public DirectionBase YDirection { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_YDirectionArray"></a> YDirectionArray

Normal direction of beam cross geometry using double array

```csharp
public double[] YDirectionArray { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_YoungsModulus"></a> YoungsModulus

Young's modulus of material

```csharp
public double YoungsModulus { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamInfo__Material"></a> \_Material

Matrial object of beam information to save

```csharp
public Linker<IMaterial> _Material { get; set; }
```

#### Property Value

 Linker<IMaterial\>

## Methods

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_AddBeamElement_VM_Managed_DAFUL_Beam_BeamElement_"></a> AddBeamElement\(BeamElement\)

Add beam element

```csharp
public void AddBeamElement(BeamElement beamEle)
```

#### Parameters

`beamEle` [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

Beam element to add

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_Draw_VM_CAD_Kernel_Render_Canvas__"></a> Draw\(ref Canvas\)

Draw Beam information geometry

```csharp
public void Draw(ref Canvas canvas)
```

#### Parameters

`canvas` Canvas

Canvas to draw beam geometry

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_GetFirstBeamElement"></a> GetFirstBeamElement\(\)

Get first beam element among all beam elements

```csharp
public BeamElement GetFirstBeamElement()
```

#### Returns

 [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

First beam element

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_GetLastBeamElement"></a> GetLastBeamElement\(\)

Get last beam element among all beam elements

```csharp
public BeamElement GetLastBeamElement()
```

#### Returns

 [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

Last beam element

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_GetNextBeamElement_VM_Managed_DAFUL_Beam_BeamElement_"></a> GetNextBeamElement\(BeamElement\)

Get next beam element

```csharp
public BeamElement GetNextBeamElement(BeamElement beamEle)
```

#### Parameters

`beamEle` [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

Current beam element

#### Returns

 [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

Next beam element

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_GetPrevBeamElement_VM_Managed_DAFUL_Beam_BeamElement_"></a> GetPrevBeamElement\(BeamElement\)

Get previous beam element

```csharp
public BeamElement GetPrevBeamElement(BeamElement beamEle)
```

#### Parameters

`beamEle` [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

Current beam element

#### Returns

 [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

Previous beam element

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_IsEndBeamElement_VM_Managed_DAFUL_Beam_BeamElement_"></a> IsEndBeamElement\(BeamElement\)

Whether ending beam element among current beam information

```csharp
public bool IsEndBeamElement(BeamElement beamEle)
```

#### Parameters

`beamEle` [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

Currnet beam element

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

It's true or false

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_IsEndSolidBody_VM_Managed_DAFUL_SolidBody_"></a> IsEndSolidBody\(SolidBody\)

Whether ending solid body among current beam information

```csharp
public bool IsEndSolidBody(SolidBody solidBody)
```

#### Parameters

`solidBody` SolidBody

SolidBody to check

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

It's true or false

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_IsStartBeamElement_VM_Managed_DAFUL_Beam_BeamElement_"></a> IsStartBeamElement\(BeamElement\)

Whether starting beam element among current beam information

```csharp
public bool IsStartBeamElement(BeamElement beamEle)
```

#### Parameters

`beamEle` [BeamElement](VM.Managed.DAFUL.Beam.BeamElement.md)

Currnet beam element

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

It's true or false

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_IsStartSolidBody_VM_Managed_DAFUL_SolidBody_"></a> IsStartSolidBody\(SolidBody\)

Whether starting solid body among current beam information

```csharp
public bool IsStartSolidBody(SolidBody solidBody)
```

#### Parameters

`solidBody` SolidBody

SolidBody to check

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

It's true or false

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request to update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_UpdateBeamElements"></a> UpdateBeamElements\(\)

Update beam elements of area and mass properties

```csharp
public void UpdateBeamElements()
```

### <a id="VM_Managed_DAFUL_Beam_BeamInfo_UpdateBeamNodes"></a> UpdateBeamNodes\(\)

Update body properties of position and orientation

```csharp
public void UpdateBeamNodes()
```

