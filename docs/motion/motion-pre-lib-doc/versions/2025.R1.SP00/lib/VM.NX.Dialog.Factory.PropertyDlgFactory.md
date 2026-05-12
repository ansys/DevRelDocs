#  Class PropertyDlgFactory

Namespace: [VM.NX.Dialog.Factory](VM.NX.Dialog.Factory.md)  
Assembly: VMDM.dll  

```csharp
public class PropertyDlgFactory : DlgFactoryBase, IDlgFactory
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DlgFactoryBase](VM.NX.Dialog.Factory.DlgFactoryBase.md) ← 
[PropertyDlgFactory](VM.NX.Dialog.Factory.PropertyDlgFactory.md)

#### Implements

IDlgFactory

#### Inherited Members

[DlgFactoryBase.g\_dicPropertyMap](VM.NX.Dialog.Factory.DlgFactoryBase.md\#VM\_NX\_Dialog\_Factory\_DlgFactoryBase\_g\_dicPropertyMap), 
[DlgFactoryBase.GetAssemblyNameFromCommand\(string\)](VM.NX.Dialog.Factory.DlgFactoryBase.md\#VM\_NX\_Dialog\_Factory\_DlgFactoryBase\_GetAssemblyNameFromCommand\_System\_String\_), 
[DlgFactoryBase.GetTypeInfo\(string, DlgFactoryBase.AssemblyInfo\)](VM.NX.Dialog.Factory.DlgFactoryBase.md\#VM\_NX\_Dialog\_Factory\_DlgFactoryBase\_GetTypeInfo\_System\_String\_VM\_NX\_Dialog\_Factory\_DlgFactoryBase\_AssemblyInfo\_), 
[DlgFactoryBase.GetTypeInfo\(string\)](VM.NX.Dialog.Factory.DlgFactoryBase.md\#VM\_NX\_Dialog\_Factory\_DlgFactoryBase\_GetTypeInfo\_System\_String\_), 
[DlgFactoryBase.IsUseDialog\(string\)](VM.NX.Dialog.Factory.DlgFactoryBase.md\#VM\_NX\_Dialog\_Factory\_DlgFactoryBase\_IsUseDialog\_System\_String\_)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_NX_Dialog_Factory_PropertyDlgFactory__ctor_System_String_System_String_"></a> PropertyDlgFactory\(string, string\)

```csharp
public PropertyDlgFactory(string strDlgFileDirectory, string strDlgDirectory)
```

#### Parameters

`strDlgFileDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strDlgDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_NX_Dialog_Factory_PropertyDlgFactory_GetObject_System_String_System_Windows_Forms_Form_"></a> GetObject\(string, Form\)

```csharp
public Form GetObject(string strType, Form formOwner)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`formOwner` [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)

#### Returns

 [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)

### <a id="VM_NX_Dialog_Factory_PropertyDlgFactory_GetObjectWithMultiDialog_VM_NX_Dialog_Factory_MultiDialogInfo___System_Windows_Forms_Form_"></a> GetObjectWithMultiDialog\(MultiDialogInfo\[\], Form\)

```csharp
public Form GetObjectWithMultiDialog(MultiDialogInfo[] arInfo, Form formOwner)
```

#### Parameters

`arInfo` MultiDialogInfo\[\]

`formOwner` [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)

#### Returns

 [Form](https://learn.microsoft.com/dotnet/api/system.windows.forms.form)

