# Class ConcentratedLoadStandard
<a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard"></a>

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

<p>This class is to represent the characteristic properties of standard type.</p>

```csharp
public sealed class ConcentratedLoadStandard : ConcentratedLoadFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReserved
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md) ← 
[ConcentratedLoadStandard](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.md)

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
IVerifiable, 
IReserved

#### Inherited Members

[ConcentratedLoadFunction.ReferenceMarker](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md\#VM\_Managed\_DAFUL\_Flexible\_Force\_ConcentratedLoadFunction\_ReferenceMarker), 
[ConcentratedLoadFunction.\_ReferenceMarker](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md\#VM\_Managed\_DAFUL\_Flexible\_Force\_ConcentratedLoadFunction\_\_ReferenceMarker), 
[ConcentratedLoadFunction.Type](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md\#VM\_Managed\_DAFUL\_Flexible\_Force\_ConcentratedLoadFunction\_Type), 
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
LinkContainer.SetContainer\(IOwned, bool\), 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard__ctor"></a> ConcentratedLoadStandard\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard" data-throw-if-not-resolved="false"></xref> class.</p>
<p><xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public ConcentratedLoadStandard()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard_ForceFunction"></a> ForceFunction

<p>Gets or sets the force function.</p>
<p>힘 함수를 가져오거나 넣어줍니다.</p>
<p>
Type : ElementFunction
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : false
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public ElementFunction ForceFunction { get; set; }
```

#### Property Value

 [ElementFunction](VM.Managed.DAFUL.Flexible.Force.ElementFunction.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard_FunctionDirectionType"></a> FunctionDirectionType

<p>Gets or sets the type of the direction.</p>
<p>방향의 타입을 가져오거나 넣어줍니다.</p>
<p>
Type : DirectionType
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : Direction Type
Control Type : N/A
ToolTip : N/A
Error Message : N/A
Category : Load
Category Index : 1
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public ConcentratedLoadStandard.DirectionType FunctionDirectionType { get; set; }
```

#### Property Value

 [ConcentratedLoadStandard](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.md).[DirectionType](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.DirectionType.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard_TorqueFunction"></a> TorqueFunction

<p>Gets or sets the torque function.</p>
<p>회전력 함수를 가져오거나 넣어줍니다.</p>
<p>
Type : ElementFunction
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : false
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public ElementFunction TorqueFunction { get; set; }
```

#### Property Value

 [ElementFunction](VM.Managed.DAFUL.Flexible.Force.ElementFunction.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard_Type"></a> Type

<p>Gets the function type.</p>
<p>함수 타입을 가져오거나 넣어줍니다.</p>

```csharp
public override ConcentratedLoadFunction.FunctionType Type { get; }
```

#### Property Value

 [ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md).[FunctionType](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard_UseForceFunction"></a> UseForceFunction

<p>Gets or sets a value indicating whether this <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.ForceFunction" data-throw-if-not-resolved="false"></xref> is use.</p>
<p>이 <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.ForceFunction" data-throw-if-not-resolved="false"></xref> 사용 여부를 가져오거나 넣어줍니다.</p>
<p>
Type : bool
LinkRequestUpdate 시 처리 :
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : false
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public bool UseForceFunction { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard_UseTorqueFunction"></a> UseTorqueFunction

<p>Gets or sets a value indicating whether this <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.TorqueFunction" data-throw-if-not-resolved="false"></xref> is use.</p>
<p>이 <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.TorqueFunction" data-throw-if-not-resolved="false"></xref> 사용 여부를 가져오거나 넣어줍니다.</p>
<p>
Type : bool
LinkRequestUpdate 시 처리 :
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : false
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public bool UseTorqueFunction { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadStandard_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>
<p>단위 변화 팩터를 이용하여 필드를 초기화 해줍니다.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>
<p>단위 변환 팩터.</p>

