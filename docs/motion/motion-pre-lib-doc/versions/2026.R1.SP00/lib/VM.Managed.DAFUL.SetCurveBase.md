# Class SetCurveBase
<a id="VM_Managed_DAFUL_SetCurveBase"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the curve set.

```csharp
[CanNotOpenWithNewPreprocessor]
public class SetCurveBase : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IArgument, ICurvesetComponent, ITopologyset, IContactableRigid2D, IContactableRigid, IContactable, IGeometricalComponent, IEntityRelation, IBodyAnalysisType, IHasBody, ITemplateObject, IMultiChangable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs) ← 
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
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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

[SubEntity.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
[SubEntity.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/SubEntity.cs), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_SetCurveBase__ctor"></a> SetCurveBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetCurveBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetCurveBase()
```

### <a id="VM_Managed_DAFUL_SetCurveBase__ctor_System_String_"></a> SetCurveBase\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetCurveBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetCurveBase(string strName)
```

#### Parameters

`strName` string

Name of the face set.

### <a id="VM_Managed_DAFUL_SetCurveBase__ctor_System_String_System_String_"></a> SetCurveBase\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SetCurveBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SetCurveBase(string strName, string strProxyName)
```

#### Parameters

`strName` string

Name of the face set.

`strProxyName` string

Name of the proxy.

## Properties

### <a id="VM_Managed_DAFUL_SetCurveBase_AnalysisType"></a> AnalysisType

Gets the analysis type.

```csharp
public virtual BodyAnalysisType AnalysisType { get; }
```

#### Property Value

 [BodyAnalysisType](VM.Managed.DAFUL.BodyAnalysisType.md)

### <a id="VM_Managed_DAFUL_SetCurveBase_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_SetCurveBase_AttribType"></a> AttribType

Gets the attribute type of curve set.

```csharp
public AttributeCurvesetTypeBase.CurvesetType AttribType { get; }
```

#### Property Value

 [AttributeCurvesetTypeBase](VM.Managed.DAFUL.AttributeCurvesetTypeBase.md).[CurvesetType](VM.Managed.DAFUL.AttributeCurvesetTypeBase.CurvesetType.md)

### <a id="VM_Managed_DAFUL_SetCurveBase_Body"></a> Body

Gets the body.

```csharp
public IBody Body { get; }
```

#### Property Value

 IBody

### <a id="VM_Managed_DAFUL_SetCurveBase_Connectable"></a> Connectable

Gets the connectable.

```csharp
public IConnectable Connectable { get; }
```

#### Property Value

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

### <a id="VM_Managed_DAFUL_SetCurveBase_GeometryFullName"></a> GeometryFullName

Gets the geometry full name

