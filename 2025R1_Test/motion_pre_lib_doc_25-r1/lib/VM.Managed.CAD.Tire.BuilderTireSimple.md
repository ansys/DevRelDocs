#  Class BuilderTireSimple

Namespace: [VM.Managed.CAD.Tire](VM.Managed.CAD.Tire.md)  
Assembly: VMDTire.dll  

The simple tire builder class

```csharp
public class BuilderTireSimple : BuilderMultiUniteSimple, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer
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
BuilderBoolean ← 
BuilderMulti ← 
BuilderMultiUnite ← 
BuilderMultiUniteSimple ← 
[BuilderTireSimple](VM.Managed.CAD.Tire.BuilderTireSimple.md)

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

BuilderMultiUniteSimple.GetSchema\(\), 
BuilderMultiUniteSimple.ReadXml\(XmlReader\), 
BuilderMultiUniteSimple.WriteXml\(XmlWriter\), 
BuilderMultiUniteSimple.OnDeserialization\(object\), 
BuilderMultiUnite.CreateParameter\(\), 
BuilderMultiUnite.FillParameter\(BuilderParamBase\), 
BuilderMulti.AddBuilder\(ICollection<Builder\>\), 
BuilderMulti.AddBuilder\(Builder\), 
BuilderMulti.Clear\(\), 
BuilderMulti.CheckValidationAboutBuild\(\), 
BuilderMulti.SetTransform\(TMatrix\), 
BuilderMulti.GetBodyType\(\), 
BuilderMulti.GetUnnamedObjectName\(object\), 
BuilderMulti.FindLocal\(string\), 
BuilderMulti.Contains\(Type\), 
BuilderMulti.CopyFilePathWhenImportBuilder\(Builder\), 
BuilderMulti.FillParameter\(BuilderParamBase\), 
BuilderMulti.OnDeserializationImpl\(ref List<Child<Builder, ObjectBase.Update\>\>\), 
BuilderMulti.ReadXmlImpl\(XmlReader\), 
BuilderMulti.WriteXmlImpl\(XmlWriter\), 
BuilderMulti.MultiType, 
BuilderMulti.Builders, 
BuilderBoolean.ReplaceBuild\(Builder, Builder\), 
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

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple__ctor"></a> BuilderTireSimple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Tire.BuilderTireSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderTireSimple()
```

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple__ctor_System_Double_System_Double_System_Double_System_Double_"></a> BuilderTireSimple\(double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Tire.BuilderTireSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderTireSimple(double dRadius, double dWidth, double dAspectRatio, double dHubOffset)
```

#### Parameters

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width.

`dAspectRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The aspect ratio.

`dHubOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The hub offset.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple__ctor_System_Double_System_Double_System_Double_System_Double_VM_Managed_TransformBase_"></a> BuilderTireSimple\(double, double, double, double, TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Tire.BuilderTireSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderTireSimple(double dRadius, double dWidth, double dAspectRatio, double dHubOffset, TransformBase transform)
```

#### Parameters

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width.

`dAspectRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The aspect ratio.

`dHubOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The hub offset.

`transform` TransformBase

