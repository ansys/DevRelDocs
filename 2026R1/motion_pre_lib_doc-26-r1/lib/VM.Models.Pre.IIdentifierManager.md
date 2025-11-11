# Interface IIdentifierManager
<a id="VM_Models_Pre_IIdentifierManager"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface IIdentifierManager
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_IIdentifierManager_Current"></a> Current

```csharp
Identifier Current { get; }
```

#### Property Value

 Identifier

## Methods

### <a id="VM_Models_Pre_IIdentifierManager_GetNextIdentifier"></a> GetNextIdentifier\(\)

```csharp
Identifier GetNextIdentifier()
```

#### Returns

 Identifier

### <a id="VM_Models_Pre_IIdentifierManager_SetNextIdentifier_VM_Identifier_"></a> SetNextIdentifier\(Identifier\)

```csharp
void SetNextIdentifier(Identifier identifier)
```

#### Parameters

`identifier` Identifier

