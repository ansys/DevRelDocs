# Class LinkDataSimple
<a id="VM_Managed_CAD_Track_LinkDataSimple"></a>

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The class for link simple data.

```csharp
public class LinkDataSimple : LinkDataBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[LinkDataBase](VM.Managed.CAD.Track.LinkDataBase.md) ← 
[LinkDataSimple](VM.Managed.CAD.Track.LinkDataSimple.md)

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

### <a id="VM_Managed_CAD_Track_LinkDataSimple__ctor"></a> LinkDataSimple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.LinkDataSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkDataSimple()
```

### <a id="VM_Managed_CAD_Track_LinkDataSimple__ctor_VM_Models_Pre_IOwned_"></a> LinkDataSimple\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.LinkDataSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LinkDataSimple(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_CAD_Track_LinkDataSimple_BushDiameter"></a> BushDiameter

Gets and sets bush diameter.

```csharp
public ExpressionValueVariable BushDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

## Methods

### <a id="VM_Managed_CAD_Track_LinkDataSimple_CheckValidation"></a> CheckValidation\(\)

Check validation for member variables.

```csharp
public override void CheckValidation()
```

### <a id="VM_Managed_CAD_Track_LinkDataSimple_CreateParameter"></a> CreateParameter\(\)

```csharp
protected override BuilderParamBase CreateParameter()
```

#### Returns

 [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_CAD_Track_LinkDataSimple_FillParameter_VM_CAD_Builders_Links_BuilderParamLink_"></a> FillParameter\(BuilderParamLink\)

```csharp
protected override void FillParameter(BuilderParamLink builderParam)
```

#### Parameters

`builderParam` [BuilderParamLink](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders.Links/BuilderParameters/BuilderParamLink.cs)