transformation.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple__ctor_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> BuilderTireSimple\(double, double, double, double, double\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Tire.BuilderTireSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderTireSimple(double dRadius, double dWidth, double dAspectRatio, double dHubOffset, double dHubWidth)
```

#### Parameters

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width.

`dAspectRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The aspect ratio.

`dHubOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The hub offset.

`dHubWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

Width of hub.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple__ctor_System_Double_System_Double_System_Double_System_Double_System_Double_VM_Managed_TransformBase_"></a> BuilderTireSimple\(double, double, double, double, double, TransformBase\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Tire.BuilderTireSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderTireSimple(double dRadius, double dWidth, double dAspectRatio, double dHubOffset, double dHubWidth, TransformBase transform)
```

#### Parameters

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width.

`dAspectRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The aspect ratio.

`dHubOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The hub offset.

`dHubWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

Width of hub.

`transform` TransformBase

transformation.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple__ctor_System_Double_System_Double_System_Double_System_Double_System_Double_VM_Managed_TransformBase_System_Int32_"></a> BuilderTireSimple\(double, double, double, double, double, TransformBase, int\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Tire.BuilderTireSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderTireSimple(double dRadius, double dWidth, double dAspectRatio, double dHubOffset, double dHubWidth, TransformBase transform, int nColorTread)
```

#### Parameters

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width.

`dAspectRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The aspect ratio.

`dHubOffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

The hub offset.

`dHubWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

Width of hub.

`transform` TransformBase

transformation.

`nColorTread` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The color tread.

## Properties

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_AspectRatio"></a> AspectRatio

Gets or sets the aspect ratio.
Use SetAspectRatio() when this instance sets for undo/redo

```csharp
public double AspectRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_HubOffset"></a> HubOffset

Gets or sets the hub offset.
Use SetHubOffset() when this instance sets for undo/redo

```csharp
public double HubOffset { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_HubWidth"></a> HubWidth

Gets or sets the width of the hub.
Use SetHubWidth() when this instance sets for undo/redo

```csharp
public double HubWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_IsParameterized"></a> IsParameterized

Gets a value indicating whether this instance is parameterized.

```csharp
public override bool IsParameterized { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_Transform"></a> Transform

Gets or sets the transform.

```csharp
public TransformBase Transform { get; set; }
```

#### Property Value

 TransformBase

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_Transparency"></a> Transparency

Gets or sets the tranparency.

```csharp
public override double Transparency { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_TreadColor"></a> TreadColor

Gets or sets the color of the tread.
Use SetTreadColor() when this instance sets for undo/redo

```csharp
public int TreadColor { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_Uneditable"></a> Uneditable

Gets or sets Uneditable value..

```csharp
public override bool Uneditable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_UnloadedRadius"></a> UnloadedRadius

Gets or sets the unloaded radius.
Use SetUnloadedRadius() when this instance sets for undo/redo

```csharp
public double UnloadedRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_Width"></a> Width

Gets or sets the width.
Use SetWidth() when this instance sets for undo/redo

```csharp
public double Width { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_CheckValidationAboutBuild"></a> CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_FinalizeTransForm"></a> FinalizeTransForm\(\)

Finalizes the transform.

```csharp
public void FinalizeTransForm()
```

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Fixes up.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The ob.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface,
you should return nullNothingnullptra null reference (Nothing in Visual Basic) (Nothing in Visual Basic)
from this method, and instead, if specifying a custom schema is required,
apply the XmlSchemaProviderAttribute to the class.

```csharp
public override XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The obj notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public override void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The XmlReader stream from which the object is deserialized.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_SetAspectRatio_System_Double_"></a> SetAspectRatio\(double\)

Set aspect ratio.

```csharp
public void SetAspectRatio(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The aspect ratio.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_SetHubOffset_System_Double_"></a> SetHubOffset\(double\)

Set hub offset.

```csharp
public void SetHubOffset(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The hub offset.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_SetHubWidth_System_Double_"></a> SetHubWidth\(double\)

Set hub width.

```csharp
public void SetHubWidth(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The hub width.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_SetTransform_VM_Managed_TMatrix_"></a> SetTransform\(TMatrix\)

Sets the transform.

```csharp
public override void SetTransform(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The mat T.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_SetTreadColor_System_Int32_"></a> SetTreadColor\(int\)

Set color of the tread.

```csharp
public void SetTreadColor(int dVal)
```

#### Parameters

`dVal` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The color of the tread.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_SetUnloadedRadius_System_Double_"></a> SetUnloadedRadius\(double\)

Set unloaded radius.

```csharp
public void SetUnloadedRadius(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The unloaded radius.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_SetWidth_System_Double_"></a> SetWidth\(double\)

Set width.

```csharp
public void SetWidth(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width.

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_UpdateBuilder"></a> UpdateBuilder\(\)

Updates the builder.

```csharp
public void UpdateBuilder()
```

### <a id="VM_Managed_CAD_Tire_BuilderTireSimple_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public override void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The XmlWriter stream to which the object is serialized.

