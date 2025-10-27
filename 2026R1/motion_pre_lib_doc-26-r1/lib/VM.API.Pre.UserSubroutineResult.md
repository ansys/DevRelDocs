# Struct UserSubroutineResult
<a id="VM_API_Pre_UserSubroutineResult"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the UserSubroutine Result

```csharp
public struct UserSubroutineResult
```

## Constructors

### <a id="VM_API_Pre_UserSubroutineResult__ctor"></a> UserSubroutineResult\(\)

Default constructor

```csharp
public UserSubroutineResult()
```

### <a id="VM_API_Pre_UserSubroutineResult__ctor_System_String_System_Boolean_"></a> UserSubroutineResult\(string, bool\)

Initializes a new instance of the UserSubroutineResult.

```csharp
public UserSubroutineResult(string name, bool usePerformanceIndex)
```

#### Parameters

`name` string

The name.

`usePerformanceIndex` bool

The use performanceIndex.

## Properties

### <a id="VM_API_Pre_UserSubroutineResult_Name"></a> Name

The value for the name. The default value is "".

```csharp
public string Name { readonly get; set; }
```

#### Property Value

 string

### <a id="VM_API_Pre_UserSubroutineResult_UsePerformanceIndex"></a> UsePerformanceIndex

The value for the use performanceIndex. The default value is 'false'.

```csharp
public bool UsePerformanceIndex { readonly get; set; }
```

#### Property Value

 bool

