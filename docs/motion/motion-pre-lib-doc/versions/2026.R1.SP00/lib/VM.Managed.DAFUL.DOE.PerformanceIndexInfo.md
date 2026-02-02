# Class PerformanceIndexInfo
<a id="VM_Managed_DAFUL_DOE_PerformanceIndexInfo"></a>

Namespace: [VM.Managed.DAFUL.DOE](VM.Managed.DAFUL.DOE.md)  
Assembly: VMDDOE.dll  

```csharp
public class PerformanceIndexInfo : DOEInformationBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[DOEInformationBase](VM.Managed.DAFUL.DOE.DOEInformationBase.md) ← 
[PerformanceIndexInfo](VM.Managed.DAFUL.DOE.PerformanceIndexInfo.md)

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

### <a id="VM_Managed_DAFUL_DOE_PerformanceIndexInfo__ctor"></a> PerformanceIndexInfo\(\)

```csharp
public PerformanceIndexInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_DOE_PerformanceIndexInfo_MaximumTime"></a> MaximumTime

```csharp
public double MaximumTime { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_DOE_PerformanceIndexInfo_MinimumTime"></a> MinimumTime

```csharp
public double MinimumTime { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_DOE_PerformanceIndexInfo_TypeOfResult"></a> TypeOfResult

```csharp
public ResultType TypeOfResult { get; set; }
```

#### Property Value

 [ResultType](VM.Managed.DAFUL.DOE.ResultType.md)

### <a id="VM_Managed_DAFUL_DOE_PerformanceIndexInfo_UseDown"></a> UseDown

```csharp
public bool UseDown { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_DOE_PerformanceIndexInfo_Weight_Factor"></a> Weight\_Factor

```csharp
public double Weight_Factor { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_DAFUL_DOE_PerformanceIndexInfo_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The update event information.

