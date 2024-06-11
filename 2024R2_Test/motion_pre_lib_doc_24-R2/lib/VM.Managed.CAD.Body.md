# Class Body

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the body(solid).

```csharp
public class Body : Object<ObjectEventCore>, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IReferencable, ITransformable, INavigatorItem, IContainer, ILinkContainer, IOwned, IHasID, IVisible, IMultiChangable, IEnabled, ITransparentable, IPartMarkerParent, IDrawFacet, IPostDeserialized
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[ObjectBase](VM.Managed.ObjectBase.md) ← 
[Object<ObjectEventCore\>](VM.Managed.Object\-1.md) ← 
[Body](VM.Managed.CAD.Body.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IHistoryObjectSerializable, 
[IAttributeContainer](VM.Managed.IAttributeContainer.md), 
[IReferencable](VM.Managed.IReferencable.md), 
[ITransformable](VM.Managed.ITransformable.md), 
[INavigatorItem](VM.Managed.INavigatorItem.md), 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
[IVisible](VM.Managed.IVisible.md), 
[IMultiChangable](VM.Managed.IMultiChangable.md), 
IEnabled, 
[ITransparentable](VM.Managed.ITransparentable.md), 
[IPartMarkerParent](VM.Managed.IPartMarkerParent.md), 
[IDrawFacet](VM.Managed.IDrawFacet.md), 
IPostDeserialized

#### Inherited Members

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

### Body\(Builder\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Body(Builder builder)
```

#### Parameters

`builder` [Builder](VM.Managed.CAD.Builder.md)

The body's builder.

### Body\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Body()
```

## Fields

### g\_dAccuracyForCADImportMassCalculate

This value is accuracy for [cad import mass calculate].

```csharp
public static double g_dAccuracyForCADImportMassCalculate
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### g\_dAccuracyForMassCalculate

This value is accuracy for [mass calculate].

