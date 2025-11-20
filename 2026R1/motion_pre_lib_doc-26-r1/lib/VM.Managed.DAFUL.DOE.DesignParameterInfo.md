# Class DesignParameterInfo
<a id="VM_Managed_DAFUL_DOE_DesignParameterInfo"></a>

Namespace: [VM.Managed.DAFUL.DOE](VM.Managed.DAFUL.DOE.md)  
Assembly: VMDDOE.dll  

```csharp
public class DesignParameterInfo : DOEInformationBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
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

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo__ctor"></a> DesignParameterInfo\(\)

```csharp
public DesignParameterInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_Cases"></a> Cases

```csharp
public List<DesignParameterCase> Cases { get; set; }
```

#### Property Value

 List<[DesignParameterCase](VM.Managed.DAFUL.DOE.DesignParameterCase.md)\>

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_Current"></a> Current

```csharp
public double Current { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_TypeOfValue"></a> TypeOfValue

```csharp
public DesignParameterInfo.ValueType TypeOfValue { get; set; }
```

#### Property Value

 [DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md).[ValueType](VM.Managed.DAFUL.DOE.DesignParameterInfo.ValueType.md)

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_Values"></a> Values

```csharp
public double[] Values { get; }
```

#### Property Value

 double\[\]

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo__Lower"></a> \_Lower

```csharp
public double _Lower { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo__Upper"></a> \_Upper

```csharp
public double _Upper { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_CalculateDesigns_VM_Managed_DAFUL_DOE_DOEType_System_Collections_Generic_List_VM_Managed_DAFUL_DOE_DesignParameterInfo__System_Int32__System_Int32__"></a> CalculateDesigns\(DOEType, List<DesignParameterInfo\>, ref int, ref int\)

```csharp
public static Dictionary<DesignParameterInfo, List<int>> CalculateDesigns(DOEType type, List<DesignParameterInfo> lstDP, ref int nLevel, ref int nRun)
```

#### Parameters

`type` [DOEType](VM.Managed.DAFUL.DOE.DOEType.md)

`lstDP` List<[DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md)\>

`nLevel` int

`nRun` int

#### Returns

 Dictionary<[DesignParameterInfo](VM.Managed.DAFUL.DOE.DesignParameterInfo.md), List<int\>\>

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_ChangeCaseValue_System_Collections_Generic_List_System_Int32__System_UInt32_"></a> ChangeCaseValue\(List<int\>, uint\)

```csharp
public void ChangeCaseValue(List<int> case_format, uint nLevel)
```

#### Parameters

`case_format` List<int\>

`nLevel` uint

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_ChangeTargetValue_System_Double_"></a> ChangeTargetValue\(double\)

```csharp
public bool ChangeTargetValue(double dValue)
```

#### Parameters

`dValue` double

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_GetCaseFormat_System_Collections_Generic_List_System_Int32__"></a> GetCaseFormat\(List<int\>\)

```csharp
public static List<int> GetCaseFormat(List<int> lst)
```

#### Parameters

`lst` List<int\>

#### Returns

 List<int\>

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_GetCases"></a> GetCases\(\)

```csharp
public List<int> GetCases()
```

#### Returns

 List<int\>

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_IsSameCases_System_Collections_Generic_List_System_Int32__"></a> IsSameCases\(List<int\>\)

```csharp
public bool IsSameCases(List<int> lst)
```

#### Parameters

`lst` List<int\>

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_IsSameCasesForUserInput_System_Collections_Generic_List_System_Int32__"></a> IsSameCasesForUserInput\(List<int\>\)

```csharp
public bool IsSameCasesForUserInput(List<int> lst)
```

#### Parameters

`lst` List<int\>

#### Returns

 bool

### <a id="VM_Managed_DAFUL_DOE_DesignParameterInfo_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The update event information.

