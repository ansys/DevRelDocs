# <a id="VM_Models_Post_DataSource_CharacteristicInfo"></a> Class CharacteristicInfo

Namespace: [VM.Models.Post.DataSource](VM.Models.Post.DataSource.md)  
Assembly: VM.Models.Post.DataSource.dll  

```csharp
public class CharacteristicInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CharacteristicInfo](VM.Models.Post.DataSource.CharacteristicInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_DataSource_CharacteristicInfo__ctor"></a> CharacteristicInfo\(\)

```csharp
public CharacteristicInfo()
```

## Properties

### <a id="VM_Models_Post_DataSource_CharacteristicInfo_Characteristic"></a> Characteristic

```csharp
public string Characteristic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_DataSource_CharacteristicInfo_Components"></a> Components

```csharp
public IList<ComponentInfo> Components { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[ComponentInfo](VM.Models.Post.DataSource.ComponentInfo.md)\>

### <a id="VM_Models_Post_DataSource_CharacteristicInfo_PlotType"></a> PlotType

```csharp
public PlotType PlotType { get; set; }
```

#### Property Value

 PlotType

### <a id="VM_Models_Post_DataSource_CharacteristicInfo_SubCharacteristics"></a> SubCharacteristics

```csharp
public IList<CharacteristicInfo> SubCharacteristics { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[CharacteristicInfo](VM.Models.Post.DataSource.CharacteristicInfo.md)\>

### <a id="VM_Models_Post_DataSource_CharacteristicInfo_Type"></a> Type

```csharp
public string Type { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

