# Class DependencyResolveAttribute

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
public class DependencyResolveAttribute : Attribute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ??
[DependencyResolveAttribute](VM.DependencyResolveAttribute.md)

## Constructors

### DependencyResolveAttribute\(Type\)

```python
public DependencyResolveAttribute(Type interfaceType)
```

#### Parameters

`interfaceType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

## Properties

### InterfaceType

```python
public Type InterfaceType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)


