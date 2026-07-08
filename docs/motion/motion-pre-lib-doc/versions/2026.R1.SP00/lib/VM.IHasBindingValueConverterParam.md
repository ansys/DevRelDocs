# Interface IHasBindingValueConverterParam
<a id="VM_IHasBindingValueConverterParam"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

Converts the data type of a value bound to a symbol to another data type.

```csharp
public interface IHasBindingValueConverterParam
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_IHasBindingValueConverterParam_Convert_System_Object___"></a> Convert\(params object\[\]\)

Convert a value bount to a symbol.

```csharp
object Convert(params object[] parameter)
```

#### Parameters

`parameter` object\[\]

Parameters to convert.

#### Returns

 object

The converted value.

