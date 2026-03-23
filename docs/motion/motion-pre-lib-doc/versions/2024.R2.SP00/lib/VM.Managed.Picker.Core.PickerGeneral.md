# Class PickerGeneral

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the general entity picker.

```csharp
public abstract class PickerGeneral : PickerBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PickerBase](VM.Managed.Picker.Core.PickerBase.md) ← 
[PickerGeneral](VM.Managed.Picker.Core.PickerGeneral.md)

#### Inherited Members

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

### PickerGeneral\(ICollection<Type\>\)

```csharp
public PickerGeneral(ICollection<Type> arTypes)
```

#### Parameters

`arTypes` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Type](https://learn.microsoft.com/dotnet/api/system.type)\>

### PickerGeneral\(Type, bool\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.PickerGeneral" data-throw-if-not-resolved="false"></xref> class

```csharp
public PickerGeneral(Type type, bool bIsInterface)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type of entity for pick.

`bIsInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether interface or not.

## Properties

### AllowChildSubsystem

Get the flag of picking the reference objects.

```csharp
public bool AllowChildSubsystem { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PickableTypes

Get array of pickable type.

```csharp
public Type[] PickableTypes { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)\[\]

## Methods

### ConvertKeyToInstanceContainerImpl\(ObjectBase\)

```csharp
protected abstract UIntPtr ConvertKeyToInstanceContainerImpl(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

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

### FilteringReference\(UIntPtr, UIntPtr\)

Filtering to not proper object about special target into owner.

```csharp
public override bool FilteringReference(UIntPtr pOwner, UIntPtr pTarget)
```

#### Parameters

`pOwner` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering owner of target.

`pTarget` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

Filtering target.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### GetBodyImpl\(UIntPtr, bool\)

```csharp
protected abstract ObjectBase GetBodyImpl(UIntPtr pKey, bool bIgnoreMarker)
```

#### Parameters

`pKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

`bIgnoreMarker` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

### GetPickerInfo\(\)

Gets information of picking type.

```csharp
public override string GetPickerInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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

### Highlight\(bool\)

Picking highlight to filtered target.

```csharp
public override void Highlight(bool bHighlight)
```

#### Parameters

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

If set to <code>ture</code> is highlight; otherwise, <code>false</code> isn't highlight.

### HighlightCurveset\(ObjectBase, bool\)

```csharp
protected void HighlightCurveset(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighlightFaceset\(ObjectBase, bool\)

```csharp
protected void HighlightFaceset(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighlightGeometry\(ObjectBase, bool\)

```csharp
protected void HighlightGeometry(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighlightImpl\(ObjectBase, bool\)

```csharp
protected abstract bool HighlightImpl(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighlightInstanceContainer\(ObjectBase, bool\)

```csharp
protected void HighlightInstanceContainer(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighlightOpenDesigner\(ObjectBase, bool\)

```csharp
protected void HighlightOpenDesigner(ObjectBase obj, bool bHighlight)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HighlightReferenceFaceset\(ObjectBase, bool, bool\)

```csharp
protected void HighlightReferenceFaceset(ObjectBase obj, bool bHighlight, bool bUpdate)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

`bHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bUpdate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsAcceptedPickAndModifiedTargetObject\(ref ObjectBase\)

Picked object should be include setted interface.

```csharp
public bool IsAcceptedPickAndModifiedTargetObject(ref ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The picked object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if accepted; otherwise, <code>false</code>.

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


