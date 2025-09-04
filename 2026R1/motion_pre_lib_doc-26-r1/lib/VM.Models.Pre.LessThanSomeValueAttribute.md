#  Class LessThanSomeValueAttribute

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
[Aspect(Scope.Global)]
[AttributeUsage(AttributeTargets.Method)]
[Injection(typeof(LessThanSomeValueAttribute))]
public class LessThanSomeValueAttribute : ValidationAttribute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
ValidationAttribute ← 
[LessThanSomeValueAttribute](VM.Models.Pre.LessThanSomeValueAttribute.md)

#### Inherited Members

ValidationAttribute.CheckValidationCore\(Attribute\[\], MethodBase, object\[\]\), 
ValidationAttribute.ValidationCondition\(ValidationAttribute, string, object\), 
ValidationAttribute.ExecuteException\(string\), 
ValidationAttribute.Names

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_LessThanSomeValueAttribute__ctor"></a> LessThanSomeValueAttribute\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.LessThanSomeValueAttribute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LessThanSomeValueAttribute()
```

### <a id="VM_Models_Pre_LessThanSomeValueAttribute__ctor_System_String_System_Int32_"></a> LessThanSomeValueAttribute\(string, int\)

Initializes a new instance of the <xref href="VM.Models.Pre.LessThanSomeValueAttribute" data-throw-if-not-resolved="false"></xref> class.

```csharp
public LessThanSomeValueAttribute(string name, int someValue)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target name

`someValue` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The some value to based on.

## Fields

### <a id="VM_Models_Pre_LessThanSomeValueAttribute___a__instance"></a> \_\_a$\_instance

```csharp
public static readonly LessThanSomeValueAttribute __a$_instance
```

#### Field Value

 [LessThanSomeValueAttribute](VM.Models.Pre.LessThanSomeValueAttribute.md)

## Methods

### <a id="VM_Models_Pre_LessThanSomeValueAttribute_CheckValidation_System_Reflection_MethodBase_System_Object___System_Attribute___"></a> CheckValidation\(MethodBase, object\[\], Attribute\[\]\)

Check validation.

```csharp
[Advice(Kind.Before, Targets = Target.Any)]
public void CheckValidation(MethodBase method, object[] argument, Attribute[] triggers)
```

#### Parameters

`method` [MethodBase](https://learn.microsoft.com/dotnet/api/system.reflection.methodbase)

The method.

`argument` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

The argument.

`triggers` [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute)\[\]

The triggers

### <a id="VM_Models_Pre_LessThanSomeValueAttribute_ExecuteException_System_String_"></a> ExecuteException\(string\)

Execute exception.

```csharp
protected override void ExecuteException(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The argument name.

### <a id="VM_Models_Pre_LessThanSomeValueAttribute_ValidationCondition_VM_Models_ValidationAttribute_System_String_System_Object_"></a> ValidationCondition\(ValidationAttribute, string, object\)

validation condition.

```csharp
protected override bool ValidationCondition(ValidationAttribute attribute, string paramName, object argument)
```

#### Parameters

`attribute` ValidationAttribute

The attribute.

`paramName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The parameter name.

`argument` [object](https://learn.microsoft.com/dotnet/api/system.object)

The argument.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag for success.

