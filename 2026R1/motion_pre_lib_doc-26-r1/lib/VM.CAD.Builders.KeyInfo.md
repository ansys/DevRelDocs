#  Struct KeyInfo

Namespace: [VM.CAD.Builders](VM.CAD.Builders.md)  
Assembly: VM.CAD.Builders.dll  

Struct contains the key vlaue

```csharp
public struct KeyInfo
```

## Properties

### <a id="VM_CAD_Builders_KeyInfo_Key"></a> Key

Key of the geometry

```csharp
public string Key { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="VM_CAD_Builders_KeyInfo_op_Implicit_System_UIntPtr__VM_CAD_Builders_KeyInfo"></a> implicit operator KeyInfo\(UIntPtr\)

Implicit operator to convert key to <xref href="VM.CAD.Builders.KeyInfo" data-throw-if-not-resolved="false"></xref> class

```csharp
public static implicit operator KeyInfo(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key to convert.

#### Returns

 [KeyInfo](VM.CAD.Builders.KeyInfo.md)

### <a id="VM_CAD_Builders_KeyInfo_op_Implicit_VM_CAD_Builders_KeyInfo__System_UIntPtr"></a> implicit operator UIntPtr\(KeyInfo\)

Implicit operator to convert <xref href="VM.CAD.Builders.KeyInfo" data-throw-if-not-resolved="false"></xref> class to key

```csharp
public static implicit operator UIntPtr(KeyInfo keyInfo)
```

#### Parameters

`keyInfo` [KeyInfo](VM.CAD.Builders.KeyInfo.md)

The <xref href="VM.CAD.Builders.KeyInfo" data-throw-if-not-resolved="false"></xref> to convert.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

