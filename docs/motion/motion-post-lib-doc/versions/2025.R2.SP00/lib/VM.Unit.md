#  Class Unit

Namespace: [VM](VM.md)  
Assembly: VM.dll  

This class is to represent the Unit.

```python
public sealed class Unit
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Unit](VM.Unit.md)

## Constructors

### <a id="VM_Unit__ctor"></a> Unit\(\)

Initializes a new instance of the <xref href="VM.Unit" data-throw-if-not-resolved="false"></xref> class

```python
public Unit()
```

### <a id="VM_Unit__ctor_VM_Unit_"></a> Unit\(Unit\)

Initializes a new instance of the <xref href="VM.Unit" data-throw-if-not-resolved="false"></xref> class

```python
public Unit(Unit unitValue)
```

#### Parameters

`unitValue` [Unit](VM.Unit.md)

The unit

### <a id="VM_Unit__ctor_VM_UnitType_"></a> Unit\(UnitType\)

Initializes a new instance of the <xref href="VM.Unit" data-throw-if-not-resolved="false"></xref> class

```python
public Unit(UnitType type)
```

#### Parameters

`type` [UnitType](VM.UnitType.md)

The type of unit

### <a id="VM_Unit__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> Unit\(SerializationInfo, StreamingContext\)

Initializes a new instance of the <xref href="VM.Unit" data-throw-if-not-resolved="false"></xref> class

```python
public Unit(SerializationInfo information, StreamingContext context)
```

#### Parameters

`information` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

The context

## Properties

### <a id="VM_Unit_Angle"></a> Angle

Gets or sets the angle.

```python
public string Angle { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Unit_Force"></a> Force

Gets or sets the force.

```python
public string Force { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Unit_Handle"></a> Handle

Gets the handle.

```python
public IntPtr Handle { get; }
```

#### Property Value

 [IntPtr](https://learn.microsoft.com/dotnet/api/system.intptr)

### <a id="VM_Unit_Length"></a> Length

Gets or sets the length.

```python
public string Length { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Unit_Mass"></a> Mass

Gets or sets the mass.

```python
public string Mass { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Unit_Power"></a> Power

Gets or sets the power

```python
public string Power { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Unit_Temperature"></a> Temperature

Gets or sets the temperature

```python
public string Temperature { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Unit_Time"></a> Time

Gets or sets the time.

```python
public string Time { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Unit_Work"></a> Work

Gets or sets the work

```python
public string Work { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Unit_Item_System_String_"></a> this\[string\]

Gets or sets the unit by indexer.

```python
public string this[string type] { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Unit_ConvertTo_VM_Unit_System_String_"></a> ConvertTo\(Unit, string\)

Convert to.

```python
public double ConvertTo(Unit referenceUnit, string stringType)
```

#### Parameters

`referenceUnit` [Unit](VM.Unit.md)

The reference unit

`stringType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The convert data

### <a id="VM_Unit_Dispose"></a> Dispose\(\)

```python
public void Dispose()
```

### <a id="VM_Unit_Equals_System_Object_"></a> Equals\(object\)

```python
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Unit_GetFactor_System_String_"></a> GetFactor\(string\)

Get factor for unit type

```python
public double GetFactor(string type)
```

#### Parameters

`type` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unit type

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The factor

### <a id="VM_Unit_GetHashCode"></a> GetHashCode\(\)

```python
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Unit_Initialize_System_String_"></a> Initialize\(string\)

Initializes a instance.

```python
public static void Initialize(string stringUnitPath)
```

#### Parameters

`stringUnitPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of unit.

### <a id="VM_Unit_IsContain_System_String_"></a> IsContain\(string\)

Contains unit.

```python
public bool IsContain(string stringType)
```

#### Parameters

`stringType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of unit.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if contains unit type, otherwise false.

## Operators

### <a id="VM_Unit_op_Equality_VM_Unit_VM_Unit_"></a> operator ==\(Unit, Unit\)

Compare two units

```python
public static bool operator ==(Unit left, Unit right)
```

#### Parameters

`left` [Unit](VM.Unit.md)

The unit

`right` [Unit](VM.Unit.md)

The unit to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two units are equal, otherwise false.

### <a id="VM_Unit_op_Inequality_VM_Unit_VM_Unit_"></a> operator \!=\(Unit, Unit\)

Compare two units

```python
public static bool operator !=(Unit left, Unit right)
```

#### Parameters

`left` [Unit](VM.Unit.md)

The unit

`right` [Unit](VM.Unit.md)

The unit to compare

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if two units are not equal, otherwise false.


