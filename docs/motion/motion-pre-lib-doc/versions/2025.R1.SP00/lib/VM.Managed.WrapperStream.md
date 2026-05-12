#  Class WrapperStream

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the wrapper stream.

```csharp
public class WrapperStream : Stream
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarshalByRefObject](https://learn.microsoft.com/dotnet/api/system.marshalbyrefobject) ← 
[Stream](https://learn.microsoft.com/dotnet/api/system.io.stream) ← 
[WrapperStream](VM.Managed.WrapperStream.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_WrapperStream__ctor_System_String_System_IO_FileMode_System_String_"></a> WrapperStream\(string, FileMode, string\)

Initializes a new instance of the <xref href="VM.Managed.WrapperStream" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WrapperStream(string strFileName, FileMode mode, string comment)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string file.

`mode` [FileMode](https://learn.microsoft.com/dotnet/api/system.io.filemode)

The mode.

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

The comment.

## Properties

### <a id="VM_Managed_WrapperStream_CanRead"></a> CanRead

Gets or sets the readable state.

```csharp
public override bool CanRead { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_WrapperStream_CanSeek"></a> CanSeek

Gets or sets the seekable state.

```csharp
public override bool CanSeek { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_WrapperStream_CanWrite"></a> CanWrite

Gets or sets the writable state.

```csharp
public override bool CanWrite { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_WrapperStream_Comment"></a> Comment

Gets the comment.

```csharp
public string Comment { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_WrapperStream_Length"></a> Length

Gets the length.

```csharp
public override long Length { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Managed_WrapperStream_PointerSize"></a> PointerSize

Gets the size of pointer.

```csharp
public long PointerSize { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Managed_WrapperStream_Position"></a> Position

Gets or sets the position.

```csharp
public override long Position { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

## Methods

### <a id="VM_Managed_WrapperStream_Close"></a> Close\(\)

Close view.

```csharp
public override void Close()
```

### <a id="VM_Managed_WrapperStream_Flush"></a> Flush\(\)

Flushes this instance.

```csharp
public override void Flush()
```

### <a id="VM_Managed_WrapperStream_Read_System_Byte___System_Int32_System_Int32_"></a> Read\(byte\[\], int, int\)

Reads the specified buffer.

```csharp
public override int Read(byte[] buffer, int offset, int count)
```

#### Parameters

`buffer` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

The buffer.

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The offset.

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The count.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_WrapperStream_Seek_System_Int64_System_IO_SeekOrigin_"></a> Seek\(long, SeekOrigin\)

Seeks the specified offset.

```csharp
public override long Seek(long offset, SeekOrigin origin)
```

#### Parameters

`offset` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The offset.

`origin` [SeekOrigin](https://learn.microsoft.com/dotnet/api/system.io.seekorigin)

The origin.

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Managed_WrapperStream_SetLength_System_Int64_"></a> SetLength\(long\)

Sets the length.

```csharp
public override void SetLength(long len)
```

#### Parameters

`len` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The length.

### <a id="VM_Managed_WrapperStream_Write_System_Byte___System_Int32_System_Int32_"></a> Write\(byte\[\], int, int\)

Writes the specified buffer.

```csharp
public override void Write(byte[] buffer, int offset, int count)
```

#### Parameters

`buffer` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

The buffer.

`offset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The offset.

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The count.

