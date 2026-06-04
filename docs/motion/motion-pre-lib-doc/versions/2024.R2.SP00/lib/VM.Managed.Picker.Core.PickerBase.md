# Class PickerBase

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the picker base.

```csharp
public abstract class PickerBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

### PickerBase\(\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerBase" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerBase()
```

## Properties

### ActiveDocument

```csharp
protected Document ActiveDocument { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### IsOnlyResultXml

Gets indicating whether only the xml of picking result.

```csharp
protected bool IsOnlyResultXml { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReference

Gets or sets the picking result indicating whether it is reference.

```csharp
public bool IsReference { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Result

Gets or sets the object of picking result.

```csharp
public virtual object Result { get; protected set; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### ResultXml

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

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SymmetricType

Gets or sets the symmetric type.

```csharp
public Enum SymmetricType { get; set; }
```

#### Property Value

 [Enum](https://learn.microsoft.com/dotnet/api/system.enum)

## Methods

### Abort\(\)

Picker is forced stop the flag is set.

```csharp
public void Abort()
```

### Filtering\(UIntPtr\)

Filtering to not proper object.

```csharp
public virtual bool Filtering(UIntPtr pTarget)
```

#### Parameters

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### FilteringAnother\(UIntPtr\)

Filtering to not proper object about special target.

```csharp
public virtual bool FilteringAnother(UIntPtr pTarget)
```

#### Parameters

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### FilteringReference\(UIntPtr, UIntPtr\)

Filtering to not proper object about special target into owner.

```csharp
public virtual bool FilteringReference(UIntPtr pOwner, UIntPtr pTarget)
```

#### Parameters

`pOwner` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering owner of target.

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### FilteringVMPID\(\_VM\_ID\)

Filtering to not proper object.

```csharp
public virtual bool FilteringVMPID(_VM_ID nVMPID)
```

#### Parameters

`nVMPID` [\_VM\_ID](\_VM\_ID.md)

Filtering target PID.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetAdjacentPatch\(double, List<int\>\)

```csharp
public virtual void GetAdjacentPatch(double dAngle, List<int> lstNode)
```

#### Parameters

`dAngle` [double](https://learn.microsoft.com/dotnet/api/system.double)

`lstNode` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### GetChangeNoneParametricXml\(string\)

Change to the result of parametric to the result of none parametric.

```csharp
public virtual string GetChangeNoneParametricXml(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

Result of parametric.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The result xml of none parametric.

### GetPickerInfo\(\)

Gets information of picking type.

```csharp
public abstract string GetPickerInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetResultXmlFromKey\(UIntPtr\)

Get valid result xml according to picker key of core.

```csharp
public virtual string GetResultXmlFromKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Picking destination key.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### GetValidResultXml\(string\)

Get valid result xml according to picker type of core.

```csharp
public virtual string GetValidResultXml(string strDesireXml)
```

#### Parameters

`strDesireXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

Invalid result xml.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### Highlight\(bool\)

Picking highlight to filtered target.

```csharp
public virtual void Highlight(bool bHighlight)
```

#### Parameters

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If set to <code>ture</code> is highlight; otherwise, <code>false</code> isn't highlight.

### Pick\(bool\)

This method execute picking.
Define the information of picking thread.
If picking thread is forced stop, picking is a failure.

```csharp
public bool Pick(bool bGetXmlOnly)
```

#### Parameters

`bGetXmlOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If set to <code>true</code> set result xml; otherwise, If set to <code>false</code> set result object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### PickWithStartSignal\(bool, ManualResetEvent\)

This method execute picking with start signal of sub-picking.
Define the information of picking thread.
If picking thread is forced stop, picking is a failure.

```csharp
public bool PickWithStartSignal(bool bGetXmlOnly, ManualResetEvent eventPickStart)
```

#### Parameters

`bGetXmlOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If set to <code>true</code> set result xml; otherwise, If set to <code>false</code> set result object.

`eventPickStart` [ManualResetEvent](https://learn.microsoft.com/dotnet/api/system.threading.manualresetevent)

picking start signal.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### SetResultImpl\(ref string, bool\)

Sets the result for picking.

```csharp
protected abstract bool SetResultImpl(ref string strXml, bool bXmlOnly)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The picked data.

`bXmlOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If it is true, skip the result setting.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### UpdateDisplay\(\)

Update display.

```csharp
protected void UpdateDisplay()
```

### UseEntityFiltering\(\)

```csharp
public virtual bool UseEntityFiltering()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### raise\_CustomFilterEvent\(object, FilterArgs\)

```csharp
protected void raise_CustomFilterEvent(object value0, FilterArgs value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` [FilterArgs](VM.Managed.Picker.Core.FilterArgs.md)

### CustomFilterEvent

```csharp
public event EventHandler<FilterArgs> CustomFilterEvent
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[FilterArgs](VM.Managed.Picker.Core.FilterArgs.md)\>


