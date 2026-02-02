#  Class PressureLoadUserSubroutine

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

<p>This class is to represent the characteristic properties of user-subroutine type.</p>
<p>이 클래스는 사용자 정의 함수의 특성을 나타냅니다.</p>

```csharp
public sealed class PressureLoadUserSubroutine : PressureLoadFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[PressureLoadFunction](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md) ← 
[PressureLoadUserSubroutine](VM.Managed.DAFUL.Flexible.Force.PressureLoadUserSubroutine.md)

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

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadUserSubroutine__ctor"></a> PressureLoadUserSubroutine\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadUserSubroutine" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadUserSubroutine" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public PressureLoadUserSubroutine()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadUserSubroutine_Type"></a> Type

<p>Gets the function type.</p>
<p>함수 타입을 가져오거나 넣어줍니다.</p>

```csharp
public override PressureLoadFunction.FunctionType Type { get; }
```

#### Property Value

 [PressureLoadFunction](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md).[FunctionType](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadUserSubroutine_UserSubroutine"></a> UserSubroutine

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

 UserSubroutine

