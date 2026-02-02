#  Class ObjectControlAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for object control.

```csharp
public static class ObjectControlAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObjectControlAPI](VM.API.Pre.ObjectControlAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_ObjectControlAPI_RotateObjectsDegree_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_Vector_VM_Vector_System_Double_"></a> RotateObjectsDegree\(IEnumerable<Obj\>, Vector, Vector, double\)

Rotate given <xref href="VM.API.Pre.Obj?text=objects" data-throw-if-not-resolved="false"></xref> by using rotation axis and angle(degree).

```csharp
[NotNull(new string[] { "objs" })]
[NotZeroMagnitude(new string[] { "direction" })]
public static void RotateObjectsDegree(IEnumerable<Obj> objs, Vector position, Vector direction, double rotateAngleDegree)
```

#### Parameters

`objs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The collection of <xref href="VM.API.Pre.Obj?text=objects" data-throw-if-not-resolved="false"></xref> to rotate.

`position` Vector

The position of the axis.

`direction` Vector

The direction vetor of the rotation axis.

`rotateAngleDegree` [double](https://learn.microsoft.com/dotnet/api/system.double)

The rotation angle.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown when the collection of objects is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'direction' is 0.

### <a id="VM_API_Pre_ObjectControlAPI_TransformObjects_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_TMatrix_"></a> TransformObjects\(IEnumerable<Obj\>, TMatrix\)

Transform given <xref href="VM.API.Pre.Obj?text=objects" data-throw-if-not-resolved="false"></xref> by using <xref href="VM.TMatrix?text=transformation+matrix" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "objs" })]
public static void TransformObjects(IEnumerable<Obj> objs, TMatrix transform)
```

#### Parameters

`objs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The collection of <xref href="VM.API.Pre.Obj?text=objects" data-throw-if-not-resolved="false"></xref> to transform.

`transform` TMatrix

The <xref href="VM.TMatrix?text=transformation+matrix" data-throw-if-not-resolved="false"></xref>

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown when the collection of objects is null.

