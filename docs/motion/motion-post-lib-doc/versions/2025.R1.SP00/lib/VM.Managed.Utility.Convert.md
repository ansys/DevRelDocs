#  Class Convert

Namespace: [VM.Managed.Utility](VM.Managed.Utility.md)  
Assembly: VM.dll  

This class is to represent the special convert.

```csharp
public static class Convert
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Convert](VM.Managed.Utility.Convert.md)

## Properties

### <a id="VM_Managed_Utility_Convert_DToR"></a> DToR

Gets the Degree to Radius.

```csharp
public static double DToR { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_Utility_Convert_RToD"></a> RToD

Gets the Radius to Degree.

```csharp
public static double RToD { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_Utility_Convert_SignificantFigure"></a> SignificantFigure

Gets the significant figure.

```csharp
public static int SignificantFigure { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_Utility_Convert_GetContrastColor_System_Drawing_Color_"></a> GetContrastColor\(Color\)

```csharp
public static Color GetContrastColor(Color baseColor)
```

#### Parameters

`baseColor` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

#### Returns

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_Utility_Convert_ToString_System_Double_"></a> ToString\(double\)

Returns a <xref href="System.String" data-throw-if-not-resolved="false"></xref> that represents this instance.

```csharp
public static string ToString(double dVal)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The val.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A <xref href="System.String" data-throw-if-not-resolved="false"></xref> that represents this instance.

### <a id="VM_Managed_Utility_Convert_ToString_VM_Vector_"></a> ToString\(Vector\)

Returns a <xref href="System.String" data-throw-if-not-resolved="false"></xref> that represents this instance.

```csharp
public static string ToString(Vector vec)
```

#### Parameters

`vec` [Vector](VM.Vector.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A <xref href="System.String" data-throw-if-not-resolved="false"></xref> that represents this instance.

### <a id="VM_Managed_Utility_Convert_ToString_System_Double_System_Double_"></a> ToString\(double, double\)

Returns a <xref href="System.String" data-throw-if-not-resolved="false"></xref> that represents this instance.

```csharp
public static string ToString(double dVal, double dConvertFactor)
```

#### Parameters

`dVal` [double](https://learn.microsoft.com/dotnet/api/system.double)

The val.

`dConvertFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The convert factor.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A <xref href="System.String" data-throw-if-not-resolved="false"></xref> that represents this instance.

