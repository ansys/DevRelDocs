#  Class TieBase<TProperty\>

Namespace: [VM.Managed.DAFUL.Flexible.Contact](VM.Managed.DAFUL.Flexible.Contact.md)  
Assembly: VMFlexibleBase.dll  

<p>This class is to represent the tie base.</p>
<p>이 클래스는 타이의 기본을 나타냅니다.</p>
<p>
        Symmetric Modeling : No
        Reference : Yes
        Reference Type : VM.Managed.Reference
        삭제시 Reservable한 Link 변수 : N/A
        Generic Collection에 담겨있는 Link 변수 : N/A
        </p>

```csharp
public abstract class TieBase<TProperty> : Entity<TProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IDrawChangeFacet, IEntityRelation, IGenerable, IReportable, IFlip where TProperty : PropertyTieBase, new()
```

#### Type Parameters

`TProperty` 

<p>The type of the property.</p>
<p>타이의 속성.</p>

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
EntityBase ← 
Entity<TProperty\> ← 
[TieBase<TProperty\>](VM.Managed.DAFUL.Flexible.Contact.TieBase\-1.md)

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
IEntityRelation, 
IGenerable, 
IReportable, 
IFlip

#### Inherited Members

Entity<TProperty\>.Initialize\(Unit.ConvertFactor\), 
Entity<TProperty\>.GetUnnamedObjectName\(object\), 
Entity<TProperty\>.FindLocal\(string\), 
Entity<TProperty\>.Property, 
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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[FlexibleBaseHelper.SetGeomRefinementForIcon\(IAttributeContainer, Face\)](VM.Managed.DAFUL.Flexible.FlexibleBaseHelper.md\#VM\_Managed\_DAFUL\_Flexible\_FlexibleBaseHelper\_SetGeomRefinementForIcon\_VM\_Managed\_IAttributeContainer\_VM\_Managed\_CAD\_Face\_), 
[FlexibleBaseHelper.SetGeomRefinementForIcon\(IAttributeContainer, ICollection<Face\>\)](VM.Managed.DAFUL.Flexible.FlexibleBaseHelper.md\#VM\_Managed\_DAFUL\_Flexible\_FlexibleBaseHelper\_SetGeomRefinementForIcon\_VM\_Managed\_IAttributeContainer\_System\_Collections\_Generic\_ICollection\_VM\_Managed\_CAD\_Face\_\_)

## Constructors

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1__ctor"></a> TieBase\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Contact.TieBase%601" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Contact.TieBase%601" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public TieBase()
```

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1__ctor_System_String_"></a> TieBase\(string\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Contact.TieBase%601" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Contact.TieBase%601" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public TieBase(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

<p>Name of the STR.</p>
<p>이름</p>

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_ActionGeom"></a> ActionGeom

Gets or sets the action 3D contact geometry.

```csharp
public ContactGeom3D ActionGeom { get; set; }
```

#### Property Value

 ContactGeom3D

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_BaseGeom"></a> BaseGeom

<p>Gets or sets the base 3D contact geometry.</p>
<p>베이스 3D 접촉 요소를 가져오거나 넣어줍니다.</p>
<p>
        Type : ContactGeom3D
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Entity Name
        Control Type : Entity Picker
        ToolTip : N/A
        Error Message : N/A
        Category : Tie
        Category Index : 1
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public ContactGeom3D BaseGeom { get; set; }
```

#### Property Value

 ContactGeom3D

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_CanSwitchImpl"></a> CanSwitchImpl

```csharp
protected virtual bool CanSwitchImpl { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_GenerableImpl"></a> GenerableImpl

<p>Gets a value indicating whether this instance is generable.</p>
<p>이 객체가 일반적으로 변환 가능한지 여부를 가져옵니다.</p>

```csharp
protected virtual bool GenerableImpl { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_Hide"></a> Hide

<p>Gets or sets a value indicating whether this instance is hide.</p>
<p>아이콘을 숨길지 여부를 가져오거나 넣어줍니다.</p>
<p>
        Type : bool
        LinkRequestUpdate 시 처리 :
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : false
        변경 시 DFS 재생성 여부 : No
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_NameOfActionBody"></a> NameOfActionBody

<p>Gets the name of body referenced tie action geometry.</p>
<p>Tie의 Action의 타겟요소가 참조하는 바디의 이름을 가져옵니다.</p>
<p>
        Type : string
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : false
        변경 시 DFS 재생성 여부 : No
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public string NameOfActionBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_NameOfBaseBody"></a> NameOfBaseBody

<p>Gets the name of body referenced tie base geometry.</p>
<p>Tie의 Base 타겟요소가 참조하는 바디의 이름을 가져옵니다.</p>
<p>
        Type : string
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : false
        변경 시 DFS 재생성 여부 : No
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public string NameOfBaseBody { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

<p>Draws the icon.</p>
<p>아이콘을 그립니다.</p>

```csharp
public void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

<p>The canvas has icon information.</p>
<p>아이콘 정보를 가지는 캔버스</p>

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_FindLocal_System_String_"></a> FindLocal\(string\)

<p>Finds the local.</p>
<p>특정한 오브젝트로부터 이름을 가지고 원하는 오브젝트를 가져오는 함수입니다.</p>

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

<p>The Name that want to find.</p>
<p>찾고 싶은 엔티티의 이름입니다.</p>

#### Returns

 IObjectBase

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

<p>Gets the name of the unnamed object.</p>
<p>이름이 없는 오브젝트에 정의된 이름을 가져오는 함수입니다.</p>

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

<p>The ob unnamed.</p>
<p>특정한 이름을 찾고자 하는 오브젝트.</p>

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>
<p>단위 변화 팩터를 이용하여 필드를 초기화 해줍니다.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>
<p>단위 변환 팩터.</p>

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

<p>Request for update the linked object.</p>
<p>참조된 객체가 갱신될 때 호출되는 이벤트.</p>

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

<p>The linked object.</p>
<p>참조된 객체입니다.</p>

`arg` LinkEventArgs

<p>instance containing the event data.</p>
<p>갱신 이벤트 정보입니다..</p>

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

<p>Called when [deserialization].</p>
<p>이 클래스의 data가 Load되고 나서 호출되는 함수입니다.</p>

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

<p>The sender.</p>
<p>Load 관련 객체정보입니다.</p>

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_ReDraw"></a> ReDraw\(\)

<p> Redraw.</p>
<p> 다시 그려줍니다.</p>

```csharp
public void ReDraw()
```

### <a id="VM_Managed_DAFUL_Flexible_Contact_TieBase_1_ReplaceEntityImpl_VM_Managed_Document_VM_Managed_IGenerable_"></a> ReplaceEntityImpl\(Document, IGenerable\)

<p>Replace entity.</p>
<p>엔티티를 대체합니다.</p>

```csharp
protected virtual void ReplaceEntityImpl(Document doc, IGenerable generableNew)
```

#### Parameters

`doc` Document

<p>The document.</p>
<p>도큐먼트</p>

`generableNew` IGenerable

<p>The new generable entity.</p>
<p>새로운 엔티티</p>

