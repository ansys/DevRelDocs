# Constructor PlugInDisplayNameAttribute

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## PlugInDisplayNameAttribute(string)

The default display name.

```csharp
public PlugInDisplayNameAttribute(string displayName)

```

### Parameters

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The display name.

### Remarks

Display name attributes created without a specified locale become the "default" display name
when other more specific matches cannot be found.
See the documentation for `Phoenix.PlugIns.PlugInDisplayNameAttribute.Locale` for more information.

## PlugInDisplayNameAttribute(string, string)

Define a display name for a specific locale.

```csharp
public PlugInDisplayNameAttribute(string locale, string displayName)

```

### Parameters

`locale` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the locale for which this display name should be used.
See the documentation for `Phoenix.PlugIns.PlugInDisplayNameAttribute.Locale` for guidance on setting this parameter.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The display name to use in the specified locale.
