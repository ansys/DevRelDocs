#  Class Weld

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

This class is to represent the weld in mesh free.

```csharp
[CanNotOpenWithNewPreprocessor]
public class Weld : Entity<PropertyWeld>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IDrawChangeFacet, ITransformable, IEntityRelation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<PropertyWeld\> ← 
[Weld](VM.Managed.DAFUL.MeshFree.Weld.md)

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
IDrawChangeFacet, 
ITransformable, 
IEntityRelation

#### Inherited Members

Entity<PropertyWeld\>.Initialize\(Unit.ConvertFactor\), 
Entity<PropertyWeld\>.GetUnnamedObjectName\(object\), 
Entity<PropertyWeld\>.FindLocal\(string\), 
Entity<PropertyWeld\>.Property, 
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

[BodyHelper.CreateGINFFileV3\_2\(IAttributeContainer\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_CreateGINFFileV3\_2\_VM\_Managed\_IAttributeContainer\_), 
[BodyHelper.CreateGINFFileV3\_2\(IAttributeContainer, string\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_CreateGINFFileV3\_2\_VM\_Managed\_IAttributeContainer\_System\_String\_), 
[BodyHelper.CreateGINFFileV3\_2\(IAttributeContainer, string, VectorBase\[\], uint\[\], VectorBase\[\], uint\[\]\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_CreateGINFFileV3\_2\_VM\_Managed\_IAttributeContainer\_System\_String\_VM\_Managed\_VectorBase\_\_\_System\_UInt32\_\_\_VM\_Managed\_VectorBase\_\_\_System\_UInt32\_\_\_), 
[BodyHelper.GenerateMeshInfo\(IAttributeContainer, ref MeshFreeMeshType, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\], bool\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_GenerateMeshInfo\_VM\_Managed\_IAttributeContainer\_VM\_Managed\_MeshFreeMeshType\_\_VM\_Managed\_VectorBase\_\_\_\_System\_UInt32\_\_\_\_VM\_Managed\_VectorBase\_\_\_\_System\_UInt32\_\_\_\_System\_Boolean\_), 
[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BodyHelper.GetMeshFreeDefaultMaxFacetSize\(IAttributeContainer\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_GetMeshFreeDefaultMaxFacetSize\_VM\_Managed\_IAttributeContainer\_), 
[BodyHelper.UpdateMeshFreeNodePropertyAndMaxFacetSize\(IAttributeContainer\)](VM.Managed.DAFUL.MeshFree.BodyHelper.md\#VM\_Managed\_DAFUL\_MeshFree\_BodyHelper\_UpdateMeshFreeNodePropertyAndMaxFacetSize\_VM\_Managed\_IAttributeContainer\_)

## Constructors

### <a id="VM_Managed_DAFUL_MeshFree_Weld__ctor"></a> Weld\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Weld()
```

### <a id="VM_Managed_DAFUL_MeshFree_Weld__ctor_System_String_"></a> Weld\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Weld(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_Weld_ActionBody"></a> ActionBody

Gets or sets the action body.

```csharp
public ObjectBase ActionBody { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_MeshFree_Weld_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_Weld_Hide"></a> Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_Weld_PointSetComponent"></a> PointSetComponent

Gets or sets the point set component.

```csharp
public SetPoint PointSetComponent { get; set; }
```

#### Property Value

 SetPoint

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_Weld_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public virtual void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_DAFUL_MeshFree_Weld_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_MeshFree_Weld_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

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

### <a id="VM_Managed_DAFUL_MeshFree_Weld_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob unnamed.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_MeshFree_Weld_GetWeldPoint_VM_Managed_CAD_Body_VM_Managed_CAD_Body_VM_Managed_Range_VM_Managed_VectorBase____VM_Managed_VectorBase____"></a> GetWeldPoint\(Body, Body, Range, ref VectorBase\[\], ref VectorBase\[\]\)

Gets the weld point.

```csharp
public bool GetWeldPoint(Body bBase, Body bAct, Range par, ref VectorBase[] vecUpper, ref VectorBase[] vecLower)
```

#### Parameters

`bBase` Body

The b base.

`bAct` Body

The b act.

`par` Range

The par.

`vecUpper` VectorBase\[\]

The vec upper.

`vecLower` VectorBase\[\]

The vec lower.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_Weld_GetWeldPoint_VM_Managed_Range_VM_Managed_VectorBase____VM_Managed_VectorBase____"></a> GetWeldPoint\(Range, ref VectorBase\[\], ref VectorBase\[\]\)

Gets the weld point.

```csharp
public bool GetWeldPoint(Range par, ref VectorBase[] vecUpper, ref VectorBase[] vecLower)
```

#### Parameters

`par` Range

The par.

`vecUpper` VectorBase\[\]

The vec upper.

`vecLower` VectorBase\[\]

The vec lower.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_Weld_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Weld for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_MeshFree_Weld_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_MeshFree_Weld_ReDraw"></a> ReDraw\(\)

Redraw.

```csharp
public void ReDraw()
```

### <a id="VM_Managed_DAFUL_MeshFree_Weld_ReadFile_VM_Managed_Document3D_System_String_System_Collections_Generic_List_VM_Managed_PointBase__System_Collections_Generic_List_VM_Managed_DirectionBase__System_Collections_Generic_List_VM_Managed_Variable__"></a> ReadFile\(Document3D, string, List<PointBase\>, List<DirectionBase\>, List<Variable\>\)

Reads the file.

```csharp
public static void ReadFile(Document3D activeDoc, string strFilePath, List<PointBase> Points, List<DirectionBase> Directions, List<Variable> Ranges)
```

#### Parameters

`activeDoc` Document3D

The active doc.

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR file path.

`Points` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<PointBase\>

The points.

`Directions` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<DirectionBase\>

The directions.

`Ranges` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Variable\>

The ranges.

### <a id="VM_Managed_DAFUL_MeshFree_Weld_WriteFile_System_String_System_String___"></a> WriteFile\(string, string\[\]\)

Writes the file.

```csharp
public static void WriteFile(string strFilePath, string[] arLines)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR file path.

`arLines` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar lines.

