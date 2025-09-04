#  Class MotorHousingBuiler

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The housing builder in motor

```csharp
public class MotorHousingBuiler : MotorBaseBuiler, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Builder ← 
BuilderTransform ← 
BuilderColorGeom ← 
[MotorBaseBuiler](VM.Managed.DAFUL.GearTrain.MotorBaseBuiler.md) ← 
[MotorHousingBuiler](VM.Managed.DAFUL.GearTrain.MotorHousingBuiler.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer

#### Inherited Members

[MotorBaseBuiler.FillParameter\(BuilderParamBase\)](VM.Managed.DAFUL.GearTrain.MotorBaseBuiler.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorBaseBuiler\_FillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[MotorBaseBuiler.Depth](VM.Managed.DAFUL.GearTrain.MotorBaseBuiler.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorBaseBuiler\_Depth), 
[MotorBaseBuiler.StartPosition](VM.Managed.DAFUL.GearTrain.MotorBaseBuiler.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorBaseBuiler\_StartPosition), 
[MotorBaseBuiler.RotateAxis](VM.Managed.DAFUL.GearTrain.MotorBaseBuiler.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorBaseBuiler\_RotateAxis), 
BuilderColorGeom.m\_color, 
BuilderColorGeom.CheckValidationAboutBuild\(\), 
BuilderColorGeom.OnDeserialization\(object\), 
BuilderColorGeom.FillParameter\(BuilderParamBase\), 
BuilderColorGeom.Color, 
BuilderColorGeom.DrawingColor, 
BuilderTransform.SetTransform\(TMatrix\), 
BuilderTransform.IsParameterized, 
Builder.CheckValidationAboutBuild\(\), 
Builder.CheckCircularReference\(ObjectBase\), 
Builder.ChangeDataForCircularReference\(\), 
Builder.GetUnnamedObjectName\(object\), 
Builder.FindLocal\(string\), 
Builder.CopyFilePathWhenImportBuilder\(Builder\), 
Builder.Contains\(Type\), 
Builder.GetBodyType\(\), 
Builder.ReplaceData\(string, object\), 
Builder.GetNameAttribute\(string, ref List<string\>\), 
Builder.AddUneditableAttribute\(\), 
Builder.GetParentBody\(\), 
Builder.Clone\(\), 
Builder.Initialize\(Unit.ConvertFactor\), 
Builder.OnDeserialization\(object\), 
Builder.CreateParameter\(\), 
Builder.FillParameter\(BuilderParamBase\), 
Builder.LinkRequestUpdate\(object, LinkEventArgs\), 
Builder.PostWorkWhenFailedToGetXmlString\(\), 
Builder.GetFilledParameter\(\), 
Builder.GetXmlString\(\), 
Builder.GetFactorForLength\(\), 
Builder.CheckCircularReferenceForPoint\(PointBase, ObjectBase\), 
Builder.CheckCircularReferenceForDirection\(DirectionBase, ObjectBase\), 
Builder.CheckCircularReferenceForOrientation\(OrientationBase, ObjectBase\), 
Builder.CheckCircularReferenceForTransform\(TransformBase, ObjectBase\), 
Builder.GetUnitScale\(\), 
Builder.InitialKernelLengthUnit, 
Builder.IsExternable, 
Builder.Uneditable, 
Builder.TypeOfBuilder, 
Builder.Transparency, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler__ctor"></a> MotorHousingBuiler\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorHousingBuiler" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MotorHousingBuiler()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_HousingType"></a> HousingType

```csharp
public string HousingType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_Hr"></a> Hr

```csharp
public double Hr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_IsMeasureBottomSide"></a> IsMeasureBottomSide

```csharp
public bool IsMeasureBottomSide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_IsMeasureRearCoverCenter"></a> IsMeasureRearCoverCenter

```csharp
public bool IsMeasureRearCoverCenter { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_IsMeasureTopSide"></a> IsMeasureTopSide

```csharp
public bool IsMeasureTopSide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L1"></a> L1

```csharp
public double L1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L10"></a> L10

```csharp
public double L10 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L11"></a> L11

```csharp
public double L11 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L2"></a> L2

```csharp
public double L2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L3"></a> L3

```csharp
public double L3 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L4"></a> L4

```csharp
public double L4 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L5"></a> L5

```csharp
public double L5 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L6"></a> L6

```csharp
public double L6 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L7"></a> L7

```csharp
public double L7 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L8"></a> L8

```csharp
public double L8 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_L9"></a> L9

```csharp
public double L9 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_MTGBoltDiameter"></a> MTGBoltDiameter

```csharp
public double MTGBoltDiameter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_MeasureBottomSideLowerPosition"></a> MeasureBottomSideLowerPosition

```csharp
public Vector MeasureBottomSideLowerPosition { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_MeasureBottomSideUpperPosition"></a> MeasureBottomSideUpperPosition

```csharp
public Vector MeasureBottomSideUpperPosition { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_MeasureRBECircleRadius"></a> MeasureRBECircleRadius

```csharp
public double MeasureRBECircleRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_MeasureRearCoverCenterPosition"></a> MeasureRearCoverCenterPosition

```csharp
public Vector MeasureRearCoverCenterPosition { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_MeasureTopSideLowerPosition"></a> MeasureTopSideLowerPosition

```csharp
public Vector MeasureTopSideLowerPosition { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_MeasureTopSideUpperPosition"></a> MeasureTopSideUpperPosition

```csharp
public Vector MeasureTopSideUpperPosition { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_NumberOfMountingBolt"></a> NumberOfMountingBolt

```csharp
public int NumberOfMountingBolt { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_NumberOfRib"></a> NumberOfRib

```csharp
public int NumberOfRib { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_RibType"></a> RibType

```csharp
public string RibType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_StatorDepth"></a> StatorDepth

```csharp
public double StatorDepth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_StatorIsExistMounting"></a> StatorIsExistMounting

```csharp
public bool StatorIsExistMounting { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_StatorMPCR"></a> StatorMPCR

```csharp
public double StatorMPCR { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_StatorMountingDirectionType"></a> StatorMountingDirectionType

```csharp
public string StatorMountingDirectionType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_StatorNumberOfMounting"></a> StatorNumberOfMounting

```csharp
public int StatorNumberOfMounting { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_StatorRmo"></a> StatorRmo

```csharp
public double StatorRmo { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_StatorRotateAngle"></a> StatorRotateAngle

```csharp
public double StatorRotateAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_StatorStartPosition"></a> StatorStartPosition

```csharp
public Vector StatorStartPosition { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_T1"></a> T1

```csharp
public double T1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_T2"></a> T2

```csharp
public double T2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_T3"></a> T3

```csharp
public double T3 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_T4"></a> T4

```csharp
public double T4 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_T5"></a> T5

```csharp
public double T5 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_Wr"></a> Wr

```csharp
public double Wr { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_CreateParameter"></a> CreateParameter\(\)

Create parameter

```csharp
protected override BuilderParamBase CreateParameter()
```

#### Returns

 BuilderParamBase

### <a id="VM_Managed_DAFUL_GearTrain_MotorHousingBuiler_FillParameter_VM_CAD_Builders_BuilderParamBase_"></a> FillParameter\(BuilderParamBase\)

Fill parameter

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` BuilderParamBase

