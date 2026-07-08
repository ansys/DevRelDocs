#  Class PropertyChangedExtendedEventArgs

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public class PropertyChangedExtendedEventArgs : PropertyChangedEventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[PropertyChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventargs) ← 
[PropertyChangedExtendedEventArgs](VM.PropertyChangedExtendedEventArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_PropertyChangedExtendedEventArgs__ctor_System_String_System_Object_System_Object_"></a> PropertyChangedExtendedEventArgs\(string, object, object\)

```csharp
public PropertyChangedExtendedEventArgs(string propertyName, object oldValue, object newValue)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`oldValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

`newValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

## Properties

### <a id="VM_PropertyChangedExtendedEventArgs_NewValue"></a> NewValue

```csharp
public virtual object NewValue { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_PropertyChangedExtendedEventArgs_OldValue"></a> OldValue

```csharp
public virtual object OldValue { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

