#  Class CustomContractResolver

Namespace: [VM.Models.Pre.Drivetrain.VehicleSimulator](VM.Models.Pre.Drivetrain.VehicleSimulator.md)  
Assembly: VM.Models.Pre.Drivetrain.VehicleSimulator.dll  

```csharp
public class CustomContractResolver : DefaultContractResolver, IContractResolver
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DefaultContractResolver ← 
[CustomContractResolver](VM.Models.Pre.Drivetrain.VehicleSimulator.CustomContractResolver.md)

#### Implements

IContractResolver

#### Inherited Members

DefaultContractResolver.ResolveContract\(Type\), 
DefaultContractResolver.GetSerializableMembers\(Type\), 
DefaultContractResolver.CreateObjectContract\(Type\), 
DefaultContractResolver.CreateConstructorParameters\(ConstructorInfo, JsonPropertyCollection\), 
DefaultContractResolver.CreatePropertyFromConstructorParameter\(JsonProperty?, ParameterInfo\), 
DefaultContractResolver.ResolveContractConverter\(Type\), 
DefaultContractResolver.CreateDictionaryContract\(Type\), 
DefaultContractResolver.CreateArrayContract\(Type\), 
DefaultContractResolver.CreatePrimitiveContract\(Type\), 
DefaultContractResolver.CreateLinqContract\(Type\), 
DefaultContractResolver.CreateISerializableContract\(Type\), 
DefaultContractResolver.CreateDynamicContract\(Type\), 
DefaultContractResolver.CreateStringContract\(Type\), 
DefaultContractResolver.CreateContract\(Type\), 
DefaultContractResolver.CreateProperties\(Type, MemberSerialization\), 
DefaultContractResolver.CreateMemberValueProvider\(MemberInfo\), 
DefaultContractResolver.CreateProperty\(MemberInfo, MemberSerialization\), 
DefaultContractResolver.ResolvePropertyName\(string\), 
DefaultContractResolver.ResolveExtensionDataName\(string\), 
DefaultContractResolver.ResolveDictionaryKey\(string\), 
DefaultContractResolver.GetResolvedPropertyName\(string\), 
DefaultContractResolver.DynamicCodeGeneration, 
DefaultContractResolver.DefaultMembersSearchFlags, 
DefaultContractResolver.SerializeCompilerGeneratedMembers, 
DefaultContractResolver.IgnoreSerializableInterface, 
DefaultContractResolver.IgnoreSerializableAttribute, 
DefaultContractResolver.IgnoreIsSpecifiedMembers, 
DefaultContractResolver.IgnoreShouldSerializeMembers, 
DefaultContractResolver.NamingStrategy

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomContractResolver__ctor"></a> CustomContractResolver\(\)

```csharp
public CustomContractResolver()
```

## Fields

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomContractResolver_Instance"></a> Instance

```csharp
public static readonly CustomContractResolver Instance
```

#### Field Value

 [CustomContractResolver](VM.Models.Pre.Drivetrain.VehicleSimulator.CustomContractResolver.md)

## Methods

### <a id="VM_Models_Pre_Drivetrain_VehicleSimulator_CustomContractResolver_GetSerializableMembers_System_Type_"></a> GetSerializableMembers\(Type\)

Gets the serializable members for the type.

```csharp
protected override List<MemberInfo> GetSerializableMembers(Type objectType)
```

#### Parameters

`objectType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type to get serializable members for.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[MemberInfo](https://learn.microsoft.com/dotnet/api/system.reflection.memberinfo)\>

The serializable members for the type.

