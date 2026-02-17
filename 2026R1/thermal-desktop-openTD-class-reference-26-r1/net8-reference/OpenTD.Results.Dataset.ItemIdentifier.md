# <a id="OpenTD_Results_Dataset_ItemIdentifier"></a> Class ItemIdentifier

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

A class to generalize "items" that are associated with data,
e.g., entities (nodes, lumps, etc.), registers, record numbers, etc.

```csharp
public class ItemIdentifier
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_ItemIdentifier__ctor_OpenTD_Results_Dataset_ItemIdentifier_Types_System_String_System_Int64_System_Int64_System_String_"></a> ItemIdentifier\(Types, string, long, long, string\)

```csharp
public ItemIdentifier(ItemIdentifier.Types type, string submodel, long id, long recordNum, string registerName)
```

#### Parameters

`type` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md).[Types](OpenTD.Results.Dataset.ItemIdentifier.Types.md)

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`recordNum` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`registerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifier__ctor_System_String_"></a> ItemIdentifier\(string\)

```csharp
public ItemIdentifier(string sindaName)
```

#### Parameters

`sindaName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifier__ctor_System_String_System_Int64_"></a> ItemIdentifier\(string, long\)

```csharp
public ItemIdentifier(string submodel, long id)
```

#### Parameters

`submodel` [string](https://learn.microsoft.com/dotnet/api/system.string)

`id` [long](https://learn.microsoft.com/dotnet/api/system.int64)

## Properties

### <a id="OpenTD_Results_Dataset_ItemIdentifier_AutoCommenter"></a> AutoCommenter

```csharp
protected AutoCommenter AutoCommenter { get; set; }
```

#### Property Value

 AutoCommenter

### <a id="OpenTD_Results_Dataset_ItemIdentifier_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifier_Id"></a> Id

```csharp
public long Id { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_ItemIdentifier_InternalSuggestedComment"></a> InternalSuggestedComment

```csharp
public string InternalSuggestedComment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifier_RecordNum"></a> RecordNum

```csharp
public long RecordNum { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OpenTD_Results_Dataset_ItemIdentifier_RegisterName"></a> RegisterName

```csharp
public string RegisterName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifier_Submodel"></a> Submodel

```csharp
public string Submodel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifier_Type"></a> Type

```csharp
public ItemIdentifier.Types Type { get; }
```

#### Property Value

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md).[Types](OpenTD.Results.Dataset.ItemIdentifier.Types.md)

## Methods

### <a id="OpenTD_Results_Dataset_ItemIdentifier_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_Results_Dataset_ItemIdentifier_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_Results_Dataset_ItemIdentifier_GetSelfSuggestedComment"></a> GetSelfSuggestedComment\(\)

```csharp
protected virtual string GetSelfSuggestedComment()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_ItemIdentifier_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## Operators

### <a id="OpenTD_Results_Dataset_ItemIdentifier_op_Equality_OpenTD_Results_Dataset_ItemIdentifier_OpenTD_Results_Dataset_ItemIdentifier_"></a> operator ==\(ItemIdentifier, ItemIdentifier\)

```csharp
public static bool operator ==(ItemIdentifier x1, ItemIdentifier x2)
```

#### Parameters

`x1` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

`x2` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_ItemIdentifier_op_Inequality_OpenTD_Results_Dataset_ItemIdentifier_OpenTD_Results_Dataset_ItemIdentifier_"></a> operator \!=\(ItemIdentifier, ItemIdentifier\)

```csharp
public static bool operator !=(ItemIdentifier x1, ItemIdentifier x2)
```

#### Parameters

`x1` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

`x2` [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

