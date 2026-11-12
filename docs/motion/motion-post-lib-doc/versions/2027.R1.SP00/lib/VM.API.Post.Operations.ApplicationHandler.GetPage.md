# Method GetPage
<div align="right"><a href="/lib/VM.API.Post.Operations.ApplicationHandler.GetPage.md" download="VM.API.Post.Operations.ApplicationHandler.GetPage.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

<a id="VM_API_Post_Operations_ApplicationHandler_GetPage_System_String_"></a>

Namespace: [VM.API.Post.Operations](VM.API.Post.Operations.md)  
Assembly: VM.API.Post.Operations.dll  

## <a id="VM_API_Post_Operations_ApplicationHandler_GetPage_System_String_"></a> GetPage\(string\)

Retrieves and activates a page by its full name.

```csharp
public IPage GetPage(string name)
```

### Parameters

`name` string

The value of [`FullName`](VM.Operations.Post.Interfaces.IPage.FullName.md) identifying the page.

### Returns

 [IPage](VM.Operations.Post.Interfaces.IPage.md)

The matching [`IPage`](VM.Operations.Post.Interfaces.IPage.md).

### Examples

```python
# Get the page by its name.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
```

### Remarks

Successful lookup activates returned `IPage` before the method returns.

### Exceptions

 Exception

Thrown when <code class="paramref">name</code> is empty or does not match an existing page.

## <a id="VM_API_Post_Operations_ApplicationHandler_GetPage_System_Guid_"></a> GetPage\(Guid\)

Retrieves and activates a page by its ID.

```csharp
public IPage GetPage(Guid id)
```

### Parameters

`id` Guid

The value of [`ID`](VM.Operations.Post.Interfaces.IPage.ID.md) identifying the page.

### Returns

 [IPage](VM.Operations.Post.Interfaces.IPage.md)

The matching [`IPage`](VM.Operations.Post.Interfaces.IPage.md).

### Examples

```python
# Get the page by name first, then read its ID.
# The name of the page.
page_name = "Page"
# The page with the specified name.
page = application_handler.GetPage(page_name)
# The ID of the page.
page_id = page.ID

# Get the page by its ID.
page = application_handler.GetPage(page_id)
```

### Remarks

Successful lookup activates returned `IPage` before the method returns.

### Exceptions

 Exception

Thrown when <code class="paramref">id</code> does not match an existing page.
