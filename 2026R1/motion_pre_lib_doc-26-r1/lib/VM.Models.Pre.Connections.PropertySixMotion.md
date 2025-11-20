# Class PropertySixMotion
<a id="VM_Models_Pre_Connections_PropertySixMotion"></a>

Namespace: [VM.Models.Pre.Connections](VM.Models.Pre.Connections.md)  
Assembly: VM.Models.Pre.Connections.dll  

<p>This class is to represent the six-motion constraint properties.</p>
<p>
Symmetric Modeling : No
Reference : No
Reference Type : N/A
삭제시 Reservable한 Link 변수 : N/A
Generic Collection에 담겨있는 Link 변수 : N/A
</p>

```csharp
public class PropertySixMotion : PropertyConstraint, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IArgument
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
[Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs) ← 
[PropertyConstraint](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Constraint.cs) ← 
[PropertySixMotion](VM.Models.Pre.Connections.PropertySixMotion.md)

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
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IArgument

#### Inherited Members

[PropertyConstraint.ReferenceType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Constraint.cs), 
[PropertyConstraint.ArgumentType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Constraint.cs), 
[Property.Initialize\(Unit.ConvertFactor\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.PropertyRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.GetUnnamedObjectName\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
[Property.Draw\(Canvas, TMatrix, TMatrix, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs), 
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

### <a id="VM_Models_Pre_Connections_PropertySixMotion__ctor"></a> PropertySixMotion\(\)

<p>Initializes a new instance of the <xref href="VM.Models.Pre.Connections.PropertySixMotion" data-throw-if-not-resolved="false"></xref> class.</p>

```csharp
public PropertySixMotion()
```

## Properties

### <a id="VM_Models_Pre_Connections_PropertySixMotion_ArgumentType"></a> ArgumentType

Gets the type of the argument

```csharp
public override ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### <a id="VM_Models_Pre_Connections_PropertySixMotion_ReferenceType"></a> ReferenceType

Gets the type of the array for argument.

```csharp
public override string ReferenceType { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Connections_PropertySixMotion_RotationalXProperty"></a> RotationalXProperty

<p>Gets or sets the rotational x property.</p>
<p>
Type : PropertyRevolute
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Rotational X
Control Type : N/A
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public PropertyRevolute RotationalXProperty { get; set; }
```

#### Property Value

 [PropertyRevolute](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Revolute.cs)

### <a id="VM_Models_Pre_Connections_PropertySixMotion_RotationalYProperty"></a> RotationalYProperty

<p>Gets or sets the rotational y property.</p>
<p>
Type : PropertyRevolute
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Rotational Y
Control Type : N/A
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public PropertyRevolute RotationalYProperty { get; set; }
```

#### Property Value

 [PropertyRevolute](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Revolute.cs)

### <a id="VM_Models_Pre_Connections_PropertySixMotion_RotationalZProperty"></a> RotationalZProperty

<p>Gets or sets the rotational z property.</p>
<p>
Type : PropertyRevolute
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Rotational Z
Control Type : N/A
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public PropertyRevolute RotationalZProperty { get; set; }
```

#### Property Value

 [PropertyRevolute](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Revolute.cs)

### <a id="VM_Models_Pre_Connections_PropertySixMotion_TranslationalXProperty"></a> TranslationalXProperty

<p>Gets or sets the translational x property.</p>
<p>
Type : PropertyTranslational
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Translational X
Control Type : N/A
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public PropertyTranslational TranslationalXProperty { get; set; }
```

#### Property Value

 [PropertyTranslational](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Translational.cs)

### <a id="VM_Models_Pre_Connections_PropertySixMotion_TranslationalYProperty"></a> TranslationalYProperty

<p>Gets or sets the translational y property.</p>
<p>
Type : PropertyTranslational
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Translational Y
Control Type : N/A
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public PropertyTranslational TranslationalYProperty { get; set; }
```

#### Property Value

 [PropertyTranslational](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Translational.cs)

### <a id="VM_Models_Pre_Connections_PropertySixMotion_TranslationalZProperty"></a> TranslationalZProperty

<p>Gets or sets the translational z property.</p>
<p>
Type : PropertyTranslational
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Translational Z
Control Type : N/A
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public PropertyTranslational TranslationalZProperty { get; set; }
```

#### Property Value

 [PropertyTranslational](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Translational.cs)

### <a id="VM_Models_Pre_Connections_PropertySixMotion_UseRotationalXProperty"></a> UseRotationalXProperty

<p>Gets or sets the rotational x property use flag.</p>
<p>
Type : bool
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Use Rotational X
Control Type : Check box
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public bool UseRotationalXProperty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Connections_PropertySixMotion_UseRotationalYProperty"></a> UseRotationalYProperty

<p>Gets or sets the rotational y property use flag.</p>
<p>
Type : bool
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Use Rotational Y
Control Type : Check box
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public bool UseRotationalYProperty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Connections_PropertySixMotion_UseRotationalZProperty"></a> UseRotationalZProperty

<p>Gets or sets the rotational z property use flag.</p>
<p>
Type : bool
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Use Rotational Z
Control Type : Check box
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public bool UseRotationalZProperty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Connections_PropertySixMotion_UseTranslationalXProperty"></a> UseTranslationalXProperty

<p>Gets or sets the translational x property use flag.</p>
<p>
Type : bool
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Use Translational X
Control Type : Check box
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public bool UseTranslationalXProperty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Connections_PropertySixMotion_UseTranslationalYProperty"></a> UseTranslationalYProperty

<p>Gets or sets the translational y property use flag.</p>
<p>
Type : bool
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Use Translational Y
Control Type : Check box
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public bool UseTranslationalYProperty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Connections_PropertySixMotion_UseTranslationalZProperty"></a> UseTranslationalZProperty

<p>Gets or sets the translational z property use flag.</p>
<p>
Type : bool
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Use Translational Z
Control Type : Check box
ToolTip : N/A
Error Message : N/A
Category : Property
Category Index : N/A
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public bool UseTranslationalZProperty { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Models_Pre_Connections_PropertySixMotion_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Models_Pre_Connections_PropertySixMotion_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` object

The unnamed object.

#### Returns

 string

The unnamed object name.

### <a id="VM_Models_Pre_Connections_PropertySixMotion_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>

