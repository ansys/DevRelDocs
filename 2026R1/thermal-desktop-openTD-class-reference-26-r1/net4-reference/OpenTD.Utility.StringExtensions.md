# <a id="OpenTD_Utility_StringExtensions"></a> Class StringExtensions

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

Utility methods for working with strings.

```csharp
public static class StringExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StringExtensions](OpenTD.Utility.StringExtensions.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### <a id="OpenTD_Utility_StringExtensions_FirstToUpper_System_String_"></a> FirstToUpper\(string\)

Capitalizes the first letter of a string.

```csharp
public static string FirstToUpper(this string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### <a id="OpenTD_Utility_StringExtensions_find_first_of_System_String_System_String_System_Int32_"></a> find\_first\_of\(string, string, int\)

Finds the position of the first of a list of characters. Returns -1 on failure.

```csharp
public static int find_first_of(this string input, string characters, int startPosition = 0)
```

#### Parameters

`input` [string](https://learn.microsoft.com/dotnet/api/system.string)

`characters` [string](https://learn.microsoft.com/dotnet/api/system.string)

The characters to search for.

`startPosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The starting position to look in the string. Defaults to 0.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

