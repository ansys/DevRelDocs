#  Class View3D

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the 3D view.

```csharp
public class View3D : HandledView
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[View](VM.Managed.View.md) ← 
[HandledView](VM.Managed.HandledView.md) ← 
[View3D](VM.Managed.View3D.md)

#### Derived

[View3DSpecialFit](VM.Managed.View3DSpecialFit.md)

#### Inherited Members

[HandledView.Dispose\(bool\)](VM.Managed.HandledView.md\#VM\_Managed\_HandledView\_Dispose\_System\_Boolean\_), 
[HandledView.Handle](VM.Managed.HandledView.md\#VM\_Managed\_HandledView\_Handle), 
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

### <a id="VM_Managed_View3D__ctor_System_UIntPtr_VM_Managed_Document_"></a> View3D\(UIntPtr, Document\)

Initializes a new instance of the <xref href="VM.Managed.View3D" data-throw-if-not-resolved="false"></xref> class

```csharp
public View3D(UIntPtr handleView, Document doc)
```

#### Parameters

`handleView` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

`doc` [Document](VM.Managed.Document.md)

The document.

## Fields

### <a id="VM_Managed_View3D_g_FrontViewPlane"></a> g\_FrontViewPlane

```csharp
public static ViewPlane g_FrontViewPlane
```

#### Field Value

 [ViewPlane](VM.Managed.ViewPlane.md)

### <a id="VM_Managed_View3D_g_bAdjacent"></a> g\_bAdjacent

```csharp
public static bool g_bAdjacent
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="VM_Managed_View3D_BackgroundColor"></a> BackgroundColor

Gets the color of background.

```csharp
public View3D.ViewBackgroundColor BackgroundColor { get; }
```

#### Property Value

 [View3D](VM.Managed.View3D.md).[ViewBackgroundColor](VM.Managed.View3D.ViewBackgroundColor.md)

### <a id="VM_Managed_View3D_IsPropertySupport"></a> IsPropertySupport

