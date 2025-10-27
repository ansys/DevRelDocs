# Class PickerBase
<a id="VM_Managed_Picker_Core_PickerBase"></a>

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the picker base.

```csharp
public abstract class PickerBase
```

#### Inheritance

object ← 
[PickerBase](VM.Managed.Picker.Core.PickerBase.md)

#### Derived

[PickerDirection](VM.Managed.Picker.Core.PickerDirection.md), 
[PickerEntityVM](VM.Managed.Picker.Core.PickerEntityVM.md), 
[PickerGear](VM.Managed.Picker.Core.PickerGear.md), 
[PickerGeneral](VM.Managed.Picker.Core.PickerGeneral.md), 
[PickerHole](VM.Managed.Picker.Core.PickerHole.md), 
[PickerMesh](VM.Managed.Picker.Core.FE.PickerMesh.md), 
[PickerMulti](VM.Managed.Picker.Core.PickerMulti.md), 
[PickerOrientation](VM.Managed.Picker.Core.PickerOrientation.md), 
[PickerPoint](VM.Managed.Picker.Core.PickerPoint.md), 
[PickerSolid](VM.Managed.Picker.Core.PickerSolid.md), 
[PickerTopol](VM.Managed.Picker.Core.PickerTopol.md), 
[PickerTransform](VM.Managed.Picker.Core.PickerTransform.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Picker_Core_PickerBase__ctor"></a> PickerBase\(\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerBase" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerBase()
```

## Properties

### <a id="VM_Managed_Picker_Core_PickerBase_ActiveDocument"></a> ActiveDocument

```csharp
protected Document ActiveDocument { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_Picker_Core_PickerBase_IsOnlyResultXml"></a> IsOnlyResultXml

Gets indicating whether only the xml of picking result.

```csharp
protected bool IsOnlyResultXml { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_Picker_Core_PickerBase_IsReference"></a> IsReference

Gets or sets the picking result indicating whether it is reference.

```csharp
public bool IsReference { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_Picker_Core_PickerBase_Result"></a> Result

Gets or sets the object of picking result.

```csharp
public virtual object Result { get; protected set; }
```

#### Property Value

 object

### <a id="VM_Managed_Picker_Core_PickerBase_ResultXml"></a> ResultXml

Gets or sets the xml of picking result.
------- caution 1 -------
The case of Point and Direction create the Point and Direction object through deserialize of result xml.
But, The case of EntityVM sets the existed object.
------- caution 2 -------
The case of EntityVM execute filering in this function.
If the filtering result is false or the picking result invalidate , throw the exception.
------- caution 3 -------
Defined rule can changed through added picker.

```csharp
public string ResultXml { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_Picker_Core_PickerBase_SymmetricType"></a> SymmetricType

Gets or sets the symmetric type.

```csharp
public Enum SymmetricType { get; set; }
```

#### Property Value

 Enum

## Methods

### <a id="VM_Managed_Picker_Core_PickerBase_Abort"></a> Abort\(\)

Picker is forced stop the flag is set.

```csharp
public void Abort()
```

### <a id="VM_Managed_Picker_Core_PickerBase_Filtering_System_UIntPtr_"></a> Filtering\(UIntPtr\)

Filtering to not proper object.

```csharp
public virtual bool Filtering(UIntPtr pTarget)
```

#### Parameters

`pTarget` UIntPtr

Filtering target.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerBase_FilteringAnother_System_UIntPtr_"></a> FilteringAnother\(UIntPtr\)

Filtering to not proper object about special target.

```csharp
public virtual bool FilteringAnother(UIntPtr pTarget)
```

#### Parameters

`pTarget` UIntPtr

Filtering target.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerBase_FilteringReference_System_UIntPtr_System_UIntPtr_"></a> FilteringReference\(UIntPtr, UIntPtr\)

Filtering to not proper object about special target into owner.

```csharp
public virtual bool FilteringReference(UIntPtr pOwner, UIntPtr pTarget)
```

#### Parameters

`pOwner` UIntPtr

Filtering owner of target.

`pTarget` UIntPtr

Filtering target.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerBase_FilteringVMPID__VM_ID_"></a> FilteringVMPID\(\_VM\_ID\)

Filtering to not proper object.

```csharp
public virtual bool FilteringVMPID(_VM_ID nVMPID)
```

#### Parameters

`nVMPID` \_VM\_ID

Filtering target PID.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerBase_GetAdjacentPatch_System_Double_System_Collections_Generic_List_System_Int32__"></a> GetAdjacentPatch\(double, List<int\>\)

```csharp
public virtual void GetAdjacentPatch(double dAngle, List<int> lstNode)
```

#### Parameters

`dAngle` double

`lstNode` List<int\>

### <a id="VM_Managed_Picker_Core_PickerBase_GetChangeNoneParametricXml_System_String_"></a> GetChangeNoneParametricXml\(string\)

Change to the result of parametric to the result of none parametric.

```csharp
public virtual string GetChangeNoneParametricXml(string strXml)
```

#### Parameters

`strXml` string

Result of parametric.

#### Returns

 string

The result xml of none parametric.

### <a id="VM_Managed_Picker_Core_PickerBase_GetPickerInfo"></a> GetPickerInfo\(\)

Gets information of picking type.

```csharp
public abstract string GetPickerInfo()
```

#### Returns

 string

### <a id="VM_Managed_Picker_Core_PickerBase_GetResultXmlFromKey_System_UIntPtr_"></a> GetResultXmlFromKey\(UIntPtr\)

Get valid result xml according to picker key of core.

```csharp
public virtual string GetResultXmlFromKey(UIntPtr key)
```

#### Parameters

`key` UIntPtr

Picking destination key.

#### Returns

 string

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerBase_GetValidResultXml_System_String_"></a> GetValidResultXml\(string\)

Get valid result xml according to picker type of core.

```csharp
public virtual string GetValidResultXml(string strDesireXml)
```

#### Parameters

`strDesireXml` string

Invalid result xml.

#### Returns

 string

The valid result xml.

### <a id="VM_Managed_Picker_Core_PickerBase_Highlight_System_Boolean_"></a> Highlight\(bool\)

Picking highlight to filtered target.

```csharp
public virtual void Highlight(bool bHighlight)
```

#### Parameters

`bHighlight` bool

If set to <code>ture</code> is highlight; otherwise, <code>false</code> isn't highlight.

### <a id="VM_Managed_Picker_Core_PickerBase_Pick_System_Boolean_"></a> Pick\(bool\)

This method execute picking.
Define the information of picking thread.
If picking thread is forced stop, picking is a failure.

```csharp
public bool Pick(bool bGetXmlOnly)
```

#### Parameters

`bGetXmlOnly` bool

If set to <code>true</code> set result xml; otherwise, If set to <code>false</code> set result object.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerBase_PickWithStartSignal_System_Boolean_System_Threading_ManualResetEvent_"></a> PickWithStartSignal\(bool, ManualResetEvent\)

This method execute picking with start signal of sub-picking.
Define the information of picking thread.
If picking thread is forced stop, picking is a failure.

```csharp
public bool PickWithStartSignal(bool bGetXmlOnly, ManualResetEvent eventPickStart)
```

#### Parameters

`bGetXmlOnly` bool

If set to <code>true</code> set result xml; otherwise, If set to <code>false</code> set result object.

`eventPickStart` ManualResetEvent

picking start signal.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerBase_SetResultImpl_System_String__System_Boolean_"></a> SetResultImpl\(ref string, bool\)

Sets the result for picking.

```csharp
protected abstract bool SetResultImpl(ref string strXml, bool bXmlOnly)
```

#### Parameters

`strXml` string

The picked data.

`bXmlOnly` bool

If it is true, skip the result setting.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Picker_Core_PickerBase_UpdateDisplay"></a> UpdateDisplay\(\)

Update display.

```csharp
protected void UpdateDisplay()
```

### <a id="VM_Managed_Picker_Core_PickerBase_UseEntityFiltering"></a> UseEntityFiltering\(\)

```csharp
public virtual bool UseEntityFiltering()
```

#### Returns

 bool

### <a id="VM_Managed_Picker_Core_PickerBase_raise_CustomFilterEvent_System_Object_VM_Managed_Picker_Core_FilterArgs_"></a> raise\_CustomFilterEvent\(object, FilterArgs\)

```csharp
protected void raise_CustomFilterEvent(object value0, FilterArgs value1)
```

#### Parameters

`value0` object

`value1` [FilterArgs](VM.Managed.Picker.Core.FilterArgs.md)

### <a id="VM_Managed_Picker_Core_PickerBase_CustomFilterEvent"></a> CustomFilterEvent

```csharp
public event EventHandler<FilterArgs> CustomFilterEvent
```

#### Event Type

 EventHandler<[FilterArgs](VM.Managed.Picker.Core.FilterArgs.md)\>

