#  Class CreateContact

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for the contacts creation.

```csharp
public class CreateContact
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateContact](VM.Managed.DAFUL.Operation.Util.CreateContact.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact__ctor"></a> CreateContact\(\)

```csharp
public CreateContact()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact_CreateGeneralContact_VM_Managed_Document3D_VM_Models_Pre_IObjectBase_VM_Models_Pre_IObjectBase_System_String_"></a> CreateGeneralContact\(Document3D, IObjectBase, IObjectBase, string\)

Create the rigid to rigid 3D contact.

```csharp
public static GeneralContact CreateGeneralContact(Document3D activeDocument, IObjectBase baseGeom, IObjectBase actionGeom, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseGeom` IObjectBase

The base geometry.

`actionGeom` IObjectBase

The action geometry.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rigid to rigid 3D contact prefix name.

#### Returns

 GeneralContact

The new rigid to rigid 3D contact.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact_CreateGeneralContact_VM_Managed_Document3D_VM_Models_Pre_IObjectBase_VM_Models_Pre_IObjectBase_System_String_System_Boolean_"></a> CreateGeneralContact\(Document3D, IObjectBase, IObjectBase, string, bool\)

Create the rigid to rigid 3D contact.

```csharp
public static GeneralContact CreateGeneralContact(Document3D activeDocument, IObjectBase baseGeom, IObjectBase actionGeom, string name, bool getNewEntityName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseGeom` IObjectBase

The base geometry.

`actionGeom` IObjectBase

The action geometry.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rigid to rigid 3D contact prefix name.

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 GeneralContact

The new rigid to rigid 3D contact.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact_CreateGeneralContact_VM_Managed_Document_System_String_VM_Managed_CAD_Body_VM_Managed_CAD_Body_System_Double_"></a> CreateGeneralContact\(Document, string, Body, Body, double\)

Create general contact.

```csharp
public static GeneralContact CreateGeneralContact(Document doc, string strName, Body bodyFirst, Body bodySecond, double dTolerance)
```

#### Parameters

`doc` Document

The document

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

`bodyFirst` Body

The first body

`bodySecond` Body

The second body

`dTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The tolerance

#### Returns

 GeneralContact

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact_CreateMbyNContactContact_VM_Managed_Document3D_VM_Managed_DAFUL_Contact_MultipleContactInfo___VM_Managed_DAFUL_Contact_MultipleContactInfo___System_String_System_Boolean_"></a> CreateMbyNContactContact\(Document3D, MultipleContactInfo\[\], MultipleContactInfo\[\], string, bool\)

Create the rigid to rigid 3D contact.

```csharp
public static MbyNContact CreateMbyNContactContact(Document3D activeDocument, MultipleContactInfo[] baseGeoms, MultipleContactInfo[] actionGeoms, string name, bool getNewEntityName = false)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseGeoms` MultipleContactInfo\[\]

The base geometry.

`actionGeoms` MultipleContactInfo\[\]

The action geometry.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rigid to rigid 3D contact prefix name.

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 MbyNContact

The new rigid to rigid 3D contact.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact_CreateMbyNGeneralContact_VM_Managed_Document3D_VM_Managed_DAFUL_Contact_MultipleContactInfo___VM_Managed_DAFUL_Contact_MultipleContactInfo___System_String_"></a> CreateMbyNGeneralContact\(Document3D, MultipleContactInfo\[\], MultipleContactInfo\[\], string\)

Create the rigid to rigid 3D contact.

```csharp
public static MbyNContact CreateMbyNGeneralContact(Document3D activeDocument, MultipleContactInfo[] baseGeoms, MultipleContactInfo[] actionGeoms, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseGeoms` MultipleContactInfo\[\]

The base geometry.

`actionGeoms` MultipleContactInfo\[\]

The action geometry.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rigid to rigid 3D contact prefix name.

#### Returns

 MbyNContact

The new rigid to rigid 3D contact.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact_CreateRTR3D_VM_Managed_Document3D_VM_Managed_DAFUL_IContactableRigid3D_VM_Managed_DAFUL_IContactableRigid3D_System_String_"></a> CreateRTR3D\(Document3D, IContactableRigid3D, IContactableRigid3D, string\)

Create the rigid to rigid 3D contact.

```csharp
public static RTR3D CreateRTR3D(Document3D activeDocument, IContactableRigid3D baseGeom, IContactableRigid3D actionGeom, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseGeom` IContactableRigid3D

The base geometry.

`actionGeom` IContactableRigid3D

The action geometry.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rigid to rigid 3D contact prefix name.

#### Returns

 RTR3D

The new rigid to rigid 3D contact.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact_GetMultipleInfoList_System_Collections_Generic_List_VM_Managed_DAFUL_IContactable__System_Boolean_"></a> GetMultipleInfoList\(List<IContactable\>, bool\)

```csharp
public static MultipleContactInfo[] GetMultipleInfoList(List<IContactable> lst, bool isFront)
```

#### Parameters

`lst` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IContactable\>

`isFront` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 MultipleContactInfo\[\]

### <a id="VM_Managed_DAFUL_Operation_Util_CreateContact_TryGetGeometry_VM_Models_Pre_IObjectBase_VM_Managed_DAFUL_IContactable__VM_Managed_Document_"></a> TryGetGeometry\(IObjectBase, out IContactable, Document\)

```csharp
public static bool TryGetGeometry(IObjectBase objectBase, out IContactable geometry, Document doc)
```

#### Parameters

`objectBase` IObjectBase

`geometry` IContactable

`doc` Document

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

