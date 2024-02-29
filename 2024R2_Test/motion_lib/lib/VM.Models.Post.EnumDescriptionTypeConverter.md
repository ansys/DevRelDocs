# <a id="VM_Models_Post_EnumDescriptionTypeConverter"></a> Class EnumDescriptionTypeConverter

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class EnumDescriptionTypeConverter : EnumConverter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TypeConverter](https://learn.microsoft.com/dotnet/api/system.componentmodel.typeconverter) ← 
[EnumConverter](https://learn.microsoft.com/dotnet/api/system.componentmodel.enumconverter) ← 
[EnumDescriptionTypeConverter](VM.Models.Post.EnumDescriptionTypeConverter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_EnumDescriptionTypeConverter__ctor_System_Type_"></a> EnumDescriptionTypeConverter\(Type\)

```csharp
public EnumDescriptionTypeConverter(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

## Methods

### <a id="VM_Models_Post_EnumDescriptionTypeConverter_ConvertTo_System_ComponentModel_ITypeDescriptorContext_System_Globalization_CultureInfo_System_Object_System_Type_"></a> ConvertTo\(ITypeDescriptorContext, CultureInfo, object, Type\)

```csharp
public override object ConvertTo(ITypeDescriptorContext context, CultureInfo culture, object value, Type destinationType)
```

#### Parameters

`context` [ITypeDescriptorContext](https://learn.microsoft.com/dotnet/api/system.componentmodel.itypedescriptorcontext)

`culture` [CultureInfo](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

`destinationType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

