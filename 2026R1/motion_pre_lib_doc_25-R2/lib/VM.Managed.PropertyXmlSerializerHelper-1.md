#  Class PropertyXmlSerializerHelper<TProperty\>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent property for xmlSerializer.

```csharp
public class PropertyXmlSerializerHelper<TProperty> where TProperty : Property
```

#### Type Parameters

`TProperty` 

The type of the property.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PropertyXmlSerializerHelper<TProperty\>](VM.Managed.PropertyXmlSerializerHelper\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_PropertyXmlSerializerHelper_1__ctor__0_"></a> PropertyXmlSerializerHelper\(TProperty\)

Initializes a new instance of the <xref href="VM.Managed.PropertyXmlSerializerHelper%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyXmlSerializerHelper(TProperty prop)
```

#### Parameters

`prop` TProperty

The property.

## Operators

### <a id="VM_Managed_PropertyXmlSerializerHelper_1_op_Implicit_VM_Managed_PropertyXmlSerializer__0___VM_Managed_PropertyXmlSerializerHelper__0_"></a> implicit operator PropertyXmlSerializerHelper<TProperty\>\(PropertyXmlSerializer<TProperty\>\)

Performs an implicit conversion from <xref href="VM.Managed.PropertyXmlSerializerHelper%601" data-throw-if-not-resolved="false"></xref> to <xref href="VM.Managed.PropertyXmlSerializerHelper%601" data-throw-if-not-resolved="false"></xref>.

```csharp
public static implicit operator PropertyXmlSerializerHelper<TProperty>(PropertyXmlSerializer<TProperty> ser)
```

#### Parameters

`ser` [PropertyXmlSerializer](VM.Managed.PropertyXmlSerializer\-1.md)<TProperty\>

The ser.

#### Returns

 [PropertyXmlSerializerHelper](VM.Managed.PropertyXmlSerializerHelper\-1.md)<TProperty\>

The result of the conversion.

### <a id="VM_Managed_PropertyXmlSerializerHelper_1_op_Implicit_VM_Managed_PropertyXmlSerializerHelper__0____0"></a> implicit operator TProperty\(PropertyXmlSerializerHelper<TProperty\>\)

Performs an implicit conversion from <xref href="VM.Managed.PropertyXmlSerializerHelper%601" data-throw-if-not-resolved="false"></xref> to TProperty.

```csharp
public static implicit operator TProperty(PropertyXmlSerializerHelper<TProperty> ser)
```

#### Parameters

`ser` [PropertyXmlSerializerHelper](VM.Managed.PropertyXmlSerializerHelper\-1.md)<TProperty\>

The ser.

#### Returns

 TProperty

The result of the conversion.

