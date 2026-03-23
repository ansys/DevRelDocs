# Class RelativeFunction

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class represents the relative function

```csharp
public class RelativeFunction : Relative
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Relative](VM.API.Pre.Relative.md) ← 
[RelativeFunction](VM.API.Pre.RelativeFunction.md)

#### Inherited Members

[Relative.Type](VM.API.Pre.Relative.md\#VM\_API\_Pre\_Relative\_Type)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### RelativeFunction\(Obj\)

Default constructor

```csharp
public RelativeFunction(Obj function)
```

#### Parameters

`function` [Obj](VM.API.Pre.Obj.md)

The function of the relative.

### RelativeFunction\(Obj, MotionType, ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the <xref href="VM.API.Pre.RelativeFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RelativeFunction(Obj function, DriverFunction.MotionType motionType, ExpressionValueVariable initAngle, ExpressionValueVariable initAngularVel)
```

#### Parameters

`function` [Obj](VM.API.Pre.Obj.md)

The function of the relative.

`motionType` DriverFunction.MotionType

The motion type of the relative.

`initAngle` ExpressionValueVariable

The initial angle of the relative.

`initAngularVel` ExpressionValueVariable

The init angular vel of the relative.

## Properties

### Function

The value for function.

```csharp
public Obj Function { get; set; }
```

#### Property Value

 [Obj](VM.API.Pre.Obj.md)

### InitAngle

The value for the initial angle. The default value is 0.

```csharp
public ExpressionValueVariable InitAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### InitAngularVel

The value for the init angular vel. The default value is 0.

```csharp
public ExpressionValueVariable InitAngularVel { get; set; }
```

#### Property Value

 ExpressionValueVariable

### MotionType

The value for the motion type. The default value is <xref href="VM.Managed.DAFUL.Constraints.DriverFunction.MotionType.Displacement" data-throw-if-not-resolved="false"></xref>.

```csharp
public DriverFunction.MotionType MotionType { get; set; }
```

#### Property Value

 DriverFunction.MotionType


