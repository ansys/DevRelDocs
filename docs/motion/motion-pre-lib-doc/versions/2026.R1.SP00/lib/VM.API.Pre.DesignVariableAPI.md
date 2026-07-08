# Class DesignVariableAPI
<a id="VM_API_Pre_DesignVariableAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DesignVariable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class DesignVariableAPI
```

#### Inheritance

object ← 
[DesignVariableAPI](VM.API.Pre.DesignVariableAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_DesignVariableAPI_CreateDesignVariable_VM_Models_Pre_IDocument_System_String_VM_Models_Pre_ExpressionValueVariable_VM_Managed_SymmetricType_"></a> CreateDesignVariable\(IDocument, string, ExpressionValueVariable, SymmetricType\)

Create <xref href="VM.Managed.DesignVariable" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullOrEmpty(new string[] { "value" })]
public static Obj CreateDesignVariable(this IDocument document, string name, ExpressionValueVariable value, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the design variable.

`name` string

The name of the design variable.

`value` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The value to create the design variable.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DesignVariable" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DesignVariable" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'value' argument is null.

