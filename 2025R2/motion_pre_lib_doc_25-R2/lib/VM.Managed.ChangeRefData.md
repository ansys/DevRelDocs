#  Class ChangeRefData

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the changed reference data.

```csharp
public class ChangeRefData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ChangeRefData](VM.Managed.ChangeRefData.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_ChangeRefData__ctor"></a> ChangeRefData\(\)

```csharp
public ChangeRefData()
```

## Properties

### <a id="VM_Managed_ChangeRefData_NewLink"></a> NewLink

Gets or sets the new event core.

```csharp
public ObjectEventCore NewLink { get; set; }
```

#### Property Value

 [ObjectEventCore](VM.Managed.ObjectEventCore.md)

### <a id="VM_Managed_ChangeRefData_OldLink"></a> OldLink

Gets or sets the old event core.

```csharp
public ObjectEventCore OldLink { get; set; }
```

#### Property Value

 [ObjectEventCore](VM.Managed.ObjectEventCore.md)

