# Class PressureLoadStandard
<a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard"></a>

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

<p>This class is to represent the characteristic properties of standard type.</p>
<p>이 클래스는 기본 함수를 나타냅니다.</p>
<p>
Symmetric Modeling : No
Reference : No
Reference Type : N/A
삭제시 Reservable한 Link 변수 : N/A
Generic Collection에 담겨있는 Link 변수 : N/A
</p>

```csharp
public sealed class PressureLoadStandard : PressureLoadFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReserved
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[PressureLoadFunction](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md) ← 
[PressureLoadStandard](VM.Managed.DAFUL.Flexible.Force.PressureLoadStandard.md)

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

[PressureLoadFunction.Type](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md\#VM\_Managed\_DAFUL\_Flexible\_Force\_PressureLoadFunction\_Type), 
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

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard__ctor"></a> PressureLoadStandard\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadStandard" data-throw-if-not-resolved="false"></xref> class.</p>
<p><xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadStandard" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public PressureLoadStandard()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_Normal"></a> Normal

<p>Gets or sets the normal.</p>
<p>수직방향 함수를 가져오거나 넣어줍니다.</p>
<p>
Type : CompositeFieldUsable
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : yes
Label : Normal
Control Type : Function Editor
ToolTip : N/A
Error Message : N/A
Category : Pressure
Category Index : 1
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public CompositeFieldUsable Normal { get; set; }
```

#### Property Value

 [CompositeFieldUsable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/CompositeField.cs)

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_PrimaryTangential"></a> PrimaryTangential

<p>Gets or sets the primary tangential.</p>
<p>주요한 접선방향 함수를 가져오거나 넣어줍니다.</p>
<p>
Type : CompositeFieldUsable
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : yes
Label : Tangential(Pri)
Control Type : Function Editor
ToolTip : N/A
Error Message : N/A
Category : Pressure
Category Index : 3
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public CompositeFieldUsable PrimaryTangential { get; set; }
```

#### Property Value

 [CompositeFieldUsable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/CompositeField.cs)

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_SecondaryTangential"></a> SecondaryTangential

<p>Gets or sets the secondary tangential.</p>
<p>부차적인 접선방향 함수를 가져오거나 넣어줍니다.</p>
<p>
Type : CompositeFieldUsable
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : yes
Label : Tangential(Sec)
Control Type : Function Editor
ToolTip : N/A
Error Message : N/A
Category : Pressure
Category Index : 4
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public CompositeFieldUsable SecondaryTangential { get; set; }
```

#### Property Value

 [CompositeFieldUsable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/CompositeField.cs)

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_TangentialSecDirection"></a> TangentialSecDirection

<p>Gets or sets the tangential secondary direction.</p>
<p>부차적인 접선방향을 가져오거나 넣어줍니다.</p>
<p>
Type : DirectionBase
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : yes
Label : Secondary Tangetial Direction
Control Type : Direction Picker
ToolTip : N/A
Error Message : N/A
Category : Pressure
Category Index : 2
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public DirectionBase TangentialSecDirection { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_Type"></a> Type

<p>Gets the function type.</p>
<p>함수 타입을 가져오거나 넣어줍니다.</p>

```csharp
public override PressureLoadFunction.FunctionType Type { get; }
```

#### Property Value

 [PressureLoadFunction](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md).[FunctionType](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.FunctionType.md)

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>
<p>단위 변화 팩터를 이용하여 필드를 초기화 해줍니다.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>
<p>단위 변환 팩터.</p>

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_InitializeReservedObject"></a> InitializeReservedObject\(\)

Initialize the reserved object.

```csharp
public void InitializeReservedObject()
```

