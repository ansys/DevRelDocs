#  Class RelativeUserSubroutine

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the relative user subroutine

```csharp
public class RelativeUserSubroutine : Relative
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Relative](VM.API.Pre.Relative.md) ← 
[RelativeUserSubroutine](VM.API.Pre.RelativeUserSubroutine.md)

#### Inherited Members

[Relative.Type](VM.API.Pre.Relative.md\#VM\_API\_Pre\_Relative\_Type)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_API_Pre_RelativeUserSubroutine__ctor_VM_API_Pre_Obj_"></a> RelativeUserSubroutine\(Obj\)

Initializes a new instance of the <xref href="VM.API.Pre.RelativeUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RelativeUserSubroutine(Obj userSubroutine)
```

#### Parameters

`userSubroutine` [Obj](VM.API.Pre.Obj.md)

The user subroutine of the relative.

## Properties

### <a id="VM_API_Pre_RelativeUserSubroutine_UserSubroutine"></a> UserSubroutine

The value for the user subroutine.

```csharp
public Obj UserSubroutine { get; set; }
```

#### Property Value

 [Obj](VM.API.Pre.Obj.md)

