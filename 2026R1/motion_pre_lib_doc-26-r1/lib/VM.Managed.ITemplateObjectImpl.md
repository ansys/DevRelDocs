# Class ITemplateObjectImpl
<a id="VM_Managed_ITemplateObjectImpl"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the read and writes variable for template.

```csharp
public class ITemplateObjectImpl
```

#### Inheritance

object ← 
[ITemplateObjectImpl](VM.Managed.ITemplateObjectImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_ITemplateObjectImpl__ctor"></a> ITemplateObjectImpl\(\)

```csharp
public ITemplateObjectImpl()
```

## Methods

### <a id="VM_Managed_ITemplateObjectImpl_ReadVariable_System_String_VM_Managed_Variable_System_Xml_XmlReader_System_Boolean_"></a> ReadVariable\(string, Variable, XmlReader, bool\)

Reads the variable.

```csharp
public static Tuple<bool, double> ReadVariable(string strName, Variable var, XmlReader reader, bool bParameterized)
```

#### Parameters

`strName` string

Name of the variable.

`var` [Variable](VM.Managed.Variable.md)

The variable.

`reader` XmlReader

The reader.

`bParameterized` bool

if set to <code>true</code> parameterized.

#### Returns

 Tuple<bool, double\>

<code>true</code> if the specified value is change; otherwise, <code>false</code>.

### <a id="VM_Managed_ITemplateObjectImpl_WriteVariable_System_String_VM_Managed_Variable_System_Xml_XmlWriter_System_Boolean_"></a> WriteVariable\(string, Variable, XmlWriter, bool\)

Writes the variable.

```csharp
public static void WriteVariable(string strName, Variable var, XmlWriter writer, bool bParameterized)
```

#### Parameters

`strName` string

Name of the variable.

`var` [Variable](VM.Managed.Variable.md)

The variable.

`writer` XmlWriter

The writer.

`bParameterized` bool

if set to <code>true</code> parameterized.

