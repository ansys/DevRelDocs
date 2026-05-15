# Class SF\_Launcher

Namespace: [OpenTD.CoSolver](OpenTD.CoSolver.md)  
Assembly: OpenTD.CoSolver.dll  

Use SF_Launcher to load and run a Sinda model from a text input file.

```csharp
public class SF_Launcher
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SF\_Launcher](OpenTD.CoSolver.SF\_Launcher.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### SF\_Launcher\(string\)

```csharp
public SF_Launcher(string inputPath)
```

#### Parameters

`inputPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### AdditionalCompileOptions

Add additional commandline switches for the compiler here.
Example: '/warn:declarations'

```csharp
public string AdditionalCompileOptions { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### AdditionalLinkOptions

Add additional commandline switches for the linker here.
Example: 'MyAddOnLibrary.lib'

```csharp
public string AdditionalLinkOptions { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Cleanup

If true, Sinda will delete any temporary directories when finished.
Defaults to true.

```csharp
public bool Cleanup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputPathname

The Sinda input deck to run. Relative pathnames are evaluated from
the client program working directory.

```csharp
public string InputPathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### LicenseWait

```csharp
public bool LicenseWait { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PreprocessorOutputPathname

Preprocessor output pathname. Defaults to 'pp.out'. Relative pathnames are
evaluated from the InputPathname directory.

```csharp
public string PreprocessorOutputPathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SindaExePathname

By default, Run() will use the most-recent version of sinda.exe installed
on your system. To force it to use a specific version, set SindaExePathname
to the path to the sinda.exe you'd like to use. Relative paths are evaluated
from the client program working directory.

```csharp
public string SindaExePathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### StatusWindows

If true, Sinda shows status windows during the run. Defaults to false;

```csharp
public bool StatusWindows { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseOpenMP

```csharp
public bool UseOpenMP { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CheckData\(\)

```csharp
public void CheckData()
```

### Run\(\)

```csharp
public Process Run()
```

#### Returns

 [Process](https://learn.microsoft.com/dotnet/api/system.diagnostics.process)


