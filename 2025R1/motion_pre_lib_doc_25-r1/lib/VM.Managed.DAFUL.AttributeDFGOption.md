#  Class AttributeDFGOption

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the attribute for dfg option.

```csharp
[Obsolete]
public class AttributeDFGOption : AttributeBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
[AttributeDFGOption](VM.Managed.DAFUL.AttributeDFGOption.md)

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

AttributeBase.OnDeserializationAttribute\(\), 
AttributeBase.LinkRequestUpdate\(object, LinkEventArgs\), 
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

### <a id="VM_Managed_DAFUL_AttributeDFGOption__ctor"></a> AttributeDFGOption\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AttributeDFGOption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeDFGOption()
```

### <a id="VM_Managed_DAFUL_AttributeDFGOption__ctor_System_Boolean_"></a> AttributeDFGOption\(bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AttributeDFGOption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeDFGOption(bool bUseDefault)
```

#### Parameters

`bUseDefault` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use default parameters].

### <a id="VM_Managed_DAFUL_AttributeDFGOption__ctor_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_VM_Managed_Variable_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> AttributeDFGOption\(Variable, Variable, Variable, Variable, bool, bool, bool, bool, bool, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.AttributeDFGOption" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeDFGOption(Variable varMaxGridLine, Variable varMaxFacetSize, Variable varAngularTolerance, Variable varFacetAspectRatio, bool bUseDefault, bool bUseMaximumGridLine, bool bUseMaximumFacetSize, bool bUseSurfaceAngularTolerance, bool bUseFacetAspectRatio, bool bDoNotUseApprox_eval)
```

#### Parameters

`varMaxGridLine` Variable

The maximum grid line.

`varMaxFacetSize` Variable

Size of the maximum facet.

`varAngularTolerance` Variable

The angular tolerance.

`varFacetAspectRatio` Variable

The facet aspect ratio.

`bUseDefault` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use default parameters].

`bUseMaximumGridLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use maximum grid line].

`bUseMaximumFacetSize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use maximum facet size].

`bUseSurfaceAngularTolerance` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use surface angular tolerance].

`bUseFacetAspectRatio` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [use facet aspect ratio].

`bDoNotUseApprox_eval` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [unuse approximated evaluation].

## Properties

### <a id="VM_Managed_DAFUL_AttributeDFGOption_FacetAspectRatio"></a> FacetAspectRatio

Gets or sets the facet aspect ratio.

```csharp
public ExpressionValueVariable FacetAspectRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_AttributeDFGOption_MaximumFacetSize"></a> MaximumFacetSize

Gets or sets the maximum size of the facet.

```csharp
public ExpressionValueVariable MaximumFacetSize { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_AttributeDFGOption_MaximumGridLine"></a> MaximumGridLine

Gets or sets the maximum grid line.

```csharp
public ExpressionValueVariable MaximumGridLine { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_AttributeDFGOption_SurfaceAngularTolerance"></a> SurfaceAngularTolerance

Gets or sets the surface angular tolerance.

```csharp
public ExpressionValueVariable SurfaceAngularTolerance { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_AttributeDFGOption_UseApprox_eval"></a> UseApprox\_eval

Gets or sets a value indicating whether use [approximated evaluation].

```csharp
public bool UseApprox_eval { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AttributeDFGOption_UseDefault"></a> UseDefault

Gets or sets a value indicating whether use [default option].

```csharp
public bool UseDefault { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AttributeDFGOption_UseFacetAspectRatio"></a> UseFacetAspectRatio

Gets or sets a value indicating whether use [facet aspect ratio].

```csharp
public bool UseFacetAspectRatio { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AttributeDFGOption_UseMaximumFacetSize"></a> UseMaximumFacetSize

Gets or sets a value indicating whether use [maximum facet size].

```csharp
public bool UseMaximumFacetSize { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AttributeDFGOption_UseMaximumGridLine"></a> UseMaximumGridLine

Gets or sets a value indicating whether use [maximum grid line].

```csharp
public bool UseMaximumGridLine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_AttributeDFGOption_UseSurfaceAngularTolerance"></a> UseSurfaceAngularTolerance

Gets or sets a value indicating whether use [surface angular tolerance].

```csharp
public bool UseSurfaceAngularTolerance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_AttributeDFGOption_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_DAFUL_AttributeDFGOption_Initialize"></a> Initialize\(\)

Initializes this instance.

```csharp
protected void Initialize()
```

### <a id="VM_Managed_DAFUL_AttributeDFGOption_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_AttributeDFGOption_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.

