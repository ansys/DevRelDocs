# Class ConcentratedLoadUserSubroutine
<a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadUserSubroutine"></a>

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

<p>This class is to represent the characteristic properties of user-subroutine type.</p>
<p>이 클래스는 사용자 정의 함수의 특성을 나타냅니다.</p>

```csharp
public sealed class ConcentratedLoadUserSubroutine : ConcentratedLoadFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md) ← 
[ConcentratedLoadUserSubroutine](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadUserSubroutine.md)

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
IReservable

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

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadUserSubroutine__ctor"></a> ConcentratedLoadUserSubroutine\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadUserSubroutine" data-throw-if-not-resolved="false"></xref> class.</p>
<p><xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadUserSubroutine" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public ConcentratedLoadUserSubroutine()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadUserSubroutine_Type"></a> Type

<p>Gets the function type.</p>
<p>함수 타입을 가져오거나 넣어줍니다.</p>

```csharp
public override ConcentratedLoadFunction.FunctionType Type { get; }
```

#### Property Value

 [ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md).[FunctionType](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadUserSubroutine_UserSubroutine"></a> UserSubroutine

<p>Gets or sets the user subroutine.</p>
<p>사용자 정의 함수를 가져오거나 넣어줍니다.</p>
<p>
Type : UserSubroutine
LinkRequestUpdate 시 처리 : N/A
Read/Write : Read/Write
Read/Write Condition : N/A
연관 프로퍼티 : N/A
Validation 조건 : N/A
UI Visibility : true
Label : User Subroutine
Control Type : User Subroutine Editor
ToolTip : N/A
Error Message : N/A
Category : Load
Category Index : 1
변경 시 DFS 재생성 여부 : Yes
변경 시 DFG 재생성 여부 : No
변경 시 GINF 재생성 여부 : No
</p>

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

