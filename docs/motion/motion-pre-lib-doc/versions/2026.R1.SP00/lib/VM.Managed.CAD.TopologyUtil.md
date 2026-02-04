# Class TopologyUtil
<a id="VM_Managed_CAD_TopologyUtil"></a>

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

```csharp
public class TopologyUtil
```

#### Inheritance

object ← 
[TopologyUtil](VM.Managed.CAD.TopologyUtil.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_TopologyUtil__ctor"></a> TopologyUtil\(\)

```csharp
public TopologyUtil()
```

## Methods

### <a id="VM_Managed_CAD_TopologyUtil_GetTopologyType_VM_Managed_CAD_Body_System_UIntPtr_"></a> GetTopologyType\(Body, UIntPtr\)

```csharp
public static IBody.enToplogyType GetTopologyType(Body body, UIntPtr ptrEntityKey)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`ptrEntityKey` UIntPtr

#### Returns

 IBody.enToplogyType

### <a id="VM_Managed_CAD_TopologyUtil_GetVMPID_VM_Managed_CAD_Body_System_UIntPtr_"></a> GetVMPID\(Body, UIntPtr\)

```csharp
public static int GetVMPID(Body body, UIntPtr ptrEntityKey)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`ptrEntityKey` UIntPtr

#### Returns

 int

