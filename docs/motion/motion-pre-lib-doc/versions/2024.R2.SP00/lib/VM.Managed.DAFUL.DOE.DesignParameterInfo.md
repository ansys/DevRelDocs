# Class DesignParameterInfo

Namespace: [VM.Managed.DAFUL.DOE](VM.Managed.DAFUL.DOE.md)  
Assembly: VMDDOE.dll  

```csharp
public class DesignParameterInfo : DOEInformationBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[DOEInformationBase](VM.Managed.DAFUL.DOE.DOEInformationBase.md) ← 
[DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md)

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

[DOEInformationBase.Target](VM.Managed.DAFUL.DOE.DOEInformationBase.md\#VM\_Managed\_DAFUL\_DOE\_DOEInformationBase\_Target), 
[DOEInformationBase.Path](VM.Managed.DAFUL.DOE.DOEInformationBase.md\#VM\_Managed\_DAFUL\_DOE\_DOEInformationBase\_Path), 
[DOEInformationBase.FullPath](VM.Managed.DAFUL.DOE.DOEInformationBase.md\#VM\_Managed\_DAFUL\_DOE\_DOEInformationBase\_FullPath), 
[DOEInformationBase.Index](VM.Managed.DAFUL.DOE.DOEInformationBase.md\#VM\_Managed\_DAFUL\_DOE\_DOEInformationBase\_Index), 
[DOEInformationBase.UseRun](VM.Managed.DAFUL.DOE.DOEInformationBase.md\#VM\_Managed\_DAFUL\_DOE\_DOEInformationBase\_UseRun), 
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

### DesignParameterInfo\(\)

```csharp
public DesignParameterInfo()
```

## Properties

### Cases

```csharp
public List<DesignParameterCase> Cases { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DesignParameterCase](VM.Managed.DAFUL.DOE.DesignParameterCase.md)\>

### Current

```csharp
public double Current { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TypeOfValue

```csharp
public DesignParameterInfo.ValueType TypeOfValue { get; set; }
```

#### Property Value

 [DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md).[ValueType](VM.Managed.DAFUL.DOE.DesignParameterInfo.ValueType.md)

### Values

```csharp
public double[] Values { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### \_Lower

```csharp
public double _Lower { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### \_Upper

```csharp
public double _Upper { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CalculateDesigns\(DOEType, List<DesignParameterInfo\>, ref int, ref int\)

```csharp
public static Dictionary<DesignParameterInfo, List<int>> CalculateDesigns(DOEType type, List<DesignParameterInfo> lstDP, ref int nLevel, ref int nRun)
```

#### Parameters

`type` [DOEType](VM.Managed.DAFUL.DOE.DOEType.md)

`lstDP` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md)\>

`nLevel` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nRun` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>\>

### ChangeCaseValue\(List<int\>, uint\)

```csharp
public void ChangeCaseValue(List<int> case_format, uint nLevel)
```

#### Parameters

`case_format` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nLevel` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ChangeTargetValue\(double\)

```csharp
public bool ChangeTargetValue(double dValue)
```

#### Parameters

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetCaseFormat\(List<int\>\)

```csharp
public static List<int> GetCaseFormat(List<int> lst)
```

#### Parameters

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### GetCases\(\)

```csharp
public List<int> GetCases()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### IsSameCases\(List<int\>\)

```csharp
public bool IsSameCases(List<int> lst)
```

#### Parameters

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSameCasesForUserInput\(List<int\>\)

```csharp
public bool IsSameCasesForUserInput(List<int> lst)
```

#### Parameters

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The update event information.


