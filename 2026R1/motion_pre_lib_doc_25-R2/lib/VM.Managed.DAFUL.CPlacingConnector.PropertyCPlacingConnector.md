#  Class PropertyCPlacingConnector

Namespace: [VM.Managed.DAFUL.CPlacingConnector](VM.Managed.DAFUL.CPlacingConnector.md)  
Assembly: VMDCPlacingConnector.dll  

This class is to represent the property of cplacing connector.

```csharp
public class PropertyCPlacingConnector : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyCPlacingConnector](VM.Managed.DAFUL.CPlacingConnector.PropertyCPlacingConnector.md)

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

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector__ctor"></a> PropertyCPlacingConnector\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.PropertyCPlacingConnector" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyCPlacingConnector()
```

## Properties

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector_CPlacing"></a> CPlacing

Gets or sets the cplacing.

```csharp
public Placing CPlacing { get; set; }
```

#### Property Value

 [Placing](VM.Managed.DAFUL.CPlacingConnector.Placing.md)

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector_SegmentToPath"></a> SegmentToPath

Gets or sets the segment to path.

```csharp
public SegmentToPathGroup SegmentToPath { get; set; }
```

#### Property Value

 [SegmentToPathGroup](VM.Managed.DAFUL.CPlacingConnector.SegmentToPathGroup.md)

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector_SegmentToSegment"></a> SegmentToSegment

Gets or sets the segment to segment.

```csharp
public SegmentToSegmentGroup SegmentToSegment { get; set; }
```

#### Property Value

 [SegmentToSegmentGroup](VM.Managed.DAFUL.CPlacingConnector.SegmentToSegmentGroup.md)

## Methods

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector_FindConnectable_VM_Managed_DAFUL_DocumentAnalysis_System_Collections_Generic_Dictionary_VM_Managed_DAFUL_IConnectable_VM_Managed_TMatrix___System_Collections_Generic_Dictionary_VM_Managed_DAFUL_IConnectable_VM_Managed_TMatrix___"></a> FindConnectable\(DocumentAnalysis, ref Dictionary<IConnectable, TMatrix\>, ref Dictionary<IConnectable, TMatrix\>\)

Find Connectable entity

```csharp
public static void FindConnectable(DocumentAnalysis document, ref Dictionary<IConnectable, TMatrix> baseConnectables, ref Dictionary<IConnectable, TMatrix> actionConnectables)
```

#### Parameters

`document` DocumentAnalysis

The document

`baseConnectables` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<IConnectable, TMatrix\>

The base connectable entity

`actionConnectables` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<IConnectable, TMatrix\>

The action connectable entity

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector_FindConnectable_VM_Managed_DAFUL_DocumentAnalysis_System_Func_System_String_System_Boolean__System_Collections_Generic_Dictionary_VM_Managed_DAFUL_IConnectable_VM_Managed_TMatrix___"></a> FindConnectable\(DocumentAnalysis, Func<string, bool\>, ref Dictionary<IConnectable, TMatrix\>\)

Find Connectable entity

```csharp
public static void FindConnectable(DocumentAnalysis document, Func<string, bool> funcFilter, ref Dictionary<IConnectable, TMatrix> connectables)
```

#### Parameters

`document` DocumentAnalysis

The document

`funcFilter` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

The filter function

`connectables` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<IConnectable, TMatrix\>

The connectable entity

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector_FindReference_VM_Managed_IInstanceContainer_System_Type_System_Collections_Generic_List_VM_Managed_DAFUL_IConnectable___"></a> FindReference\(IInstanceContainer, Type, ref List<IConnectable\>\)

Find reference

```csharp
public static List<Reference> FindReference(IInstanceContainer instanceContainer, Type type, ref List<IConnectable> lstConnectable)
```

#### Parameters

`instanceContainer` IInstanceContainer

The subsystem

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type

`lstConnectable` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IConnectable\>

The connectable

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Reference\>

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector_FindReferenceInCurrentDocument_VM_Managed_DAFUL_DocumentAnalysis_VM_Managed_InstanceContainer_VM_Managed_DAFUL_IConnectable_VM_Managed_TMatrix__"></a> FindReferenceInCurrentDocument\(DocumentAnalysis, InstanceContainer, IConnectable, ref TMatrix\)

Find reference entity in current document

```csharp
public static IConnectable FindReferenceInCurrentDocument(DocumentAnalysis document, InstanceContainer instance, IConnectable connectable, ref TMatrix matT)
```

#### Parameters

`document` DocumentAnalysis

The document

`instance` InstanceContainer

The instance

`connectable` IConnectable

The connectable entity

`matT` TMatrix

The transform matrix

#### Returns

 IConnectable

### <a id="VM_Managed_DAFUL_CPlacingConnector_PropertyCPlacingConnector_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

