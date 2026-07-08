#  Class CreateBody

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

Create body class

```csharp
public class CreateBody
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateBody](VM.Managed.DAFUL.Operation.CreateBody.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_CreateBody__ctor"></a> CreateBody\(\)

```csharp
public CreateBody()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_CreateBody_CreateBlockBody_VM_Managed_DAFUL_SubSystemDocument_System_String_System_Double_System_Double_System_Double_VM_Managed_PointBase_"></a> CreateBlockBody\(SubSystemDocument, string, double, double, double, PointBase\)

Create block body

```csharp
public static SolidBody CreateBlockBody(SubSystemDocument docSub, string strName, double dWidth, double dHeight, double dDepth, PointBase position)
```

#### Parameters

`docSub` SubSystemDocument

The document

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

`dWidth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The width

`dHeight` [double](https://learn.microsoft.com/dotnet/api/system.double)

The height

`dDepth` [double](https://learn.microsoft.com/dotnet/api/system.double)

The depth

`position` PointBase

the position

#### Returns

 SolidBody

### <a id="VM_Managed_DAFUL_Operation_CreateBody_CreateCylinderBody_VM_Managed_Document_System_String_VM_Managed_PointBase_VM_Managed_PointBase_System_Double_"></a> CreateCylinderBody\(Document, string, PointBase, PointBase, double\)

Create cylinder body

```csharp
public static SolidBody CreateCylinderBody(Document document, string strName, PointBase posBottom, PointBase posTop, double dRadius)
```

#### Parameters

`document` Document

The document

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

`posBottom` PointBase

The bottom position

`posTop` PointBase

The top position

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 SolidBody

### <a id="VM_Managed_DAFUL_Operation_CreateBody_CreateCylinderBody_VM_Managed_Document_VM_Managed_PointBase_VM_Managed_PointBase_System_Double_"></a> CreateCylinderBody\(Document, PointBase, PointBase, double\)

Create cylinder body in part

```csharp
public static Body CreateCylinderBody(Document document, PointBase posBottom, PointBase posTop, double dRadius)
```

#### Parameters

`document` Document

The document

`posBottom` PointBase

The bottom position

`posTop` PointBase

The top position

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

#### Returns

 Body

### <a id="VM_Managed_DAFUL_Operation_CreateBody_CreateSphereBody_VM_Managed_Document_System_String_System_Double_VM_Managed_PointBase_System_Boolean_System_Boolean_"></a> CreateSphereBody\(Document, string, double, PointBase, bool, bool\)

Create sphere body

```csharp
public static SolidBody CreateSphereBody(Document document, string name, double dRadius, PointBase position, bool getNewEntityName = true, bool addToDocument = true)
```

#### Parameters

`document` Document

The document

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

`dRadius` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius

`position` PointBase

The position

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for add created element to document.

#### Returns

 SolidBody

### <a id="VM_Managed_DAFUL_Operation_CreateBody_CreateSphereBody_VM_Managed_Document_System_String_System_String_VM_Managed_PointBase_System_Boolean_System_Boolean_"></a> CreateSphereBody\(Document, string, string, PointBase, bool, bool\)

Create sphere body

```csharp
public static SolidBody CreateSphereBody(Document document, string name, string strRadius, PointBase position, bool getNewEntityName = true, bool addToDocument = true)
```

#### Parameters

`document` Document

The document

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

`strRadius` [string](https://learn.microsoft.com/dotnet/api/system.string)

The radius

`position` PointBase

The position

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for add created element to document.

#### Returns

 SolidBody

