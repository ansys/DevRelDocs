# Class CreateDesignParameter
<a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter"></a>

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for the design parameters creation.

```csharp
public class CreateDesignParameter
```

#### Inheritance

object ← 
[CreateDesignParameter](VM.Managed.DAFUL.Operation.Util.CreateDesignParameter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter__ctor"></a> CreateDesignParameter\(\)

```csharp
public CreateDesignParameter()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDF_VM_Managed_Document3D_VM_Managed_TransformBase_System_Boolean_System_String_"></a> CreateDF\(Document3D, TransformBase, bool, string\)

Create the design frame.

```csharp
public static DesignFrame CreateDF(Document3D activeDocument, TransformBase transfValue, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`transfValue` TransformBase

The design frame transformation.

`bInterface` bool

The flag of interface.

`strName` string

The design frame name.

#### Returns

 [DesignFrame](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignFrame.cs)

The new design frame.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDF_VM_Managed_Document3D_VM_Managed_TransformBase_System_Boolean_System_String_System_String_"></a> CreateDF\(Document3D, TransformBase, bool, string, string\)

Create the design frame.

```csharp
public static DesignFrame CreateDF(Document3D activeDocument, TransformBase transfValue, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`transfValue` TransformBase

The design frame transformation.

`bInterface` bool

The flag of interface.

`strName` string

The design frame name.

`strMatchName` string

Name of the matched object.

#### Returns

 [DesignFrame](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignFrame.cs)

The new design frame.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDP_VM_Managed_Document_VM_Managed_PointBase_System_Boolean_System_String_"></a> CreateDP\(Document, PointBase, bool, string\)

Create the design point.

```csharp
public static DesignPoint CreateDP(Document document, PointBase ptValue, bool bInterface, string strName)
```

#### Parameters

`document` Document

The active document.

`ptValue` PointBase

The design point position.

`bInterface` bool

The flag of interface.

`strName` string

The design point name.

#### Returns

 [DesignPoint](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignPoint.cs)

The new design point.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDP_VM_Managed_Document3D_VM_Managed_VectorBase_System_Boolean_System_String_"></a> CreateDP\(Document3D, VectorBase, bool, string\)

Create the design point.

```csharp
public static DesignPoint CreateDP(Document3D activeDocument, VectorBase vecValue, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`vecValue` VectorBase

The design point position.

`bInterface` bool

The flag of interface.

`strName` string

The design point name.

#### Returns

 [DesignPoint](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignPoint.cs)

The new design point.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDP_VM_Managed_Document3D_VM_Managed_PointBase_System_Boolean_System_String_System_String_"></a> CreateDP\(Document3D, PointBase, bool, string, string\)

Creates the DP.

```csharp
public static DesignPoint CreateDP(Document3D activeDocument, PointBase ptValue, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`ptValue` PointBase

The design point position.

`bInterface` bool

The flag of interface

`strName` string

The design point name

`strMatchName` string

Name of the matched object.

#### Returns

 [DesignPoint](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignPoint.cs)

The new design point

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDP_VM_Managed_Document3D_VM_Managed_VectorBase_System_Boolean_System_String_System_String_"></a> CreateDP\(Document3D, VectorBase, bool, string, string\)

Creates the DP.

```csharp
public static DesignPoint CreateDP(Document3D activeDocument, VectorBase vecValue, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`vecValue` VectorBase

The design point position.

`bInterface` bool

The flag of interface

`strName` string

The design point name

`strMatchName` string

Name of the matched object.

#### Returns

 [DesignPoint](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignPoint.cs)

The new design point

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDV_VM_Managed_Document_System_Double_System_Boolean_System_String_"></a> CreateDV\(Document, double, bool, string\)

Create the design variable.

```csharp
public static DesignVariable CreateDV(Document document, double dValue, bool bInterface, string strName)
```

#### Parameters

`document` Document

The active document.

`dValue` double

The design variable value.

`bInterface` bool

The flag of interface.

`strName` string

The design variable name.

#### Returns

 [DesignVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignVariable.cs)

The new design variable.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDV_VM_Managed_Document3D_System_String_System_Boolean_System_String_"></a> CreateDV\(Document3D, string, bool, string\)

Create the design variable.

```csharp
public static DesignVariable CreateDV(Document3D activeDocument, string alue, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`alue` string

The design variable value.

`bInterface` bool

The flag of interface.

`strName` string

The design variable name.

#### Returns

 [DesignVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignVariable.cs)

The new design variable.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateDesignParameter_CreateDV_VM_Managed_Document3D_System_Double_System_Boolean_System_String_System_String_"></a> CreateDV\(Document3D, double, bool, string, string\)

Creates the DV.

```csharp
public static DesignVariable CreateDV(Document3D activeDocument, double dValue, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`dValue` double

The design variable value.

`bInterface` bool

The flag of interface.

`strName` string

The design variable name.

`strMatchName` string

Name of the matched object.

#### Returns

 [DesignVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DesignVariable.cs)

The new design variable

