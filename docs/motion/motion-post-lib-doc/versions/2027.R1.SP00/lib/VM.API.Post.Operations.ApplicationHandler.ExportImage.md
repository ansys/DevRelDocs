# Method ExportImage
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.ExportImage.md" download="VM.API.Post.Operations.ApplicationHandler.ExportImage.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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

<Danger>
The method keeps checking `CanExportImage` without a limit. If that property never becomes `true`, the method does not return.
</Danger>

## <a id="VM_API_Post_Operations_ApplicationHandler_ExportImage_VM_Operations_Post_Interfaces_IView_System_String_SciChart_Core_ExportType_System_Nullable_System_Double__System_Nullable_System_Double__"></a> ExportImage\(IView, string, ExportType, double?, double?\)

Exports the current image to a specified file format. This function saves the image to the given file path.

```csharp
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
