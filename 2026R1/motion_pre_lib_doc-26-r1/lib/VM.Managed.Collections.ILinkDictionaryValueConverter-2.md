# Interface ILinkDictionaryValueConverter<TValue, TValueWrapper\>
<a id="VM_Managed_Collections_ILinkDictionaryValueConverter_2"></a>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public interface ILinkDictionaryValueConverter<TValue, TValueWrapper>
```

#### Type Parameters

`TValue` 

`TValueWrapper` 

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_Collections_ILinkDictionaryValueConverter_2_ClearWrapper__1_"></a> ClearWrapper\(TValueWrapper\)

```csharp
void ClearWrapper(TValueWrapper wrapper)
```

#### Parameters

`wrapper` TValueWrapper

### <a id="VM_Managed_Collections_ILinkDictionaryValueConverter_2_Convert__0_VM_Models_Pre_ILinkContainer_"></a> Convert\(TValue, ILinkContainer\)

```csharp
TValueWrapper Convert(TValue value, ILinkContainer owner)
```

#### Parameters

`value` TValue

`owner` ILinkContainer

#### Returns

 TValueWrapper

### <a id="VM_Managed_Collections_ILinkDictionaryValueConverter_2_ConvertBack__1_"></a> ConvertBack\(TValueWrapper\)

```csharp
TValue ConvertBack(TValueWrapper wrapper)
```

#### Parameters

`wrapper` TValueWrapper

#### Returns

 TValue

