# Class LinkDataBase
<a id="VM_Managed_CAD_Track_LinkDataBase"></a>

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The abstract class for link data.

```csharp
public abstract class LinkDataBase : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[LinkDataBase](VM.Managed.CAD.Track.LinkDataBase.md)

#### Derived

[LinkDataSimple](VM.Managed.CAD.Track.LinkDataSimple.md), 
[LinkDataV](VM.Managed.CAD.Track.LinkDataV.md)

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

### <a id="VM_Managed_CAD_Track_LinkDataBase__ctor"></a> LinkDataBase\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.LinkDataBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkDataBase()
```

### <a id="VM_Managed_CAD_Track_LinkDataBase__ctor_VM_Models_Pre_IOwned_"></a> LinkDataBase\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.LinkDataBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkDataBase(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_CAD_Track_LinkDataBase_BushBooleanType"></a> BushBooleanType

Gets and sets bush boolean type.

```csharp
public BooleanType BushBooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.Managed.CAD.Track.BooleanType.md)

### <a id="VM_Managed_CAD_Track_LinkDataBase_BushTransformLeft"></a> BushTransformLeft

Gets or sets the bush transform.

```csharp
public ObjectBase BushTransformLeft { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_CAD_Track_LinkDataBase_BushTransformRight"></a> BushTransformRight

Gets or sets the bush transform.

```csharp
public ObjectBase BushTransformRight { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_CAD_Track_LinkDataBase_GeometryReference"></a> GeometryReference

Gets or sets the geometry reference.

```csharp
public ObjectBase GeometryReference { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_CAD_Track_LinkDataBase_InnerGauge"></a> InnerGauge

Gets and sets inner gauge.

```csharp
public ExpressionValueVariable InnerGauge { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_IsApplyToFileProperty"></a> IsApplyToFileProperty

Gets and sets boolean

```csharp
public bool IsApplyToFileProperty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_CAD_Track_LinkDataBase_LDForLinkCombination"></a> LDForLinkCombination

Gets and sets longitudinal distance from reference position.

```csharp
public Variable LDForLinkCombination { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_CAD_Track_LinkDataBase_LinkHeight1"></a> LinkHeight1

Gets and sets link height1.

```csharp
public ExpressionValueVariable LinkHeight1 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_LinkHeight2"></a> LinkHeight2

Gets and sets link height2.

```csharp
public ExpressionValueVariable LinkHeight2 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_LinkPitch"></a> LinkPitch

Gets and sets link pitch.

```csharp
public ExpressionValueVariable LinkPitch { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_OuterGauge"></a> OuterGauge

Gets and sets outer gauge.

```csharp
public ExpressionValueVariable OuterGauge { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_PinBooleanType"></a> PinBooleanType

Gets and sets pin boolean type.

```csharp
public BooleanType PinBooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.Managed.CAD.Track.BooleanType.md)

### <a id="VM_Managed_CAD_Track_LinkDataBase_PinDiameter"></a> PinDiameter

Gets and sets pin diameter.

```csharp
public ExpressionValueVariable PinDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_PinTransformLeft"></a> PinTransformLeft

Gets or sets the pin transform.

```csharp
public ObjectBase PinTransformLeft { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_CAD_Track_LinkDataBase_PinTransformRight"></a> PinTransformRight

Gets or sets the pin transform.

```csharp
public ObjectBase PinTransformRight { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_CAD_Track_LinkDataBase_PinWidth"></a> PinWidth

Gets and sets pin width.

```csharp
public ExpressionValueVariable PinWidth { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_PositionForLinkCombination"></a> PositionForLinkCombination

Gets and set position for link combination.

```csharp
public ObjectBase PositionForLinkCombination { get; set; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_CAD_Track_LinkDataBase_Calculation_Gradient_Bewteen_ArbitraryPoint_and_Circle_VM_Managed_VectorBase_VM_Managed_VectorBase_System_Double_"></a> Calculation\_Gradient\_Bewteen\_ArbitraryPoint\_and\_Circle\(VectorBase, VectorBase, double\)

Called when the gradient calculate between arbitrary point and circle.

```csharp
protected double[] Calculation_Gradient_Bewteen_ArbitraryPoint_and_Circle(VectorBase _ptArbitrary, VectorBase ptCenterofCircle, double _dRadiusofCircle)
```

#### Parameters

`_ptArbitrary` VectorBase

The arbitrary point.

`ptCenterofCircle` VectorBase

The center point of circle.

`_dRadiusofCircle` double

The radius of circle.

#### Returns

 double\[\]

The array of gradient.

### <a id="VM_Managed_CAD_Track_LinkDataBase_Calculation_TangentPoint_Through_Line_Circle_System_Double_VM_Managed_VectorBase_VM_Managed_VectorBase_System_Double_"></a> Calculation\_TangentPoint\_Through\_Line\_Circle\(double, VectorBase, VectorBase, double\)

Called when tangent points calculates through line to circle.

```csharp
protected List<VectorBase> Calculation_TangentPoint_Through_Line_Circle(double dGradient, VectorBase _ptArbitrary, VectorBase ptCenterofCircle, double _dRadiusofCircle)
```

#### Parameters

`dGradient` double

The gradient.

`_ptArbitrary` VectorBase

The arbitrary point.

`ptCenterofCircle` VectorBase

The center point of circle.

`_dRadiusofCircle` double

The radius of circle.

#### Returns

 List<VectorBase\>

The list of points

### <a id="VM_Managed_CAD_Track_LinkDataBase_CheckValidation"></a> CheckValidation\(\)

Check validation for member variables.

```csharp
public virtual void CheckValidation()
```

### <a id="VM_Managed_CAD_Track_LinkDataBase_CreateParameter"></a> CreateParameter\(\)

```csharp
protected abstract BuilderParamBase CreateParameter()
```

#### Returns

 [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_FillParameter_VM_CAD_Builders_Links_BuilderParamLink_"></a> FillParameter\(BuilderParamLink\)

```csharp
protected virtual void FillParameter(BuilderParamLink builderParam)
```

#### Parameters

`builderParam` [BuilderParamLink](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders.Links/BuilderParameters/BuilderParamLink.cs)

### <a id="VM_Managed_CAD_Track_LinkDataBase_GetFactorForLength"></a> GetFactorForLength\(\)

Gets the factor for length.

```csharp
protected double GetFactorForLength()
```

#### Returns

 double

The factor.

### <a id="VM_Managed_CAD_Track_LinkDataBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The obj notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_CAD_Track_LinkDataBase_Update_DesignPointWhenUpdatedDV"></a> Update\_DesignPointWhenUpdatedDV\(\)

Call when "LDForLinkCombination" updated.

```csharp
public void Update_DesignPointWhenUpdatedDV()
```

### <a id="VM_Managed_CAD_Track_LinkDataBase_Update_IDesignPointDataBecauseOfObjectControl_VM_Managed_TMatrix_"></a> Update\_IDesignPointDataBecauseOfObjectControl\(TMatrix\)

Update tranformation of design point or design frame.

```csharp
public void Update_IDesignPointDataBecauseOfObjectControl(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The tramsformation matrix.

### <a id="VM_Managed_CAD_Track_LinkDataBase_Update_Transforms"></a> Update\_Transforms\(\)

Update tranformation when geomerty changed.

```csharp
public void Update_Transforms()
```

