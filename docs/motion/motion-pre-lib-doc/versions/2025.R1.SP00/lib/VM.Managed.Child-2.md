#  Class Child<T, TUpdate\>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the linked object relationship with its container object.
The container object has a linked object.

```csharp
public sealed class Child<T, TUpdate> : ITypedLink<T>, ILink, IPostDeserialized where T : class, ILinkContainer where TUpdate : struct, ILinkContainerEvent.ILinkEventBuilder
```

#### Type Parameters

`T` 

The link container.

`TUpdate` 

The link event.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Child<T, TUpdate\>](VM.Managed.Child\-2.md)

#### Implements

[ITypedLink<T\>](VM.Managed.ITypedLink\-1.md), 
[ILink](VM.Managed.ILink.md), 
IPostDeserialized

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Child_2__ctor_VM_Models_Pre_ILinkContainer_"></a> Child\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.Child%602" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Child(ILinkContainer objParent)
```

#### Parameters

`objParent` ILinkContainer

The linked object's container object.

### <a id="VM_Managed_Child_2__ctor_VM_Models_Pre_ILinkContainer__0_"></a> Child\(ILinkContainer, T\)

Initializes a new instance of the <xref href="VM.Managed.Child%602" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Child(ILinkContainer objParent, T obj)
```

#### Parameters

`objParent` ILinkContainer

The linked object's container object.

`obj` T

The linked object.

### <a id="VM_Managed_Child_2__ctor_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> Child\(SerializationInfo, StreamingContext\)

```csharp
protected Child(SerializationInfo info, StreamingContext context)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

## Properties

### <a id="VM_Managed_Child_2_Object"></a> Object

Gets or sets the linked object.

```csharp
public virtual T Object { get; set; }
```

#### Property Value

 T

## Methods

### <a id="VM_Managed_Child_2_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Child_2_Dispose"></a> Dispose\(\)

destroy a instance of the <xref href="VM.Managed.Child%602" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_Child_2_GetObjectData_System_Runtime_Serialization_SerializationInfo_System_Runtime_Serialization_StreamingContext_"></a> GetObjectData\(SerializationInfo, StreamingContext\)

Serialization function for restore.

```csharp
void GetObjectData(SerializationInfo info, StreamingContext __unnamed001)
```

#### Parameters

`info` [SerializationInfo](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.serializationinfo)

The info.

`__unnamed001` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### <a id="VM_Managed_Child_2_OnDeserialized_System_Runtime_Serialization_StreamingContext_"></a> OnDeserialized\(StreamingContext\)

```csharp
[OnDeserialized]
public void OnDeserialized(StreamingContext context)
```

#### Parameters

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### <a id="VM_Managed_Child_2_OnPostDeserialized_System_Runtime_Serialization_StreamingContext_"></a> OnPostDeserialized\(StreamingContext\)

```csharp
public void OnPostDeserialized(StreamingContext context)
```

#### Parameters

`context` [StreamingContext](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.streamingcontext)

### <a id="VM_Managed_Child_2_OnResetLink"></a> OnResetLink\(\)

```csharp
protected void OnResetLink()
```

## Operators

### <a id="VM_Managed_Child_2_op_Implicit_VM_Managed_Child__0__1____0"></a> implicit operator T\(Child<T, TUpdate\>\)

```csharp
public static implicit operator T(Child<T, TUpdate> child)
```

#### Parameters

`child` [Child](VM.Managed.Child\-2.md)<T, TUpdate\>

#### Returns

 T

