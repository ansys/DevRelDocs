# <a id="OpenTD_UnitsData"></a> Class UnitsData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Describes a system of units. Can be inconsistent.

```csharp
public class UnitsData : IEquatable<UnitsData>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UnitsData](OpenTD.UnitsData.md)

#### Implements

[IEquatable<UnitsData\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_UnitsData__ctor"></a> UnitsData\(\)

```csharp
public UnitsData()
```

### <a id="OpenTD_UnitsData__ctor_System_String_"></a> UnitsData\(string\)

Initializes a new instance of the <xref href="OpenTD.UnitsData" data-throw-if-not-resolved="false"></xref> class
by parsing the supplied units expression string. Use with basic units
(m, hr, Btu, etc.) or compound units expressions (Btu/hr/ft^2/F, kg/m-s, etc.).
Recognizes strings in the same format output by TD.
Accepted operators : ( ) / - ^
Exponents denoted with optional ^, e.g. m^3 and m3 are both valid
W can be substituted for J/s
1 can be used, as in 1/m^3
Revolution can be used, as in Revolution/s
Case-insensitive
For overlapping model length and orbit length units (m and ft), assumes model length

```csharp
public UnitsData(string unitsExpression)
```

#### Parameters

`unitsExpression` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData__ctor_System_Int64_System_Int64_"></a> UnitsData\(long, long\)

Initializes a new instance of the <xref href="OpenTD.UnitsData" data-throw-if-not-resolved="false"></xref> class, using integers
written to save files or CSR's by SINDA.

```csharp
public UnitsData(long TdUnits, long TdUnits2)
```

#### Parameters

`TdUnits` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`TdUnits2` [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_UnitsData__ctor_OpenTD_UnitsData_"></a> UnitsData\(UnitsData\)

Copy constructor.

```csharp
public UnitsData(UnitsData source)
```

#### Parameters

`source` [UnitsData](OpenTD.UnitsData.md)

## Properties

### <a id="OpenTD_UnitsData_FlocadOutputUnits"></a> FlocadOutputUnits

```csharp
public UnitsData.FlocadOutputUnitsType FlocadOutputUnits { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[FlocadOutputUnitsType](OpenTD.UnitsData.FlocadOutputUnitsType.md)

### <a id="OpenTD_UnitsData_angle"></a> angle

```csharp
public UnitsData.Angle angle { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Angle](OpenTD.UnitsData.Angle.md)

### <a id="OpenTD_UnitsData_current"></a> current

```csharp
public UnitsData.Current current { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Current](OpenTD.UnitsData.Current.md)

### <a id="OpenTD_UnitsData_def"></a> def

Use def to create arbitrary combinations of units (advanced).

```csharp
public UnitsDefData def { get; set; }
```

#### Property Value

 [UnitsDefData](OpenTD.UnitsDefData.md)

### <a id="OpenTD_UnitsData_energy"></a> energy

```csharp
public UnitsData.Energy energy { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Energy](OpenTD.UnitsData.Energy.md)

### <a id="OpenTD_UnitsData_force"></a> force

```csharp
public UnitsData.Force force { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Force](OpenTD.UnitsData.Force.md)

### <a id="OpenTD_UnitsData_mass"></a> mass

```csharp
public UnitsData.Mass mass { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Mass](OpenTD.UnitsData.Mass.md)

### <a id="OpenTD_UnitsData_modelLength"></a> modelLength

```csharp
public UnitsData.ModelLength modelLength { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[ModelLength](OpenTD.UnitsData.ModelLength.md)

### <a id="OpenTD_UnitsData_orbitLength"></a> orbitLength

```csharp
public UnitsData.OrbitLength orbitLength { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[OrbitLength](OpenTD.UnitsData.OrbitLength.md)

### <a id="OpenTD_UnitsData_pressure"></a> pressure

```csharp
public UnitsData.Pressure pressure { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Pressure](OpenTD.UnitsData.Pressure.md)

### <a id="OpenTD_UnitsData_temp"></a> temp

```csharp
public UnitsData.Temp temp { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Temp](OpenTD.UnitsData.Temp.md)

### <a id="OpenTD_UnitsData_time"></a> time

```csharp
public UnitsData.Time time { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Time](OpenTD.UnitsData.Time.md)

### <a id="OpenTD_UnitsData_voltage"></a> voltage

```csharp
public UnitsData.Voltage voltage { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md).[Voltage](OpenTD.UnitsData.Voltage.md)

## Methods

### <a id="OpenTD_UnitsData_Equals_OpenTD_UnitsData_"></a> Equals\(UnitsData\)

Indicates whether the current object is equal to another object of the same type.

```csharp
public bool Equals(UnitsData x)
```

#### Parameters

`x` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the current object is equal to the <code class="paramref">other</code> parameter; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_UnitsData_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_UnitsData_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_UnitsData_GetName_OpenTD_UnitsData_UnitsType_"></a> GetName\(UnitsType\)

```csharp
public static string GetName(UnitsData.UnitsType type)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_GetTitle_OpenTD_UnitsData_UnitsType_"></a> GetTitle\(UnitsType\)

```csharp
public string GetTitle(UnitsData.UnitsType type)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_GetUnitsName_OpenTD_UnitsData_UnitsType_"></a> GetUnitsName\(UnitsType\)

```csharp
public string GetUnitsName(UnitsData.UnitsType type)
```

#### Parameters

`type` [UnitsData](OpenTD.UnitsData.md).[UnitsType](OpenTD.UnitsData.UnitsType.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_SetFrom_OpenTD_UnitsData_"></a> SetFrom\(UnitsData\)

```csharp
public void SetFrom(UnitsData source)
```

#### Parameters

`source` [UnitsData](OpenTD.UnitsData.md)

### <a id="OpenTD_UnitsData_SetFromDataset_System_Int64_System_Int64_"></a> SetFromDataset\(long, long\)

Set this units system based on 64-bit integers written to a save file
or CSR by Sinda.

```csharp
public void SetFromDataset(long TdUnits, long TdUnits2)
```

#### Parameters

`TdUnits` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`TdUnits2` [long](https://learn.microsoft.com/dotnet/api/system.int64)

#### Exceptions

 [OpenTDException](OpenTD.OpenTDException.md)

Problem decoding TdUnits.
or
Problem decoding TdUnits2.

### <a id="OpenTD_UnitsData_SetFromUnitsExpression_System_String_"></a> SetFromUnitsExpression\(string\)

Sets this UnitsData using the supplied string. Use with basic units
(m, hr, Btu, etc.) or compound units expressions (Btu/hr/ft^2/F, kg/m-s, etc.).
For basic units, SetFromBasicUnit(string str) will be more efficient.
Recognizes strings in the same format output by TD.
Accepted operators : ( ) / - ^
Exponents denoted with optional ^, e.g. m^3 and m3 are both valid
W can be substituted for J/s
1 can be used, as in 1/m^3
Revolution can be used, as in Revolution/s
Case-insensitive
For overlapping model length and orbit length units (m and ft), assumes model length

```csharp
public bool SetFromUnitsExpression(string str)
```

#### Parameters

`str` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UnitsData_SetToEng"></a> SetToEng\(\)

```csharp
public void SetToEng()
```

### <a id="OpenTD_UnitsData_SetToSI"></a> SetToSI\(\)

```csharp
public void SetToSI()
```

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_OrbitLength_"></a> Text\(OrbitLength\)

```csharp
public static string Text(UnitsData.OrbitLength units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[OrbitLength](OpenTD.UnitsData.OrbitLength.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_ModelLength_"></a> Text\(ModelLength\)

```csharp
public static string Text(UnitsData.ModelLength units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[ModelLength](OpenTD.UnitsData.ModelLength.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Time_"></a> Text\(Time\)

```csharp
public static string Text(UnitsData.Time units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Time](OpenTD.UnitsData.Time.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Energy_"></a> Text\(Energy\)

```csharp
public static string Text(UnitsData.Energy units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Energy](OpenTD.UnitsData.Energy.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Temp_"></a> Text\(Temp\)

```csharp
public static string Text(UnitsData.Temp units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Temp](OpenTD.UnitsData.Temp.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Mass_"></a> Text\(Mass\)

```csharp
public static string Text(UnitsData.Mass units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Mass](OpenTD.UnitsData.Mass.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Pressure_"></a> Text\(Pressure\)

```csharp
public static string Text(UnitsData.Pressure units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Pressure](OpenTD.UnitsData.Pressure.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Angle_"></a> Text\(Angle\)

```csharp
public static string Text(UnitsData.Angle units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Angle](OpenTD.UnitsData.Angle.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Force_"></a> Text\(Force\)

```csharp
public static string Text(UnitsData.Force units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Force](OpenTD.UnitsData.Force.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Current_"></a> Text\(Current\)

```csharp
public static string Text(UnitsData.Current units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Current](OpenTD.UnitsData.Current.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Voltage_"></a> Text\(Voltage\)

```csharp
public static string Text(UnitsData.Voltage units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Voltage](OpenTD.UnitsData.Voltage.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_Text_OpenTD_UnitsData_Resistance_"></a> Text\(Resistance\)

```csharp
public static string Text(UnitsData.Resistance units)
```

#### Parameters

`units` [UnitsData](OpenTD.UnitsData.md).[Resistance](OpenTD.UnitsData.Resistance.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_UnitsData_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### <a id="OpenTD_UnitsData_op_Equality_OpenTD_UnitsData_OpenTD_UnitsData_"></a> operator ==\(UnitsData, UnitsData\)

```csharp
public static bool operator ==(UnitsData x1, UnitsData x2)
```

#### Parameters

`x1` [UnitsData](OpenTD.UnitsData.md)

`x2` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_UnitsData_op_Inequality_OpenTD_UnitsData_OpenTD_UnitsData_"></a> operator \!=\(UnitsData, UnitsData\)

```csharp
public static bool operator !=(UnitsData x1, UnitsData x2)
```

#### Parameters

`x1` [UnitsData](OpenTD.UnitsData.md)

`x2` [UnitsData](OpenTD.UnitsData.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

