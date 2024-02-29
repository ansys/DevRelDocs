# <a id="VM_Models_Post_DataSource_BaseReader"></a> Class BaseReader

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class BaseReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BaseReader](VM.Models.Post.DataSource.BaseReader.md)

#### Derived

[DFEIGReader](VM.Models.Post.DataSource.DFEIGReader.md), 
[DFGReader](VM.Models.Post.DataSource.DFGReader.md), 
[DFMFReader](VM.Models.Post.DataSource.DFMFReader.md), 
[DFMReader](VM.Models.Post.DataSource.DFMReader.md), 
[PLTReader](VM.Models.Post.DataSource.PLTReader.md), 
[RESReader](VM.Models.Post.DataSource.RESReader.md), 
[UVECReader](VM.Models.Post.DataSource.UVECReader.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_DataSource_BaseReader__ctor"></a> BaseReader\(\)

```csharp
public BaseReader()
```

## Properties

### <a id="VM_Models_Post_DataSource_BaseReader_FilePath"></a> FilePath

```csharp
protected string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_DataSource_BaseReader_CreateListArray_System_Int32_System_Int32_"></a> CreateListArray\(int, int\)

```csharp
protected static IList<double[]> CreateListArray(int capacity, int arrayCapacity)
```

#### Parameters

`capacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`arrayCapacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_DataSource_BaseReader_GetValueFromDescription__1_System_String_"></a> GetValueFromDescription<T\>\(string\)

```csharp
protected static T GetValueFromDescription<T>(string description)
```

#### Parameters

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 T

#### Type Parameters

`T` 

### <a id="VM_Models_Post_DataSource_BaseReader_ReadAllBytes_System_String_"></a> ReadAllBytes\(string\)

```csharp
protected byte[] ReadAllBytes(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadByteArray_System_IO_BinaryReader_System_Int32_System_Boolean_"></a> ReadByteArray\(BinaryReader, int, bool\)

```csharp
protected static byte[] ReadByteArray(BinaryReader br, int count, bool bRollBack = true)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bRollBack` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadByteDoubleArray_System_Byte___System_Int32__System_Int32_"></a> ReadByteDoubleArray\(byte\[\], ref int, int\)

```csharp
protected static double[] ReadByteDoubleArray(byte[] localBuffer, ref int stcOffset, int count)
```

#### Parameters

`localBuffer` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`stcOffset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadByteIntArray_System_Byte___System_Int32__System_Int32_"></a> ReadByteIntArray\(byte\[\], ref int, int\)

```csharp
protected static int[] ReadByteIntArray(byte[] localBuffer, ref int stcOffset, int count)
```

#### Parameters

`localBuffer` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`stcOffset` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadDoubleArray_System_Byte___System_Int32__System_Int32_"></a> ReadDoubleArray\(byte\[\], ref int, int\)

```csharp
protected static double[] ReadDoubleArray(byte[] allBytes, ref int filePosition, int doubleCount)
```

#### Parameters

`allBytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`doubleCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadDoubleArray_System_IO_BinaryReader_System_Int32_System_Boolean_"></a> ReadDoubleArray\(BinaryReader, int, bool\)

```csharp
protected static double[] ReadDoubleArray(BinaryReader br, int count, bool bRollBack = true)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bRollBack` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadIntArray_System_Byte___System_Int32__System_Int32_"></a> ReadIntArray\(byte\[\], ref int, int\)

```csharp
protected static int[] ReadIntArray(byte[] allBytes, ref int filePosition, int intCount)
```

#### Parameters

`allBytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`intCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadIntArray_System_IO_BinaryReader_System_Int32_System_Boolean_"></a> ReadIntArray\(BinaryReader, int, bool\)

```csharp
protected static int[] ReadIntArray(BinaryReader br, int count, bool bRollBack = true)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`bRollBack` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadSignature_System_Byte___System_Int32__System_String_"></a> ReadSignature\(byte\[\], ref int, string\)

```csharp
protected static bool ReadSignature(byte[] allBytes, ref int filePosition, string signature)
```

#### Parameters

`allBytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`signature` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_DataSource_BaseReader_ReadStreamDoubleArray_System_IO_BinaryReader_System_Int32_System_Byte___"></a> ReadStreamDoubleArray\(BinaryReader, int, byte\[\]\)

```csharp
protected static double[] ReadStreamDoubleArray(BinaryReader br, int count, byte[] localBuffer)
```

#### Parameters

`br` [BinaryReader](https://learn.microsoft.com/dotnet/api/system.io.binaryreader)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`localBuffer` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_DataSource_BaseReader_ReadString_System_Byte___System_Int32__System_Int32_"></a> ReadString\(byte\[\], ref int, int\)

```csharp
protected static string ReadString(byte[] allBytes, ref int filePosition, int charCount)
```

#### Parameters

`allBytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`charCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_BaseReader_ReadUIntArray_System_Byte___System_Int32__System_Int32_"></a> ReadUIntArray\(byte\[\], ref int, int\)

```csharp
protected static uint[] ReadUIntArray(byte[] allBytes, ref int filePosition, int intCount)
```

#### Parameters

`allBytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`filePosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`intCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

