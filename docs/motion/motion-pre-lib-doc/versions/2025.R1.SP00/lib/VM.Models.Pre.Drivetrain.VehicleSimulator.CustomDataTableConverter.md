#  Class CustomDataTableConverter

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class CustomDataTableConverter : JsonConverter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
JsonConverter ← 
[CustomDataTableConverter](VM.Models.Pre.Drivetrain.VehicleSimulator.CustomDataTableConverter.md)

#### Inherited Members

JsonConverter.WriteJson\(JsonWriter, object?, JsonSerializer\), 
JsonConverter.ReadJson\(JsonReader, Type, object?, JsonSerializer\), 
JsonConverter.CanConvert\(Type\), 
JsonConverter.CanRead, 
JsonConverter.CanWrite

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomDataTableConverter__ctor"></a> CustomDataTableConverter\(\)

```csharp
public CustomDataTableConverter()
```

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomDataTableConverter_CanConvert_System_Type_"></a> CanConvert\(Type\)

Determines whether this instance can convert the specified object type.

```csharp
public override bool CanConvert(Type objectType)
```

#### Parameters

`objectType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

Type of the object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if this instance can convert the specified object type; otherwise, <code>false</code>.

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomDataTableConverter_ReadJson_Newtonsoft_Json_JsonReader_System_Type_System_Object_Newtonsoft_Json_JsonSerializer_"></a> ReadJson\(JsonReader, Type, object, JsonSerializer\)

Reads the JSON representation of the object.

```csharp
public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
```

#### Parameters

`reader` JsonReader

The <xref href="Newtonsoft.Json.JsonReader" data-throw-if-not-resolved="false"></xref> to read from.

`objectType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

Type of the object.

`existingValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

The existing value of object being read.

`serializer` JsonSerializer

The calling serializer.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The object value.

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomDataTableConverter_WriteJson_Newtonsoft_Json_JsonWriter_System_Object_Newtonsoft_Json_JsonSerializer_"></a> WriteJson\(JsonWriter, object, JsonSerializer\)

Writes the JSON representation of the object.

```csharp
public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
```

#### Parameters

`writer` JsonWriter

The <xref href="Newtonsoft.Json.JsonWriter" data-throw-if-not-resolved="false"></xref> to write to.

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

The value.

`serializer` JsonSerializer

The calling serializer.

