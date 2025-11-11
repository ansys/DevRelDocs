# Class StreamFooter
<a id="VM_Managed_StreamFooter"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

footer read/write class

```csharp
public class StreamFooter
```

#### Inheritance

object ← 
[StreamFooter](VM.Managed.StreamFooter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_StreamFooter__ctor"></a> StreamFooter\(\)

Initializes a new instance of the <xref href="VM.Managed.StreamFooter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StreamFooter()
```

## Methods

### <a id="VM_Managed_StreamFooter_GetComment"></a> GetComment\(\)

Gets the comment.

```csharp
public string GetComment()
```

#### Returns

 string

### <a id="VM_Managed_StreamFooter_GetPointerSize"></a> GetPointerSize\(\)

Gets the size of the pointer.

```csharp
public long GetPointerSize()
```

#### Returns

 long

### <a id="VM_Managed_StreamFooter_GetStreamHead"></a> GetStreamHead\(\)

Gets the stream head.

```csharp
public long GetStreamHead()
```

#### Returns

 long

### <a id="VM_Managed_StreamFooter_GetVersionInfo"></a> GetVersionInfo\(\)

Gets the version information.

```csharp
public string GetVersionInfo()
```

#### Returns

 string

### <a id="VM_Managed_StreamFooter_GetVersionInfoSignature"></a> GetVersionInfoSignature\(\)

Gets the version information signature.

```csharp
public static long GetVersionInfoSignature()
```

#### Returns

 long

### <a id="VM_Managed_StreamFooter_GetVersionInfoSize"></a> GetVersionInfoSize\(\)

Gets the size of the version information.

```csharp
public static long GetVersionInfoSize()
```

#### Returns

 long

### <a id="VM_Managed_StreamFooter_Read_System_IO_Stream_"></a> Read\(Stream\)

Reads the specified stream.

```csharp
public void Read(Stream stream)
```

#### Parameters

`stream` Stream

The stream.

### <a id="VM_Managed_StreamFooter_Write_V1_System_IO_Stream_System_Int64_System_Int64_"></a> Write\_V1\(Stream, long, long\)

Write_s the v1.

```csharp
public static void Write_V1(Stream stream, long posStreamHead, long sizePointer)
```

#### Parameters

`stream` Stream

The stream.

`posStreamHead` long

The position stream head.

`sizePointer` long

The size pointer.

### <a id="VM_Managed_StreamFooter_Write_V2_System_IO_Stream_System_Int64_System_Int64_System_String_"></a> Write\_V2\(Stream, long, long, string\)

Write_s the v2.

```csharp
public static void Write_V2(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` Stream

The stream.

`posStreamHead` long

The position stream head.

`sizePointer` long

The size pointer.

`comment` string

The comment.

### <a id="VM_Managed_StreamFooter_Write_V3_System_IO_Stream_System_Int64_System_Int64_System_String_"></a> Write\_V3\(Stream, long, long, string\)

Write_s the v3.

```csharp
public static void Write_V3(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` Stream

The stream.

`posStreamHead` long

The position stream head.

`sizePointer` long

The size pointer.

`comment` string

The comment.

### <a id="VM_Managed_StreamFooter_Write_V3Impl_System_IO_Stream_System_Int64_System_Int64_System_String_System_Int64_"></a> Write\_V3Impl\(Stream, long, long, string, long\)

Write_s the v3 base.

```csharp
protected static void Write_V3Impl(Stream stream, long posStreamHead, long sizePointer, string comment, long nVersion)
```

#### Parameters

`stream` Stream

The stream.

`posStreamHead` long

The position stream head.

`sizePointer` long

The size pointer.

`comment` string

The comment.

`nVersion` long

The footer version.

### <a id="VM_Managed_StreamFooter_Write_V4_System_IO_Stream_System_Int64_System_Int64_System_String_"></a> Write\_V4\(Stream, long, long, string\)

Write_s the v4.

```csharp
public static void Write_V4(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` Stream

The stream.

`posStreamHead` long

The position stream head.

`sizePointer` long

The size pointer.

`comment` string

The comment.

### <a id="VM_Managed_StreamFooter_Write_V5_System_IO_Stream_System_Int64_System_Int64_System_String_"></a> Write\_V5\(Stream, long, long, string\)

Write_s the v5.

```csharp
public static void Write_V5(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` Stream

The stream.

`posStreamHead` long

The position stream head.

`sizePointer` long

The size pointer.

`comment` string

The comment.

### <a id="VM_Managed_StreamFooter_Write_V6_System_IO_Stream_System_Int64_System_Int64_System_String_"></a> Write\_V6\(Stream, long, long, string\)

Write_s the v6.

```csharp
public static void Write_V6(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` Stream

The stream.

`posStreamHead` long

The position stream head.

`sizePointer` long

The size pointer.

`comment` string

The comment.

### <a id="VM_Managed_StreamFooter_Write_V7_System_IO_Stream_System_Int64_System_Int64_System_String_"></a> Write\_V7\(Stream, long, long, string\)

Write_s the v7.

```csharp
public static void Write_V7(Stream stream, long posStreamHead, long sizePointer, string comment)
```

#### Parameters

`stream` Stream

The stream.

`posStreamHead` long

The position stream head.

`sizePointer` long

The size pointer.

`comment` string

The comment.

