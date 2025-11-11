# Interface IPointBase
<a id="VM_IPointBase"></a>

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

### <a id="VM_IPointBase_IsParameterized"></a> IsParameterized

```csharp
bool IsParameterized { get; }
```

#### Property Value

 bool

### <a id="VM_IPointBase_Value"></a> Value

```csharp
Vector Value { get; }
```

#### Property Value

 [Vector](VM.Vector.md)

### <a id="VM_IPointBase_X"></a> X

<p>Gets the X point.</p>

```csharp
double X { get; }
```

#### Property Value

 double

### <a id="VM_IPointBase_Y"></a> Y

<p>Gets the Y point.</p>

```csharp
double Y { get; }
```

#### Property Value

 double

### <a id="VM_IPointBase_Z"></a> Z

<p>Gets the Z point.</p>

```csharp
double Z { get; }
```

#### Property Value

 double

## Methods

### <a id="VM_IPointBase_IsParametric_VM_ReferenceTypes_"></a> IsParametric\(ReferenceTypes\)

```csharp
bool IsParametric(ReferenceTypes type)
```

#### Parameters

`type` [ReferenceTypes](VM.ReferenceTypes.md)

#### Returns

 bool

