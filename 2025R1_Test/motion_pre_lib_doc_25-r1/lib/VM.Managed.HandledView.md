#  Class HandledView

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the view handle.

```csharp
public abstract class HandledView : View
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[View](VM.Managed.View.md) ← 
[HandledView](VM.Managed.HandledView.md)

#### Derived

[View3D](VM.Managed.View3D.md)

#### Inherited Members

[View.Activate\(bool\)](VM.Managed.View.md\#VM\_Managed\_View\_Activate\_System\_Boolean\_), 
[View.Close\(\)](VM.Managed.View.md\#VM\_Managed\_View\_Close), 
[View.Draw\(\)](VM.Managed.View.md\#VM\_Managed\_View\_Draw), 
[View.Resize\(int, int\)](VM.Managed.View.md\#VM\_Managed\_View\_Resize\_System\_Int32\_System\_Int32\_), 
[View.OnLButtonDblClk\(uint, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnLButtonDblClk\_System\_UInt32\_System\_Drawing\_Point\_), 
[View.OnLButtonDown\(uint, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnLButtonDown\_System\_UInt32\_System\_Drawing\_Point\_), 
[View.OnLButtonUp\(uint, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnLButtonUp\_System\_UInt32\_System\_Drawing\_Point\_), 
[View.OnMButtonDown\(uint, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnMButtonDown\_System\_UInt32\_System\_Drawing\_Point\_), 
[View.OnMButtonUp\(uint, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnMButtonUp\_System\_UInt32\_System\_Drawing\_Point\_), 
[View.OnRButtonDown\(uint, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnRButtonDown\_System\_UInt32\_System\_Drawing\_Point\_), 
[View.OnRButtonUp\(uint, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnRButtonUp\_System\_UInt32\_System\_Drawing\_Point\_), 
[View.OnMouseMove\(uint, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnMouseMove\_System\_UInt32\_System\_Drawing\_Point\_), 
[View.OnMouseWheel\(uint, short, Point\)](VM.Managed.View.md\#VM\_Managed\_View\_OnMouseWheel\_System\_UInt32\_System\_Int16\_System\_Drawing\_Point\_), 
[View.Dispose\(bool\)](VM.Managed.View.md\#VM\_Managed\_View\_Dispose\_System\_Boolean\_), 
[View.Dispose\(\)](VM.Managed.View.md\#VM\_Managed\_View\_Dispose), 
[View.Document](VM.Managed.View.md\#VM\_Managed\_View\_Document)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_HandledView__ctor_System_UIntPtr_VM_Managed_Document_"></a> HandledView\(UIntPtr, Document\)

Initializes a new instance of the <xref href="VM.Managed.HandledView" data-throw-if-not-resolved="false"></xref> class

```csharp
public HandledView(UIntPtr handleView, Document doc)
```

#### Parameters

`handleView` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

`doc` [Document](VM.Managed.Document.md)

The document.

## Properties

### <a id="VM_Managed_HandledView_Handle"></a> Handle

Gets the view handle.

```csharp
public UIntPtr Handle { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_Managed_HandledView_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_HandledView_Finalize"></a> \~HandledView\(\)

```csharp
protected ~HandledView()
```

