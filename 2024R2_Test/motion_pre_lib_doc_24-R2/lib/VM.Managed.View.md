# Class View

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the view.

```csharp
public abstract class View
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[View](VM.Managed.View.md)

#### Derived

[HandledView](VM.Managed.HandledView.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### View\(Document\)

Initializes a new instance of the <xref href="VM.Managed.View" data-throw-if-not-resolved="false"></xref> class

```csharp
public View(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The document.

### View\(\)

```csharp
protected View()
```

## Properties

### Document

Gets the document information.

```csharp
public Document Document { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

## Methods

### Activate\(bool\)

Activate view.

```csharp
public virtual void Activate(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Close\(\)

Close view.

```csharp
public abstract void Close()
```

### Dispose\(bool\)

```csharp
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(\)

```csharp
public override sealed void Dispose()
```

### Draw\(\)

Draw.

```csharp
public virtual void Draw()
```

### OnLButtonDblClk\(uint, Point\)

Called when [L-button double click].

```csharp
public virtual void OnLButtonDblClk(uint A_0, Point A_1)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### OnLButtonDown\(uint, Point\)

Called when [L-button down].

```csharp
public virtual void OnLButtonDown(uint A_0, Point A_1)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### OnLButtonUp\(uint, Point\)

Called when [L-button up].

```csharp
public virtual void OnLButtonUp(uint A_0, Point A_1)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### OnMButtonDown\(uint, Point\)

Called when [M-button down].

```csharp
public virtual void OnMButtonDown(uint A_0, Point A_1)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### OnMButtonUp\(uint, Point\)

Called when [M-button up].

```csharp
public virtual void OnMButtonUp(uint A_0, Point A_1)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### OnMouseMove\(uint, Point\)

Called when [mouse move].

```csharp
public virtual void OnMouseMove(uint A_0, Point A_1)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### OnMouseWheel\(uint, short, Point\)

Called when [use mouse wheel].

```csharp
public virtual void OnMouseWheel(uint A_0, short A_1, Point A_2)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [short](https://learn.microsoft.com/dotnet/api/system.int16)

`A_2` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### OnRButtonDown\(uint, Point\)

Called when [R-button down].

```csharp
public virtual void OnRButtonDown(uint A_0, Point A_1)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### OnRButtonUp\(uint, Point\)

Called when [R-button up].

```csharp
public virtual void OnRButtonUp(uint A_0, Point A_1)
```

#### Parameters

`A_0` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`A_1` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### Resize\(int, int\)

Re-size.

```csharp
public abstract void Resize(int nWidth, int nHeight)
```

#### Parameters

`nWidth` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The width.

`nHeight` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The height.


