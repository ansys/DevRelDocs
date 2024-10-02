#  Struct Mode

Namespace: [VM.Models.FE.Utilities](VM.Models.FE.Utilities.md)  
Assembly: VM.Models.FE.Utilities.dll  

```csharp
public struct Mode
```

## Constructors

### <a id="VM_Models_FE_Utilities_Mode__ctor_System_Double_"></a> Mode\(double\)

```csharp
public Mode(double eigenvalue)
```

#### Parameters

`eigenvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_Mode__ctor_System_Double_System_Double_System_Double_System_Boolean_"></a> Mode\(double, double, double, bool\)

```csharp
public Mode(double eigenvalue, double frequency, double damping, bool enabled)
```

#### Parameters

`eigenvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

`frequency` [double](https://learn.microsoft.com/dotnet/api/system.double)

`damping` [double](https://learn.microsoft.com/dotnet/api/system.double)

`enabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="VM_Models_FE_Utilities_Mode_Damping"></a> Damping

```csharp
public double Damping { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_Mode_Eigenvalue"></a> Eigenvalue

```csharp
public double Eigenvalue { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_Mode_Enabled"></a> Enabled

```csharp
public bool Enabled { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_Mode_Frequency"></a> Frequency

```csharp
public double Frequency { readonly get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Models_FE_Utilities_Mode_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override readonly bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_Mode_GetHashCode"></a> GetHashCode\(\)

```csharp
public override readonly int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Operators

### <a id="VM_Models_FE_Utilities_Mode_op_Equality_VM_Models_FE_Utilities_Mode_VM_Models_FE_Utilities_Mode_"></a> operator ==\(Mode, Mode\)

```csharp
public static bool operator ==(Mode left, Mode right)
```

#### Parameters

`left` [Mode](VM.Models.FE.Utilities.Mode.md)

`right` [Mode](VM.Models.FE.Utilities.Mode.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_Mode_op_Inequality_VM_Models_FE_Utilities_Mode_VM_Models_FE_Utilities_Mode_"></a> operator \!=\(Mode, Mode\)

```csharp
public static bool operator !=(Mode left, Mode right)
```

#### Parameters

`left` [Mode](VM.Models.FE.Utilities.Mode.md)

`right` [Mode](VM.Models.FE.Utilities.Mode.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

