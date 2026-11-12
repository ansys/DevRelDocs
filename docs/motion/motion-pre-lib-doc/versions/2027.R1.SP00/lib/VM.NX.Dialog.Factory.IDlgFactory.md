# Interface IDlgFactory
<a id="VM_NX_Dialog_Factory_IDlgFactory"></a>

Namespace: [VM.NX.Dialog.Factory](VM.NX.Dialog.Factory.md)  
Assembly: VMDIDef.dll  

```csharp
public interface IDlgFactory
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_NX_Dialog_Factory_IDlgFactory_GetObject_System_String_System_Windows_Forms_Form_"></a> GetObject\(string, Form\)

```csharp
Form GetObject(string strCommand, Form formOwner)
```

#### Parameters

`strCommand` string

`formOwner` Form

#### Returns

 Form

### <a id="VM_NX_Dialog_Factory_IDlgFactory_GetObjectWithMultiDialog_VM_NX_Dialog_Factory_MultiDialogInfo___System_Windows_Forms_Form_"></a> GetObjectWithMultiDialog\(MultiDialogInfo\[\], Form\)

```csharp
Form GetObjectWithMultiDialog(MultiDialogInfo[] arInfo, Form formOwner)
```

#### Parameters

`arInfo` [MultiDialogInfo](VM.NX.Dialog.Factory.MultiDialogInfo.md)\[\]

`formOwner` Form

#### Returns

 Form

### <a id="VM_NX_Dialog_Factory_IDlgFactory_IsUseDialog_System_String_"></a> IsUseDialog\(string\)

```csharp
bool IsUseDialog(string strTypeName)
```

#### Parameters

`strTypeName` string

#### Returns

 bool

