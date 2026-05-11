# Class CreateDesignParameter

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for the design parameters creation.

```csharp
public class CreateDesignParameter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateDesignParameter](VM.Managed.DAFUL.Operation.Util.CreateDesignParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CreateDesignParameter\(\)

```csharp
public CreateDesignParameter()
```

## Methods

### CreateDF\(Document3D, TransformBase, bool, string\)

Create the design frame.

```csharp
public static DesignFrame CreateDF(Document3D activeDocument, TransformBase transfValue, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`transfValue` TransformBase

The design frame transformation.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design frame name.

#### Returns

 DesignFrame

The new design frame.

### CreateDF\(Document3D, TransformBase, bool, string, string\)

Create the design frame.

```csharp
public static DesignFrame CreateDF(Document3D activeDocument, TransformBase transfValue, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`transfValue` TransformBase

The design frame transformation.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design frame name.

`strMatchName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the matched object.

#### Returns

 DesignFrame

The new design frame.

### CreateDP\(Document, PointBase, bool, string\)

Create the design point.

```csharp
public static DesignPoint CreateDP(Document document, PointBase ptValue, bool bInterface, string strName)
```

#### Parameters

`document` Document

The active document.

`ptValue` PointBase

The design point position.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design point name.

#### Returns

 DesignPoint

The new design point.

### CreateDP\(Document3D, VectorBase, bool, string\)

Create the design point.

```csharp
public static DesignPoint CreateDP(Document3D activeDocument, VectorBase vecValue, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`vecValue` VectorBase

The design point position.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design point name.

#### Returns

 DesignPoint

The new design point.

### CreateDP\(Document3D, PointBase, bool, string, string\)

Creates the DP.

```csharp
public static DesignPoint CreateDP(Document3D activeDocument, PointBase ptValue, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`ptValue` PointBase

The design point position.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design point name

`strMatchName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the matched object.

#### Returns

 DesignPoint

The new design point

### CreateDP\(Document3D, VectorBase, bool, string, string\)

Creates the DP.

```csharp
public static DesignPoint CreateDP(Document3D activeDocument, VectorBase vecValue, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`vecValue` VectorBase

The design point position.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design point name

`strMatchName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the matched object.

#### Returns

 DesignPoint

The new design point

### CreateDV\(Document, double, bool, string\)

Create the design variable.

```csharp
public static DesignVariable CreateDV(Document document, double dValue, bool bInterface, string strName)
```

#### Parameters

`document` Document

The active document.

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The design variable value.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design variable name.

#### Returns

 DesignVariable

The new design variable.

### CreateDV\(Document3D, string, bool, string\)

Create the design variable.

```csharp
public static DesignVariable CreateDV(Document3D activeDocument, string alue, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`alue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design variable value.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design variable name.

#### Returns

 DesignVariable

The new design variable.

### CreateDV\(Document3D, double, bool, string, string\)

Creates the DV.

```csharp
public static DesignVariable CreateDV(Document3D activeDocument, double dValue, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The design variable value.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The design variable name.

`strMatchName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the matched object.

#### Returns

 DesignVariable

The new design variable


