# Method ExportImage
<a id="VM_API_Post_Operations_ApplicationHandler_ExportImage_VM_Operations_Post_Interfaces_IView_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_ExportImage_VM_Operations_Post_Interfaces_IView_System_String_VM_Models_Post_ImageFormat_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(IView, string, ImageFormat, double?, double?\)

Exports [`IView`](VM.Operations.Post.Interfaces.IView.md) image data to a file.

```csharp
public void ExportImage(IView viewViewModel, string filepath, ImageFormat format, double? width = null, double? height = null)
```

### Parameters

`viewViewModel` [IView](VM.Operations.Post.Interfaces.IView.md)

[`IView`](VM.Operations.Post.Interfaces.IView.md) that supplies the current image to export.

`filepath` string

The destination path for the image file.

`format` [ImageFormat](VM.Models.Post.ImageFormat.md)

The output image format.

`width` double?

The optional output width. When omitted, the view's current width is used.

`height` double?

The optional output height. When omitted, the view's current height is used.

### Remarks

The method checks `CanExportImage` until it becomes `true`, then calls [ExportImage\(string, ImageFormat, double?, double?\)](VM.Operations.Post.Interfaces.IView.ExportImage.md) once.

If `CanExportImage` remains `false`, the method does not export an image and continues checking that property.

> [!IMPORTANT]
> The method keeps checking `CanExportImage` without a limit. If that property never becomes `true`, the method does not return.

## <a id="VM_API_Post_Operations_ApplicationHandler_ExportImage_VM_Operations_Post_Interfaces_IView_System_String_SciChart_Core_ExportType_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(IView, string, ExportType, double?, double?\)

Exports the current image to a specified file format. This function saves the image to the given file path.

```csharp
[Obsolete("This method is considered outdated and its use is discouraged. It may be removed in future versions, so it is advisable to use the ExportImage function of the IView Interface instead.", true)]
public void ExportImage(IView lineViewModel, string filepath, ExportType exportType, double? width = null, double? height = null)
```

### Parameters

`lineViewModel` [IView](VM.Operations.Post.Interfaces.IView.md)

The [`IView`](VM.Operations.Post.Interfaces.IView.md) that supplies the image to export.

`filepath` string

The file path where the image will be saved.

`exportType` ExportType

The type of export format (e.g., PNG, JPEG).

`width` double?

The optional width of the exported image. If not specified, the default width is used.

`height` double?

The optional height of the exported image. If not specified, the default height is used.

### Remarks

This method is obsolete. Use [ExportImage\(string, ImageFormat, double?, double?\)](VM.Operations.Post.Interfaces.IView.ExportImage.md) instead.
