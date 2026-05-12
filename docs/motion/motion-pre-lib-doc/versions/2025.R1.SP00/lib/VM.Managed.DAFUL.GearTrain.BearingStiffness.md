#  Class BearingStiffness

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Bearing Stiffness

```csharp
public class BearingStiffness : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[BearingStiffness](VM.Managed.DAFUL.GearTrain.BearingStiffness.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
INamed, 
INavigatorItem

#### Inherited Members

SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
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

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness__ctor"></a> BearingStiffness\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.BearingStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BearingStiffness()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_AmountOfDataForPlotResult"></a> AmountOfDataForPlotResult

Gets or sets the amount of data for plot result.

```csharp
public ExpressionValueVariable AmountOfDataForPlotResult { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_AmountOfDataForPlotResultInitialValue"></a> AmountOfDataForPlotResultInitialValue

Gets the amount of data for plot result initial value.

```csharp
public static int AmountOfDataForPlotResultInitialValue { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_AxialStiffnessSplineValue"></a> AxialStiffnessSplineValue

Gets or sets the axial stiffness spline value.

```csharp
public SplineValue AxialStiffnessSplineValue { get; set; }
```

#### Property Value

 SplineValue

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_DeformationX"></a> DeformationX

Gets or sets the X deformation.

```csharp
public ExpressionValueVariable DeformationX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_DeformationXInitialValue"></a> DeformationXInitialValue

Gets the X deformation initial value.

```csharp
public static double DeformationXInitialValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_DeformationY"></a> DeformationY

Gets or sets the Y deformation.

```csharp
public ExpressionValueVariable DeformationY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_DeformationYInitialValue"></a> DeformationYInitialValue

Gets the Y deformation initial value.

```csharp
public static double DeformationYInitialValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_DeformationZ"></a> DeformationZ

Gets or sets the Z deformation.

```csharp
public ExpressionValueVariable DeformationZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_DeformationZInitialValue"></a> DeformationZInitialValue

Gets the Z deformation initial value.

```csharp
public static double DeformationZInitialValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxAxialStiffnessValue"></a> MaxAxialStiffnessValue

Gets or sets the maximum axial stiffness value.

```csharp
public ExpressionValueVariable MaxAxialStiffnessValue { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxDeformationForAxialDirection"></a> MaxDeformationForAxialDirection

Gets or sets the Max. deformation for axial direction.

```csharp
public ExpressionValueVariable MaxDeformationForAxialDirection { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxDeformationForAxialDirectionInitialValue"></a> MaxDeformationForAxialDirectionInitialValue

Gets the Max. deformation for axial direction initial value.

```csharp
public static double MaxDeformationForAxialDirectionInitialValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxDeformationForRadialDirection"></a> MaxDeformationForRadialDirection

Gets or sets the Max. deformation for radial direction.

```csharp
public ExpressionValueVariable MaxDeformationForRadialDirection { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxDeformationForRadialDirectionInitialValue"></a> MaxDeformationForRadialDirectionInitialValue

Gets the Max. deformation for radial direction initial value.

```csharp
public static double MaxDeformationForRadialDirectionInitialValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxDeformationForTilting"></a> MaxDeformationForTilting

Gets or sets the Max. deformation for tilting.

```csharp
public ExpressionValueVariable MaxDeformationForTilting { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxDeformationForTiltingInitialValue"></a> MaxDeformationForTiltingInitialValue

Gets the Max. deformation for tilting initial value.

```csharp
public static double MaxDeformationForTiltingInitialValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxRadialStiffnessValue"></a> MaxRadialStiffnessValue

Gets or sets the maximum radial stiffness value.

```csharp
public ExpressionValueVariable MaxRadialStiffnessValue { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_MaxTiltStiffnessValue"></a> MaxTiltStiffnessValue

Gets or sets the maximum tilt stiffness value.

```csharp
public ExpressionValueVariable MaxTiltStiffnessValue { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_RadialStiffnessSplineValue"></a> RadialStiffnessSplineValue

Gets or sets the radial stiffness spline value.

```csharp
public SplineValue RadialStiffnessSplineValue { get; set; }
```

#### Property Value

 SplineValue

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_ShowAdvancedParameter"></a> ShowAdvancedParameter

Gets or sets the advanced parameter show state.

```csharp
public bool ShowAdvancedParameter { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_StiffnessMatrix"></a> StiffnessMatrix

Gets or sets the stiffness matrix.

```csharp
public VariableMatrix StiffnessMatrix { get; set; }
```

#### Property Value

 VariableMatrix

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_TiltStiffnessSplineValue"></a> TiltStiffnessSplineValue

Gets or sets the tilt stiffness spline value.

```csharp
public SplineValue TiltStiffnessSplineValue { get; set; }
```

#### Property Value

 SplineValue

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_TiltX"></a> TiltX

Gets or sets the X tilt.

```csharp
public ExpressionValueVariable TiltX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_TiltXInitialValue"></a> TiltXInitialValue

Gets the X tilt initial value.

```csharp
public static double TiltXInitialValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_TiltY"></a> TiltY

Gets or sets the Y tilt.

```csharp
public ExpressionValueVariable TiltY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_TiltYInitialValue"></a> TiltYInitialValue

Gets the Y tilt initial value.

```csharp
public static double TiltYInitialValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_BearingStiffness_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

