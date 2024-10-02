#  Class Face

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the face in topology.

```csharp
public class Face : Topology, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IDrawFacet, IFaceInformation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[ObjectBase](VM.Managed.ObjectBase.md) ← 
[Object<ObjectEventCore\>](VM.Managed.Object\-1.md) ← 
[Topology](VM.Managed.CAD.Topology.md) ← 
[Face](VM.Managed.CAD.Face.md)

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
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IHistoryObjectSerializable, 
[IAttributeContainer](VM.Managed.IAttributeContainer.md), 
[IDrawFacet](VM.Managed.IDrawFacet.md), 
[IFaceInformation](VM.Managed.IFaceInformation.md)

#### Inherited Members

[Topology.GetTypeName\(\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_GetTypeName), 
[Topology.Initialize\(Unit.ConvertFactor\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Topology.ResetInvalidEntity\(\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_ResetInvalidEntity), 
[Topology.GetPrefixName\(\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_GetPrefixName), 
[Topology.ConnectProxy\(\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_ConnectProxy), 
[Topology.ToplogyInfo\(\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_ToplogyInfo), 
[Topology.OnDeserialization\(object\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_OnDeserialization\_System\_Object\_), 
[Topology.GetName\(\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_GetName), 
[Topology.InitializeTopologyName\(bool\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_InitializeTopologyName\_System\_Boolean\_), 
[Topology.GetUnnamedObjectName\(object\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_GetUnnamedObjectName\_System\_Object\_), 
[Topology.GetColor\(ref Color\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_GetColor\_System\_Drawing\_Color\_\_), 
[Topology.ToplogyInfoImpl\(\)](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_ToplogyInfoImpl), 
[Topology.IndexCont](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_IndexCont), 
[Topology.IsValid](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_IsValid), 
[Topology.Body](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_Body), 
[Topology.Index](VM.Managed.CAD.Topology.md\#VM\_Managed\_CAD\_Topology\_Index), 
[Object<ObjectEventCore\>.GetKey\(\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_GetKey), 
[Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Object<ObjectEventCore\>.SetIconColor\(Canvas\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_SetIconColor\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[Object<ObjectEventCore\>.OnDeserialization\(object\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_OnDeserialization\_System\_Object\_), 
[Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[Object<ObjectEventCore\>.RollbackEvent\(\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_RollbackEvent), 
[Object<ObjectEventCore\>.OnDeserializedCore\(object\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_OnDeserializedCore\_System\_Object\_), 
[Object<ObjectEventCore\>.Key](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_Key), 
[Object<ObjectEventCore\>.UntypedEventCore](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_UntypedEventCore), 
[Object<ObjectEventCore\>.EventCore](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_EventCore), 
[Object<ObjectEventCore\>.Attributes](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_Attributes), 
[ObjectBase.ReplaceEventCore\(ObjectEventCore\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ReplaceEventCore\_VM\_Managed\_ObjectEventCore\_), 
[ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetModifiedCore\_VM\_Managed\_ModifiedResult\_ModifiedType\_), 
[ObjectBase.AddPostDeserialize\(StreamingContext\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_AddPostDeserialize\_System\_Runtime\_Serialization\_StreamingContext\_), 
[ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkAddedToDocumentCore\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[ObjectBase.SetModified\(ModifiedResult.ModifiedType\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetModified\_VM\_Managed\_ModifiedResult\_ModifiedType\_), 
[ObjectBase.SetModified\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetModified), 
[ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetModified\_VM\_Managed\_ModifiedResult\_ModifiedType\_VM\_Models\_Pre\_IDocument\_), 
[ObjectBase.DestroyObject\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DestroyObject\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.DestroyObject\(DestroyEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DestroyObject\_VM\_Managed\_DestroyEventArgs\_), 
[ObjectBase.DestroyObject\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DestroyObject), 
[ObjectBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ObjectBase.FixUp\(ObjectBase\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_FixUp\_VM\_Managed\_ObjectBase\_), 
[ObjectBase.DoWorkAfterUpdateContents\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DoWorkAfterUpdateContents), 
[ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetOldNameWithNewEntity\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
[ObjectBase.SetIconColor\(Canvas\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetIconColor\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[ObjectBase.RemoveFromCreatedList\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_RemoveFromCreatedList), 
[ObjectBase.PostAddToDocument\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_PostAddToDocument), 
[ObjectBase.PostRemoveFromDocument\(Document\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_PostRemoveFromDocument\_VM\_Managed\_Document\_), 
[ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_GetArgumentList\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_ObjectBase\_\_), 
[ObjectBase.ResetInvalidEntity\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ResetInvalidEntity), 
[ObjectBase.OnDeserialization\(object\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnDeserialization\_System\_Object\_), 
[ObjectBase.IsSerializableEvent\(Delegate\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsSerializableEvent\_System\_Delegate\_), 
[ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_CheckAndUpdateLink\_System\_Collections\_Generic\_HashSet\_VM\_Managed\_ObjectBase\_\_), 
[ObjectBase.Verify\(VerifiedResult\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Verify\_VM\_Managed\_VerifiedResult\_), 
[ObjectBase.ConnectProxy\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ConnectProxy), 
[ObjectBase.RollbackEvent\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_RollbackEvent), 
[ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRequestUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRemovedFromDocument\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[ObjectBase.DisposeManagedResources\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DisposeManagedResources), 
[ObjectBase.GetDestroyEventExtraData\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_GetDestroyEventExtraData), 
[ObjectBase.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[ObjectBase.CreateEntityWhenUpdateContents\(Action\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_CreateEntityWhenUpdateContents\_System\_Action\_), 
[ObjectBase.GetObjectByKey\(UIntPtr\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_GetObjectByKey\_System\_UIntPtr\_), 
[ObjectBase.FindObjectOnXmlDeserialize\(string\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_FindObjectOnXmlDeserialize\_System\_String\_), 
[ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UpdateContents\_System\_Xml\_XmlReader\_VM\_Managed\_ObjectBase\_System\_String\_), 
[ObjectBase.UpdateContents\(XmlReader, ObjectBase\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UpdateContents\_System\_Xml\_XmlReader\_VM\_Managed\_ObjectBase\_), 
[ObjectBase.UpdateContents\(string, string\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UpdateContents\_System\_String\_System\_String\_), 
[ObjectBase.UpdateContents\(string\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UpdateContents\_System\_String\_), 
[ObjectBase.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsEqualArray\_\_1\_\_\_0\_\_\_\_\_0\_\_\_), 
[ObjectBase.IsEqualList\(List<double\>, List<double\>\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsEqualList\_System\_Collections\_Generic\_List\_System\_Double\_\_System\_Collections\_Generic\_List\_System\_Double\_\_), 
[ObjectBase.SetContainer\(IOwned, bool\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[ObjectBase.GetTargetListForUpdate\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_GetTargetListForUpdate), 
[ObjectBase.SkipUpdateObjectImpl\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SkipUpdateObjectImpl), 
[ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.raise\_Destroying\(object, Identifier\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_Destroying\_System\_Object\_VM\_Identifier\_), 
[ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnContentsUpdated\_System\_Object\_System\_EventArgs\_), 
[ObjectBase.Dispose\(bool\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Dispose\_System\_Boolean\_), 
[ObjectBase.SkipModified](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SkipModified), 
[ObjectBase.ClearChildInfoBeforeDeserialize](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ClearChildInfoBeforeDeserialize), 
[ObjectBase.KeyImpl](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_KeyImpl), 
[ObjectBase.ID](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ID), 
[ObjectBase.TopologyEntityTypeName](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_TopologyEntityTypeName), 
[ObjectBase.ObjectStateForCircularError](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ObjectStateForCircularError), 
[ObjectBase.ObjectState](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ObjectState), 
[ObjectBase.IsChildExternable](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsChildExternable), 
[ObjectBase.IsExternable](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsExternable), 
[ObjectBase.Container](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Container), 
[ObjectBase.Owner](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Owner), 
[ObjectBase.Document](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Document), 
[ObjectBase.UntypedEventCore](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UntypedEventCore), 
[ObjectBase.KernelKey](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_KernelKey), 
[ObjectBase.Key](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Key), 
[ObjectBase.OnContentsUpdated](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnContentsUpdated), 
[ObjectBase.OnRemoved](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnRemoved), 
[ObjectBase.OnAdded](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnAdded), 
[ObjectBase.Destroying](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Destroying), 
[ObjectBase.OnDestroy](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnDestroy), 
[ObjectBase.OnDestroying](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnDestroying), 
[ObjectBase.OnUpdate](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnUpdate), 
[ObjectBase.OnUpdating](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnUpdating), 
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

### <a id="VM_Managed_CAD_Face__ctor"></a> Face\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Face()
```

