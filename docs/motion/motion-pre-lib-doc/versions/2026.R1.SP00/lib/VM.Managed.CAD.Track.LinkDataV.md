# Class LinkDataV
<a id="VM_Managed_CAD_Track_LinkDataV"></a>

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The class for link advanced data.

```csharp
public class LinkDataV : LinkDataBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[LinkDataBase](VM.Managed.CAD.Track.LinkDataBase.md) ← 
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

[LinkDataBase.CheckValidation\(\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_CheckValidation), 
[LinkDataBase.GetFactorForLength\(\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_GetFactorForLength), 
[LinkDataBase.Update\_Transforms\(\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_Update\_Transforms), 
[LinkDataBase.Update\_IDesignPointDataBecauseOfObjectControl\(TMatrix\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_Update\_IDesignPointDataBecauseOfObjectControl\_VM\_Managed\_TMatrix\_), 
[LinkDataBase.Update\_DesignPointWhenUpdatedDV\(\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_Update\_DesignPointWhenUpdatedDV), 
[LinkDataBase.Calculation\_Gradient\_Bewteen\_ArbitraryPoint\_and\_Circle\(VectorBase, VectorBase, double\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_Calculation\_Gradient\_Bewteen\_ArbitraryPoint\_and\_Circle\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_System\_Double\_), 
[LinkDataBase.Calculation\_TangentPoint\_Through\_Line\_Circle\(double, VectorBase, VectorBase, double\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_Calculation\_TangentPoint\_Through\_Line\_Circle\_System\_Double\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_System\_Double\_), 
[LinkDataBase.FillParameter\(BuilderParamLink\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_FillParameter\_VM\_CAD\_Builders\_Links\_BuilderParamLink\_), 
[LinkDataBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkDataBase.CreateParameter\(\)](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_CreateParameter), 
[LinkDataBase.PinDiameter](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_PinDiameter), 
[LinkDataBase.PinWidth](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_PinWidth), 
[LinkDataBase.PinBooleanType](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_PinBooleanType), 
[LinkDataBase.BushBooleanType](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_BushBooleanType), 
[LinkDataBase.LDForLinkCombination](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_LDForLinkCombination), 
[LinkDataBase.PositionForLinkCombination](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_PositionForLinkCombination), 
[LinkDataBase.LinkPitch](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_LinkPitch), 
[LinkDataBase.LinkHeight1](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_LinkHeight1), 
[LinkDataBase.LinkHeight2](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_LinkHeight2), 
[LinkDataBase.InnerGauge](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_InnerGauge), 
[LinkDataBase.OuterGauge](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_OuterGauge), 
[LinkDataBase.GeometryReference](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_GeometryReference), 
[LinkDataBase.PinTransformRight](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_PinTransformRight), 
[LinkDataBase.PinTransformLeft](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_PinTransformLeft), 
[LinkDataBase.BushTransformRight](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_BushTransformRight), 
[LinkDataBase.BushTransformLeft](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_BushTransformLeft), 
[LinkDataBase.IsApplyToFileProperty](VM.Managed.CAD.Track.LinkDataBase.md\#VM\_Managed\_CAD\_Track\_LinkDataBase\_IsApplyToFileProperty), 
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

### <a id="VM_Managed_CAD_Track_LinkDataV__ctor"></a> LinkDataV\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.LinkDataV" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkDataV()
```

### <a id="VM_Managed_CAD_Track_LinkDataV__ctor_VM_Models_Pre_IOwned_"></a> LinkDataV\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.LinkDataV" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkDataV(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_CAD_Track_LinkDataV_BushBossRadius"></a> BushBossRadius

Gets and sets bush boss radius.

```csharp
public ExpressionValueVariable BushBossRadius { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_BushInnerDiameter"></a> BushInnerDiameter

Gets and sets bush inner diameter.

```csharp
public ExpressionValueVariable BushInnerDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_BushOuterDiameter"></a> BushOuterDiameter

Gets and sets bush outer diameter.

```csharp
public ExpressionValueVariable BushOuterDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_BushWidth"></a> BushWidth

Gets and sets bush width.

```csharp
public ExpressionValueVariable BushWidth { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_ChamferLength1"></a> ChamferLength1

Gets and sets chamfer length1.

```csharp
public ExpressionValueVariable ChamferLength1 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_ChamferLength2"></a> ChamferLength2

Gets and sets chamfer length2.

```csharp
public ExpressionValueVariable ChamferLength2 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_LinkDepth1"></a> LinkDepth1

Gets and sets link depth1.

```csharp
public ExpressionValueVariable LinkDepth1 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_LinkDepth2"></a> LinkDepth2

Gets and sets link depth2.

```csharp
public ExpressionValueVariable LinkDepth2 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_LinkDistance1"></a> LinkDistance1

Gets and sets link distance1.

```csharp
public ExpressionValueVariable LinkDistance1 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_LinkDistance2"></a> LinkDistance2

Gets and sets link distance2.

```csharp
public ExpressionValueVariable LinkDistance2 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_LinkDistance3"></a> LinkDistance3

Gets and sets link distance3.

```csharp
public ExpressionValueVariable LinkDistance3 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_LinkDistance4"></a> LinkDistance4

Gets and sets link distance4.

```csharp
public ExpressionValueVariable LinkDistance4 { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_PinBossRadius"></a> PinBossRadius

Gets and sets pin boss radius.

```csharp
public ExpressionValueVariable PinBossRadius { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

## Methods

### <a id="VM_Managed_CAD_Track_LinkDataV_CheckValidation"></a> CheckValidation\(\)

Check validation for member variables.

```csharp
public override void CheckValidation()
```

### <a id="VM_Managed_CAD_Track_LinkDataV_CreateParameter"></a> CreateParameter\(\)

```csharp
protected override BuilderParamBase CreateParameter()
```

#### Returns

 [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_FillParameter_VM_CAD_Builders_Links_BuilderParamLink_"></a> FillParameter\(BuilderParamLink\)

```csharp
protected override void FillParameter(BuilderParamLink builderParam)
```

#### Parameters

`builderParam` [BuilderParamLink](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders.Links/BuilderParameters/BuilderParamLink.cs)

### <a id="VM_Managed_CAD_Track_LinkDataV_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

