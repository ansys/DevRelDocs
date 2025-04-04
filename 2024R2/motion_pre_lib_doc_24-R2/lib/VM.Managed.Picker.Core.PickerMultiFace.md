# Class PickerMultiFace

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the multi picker of faces.

```csharp
public class PickerMultiFace : PickerMultiTopol
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PickerBase](VM.Managed.Picker.Core.PickerBase.md) ← 
[PickerMulti](VM.Managed.Picker.Core.PickerMulti.md) ← 
[PickerMultiTopol](VM.Managed.Picker.Core.PickerMultiTopol.md) ← 
[PickerMultiFace](VM.Managed.Picker.Core.PickerMultiFace.md)

#### Inherited Members

[PickerMultiTopol.m\_pParentObject](VM.Managed.Picker.Core.PickerMultiTopol.md\#VM\_Managed\_Picker\_Core\_PickerMultiTopol\_m\_pParentObject), 
[PickerMultiTopol.m\_bDecidedParent](VM.Managed.Picker.Core.PickerMultiTopol.md\#VM\_Managed\_Picker\_Core\_PickerMultiTopol\_m\_bDecidedParent), 
[PickerMultiTopol.m\_bAllBeloinging](VM.Managed.Picker.Core.PickerMultiTopol.md\#VM\_Managed\_Picker\_Core\_PickerMultiTopol\_m\_bAllBeloinging), 
[PickerMultiTopol.SetHighlight\(List<UIntPtr\>, bool, bool\)](VM.Managed.Picker.Core.PickerMultiTopol.md\#VM\_Managed\_Picker\_Core\_PickerMultiTopol\_SetHighlight\_System\_Collections\_Generic\_List\_System\_UIntPtr\_\_System\_Boolean\_System\_Boolean\_), 
[PickerMultiTopol.CheckResultWhenCreateTopology\(Topology\)](VM.Managed.Picker.Core.PickerMultiTopol.md\#VM\_Managed\_Picker\_Core\_PickerMultiTopol\_CheckResultWhenCreateTopology\_VM\_Managed\_CAD\_Topology\_), 
[PickerMultiTopol.GetParentObject\(\)](VM.Managed.Picker.Core.PickerMultiTopol.md\#VM\_Managed\_Picker\_Core\_PickerMultiTopol\_GetParentObject), 
[PickerMultiTopol.SetParentObject\(ObjectBase\)](VM.Managed.Picker.Core.PickerMultiTopol.md\#VM\_Managed\_Picker\_Core\_PickerMultiTopol\_SetParentObject\_VM\_Managed\_ObjectBase\_), 
[PickerMulti.SetHighlight\(List<UIntPtr\>, bool, bool\)](VM.Managed.Picker.Core.PickerMulti.md\#VM\_Managed\_Picker\_Core\_PickerMulti\_SetHighlight\_System\_Collections\_Generic\_List\_System\_UIntPtr\_\_System\_Boolean\_System\_Boolean\_), 
[PickerMulti.GetResultXmlFromKey\(UIntPtr\[\]\)](VM.Managed.Picker.Core.PickerMulti.md\#VM\_Managed\_Picker\_Core\_PickerMulti\_GetResultXmlFromKey\_System\_UIntPtr\_\_\_), 
[PickerBase.raise\_CustomFilterEvent\(object, FilterArgs\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_raise\_CustomFilterEvent\_System\_Object\_VM\_Managed\_Picker\_Core\_FilterArgs\_), 
[PickerBase.Pick\(bool\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Pick\_System\_Boolean\_), 
[PickerBase.PickWithStartSignal\(bool, ManualResetEvent\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_PickWithStartSignal\_System\_Boolean\_System\_Threading\_ManualResetEvent\_), 
[PickerBase.Abort\(\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Abort), 
[PickerBase.GetPickerInfo\(\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetPickerInfo), 
[PickerBase.GetValidResultXml\(string\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetValidResultXml\_System\_String\_), 
[PickerBase.GetResultXmlFromKey\(UIntPtr\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetResultXmlFromKey\_System\_UIntPtr\_), 
[PickerBase.GetChangeNoneParametricXml\(string\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetChangeNoneParametricXml\_System\_String\_), 
[PickerBase.Filtering\(UIntPtr\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Filtering\_System\_UIntPtr\_), 
[PickerBase.FilteringVMPID\(\_VM\_ID\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_FilteringVMPID\_\_VM\_ID\_), 
[PickerBase.FilteringAnother\(UIntPtr\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_FilteringAnother\_System\_UIntPtr\_), 
[PickerBase.FilteringReference\(UIntPtr, UIntPtr\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_FilteringReference\_System\_UIntPtr\_System\_UIntPtr\_), 
[PickerBase.Highlight\(bool\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Highlight\_System\_Boolean\_), 
[PickerBase.GetAdjacentPatch\(double, List<int\>\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_GetAdjacentPatch\_System\_Double\_System\_Collections\_Generic\_List\_System\_Int32\_\_), 
[PickerBase.UseEntityFiltering\(\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_UseEntityFiltering), 
[PickerBase.SetResultImpl\(ref string, bool\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_SetResultImpl\_System\_String\_\_System\_Boolean\_), 
[PickerBase.UpdateDisplay\(\)](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_UpdateDisplay), 
[PickerBase.ActiveDocument](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_ActiveDocument), 
[PickerBase.IsOnlyResultXml](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_IsOnlyResultXml), 
[PickerBase.IsReference](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_IsReference), 
[PickerBase.SymmetricType](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_SymmetricType), 
[PickerBase.ResultXml](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_ResultXml), 
[PickerBase.Result](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_Result), 
[PickerBase.CustomFilterEvent](VM.Managed.Picker.Core.PickerBase.md\#VM\_Managed\_Picker\_Core\_PickerBase\_CustomFilterEvent)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### PickerMultiFace\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerMultiFace" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerMultiFace(ObjectBase pParentObject)
```

#### Parameters

`pParentObject` [ObjectBase](VM.Managed.ObjectBase.md)

The parent of face.

### PickerMultiFace\(\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerMultiFace" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerMultiFace()
```

## Properties

### PickableTypes

Get array of pickable type.

```csharp
public Type[] PickableTypes { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)\[\]

## Methods

### Filtering\(UIntPtr\)

Filtering to not proper object.

```csharp
public override bool Filtering(UIntPtr pTarget)
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
public override bool FilteringAnother(UIntPtr pTarget)
```

#### Parameters

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetPickerInfo\(\)

Gets information of picking type.

```csharp
public override string GetPickerInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetResultXmlFromKey\(UIntPtr\[\]\)

Get valid result xml according to picker keys of core.

```csharp
public override string GetResultXmlFromKey(UIntPtr[] arKey)
```

#### Parameters

`arKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\[\]

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### GetResultXmlFromKey\(UIntPtr\)

Get valid result xml according to picker key of core.

```csharp
public override string GetResultXmlFromKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Picking destination key.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The valid result xml.

### Initialize\(\)

Initializes a instance of the <xref href="VM.Managed.Picker.Core.PickerMultiFace" data-throw-if-not-resolved="false"></xref> class

```csharp
public static void Initialize()
```

### SetResultImpl\(ref string, bool\)

Sets the result for picking.

```csharp
protected override bool SetResultImpl(ref string strXml, bool bXmlOnly)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The picked data.

`bXmlOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If it is true, skip the result setting.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.


