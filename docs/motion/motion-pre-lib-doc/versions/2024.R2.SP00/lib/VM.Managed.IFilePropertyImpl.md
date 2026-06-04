# Class IFilePropertyImpl

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the property for file.

```csharp
public sealed class IFilePropertyImpl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IFilePropertyImpl](VM.Managed.IFilePropertyImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### IFilePropertyImpl\(\)

```csharp
public IFilePropertyImpl()
```

## Methods

### GetAbsulutePath<T\>\(T\)

Gets the absulute path.

```csharp
public static string GetAbsulutePath<T>(T TProp) where T : Property, IFileProperty
```

#### Parameters

`TProp` T

The property.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The absulute path

#### Type Parameters

`T` 

### GetChilds\(PropertyDocumentBase\)

Gets object container in document.

```csharp
public static ObjectBase[] GetChilds(PropertyDocumentBase doc)
```

#### Parameters

`doc` [PropertyDocumentBase](VM.Managed.PropertyDocumentBase.md)

The document.

#### Returns

 ObjectBase\[\]

The object container in document.

### GetPropertyDocumentImpl<T\>\(T\)

Gets the property document.

```csharp
public static PropertyDocumentBase GetPropertyDocumentImpl<T>(T TProp) where T : Property, IFileProperty
```

#### Parameters

`TProp` T

The property.

#### Returns

 [PropertyDocumentBase](VM.Managed.PropertyDocumentBase.md)

The property document.

#### Type Parameters

`T` 

### GetRelativePath<T\>\(T, string\)

Gets the relative path.

```csharp
public static string GetRelativePath<T>(T TProp, string strRefDir) where T : Property, IFileProperty
```

#### Parameters

`TProp` T

The property.

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative path

#### Type Parameters

`T` 

### GetUnitImpl<T\>\(T\)

Gets the unit of property document.

```csharp
public static Unit GetUnitImpl<T>(T TProp) where T : Property, IFileProperty
```

#### Parameters

`TProp` T

The property.

#### Returns

 Unit

The unit

#### Type Parameters

`T` 

### SetChilds\(ObjectBase\[\], PropertyDocumentBase\)

Sets object container in document.

```csharp
public static void SetChilds(ObjectBase[] ar, PropertyDocumentBase doc)
```

#### Parameters

`ar` ObjectBase\[\]

The object container.

`doc` [PropertyDocumentBase](VM.Managed.PropertyDocumentBase.md)

The document.


