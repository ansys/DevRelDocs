#  Class LeafSpring

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

This class is to represent the Leaf Spring.

```csharp
public class LeafSpring : Entity<PropertyLeafSpring>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyLeafSpring\> ← 
[LeafSpring](VM.Models.Pre.Force.LeafSpring.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IContainer, 
IEntity, 
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
IVisible, 
IDocumentOwner, 
INamed, 
INavigatorItem, 
IVisible, 
IMultiChangable, 
IHasProperty, 
IGroup, 
IDraw, 
IDrawIcon

#### Inherited Members

Entity<PropertyLeafSpring\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyLeafSpring\>.GetUnnamedObjectName\(object\), 
Entity<PropertyLeafSpring\>.FindLocal\(string\), 
Entity<PropertyLeafSpring\>.Property, 
EntityBase.Initialize\(Unit.ConvertFactor\), 
EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\), 
EntityBase.OnDeserializationForAttribute\(\), 
EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
EntityBase.LinkRequestDestroying\(object, LinkEventArgs\), 
EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
EntityBase.FixUp\(ObjectBase\), 
EntityBase.FindLocal\(string\), 
EntityBase.WriteTemplateImpl\(XmlWriter\), 
EntityBase.ReadTemplateImpl\(XmlReader\), 
EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
EntityBase.OnDeserialization\(object\), 
EntityBase.Name, 
EntityBase.FullName, 
EntityBase.NonSymmetricName, 
EntityBase.DisplayName, 
EntityBase.IsEnabled, 
EntityBase.Comment, 
EntityBase.HasLayerExplicitly, 
EntityBase.UntypedProperty, 
EntityBase.IsFileProperty, 
EntityBase.Layer, 
EntityBase.IsVisible, 
ContainerObject<EntityEventCore\>.Find\(string\), 
ContainerObject<EntityEventCore\>.FindLocal\(string\), 
ContainerObject<EntityEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<EntityEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<EntityEventCore\>.GetKey\(\), 
Object<EntityEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<EntityEventCore\>.SetIconColor\(Canvas\), 
Object<EntityEventCore\>.OnDeserialization\(object\), 
Object<EntityEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<EntityEventCore\>.RollbackEvent\(\), 
Object<EntityEventCore\>.OnDeserializedCore\(object\), 
Object<EntityEventCore\>.Key, 
Object<EntityEventCore\>.UntypedEventCore, 
Object<EntityEventCore\>.EventCore, 
Object<EntityEventCore\>.Attributes, 
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

### <a id="VM_Models_Pre_Force_LeafSpring__ctor"></a> LeafSpring\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.LeafSpring" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LeafSpring()
```

### <a id="VM_Models_Pre_Force_LeafSpring__ctor_System_String_"></a> LeafSpring\(string\)

