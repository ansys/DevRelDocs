#  Class ElementFunction

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

<p>This class is to represent the element function.</p>
<p>이 클래스는 함수에 들어가는 요소를 나타냅니다.</p>
<p>
        Symmetric Modeling : No
        Reference : Yes
        Reference Type : VM.Managed.Reference
        삭제시 Reservable한 Link 변수 : N/A
        Generic Collection에 담겨있는 Link 변수 : N/A
        </p>

```csharp
public class ElementFunction : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ElementFunction](VM.Managed.DAFUL.Flexible.Force.ElementFunction.md)

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

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction__ctor"></a> ElementFunction\(\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.ElementFunction" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Force.ElementFunction" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public ElementFunction()
```

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction__ctor_System_String_"></a> ElementFunction\(string\)

<p>Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.ElementFunction" data-throw-if-not-resolved="false"></xref> class.</p>
<p>
  <xref href="VM.Managed.DAFUL.Flexible.Force.ElementFunction" data-throw-if-not-resolved="false"></xref> 클래스의 새로운 객체를 초기화 해줍니다.</p>

```csharp
public ElementFunction(string strUniqueName)
```

#### Parameters

`strUniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_DisplayFunctionNumber"></a> DisplayFunctionNumber

<p>Gets or set the diaplay function number.</p>
<p>UI에 보여주는 함수 갯수를 가져오거나 넣어줍니다.</p>

```csharp
public ElementFunction.DisplayNumber DisplayFunctionNumber { get; set; }
```

#### Property Value

 [ElementFunction](VM.Managed.DAFUL.Flexible.Force.ElementFunction.md).[DisplayNumber](VM.Managed.DAFUL.Flexible.Force.ElementFunction.DisplayNumber.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_FunctionX"></a> FunctionX

<p>Gets or sets the X function.</p>
<p>x 방향의 함수를 가져오거나 넣어줍니다.</p>

```csharp
public CompositeFieldUsable FunctionX { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_FunctionY"></a> FunctionY

<p>Gets or sets the Y function.</p>
<p>y 방향의 함수를 가져오거나 넣어줍니다.</p>

```csharp
public CompositeFieldUsable FunctionY { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_FunctionZ"></a> FunctionZ

<p>Gets or sets the Z function.</p>
<p>z 방향의 함수를 가져오거나 넣어줍니다.</p>

```csharp
public CompositeFieldUsable FunctionZ { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_Orientation"></a> Orientation

<p>Gets or sets the orientation.</p>
<p>자세를 가져오거나 넣어줍니다.</p>

```csharp
public OrientationBase Orientation { get; set; }
```

#### Property Value

 OrientationBase

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

<p>Initializes member through unit convert factor.</p>
<p>단위 변화 팩터를 이용하여 필드를 초기화 해줍니다.</p>

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

<p>The unit convert factor.</p>
<p>단위 변환 팩터.</p>

