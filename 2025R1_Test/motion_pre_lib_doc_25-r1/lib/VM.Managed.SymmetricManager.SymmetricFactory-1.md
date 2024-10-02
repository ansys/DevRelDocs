#  Class SymmetricManager.SymmetricFactory<T\>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the symmetric factory.

```csharp
public class SymmetricManager.SymmetricFactory<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SymmetricManager.SymmetricFactory<T\>](VM.Managed.SymmetricManager.SymmetricFactory\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_SymmetricManager_SymmetricFactory_1__ctor_System_Xml_XmlNodeList_"></a> SymmetricFactory\(XmlNodeList\)

Initializes a new instance of the <xref href="VM.Managed.SymmetricManager.SymmetricFactory%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SymmetricFactory(XmlNodeList nodeInitialInfo)
```

#### Parameters

`nodeInitialInfo` [XmlNodeList](https://learn.microsoft.com/dotnet/api/system.xml.xmlnodelist)

The node initial information.

## Properties

### <a id="VM_Managed_SymmetricManager_SymmetricFactory_1_Item_System_Object_"></a> this\[object\]

Gets the T with the specified object.

```csharp
public T this[object ob] { get; }
```

#### Property Value

 T

### <a id="VM_Managed_SymmetricManager_SymmetricFactory_1_Item_System_Type_"></a> this\[Type\]

Gets the T with the specified type.

```csharp
public T this[Type type] { get; }
```

#### Property Value

 T

## Methods

### <a id="VM_Managed_SymmetricManager_SymmetricFactory_1_Add_System_Type__0_"></a> Add\(Type, T\)

Add new symmetric item into the factory

```csharp
public void Add(Type type, T value)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type of symmetric object.

`value` T

The new item.

