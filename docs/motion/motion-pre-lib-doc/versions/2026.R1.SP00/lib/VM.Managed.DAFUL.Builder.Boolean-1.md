# Class Boolean<T\>
<a id="VM_Managed_DAFUL_Builder_Boolean_1"></a>

Namespace: [VM.Managed.DAFUL.Builder](VM.Managed.DAFUL.Builder.md)  
Assembly: VMBld.dll  

```csharp
public abstract class Boolean<T> : BooleanBase<T>, IBuilder where T : Builder, new()
```

#### Type Parameters

`T` 

#### Inheritance

object ← 
[BooleanBase<T\>](VM.Managed.DAFUL.Builder.BooleanBase\-1.md) ← 
[Boolean<T\>](VM.Managed.DAFUL.Builder.Boolean\-1.md)

#### Implements

[IBuilder](VM.Managed.DAFUL.Builder.IBuilder.md)

#### Inherited Members

[BooleanBase<T\>.m\_bSuccess](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_m\_bSuccess), 
[BooleanBase<T\>.m\_bSym](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_m\_bSym), 
[BooleanBase<T\>.Validate\(IList<string\>\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Validate\_System\_Collections\_Generic\_IList\_System\_String\_\_), 
[BooleanBase<T\>.BuildCoreCore\(Document\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_BuildCoreCore\_VM\_Managed\_Document\_), 
[BooleanBase<T\>.Build\(Document\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Build\_VM\_Managed\_Document\_), 
[BooleanBase<T\>.Build\(Document, List<string\>\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Build\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[BooleanBase<T\>.Success\(\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Success), 
[BooleanBase<T\>.BuildTargetTool\(Builder, Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_BuildTargetTool\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<T\>.GetSymmetricBuilder\(Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_GetSymmetricBuilder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<T\>.GetSymmetricBody\(Body\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_GetSymmetricBody\_VM\_Managed\_CAD\_Body\_), 
[BooleanBase<T\>.SetSymmetricBuilder\(Builder, Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_SetSymmetricBuilder\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<T\>.NullSymmetricBuilder\(Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_NullSymmetricBuilder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<T\>.DeleteToolAllBody\(\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_DeleteToolAllBody), 
[BooleanBase<T\>.DeleteToolBody\(\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_DeleteToolBody), 
[BooleanBase<T\>.RemoveBody\(Body\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_RemoveBody\_VM\_Managed\_CAD\_Body\_), 
[BooleanBase<T\>.CheckSymmetric\(Document, List<Body\>\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_CheckSymmetric\_VM\_Managed\_Document\_System\_Collections\_Generic\_List\_VM\_Managed\_CAD\_Body\_\_), 
[BooleanBase<T\>.DeserializeBuilder\(Builder\)](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_DeserializeBuilder\_VM\_Managed\_CAD\_Builder\_), 
[BooleanBase<T\>.TargetConnectable](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_TargetConnectable), 
[BooleanBase<T\>.ToolConnectable](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_ToolConnectable), 
[BooleanBase<T\>.Type](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Type), 
[BooleanBase<T\>.Argument](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Argument), 
[BooleanBase<T\>.ExtraArgument](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_ExtraArgument), 
[BooleanBase<T\>.Parameters](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_Parameters), 
[BooleanBase<T\>.AvailableOperation](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_AvailableOperation), 
[BooleanBase<T\>.BuildObject](VM.Managed.DAFUL.Builder.BooleanBase\-1.md\#VM\_Managed\_DAFUL\_Builder\_BooleanBase\_1\_BuildObject)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Builder_Boolean_1__ctor"></a> Boolean\(\)

```csharp
protected Boolean()
```

## Fields

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_m_ToolConnectables"></a> m\_ToolConnectables

```csharp
protected Body[] m_ToolConnectables
```

#### Field Value

 Body\[\]

## Properties

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_Argument"></a> Argument

```csharp
protected override string Argument { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_ReserveToolBody"></a> ReserveToolBody

```csharp
public bool ReserveToolBody { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_ToolBodiesName"></a> ToolBodiesName

```csharp
public string[] ToolBodiesName { get; set; }
```

#### Property Value

 string\[\]

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_ToolConnectable"></a> ToolConnectable

```csharp
public override Body ToolConnectable { get; }
```

#### Property Value

 Body

## Methods

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_Build_VM_Managed_Document_"></a> Build\(Document\)

```csharp
public override void Build(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_BuildTargetTool_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder___"></a> BuildTargetTool\(Builder, Builder\[\]\)

```csharp
protected virtual void BuildTargetTool(Builder buiTarget, Builder[] buiTool)
```

#### Parameters

`buiTarget` Builder

`buiTool` Builder\[\]

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_BuildTargetTool_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_"></a> BuildTargetTool\(Builder, Builder\)

```csharp
protected override void BuildTargetTool(Builder buiTarget, Builder buiTool)
```

#### Parameters

`buiTarget` Builder

`buiTool` Builder

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_CheckValid_VM_Managed_Document_System_Collections_Generic_List_VM_Managed_CAD_Body__"></a> CheckValid\(Document, List<Body\>\)

```csharp
protected virtual bool CheckValid(Document doc, List<Body> lstBodies)
```

#### Parameters

`doc` Document

`lstBodies` List<Body\>

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Builder_Boolean_1_DeleteToolBody"></a> DeleteToolBody\(\)

```csharp
protected override void DeleteToolBody()
```

