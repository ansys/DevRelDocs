# Method ClosePage
<a id="VM_API_Post_Operations_ApplicationHandler_ClosePage_System_Guid_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_ClosePage_System_Guid_"></a> ClosePage\(Guid\)

Closes an open page by its ID.

```csharp
public void ClosePage(Guid id)
```

### Parameters

`id` Guid

The value of [`ID`](VM.Operations.Post.Interfaces.IPage.ID.md) identifying the page to close.

### Examples

```python
page_name = "PageByID"
application_handler.AddPage(page_name)
page = application_handler.GetPage(page_name)
page_id = page.ID
application_handler.ClosePage(page_id)
```

### Remarks

When `id` identifies an existing `IPage`, that page is removed.

## <a id="VM_API_Post_Operations_ApplicationHandler_ClosePage_System_String_"></a> ClosePage\(string\)

Closes an open page by its full name.

```csharp
public void ClosePage(string name)
```

### Parameters

`name` string

The value of `IPage.FullName` identifying the page to close.

### Examples

```python
page_name = "PageByName"
application_handler.AddPage(page_name)
application_handler.ClosePage(page_name)
```

### Remarks

When `name` matches an existing `IPage`, that page is removed. If no page has that name, no page is removed.
