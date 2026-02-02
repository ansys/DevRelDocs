# Class SplineAPI
<a id="VM_API_Pre_SplineAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for spline class.

```csharp
public static class SplineAPI
```

#### Inheritance

object ← 
[SplineAPI](VM.API.Pre.SplineAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_SplineAPI_CreateSpline_VM_Models_Pre_IDocument_System_String_System_Collections_Generic_IEnumerable_VM_Managed_DAFUL_SplineData_Point__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_SymmetricType_"></a> CreateSpline\(IDocument, string, IEnumerable<Point\>, ExpressionValueVariable?, ExpressionValueVariable?, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Spline" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSpline(this IDocument document, string name, IEnumerable<SplineData.Point> splineData, ExpressionValueVariable? scaleX = null, ExpressionValueVariable? scaleY = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the spline.

`name` string

The point X, Y of the spline.

`splineData` IEnumerable<[SplineData](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs).[Point](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\>

The density of the spline.

`scaleX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The X scale of spline.

`scaleY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Y scale of spline.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Spline" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Spline" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'splineData' is null.

### <a id="VM_API_Pre_SplineAPI_CreateSpline3D_VM_Models_Pre_IDocument_System_String_VM_Models_Pre_ExpressionValueVariable_0__0___System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_SymmetricType_"></a> CreateSpline3D\(IDocument, string, ExpressionValueVariable\[,\], ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Spline3D" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "points" })]
public static Obj CreateSpline3D(this IDocument document, string name, ExpressionValueVariable[,] points, ExpressionValueVariable? scaleX = null, ExpressionValueVariable? scaleY = null, ExpressionValueVariable? scaleZ = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the spline3D.

`name` string

The point X, Y of the spline3D.

`points` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)\[,\]

The points of the spline3D.

`scaleX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The X scale of spline3D.

`scaleY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Y scale of spline3D.

`scaleZ` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Z scale of spline3D.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Spline3D" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Spline3D" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'points' is null.

 ArgumentOutOfRangeException

Will be thrown if the count of the 'points' is less than 4.

### <a id="VM_API_Pre_SplineAPI_CreateSplineWithFile_VM_Models_Pre_IDocument_System_String_System_String_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_SymmetricType_"></a> CreateSplineWithFile\(IDocument, string, string, string, ExpressionValueVariable?, ExpressionValueVariable?, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Spline" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "selectedSplineName" })]
[ExistFile(new string[] { "filePath" })]
public static Obj CreateSplineWithFile(this IDocument document, string name, string filePath, string selectedSplineName, ExpressionValueVariable? scaleX = null, ExpressionValueVariable? scaleY = null, SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the spline.

`name` string

The point X, Y of the spline.

`filePath` string

The file path of the spline data.

`selectedSplineName` string

The name of the selected spline.

`scaleX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The X scale of spline.

`scaleY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The Y scale of spline.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Spline" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Spline" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'selectedSplineName' is null.

