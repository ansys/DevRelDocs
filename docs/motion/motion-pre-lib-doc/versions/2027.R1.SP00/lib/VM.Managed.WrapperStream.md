# Class WrapperStream
<a id="VM_Managed_WrapperStream"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the wrapper stream.

```csharp
public class WrapperStream : Stream
```

#### Inheritance

object ← 
MarshalByRefObject ← 
Stream ← 
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

`strFileName` string

Name of the string file.

`mode` FileMode

The mode.

`comment` string

The comment.

## Properties

### <a id="VM_Managed_WrapperStream_CanRead"></a> CanRead

Gets or sets the readable state.

```csharp
public override bool CanRead { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_WrapperStream_CanSeek"></a> CanSeek

Gets or sets the seekable state.

```csharp
public override bool CanSeek { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_WrapperStream_CanWrite"></a> CanWrite

Gets or sets the writable state.

```csharp
public override bool CanWrite { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_WrapperStream_Comment"></a> Comment

Gets the comment.

```csharp
public string Comment { get; }
```

#### Property Value

 string

### <a id="VM_Managed_WrapperStream_Length"></a> Length

Gets the length.

```csharp
public override long Length { get; }
```

#### Property Value

 long

### <a id="VM_Managed_WrapperStream_PointerSize"></a> PointerSize

Gets the size of pointer.

```csharp
public long PointerSize { get; }
```

#### Property Value

 long

### <a id="VM_Managed_WrapperStream_Position"></a> Position

Gets or sets the position.

```csharp
public override long Position { get; set; }
```

#### Property Value

 long

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

`buffer` byte\[\]

The buffer.

`offset` int

The offset.

`count` int

The count.

#### Returns

 int

### <a id="VM_Managed_WrapperStream_Seek_System_Int64_System_IO_SeekOrigin_"></a> Seek\(long, SeekOrigin\)

Seeks the specified offset.

```csharp
public override long Seek(long offset, SeekOrigin origin)
```

#### Parameters

`offset` long

The offset.

`origin` SeekOrigin

The origin.

#### Returns

 long

### <a id="VM_Managed_WrapperStream_SetLength_System_Int64_"></a> SetLength\(long\)

Sets the length.

```csharp
public override void SetLength(long len)
```

#### Parameters

`len` long

The length.

### <a id="VM_Managed_WrapperStream_Write_System_Byte___System_Int32_System_Int32_"></a> Write\(byte\[\], int, int\)

Writes the specified buffer.

```csharp
public override void Write(byte[] buffer, int offset, int count)
```

#### Parameters

`buffer` byte\[\]

The buffer.

`offset` int

The offset.

`count` int

The count.

