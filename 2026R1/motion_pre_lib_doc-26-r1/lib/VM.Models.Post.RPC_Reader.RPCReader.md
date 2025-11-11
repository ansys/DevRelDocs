# Class RPCReader
<a id="VM_Models_Post_RPC_Reader_RPCReader"></a>

Namespace: [VM.Models.Post.RPC\_Reader](VM.Models.Post.RPC\_Reader.md)  
Assembly: VM.Models.Post.RPC\_Reader.dll  

```csharp
public class RPCReader
```

#### Inheritance

object ← 
[RPCReader](VM.Models.Post.RPC\_Reader.RPCReader.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_RPC_Reader_RPCReader__ctor"></a> RPCReader\(\)

```csharp
public RPCReader()
```

## Properties

### <a id="VM_Models_Post_RPC_Reader_RPCReader_BR"></a> BR

```csharp
public BinaryReader BR { get; }
```

#### Property Value

 BinaryReader

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Bypass_Filter"></a> Bypass\_Filter

```csharp
public BYPASS_FILTER Bypass_Filter { get; set; }
```

#### Property Value

 [BYPASS\_FILTER](VM.Models.Post.RPC\_Reader.BYPASS\_FILTER.md)

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Channels"></a> Channels

```csharp
public int Channels { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Post_RPC_Reader_RPCReader_DATAPOSITION"></a> DATAPOSITION

```csharp
public long DATAPOSITION { get; set; }
```

#### Property Value

 long

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Data_Type"></a> Data\_Type

```csharp
public DATA_TYPE Data_Type { get; set; }
```

#### Property Value

 [DATA\_TYPE](VM.Models.Post.RPC\_Reader.DATA\_TYPE.md)

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Datas"></a> Datas

```csharp
public List<RPCData> Datas { get; set; }
```

#### Property Value

 List<[RPCData](VM.Models.Post.RPC\_Reader.RPCData.md)\>

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Delta_T"></a> Delta\_T

```csharp
public double Delta_T { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Post_RPC_Reader_RPCReader_FilePath"></a> FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Post_RPC_Reader_RPCReader_File_Type"></a> File\_Type

```csharp
public RPC_FILE_TYPE File_Type { get; set; }
```

#### Property Value

 [RPC\_FILE\_TYPE](VM.Models.Post.RPC\_Reader.RPC\_FILE\_TYPE.md)

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Format"></a> Format

```csharp
public RPC_FORMAT Format { get; set; }
```

#### Property Value

 [RPC\_FORMAT](VM.Models.Post.RPC\_Reader.RPC\_FORMAT.md)

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Frames"></a> Frames

```csharp
public int Frames { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Half_Frames"></a> Half\_Frames

```csharp
public int Half_Frames { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Post_RPC_Reader_RPCReader_INT_FULL_SCALE"></a> INT\_FULL\_SCALE

```csharp
public short INT_FULL_SCALE { get; }
```

#### Property Value

 short

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Num_Header_Blocks"></a> Num\_Header\_Blocks

```csharp
public int Num_Header_Blocks { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Num_Params"></a> Num\_Params

```csharp
public int Num_Params { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Post_RPC_Reader_RPCReader_OPERATION"></a> OPERATION

```csharp
public string OPERATION { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Pts_Per_Frame"></a> Pts\_Per\_Frame

```csharp
public int Pts_Per_Frame { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Pts_Per_Group"></a> Pts\_Per\_Group

```csharp
public int Pts_Per_Group { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Repeats"></a> Repeats

```csharp
public int Repeats { get; set; }
```

#### Property Value

 int

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Time_Type"></a> Time\_Type

```csharp
public TIME_TYPE Time_Type { get; set; }
```

#### Property Value

 [TIME\_TYPE](VM.Models.Post.RPC\_Reader.TIME\_TYPE.md)

### <a id="VM_Models_Post_RPC_Reader_RPCReader_VALIDATED"></a> VALIDATED

```csharp
public bool VALIDATED { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Close"></a> Close\(\)

```csharp
public void Close()
```

### <a id="VM_Models_Post_RPC_Reader_RPCReader_GetChannels"></a> GetChannels\(\)

```csharp
public string[] GetChannels()
```

#### Returns

 string\[\]

### <a id="VM_Models_Post_RPC_Reader_RPCReader_GetValues_System_String___"></a> GetValues\(string\[\]\)

```csharp
public IEnumerable<List<double>> GetValues(string[] Seletedchannels)
```

#### Parameters

`Seletedchannels` string\[\]

#### Returns

 IEnumerable<List<double\>\>

### <a id="VM_Models_Post_RPC_Reader_RPCReader_OpenFile_System_String_"></a> OpenFile\(string\)

```csharp
public void OpenFile(string _str_input_path)
```

#### Parameters

`_str_input_path` string

### <a id="VM_Models_Post_RPC_Reader_RPCReader_Read_RPC_Data_System_String___System_Collections_Generic_List_System_Collections_Generic_List_System_Double____"></a> Read\_RPC\_Data\(string\[\], ref List<List<double\>\>\)

```csharp
public void Read_RPC_Data(string[] SelectedChanel_Names, ref List<List<double>> selectedDatas)
```

#### Parameters

`SelectedChanel_Names` string\[\]

`selectedDatas` List<List<double\>\>

### <a id="VM_Models_Post_RPC_Reader_RPCReader_initialize"></a> initialize\(\)

```csharp
public void initialize()
```

