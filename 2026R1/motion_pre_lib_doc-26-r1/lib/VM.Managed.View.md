# Class View
<a id="VM_Managed_View"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the view.

```csharp
public abstract class View
```

#### Inheritance

object ← 
[View](VM.Managed.View.md)

#### Derived

[HandledView](VM.Managed.HandledView.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_View__ctor_VM_Managed_Document_"></a> View\(Document\)

Initializes a new instance of the <xref href="VM.Managed.View" data-throw-if-not-resolved="false"></xref> class

```csharp
public View(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The document.

### <a id="VM_Managed_View__ctor"></a> View\(\)

```csharp
protected View()
```

## Properties

### <a id="VM_Managed_View_Document"></a> Document

Gets the document information.

```csharp
public Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

## Methods

### <a id="VM_Managed_View_Activate_System_Boolean_"></a> Activate\(bool\)

Activate view.

```csharp
public virtual void Activate(bool A_0)
```

#### Parameters

`A_0` bool

### <a id="VM_Managed_View_Close"></a> Close\(\)

Close view.

```csharp
public abstract void Close()
```

### <a id="VM_Managed_View_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` bool

### <a id="VM_Managed_View_Dispose"></a> Dispose\(\)

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_View_Draw"></a> Draw\(\)

Draw.

```csharp
public virtual void Draw()
```

### <a id="VM_Managed_View_OnLButtonDblClk_System_UInt32_System_Drawing_Point_"></a> OnLButtonDblClk\(uint, Point\)

Called when [L-button double click].

```csharp
public virtual void OnLButtonDblClk(uint A_0, Point A_1)
```

#### Parameters

`A_0` uint

`A_1` Point

### <a id="VM_Managed_View_OnLButtonDown_System_UInt32_System_Drawing_Point_"></a> OnLButtonDown\(uint, Point\)

Called when [L-button down].

```csharp
public virtual void OnLButtonDown(uint A_0, Point A_1)
```

#### Parameters

`A_0` uint

`A_1` Point

### <a id="VM_Managed_View_OnLButtonUp_System_UInt32_System_Drawing_Point_"></a> OnLButtonUp\(uint, Point\)

Called when [L-button up].

```csharp
public virtual void OnLButtonUp(uint A_0, Point A_1)
```

#### Parameters

`A_0` uint

`A_1` Point

### <a id="VM_Managed_View_OnMButtonDown_System_UInt32_System_Drawing_Point_"></a> OnMButtonDown\(uint, Point\)

Called when [M-button down].

```csharp
public virtual void OnMButtonDown(uint A_0, Point A_1)
```

#### Parameters

`A_0` uint

`A_1` Point

### <a id="VM_Managed_View_OnMButtonUp_System_UInt32_System_Drawing_Point_"></a> OnMButtonUp\(uint, Point\)

Called when [M-button up].

```csharp
public virtual void OnMButtonUp(uint A_0, Point A_1)
```

#### Parameters

`A_0` uint

`A_1` Point

### <a id="VM_Managed_View_OnMouseMove_System_UInt32_System_Drawing_Point_"></a> OnMouseMove\(uint, Point\)

Called when [mouse move].

```csharp
public virtual void OnMouseMove(uint A_0, Point A_1)
```

#### Parameters

`A_0` uint

`A_1` Point

### <a id="VM_Managed_View_OnMouseWheel_System_UInt32_System_Int16_System_Drawing_Point_"></a> OnMouseWheel\(uint, short, Point\)

Called when [use mouse wheel].

```csharp
public virtual void OnMouseWheel(uint A_0, short A_1, Point A_2)
```

#### Parameters

`A_0` uint

`A_1` short

`A_2` Point

### <a id="VM_Managed_View_OnRButtonDown_System_UInt32_System_Drawing_Point_"></a> OnRButtonDown\(uint, Point\)

Called when [R-button down].

```csharp
public virtual void OnRButtonDown(uint A_0, Point A_1)
```

#### Parameters

`A_0` uint

`A_1` Point

### <a id="VM_Managed_View_OnRButtonUp_System_UInt32_System_Drawing_Point_"></a> OnRButtonUp\(uint, Point\)

Called when [R-button up].

```csharp
public virtual void OnRButtonUp(uint A_0, Point A_1)
```

#### Parameters

`A_0` uint

`A_1` Point

### <a id="VM_Managed_View_Resize_System_Int32_System_Int32_"></a> Resize\(int, int\)

Re-size.

```csharp
public abstract void Resize(int nWidth, int nHeight)
```

#### Parameters

`nWidth` int

The width.

`nHeight` int

The height.

