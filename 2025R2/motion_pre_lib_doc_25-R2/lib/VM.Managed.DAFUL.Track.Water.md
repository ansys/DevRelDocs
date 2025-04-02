#  Class Water

Namespace: [VM.Managed.DAFUL.Track](VM.Managed.DAFUL.Track.md)  
Assembly: VMDTrackBase.dll  

This class is to represent the water.

```csharp
public class Water : Entity<PropertyWater>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IReferencable, IWater, ITransformable, IReportable, IHasReplaceableEntity
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyWater\> ← 
[Water](VM.Managed.DAFUL.Track.Water.md)

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
IDrawIcon, 
IReferencable, 
[IWater](VM.Managed.DAFUL.Track.IWater.md), 
ITransformable, 
IReportable, 
IHasReplaceableEntity

#### Inherited Members

Entity<PropertyWater\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyWater\>.GetUnnamedObjectName\(object\), 
Entity<PropertyWater\>.FindLocal\(string\), 
Entity<PropertyWater\>.Property, 
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

### <a id="VM_Managed_DAFUL_Track_Water__ctor"></a> Water\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.Water" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Water()
```

### <a id="VM_Managed_DAFUL_Track_Water__ctor_System_String_"></a> Water\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Track.Water" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Water(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

## Properties

### <a id="VM_Managed_DAFUL_Track_Water_Color"></a> Color

Gets or sets the color.

