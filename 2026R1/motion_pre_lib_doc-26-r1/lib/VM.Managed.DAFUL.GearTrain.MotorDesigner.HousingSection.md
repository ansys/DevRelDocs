# Class MotorDesigner.HousingSection
<a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Housing Section

```csharp
public class MotorDesigner.HousingSection : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[MotorDesigner.HousingSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.HousingSection.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection__ctor"></a> HousingSection\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.HousingSection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HousingSection()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_BearingRBEs"></a> BearingRBEs

Gets or sets the rbe for bearing.

```csharp
public MotorDesigner.RBECreator[] BearingRBEs { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[RBECreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.RBECreator.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_Hr"></a> Hr

Gets or sets the Hr.

```csharp
public ExpressionValueVariable Hr { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_LengthSet"></a> LengthSet

Gets or sets the length set.

```csharp
public Variable[] LengthSet { get; set; }
```

#### Property Value

 Variable\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_MTGBoltDiameter"></a> MTGBoltDiameter

Gets or sets the MTG bolt diameter.

```csharp
public ExpressionValueVariable MTGBoltDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_Material"></a> Material

Gets or sets the material.

```csharp
public IMaterial Material { get; set; }
```

#### Property Value

 IMaterial

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_MountRBEs"></a> MountRBEs

Gets or sets the rbe for mount.

```csharp
public MotorDesigner.RBECreator[] MountRBEs { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[RBECreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.RBECreator.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_NumberOfMountingBolt"></a> NumberOfMountingBolt

Gets or sets the number of mounting bolt.

```csharp
public ExpressionValueVariable NumberOfMountingBolt { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_NumberOfRib"></a> NumberOfRib

Gets or sets the number of rib.

```csharp
public ExpressionValueVariable NumberOfRib { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_RibType"></a> RibType

Gets or sets the rib type

```csharp
public MotorDesigner.HousingSection.Rib RibType { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[HousingSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.HousingSection.md).[Rib](VM.Managed.DAFUL.GearTrain.MotorDesigner.HousingSection.Rib.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_StatorMountingDirectionType"></a> StatorMountingDirectionType

Gets or sets the stator mounting direction type

```csharp
public MotorDesigner.HousingSection.StatorMountingDirection StatorMountingDirectionType { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[HousingSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.HousingSection.md).[StatorMountingDirection](VM.Managed.DAFUL.GearTrain.MotorDesigner.HousingSection.StatorMountingDirection.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_StatorRBEs"></a> StatorRBEs

Gets or sets the rbe for stator.

```csharp
public MotorDesigner.RBECreator[] StatorRBEs { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[RBECreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.RBECreator.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_ThicknessSet"></a> ThicknessSet

Gets or sets the thickness set.

```csharp
public Variable[] ThicknessSet { get; set; }
```

#### Property Value

 Variable\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_TieContact"></a> TieContact

Gets or sets the tie.

```csharp
public Tie TieContact { get; set; }
```

#### Property Value

 [Tie](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMFlexibleBase/Tie.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_Wr"></a> Wr

Gets or sets the Wr.

```csharp
public ExpressionValueVariable Wr { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection__Material"></a> \_Material

Gets or sets the material.

```csharp
public Linker<IMaterial> _Material { get; set; }
```

#### Property Value

 Linker<IMaterial\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_CreateBuilder_VM_Managed_Document_"></a> CreateBuilder\(Document\)

Create builder

```csharp
public MotorHousingBuiler CreateBuilder(Document doc)
```

#### Parameters

`doc` Document

The document

#### Returns

 [MotorHousingBuiler](VM.Managed.DAFUL.GearTrain.MotorHousingBuiler.md)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_GetMeasureBottomSideLowerPoint"></a> GetMeasureBottomSideLowerPoint\(\)

Gets measure bottom side point

```csharp
public Vector GetMeasureBottomSideLowerPoint()
```

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_GetMeasureBottomSidePoint"></a> GetMeasureBottomSidePoint\(\)

Gets measure bottom side point

```csharp
public Vector GetMeasureBottomSidePoint()
```

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_GetMeasureBottomSideUpperPoint"></a> GetMeasureBottomSideUpperPoint\(\)

Gets measure bottom side upper point

```csharp
public Vector GetMeasureBottomSideUpperPoint()
```

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_GetMeasureRearCoverCenterPoint"></a> GetMeasureRearCoverCenterPoint\(\)

Gets the measure rear cover center point

```csharp
public Vector GetMeasureRearCoverCenterPoint()
```

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_GetMeasureTopSideLowerPoint"></a> GetMeasureTopSideLowerPoint\(\)

Gets measure top side lower point

```csharp
public Vector GetMeasureTopSideLowerPoint()
```

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_GetMeasureTopSidePoint"></a> GetMeasureTopSidePoint\(\)

Gets measure top side point

```csharp
public Vector GetMeasureTopSidePoint()
```

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_GetMeasureTopSideUpperPoint"></a> GetMeasureTopSideUpperPoint\(\)

Gets measure top side upper point

```csharp
public Vector GetMeasureTopSideUpperPoint()
```

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingSection_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

