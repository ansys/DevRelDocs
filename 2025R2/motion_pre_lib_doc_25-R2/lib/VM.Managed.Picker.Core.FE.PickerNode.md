# Class PickerNode

Namespace: [VM.Managed.Picker.Core.FE](VM.Managed.Picker.Core.FE.md)  
Assembly: VMFE.dll  

This class is to represent the picker node.

```csharp
public class PickerNode : PickerBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
PickerBase ← 
[PickerNode](VM.Managed.Picker.Core.FE.PickerNode.md)

#### Inherited Members

PickerBase.raise\_CustomFilterEvent\(object, FilterArgs\), 
PickerBase.Pick\(bool\), 
PickerBase.PickWithStartSignal\(bool, ManualResetEvent\), 
PickerBase.Abort\(\), 
PickerBase.GetPickerInfo\(\), 
PickerBase.GetValidResultXml\(string\), 
PickerBase.GetResultXmlFromKey\(UIntPtr\), 
PickerBase.GetChangeNoneParametricXml\(string\), 
PickerBase.Filtering\(UIntPtr\), 
PickerBase.FilteringVMPID\(\_VM\_ID\), 
PickerBase.FilteringAnother\(UIntPtr\), 
PickerBase.FilteringReference\(UIntPtr, UIntPtr\), 
PickerBase.Highlight\(bool\), 
PickerBase.GetAdjacentPatch\(double, List<int\>\), 
PickerBase.UseEntityFiltering\(\), 
PickerBase.SetResultImpl\(ref string, bool\), 
PickerBase.UpdateDisplay\(\), 
PickerBase.ActiveDocument, 
PickerBase.IsOnlyResultXml, 
PickerBase.IsReference, 
PickerBase.SymmetricType, 
PickerBase.ResultXml, 
PickerBase.Result, 
PickerBase.CustomFilterEvent

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### PickerNode\(\)

```csharp
public PickerNode()
```

## Methods

### Filtering\(UIntPtr\)

Filtering

```csharp
public override bool Filtering(UIntPtr pTarget)
```

#### Parameters

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if sucess; otherwise, <code>false</code>.

### GetNodePosition\(UIntPtr, int\)

Get node position.

```csharp
public VectorBase GetNodePosition(UIntPtr pOwnerKey, int iNodeIndex)
```

#### Parameters

`pOwnerKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The Owner mesh key.

`iNodeIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The node index.

#### Returns

 VectorBase

The node position.

### GetPickerInfo\(\)

Gets the picker information.

```csharp
public override string GetPickerInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The picker information.

### Highlight\(bool\)

Picking target highlight.

```csharp
public override void Highlight(bool bHighlight)
```

#### Parameters

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If set to <code>ture</code> is highlight; otherwise, <code>false</code> isn't highlight.

### SetResultImpl\(ref string, bool\)

Sets the result for picking.

```csharp
protected override bool SetResultImpl(ref string strXml, bool bXmlOnly)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The picked data.

`bXmlOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether only xml or not.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.


