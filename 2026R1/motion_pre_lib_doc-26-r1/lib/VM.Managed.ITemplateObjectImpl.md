#  Class ITemplateObjectImpl

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the read and writes variable for template.

```csharp
public class ITemplateObjectImpl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
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

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the variable.

`var` [Variable](VM.Managed.Variable.md)

The variable.

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

`bParameterized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> parameterized.

#### Returns

 [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean), [double](https://learn.microsoft.com/dotnet/api/system.double)\>

<code>true</code> if the specified value is change; otherwise, <code>false</code>.

### <a id="VM_Managed_ITemplateObjectImpl_WriteVariable_System_String_VM_Managed_Variable_System_Xml_XmlWriter_System_Boolean_"></a> WriteVariable\(string, Variable, XmlWriter, bool\)

Writes the variable.

```csharp
public static void WriteVariable(string strName, Variable var, XmlWriter writer, bool bParameterized)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the variable.

`var` [Variable](VM.Managed.Variable.md)

The variable.

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

`bParameterized` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> parameterized.

