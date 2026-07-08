# Interface IStdDialog
<a id="VM_NX_Dialog_IStdDialog"></a>

Namespace: [VM.NX.Dialog](VM.NX.Dialog.md)  
Assembly: VMDIDef.dll  

```csharp
public interface IStdDialog
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_NX_Dialog_IStdDialog_Document"></a> Document

```csharp
object Document { get; set; }
```

#### Property Value

 object

### <a id="VM_NX_Dialog_IStdDialog_Result"></a> Result

```csharp
XmlDocument Result { get; }
```

#### Property Value

 XmlDocument

## Methods

### <a id="VM_NX_Dialog_IStdDialog_Initialize_System_String_"></a> Initialize\(string\)

```csharp
bool Initialize(string strInitInfo)
```

#### Parameters

`strInitInfo` string

#### Returns

 bool

