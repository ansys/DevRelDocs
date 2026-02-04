# Class BooleanBase<T\>
<a id="VM_Managed_DAFUL_Builder_BooleanBase_1"></a>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public abstract class BooleanBase<T> : IBuilder where T : Builder, new()
```

#### Type Parameters

`T` 

#### Inheritance

object ← 
[BooleanBase<T\>](VM.Managed.DAFUL.Builder.BooleanBase\-1.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1__ctor"></a> BooleanBase\(\)

```csharp
protected BooleanBase()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_m_bSuccess"></a> m\_bSuccess

```csharp
protected bool m_bSuccess
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_m_bSym"></a> m\_bSym

```csharp
protected bool m_bSym
```

#### Field Value

 bool

## Properties

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_Argument"></a> Argument

```csharp
protected virtual string Argument { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_AvailableOperation"></a> AvailableOperation

```csharp
public bool AvailableOperation { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_BuildObject"></a> BuildObject

```csharp
public ObjectBase BuildObject { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_ExtraArgument"></a> ExtraArgument

```csharp
protected virtual string ExtraArgument { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_Parameters"></a> Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 [PickedResult](VM.Managed.DAFUL.Builder.PickedResult.md)\[\]

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_TargetConnectable"></a> TargetConnectable

```csharp
public virtual Body TargetConnectable { get; }
```

#### Property Value

 Body

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_ToolConnectable"></a> ToolConnectable

```csharp
public virtual Body ToolConnectable { get; }
```

#### Property Value

 Body

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_Type"></a> Type

```csharp
protected abstract string Type { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_Build_VM_Managed_Document_"></a> Build\(Document\)

```csharp
public virtual void Build(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_Build_VM_Managed_Document_System_Collections_Generic_List_System_String__"></a> Build\(Document, List<string\>\)

```csharp
public void Build(Document docToAdd, List<string> lstSetPointKeys)
```

#### Parameters

`docToAdd` Document

`lstSetPointKeys` List<string\>

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_BuildCoreCore_VM_Managed_Document_"></a> BuildCoreCore\(Document\)

```csharp
protected void BuildCoreCore(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_BuildTargetTool_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_"></a> BuildTargetTool\(Builder, Builder\)

```csharp
protected virtual void BuildTargetTool(Builder buiTarget, Builder buiTool)
```

#### Parameters

`buiTarget` Builder

`buiTool` Builder

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_CheckSymmetric_VM_Managed_Document_System_Collections_Generic_List_VM_Managed_CAD_Body__"></a> CheckSymmetric\(Document, List<Body\>\)

```csharp
protected int CheckSymmetric(Document doc, List<Body> lstBody)
```

#### Parameters

`doc` Document

`lstBody` List<Body\>

#### Returns

 int

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_DeleteToolAllBody"></a> DeleteToolAllBody\(\)

```csharp
protected void DeleteToolAllBody()
```

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_DeleteToolBody"></a> DeleteToolBody\(\)

```csharp
protected virtual void DeleteToolBody()
```

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_DeserializeBuilder_VM_Managed_CAD_Builder_"></a> DeserializeBuilder\(Builder\)

```csharp
protected Builder DeserializeBuilder(Builder builder)
```

#### Parameters

`builder` Builder

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_GetSymmetricBody_VM_Managed_CAD_Body_"></a> GetSymmetricBody\(Body\)

```csharp
protected Body GetSymmetricBody(Body bodyTarget)
```

#### Parameters

`bodyTarget` Body

#### Returns

 Body

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_GetSymmetricBuilder_VM_Managed_CAD_Builder_"></a> GetSymmetricBuilder\(Builder\)

```csharp
protected Builder GetSymmetricBuilder(Builder buiTarget)
```

#### Parameters

`buiTarget` Builder

#### Returns

 Builder

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_NullSymmetricBuilder_VM_Managed_CAD_Builder_"></a> NullSymmetricBuilder\(Builder\)

```csharp
protected void NullSymmetricBuilder(Builder buiTarget)
```

#### Parameters

`buiTarget` Builder

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_RemoveBody_VM_Managed_CAD_Body_"></a> RemoveBody\(Body\)

```csharp
protected void RemoveBody(Body body)
```

#### Parameters

`body` Body

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_SetSymmetricBuilder_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_"></a> SetSymmetricBuilder\(Builder, Builder\)

```csharp
protected void SetSymmetricBuilder(Builder buiTarget, Builder buiValue)
```

#### Parameters

`buiTarget` Builder

`buiValue` Builder

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_Success"></a> Success\(\)

```csharp
public bool Success()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_BooleanBase_1_Validate_System_Collections_Generic_IList_System_String__"></a> Validate\(IList<string\>\)

```csharp
public virtual bool Validate(IList<string> lstErrorMessage)
```

#### Parameters

`lstErrorMessage` IList<string\>

#### Returns

 bool

