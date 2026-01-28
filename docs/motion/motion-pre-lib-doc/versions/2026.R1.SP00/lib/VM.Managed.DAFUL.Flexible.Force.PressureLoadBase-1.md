# Class PressureLoadBase<TProperty\>
<a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1"></a>

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

<p>This base class is to represent the pressure load.</p>
<p>이 클래스는 압력하중의 기본 정보를 나타냅니다.</p>

```csharp
public abstract class PressureLoadBase<TProperty> : Entity<TProperty>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, IEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IVisible, IDocumentOwner, INamed, INavigatorItem, IVisible, IMultiChangable, IHasProperty, IGroup, IDraw, IDrawIcon, IDrawChangeFacet, IArgument, IEntityRelation, IGenerable, IReportable where TProperty : Property, new()
```

#### Type Parameters

`TProperty` 

<p>The type of the property.</p>
<p>속성 타입.</p>

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<EntityEventCore\> ← 
ContainerObject<EntityEventCore\> ← 
[EntityBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[Entity<TProperty\>](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs) ← 
[PressureLoadBase<TProperty\>](VM.Managed.DAFUL.Flexible.Force.PressureLoadBase\-1.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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
IArgument, 
IEntityRelation, 
IGenerable, 
IReportable

#### Inherited Members

[Entity<TProperty\>.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<TProperty\>.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<TProperty\>.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[Entity<TProperty\>.Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserializationForAttribute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkRequestDestroying\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FixUp\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.WriteTemplateImpl\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.ReadTemplateImpl\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.LinkAddedToDocument\(object, AddToDocEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.FullName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.NonSymmetricName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.DisplayName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsEnabled](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Comment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.HasLayerExplicitly](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.UntypedProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsFileProperty](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.Layer](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
[EntityBase.IsVisible](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Entity.cs), 
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

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1__ctor"></a> PressureLoadBase\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadBase%601" data-throw-if-not-resolved="false"></xref></p> class.
<p><xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadBase%601" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public PressureLoadBase()
```

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1__ctor_System_String_"></a> PressureLoadBase\(string\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadBase%601" data-throw-if-not-resolved="false"></xref> class.</p>
<p><xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadBase%601" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public PressureLoadBase(string strName)
```

#### Parameters

`strName` string

<p>Name.</p>
<p>이름</p>

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_Area"></a> Area

<p>Gets the area through faceset or range.</p>
<p>면집합이나 범위에서 면적을 가져옵니다.</p>

```csharp
public double Area { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_GenerableImpl"></a> GenerableImpl

<p>Gets a value indicating whether this instance is generable.</p>
<p>이 객체가 일반적으로 변환 가능한지 여부를 가져옵니다.</p>

```csharp
protected virtual bool GenerableImpl { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_HasLayerExplicitly"></a> HasLayerExplicitly

Gets a value indicating whether object has a layer explicitly.

```csharp
protected override bool HasLayerExplicitly { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_Hide"></a> Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_NameOfBody"></a> NameOfBody

<p>Gets the name of body referenced PLoadComponent.</p>
<p>Pressure Load의 타겟요소가 참조하는 바디의 이름을 가져옵니다.</p>
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
public string NameOfBody { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_PLoadComponent"></a> PLoadComponent

<p>Gets or sets the pressure load component.</p>
<p>압력하중 타겟요소를 가져오거나 넣어줍니다.</p>
<p>
Type : IGeometricalComponent
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
Category : Force or Load
Category Index : 1
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public IGeometricalComponent PLoadComponent { get; set; }
```

#### Property Value

 IGeometricalComponent

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_ReferenceType"></a> ReferenceType

<p>Gets the type of the array for argument.</p>
<p>인자에 쓰일 타입을 가져옵니다.</p>

```csharp
public virtual string ReferenceType { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1__PLoadComponent"></a> \_PLoadComponent

<p>Gets or sets the pressure load component.</p>
<p>압력하중 타겟요소를 가져오거나 넣어줍니다.</p>
<p>
Type : IGeometricalComponent
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
Category : Force or Load
Category Index : 1
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public Linker<IGeometricalComponent> _PLoadComponent { get; set; }
```

#### Property Value

 Linker<IGeometricalComponent\>

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

<p>Draws the icon.</p>
<p>아이콘을 그려줍니다.</p>

```csharp
public void Draw(Canvas canvas)
```

#### Parameters

`canvas` [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

<p>The canvas has icon information.</p>
<p>아이콘 정보를 가지는 캔버스</p>

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_FindLocal_System_String_"></a> FindLocal\(string\)

<p>Finds the local.</p>
<p>특정한 오브젝트로부터 이름을 가지고 원하는 오브젝트를 가져오는 함수입니다.</p>

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

<p>The Name that want to find.</p>
<p>찾고 싶은 엔티티의 이름입니다.</p>

#### Returns

 IObjectBase

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

<p>Gets the name of the unnamed object.</p>
<p>이름이 없는 오브젝트에 정의된 이름을 가져오는 함수입니다.</p>

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` object

<p>The object that find to specialize name.</p>
<p>특정한 이름을 찾고자 하는 오브젝트.</p>

#### Returns

 string

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

<p>Request for update the linked object.</p>
<p>참조된 객체가 갱신될 때 호출되는 이벤트.</p>

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

<p>The linked object.</p>
<p>참조된 객체입니다.</p>

`arg` LinkEventArgs

<p>instance containing the event data.</p>
<p>갱신 이벤트 정보입니다..</p>

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

<p>Called when [deserialization].</p>
<p>이 클래스의 data가 Load되고 나서 호출되는 함수입니다.</p>

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

<p>The sender.</p>
<p>Load 관련 객체정보입니다.</p>

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_ReDraw"></a> ReDraw\(\)

<p> Redraw.</p>
<p> 다시 그려줍니다.</p>

```csharp
public void ReDraw()
```

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadBase_1_ReplaceEntityImpl_VM_Managed_Document_VM_Managed_IGenerable_"></a> ReplaceEntityImpl\(Document, IGenerable\)

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