## Properties

### <a id="VM_Managed_CAD_Face_FacetPositions"></a> FacetPositions

Gets or sets the facet position array.

```csharp
public VectorBase[] FacetPositions { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)\[\]

## Methods

### <a id="VM_Managed_CAD_Face_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws face.

```csharp
public void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_CAD_Face_DrawFacet_VM_CAD_Kernel_Render_Canvas_"></a> DrawFacet\(Canvas\)

Draws facet.

```csharp
void DrawFacet(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_CAD_Face_DrawFacetByDefaultParameters_VM_CAD_Kernel_Render_Canvas_"></a> DrawFacetByDefaultParameters\(Canvas\)

Draws facet.

```csharp
void DrawFacetByDefaultParameters(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_CAD_Face_DrawFacetInGlobal_VM_CAD_Kernel_Render_Canvas_"></a> DrawFacetInGlobal\(Canvas\)

Draw facet in global.

```csharp
void DrawFacetInGlobal(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas.

### <a id="VM_Managed_CAD_Face_GetArea"></a> GetArea\(\)

Get area of face.

```csharp
public double GetArea()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_Face_GetDefaultMaxPenetration_System_Double__"></a> GetDefaultMaxPenetration\(ref double\)

Gets the default maximum penetration.

```csharp
public bool GetDefaultMaxPenetration(ref double dMaxPenetration)
```

#### Parameters

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value holds maximum penetration.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_CAD_Face_GetFacetInfo_VM_Managed_VectorBase____System_Int32____"></a> GetFacetInfo\(ref VectorBase\[\], ref int\[\]\)

Get facet information.

```csharp
public void GetFacetInfo(ref VectorBase[] arPt, ref int[] arConnectivity)
```

#### Parameters

`arPt` [VectorBase](VM.Managed.VectorBase.md)\[\]

The facet point array.

`arConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The facet connetivity array.

### <a id="VM_Managed_CAD_Face_GetFacetMidPointInfo_VM_Managed_VectorBase____"></a> GetFacetMidPointInfo\(ref VectorBase\[\]\)

Get facet middle point information.

```csharp
public void GetFacetMidPointInfo(ref VectorBase[] arPt)
```

#### Parameters

`arPt` [VectorBase](VM.Managed.VectorBase.md)\[\]

The facet middle point array.

### <a id="VM_Managed_CAD_Face_GetPointAndDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__System_Double_System_Double_"></a> GetPointAndDirection\(ref VectorBase, ref VectorBase, double, double\)

```csharp
public bool GetPointAndDirection(ref VectorBase vecPosition, ref VectorBase vecDirection, double dU, double dV)
```

#### Parameters

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

`vecDirection` [VectorBase](VM.Managed.VectorBase.md)

`dU` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dV` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Face_GetPointAndDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPointAndDirection\(ref VectorBase, ref VectorBase\)

Gets the point and direction.

```csharp
public bool GetPointAndDirection(ref VectorBase vecPosition, ref VectorBase vecDirection)
```

#### Parameters

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

The position.

`vecDirection` [VectorBase](VM.Managed.VectorBase.md)

The direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_CAD_Face_GetPointAndDirectionFromBoundaryEdge_VM_Managed_VectorBase__VM_Managed_VectorBase__System_Double_System_UInt32_"></a> GetPointAndDirectionFromBoundaryEdge\(ref VectorBase, ref VectorBase, double, uint\)

```csharp
public bool GetPointAndDirectionFromBoundaryEdge(ref VectorBase vecPosition, ref VectorBase vecDirection, double dU, uint nIndex)
```

#### Parameters

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

`vecDirection` [VectorBase](VM.Managed.VectorBase.md)

`dU` [double](https://learn.microsoft.com/dotnet/api/system.double)

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Face_GetPointAndDirectionFromFacet_VM_Managed_VectorBase____VM_Managed_VectorBase____"></a> GetPointAndDirectionFromFacet\(ref VectorBase\[\], ref VectorBase\[\]\)

Gets the point and direction from facet.

```csharp
public bool GetPointAndDirectionFromFacet(ref VectorBase[] arPosition, ref VectorBase[] arDirection)
```

#### Parameters

`arPosition` [VectorBase](VM.Managed.VectorBase.md)\[\]

The position.

`arDirection` [VectorBase](VM.Managed.VectorBase.md)\[\]

The direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_CAD_Face_GetPointAndDirectionFromFacet_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetPointAndDirectionFromFacet\(ref VectorBase, ref VectorBase\)

Gets the point and direction from facet.

```csharp
public bool GetPointAndDirectionFromFacet(ref VectorBase vecPosition, ref VectorBase vecDirection)
```

#### Parameters

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

The position.

`vecDirection` [VectorBase](VM.Managed.VectorBase.md)

The direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_CAD_Face_GetTypeName"></a> GetTypeName\(\)

Gets the name of topology(edge, face, vertex).

```csharp
public override string GetTypeName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of topology

### <a id="VM_Managed_CAD_Face_IsReverseNormalDirection"></a> IsReverseNormalDirection\(\)

Determines whether is [reverse normal direction].

```csharp
public bool IsReverseNormalDirection()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [reverse normal direction]; otherwise, <code>false</code>.

### <a id="VM_Managed_CAD_Face_IsReverseNormalDirection_System_Boolean_"></a> IsReverseNormalDirection\(bool\)

Determines whether is [reverse normal direction] [the toggle state].

```csharp
public bool IsReverseNormalDirection(bool bToggle)
```

#### Parameters

`bToggle` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> normal direction is moving currnet's opposite state.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [reverse normal direction] [the toggle state]; otherwise, <code>false</code>.

### <a id="VM_Managed_CAD_Face_IsSphere"></a> IsSphere\(\)

Wheather face is sphere or not.

```csharp
public bool IsSphere()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Face_RollbackNormalDirection"></a> RollbackNormalDirection\(\)

Roll back normal direction.

```csharp
public void RollbackNormalDirection()
```

### <a id="VM_Managed_CAD_Face_SetGeometryRepresentation_System_String_System_String_System_Boolean_"></a> SetGeometryRepresentation\(string, string, bool\)

Set geometry representation.

```csharp
bool SetGeometryRepresentation(string strGeom, string strDefaultGeom, bool bUseRedraw)
```

#### Parameters

`strGeom` [string](https://learn.microsoft.com/dotnet/api/system.string)

The geometry information.

`strDefaultGeom` [string](https://learn.microsoft.com/dotnet/api/system.string)

The geometry information when checked default value.

`bUseRedraw` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The redraw flag.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Face_ToplogyInfo"></a> ToplogyInfo\(\)

```csharp
protected override string ToplogyInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

