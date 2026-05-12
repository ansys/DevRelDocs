#  Class DependencyResolveAttribute

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
public class DependencyResolveAttribute : Attribute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[DependencyResolveAttribute](VM.DependencyResolveAttribute.md)

## Constructors

### <a id="VM_DependencyResolveAttribute__ctor_System_Type_"></a> DependencyResolveAttribute\(Type\)

```csharp
public DependencyResolveAttribute(Type interfaceType)
```

#### Parameters

`interfaceType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

## Properties

### <a id="VM_DependencyResolveAttribute_InterfaceType"></a> InterfaceType

```csharp
public Type InterfaceType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

