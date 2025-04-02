#  Class ChangeFaceColor

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public class ChangeFaceColor : IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ChangeFaceColor](VM.Managed.DAFUL.Builder.ChangeFaceColor.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor__ctor"></a> ChangeFaceColor\(\)

```csharp
public ChangeFaceColor()
```

## Properties

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor_BuildObject"></a> BuildObject

```csharp
public ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor_InputArray"></a> InputArray

```csharp
public string[] InputArray { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor_ObjectKey"></a> ObjectKey

```csharp
public string[] ObjectKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

## Methods

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor_Build_VM_Managed_Document_"></a> Build\(Document\)

```csharp
public void Build(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor_Build_VM_Managed_Document_System_Collections_Generic_List_System_String__"></a> Build\(Document, List<string\>\)

```csharp
public void Build(Document docToAdd, List<string> lstSetPointKeys)
```

#### Parameters

`docToAdd` Document

`lstSetPointKeys` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor_BuildImpl_VM_Managed_Document_"></a> BuildImpl\(Document\)

```csharp
public virtual void BuildImpl(Document docToAdd)
```

#### Parameters

`docToAdd` Document

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Builder_ChangeFaceColor_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