```csharp
public string GeometryFullName { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SetCurveBase_GeometryNameForMultiContact"></a> GeometryNameForMultiContact

Gets the name for multiple contact

```csharp
public string GeometryNameForMultiContact { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SetCurveBase_IsActionGeometry"></a> IsActionGeometry

Gets or sets a value indicating whether this instance is action geometry.

```csharp
public bool IsActionGeometry { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetCurveBase_IsBaseGeometry"></a> IsBaseGeometry

Gets or sets a value indicating whether this instance is base geometry.

```csharp
public bool IsBaseGeometry { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetCurveBase_IsCloseLoop"></a> IsCloseLoop

The flag that indicate closed loop

```csharp
public bool IsCloseLoop { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SetCurveBase_ParentBody"></a> ParentBody

Gets or sets the parent body.

```csharp
public ObjectBase ParentBody { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_SetCurveBase_ReferenceType"></a> ReferenceType

Gets the type of the reference.

```csharp
public string ReferenceType { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_SetCurveBase_GetAkimaSpline_System_Double___System_Double___System_Double___"></a> GetAkimaSpline\(double\[\], double\[\], double\[\]\)

Get akima spline

```csharp
public static List<VectorBase> GetAkimaSpline(double[] position_x, double[] position_y, double[] position_z)
```

#### Parameters

`position_x` double\[\]

The array of X position

`position_y` double\[\]

The array of Y position

`position_z` double\[\]

The array of Z position

#### Returns

 List<VectorBase\>

The list of points

### <a id="VM_Managed_DAFUL_SetCurveBase_GetAkimaSpline_VM_Managed_VectorBase___System_Int32_"></a> GetAkimaSpline\(VectorBase\[\], int\)

Get akima spline

```csharp
public static List<VectorBase> GetAkimaSpline(VectorBase[] lstVec, int nprintpoints)
```

#### Parameters

`lstVec` VectorBase\[\]

The array of points

`nprintpoints` int

The number of result points.

#### Returns

 List<VectorBase\>

The list of points

### <a id="VM_Managed_DAFUL_SetCurveBase_GetAkimaSpline_System_Double___System_Double___System_Double___System_Int32_"></a> GetAkimaSpline\(double\[\], double\[\], double\[\], int\)

Get akima spline

```csharp
public static List<VectorBase> GetAkimaSpline(double[] position_x, double[] position_y, double[] position_z, int nprintpoints)
```

#### Parameters

`position_x` double\[\]

The array of X position

`position_y` double\[\]

The array of Y position

`position_z` double\[\]

The array of Z position

`nprintpoints` int

The number of result points.

#### Returns

 List<VectorBase\>

The list of points

### <a id="VM_Managed_DAFUL_SetCurveBase_GetCADBody"></a> GetCADBody\(\)

Gets the cad body from parent body.

```csharp
public Body GetCADBody()
```

#### Returns

 Body

### <a id="VM_Managed_DAFUL_SetCurveBase_GetDefaultMaxPenetration_System_Double__VM_Managed_IReferencable_"></a> GetDefaultMaxPenetration\(ref double, IReferencable\)

Gets the default maximum penetration.

```csharp
public bool GetDefaultMaxPenetration(ref double dMaxPenetration, IReferencable reference)
```

#### Parameters

`dMaxPenetration` double

The maximum penetration.

`reference` IReferencable

The reference.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetCurveBase_GetGeometryNavigatorInformation_System_Xml_XmlDocument_System_Xml_XmlElement_"></a> GetGeometryNavigatorInformation\(XmlDocument, XmlElement\)

Gets the geometry information for model navigator .

```csharp
public bool GetGeometryNavigatorInformation(XmlDocument xmlDom, XmlElement xmlEle)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument information.

`xmlEle` XmlElement

The XmlElement information.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetCurveBase_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` XmlDocument

The XmlDocument for object.

`xmlEle` XmlElement

The XmlElement for object.

`bHasChild` bool

if set to <code>true</code> [has child].

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetCurveBase_GetPointDirection_VM_Managed_VectorBase__VM_Managed_VectorBase__VM_Managed_IReferencable_"></a> GetPointDirection\(ref VectorBase, ref VectorBase, IReferencable\)

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

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SetCurveBase_GetPoints"></a> GetPoints\(\)

Get points

```csharp
public virtual VectorBase[] GetPoints()
```

#### Returns

 VectorBase\[\]

The array of points

### <a id="VM_Managed_DAFUL_SetCurveBase_GetPointsAboutOrigin"></a> GetPointsAboutOrigin\(\)

Get points about origin

```csharp
public virtual VectorBase[] GetPointsAboutOrigin()
```

#### Returns

 VectorBase\[\]

The array of points

### <a id="VM_Managed_DAFUL_SetCurveBase_GetProfilePoint_System_Boolean__System_Collections_Generic_List_VM_Managed_VectorBase___"></a> GetProfilePoint\(ref bool, ref List<VectorBase\>\)

Get profile points

```csharp
public virtual int GetProfilePoint(ref bool bCloseLoop, ref List<VectorBase> lst)
```

#### Parameters

`bCloseLoop` bool

true if closed loop, otherwise false.

`lst` List<VectorBase\>

The list of points

#### Returns

 int

### <a id="VM_Managed_DAFUL_SetCurveBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initialize the <xref href="VM.Managed.DAFUL.SetCurveBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The convert factor

