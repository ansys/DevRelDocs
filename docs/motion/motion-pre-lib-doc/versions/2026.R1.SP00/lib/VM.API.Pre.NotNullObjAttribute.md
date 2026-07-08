# Class NotNullObjAttribute
<a id="VM_API_Pre_NotNullObjAttribute"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements attribute for Object of argument <xref href="VM.API.Pre.Obj" data-throw-if-not-resolved="false"></xref> is not null.

```csharp
[Aspect(Scope.Global)]
[AttributeUsage(AttributeTargets.Method)]
[Injection(typeof(NotNullObjAttribute))]
public class NotNullObjAttribute : ValidationAttribute
```

#### Inheritance

object ← 
Attribute ← 
[ValidationAttribute](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models/Models/Attributes/ValidationAttribute.cs) ← 
[NotNullObjAttribute](VM.API.Pre.NotNullObjAttribute.md)

#### Inherited Members

[ValidationAttribute.CheckValidationCore\(Attribute\[\], MethodBase, object\[\]\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models/Models/Attributes/ValidationAttribute.cs), 
[ValidationAttribute.ValidationCondition\(ValidationAttribute, string, object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models/Models/Attributes/ValidationAttribute.cs), 
[ValidationAttribute.ExecuteException\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models/Models/Attributes/ValidationAttribute.cs), 
[ValidationAttribute.Names](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models/Models/Attributes/ValidationAttribute.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_API_Pre_NotNullObjAttribute__ctor"></a> NotNullObjAttribute\(\)

Initializes a new instance of the <xref href="VM.API.Pre.NotNullObjAttribute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NotNullObjAttribute()
```

### <a id="VM_API_Pre_NotNullObjAttribute__ctor_System_String___"></a> NotNullObjAttribute\(params string\[\]\)

Initializes a new instance of the <xref href="VM.API.Pre.NotNullObjAttribute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NotNullObjAttribute(params string[] names)
```

#### Parameters

`names` string\[\]

The target names.

## Fields

### <a id="VM_API_Pre_NotNullObjAttribute___a__instance"></a> \_\_a$\_instance

```csharp
public static readonly NotNullObjAttribute __a$_instance
```

#### Field Value

 [NotNullObjAttribute](VM.API.Pre.NotNullObjAttribute.md)

## Methods

### <a id="VM_API_Pre_NotNullObjAttribute_CheckValidation_System_Reflection_MethodBase_System_Object___System_Attribute___"></a> CheckValidation\(MethodBase, object\[\], Attribute\[\]\)

Check validation.

```csharp
[Advice(Kind.Before, Targets = Target.Any)]
public void CheckValidation(MethodBase method, object[] argument, Attribute[] triggers)
```

#### Parameters

`method` MethodBase

The method.

`argument` object\[\]

The argument.

`triggers` Attribute\[\]

The triggers

### <a id="VM_API_Pre_NotNullObjAttribute_ExecuteException_System_String_"></a> ExecuteException\(string\)

Execute exception.

```csharp
protected override void ExecuteException(string name)
```

#### Parameters

`name` string

The argument name.

### <a id="VM_API_Pre_NotNullObjAttribute_ValidationCondition_VM_Models_ValidationAttribute_System_String_System_Object_"></a> ValidationCondition\(ValidationAttribute, string, object\)

validation condition.

```csharp
protected override bool ValidationCondition(ValidationAttribute attribute, string paramName, object argument)
```

#### Parameters

`attribute` [ValidationAttribute](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models/Models/Attributes/ValidationAttribute.cs)

The attribute.

`paramName` string

The parameter name.

`argument` object

The argument.

#### Returns

 bool

The flag for success.

