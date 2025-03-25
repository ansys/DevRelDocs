# <a id="VM_API_Pre_GearTrain_HousingAPI"></a> Class HousingAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for Housing class.

```csharp
public static class HousingAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[HousingAPI](VM.API.Pre.GearTrain.HousingAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_HousingAPI_CreateEFHousing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> CreateEFHousing\(GearTrainDocument, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.HousingMeshFree" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateEFHousing(this GearTrainDocument document, string housingName = "")
```

#### Parameters

`document` GearTrainDocument

The document to create the EF housing.

`housingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the EF housing. If empty, default name starts with 'Housing_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.HousingMeshFree" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_HousingAPI_CreateFEHousing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> CreateFEHousing\(GearTrainDocument, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.HousingFE" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateFEHousing(this GearTrainDocument document, string housingName = "")
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> to create the FE housing.

`housingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the FE housing. If empty, default name starts with 'Housing_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.HousingFE" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_HousingAPI_UpdateBodyInFE_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_VM_Managed_DAFUL_BodyAnalysisType_"></a> UpdateBodyInFE\(HiddenDocumentFEBase, BodyAnalysisType\)

Update nodal body in fe shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateBodyInFE(this HiddenDocumentFEBase document, BodyAnalysisType bodyAnalysisType)
```

#### Parameters

`document` HiddenDocumentFEBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentFEBase" data-throw-if-not-resolved="false"></xref> to exist nodal body.

`bodyAnalysisType` BodyAnalysisType

The body analysis type.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'nodalBody' arguments are empty.

### <a id="VM_API_Pre_GearTrain_HousingAPI_UpdateBodyInMeshFree_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_VM_Managed_DAFUL_BodyAnalysisType_VM_Managed_DAFUL_SolidBodyProperty_MassPropertyType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__"></a> UpdateBodyInMeshFree\(HiddenDocumentMeshFreeBase, BodyAnalysisType, MassPropertyType, ExpressionValueVariable?, IEnumerable<ExpressionValueVariable\>\)

Update assembled body in ef shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateBodyInMeshFree(this HiddenDocumentMeshFreeBase document, BodyAnalysisType bodyAnalysisType, SolidBodyProperty.MassPropertyType massPropertyType = MassPropertyType.PreDefined, ExpressionValueVariable? mass = null, IEnumerable<ExpressionValueVariable> momentOfInertia = null)
```

#### Parameters

`document` HiddenDocumentMeshFreeBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshFreeBase" data-throw-if-not-resolved="false"></xref> to exist assembled body.

`bodyAnalysisType` BodyAnalysisType

The body analysis type.

`massPropertyType` SolidBodyProperty.MassPropertyType

The mass property type. The default value is PreDefined.

`mass` ExpressionValueVariable?

The mass when 'massPropertyType' is User. The default value is 1.

`momentOfInertia` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The moment of inertia when 'massPropertyType' is User.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'assembledBody' arguments are empty.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'massPropertyType' is User and 'mass' or 'momentOfInertia' are empty.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if the length of 'momentOfInertia' is not 6.

### <a id="VM_API_Pre_GearTrain_HousingAPI_UpdateDesignerInMesh_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_"></a> UpdateDesignerInMesh\(HiddenDocumentMeshBase\)

Update designer in fe/ef shaftset/housing.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateDesignerInMesh(this HiddenDocumentMeshBase document)
```

#### Parameters

`document` HiddenDocumentMeshBase

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> to update designer.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

