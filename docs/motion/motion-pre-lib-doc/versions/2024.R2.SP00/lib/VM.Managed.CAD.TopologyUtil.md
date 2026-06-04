# Class TopologyUtil

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

```csharp
public class TopologyUtil
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TopologyUtil](VM.Managed.CAD.TopologyUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### TopologyUtil\(\)

```csharp
public TopologyUtil()
```

## Methods

### GetTopologyType\(Body, UIntPtr\)

```csharp
public static IBody.enToplogyType GetTopologyType(Body body, UIntPtr ptrEntityKey)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`ptrEntityKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [IBody](VM.CAD.IBody.md).[enToplogyType](VM.CAD.IBody.enToplogyType.md)

### GetVMPID\(Body, UIntPtr\)

```csharp
public static int GetVMPID(Body body, UIntPtr ptrEntityKey)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`ptrEntityKey` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


