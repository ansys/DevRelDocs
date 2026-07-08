# Class ModeForMFModal

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the mode for dfmf file.

```csharp
public class ModeForMFModal
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModeForMFModal](VM.Managed.DAFUL.ModeForMFModal.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ModeForMFModal\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ModeForMFModal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModeForMFModal()
```

### ModeForMFModal\(double\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ModeForMFModal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModeForMFModal(double dEigenvalue)
```

#### Parameters

`dEigenvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d eigenvalue.

### ModeForMFModal\(double, double, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ModeForMFModal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModeForMFModal(double dEigenvalue, double dDamping, bool bUse)
```

#### Parameters

`dEigenvalue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d eigenvalue.

`dDamping` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d damping.

`bUse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use].

## Properties

### Damping

Gets or sets the damping.

```csharp
public double Damping { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Eigenvalue

Gets or sets the eigenvalue.

```csharp
public double Eigenvalue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Use

Gets or sets a value indicating whether [use].

```csharp
public bool Use { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetDFMFInfo\(string\)

Gets the DFMF information.

```csharp
public static ModeForMFModal.DFMFUIInfo GetDFMFInfo(string strDFMFFile)
```

#### Parameters

`strDFMFFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string DFMF file.

#### Returns

 [ModeForMFModal](VM.Managed.DAFUL.ModeForMFModal.md).[DFMFUIInfo](VM.Managed.DAFUL.ModeForMFModal.DFMFUIInfo.md)

### GetMassPropFromDFMFFile\(string\)

Gets the mass property from DFMF file.

```csharp
public static double[] GetMassPropFromDFMFFile(string strDFMFFile)
```

#### Parameters

`strDFMFFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string DFMF file.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetModesFromDFMFFile\(string\)

Gets the modes from DFMF file.

```csharp
public static ModeForMFModal[] GetModesFromDFMFFile(string strDFMFFile)
```

#### Parameters

`strDFMFFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string DFMF file.

#### Returns

 [ModeForMFModal](VM.Managed.DAFUL.ModeForMFModal.md)\[\]

### GetXMLInformation\(\)

Gets the XML information.

```csharp
public string GetXMLInformation()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


