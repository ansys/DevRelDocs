# Class SwitchableBodyAPI
<a id="VM_API_Pre_SwitchableBodyAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.SwitchableBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class SwitchableBodyAPI
```

#### Inheritance

object ← 
[SwitchableBodyAPI](VM.API.Pre.SwitchableBodyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_SwitchableBodyAPI_CreateSwitchableBody_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__System_String_VM_Managed_SymmetricType_"></a> CreateSwitchableBody\(SubSystemDocument, IEnumerable<Obj\>, Obj?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.SwitchableBody" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "doc", "bodies" })]
public static Obj CreateSwitchableBody(this SubSystemDocument doc, IEnumerable<Obj> bodies, Obj? selectedBody = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`doc` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a switchable body.

`bodies` IEnumerable<[Obj](VM.API.Pre.Obj.md)\>

The connectable bodies of a switchable body.

`selectedBody` [Obj](VM.API.Pre.Obj.md)?

The selected connectable body of a switchable body.

`name` string

The name of  a switchable body.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.SwitchableBody" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SwitchableBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'doc', 'bodies' argument is null.

 ArgumentException

Will be thrown if the type of 'bodies', 'selectedBody' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if the element of 'bodies' does not contain 'selectedBody'.