```csharp
public static double g_dAccuracyForMassCalculate
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### AccuracyForMassCalc

Gets or sets the accuracy for [mass calculate].

```csharp
public double AccuracyForMassCalc { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Builder

Gets or sets the builder.

```csharp
public Builder Builder { get; set; }
```

#### Property Value

 [Builder](VM.Managed.CAD.Builder.md)

### Edges

Gets or sets the edges.

```csharp
public Body.EdgeContainer Edges { get; set; }
```

#### Property Value

 [Body](VM.Managed.CAD.Body.md).[EdgeContainer](VM.Managed.CAD.Body.EdgeContainer.md)

### Faces

Gets or sets the faces.

```csharp
public Body.FaceContainer Faces { get; set; }
```

#### Property Value

 [Body](VM.Managed.CAD.Body.md).[FaceContainer](VM.Managed.CAD.Body.FaceContainer.md)

### FacetAspectRatio

Gets or sets the facet aspect ratio.

```csharp
public ExpressionValueVariable FacetAspectRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### IndexCont

Gets the index container.

```csharp
public Body.IndexContainer IndexCont { get; set; }
```

#### Property Value

 [Body](VM.Managed.CAD.Body.md).[IndexContainer](VM.Managed.CAD.Body.IndexContainer.md)

### Invalid

```csharp
public bool Invalid { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsEnabled

Gets or sets IsEnabled state.

```csharp
bool IsEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsVisible

Gets or sets the layer.

```csharp
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Layer

Gets or sets the layer.

```csharp
Layer Layer { get; set; }
```

#### Property Value

 [Layer](VM.Managed.Layer.md)

### Material

Gets or sets the material.

```csharp
public IMaterial Material { get; set; }
```

#### Property Value

 [IMaterial](VM.Managed.Material.IMaterial.md)

### MaximumFacetSize

Gets or sets the maximum facet size.

```csharp
public ExpressionValueVariable MaximumFacetSize { get; set; }
```

#### Property Value

 ExpressionValueVariable

### MaximumGridLine

Gets or sets the maximum grid line.

```csharp
public ExpressionValueVariable MaximumGridLine { get; set; }
```

#### Property Value

 ExpressionValueVariable

### NameAttribute

Gets or sets the attribute of name.

```csharp
public string NameAttribute { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SkipCalcMassProp

Gets or sets a value indicating whether skip [Calculate mass property].

```csharp
public bool SkipCalcMassProp { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipRebuildGeometry

Gets or sets a value indicating whether skip [Rebuild Geometry].

```csharp
public bool SkipRebuildGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SurfaceAngularTolerance

Gets or sets the surface angular tolerance.

```csharp
public ExpressionValueVariable SurfaceAngularTolerance { get; set; }
```

#### Property Value

 ExpressionValueVariable

### TransparentObject

Gets the transparent object.

```csharp
ObjectBase TransparentObject { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

### TransparentObjects

Gets the transparent objects.

```csharp
ObjectBase[] TransparentObjects { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### UseApprox\_eval

Gets or sets a value indicating whether use [Approx_eval].

```csharp
public bool UseApprox_eval { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseFacetAspectRatio

Gets or sets a value indicating whether use [facet aspect ratio].

```csharp
public bool UseFacetAspectRatio { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseGRID\_TO\_EDGES

Gets or sets a value indicating whether use [GRID_TO_EDGES].

```csharp
public bool UseGRID_TO_EDGES { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseMaximumFacetSize

Gets or sets a value indicating whether use [maximum facet size].

```csharp
public bool UseMaximumFacetSize { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseMaximumGridLine

Gets or sets a value indicating whether use [maximum grid line].

```csharp
public bool UseMaximumGridLine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseRepairPatch

Gets or sets a value indicating whether use [RepairPatch].

```csharp
public bool UseRepairPatch { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseSurfaceAngularTolerance

Gets or sets a value indicating whether use [surface angular tolerance].

```csharp
public bool UseSurfaceAngularTolerance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Vertices

Gets or sets the vertices.

```csharp
public Body.VertexContainer Vertices { get; set; }
```

#### Property Value

 [Body](VM.Managed.CAD.Body.md).[VertexContainer](VM.Managed.CAD.Body.VertexContainer.md)

### \_Material

Gets or sets the material.

```csharp
public Linker<IMaterial> _Material { get; set; }
```

#### Property Value

 [Linker](VM.Managed.Linker\-1.md)<[IMaterial](VM.Managed.Material.IMaterial.md)\>

## Methods

### AddBodyCreatedList\(\)

Add body to kernal's create list.

```csharp
[Obsolete]
public void AddBodyCreatedList()
```

### AddNameAttribute\(string\)

Add name attribute.

```csharp
public void AddNameAttribute(string strNameAttribute)
```

#### Parameters

`strNameAttribute` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name attribute

### CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, double, bool\)

Calculate mass property.

```csharp
public void CalculateMassProperty(ref double dMass, ref double dVolume, ref TMatrix matTransform, ref double[] arInertia, ref bool bRegularized, double dDensity, bool bGlobal)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The volume.

`matTransform` [TMatrix](VM.Managed.TMatrix.md)

The transformation.

`arInertia` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The inertia.

`bRegularized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether calculate from regularized body.

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The density.

`bGlobal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether inertia is global

### CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, bool, double\)

Calculate mass property.

```csharp
[Obsolete]
public void CalculateMassProperty(ref double dMass, ref double dVolume, ref TMatrix matTransform, ref double[] arInertia, ref bool bRegularized, bool bUpdate, double dDensity)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The volume.

`matTransform` [TMatrix](VM.Managed.TMatrix.md)

The transformation.

`arInertia` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The inertia.

`bRegularized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether calculate from regularized body.

`bUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

update flag.

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The density.

### CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, double\)

Calculate mass property.

```csharp
public void CalculateMassProperty(ref double dMass, ref double dVolume, ref TMatrix matTransform, ref double[] arInertia, ref bool bRegularized, double dDensity)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The volume.

`matTransform` [TMatrix](VM.Managed.TMatrix.md)

The transformation.

`arInertia` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The inertia.

`bRegularized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether calculate from regularized body.

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The density.

### CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, bool\)

Calculate mass property.

```csharp
[Obsolete]
public void CalculateMassProperty(ref double dMass, ref double dVolume, ref TMatrix matTransform, ref double[] arInertia, ref bool bRegularized, bool bUpdate)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The volume.

`matTransform` [TMatrix](VM.Managed.TMatrix.md)

The transformation.

`arInertia` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The inertia.

`bRegularized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether calculate from regularized body.

`bUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

update flag.

### CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool\)

Calculate mass property.

```csharp
public void CalculateMassProperty(ref double dMass, ref double dVolume, ref TMatrix matTransform, ref double[] arInertia, ref bool bRegularized)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The volume.

`matTransform` [TMatrix](VM.Managed.TMatrix.md)

The transformation.

`arInertia` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The inertia.

`bRegularized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether calculate from regularized body.

### CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, double, double, bool\)

Calculate mass property.

```csharp
public void CalculateMassProperty(ref double dMass, ref double dVolume, ref TMatrix matTransform, ref double[] arInertia, ref bool bRegularized, double dDensity, double dAccuracy, bool bGlobal)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The volume.

`matTransform` [TMatrix](VM.Managed.TMatrix.md)

The transformation.

`arInertia` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The inertia.

`bRegularized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether calculate from regularized body.

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dAccuracy` [double](https://learn.microsoft.com/dotnet/api/system.double)

The desire accuracy for mass calculate.

`bGlobal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CalculateMassPropertyForAssembly\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, double\)

Calculate mass property.

```csharp
public void CalculateMassPropertyForAssembly(ref double dMass, ref double dVolume, ref TMatrix matTransform, ref double[] arInertia, ref bool bRegularized, double dDensity)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass.

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

The volume.

`matTransform` [TMatrix](VM.Managed.TMatrix.md)

The transformation.

`arInertia` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The inertia.

`bRegularized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether calculate from regularized body.

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The density.

### CheckValidationAboutBuild\(string\)

```csharp
public virtual bool CheckValidationAboutBuild(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClearFacetDictionary\(\)

```csharp
public void ClearFacetDictionary()
```

### ConnectProxy\(\)

```csharp
protected override void ConnectProxy()
```

### ConvertUInt32Managed2Native\(ref uint\[\], vector<unsigned int,std::allocator<unsigned int\> \>\*\)

```csharp
public void ConvertUInt32Managed2Native(ref uint[] inputAryUInt, vector<unsigned int,std::allocator<unsigned int> >* outputVecUInt)
```

#### Parameters

`inputAryUInt` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`outputVecUInt` [vector<unsigned int,std::allocator<unsigned int\> \>](std.vector<unsigned int,std.md)\*

### ConvertUInt32Native2Managed\(vector<unsigned int,std::allocator<unsigned int\> \>\*, ref uint\[\]\)

```csharp
public void ConvertUInt32Native2Managed(vector<unsigned int,std::allocator<unsigned int> >* inputVecUInt, ref uint[] outputAryUInt)
```

#### Parameters

`inputVecUInt` [vector<unsigned int,std::allocator<unsigned int\> \>](std.vector<unsigned int,std.md)\*

`outputAryUInt` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### ConvertVectorManaged2Native\(ref VectorBase\[\], vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*\)

```csharp
public void ConvertVectorManaged2Native(ref VectorBase[] inputAryVec, vector<_VM_VECTOR,std::allocator<_VM_VECTOR> >* outputVecVec)
```

#### Parameters

`inputAryVec` [VectorBase](VM.Managed.VectorBase.md)\[\]

`outputVecVec` [vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.vector<\_VM\_VECTOR,std.md)\*

### ConvertVectorNative2Managed\(vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, ref VectorBase\[\]\)

```csharp
public void ConvertVectorNative2Managed(vector<_VM_VECTOR,std::allocator<_VM_VECTOR> >* inputVecVec, ref VectorBase[] outputAryVec)
```

#### Parameters

`inputVecVec` [vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.vector<\_VM\_VECTOR,std.md)\*

`outputAryVec` [VectorBase](VM.Managed.VectorBase.md)\[\]

### CreateNastranFile\(string, VectorBase\[\], uint\[\], uint\[\]\)

```csharp
public static void CreateNastranFile(string strNastranPath, VectorBase[] aryPos, uint[] aryConTria, uint[] aryConTetra)
```

#### Parameters

`strNastranPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`aryPos` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTria` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`aryConTetra` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### DoWorkAfterUpdateContents\(\)

After update contents, do work.

```csharp
public override void DoWorkAfterUpdateContents()
```

### DrawEdge\(int, double, TMatrix, Canvas\)

gets the points that are placed with some interval on edge.

```csharp
public void DrawEdge(int nEdgeIndex, double dDistance, TMatrix matBase, Canvas canvas)
```

#### Parameters

`nEdgeIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

the edge index

`dDistance` [double](https://learn.microsoft.com/dotnet/api/system.double)

the point intaval

`matBase` [TMatrix](VM.Managed.TMatrix.md)

the base transform

`canvas` Canvas

The canvas.

### DrawFacet\(Canvas\)

Draw facet.
<param name="canvas">The canvas.</param>

```csharp
void DrawFacet(Canvas canvas)
```

#### Parameters

`canvas` Canvas

### DrawFacetByDefaultParameters\(Canvas\)

Draws facet.

```csharp
void DrawFacetByDefaultParameters(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### DrawFacetInGlobal\(Canvas\)

Draw facet in global.

```csharp
void DrawFacetInGlobal(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas.

### DrawFacetsOfFaces\(IDrawFacet\[\], string, Canvas\)

```csharp
public static void DrawFacetsOfFaces(IDrawFacet[] arFaces, string strFacetOptionsXml, Canvas canvas)
```

#### Parameters

`arFaces` [IDrawFacet](VM.Managed.IDrawFacet.md)\[\]

`strFacetOptionsXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

`canvas` Canvas

### ExistFace\(ValueType\)

```csharp
public bool ExistFace(ValueType nID)
```

#### Parameters

`nID` [ValueType](https://learn.microsoft.com/dotnet/api/system.valuetype)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExportPatch\(string, ConvertFactor, string\)

```csharp
public void ExportPatch(string strMesherPath, Unit.ConvertFactor factor, string strPath)
```

#### Parameters

`strMesherPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`factor` Unit.ConvertFactor

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExportSolid\(string, ConvertFactor, string\)

```csharp
public void ExportSolid(string strMesherPath, Unit.ConvertFactor factor, string strPath)
```

#### Parameters

`strMesherPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`factor` Unit.ConvertFactor

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Find\(string\)

Find DAFUL object from the container by full name.

```csharp
public virtual IObjectBase Find(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object full name.

#### Returns

 IObjectBase

The DAFUL object.

### FindLocal\(string\)

Find DAFUL object from the container by name.

```csharp
public virtual IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

#### Returns

 IObjectBase

The DAFUL object.

### FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GenerateMeshInfo\(string, AttributeFacetRefinementBase, ConvertFactor, MeshFreeMeshType, ref MeshFreeMeshType, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\], bool\)

```csharp
public void GenerateMeshInfo(string strMesherPath, AttributeFacetRefinementBase attrGeomOutputProp, Unit.ConvertFactor factor, MeshFreeMeshType reqMeshType, ref MeshFreeMeshType resMeshType, ref VectorBase[] aryPosTria, ref uint[] aryConTria, ref VectorBase[] aryPosTetra, ref uint[] aryConTetra, bool bUseDSDL)
```

#### Parameters

`strMesherPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`attrGeomOutputProp` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

`factor` Unit.ConvertFactor

`reqMeshType` [MeshFreeMeshType](VM.Managed.MeshFreeMeshType.md)

`resMeshType` [MeshFreeMeshType](VM.Managed.MeshFreeMeshType.md)

`aryPosTria` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTria` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`aryPosTetra` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTetra` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`bUseDSDL` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GenerateMeshInfo\(string, AttributeFacetRefinementBase, ConvertFactor, MeshFreeMeshType, ref MeshFreeMeshType, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\]\)

```csharp
public void GenerateMeshInfo(string strMesherPath, AttributeFacetRefinementBase attrGeomOutputProp, Unit.ConvertFactor factor, MeshFreeMeshType reqMeshType, ref MeshFreeMeshType resMeshType, ref VectorBase[] aryPosTria, ref uint[] aryConTria, ref VectorBase[] aryPosTetra, ref uint[] aryConTetra)
```

#### Parameters

`strMesherPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`attrGeomOutputProp` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

`factor` Unit.ConvertFactor

`reqMeshType` [MeshFreeMeshType](VM.Managed.MeshFreeMeshType.md)

`resMeshType` [MeshFreeMeshType](VM.Managed.MeshFreeMeshType.md)

`aryPosTria` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTria` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`aryPosTetra` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTetra` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### GetAllFacePointAndNormal\(ref List<VectorBase\>, ref List<VectorBase\>\)

```csharp
public bool GetAllFacePointAndNormal(ref List<VectorBase> lstPositions, ref List<VectorBase> lstDirections)
```

#### Parameters

`lstPositions` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

`lstDirections` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAnalysisLevelInfo\(double, ref List<double\>, ref List<uint\>\)

```csharp
public bool GetAnalysisLevelInfo(double dVolume, ref List<double> lstNodeDistance, ref List<uint> lstNodeCount)
```

#### Parameters

`dVolume` [double](https://learn.microsoft.com/dotnet/api/system.double)

`lstNodeDistance` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`lstNodeCount` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAnalysisLevelInfo\(ref List<double\>, ref List<uint\>\)

```csharp
public bool GetAnalysisLevelInfo(ref List<double> lstNodeDistance, ref List<uint> lstNodeCount)
```

#### Parameters

`lstNodeDistance` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

`lstNodeCount` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAttrFacetRefineBase\(\)

Get Attribute value on Facet Refinement

```csharp
public AttributeFacetRefinementBase GetAttrFacetRefineBase()
```

#### Returns

 [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

Facet Refinement Attribute value

### GetBodyGeomInfo\(vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*, AttributeFacetRefinementBase, double, bool\)

```csharp
public bool GetBodyGeomInfo(vector<_VM_VECTOR,std::allocator<_VM_VECTOR> >* vectPosTria, vector<unsigned int,std::allocator<unsigned int> >* vecConTria, AttributeFacetRefinementBase attrGeomOutputProp, double dLengthFactor, bool bUseDSDL)
```

#### Parameters

`vectPosTria` [vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.vector<\_VM\_VECTOR,std.md)\*

`vecConTria` [vector<unsigned int,std::allocator<unsigned int\> \>](std.vector<unsigned int,std.md)\*

`attrGeomOutputProp` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`bUseDSDL` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetBodyGeomInfo\(ref VectorBase\[\], ref uint\[\], AttributeFacetRefinementBase, double, bool\)

```csharp
public bool GetBodyGeomInfo(ref VectorBase[] aryPosTria, ref uint[] aryConTria, AttributeFacetRefinementBase attrGeomOutputProp, double dLengthFactor, bool bUseDSDL)
```

#### Parameters

`aryPosTria` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTria` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`attrGeomOutputProp` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`bUseDSDL` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetBodyGeomInfo\(ref VectorBase\[\], ref uint\[\], AttributeFacetRefinementBase, double\)

```csharp
public bool GetBodyGeomInfo(ref VectorBase[] aryPosTria, ref uint[] aryConTria, AttributeFacetRefinementBase attrGeomOutputProp, double dLengthFactor)
```

#### Parameters

`aryPosTria` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTria` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`attrGeomOutputProp` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetBodyGeomInfoForDFG\(AttributeFacetRefinementBase, ref VectorBase\[\], ref uint\[\]\)

```csharp
public bool GetBodyGeomInfoForDFG(AttributeFacetRefinementBase attrGeomOutputProp, ref VectorBase[] aryPosTria, ref uint[] aryConTria)
```

#### Parameters

`attrGeomOutputProp` [AttributeFacetRefinementBase](VM.Managed.AttributeFacetRefinementBase.md)

`aryPosTria` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTria` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetBoundingBox\(TMatrix, ref VectorBase, ref VectorBase, BoxingMode\)

```csharp
public bool GetBoundingBox(TMatrix matT, ref VectorBase vecMinPt, ref VectorBase vecMaxPt, BoxingMode boxingMode)
```

#### Parameters

`matT` [TMatrix](VM.Managed.TMatrix.md)

`vecMinPt` [VectorBase](VM.Managed.VectorBase.md)

`vecMaxPt` [VectorBase](VM.Managed.VectorBase.md)

`boxingMode` [BoxingMode](VM.Managed.CAD.BoxingMode.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetBoundingBox\(TMatrix, ref VectorBase, ref VectorBase\)

```csharp
public bool GetBoundingBox(TMatrix matT, ref VectorBase vecMinPt, ref VectorBase vecMaxPt)
```

#### Parameters

`matT` [TMatrix](VM.Managed.TMatrix.md)

`vecMinPt` [VectorBase](VM.Managed.VectorBase.md)

`vecMaxPt` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetCADGeomNameAttribute\(string, ref List<string\>\)

```csharp
public void GetCADGeomNameAttribute(string strPrefix, ref List<string> lstName)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lstName` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetColor\(\)

Get color.
<returns>The color</returns>

```csharp
public Color GetColor()
```

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### GetDefaultMaxFacetSize\(\)

Get default maximum facet size

```csharp
public double GetDefaultMaxFacetSize()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

Default maximum facet size

### GetDefaultMaxPenetration\(ref double\)

Get default maximum penetration.
<param name="dMaxPenetration">The maximum penetration.</param>

```csharp
public bool GetDefaultMaxPenetration(ref double dMaxPenetration)
```

#### Parameters

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEdgeCount\(\)

Get the number of edge.
-1 : error

```csharp
public int GetEdgeCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of edge.

### GetEdgeIndex\(ValueType\)

```csharp
public int GetEdgeIndex(ValueType nID)
```

#### Parameters

`nID` [ValueType](https://learn.microsoft.com/dotnet/api/system.valuetype)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetEdgePoints\(int, double, TMatrix, ref List<VectorBase\>\)

```csharp
public bool GetEdgePoints(int nEdgeIndex, double dDistance, TMatrix matBase, ref List<VectorBase> lstPoints)
```

#### Parameters

`nEdgeIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dDistance` [double](https://learn.microsoft.com/dotnet/api/system.double)

`matBase` [TMatrix](VM.Managed.TMatrix.md)

`lstPoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetEdges\(ICollection<int\>\)

```csharp
public List<Edge> GetEdges(ICollection<int> Colors)
```

#### Parameters

`Colors` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Edge](VM.Managed.CAD.Edge.md)\>

### GetEdges\(\)

get all edges.

```csharp
public List<Edge> GetEdges()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Edge](VM.Managed.CAD.Edge.md)\>

list of all edges

### GetFaceColors\(\)

get all face colors.

```csharp
public List<int> GetFaceColors()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

list of all face colors.

### GetFaceIndex\(ValueType\)

```csharp
public int GetFaceIndex(ValueType nID)
```

#### Parameters

`nID` [ValueType](https://learn.microsoft.com/dotnet/api/system.valuetype)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetFaces\(ICollection<int\>\)

```csharp
public List<Face> GetFaces(ICollection<int> Colors)
```

#### Parameters

`Colors` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Face](VM.Managed.CAD.Face.md)\>

### GetFaces\(\)

get all faces.

```csharp
public List<Face> GetFaces()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Face](VM.Managed.CAD.Face.md)\>

list of all faces

### GetFacesInfo\_NormalAndCenterPt\(List<Face\>, ref Dictionary<Face, VectorBase\>, ref Dictionary<Face, VectorBase\>\)

```csharp
public void GetFacesInfo_NormalAndCenterPt(List<Face> lstFace, ref Dictionary<Face, VectorBase> dic_vecNormal, ref Dictionary<Face, VectorBase> dic_vecCenterPt)
```

#### Parameters

`lstFace` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Face](VM.Managed.CAD.Face.md)\>

`dic_vecNormal` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[Face](VM.Managed.CAD.Face.md), [VectorBase](VM.Managed.VectorBase.md)\>

`dic_vecCenterPt` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[Face](VM.Managed.CAD.Face.md), [VectorBase](VM.Managed.VectorBase.md)\>

### GetFacetInfo\(ref VectorBase\[\], ref int\[\]\)

Get facet information.
<param name="arPt">facet point information.</param><param name="arConnectivity">facet connectivity inforamtion.</param>

```csharp
public void GetFacetInfo(ref VectorBase[] arPt, ref int[] arConnectivity)
```

#### Parameters

`arPt` [VectorBase](VM.Managed.VectorBase.md)\[\]

`arConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### GetFacetPositions\(Face\[\], string\)

```csharp
public static VectorBase[] GetFacetPositions(Face[] arFaces, string strFacetOptionsXml)
```

#### Parameters

`arFaces` [Face](VM.Managed.CAD.Face.md)\[\]

`strFacetOptionsXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [VectorBase](VM.Managed.VectorBase.md)\[\]

### GetGeomInfoOfFaces\(Body, Face\[\], string, bool, UIntPtr\)

```csharp
public static void GetGeomInfoOfFaces(Body body, Face[] arFaces, string strFacetOptionsXml, bool bSkipMidPoints, UIntPtr pGeomInfo)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`arFaces` [Face](VM.Managed.CAD.Face.md)\[\]

`strFacetOptionsXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bSkipMidPoints` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`pGeomInfo` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### GetLumpCount\(\)

Get the number of lump.
-1 : error

```csharp
public int GetLumpCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of lump.

### GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the model navigator information implementation.

```csharp
virtual bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlRootEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The navigator information xml.

`xmlRootEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The navigator information xml root element.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if has a child object; otherwise, <code>false</code>.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetNearest4PointOnFaceWithRange\(VectorBase, double, VectorBase, VectorBase, bool, VectorBase\[\]\)

```csharp
public bool GetNearest4PointOnFaceWithRange(VectorBase vecUserPos, double dRange, VectorBase vecNormalDirection, VectorBase vecShearDirection, bool bBase, VectorBase[] vecNearest4Pos)
```

#### Parameters

`vecUserPos` [VectorBase](VM.Managed.VectorBase.md)

`dRange` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vecNormalDirection` [VectorBase](VM.Managed.VectorBase.md)

`vecShearDirection` [VectorBase](VM.Managed.VectorBase.md)

`bBase` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`vecNearest4Pos` [VectorBase](VM.Managed.VectorBase.md)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetNearestPointAndNormalOnFace\(VectorBase, VectorBase, VectorBase\)

```csharp
public bool GetNearestPointAndNormalOnFace(VectorBase vCenterPoint, VectorBase vecPoint, VectorBase vecNormal)
```

#### Parameters

`vCenterPoint` [VectorBase](VM.Managed.VectorBase.md)

`vecPoint` [VectorBase](VM.Managed.VectorBase.md)

`vecNormal` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetNearestPointOnFace\(VectorBase, ref VectorBase\)

```csharp
public void GetNearestPointOnFace(VectorBase vecUserPos, ref VectorBase vecNearestPos)
```

#### Parameters

`vecUserPos` [VectorBase](VM.Managed.VectorBase.md)

`vecNearestPos` [VectorBase](VM.Managed.VectorBase.md)

### GetNearestPointOnFaceWithDirection\(VectorBase, VectorBase, double, ref VectorBase\)

```csharp
public bool GetNearestPointOnFaceWithDirection(VectorBase vecUserPos, VectorBase vecNormalDir, double dRange, ref VectorBase vecNearestPos)
```

#### Parameters

`vecUserPos` [VectorBase](VM.Managed.VectorBase.md)

`vecNormalDir` [VectorBase](VM.Managed.VectorBase.md)

`dRange` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vecNearestPos` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetNewEntityName\(string, bool, int, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public virtual string GetNewEntityName(string strPrefix, bool bUseUnderLine, int nNumFigure, int nStartIndex)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`bUseUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`nNumFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### GetNewEntityName\(string, bool, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public virtual string GetNewEntityName(string strPrefix, bool bUseUnderLine, int nNumFigure)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`bUseUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`nNumFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### GetNewEntityName\(string\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public virtual string GetNewEntityName(string strPrefix)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### GetNormalOnFace\(VectorBase, ref VectorBase\)

gets the normal direction at some point on face.
{1 : kernel api error}
{2 : invalid body}
{21 : fail to get faces}
{22 : kernel function error}

```csharp
public bool GetNormalOnFace(VectorBase vecPosition, ref VectorBase vecNormal)
```

#### Parameters

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

the point position

`vecNormal` [VectorBase](VM.Managed.VectorBase.md)

result normal direction

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if operation success then return true.

### GetPointAndDirection\(ref VectorBase, ref VectorBase\)

Get point and direction.

```csharp
public bool GetPointAndDirection(ref VectorBase vecPosition, ref VectorBase vecDirection)
```

#### Parameters

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

The point.

`vecDirection` [VectorBase](VM.Managed.VectorBase.md)

The direction.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetSortOfBody\(\)

Gets type of body.

```csharp
public BodyType GetSortOfBody()
```

#### Returns

 [BodyType](VM.Managed.CAD.BodyType.md)

body type

### GetStartPointOfClosedLoop\(List<Edge\>, ref VectorBase\)

```csharp
public bool GetStartPointOfClosedLoop(List<Edge> lstEdges, ref VectorBase vecPosition)
```

#### Parameters

`lstEdges` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Edge](VM.Managed.CAD.Edge.md)\>

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetTargetListForUpdate\(\)

Gets the update objects.

```csharp
public override List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IEventProvider\>

### GetUnnamedObjectName\(object\)

Get an unnamed object name.

```csharp
public string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The unnamed object.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

### GetVertexIndex\(ValueType\)

```csharp
public int GetVertexIndex(ValueType nID)
```

#### Parameters

`nID` [ValueType](https://learn.microsoft.com/dotnet/api/system.valuetype)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetVoidCount\(\)

Gets the void count.

```csharp
public int GetVoidCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetVoidPoints\(double\[\], ref VectorBase\[\]\)

Get Inner point of void shells.

```csharp
public int GetVoidPoints(double[] ardScale, ref VectorBase[] aryPoints)
```

#### Parameters

`ardScale` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`aryPoints` [VectorBase](VM.Managed.VectorBase.md)\[\]

The list of inner point of void shells.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

-1 : error, 0 : finding successs, positive number : the number of not found case.

### GetWireLastPoint\(ref VectorBase\)

gets the position of last point on wire body.
{1 : kernel api error}
{2 : invalid body}
{21 : fail to get faces}
{22 : kernel function error}

```csharp
public bool GetWireLastPoint(ref VectorBase vecPosition)
```

#### Parameters

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

the point position

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if operation success then return true.

### GetWirePoints\(double, ref List<VectorBase\>\)

```csharp
public bool GetWirePoints(double dDistance, ref List<VectorBase> lstPoints)
```

#### Parameters

`dDistance` [double](https://learn.microsoft.com/dotnet/api/system.double)

`lstPoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetWirePointsAndTangents\(double, ref List<VectorBase\>, ref List<VectorBase\>\)

```csharp
public bool GetWirePointsAndTangents(double dDistance, ref List<VectorBase> lstPoints, ref List<VectorBase> lstTangents)
```

#### Parameters

`dDistance` [double](https://learn.microsoft.com/dotnet/api/system.double)

`lstPoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

`lstTangents` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetWirePointsAndTangentsWithSection\(double, VectorBase, VectorBase, ref List<VectorBase\>, ref List<VectorBase\>\)

```csharp
public bool GetWirePointsAndTangentsWithSection(double dDistance, VectorBase vecFirst, VectorBase vecSecond, ref List<VectorBase> lstPoints, ref List<VectorBase> lstTangents)
```

#### Parameters

`dDistance` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vecFirst` [VectorBase](VM.Managed.VectorBase.md)

`vecSecond` [VectorBase](VM.Managed.VectorBase.md)

`lstPoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

`lstTangents` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighlightBuilder\(\)

highlignt for body's builder.

```csharp
public void HighlightBuilder()
```

### InitialSetBuildInfo\(string\)

```csharp
public void InitialSetBuildInfo(string strBuilderXml)
```

#### Parameters

`strBuilderXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### IsNonManifold\(\)

determines if a body is a nonmanifold.

```csharp
public bool IsNonManifold()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if a body is a nonmanifold then return true.

### IsWireBody\(\)

determines if a body is a wire.

```csharp
public bool IsWireBody()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if a body is a wire then return true.

### LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### OnPostDeserialized\(StreamingContext\)

```csharp
public virtual void OnPostDeserialized(StreamingContext context)
```

#### Parameters

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### PostRemoveFromDocument\(Document\)

Call when post [remove from document].

```csharp
public override void PostRemoveFromDocument(Document document)
```

#### Parameters

`document` [Document](VM.Managed.Document.md)

The document

### PrepareFacesWithColor\(\)

prepare the face with color

```csharp
public bool PrepareFacesWithColor()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if a body has the face color then return true.

### ReDrawChangeFacet\(\)

```csharp
public void ReDrawChangeFacet()
```

### RebuildGeometry\(object, LinkEventArgs\)

Rebuild geometry.

```csharp
protected virtual void RebuildGeometry(object objBuilder, LinkEventArgs args)
```

#### Parameters

`objBuilder` [object](https://learn.microsoft.com/dotnet/api/system.object)

The builder.

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The event handler.

### RelationWithPoint\(VectorBase\)

A point may be in, on, or off the this body. The returned values corresponding to these relationships are:
1 : point in entity
0 : point on entity
-1 : point off entity
-2 : error

```csharp
public int RelationWithPoint(VectorBase vecPosition)
```

#### Parameters

`vecPosition` [VectorBase](VM.Managed.VectorBase.md)

the point position

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

1 or 0 or -1 or -2

### RepairTopology\(\)

repair the invalid topology.

```csharp
public void RepairTopology()
```

### ReplaceCAD\(List<ReplaceCADInfo\>\)

```csharp
public void ReplaceCAD(List<Body.ReplaceCADInfo> lstInfo)
```

#### Parameters

`lstInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Body](VM.Managed.CAD.Body.md).[ReplaceCADInfo](VM.Managed.CAD.Body.ReplaceCADInfo.md)\>

### ResetBuildInfo\(string\)

Reset build Information.
<param name="strInfo">build Information.</param>

```csharp
public void ResetBuildInfo(string strInfo)
```

#### Parameters

`strInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

### RunTetraMesher\(string, vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*, vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*\)

```csharp
public bool RunTetraMesher(string strMesherPath, vector<_VM_VECTOR,std::allocator<_VM_VECTOR> >* vecPosTria, vector<unsigned int,std::allocator<unsigned int> >* vecConTria, vector<_VM_VECTOR,std::allocator<_VM_VECTOR> >* vecPosTetra, vector<unsigned int,std::allocator<unsigned int> >* vecConTetra)
```

#### Parameters

`strMesherPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vecPosTria` [vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.vector<\_VM\_VECTOR,std.md)\*

`vecConTria` [vector<unsigned int,std::allocator<unsigned int\> \>](std.vector<unsigned int,std.md)\*

`vecPosTetra` [vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.vector<\_VM\_VECTOR,std.md)\*

`vecConTetra` [vector<unsigned int,std::allocator<unsigned int\> \>](std.vector<unsigned int,std.md)\*

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RunTetraMesher\(string, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\]\)

```csharp
public bool RunTetraMesher(string strMesherPath, ref VectorBase[] aryPosTria, ref uint[] aryConTria, ref VectorBase[] aryPosTetra, ref uint[] aryConTetra)
```

#### Parameters

`strMesherPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`aryPosTria` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTria` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`aryPosTetra` [VectorBase](VM.Managed.VectorBase.md)\[\]

`aryConTetra` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetColor\(Color\)

Set color.
<param name="color">The color.</param>

```csharp
public void SetColor(Color color)
```

#### Parameters

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### SetGeometryRepresentation\(string, string, bool\)

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

### SetModifiedBody\(\)

```csharp
public void SetModifiedBody()
```

### SetTransparency\(double\)

Set transparency.
<param name="dTransp">The transparency.</param>

```csharp
public void SetTransparency(double dTransp)
```

#### Parameters

`dTransp` [double](https://learn.microsoft.com/dotnet/api/system.double)

### SortEdges\(List<Edge\>\)

```csharp
public List<Edge> SortEdges(List<Edge> lstEdges)
```

#### Parameters

`lstEdges` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Edge](VM.Managed.CAD.Edge.md)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Edge](VM.Managed.CAD.Edge.md)\>

### UpdateBody\(bool\)

Update body.
<param name="bBuild">The body build flag.</param>

```csharp
public void UpdateBody(bool bBuild)
```

#### Parameters

`bBuild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateBody\(\)

Update body.

```csharp
public void UpdateBody()
```


