# Class StringUtility

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

Utility methods for working with doubles.

```csharp
public static class StringUtility
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StringUtility](OpenTD.Utility.StringUtility.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### AppendToFilename\(string, string\)

Appends a string to a pathname, without changing the extension.

```csharp
public static string AppendToFilename(string path, string append)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The input path.

`append` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string to append at the end, but before the extension.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### AppendToStringWithDelimiter\(string, string, string\)

Appends a string to a string with a delimiter.
If the original string is empty or whitespace, just returns the append string.

```csharp
public static string AppendToStringWithDelimiter(string input, string append, string delimiter = " ")
```

#### Parameters

`input` [string](https://learn.microsoft.com/dotnet/api/system.string)

The input string.

`append` [string](https://learn.microsoft.com/dotnet/api/system.string)

The append string.

`delimiter` [string](https://learn.microsoft.com/dotnet/api/system.string)

The delimiter.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

#### Exceptions

 [OpenTDException](OpenTD.OpenTDException.md)

Input string is null.
or
Append string is null.
or
Delimiter string is null.

### GetHash\(string\)

Gets a string representing the integer hash the CLR generates for the input string.

```csharp
public static string GetHash(string input)
```

#### Parameters

`input` [string](https://learn.microsoft.com/dotnet/api/system.string)

The input string.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### GetRecursiveMessage\(Exception\)

Recursively walks through successive inner exceptions to generate a single exception message.

```csharp
public static string GetRecursiveMessage(Exception ex)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The exception.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### GetRecursiveStackTrace\(Exception\)

Recursively walks through successive inner exceptions to generate a single stack trace.

```csharp
public static string GetRecursiveStackTrace(Exception ex)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The ex.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.


