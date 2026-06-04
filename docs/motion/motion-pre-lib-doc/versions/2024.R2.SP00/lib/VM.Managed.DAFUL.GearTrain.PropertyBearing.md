# Class PropertyBearing

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Property of Bearing

```csharp
public class PropertyBearing : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyBearing](VM.Managed.DAFUL.GearTrain.PropertyBearing.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

Property.Initialize\(Unit.ConvertFactor\), 
Property.PropertyRequestUpdate\(object, LinkEventArgs\), 
Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
Property.GetUnnamedObjectName\(object\), 
Property.FindLocal\(string\), 
Property.Draw\(Canvas, TMatrix, TMatrix, bool\), 
ContainerObject<PropertyEventCore\>.Find\(string\), 
ContainerObject<PropertyEventCore\>.FindLocal\(string\), 
ContainerObject<PropertyEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<PropertyEventCore\>.GetKey\(\), 
Object<PropertyEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<PropertyEventCore\>.SetIconColor\(Canvas\), 
Object<PropertyEventCore\>.OnDeserialization\(object\), 
Object<PropertyEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<PropertyEventCore\>.RollbackEvent\(\), 
Object<PropertyEventCore\>.OnDeserializedCore\(object\), 
Object<PropertyEventCore\>.Key, 
Object<PropertyEventCore\>.UntypedEventCore, 
Object<PropertyEventCore\>.EventCore, 
Object<PropertyEventCore\>.Attributes, 
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

### PropertyBearing\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PropertyBearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyBearing()
```

## Properties

### AxialClearance

Gets or sets the axial clearance.
Use SetAxialClearance() when this instance sets for undo/redo

```csharp
public double AxialClearance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BallColor

Gets or sets the ball color.
Use SetBallColor() when this instance sets for undo/redo

```csharp
public string BallColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BallDrawingColor

Gets the ball color of the drawing.

