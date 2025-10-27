# Struct ObjectBase.ConvertKey
<a id="VM_Managed_ObjectBase_ConvertKey"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the converted Key.

```csharp
public struct ObjectBase.ConvertKey
```

## Constructors

### <a id="VM_Managed_ObjectBase_ConvertKey__ctor_System_UInt64_"></a> ConvertKey\(ulong\)

Initializes a new instance of the <xref href="VM.Managed.ObjectBase.ConvertKey" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConvertKey(ulong key)
```

#### Parameters

`key` ulong

The key.

### <a id="VM_Managed_ObjectBase_ConvertKey__ctor_System_UIntPtr_"></a> ConvertKey\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.ObjectBase.ConvertKey" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConvertKey(UIntPtr ptrKey)
```

#### Parameters

`ptrKey` UIntPtr

The key.

## Methods

### <a id="VM_Managed_ObjectBase_ConvertKey_GetSchema"></a> GetSchema\(\)

```csharp
public XmlSchema GetSchema()
```

#### Returns

 XmlSchema

### <a id="VM_Managed_ObjectBase_ConvertKey_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

### <a id="VM_Managed_ObjectBase_ConvertKey_ToString"></a> ToString\(\)

```csharp
public override sealed string ToString()
```

#### Returns

 string

### <a id="VM_Managed_ObjectBase_ConvertKey_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

## Operators

### <a id="VM_Managed_ObjectBase_ConvertKey_op_Implicit_VM_Managed_ObjectBase_ConvertKey__System_UIntPtr"></a> implicit operator UIntPtr\(ConvertKey\)

Cast operator.

```csharp
public static implicit operator UIntPtr(ObjectBase.ConvertKey key)
```

#### Parameters

`key` [ObjectBase](VM.Managed.ObjectBase.md).[ConvertKey](VM.Managed.ObjectBase.ConvertKey.md)

The key.

#### Returns

 UIntPtr

### <a id="VM_Managed_ObjectBase_ConvertKey_op_Implicit_System_UIntPtr__VM_Managed_ObjectBase_ConvertKey"></a> implicit operator ConvertKey\(UIntPtr\)

Cast operator.

```csharp
public static implicit operator ObjectBase.ConvertKey(UIntPtr ptrKey)
```

#### Parameters

`ptrKey` UIntPtr

The key.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md).[ConvertKey](VM.Managed.ObjectBase.ConvertKey.md)