Initializes a new instance of the <xref href="VM.Models.Pre.Force.LeafSpring" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LeafSpring(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the <xref href="VM.Models.Pre.Force.LeafSpring" data-throw-if-not-resolved="false"></xref>.

## Fields

### <a id="VM_Models_Pre_Force_LeafSpring_ActionMarkerName"></a> ActionMarkerName

Gets the action marker name.

```csharp
public const string ActionMarkerName = "ActionMarker"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_AxleToCenterBoltName"></a> AxleToCenterBoltName

Gets the axle to center bolt constraint name.

```csharp
public const string AxleToCenterBoltName = "AxleToCenterBolt"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_BaseMarkerName"></a> BaseMarkerName

Gets the base marker name.

```csharp
public const string BaseMarkerName = "BaseMarker"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_CenterBoltName"></a> CenterBoltName

Gets the center bolt name.

```csharp
public const string CenterBoltName = "CenterBolt"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_ClipNamePrefix"></a> ClipNamePrefix

Gets the clip name prefix.

```csharp
public const string ClipNamePrefix = "Clip"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_FrontEyeName"></a> FrontEyeName

Gets the front eye name.

```csharp
public const string FrontEyeName = "FrontEye"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_FrontEyeToBeamFixedName"></a> FrontEyeToBeamFixedName

Gets the front eye to beam fixed name.

```csharp
public const string FrontEyeToBeamFixedName = "FrontEyeToBeamFixed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_GroundToEyeName"></a> GroundToEyeName

Gets the ground to eye constraint name.

```csharp
public const string GroundToEyeName = "GroundToEye"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_GroundToShackleName"></a> GroundToShackleName

Gets the ground to shackle constraint name.

```csharp
public const string GroundToShackleName = "GroundToShackle"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_LeafNamePrefix"></a> LeafNamePrefix

Gets the leaf name prefix.

```csharp
public const string LeafNamePrefix = "Leaf"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_LeafToClipFunctionName"></a> LeafToClipFunctionName

Gets the leaf to clip function name.

```csharp
public const string LeafToClipFunctionName = "LeafToClip"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_LeafToLeafFunctionName"></a> LeafToLeafFunctionName

Gets the leaf to leaf function name.

```csharp
public const string LeafToLeafFunctionName = "LeafToLeaf"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_RearEyeName"></a> RearEyeName

Gets the rear eye name.

```csharp
public const string RearEyeName = "RearEye"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_RearEyeToBeamFixedName"></a> RearEyeToBeamFixedName

Gets the rear eye to beam fixed name.

```csharp
public const string RearEyeToBeamFixedName = "RearEyeToBeamFixed"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_ShackleName"></a> ShackleName

Gets the front shackle name.

```csharp
public const string ShackleName = "Shackle"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_ShackleToEyeName"></a> ShackleToEyeName

Gets the shackle to eye constraint name.

```csharp
public const string ShackleToEyeName = "ShackleToEye"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Pre_Force_LeafSpring_Assembly"></a> Assembly

Gets or sets the assembly.

```csharp
public Assembly Assembly { get; set; }
```

#### Property Value

 [Assembly](VM.Models.Pre.Force.Assembly.md)

### <a id="VM_Models_Pre_Force_LeafSpring_Axle"></a> Axle

Gets or sets the axle.

```csharp
public IConnectable Axle { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Models_Pre_Force_LeafSpring_EyePosition"></a> EyePosition

Gets or sets the eye position.

```csharp
public PointBase EyePosition { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Models_Pre_Force_LeafSpring_FrontFrame"></a> FrontFrame

Gets or sets the front frame.

```csharp
public IConnectable FrontFrame { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Models_Pre_Force_LeafSpring_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_Force_LeafSpring_Hide"></a> Hide

Gets or sets the hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_Force_LeafSpring_LinkAxle"></a> LinkAxle

Gets or sets the axle.

```csharp
public Linker<IConnectable> LinkAxle { get; set; }
```

#### Property Value

 Linker<IConnectable\>

### <a id="VM_Models_Pre_Force_LeafSpring_LinkFrontFrame"></a> LinkFrontFrame

Gets or sets the front frame.

```csharp
public Linker<IConnectable> LinkFrontFrame { get; set; }
```

#### Property Value

 Linker<IConnectable\>

### <a id="VM_Models_Pre_Force_LeafSpring_LinkRearFrame"></a> LinkRearFrame

Gets or sets the rear frame.

```csharp
public Linker<IConnectable> LinkRearFrame { get; set; }
```

#### Property Value

 Linker<IConnectable\>

### <a id="VM_Models_Pre_Force_LeafSpring_RearFrame"></a> RearFrame

Gets or sets the rear frame.

```csharp
public IConnectable RearFrame { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Models_Pre_Force_LeafSpring_ReferenceFrame"></a> ReferenceFrame

Gets or sets the reference frame.

```csharp
public TransformBase ReferenceFrame { get; set; }
```

#### Property Value

 TransformBase

### <a id="VM_Models_Pre_Force_LeafSpring_ShacklePosition"></a> ShacklePosition

Gets or sets the shackle position.

```csharp
public PointBase ShacklePosition { get; set; }
```

#### Property Value

 PointBase

## Methods

### <a id="VM_Models_Pre_Force_LeafSpring_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

draw

```csharp
public void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas.

### <a id="VM_Models_Pre_Force_LeafSpring_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Models_Pre_Force_LeafSpring_GetCenterBoltToLeafName_System_Int32_System_Int32_"></a> GetCenterBoltToLeafName\(int, int\)

Gets the center bolt to leaf constraint name.

```csharp
public static string GetCenterBoltToLeafName(int leafIndex, int index)
```

#### Parameters

`leafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The leaf index.

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The constraint index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The center bolt to leaf constraint name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetClipName_System_Int32_"></a> GetClipName\(int\)

Gets the clip name.

```csharp
public static string GetClipName(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The clip index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The clip name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetClipToLeafBushName_System_Int32_System_Int32_"></a> GetClipToLeafBushName\(int, int\)

Gets the clip to leaf bush name.

```csharp
public static string GetClipToLeafBushName(int clipIndex, int leafIndex)
```

#### Parameters

`clipIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The clip index.

`leafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The leaf index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The clip to leaf bush name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetClipToLeafFixedName_System_Int32_"></a> GetClipToLeafFixedName\(int\)

Gets the clip to leaf fixed name.

```csharp
public static string GetClipToLeafFixedName(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The clip index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The clip to leaf fixed name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetClipToLeafVectorForceName_System_Int32_System_Int32_"></a> GetClipToLeafVectorForceName\(int, int\)

Gets the clip to leaf vector force name.

```csharp
public static string GetClipToLeafVectorForceName(int clipIndex, int leafIndex)
```

#### Parameters

`clipIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The clip index.

`leafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The leaf index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The clip to leaf vector force name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetClipUpperMarkerName_System_Int32_"></a> GetClipUpperMarkerName\(int\)

Gets the clip upper marker name.

```csharp
public static string GetClipUpperMarkerName(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The clip index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The clip upper marker name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetLeafName_System_Int32_"></a> GetLeafName\(int\)

Gets the leaf name.

```csharp
public static string GetLeafName(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The leaf index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The leaf name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetLeafToLeafBushName_System_Int32_System_Int32_System_Int32_System_Int32_"></a> GetLeafToLeafBushName\(int, int, int, int\)

Gets the leaf to leaf bush name.

```csharp
public static string GetLeafToLeafBushName(int baseLeafIndex, int baseBodyIndex, int actionLeafIndex, int actionBodyIndex)
```

#### Parameters

`baseLeafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The base leaf index.

`baseBodyIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The base body index.

`actionLeafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The action leaf index.

`actionBodyIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The action body index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The leaf to leaf bush name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetLeafToLeafVectorForceName_System_Int32_System_Int32_System_Int32_System_Int32_"></a> GetLeafToLeafVectorForceName\(int, int, int, int\)

Gets the leaf to leaf vector force name.

```csharp
public static string GetLeafToLeafVectorForceName(int baseLeafIndex, int baseBodyIndex, int actionLeafIndex, int actionBodyIndex)
```

#### Parameters

`baseLeafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The base leaf index.

`baseBodyIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The base body index.

`actionLeafIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The action leaf index.

`actionBodyIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The action body index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The leaf to leaf vector force name.

### <a id="VM_Models_Pre_Force_LeafSpring_GetRepositionMatrix"></a> GetRepositionMatrix\(\)

Gets the reposition matrix.

```csharp
public TMatrix? GetRepositionMatrix()
```

#### Returns

 TMatrix?

The reposition matrix.

### <a id="VM_Models_Pre_Force_LeafSpring_PostAddToDocument"></a> PostAddToDocument\(\)

```csharp
public override void PostAddToDocument()
```

### <a id="VM_Models_Pre_Force_LeafSpring_RaisePropertyChanged_System_String_"></a> RaisePropertyChanged\(string\)

```csharp
public override void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_Force_LeafSpring_ReDraw"></a> ReDraw\(\)

Redraw

```csharp
public virtual void ReDraw()
```

### <a id="VM_Models_Pre_Force_LeafSpring_ReDrawForHistory"></a> ReDrawForHistory\(\)

Redraw for undo/redo

```csharp
public void ReDrawForHistory()
```

