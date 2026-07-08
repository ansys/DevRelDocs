# Class Application
<a id="VM_CAD_Kernel_Application"></a>

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

This class represents the application object of the native kernel

```csharp
public sealed class Application : KernelObject
```

#### Inheritance

object ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[Application](VM.CAD.Kernel.Application.md)

#### Inherited Members

[KernelObject.Dispose\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Dispose), 
[KernelObject.Key](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Key)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Kernel_Application__ctor_System_UIntPtr_System_Boolean_"></a> Application\(UIntPtr, bool\)

Construct new Application object

```csharp
public Application(UIntPtr key, bool isLock = true)
```

#### Parameters

`key` UIntPtr

The key of the application object.

`isLock` bool

If true, lock reference of the application object. otherwise, false.

## Methods

### <a id="VM_CAD_Kernel_Application_OpenDocument_VM_CAD_Kernel_OpenDocumentInfo_"></a> OpenDocument\(OpenDocumentInfo\)

Open existing document

```csharp
public (Document doc, uint returnCode) OpenDocument(OpenDocumentInfo openDocumentInfo)
```

#### Parameters

`openDocumentInfo` [OpenDocumentInfo](VM.CAD.Kernel.OpenDocumentInfo.md)

Information of the documet to open.

#### Returns

 \([Document](VM.CAD.Kernel.Document.md) doc, uint returnCode\)

The opened document.

#### See Also

[OpenDocumentInfo](VM.CAD.Kernel.OpenDocumentInfo.md)

### <a id="VM_CAD_Kernel_Application_SetLogLevel_System_Int32_System_Int32_"></a> SetLogLevel\(int, int\)

Set loge level for kernel messages

```csharp
public void SetLogLevel(int nKernelLogLevel, int nTranslatorLogLevel)
```

#### Parameters

`nKernelLogLevel` int

Kernel message log level

`nTranslatorLogLevel` int

Translator message log level

#### Exceptions

 NotImplementedException

Failed to set log level.

