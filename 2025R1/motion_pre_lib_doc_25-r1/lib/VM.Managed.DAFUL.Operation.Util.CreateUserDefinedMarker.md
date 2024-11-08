#  Class CreateUserDefinedMarker

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for an user defined marker creation.

```csharp
public class CreateUserDefinedMarker
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateUserDefinedMarker](VM.Managed.DAFUL.Operation.Util.CreateUserDefinedMarker.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_CreateUserDefinedMarker__ctor"></a> CreateUserDefinedMarker\(\)

```csharp
public CreateUserDefinedMarker()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_CreateUserDefinedMarker_CreateOnGround_VM_Managed_Document3D_VM_Managed_TransformBase_System_String_"></a> CreateOnGround\(Document3D, TransformBase, string\)

Create the user defined marker on ground.

```csharp
public static Marker CreateOnGround(Document3D activeDocument, TransformBase transf, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`transf` TransformBase

The user defined marker transformation.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The user defined marker name.

#### Returns

 Marker

The new user defined marker.

