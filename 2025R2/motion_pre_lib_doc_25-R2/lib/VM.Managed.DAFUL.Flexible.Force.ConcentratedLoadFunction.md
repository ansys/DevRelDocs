#  Class ConcentratedLoadFunction

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

<p>This base class is to represent the characteristic properties of concentrated load.</p>
<p>이 클래스는 집중하중 함수를 나타냅니다.</p>
<p>
        Symmetric Modeling : No
        Reference : No
        Reference Type : N/A
        삭제시 Reservable한 Link 변수 : N/A
        Generic Collection에 담겨있는 Link 변수 : N/A
        </p>

```csharp
public abstract class ConcentratedLoadFunction : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md)

#### Derived

[ConcentratedLoadStandard](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadStandard.md), 
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
IVerifiable

#### Inherited Members

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
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
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

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadFunction__ctor"></a> ConcentratedLoadFunction\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
protected ConcentratedLoadFunction()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadFunction_ReferenceMarker"></a> ReferenceMarker

<p>Gets or sets the reference marker.</p>
<p>참조마커를 가져오거나 넣어줍니다.</p>
<p>
        Type : IMarker
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Reference Frame
        Control Type : Marker Editor
        ToolTip : N/A
        Error Message : N/A
        Category : Bodundary Condition
        Category Index : 2
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public IMarker ReferenceMarker { get; set; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadFunction_Type"></a> Type

<p>Gets the function type.</p>
<p>함수 타입을 가져옵니다.</p>

```csharp
public abstract ConcentratedLoadFunction.FunctionType Type { get; }
```

#### Property Value

 [ConcentratedLoadFunction](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.md).[FunctionType](VM.Managed.DAFUL.Flexible.Force.ConcentratedLoadFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_ConcentratedLoadFunction__ReferenceMarker"></a> \_ReferenceMarker

<p>Gets or sets the reference marker.</p>
<p>참조마커를 가져오거나 넣어줍니다.</p>
<p>
        Type : IMarker
        LinkRequestUpdate 시 처리 : N/A
        Read/Write : Read/Write
        Read/Write Condition : N/A
        연관 프로퍼티 : N/A
        Validation 조건 : N/A
        UI Visibility : true
        Label : Reference Frame
        Control Type : Marker Editor
        ToolTip : N/A
        Error Message : N/A
        Category : Bodundary Condition
        Category Index : 2
        변경 시 DFS 재생성 여부 : Yes
        변경 시 DFG 재생성 여부 : No
        변경 시 GINF 재생성 여부 : No
        </p>

```csharp
public Linker<IMarker> _ReferenceMarker { get; set; }
```

#### Property Value

 Linker<IMarker\>

