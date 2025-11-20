# Class CustomDataTableConverter
<a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomDataTableConverter"></a>

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class CustomDataTableConverter : JsonConverter
```

#### Inheritance

object ← 
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

```csharp
public override bool CanConvert(Type objectType)
```

#### Parameters

`objectType` Type

#### Returns

 bool

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomDataTableConverter_ReadJson_Newtonsoft_Json_JsonReader_System_Type_System_Object_Newtonsoft_Json_JsonSerializer_"></a> ReadJson\(JsonReader, Type, object, JsonSerializer\)

```csharp
public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
```

#### Parameters

`reader` JsonReader

`objectType` Type

`existingValue` object

`serializer` JsonSerializer

#### Returns

 object

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomDataTableConverter_WriteJson_Newtonsoft_Json_JsonWriter_System_Object_Newtonsoft_Json_JsonSerializer_"></a> WriteJson\(JsonWriter, object, JsonSerializer\)

```csharp
public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
```

#### Parameters

`writer` JsonWriter

`value` object

`serializer` JsonSerializer