```csharp
public Color BallDrawingColor { get; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### BearingStiffness

Gets or sets the bearing stiffness.

```csharp
public BearingStiffness BearingStiffness { get; set; }
```

#### Property Value

 [BearingStiffness](VM.Managed.DAFUL.GearTrain.BearingStiffness.md)

### BearingStrength

Gets or sets the bearing strength.

```csharp
public BearingStrength BearingStrength { get; set; }
```

#### Property Value

 [BearingStrength](VM.Managed.DAFUL.GearTrain.BearingStrength.md)

### Color

Gets or sets the color.
Use SetColor() when this instance sets for undo/redo

```csharp
public string Color { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DampingRatio

Gets or sets the damping ratio.
Use SetDampingRatio() when this instance sets for undo/redo

```csharp
public double DampingRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DampingRatioVariable

Gets or sets the damping ratio variable.

```csharp
public ExpressionValueVariable DampingRatioVariable { get; set; }
```

#### Property Value

 ExpressionValueVariable

### Dimension

Gets or sets the dimension.

```csharp
public BearingDimensionBase Dimension { get; set; }
```

#### Property Value

 [BearingDimensionBase](VM.Managed.DAFUL.GearTrain.BearingDimensionBase.md)

### DrawingColor

Gets the color of the drawing.

```csharp
public Color DrawingColor { get; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### InnerCurvatureCenter

Gets or sets the inner curvature center.
Use SetInnerCurvatureCenter() when this instance sets for undo/redo

```csharp
public double InnerCurvatureCenter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### InnerGeomInfo

Gets or sets the inner geom information.

```csharp
public RacewayGeometryInfo InnerGeomInfo { get; set; }
```

#### Property Value

 [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

### InnerRacewayColor

Gets or sets the inner raceway color.
Use SetInnerRacewayColor() when this instance sets for undo/redo

```csharp
public string InnerRacewayColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InnerRacewayDrawingColor

Gets the inner raceway color of the drawing.

```csharp
public Color InnerRacewayDrawingColor { get; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### NumberOfBall

Gets or sets the number of ball.
Use SetNumberOfBall() when this instance sets for undo/redo

```csharp
public uint NumberOfBall { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### OuterCurvatureCenter

Gets or sets the outer curvature center.
Use SetOuterCurvatureCenter() when this instance sets for undo/redo

```csharp
public double OuterCurvatureCenter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### OuterGeomInfo

Gets or sets the outer raceway geom information.

```csharp
public RacewayGeometryInfo OuterGeomInfo { get; set; }
```

#### Property Value

 [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

### OuterRacewayColor

Gets or sets the outer raceway color.
Use SetOuterRacewayColor() when this instance sets for undo/redo

```csharp
public string OuterRacewayColor { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OuterRacewayDrawingColor

Gets the outer raceway color of the drawing.

```csharp
public Color OuterRacewayDrawingColor { get; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### RadialClearance

Gets or sets the radial clearance.
Use SetRadialClearance() when this instance sets for undo/redo

```csharp
public double RadialClearance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RadiusOfBall

Gets or sets the radius of ball.
Use SetRadiusOfBall() when this instance sets for undo/redo

```csharp
public double RadiusOfBall { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StiffnessMatrix

Gets or sets the stiffness matrix.

```csharp
public VariableMatrix StiffnessMatrix { get; set; }
```

#### Property Value

 VariableMatrix

### StiffnessType

Gets or sets the type of the stiffness.
Use SetStiffnessType() when this instance sets for undo/redo

```csharp
public PropertyBearing.enStiffnessType StiffnessType { get; set; }
```

#### Property Value

 [PropertyBearing](VM.Managed.DAFUL.GearTrain.PropertyBearing.md).[enStiffnessType](VM.Managed.DAFUL.GearTrain.PropertyBearing.enStiffnessType.md)

### Type

Gets or sets the type.
Use SetType() when this instance sets for undo/redo

```csharp
public PropertyBearing.enBearingType Type { get; set; }
```

#### Property Value

 [PropertyBearing](VM.Managed.DAFUL.GearTrain.PropertyBearing.md).[enBearingType](VM.Managed.DAFUL.GearTrain.PropertyBearing.enBearingType.md)

### UnloadContactAngle

Gets or sets the unload contact angle.
Use SetUnloadContactAngle() when this instance sets for undo/redo

```csharp
public double UnloadContactAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### FindLocal\(string\)

Finds the local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

#### Returns

 IObjectBase

### GetEffectiveStiffness\(Document\)

Gets the effective stiffness.

```csharp
public double GetEffectiveStiffness(Document doc)
```

#### Parameters

`doc` Document

The document

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The effective stiffness.

### GetRacewayPair\(RacewayGeometryInfo\)

Gets the raceway pair.

```csharp
public RacewayGeometryInfo GetRacewayPair(RacewayGeometryInfo info)
```

#### Parameters

`info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The information.

#### Returns

 [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

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

### SetAxialClearance\(double\)

Set axial clearance.

```csharp
public void SetAxialClearance(double dAxialClearance)
```

#### Parameters

`dAxialClearance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The axial clearance.

### SetBallColor\(string\)

Set ball color.

```csharp
public void SetBallColor(string strColor)
```

#### Parameters

`strColor` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ball color.

### SetColor\(string\)

Set color.

```csharp
public void SetColor(string strColor)
```

#### Parameters

`strColor` [string](https://learn.microsoft.com/dotnet/api/system.string)

The color.

### SetDampingRatio\(double\)

Set damping ratio.

```csharp
public void SetDampingRatio(double dDampingRatio)
```

#### Parameters

`dDampingRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The damping ratio.

### SetInnerCurvatureCenter\(double\)

Set ionner curvature center.

```csharp
public void SetInnerCurvatureCenter(double dInnerCurvatureCenter)
```

#### Parameters

`dInnerCurvatureCenter` [double](https://learn.microsoft.com/dotnet/api/system.double)

The ionner curvature center.

### SetInnerRacewayColor\(string\)

Set inner raceway color.

```csharp
public void SetInnerRacewayColor(string strColor)
```

#### Parameters

`strColor` [string](https://learn.microsoft.com/dotnet/api/system.string)

The inner raceway color.

### SetNumberOfBall\(uint\)

Set number of ball.

```csharp
public void SetNumberOfBall(uint dNumberOfBall)
```

#### Parameters

`dNumberOfBall` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The number of ball.

### SetOuterCurvatureCenter\(double\)

Set outer curvature center.

```csharp
public void SetOuterCurvatureCenter(double dOuterCurvatureCenter)
```

#### Parameters

`dOuterCurvatureCenter` [double](https://learn.microsoft.com/dotnet/api/system.double)

The outer curvature center.

### SetOuterRacewayColor\(string\)

Set outer raceway color.

```csharp
public void SetOuterRacewayColor(string strColor)
```

#### Parameters

`strColor` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outer raceway color.

### SetRadialClearance\(double\)

Set radial clearance.

```csharp
public void SetRadialClearance(double dRadialClearance)
```

#### Parameters

`dRadialClearance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radial clearance.

### SetRadiusOfBall\(double\)

Set radius of ball.

```csharp
public void SetRadiusOfBall(double dRadiusOfBall)
```

#### Parameters

`dRadiusOfBall` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius of ball.

### SetStiffness\(SplineValue, SplineValue, SplineValue, Variable, Variable, Variable\)

Sets the stiffness.

```csharp
public BearingStiffness SetStiffness(SplineValue svRadial, SplineValue svAxial, SplineValue svTilt, Variable varMaxRadial, Variable varMaxAxial, Variable varMaxTilt)
```

#### Parameters

`svRadial` SplineValue

The radial stiffness spline value.

`svAxial` SplineValue

The axial stiffness spline value.

`svTilt` SplineValue

The tilt stiffness spline value.

`varMaxRadial` Variable

The maximum radial stiffness variable value.

`varMaxAxial` Variable

The maximum axial stiffness variable value.

`varMaxTilt` Variable

The maximum tilt stiffness variable value.

#### Returns

 [BearingStiffness](VM.Managed.DAFUL.GearTrain.BearingStiffness.md)

### SetStiffnessType\(enStiffnessType\)

Set stiffness type.

```csharp
public void SetStiffnessType(PropertyBearing.enStiffnessType type)
```

#### Parameters

`type` [PropertyBearing](VM.Managed.DAFUL.GearTrain.PropertyBearing.md).[enStiffnessType](VM.Managed.DAFUL.GearTrain.PropertyBearing.enStiffnessType.md)

The stiffness type.

### SetStrength\(Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable, Variable\)

Sets the strength.

```csharp
public BearingStrength SetStrength(Variable varSpeed, Variable varAxialForce, Variable varRadialForce, Variable varTireRadius, Variable varf0, Variable varContactAngle, Variable vare, Variable varY, Variable varC0r, Variable varCr, Variable varPr, Variable varL10)
```

#### Parameters

`varSpeed` Variable

The speed.

`varAxialForce` Variable

The axial force.

`varRadialForce` Variable

The radial force.

`varTireRadius` Variable

The tire radius.

`varf0` Variable

The factor for calculation of basic static load rating.

`varContactAngle` Variable

The factor for calculation.

`vare` Variable

The factor for calculation.

`varY` Variable

The factor for calculation.

`varC0r` Variable

The basic static load rating.

`varCr` Variable

The basic dynamic load rating.

`varPr` Variable

The dynamic equivalent radial load.

`varL10` Variable

The L10.

#### Returns

 [BearingStrength](VM.Managed.DAFUL.GearTrain.BearingStrength.md)

### SetType\(enBearingType\)

Set type.

```csharp
public void SetType(PropertyBearing.enBearingType type)
```

#### Parameters

`type` [PropertyBearing](VM.Managed.DAFUL.GearTrain.PropertyBearing.md).[enBearingType](VM.Managed.DAFUL.GearTrain.PropertyBearing.enBearingType.md)

The type.

### SetUnloadContactAngle\(double\)

Set unload contact angle.

```csharp
public void SetUnloadContactAngle(double dUnloadContactAngle)
```

#### Parameters

`dUnloadContactAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The unload contact angle.


