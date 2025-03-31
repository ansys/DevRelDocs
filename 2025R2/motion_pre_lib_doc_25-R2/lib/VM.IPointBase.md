# Interface IPointBase

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IPointBase
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### IsParameterized

```csharp
bool IsParameterized { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Value

```csharp
Vector Value { get; }
```

#### Property Value

 [Vector](VM.Vector.md)

### X

<p>Gets the X point.</p>

```csharp
double X { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Y

<p>Gets the Y point.</p>

```csharp
double Y { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Z

<p>Gets the Z point.</p>

```csharp
double Z { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### IsParametric\(ReferenceTypes\)

```csharp
bool IsParametric(ReferenceTypes type)
```

#### Parameters

`type` [ReferenceTypes](VM.ReferenceTypes.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


