# Class BooleanInvertConverter

Namespace: [Phoenix.BuilderUIClient](Phoenix.BuilderUIClient.md)  
Assembly: Phoenix.BuilderUIClient.dll

A value converter class that will invert the value of a boolean in a xaml binding

```csharp
public class BooleanInvertConverter : MarkupExtension, IValueConverter

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[MarkupExtension](https://learn.microsoft.com/dotnet/api/system.windows.markup.markupextension) ←
[BooleanInvertConverter](Phoenix.BuilderUIClient.BooleanInvertConverter.md)

#### Implements

[IValueConverter](https://learn.microsoft.com/dotnet/api/system.windows.data.ivalueconverter)

#### Inherited Members

[MarkupExtension.ProvideValue(IServiceProvider)](https://learn.microsoft.com/dotnet/api/system.windows.markup.markupextension.providevalue),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring),
[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Remarks

This is a copy from MCMBSE, and should ideally live in a shared WPF utilities project.

## Methods

[Convert(object, Type, object, CultureInfo)](Phoenix.BuilderUIClient.BooleanInvertConverter.Convert.md#Phoenix_BuilderUIClient_BooleanInvertConverter_Convert_System_Object_System_Type_System_Object_System_Globalization_CultureInfo_)

Negates a value

[ConvertBack(object, Type, object, CultureInfo)](Phoenix.BuilderUIClient.BooleanInvertConverter.ConvertBack.md#Phoenix_BuilderUIClient_BooleanInvertConverter_ConvertBack_System_Object_System_Type_System_Object_System_Globalization_CultureInfo_)

Negates a value

[ProvideValue(IServiceProvider)](Phoenix.BuilderUIClient.BooleanInvertConverter.ProvideValue.md#Phoenix_BuilderUIClient_BooleanInvertConverter_ProvideValue_System_IServiceProvider_)

Returns this object as the value of the target property for this markup extension. This allows you to do
something like this:

```csharp
Value="{Binding IsOpen, Mode=OneWay, Converter={converter:BoolInvertConverter}}"
```

instead of having to pull in the converter as a static resource.
