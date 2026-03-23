# Class SetCurveBase

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the curve set.

```csharp
[CanNotOpenWithNewPreprocessor]
public class SetCurveBase : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IArgument, ICurvesetComponent, ITopologyset, IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody, ITemplateObject, IMultiChangable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
[SetCurveBase](VM.Managed.DAFUL.SetCurveBase.md)

#### Derived

[SetCurveForEdges](VM.Managed.DAFUL.SetCurveForEdges.md), 
[SetCurveForImport](VM.Managed.DAFUL.SetCurveForImport.md)

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
INavigatorItem, 
IArgument, 
[ICurvesetComponent](VM.Managed.DAFUL.ICurvesetComponent.md), 
ITopologyset, 
[IContactableRigid2D](VM.Managed.DAFUL.IContactableRigid2D.md), 
[IContactableRigid](VM.Managed.DAFUL.IContactableRigid.md), 
[IContactable](VM.Managed.DAFUL.IContactable.md), 
[IGeometricalComponent](VM.Managed.DAFUL.IGeometricalComponent.md), 
IEntityRelation, 
[IBodyAnalysisType](VM.Managed.DAFUL.IBodyAnalysisType.md), 
IHasBody, 
ITemplateObject, 
IMultiChangable

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

### SetCurveBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetCurveBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetCurveBase()
```

### SetCurveBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetCurveBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetCurveBase(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the face set.

### SetCurveBase\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetCurveBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetCurveBase(string strName, string strProxyName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the face set.

`strProxyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the proxy.

## Properties

### AnalysisType

Gets the analysis type.

```csharp
public virtual BodyAnalysisType AnalysisType { get; }
```

#### Property Value

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

### ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### AttribType

Gets the attribute type of curve set.

```csharp
public AttributeCurvesetTypeBase.CurvesetType AttribType { get; }
```

#### Property Value

 [AttributeCurvesetTypeBase](VM.Managed.DAFUL.AttributeCurvesetTypeBase.md).[CurvesetType](VM.Managed.DAFUL.AttributeCurvesetTypeBase.CurvesetType.md)

### Body

Gets the body.

```csharp
public IBody Body { get; }
```

#### Property Value

 IBody

### Connectable

Gets the connectable.

```csharp
public IConnectable Connectable { get; }
```

#### Property Value

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### GeometryFullName

Gets the geometry full name

```csharp
public string GeometryFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GeometryNameForMultiContact

Gets the name for multiple contact

```csharp
public string GeometryNameForMultiContact { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsActionGeometry

Gets or sets a value indicating whether this instance is action geometry.

```csharp
public bool IsActionGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsBaseGeometry

Gets or sets a value indicating whether this instance is base geometry.

```csharp
public bool IsBaseGeometry { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsCloseLoop

The flag that indicate closed loop

```csharp
public bool IsCloseLoop { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParentBody

Gets or sets the parent body.

```csharp
public ObjectBase ParentBody { get; set; }
```

#### Property Value

 ObjectBase

### ReferenceType

Gets the type of the reference.

```csharp
public string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### GetAkimaSpline\(double\[\], double\[\], double\[\]\)

Get akima spline

```csharp
public static List<VectorBase> GetAkimaSpline(double[] position_x, double[] position_y, double[] position_z)
```

#### Parameters

`position_x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of X position

`position_y` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of Y position

`position_z` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of Z position

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The list of points

### GetAkimaSpline\(VectorBase\[\], int\)

Get akima spline

```csharp
public static List<VectorBase> GetAkimaSpline(VectorBase[] lstVec, int nprintpoints)
```

#### Parameters

`lstVec` VectorBase\[\]

The array of points

`nprintpoints` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of result points.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The list of points

### GetAkimaSpline\(double\[\], double\[\], double\[\], int\)

Get akima spline

```csharp
public static List<VectorBase> GetAkimaSpline(double[] position_x, double[] position_y, double[] position_z, int nprintpoints)
```

#### Parameters

`position_x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of X position

`position_y` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of Y position

`position_z` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of Z position

`nprintpoints` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of result points.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The list of points

### GetCADBody\(\)

Gets the cad body from parent body.

```csharp
public Body GetCADBody()
```

#### Returns

 Body

### GetDefaultMaxPenetration\(ref double, IReferencable\)

Gets the default maximum penetration.

```csharp
public bool GetDefaultMaxPenetration(ref double dMaxPenetration, IReferencable reference)
```

#### Parameters

`dMaxPenetration` [double](https://learn.microsoft.com/dotnet/api/system.double)

The maximum penetration.

`reference` IReferencable

The reference.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator .

```csharp
public bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument information.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

### GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

Gets the point direction. (using facet information)

```csharp
public virtual bool GetPointDirection(ref VectorBase point, ref VectorBase direction, IReferencable reference)
```

#### Parameters

`point` VectorBase

The point.

`direction` VectorBase

The direction.

`reference` IReferencable

The reference.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetPoints\(\)

Get points

```csharp
public virtual VectorBase[] GetPoints()
```

#### Returns

 VectorBase\[\]

The array of points

### GetPointsAboutOrigin\(\)

Get points about origin

```csharp
public virtual VectorBase[] GetPointsAboutOrigin()
```

#### Returns

 VectorBase\[\]

The array of points

### GetProfilePoint\(ref bool, ref List<VectorBase\>\)

Get profile points

```csharp
public virtual int GetProfilePoint(ref bool bCloseLoop, ref List<VectorBase> lst)
```

#### Parameters

`bCloseLoop` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if closed loop, otherwise false.

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The list of points

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Initialize\(ConvertFactor\)

Initialize the <xref href="VM.Managed.DAFUL.SetCurveBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The convert factor


