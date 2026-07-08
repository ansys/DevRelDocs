# Class WrapperStream

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

### WrapperStream\(string, FileMode, string\)

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

### CanRead

Gets or sets the readable state.

```csharp
public override bool CanRead { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CanSeek

Gets or sets the seekable state.

```csharp
public override bool CanSeek { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CanWrite

Gets or sets the writable state.

```csharp
public override bool CanWrite { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Comment

Gets the comment.

```csharp
public string Comment { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Length

Gets the length.

```csharp
public override long Length { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### PointerSize

Gets the size of pointer.

```csharp
public long PointerSize { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### Position

Gets or sets the position.

```csharp
public override long Position { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

## Methods

### Close\(\)

Close view.

```csharp
public override void Close()
```

### Flush\(\)

Flushes this instance.

```csharp
public override void Flush()
```

### Read\(byte\[\], int, int\)

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

### Seek\(long, SeekOrigin\)

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

### SetLength\(long\)

Sets the length.

```csharp
public override void SetLength(long len)
```

#### Parameters

`len` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The length.

### Write\(byte\[\], int, int\)

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


