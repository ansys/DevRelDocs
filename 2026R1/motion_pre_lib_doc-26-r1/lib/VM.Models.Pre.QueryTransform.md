# Class QueryTransform
<a id="VM_Models_Pre_QueryTransform"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public class QueryTransform
```

#### Inheritance

object ← 
[QueryTransform](VM.Models.Pre.QueryTransform.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_QueryTransform__ctor"></a> QueryTransform\(\)

Initializes a new instance of the <xref href="VM.Models.Pre.QueryTransform" data-throw-if-not-resolved="false"></xref> class.

```csharp
public QueryTransform()
```

## Properties

### <a id="VM_Models_Pre_QueryTransform_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 int

### <a id="VM_Models_Pre_QueryTransform_SingleParams"></a> SingleParams

```csharp
public List<ITransformable> SingleParams { get; set; }
```

#### Property Value

 List<[ITransformable](VM.Models.Pre.ITransformable.md)\>

### <a id="VM_Models_Pre_QueryTransform_Singles"></a> Singles

```csharp
public List<ITransformable> Singles { get; set; }
```

#### Property Value

 List<[ITransformable](VM.Models.Pre.ITransformable.md)\>

### <a id="VM_Models_Pre_QueryTransform_SymmetricParams"></a> SymmetricParams

```csharp
public List<ITransformable> SymmetricParams { get; set; }
```

#### Property Value

 List<[ITransformable](VM.Models.Pre.ITransformable.md)\>

### <a id="VM_Models_Pre_QueryTransform_Symmetrics"></a> Symmetrics

```csharp
public List<ITransformable> Symmetrics { get; set; }
```

#### Property Value

 List<[ITransformable](VM.Models.Pre.ITransformable.md)\>

## Methods

### <a id="VM_Models_Pre_QueryTransform_AddData_System_Collections_Generic_List_VM_Models_Pre_ITransformable__VM_Models_Pre_ITransformable_"></a> AddData\(List<ITransformable\>, ITransformable\)

Add object to transformable object container.

```csharp
public void AddData(List<ITransformable> transformables, ITransformable transformable)
```

#### Parameters

`transformables` List<[ITransformable](VM.Models.Pre.ITransformable.md)\>

The transformable object container.

`transformable` [ITransformable](VM.Models.Pre.ITransformable.md)

The transformable object.

### <a id="VM_Models_Pre_QueryTransform_GetDataNoParam_System_Collections_Generic_List_VM_Models_Pre_ITransformable__"></a> GetDataNoParam\(List<ITransformable\>\)

Get transformable object container with single characteristic.

```csharp
public void GetDataNoParam(List<ITransformable> transformables)
```

#### Parameters

`transformables` List<[ITransformable](VM.Models.Pre.ITransformable.md)\>

The transformable object container.

### <a id="VM_Models_Pre_QueryTransform_GetDataParamSingle_System_Collections_Generic_List_VM_Models_Pre_ITransformable__"></a> GetDataParamSingle\(List<ITransformable\>\)

Get transformable object container with single and parameter characteristic.

```csharp
public void GetDataParamSingle(List<ITransformable> transformables)
```

#### Parameters

`transformables` List<[ITransformable](VM.Models.Pre.ITransformable.md)\>

The transformable object container.

### <a id="VM_Models_Pre_QueryTransform_GetDataParamSym_System_Collections_Generic_List_VM_Models_Pre_ITransformable__"></a> GetDataParamSym\(List<ITransformable\>\)

Get transformable object container with symmetric and parameter characteristic.

```csharp
public void GetDataParamSym(List<ITransformable> transformables)
```

#### Parameters

`transformables` List<[ITransformable](VM.Models.Pre.ITransformable.md)\>

The transformable object container.

