# Property Locale

Namespace: [Phoenix.PlugIns](Phoenix.PlugIns.md)  
Assembly: Phoenix.PlugIns.dll

## Locale

The name of the locale or language in which to use this display name.
To select the actual display name, the user's current culture is examined.
A locale appropriate to the user's culture is selected.
The selection is made by checking for a display name attribute with a locale that matches:

- The value of `System.Globalization.CultureInfo.Name`
- The value of `System.Globalization.CultureInfo.TwoLetterISOLanguageName`
- Any display name attribute created without a specified locale, or with the locale set to empty-string.
- The two-letter ISO code for English, "en".

If no appropriate display name can be found, the name of the plug-in's implementing class is used.

```csharp
public string Locale { get; }

```

### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
