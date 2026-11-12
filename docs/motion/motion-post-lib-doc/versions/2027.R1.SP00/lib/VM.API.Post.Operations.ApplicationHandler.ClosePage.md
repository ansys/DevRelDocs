# Method ClosePage
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.ClosePage.md" download="VM.API.Post.Operations.ApplicationHandler.ClosePage.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

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
# The name of the page.
page_name = "PageByID"
application_handler.AddPage(page_name)
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The ID of the page.
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
# The name of the page.
page_name = "PageByName"
application_handler.AddPage(page_name)
application_handler.ClosePage(page_name)
```

### Remarks

When `name` matches an existing `IPage`, that page is removed. If no page has that name, no page is removed.
