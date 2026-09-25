# Method GetPage
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
page_name = "Page"
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
page_name = "Page"
page = application_handler.GetPage(page_name)
page_id = page.ID

# Get the page by its ID.
page = application_handler.GetPage(page_id)
```

### Remarks

Successful lookup activates returned `IPage` before the method returns.

### Exceptions

 Exception

Thrown when <code class="paramref">id</code> does not match an existing page.
