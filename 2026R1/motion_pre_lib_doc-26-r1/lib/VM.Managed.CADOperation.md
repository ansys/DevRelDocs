# Class CADOperation
<a id="VM_Managed_CADOperation"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the CAD Operation.

```csharp
public class CADOperation
```

#### Inheritance

object ← 
[CADOperation](VM.Managed.CADOperation.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CADOperation__ctor"></a> CADOperation\(\)

```csharp
public CADOperation()
```

## Methods

### <a id="VM_Managed_CADOperation_SetInterfaceNames_VM_Managed_IInterfaceSupport_System_Collections_Generic_Dictionary_VM_Managed_IInterface_System_Collections_Generic_List_System_String___"></a> SetInterfaceNames\(IInterfaceSupport, Dictionary<IInterface, List<string\>\>\)

Set interface names.

```csharp
public static void SetInterfaceNames(IInterfaceSupport support, Dictionary<IInterface, List<string>> dic)
```

#### Parameters

`support` [IInterfaceSupport](VM.Managed.IInterfaceSupport.md)

The document.

`dic` Dictionary<[IInterface](VM.Managed.IInterface.md), List<string\>\>

The objectbase and interface names.

### <a id="VM_Managed_CADOperation_SetMarkerTramsform_VM_Managed_DesignFrame_VM_Managed_TransformBase_"></a> SetMarkerTramsform\(DesignFrame, TransformBase\)

Set marker transform.

```csharp
public static void SetMarkerTramsform(DesignFrame df, TransformBase tra)
```

#### Parameters

`df` [DesignFrame](VM.Managed.DesignFrame.md)

The design frame.

`tra` TransformBase

The transform.

### <a id="VM_Managed_CADOperation_SetShearModulus_VM_Managed_Material_ISO_System_Boolean_System_String_"></a> SetShearModulus\(ISO, bool, string\)

Set shear modulus.

```csharp
public static void SetShearModulus(ISO iso, bool bUseShearModulusWithUserInput, string strShearModulus)
```

#### Parameters

`iso` [ISO](VM.Managed.Material.ISO.md)

The ISO Material.

`bUseShearModulusWithUserInput` bool

Use shear modulus with user input.

`strShearModulus` string

The sherar modulus.

