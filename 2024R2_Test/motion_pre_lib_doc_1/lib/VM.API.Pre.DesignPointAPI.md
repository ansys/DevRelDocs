# Class DesignPointAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class DesignPointAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DesignPointAPI](VM.API.Pre.DesignPointAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateDesignPoint\(IDocument, string, Vector, SymmetricType\)

Create <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "position" })]
public static Obj CreateDesignPoint(this IDocument document, string name, Vector position, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the design point.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the design point.

`position` Vector

The position to create the design point.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'position' argument is null.

### CreateDesignPoint\(IDocument, string, PointBase, SymmetricType\)

Create <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "position" })]
public static Obj CreateDesignPoint(this IDocument document, string name, PointBase position, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the design point.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the design point.

`position` PointBase

The position to create the design point.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'position' argument is null.