```csharp
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_Track_Water_DepthAtDeepWater"></a> DepthAtDeepWater

Gets or sets the Depth at Deep Water.

```csharp
public ExpressionValueVariable DepthAtDeepWater { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Depth at Deep Water is null.

### <a id="VM_Managed_DAFUL_Track_Water_DistanceToDeepWater"></a> DistanceToDeepWater

Gets or sets the Distance to DeepWater.

```csharp
public ExpressionValueVariable DistanceToDeepWater { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Distance to DeepWater is null.

### <a id="VM_Managed_DAFUL_Track_Water_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Track_Water_Hide"></a> Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Track_Water_Layer"></a> Layer

Gets or sets the layer.

```csharp
public override Layer Layer { get; set; }
```

#### Property Value

 Layer

### <a id="VM_Managed_DAFUL_Track_Water_LengthInXAxis"></a> LengthInXAxis

Gets or sets the Length in X Axis.

```csharp
public ExpressionValueVariable LengthInXAxis { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Length in X Axis is null.

### <a id="VM_Managed_DAFUL_Track_Water_RandomPhase"></a> RandomPhase

Gets or sets the random phase

```csharp
public List<double> RandomPhase { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Managed_DAFUL_Track_Water_ReferenceFrame"></a> ReferenceFrame

Gets or sets the reference frame.

```csharp
public Marker ReferenceFrame { get; set; }
```

#### Property Value

 Marker

### <a id="VM_Managed_DAFUL_Track_Water_Slope"></a> Slope

Gets or sets the Slope.

```csharp
public ExpressionValueVariable Slope { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Slope is null.

### <a id="VM_Managed_DAFUL_Track_Water_Transparency"></a> Transparency

Gets or sets the transparency.

```csharp
public double Transparency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Track_Water_UseSlope"></a> UseSlope

Gets or sets the Slope flag.

```csharp
public bool UseSlope { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Track_Water_WidthInYAxis"></a> WidthInYAxis

Gets or sets the Width in Y Axis.

```csharp
public ExpressionValueVariable WidthInYAxis { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

Width in Y Axis is null.

### <a id="VM_Managed_DAFUL_Track_Water__Color"></a> \_Color

Gets or sets the color.

```csharp
public int _Color { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_Track_Water_CalculateWave_VM_Managed_Document_VM_Managed_DAFUL_Track_Water_WaveStructure_System_Boolean_System_Double____System_Collections_Generic_List_VM_Managed_DAFUL_Track_Water_WaveResult___"></a> CalculateWave\(Document, WaveStructure, bool, ref double\[\], ref List<WaveResult\>\)

Calculate Wave

```csharp
public static void CalculateWave(Document doc, Water.WaveStructure waveStructure, bool bOnlyFirstResult, ref double[] ardX, ref List<Water.WaveResult> lstResult)
```

#### Parameters

`doc` Document

The Document

`waveStructure` [Water](VM.Managed.DAFUL.Track.Water.md).[WaveStructure](VM.Managed.DAFUL.Track.Water.WaveStructure.md)

The wave structure

`bOnlyFirstResult` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether only first result gets or not

`ardX` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The X array

`lstResult` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Water](VM.Managed.DAFUL.Track.Water.md).[WaveResult](VM.Managed.DAFUL.Track.Water.WaveResult.md)\>

The result

### <a id="VM_Managed_DAFUL_Track_Water_CreateCurrentFile"></a> CreateCurrentFile\(\)

Create current file

```csharp
public void CreateCurrentFile()
```

### <a id="VM_Managed_DAFUL_Track_Water_CreateCurrentFile_System_String_"></a> CreateCurrentFile\(string\)

Create current file

```csharp
public void CreateCurrentFile(string strCurrentFilePath)
```

#### Parameters

`strCurrentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The current file path

### <a id="VM_Managed_DAFUL_Track_Water_CreateWaveFile"></a> CreateWaveFile\(\)

Create wave file

```csharp
public void CreateWaveFile()
```

### <a id="VM_Managed_DAFUL_Track_Water_CreateWaveFile_VM_Managed_Document_System_String_"></a> CreateWaveFile\(Document, string\)

Create wave file

```csharp
public void CreateWaveFile(Document doc, string strWaveFilePath)
```

#### Parameters

`doc` Document

The document

`strWaveFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The wave file path

### <a id="VM_Managed_DAFUL_Track_Water_CreateWaveMesh_VM_Managed_TransformBase_System_Double_System_Double___System_Collections_Generic_List_VM_Managed_DAFUL_Track_Water_WaveResult__VM_Vector____System_Int32____"></a> CreateWaveMesh\(TransformBase, double, double\[\], List<WaveResult\>, ref Vector\[\], ref int\[\]\)

Create Rectangular Mesh

```csharp
public static void CreateWaveMesh(TransformBase transform, double dWidth, double[] ardX, List<Water.WaveResult> lstResult, ref Vector[] arPos, ref int[] arConnectivity)
```

#### Parameters

`transform` TransformBase

The Transform

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width

`ardX` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The x array

`lstResult` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Water](VM.Managed.DAFUL.Track.Water.md).[WaveResult](VM.Managed.DAFUL.Track.Water.WaveResult.md)\>

The wave result for height

`arPos` Vector\[\]

The position array

`arConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The Connectivity array

### <a id="VM_Managed_DAFUL_Track_Water_CreateWaveMesh_VM_Managed_Document_VM_Managed_TransformBase_System_Double_VM_Vector____System_Int32____"></a> CreateWaveMesh\(Document, TransformBase, double, ref Vector\[\], ref int\[\]\)

Create Rectangular Mesh

```csharp
public void CreateWaveMesh(Document doc, TransformBase transform, double dWidth, ref Vector[] arPos, ref int[] arConnectivity)
```

#### Parameters

`doc` Document

The document

`transform` TransformBase

The Transform

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width

`arPos` Vector\[\]

The position array

`arConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The Connectivity array

### <a id="VM_Managed_DAFUL_Track_Water_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public virtual void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_DAFUL_Track_Water_GenerateRandomPhase"></a> GenerateRandomPhase\(\)

Generate random phase

```csharp
public static List<double> GenerateRandomPhase()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Managed_DAFUL_Track_Water_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Track_Water_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Track_Water_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_Track_Water_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_Track_Water_PiersonMoskowitzSpectrum_VM_Managed_DAFUL_Track_Wave_PMPeriodType_System_Collections_Generic_List_System_Double____System_Double_System_Double__System_Double____System_Double____System_Double____System_Collections_Generic_List_System_Tuple_System_Double_System_Double____"></a> PiersonMoskowitzSpectrum\(PMPeriodType, List<double\[\]\>, double, ref double, ref double\[\], ref double\[\], ref double\[\], ref List<Tuple<double, double\>\>\)

Calculate Pierson-Moskowitz Spectrum

```csharp
public static void PiersonMoskowitzSpectrum(Wave.PMPeriodType typePMPeriod, List<double[]> lstWave, double dGravity, ref double dConvertedPeriod, ref double[] ardFrequency, ref double[] ardWaveAmp, ref double[] ardK, ref List<Tuple<double, double>> lstFreqToSpm)
```

#### Parameters

`typePMPeriod` [Wave](VM.Managed.DAFUL.Track.Wave.md).[PMPeriodType](VM.Managed.DAFUL.Track.Wave.PMPeriodType.md)

The Pierson-Moskowitz period type

`lstWave` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

The wave list

`dGravity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gravity

`dConvertedPeriod` [double](https://learn.microsoft.com/dotnet/api/system.double)

The convert period

`ardFrequency` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The frequency set

`ardWaveAmp` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The wave ampitude set

`ardK` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The k set

`lstFreqToSpm` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[double](https://learn.microsoft.com/dotnet/api/system.double), [double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

The Frequency and Spectrum data set

### <a id="VM_Managed_DAFUL_Track_Water_ReDraw"></a> ReDraw\(\)

Redraw.

```csharp
public virtual void ReDraw()
```

