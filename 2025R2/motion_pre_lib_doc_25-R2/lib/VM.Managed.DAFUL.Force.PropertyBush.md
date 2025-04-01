# Class PropertyBush

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFB.dll  

This class is to represent the bush force properties.

```csharp
public class PropertyBush : PropertyForce, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IArgument
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyForce](VM.Managed.DAFUL.Force.PropertyForce.md) ← 
[PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md)

#### Derived

[PropertyBushFile](VM.Managed.DAFUL.Force.PropertyBushFile.md)

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
IHasID, 
IArgument

#### Inherited Members

[PropertyForce.ArgumentType](VM.Managed.DAFUL.Force.PropertyForce.md\#VM\_Managed\_DAFUL\_Force\_PropertyForce\_ArgumentType), 
[PropertyForce.ReferenceType](VM.Managed.DAFUL.Force.PropertyForce.md\#VM\_Managed\_DAFUL\_Force\_PropertyForce\_ReferenceType), 
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

### PropertyBush\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.PropertyBush" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyBush()
```

### PropertyBush\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.PropertyBush" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected PropertyBush(string strProxyName, string strBuildInfo)
```

#### Parameters

`strProxyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the proxy.

`strBuildInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The build info.

## Properties

### ArgumentType

Gets the type of the argument

```csharp
public override ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### GraphicDiameter

