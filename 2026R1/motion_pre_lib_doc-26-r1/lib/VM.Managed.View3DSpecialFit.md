#  Class View3DSpecialFit

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the 3D view has special fit operation.

```csharp
public class View3DSpecialFit : View3D, ISpecialFitView
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[View](VM.Managed.View.md) ← 
[HandledView](VM.Managed.HandledView.md) ← 
[View3D](VM.Managed.View3D.md) ← 
[View3DSpecialFit](VM.Managed.View3DSpecialFit.md)

#### Implements

[ISpecialFitView](VM.Managed.ISpecialFitView.md)

#### Inherited Members

[View3D.g\_FrontViewPlane](VM.Managed.View3D.md\#VM\_Managed\_View3D\_g\_FrontViewPlane), 
[View3D.g\_bAdjacent](VM.Managed.View3D.md\#VM\_Managed\_View3D\_g\_bAdjacent), 
[View3D.SetViewMode\(View3D.ViewMode\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_SetViewMode\_VM\_Managed\_View3D\_ViewMode\_), 
[View3D.Fit\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_Fit), 
[View3D.FitCore\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_FitCore), 
[View3D.SetPopupMenuResult\(int\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_SetPopupMenuResult\_System\_Int32\_), 
[View3D.GetPopupMenuResult\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_GetPopupMenuResult), 
[View3D.SetSpecialMenuResult\(int\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_SetSpecialMenuResult\_System\_Int32\_), 
[View3D.GetSpecialMenuResult\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_GetSpecialMenuResult), 
[View3D.TransformCamera\(TMatrix\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_TransformCamera\_VM\_Managed\_TMatrix\_), 
[View3D.IsDefaultOperation\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_IsDefaultOperation), 
[View3D.SetSurfaceTolerance\(double\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_SetSurfaceTolerance\_System\_Double\_), 
[View3D.SetUseFaceNormal\(bool\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_SetUseFaceNormal\_System\_Boolean\_), 
[View3D.GetUseFaceNormal\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_GetUseFaceNormal), 
[View3D.GetCursorMode\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_GetCursorMode), 
[View3D.Activate\(bool\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_Activate\_System\_Boolean\_), 
[View3D.Close\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_Close), 
[View3D.Draw\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_Draw), 
[View3D.Resize\(int, int\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_Resize\_System\_Int32\_System\_Int32\_), 
[View3D.OnLButtonDblClk\(uint, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnLButtonDblClk\_System\_UInt32\_System\_Drawing\_Point\_), 
[View3D.OnLButtonDown\(uint, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnLButtonDown\_System\_UInt32\_System\_Drawing\_Point\_), 
[View3D.OnLButtonUp\(uint, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnLButtonUp\_System\_UInt32\_System\_Drawing\_Point\_), 
[View3D.OnMButtonDown\(uint, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnMButtonDown\_System\_UInt32\_System\_Drawing\_Point\_), 
[View3D.OnMButtonUp\(uint, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnMButtonUp\_System\_UInt32\_System\_Drawing\_Point\_), 
[View3D.OnRButtonDown\(uint, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnRButtonDown\_System\_UInt32\_System\_Drawing\_Point\_), 
[View3D.OnRButtonUp\(uint, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnRButtonUp\_System\_UInt32\_System\_Drawing\_Point\_), 
[View3D.OnMouseMove\(uint, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnMouseMove\_System\_UInt32\_System\_Drawing\_Point\_), 
[View3D.OnMouseWheel\(uint, short, Point\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnMouseWheel\_System\_UInt32\_System\_Int16\_System\_Drawing\_Point\_), 
[View3D.OnContextMenu\(\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_OnContextMenu), 
[View3D.GetModelBoundingBox\(ref VectorBase, ref VectorBase\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_GetModelBoundingBox\_VM\_Managed\_VectorBase\_\_VM\_Managed\_VectorBase\_\_), 
[View3D.GetData\(XmlNode\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_GetData\_System\_Xml\_XmlNode\_), 
[View3D.SetData\(XmlNode\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_SetData\_System\_Xml\_XmlNode\_), 
[View3D.Dispose\(bool\)](VM.Managed.View3D.md\#VM\_Managed\_View3D\_Dispose\_System\_Boolean\_), 
[View3D.Shadow](VM.Managed.View3D.md\#VM\_Managed\_View3D\_Shadow), 
[View3D.Perspective](VM.Managed.View3D.md\#VM\_Managed\_View3D\_Perspective), 
[View3D.RenderMode](VM.Managed.View3D.md\#VM\_Managed\_View3D\_RenderMode), 
[View3D.IsPropertySupport](VM.Managed.View3D.md\#VM\_Managed\_View3D\_IsPropertySupport), 
[View3D.BackgroundColor](VM.Managed.View3D.md\#VM\_Managed\_View3D\_BackgroundColor), 
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

### <a id="VM_Managed_View3DSpecialFit__ctor_System_UIntPtr_VM_Managed_Document_"></a> View3DSpecialFit\(UIntPtr, Document\)

Initializes a new instance of the <xref href="VM.Managed.View3DSpecialFit" data-throw-if-not-resolved="false"></xref> class

```csharp
public View3DSpecialFit(UIntPtr handleView, Document doc)
```

#### Parameters

`handleView` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

`doc` [Document](VM.Managed.Document.md)

The document.

## Methods

### <a id="VM_Managed_View3DSpecialFit_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_View3DSpecialFit_Finalize"></a> \~View3DSpecialFit\(\)

```csharp
protected ~View3DSpecialFit()
```

### <a id="VM_Managed_View3DSpecialFit_FitCore"></a> FitCore\(\)

Fits the core.

```csharp
protected override void FitCore()
```

### <a id="VM_Managed_View3DSpecialFit_raise_OnPostFit"></a> raise\_OnPostFit\(\)

```csharp
public virtual void raise_OnPostFit()
```

### <a id="VM_Managed_View3DSpecialFit_OnPostFit"></a> OnPostFit

Occurs when [on PostFit].

```csharp
public virtual event ISpecialFitView.PostFit OnPostFit
```

#### Event Type

 [ISpecialFitView](VM.Managed.ISpecialFitView.md).[PostFit](VM.Managed.ISpecialFitView.PostFit.md)

