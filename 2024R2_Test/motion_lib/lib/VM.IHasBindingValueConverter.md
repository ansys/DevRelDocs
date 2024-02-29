# <a id="VM_IHasBindingValueConverter"></a> Interface IHasBindingValueConverter

Namespace: [VM](VM.md)  
Assembly: VM.dll  

기호에 바인딩된 값의 데이터 형식을 다른 데이터 형식으로 변환합니다.

```csharp
public interface IHasBindingValueConverter
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_IHasBindingValueConverter_Convert"></a> Convert\(\)

기호에 바인딩된 값을 변환합니다.

```csharp
object Convert()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

변환된 값입니다.

