# Method ProvideValue

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

## ProvideValue(IServiceProvider)

Returns this object as the value of the target property for this markup extension. This allows you to do
something like this:

```csharp
Value="{Binding IsOpen, Mode=OneWay, Converter={converter:BoolInvertConverter}}"
```

instead of having to pull in the converter as a static resource.

```csharp
public override object ProvideValue(IServiceProvider serviceProvider)

```

### Parameters

`serviceProvider` [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider)

A service provider helper that can provide services for the markup extension.

### Returns

[object](https://learn.microsoft.com/dotnet/api/system.object)

The object value to set on the property where the extension is applied.
