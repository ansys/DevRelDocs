# Struct Mode

Namespace: [VM.Models.FE.Utilities](VM.Models.FE.Utilities.md)  
Assembly: VM.Models.FE.Utilities.dll  

```csharp
public struct Mode
```

## Constructors

### Mode\(double\)

```csharp
public Mode(double eigenvalue)
```

#### Parameters

`eigenvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

### Mode\(double, double, double, bool\)

```csharp
public Mode(double eigenvalue, double frequency, double damping, bool enabled)
```

#### Parameters

`eigenvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

`frequency` [double](https://learn.microsoft.com/dotnet/api/system.double)

`damping` [double](https://learn.microsoft.com/dotnet/api/system.double)

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### Damping

```csharp
public double Damping { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Eigenvalue

```csharp
public double Eigenvalue { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Enabled

```csharp
public bool Enabled { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Frequency

```csharp
public double Frequency { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Equals\(object\)

```csharp
public override readonly bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHashCode\(\)

```csharp
public override readonly int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Operators

### operator ==\(Mode, Mode\)

```csharp
public static bool operator ==(Mode left, Mode right)
```

#### Parameters

`left` [Mode](VM.Models.FE.Utilities.Mode.md)

`right` [Mode](VM.Models.FE.Utilities.Mode.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(Mode, Mode\)

```csharp
public static bool operator !=(Mode left, Mode right)
```

#### Parameters

`left` [Mode](VM.Models.FE.Utilities.Mode.md)

`right` [Mode](VM.Models.FE.Utilities.Mode.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


