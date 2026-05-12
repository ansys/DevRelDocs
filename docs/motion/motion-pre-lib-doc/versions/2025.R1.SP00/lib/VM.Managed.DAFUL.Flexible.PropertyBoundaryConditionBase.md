#  Class PropertyBoundaryConditionBase

Namespace: [VM.Managed.DAFUL.Flexible](VM.Managed.DAFUL.Flexible.md)  
Assembly: VMFlexibleBase.dll  

<p>This class is to represent the boundary condition properties.</p>
<p>이 클래스는 경계조건 속성을 나타냅니다.</p>
<p>
        Symmetric Modeling : No
        Reference : Yes
        Reference Type : VM.Managed.Reference
        삭제시 Reservable한 Link 변수 : N/A
        Generic Collection에 담겨있는 Link 변수 : N/A
        </p>

```csharp
public abstract class PropertyBoundaryConditionBase : Property, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyBoundaryConditionBase](VM.Managed.DAFUL.Flexible.PropertyBoundaryConditionBase.md)

#### Derived

[PropertyBoundaryCondition](VM.Managed.DAFUL.Flexible.PropertyBoundaryCondition.md)

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
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[FlexibleBaseHelper.SetGeomRefinementForIcon\(IAttributeContainer, Face\)](VM.Managed.DAFUL.Flexible.FlexibleBaseHelper.md\#VM\_Managed\_DAFUL\_Flexible\_FlexibleBaseHelper\_SetGeomRefinementForIcon\_VM\_Managed\_IAttributeContainer\_VM\_Managed\_CAD\_Face\_), 
[FlexibleBaseHelper.SetGeomRefinementForIcon\(IAttributeContainer, ICollection<Face\>\)](VM.Managed.DAFUL.Flexible.FlexibleBaseHelper.md\#VM\_Managed\_DAFUL\_Flexible\_FlexibleBaseHelper\_SetGeomRefinementForIcon\_VM\_Managed\_IAttributeContainer\_System\_Collections\_Generic\_ICollection\_VM\_Managed\_CAD\_Face\_\_)

## Constructors

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase__ctor"></a> PropertyBoundaryConditionBase\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.PropertyBoundaryConditionBase" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.PropertyBoundaryConditionBase" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public PropertyBoundaryConditionBase()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_ConstrainedType"></a> ConstrainedType

<p>Gets or sets the constrained type.</p>
<p>경계 조건을 가져오거나 넣어줍니다.</p>
<p>
        Type : BCConstrainedType
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Constrained Type
        Control Type : Combo box
        ToolTip : N/A
        Error Message : N/A
        Category : Boundary Condition
        Category Index : 1
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public PropertyBoundaryConditionBase.BCConstrainedType ConstrainedType { get; set; }
```

#### Property Value

 [PropertyBoundaryConditionBase](VM.Managed.DAFUL.Flexible.PropertyBoundaryConditionBase.md).[BCConstrainedType](VM.Managed.DAFUL.Flexible.PropertyBoundaryConditionBase.BCConstrainedType.md)

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_ElementRX"></a> ElementRX

<p>Gets or sets the element RX.</p>
<p>회전 x방향의 값을 가져오거나 넣어줍니다.</p>
<p>
        Type : CompositeFieldUsable
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Rotational X
        Control Type : Check box
        ToolTip : N/A
        Error Message : N/A
        Category : Boundary Condition
        Category Index : 5
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public CompositeFieldUsable ElementRX { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_ElementRY"></a> ElementRY

<p>Gets or sets the element RY.</p>
<p>회전 y방향의 값을 가져오거나 넣어줍니다.</p>
<p>
        Type : CompositeFieldUsable
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Rotational Y
        Control Type : Check box
        ToolTip : N/A
        Error Message : N/A
        Category : Boundary Condition
        Category Index : 6
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public CompositeFieldUsable ElementRY { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_ElementRZ"></a> ElementRZ

<p>Gets or sets the element RZ.</p>
<p>회전 z방향의 값을 가져오거나 넣어줍니다.</p>
<p>
        Type : CompositeFieldUsable
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Rotational Z
        Control Type : Check box
        ToolTip : N/A
        Error Message : N/A
        Category : Boundary Condition
        Category Index : 7
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public CompositeFieldUsable ElementRZ { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_ElementTX"></a> ElementTX

<p>Gets or sets the element TX.</p>
<p>병진 x방향의 값을 가져오거나 넣어줍니다.</p>
<p>
        Type : CompositeFieldUsable
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Translational X
        Control Type : Check box
        ToolTip : N/A
        Error Message : N/A
        Category : Boundary Condition
        Category Index : 2
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public CompositeFieldUsable ElementTX { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_ElementTY"></a> ElementTY

<p>Gets or sets the element TY.</p>
<p>병진 y방향의 값을 가져오거나 넣어줍니다.</p>
<p>
        Type : CompositeFieldUsable
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Translational Y
        Control Type : Check box
        ToolTip : N/A
        Error Message : N/A
        Category : Boundary Condition
        Category Index : 3
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public CompositeFieldUsable ElementTY { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_ElementTZ"></a> ElementTZ

<p>Gets or sets the element TZ.</p>
<p>병진 z방향의 값을 가져오거나 넣어줍니다.</p>
<p>
        Type : CompositeFieldUsable
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Translational Z
        Control Type : Check box
        ToolTip : N/A
        Error Message : N/A
        Category : Boundary Condition
        Category Index : 4
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public CompositeFieldUsable ElementTZ { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_PenaltyScale"></a> PenaltyScale

<p>Gets or sets the penalty scale.</p>
<p>페날티 스케일을 가져오거나 넣어줍니다.</p>
<p>
        Type : Variable
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Penalty Scale
        Control Type : Variable Editor
        ToolTip : N/A
        Error Message : N/A
        Category : Boundary Condition
        Category Index : 8
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public ExpressionValueVariable PenaltyScale { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_Flexible_PropertyBoundaryConditionBase_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>
<p>단위 변화 팩터를 이용하여 필드를 초기화 해줍니다.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>
<p>단위 변환 팩터.</p>

