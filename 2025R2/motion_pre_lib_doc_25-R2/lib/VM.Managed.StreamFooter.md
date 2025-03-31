# Class StreamFooter

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

footer read/write class

```csharp
public class StreamFooter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StreamFooter](VM.Managed.StreamFooter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### StreamFooter\(\)

Initializes a new instance of the <xref href="VM.Managed.StreamFooter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StreamFooter()
```

## Methods

### GetComment\(\)

Gets the comment.

```csharp
public string GetComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetPointerSize\(\)

Gets the size of the pointer.

```csharp
public long GetPointerSize()
```

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetStreamHead\(\)

Gets the stream head.

```csharp
public long GetStreamHead()
```

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetVersionInfo\(\)

Gets the version information.

```csharp
public string GetVersionInfo()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetVersionInfoSignature\(\)

Gets the version information signature.

```csharp
public static long GetVersionInfoSignature()
```

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### GetVersionInfoSize\(\)

Gets the size of the version information.

```csharp
public static long GetVersionInfoSize()
```

#### Returns

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### Read\(Stream\)

Reads the specified stream.

```csharp
public void Read(Stream stream)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

### Write\_V1\(Stream, long, long\)

Write_s the v1.

```csharp
public static void Write_V1(Stream stream, long posStreamHead, long sizePointer)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

`posStreamHead` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The position stream head.

`sizePointer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The size pointer.

### Write\_V2\(Stream, long, long, string\)

Write_s the v2.

```csharp
public static void Write_V2(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

`posStreamHead` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The position stream head.

`sizePointer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The size pointer.

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

The comment.

### Write\_V3\(Stream, long, long, string\)

Write_s the v3.

```csharp
public static void Write_V3(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

`posStreamHead` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The position stream head.

`sizePointer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The size pointer.

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

The comment.

### Write\_V3Impl\(Stream, long, long, string, long\)

Write_s the v3 base.

```csharp
protected static void Write_V3Impl(Stream stream, long posStreamHead, long sizePointer, string comment, long nVersion)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

`posStreamHead` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The position stream head.

`sizePointer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The size pointer.

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

The comment.

`nVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The footer version.

### Write\_V4\(Stream, long, long, string\)

Write_s the v4.

```csharp
public static void Write_V4(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

`posStreamHead` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The position stream head.

`sizePointer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The size pointer.

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

The comment.

### Write\_V5\(Stream, long, long, string\)

Write_s the v5.

```csharp
public static void Write_V5(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

`posStreamHead` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The position stream head.

`sizePointer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The size pointer.

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

The comment.

### Write\_V6\(Stream, long, long, string\)

Write_s the v6.

```csharp
public static void Write_V6(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

`posStreamHead` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The position stream head.

`sizePointer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The size pointer.

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

The comment.

### Write\_V7\(Stream, long, long, string\)

Write_s the v7.

```csharp
public static void Write_V7(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

The stream.

`posStreamHead` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The position stream head.

`sizePointer` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The size pointer.

`comment` [string](https://learn.microsoft.com/dotnet/api/system.string)

The comment.


