#  Class RelativeInitialCondition

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the relative function

```csharp
public class RelativeInitialCondition : Relative
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Relative](VM.API.Pre.Relative.md) ← 
[RelativeInitialCondition](VM.API.Pre.RelativeInitialCondition.md)

#### Inherited Members

[Relative.Type](VM.API.Pre.Relative.md\#VM\_API\_Pre\_Relative\_Type)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_API_Pre_RelativeInitialCondition__ctor"></a> RelativeInitialCondition\(\)

Default constructor

```csharp
public RelativeInitialCondition()
```

### <a id="VM_API_Pre_RelativeInitialCondition__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> RelativeInitialCondition\(ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the <xref href="VM.API.Pre.RelativeInitialCondition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RelativeInitialCondition(ExpressionValueVariable initAngle, ExpressionValueVariable initAngularVel)
```

#### Parameters

`initAngle` ExpressionValueVariable

The initial angle of the relative.

`initAngularVel` ExpressionValueVariable

The init angular vel of the relative.

## Properties

### <a id="VM_API_Pre_RelativeInitialCondition_InitAngle"></a> InitAngle

The value for the initial angle. The default value is 0.

```csharp
public ExpressionValueVariable InitAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_RelativeInitialCondition_InitAngularVel"></a> InitAngularVel

The value for the init angular vel. The default value is 0.

```csharp
public ExpressionValueVariable InitAngularVel { get; set; }
```

#### Property Value

 ExpressionValueVariable

