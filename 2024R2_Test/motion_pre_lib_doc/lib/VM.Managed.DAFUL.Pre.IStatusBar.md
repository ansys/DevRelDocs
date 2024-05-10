# Interface IStatusBar

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the status bar.

```csharp
public interface IStatusBar
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### SetValue\(string\)

Sets the value.

```csharp
void SetValue(string strStatus)
```

#### Parameters

`strStatus` [string](https://learn.microsoft.com/dotnet/api/system.string)

The status.

### SetValue\(string, bool\)

Sets the value.

```csharp
void SetValue(string strStatus, bool bLazy)
```

#### Parameters

`strStatus` [string](https://learn.microsoft.com/dotnet/api/system.string)

The status.

`bLazy` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [lazy].


