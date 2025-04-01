# Class CADOperation

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the CAD Operation.

```csharp
public class CADOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CADOperation](VM.Managed.CADOperation.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CADOperation\(\)

```csharp
public CADOperation()
```

## Methods

### SetInterfaceNames\(IInterfaceSupport, Dictionary<IInterface, List<string\>\>\)

Set interface names.

```csharp
public static void SetInterfaceNames(IInterfaceSupport support, Dictionary<IInterface, List<string>> dic)
```

#### Parameters

`support` [IInterfaceSupport](VM.Managed.IInterfaceSupport.md)

The document.

`dic` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[IInterface](VM.Managed.IInterface.md), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

The objectbase and interface names.

### SetMarkerTramsform\(DesignFrame, TransformBase\)

Set marker transform.

```csharp
public static void SetMarkerTramsform(DesignFrame df, TransformBase tra)
```

#### Parameters

`df` [DesignFrame](VM.Managed.DesignFrame.md)

The design frame.

`tra` TransformBase

The transform.

### SetShearModulus\(ISO, bool, string\)

Set shear modulus.

```csharp
public static void SetShearModulus(ISO iso, bool bUseShearModulusWithUserInput, string strShearModulus)
```

#### Parameters

`iso` [ISO](VM.Managed.Material.ISO.md)

The ISO Material.

`bUseShearModulusWithUserInput` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Use shear modulus with user input.

`strShearModulus` [string](https://learn.microsoft.com/dotnet/api/system.string)

The sherar modulus.


