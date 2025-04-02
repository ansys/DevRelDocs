#  Struct LinkDictionaryValueLinkConverter<TValue\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public struct LinkDictionaryValueLinkConverter<TValue> : ILinkDictionaryValueConverter<TValue, Link<TValue, ObjectBase.Update, ObjectBase.None, ObjectBase.None>>
```

#### Type Parameters

`TValue` 

#### Implements

[ILinkDictionaryValueConverter<TValue, Link<TValue, ObjectBase.Update, ObjectBase.None, ObjectBase.None\>\>](VM.Managed.Collections.ILinkDictionaryValueConverter\-2.md)

## Methods

### <a id="VM_Managed_Collections_LinkDictionaryValueLinkConverter_1_ClearWrapper_VM_Managed_Link__0_VM_Managed_ObjectBase_Update_VM_Managed_ObjectBase_None_VM_Managed_ObjectBase_None__"></a> ClearWrapper\(Link<TValue, Update, None, None\>\)

```csharp
public void ClearWrapper(Link<TValue, ObjectBase.Update, ObjectBase.None, ObjectBase.None> wrapper)
```

#### Parameters

`wrapper` [Link](VM.Managed.Link\-4.md)<TValue, [ObjectBase](VM.Managed.ObjectBase.md).[Update](VM.Managed.ObjectBase.Update.md), [ObjectBase](VM.Managed.ObjectBase.md).[None](VM.Managed.ObjectBase.None.md), [ObjectBase](VM.Managed.ObjectBase.md).[None](VM.Managed.ObjectBase.None.md)\>

### <a id="VM_Managed_Collections_LinkDictionaryValueLinkConverter_1_Convert__0_VM_Models_Pre_ILinkContainer_"></a> Convert\(TValue, ILinkContainer\)

```csharp
public Link<TValue, ObjectBase.Update, ObjectBase.None, ObjectBase.None> Convert(TValue value, ILinkContainer container)
```

#### Parameters

`value` TValue

`container` ILinkContainer

#### Returns

 [Link](VM.Managed.Link\-4.md)<TValue, [ObjectBase](VM.Managed.ObjectBase.md).[Update](VM.Managed.ObjectBase.Update.md), [ObjectBase](VM.Managed.ObjectBase.md).[None](VM.Managed.ObjectBase.None.md), [ObjectBase](VM.Managed.ObjectBase.md).[None](VM.Managed.ObjectBase.None.md)\>

### <a id="VM_Managed_Collections_LinkDictionaryValueLinkConverter_1_ConvertBack_VM_Managed_Link__0_VM_Managed_ObjectBase_Update_VM_Managed_ObjectBase_None_VM_Managed_ObjectBase_None__"></a> ConvertBack\(Link<TValue, Update, None, None\>\)

```csharp
public TValue ConvertBack(Link<TValue, ObjectBase.Update, ObjectBase.None, ObjectBase.None> wrapper)
```

#### Parameters

`wrapper` [Link](VM.Managed.Link\-4.md)<TValue, [ObjectBase](VM.Managed.ObjectBase.md).[Update](VM.Managed.ObjectBase.Update.md), [ObjectBase](VM.Managed.ObjectBase.md).[None](VM.Managed.ObjectBase.None.md), [ObjectBase](VM.Managed.ObjectBase.md).[None](VM.Managed.ObjectBase.None.md)\>

#### Returns

 TValue

