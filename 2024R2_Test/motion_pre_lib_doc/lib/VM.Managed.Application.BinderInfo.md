# Class Application.BinderInfo

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This struct is to represent the class information binder .

```csharp
public class Application.BinderInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Application.BinderInfo](VM.Managed.Application.BinderInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### BinderInfo\(string, string\)

```csharp
public BinderInfo(string strClass, string strAssembly)
```

#### Parameters

`strClass` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strAssembly` [string](https://learn.microsoft.com/dotnet/api/system.string)

### BinderInfo\(string\)

```csharp
public BinderInfo(string strType)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### AssemblyName

```csharp
public string AssemblyName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ClassName

```csharp
public string ClassName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