```csharp
public double GraphicDiameter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GraphicLength

```csharp
public double GraphicLength { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### IsUsePreTorque

Gets or sets a value indicating whether this instance use pre torque.

```csharp
public bool IsUsePreTorque { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUsePreload

Gets or sets a value indicating whether this instance use preload.

```csharp
public bool IsUsePreload { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsUseStaticBushing

Gets or sets a value indicating whether this instance use static bushing.

```csharp
public bool IsUseStaticBushing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PreTorqueX

Gets or sets the pre torque of x direction.

```csharp
public ExpressionValueVariable PreTorqueX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PreTorqueY

Gets or sets the pre torque of y direction.

```csharp
public ExpressionValueVariable PreTorqueY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PreTorqueZ

Gets or sets the pre torque of z direction.

```csharp
public ExpressionValueVariable PreTorqueZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PreloadX

Gets or sets the preload of x direction.

```csharp
public ExpressionValueVariable PreloadX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PreloadY

Gets or sets the preload of y direction.

```csharp
public ExpressionValueVariable PreloadY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### PreloadZ

Gets or sets the preload of z direction.

```csharp
public ExpressionValueVariable PreloadZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### ReferenceType

Gets the type of the array for argument.

```csharp
public override string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### RotCType

Gets the input type of the rotational damping.

```csharp
[Obsolete]
public PropertyBush.InputType RotCType { get; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### RotCX

Gets or sets the rotational damping coefficient of x direction.

```csharp
public ExpressionValueVariable RotCX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RotCXSpline

Gets or sets the rotational damping spline of x direction.

```csharp
public Spline RotCXSpline { get; set; }
```

#### Property Value

 Spline

### RotCY

Gets or sets the rotational damping coefficient of y direction.

```csharp
public ExpressionValueVariable RotCY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RotCYSpline

Gets or sets the rotational damping spline of y direction.

```csharp
public Spline RotCYSpline { get; set; }
```

#### Property Value

 Spline

### RotCZ

Gets or sets the rotational damping coefficient of z direction.

```csharp
public ExpressionValueVariable RotCZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RotCZSpline

Gets or sets the rotational damping spline of z direction.

```csharp
public Spline RotCZSpline { get; set; }
```

#### Property Value

 Spline

### RotKType

Gets the input type of the rotational stiffness.

```csharp
[Obsolete]
public PropertyBush.InputType RotKType { get; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### RotKX

Gets or sets the rotational stiffness coefficient of x direction.

```csharp
public ExpressionValueVariable RotKX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RotKXSpline

Gets or sets the rotational stiffness spline of x direction.

```csharp
public Spline RotKXSpline { get; set; }
```

#### Property Value

 Spline

### RotKY

Gets or sets the rotational stiffness coefficient of y direction.

```csharp
public ExpressionValueVariable RotKY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RotKYSpline

Gets or sets the rotational stiffness spline of y direction.

```csharp
public Spline RotKYSpline { get; set; }
```

#### Property Value

 Spline

### RotKZ

Gets or sets the rotational stiffness coefficient of z direction.

```csharp
public ExpressionValueVariable RotKZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### RotKZSpline

Gets or sets the rotational stiffness spline of z direction.

```csharp
public Spline RotKZSpline { get; set; }
```

#### Property Value

 Spline

### RotationalOneSideBushingX

Gets or sets the flag of rotational one side bushing X.

```csharp
public bool RotationalOneSideBushingX { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RotationalOneSideBushingY

Gets or sets the flag of rotational one side bushing Y.

```csharp
public bool RotationalOneSideBushingY { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RotationalOneSideBushingZ

Gets or sets the flag of rotational one side bushing Z.

```csharp
public bool RotationalOneSideBushingZ { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TransCType

Gets the input type of the translational damping.

```csharp
[Obsolete]
public PropertyBush.InputType TransCType { get; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TransCX

Gets or sets the translational damping coefficient of x direction.

```csharp
public ExpressionValueVariable TransCX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### TransCXSpline

Gets or sets the translational damping spline of x direction.

```csharp
public Spline TransCXSpline { get; set; }
```

#### Property Value

 Spline

### TransCY

Gets or sets the translational damping coefficient of y direction.

```csharp
public ExpressionValueVariable TransCY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### TransCYSpline

Gets or sets the translational damping spline of y direction.

```csharp
public Spline TransCYSpline { get; set; }
```

#### Property Value

 Spline

### TransCZ

Gets or sets the translational damping coefficient of z direction.

```csharp
public ExpressionValueVariable TransCZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### TransCZSpline

Gets or sets the translational damping spline of z direction.

```csharp
public Spline TransCZSpline { get; set; }
```

#### Property Value

 Spline

### TransKType

Gets the input type of the translational stiffness.

```csharp
[Obsolete]
public PropertyBush.InputType TransKType { get; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TransKX

Gets or sets the translational stiffness coefficient of x direction.

```csharp
public ExpressionValueVariable TransKX { get; set; }
```

#### Property Value

 ExpressionValueVariable

### TransKXSpline

Gets or sets the translational stiffness spline of x direction.

```csharp
public Spline TransKXSpline { get; set; }
```

#### Property Value

 Spline

### TransKY

Gets or sets the translational stiffness coefficient of y direction.

```csharp
public ExpressionValueVariable TransKY { get; set; }
```

#### Property Value

 ExpressionValueVariable

### TransKYSpline

Gets or sets the translational stiffness spline of y direction.

```csharp
public Spline TransKYSpline { get; set; }
```

#### Property Value

 Spline

### TransKZ

Gets or sets the translational stiffness coefficient of z direction.

```csharp
public ExpressionValueVariable TransKZ { get; set; }
```

#### Property Value

 ExpressionValueVariable

### TransKZSpline

Gets or sets the translational stiffness spline of z direction.

```csharp
public Spline TransKZSpline { get; set; }
```

#### Property Value

 Spline

### TranslationalOneSideBushingX

Gets or sets the flag of translational one side bushing X.

```csharp
public bool TranslationalOneSideBushingX { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TranslationalOneSideBushingY

Gets or sets the flag of translational one side bushing Y.

```csharp
public bool TranslationalOneSideBushingY { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TranslationalOneSideBushingZ

Gets or sets the flag of translational one side bushing Z.

```csharp
public bool TranslationalOneSideBushingZ { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TypeOfRotCX

Gets or sets the type of the rot CX.
Use SetRotCXType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfRotCX { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfRotCY

Gets or sets the type of the rot CY.
Use SetRotCYType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfRotCY { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfRotCZ

Gets or sets the type of the rot CZ.
Use SetRotCZType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfRotCZ { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfRotKX

Gets or sets the type of the rot KX.
Use SetRotKXType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfRotKX { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfRotKY

Gets or sets the type of the rot KY.
Use SetRotKYType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfRotKY { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfRotKZ

Gets or sets the type of the rot KZ.
Use SetRotKZType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfRotKZ { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfTransCX

Gets or sets the type of the trans CX.
Use SetTransCXType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfTransCX { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfTransCY

Gets or sets the type of the trans CY.
Use SetTransCYType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfTransCY { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfTransCZ

Gets or sets the type of the trans CZ.
Use SetTransCZType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfTransCZ { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfTransKX

Gets or sets the type of the trans KX.
Use SetTransKXType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfTransKX { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfTransKY

Gets or sets the type of the trans KY.
Use SetTransKYType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfTransKY { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

### TypeOfTransKZ

Gets or sets the type of the trans KZ.
Use SetTransKZType() when this instance sets for undo/redo

```csharp
public PropertyBush.InputType TypeOfTransKZ { get; set; }
```

#### Property Value

 [PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md).[InputType](VM.Managed.DAFUL.Force.PropertyBush.InputType.md)

## Methods

### Draw\(Canvas, TMatrix, TMatrix, bool\)

<p>Draws the icon.</p>

```csharp
public override void Draw(Canvas canvas, TMatrix matTBase, TMatrix matTAct, bool bHide)
```

#### Parameters

`canvas` Canvas

<p>The canvas has icon information.</p>

`matTBase` TMatrix

<p>The base transformation.</p>

`matTAct` TMatrix

<p>The action transformation.</p>

`bHide` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<p>The hide flag.</p>

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

### OnLinkReserved\(ILink, object, EventArgs\)

```csharp
protected override void OnLinkReserved(ILink link, object objNotifier, EventArgs args)
```

#### Parameters

`link` ILink

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)