```csharp
public virtual bool IsPropertySupport { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_View3D_Perspective"></a> Perspective

Gets or sets the perspective.

```csharp
public bool Perspective { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_View3D_RenderMode"></a> RenderMode

Gets or sets the rendering mode.

```csharp
public View3D.RenderingMode RenderMode { get; set; }
```

#### Property Value

 [View3D](VM.Managed.View3D.md).[RenderingMode](VM.Managed.View3D.RenderingMode.md)

### <a id="VM_Managed_View3D_Shadow"></a> Shadow

Gets or sets the shadow.

```csharp
public bool Shadow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_View3D_Activate_System_Boolean_"></a> Activate\(bool\)

Activate view.

```csharp
public override void Activate(bool bActivate)
```

#### Parameters

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_View3D_Close"></a> Close\(\)

Close view.

```csharp
public override void Close()
```

### <a id="VM_Managed_View3D_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_View3D_Draw"></a> Draw\(\)

Draw.

```csharp
public override void Draw()
```

### <a id="VM_Managed_View3D_Fit"></a> Fit\(\)

Fit

```csharp
public void Fit()
```

### <a id="VM_Managed_View3D_FitCore"></a> FitCore\(\)

Fits the core.

```csharp
protected virtual void FitCore()
```

### <a id="VM_Managed_View3D_GetCursorMode"></a> GetCursorMode\(\)

Get cursor mode .

```csharp
public View3D.CursorMode GetCursorMode()
```

#### Returns

 [View3D](VM.Managed.View3D.md).[CursorMode](VM.Managed.View3D.CursorMode.md)

The cursor mode.

### <a id="VM_Managed_View3D_GetData_System_Xml_XmlNode_"></a> GetData\(XmlNode\)

Gets the view3d information data.

```csharp
public virtual void GetData(XmlNode writer)
```

#### Parameters

`writer` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The writer.

### <a id="VM_Managed_View3D_GetModelBoundingBox_VM_Managed_VectorBase__VM_Managed_VectorBase__"></a> GetModelBoundingBox\(ref VectorBase, ref VectorBase\)

Gets the bounding box of model.

```csharp
public virtual bool GetModelBoundingBox(ref VectorBase vecMin, ref VectorBase vecMax)
```

#### Parameters

`vecMin` [VectorBase](VM.Managed.VectorBase.md)

The min value of bounding box.

`vecMax` [VectorBase](VM.Managed.VectorBase.md)

The max value of bounding box.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_View3D_GetPopupMenuResult"></a> GetPopupMenuResult\(\)

Get result for popup menu.

```csharp
public int GetPopupMenuResult()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The result.

### <a id="VM_Managed_View3D_GetSpecialMenuResult"></a> GetSpecialMenuResult\(\)

Get result for special menu.

```csharp
public int GetSpecialMenuResult()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The result.

### <a id="VM_Managed_View3D_GetUseFaceNormal"></a> GetUseFaceNormal\(\)

Get face normal.

```csharp
public bool GetUseFaceNormal()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The use.

### <a id="VM_Managed_View3D_IsDefaultOperation"></a> IsDefaultOperation\(\)

Whether default or not for orientation.

```csharp
public bool IsDefaultOperation()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if default; otherwise, <code>false</code>.

### <a id="VM_Managed_View3D_OnContextMenu"></a> OnContextMenu\(\)

Called when [show context menu].

```csharp
public virtual void OnContextMenu()
```

### <a id="VM_Managed_View3D_OnLButtonDblClk_System_UInt32_System_Drawing_Point_"></a> OnLButtonDblClk\(uint, Point\)

Called when [L-button double click].

```csharp
public override void OnLButtonDblClk(uint nFlags, Point point)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_OnLButtonDown_System_UInt32_System_Drawing_Point_"></a> OnLButtonDown\(uint, Point\)

Called when [L-button down].

```csharp
public override void OnLButtonDown(uint nFlags, Point point)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_OnLButtonUp_System_UInt32_System_Drawing_Point_"></a> OnLButtonUp\(uint, Point\)

Called when [L-button up].

```csharp
public override void OnLButtonUp(uint nFlags, Point point)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_OnMButtonDown_System_UInt32_System_Drawing_Point_"></a> OnMButtonDown\(uint, Point\)

Called when [M-button down].

```csharp
public override void OnMButtonDown(uint nFlags, Point point)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_OnMButtonUp_System_UInt32_System_Drawing_Point_"></a> OnMButtonUp\(uint, Point\)

Called when [M-button up].

```csharp
public override void OnMButtonUp(uint nFlags, Point point)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_OnMouseMove_System_UInt32_System_Drawing_Point_"></a> OnMouseMove\(uint, Point\)

Called when [mouse move].

```csharp
public override void OnMouseMove(uint nFlags, Point point)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_OnMouseWheel_System_UInt32_System_Int16_System_Drawing_Point_"></a> OnMouseWheel\(uint, short, Point\)

Called when [use mouse wheel].

```csharp
public override void OnMouseWheel(uint nFlags, short zDelta, Point pt)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`zDelta` [short](https://learn.microsoft.com/dotnet/api/system.int16)

`pt` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_OnRButtonDown_System_UInt32_System_Drawing_Point_"></a> OnRButtonDown\(uint, Point\)

Called when [R-button down].

```csharp
public override void OnRButtonDown(uint nFlags, Point point)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_OnRButtonUp_System_UInt32_System_Drawing_Point_"></a> OnRButtonUp\(uint, Point\)

Called when [R-button up].

```csharp
public override void OnRButtonUp(uint nFlags, Point point)
```

#### Parameters

`nFlags` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

### <a id="VM_Managed_View3D_Resize_System_Int32_System_Int32_"></a> Resize\(int, int\)

Re-size.

```csharp
public override void Resize(int nWidth, int nHeight)
```

#### Parameters

`nWidth` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The width.

`nHeight` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The height.

### <a id="VM_Managed_View3D_SetData_System_Xml_XmlNode_"></a> SetData\(XmlNode\)

Sets the view3d information data.

```csharp
public virtual void SetData(XmlNode reader)
```

#### Parameters

`reader` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The reader.

### <a id="VM_Managed_View3D_SetPopupMenuResult_System_Int32_"></a> SetPopupMenuResult\(int\)

```csharp
public void SetPopupMenuResult(int nResult)
```

#### Parameters

`nResult` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_View3D_SetSpecialMenuResult_System_Int32_"></a> SetSpecialMenuResult\(int\)

Set result for special menu.

```csharp
public void SetSpecialMenuResult(int nResult)
```

#### Parameters

`nResult` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The result.

### <a id="VM_Managed_View3D_SetSurfaceTolerance_System_Double_"></a> SetSurfaceTolerance\(double\)

Set surface tolerance.

```csharp
public void SetSurfaceTolerance(double dSurfaceTolerance)
```

#### Parameters

`dSurfaceTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The surface tolerance.

### <a id="VM_Managed_View3D_SetUseFaceNormal_System_Boolean_"></a> SetUseFaceNormal\(bool\)

Set face normal.

```csharp
public void SetUseFaceNormal(bool bNormal)
```

#### Parameters

`bNormal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The use.

### <a id="VM_Managed_View3D_SetViewMode_VM_Managed_View3D_ViewMode_"></a> SetViewMode\(ViewMode\)

Set mode of view.

```csharp
public void SetViewMode(View3D.ViewMode mode)
```

#### Parameters

`mode` [View3D](VM.Managed.View3D.md).[ViewMode](VM.Managed.View3D.ViewMode.md)

The view mode.

### <a id="VM_Managed_View3D_TransformCamera_VM_Managed_TMatrix_"></a> TransformCamera\(TMatrix\)

Transform.

```csharp
public void TransformCamera(TMatrix mat)
```

#### Parameters

`mat` [TMatrix](VM.Managed.TMatrix.md)

The transform.

