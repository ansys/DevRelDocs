# Class Relative
<a id="VM_API_Pre_Relative"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the Relative

```csharp
public class Relative
```

#### Inheritance

object ← 
[Relative](VM.API.Pre.Relative.md)

#### Derived

[RelativeFunction](VM.API.Pre.RelativeFunction.md), 
[RelativeInitialCondition](VM.API.Pre.RelativeInitialCondition.md), 
[RelativeUserSubroutine](VM.API.Pre.RelativeUserSubroutine.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_API_Pre_Relative__ctor"></a> Relative\(\)

Default constructor

```csharp
public Relative()
```

### <a id="VM_API_Pre_Relative__ctor_VM_Managed_DAFUL_Constraints_Driver_DriverType_"></a> Relative\(DriverType\)

Initializes a new instance of the <xref href="VM.API.Pre.Relative" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Relative(Driver.DriverType type)
```

#### Parameters

`type` [Driver](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Driver.cs).[DriverType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Driver.cs)

The driver type.

## Properties

### <a id="VM_API_Pre_Relative_Type"></a> Type

The value for the driver type. The default value is <xref href="VM.Managed.DAFUL.Constraints.Driver.DriverType.None" data-throw-if-not-resolved="false"></xref>.

```csharp
public Driver.DriverType Type { get; set; }
```

#### Property Value

 [Driver](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Driver.cs).[DriverType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDCB/Driver.cs)

