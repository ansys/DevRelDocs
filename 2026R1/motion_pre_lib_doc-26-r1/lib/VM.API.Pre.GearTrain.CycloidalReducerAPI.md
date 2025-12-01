# Class CycloidalReducerAPI
<a id="VM_API_Pre_GearTrain_CycloidalReducerAPI"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.GearTrain.RVReducer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class CycloidalReducerAPI
```

#### Inheritance

object ← 
[CycloidalReducerAPI](VM.API.Pre.GearTrain.CycloidalReducerAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_CycloidalReducerAPI_CreateCycloidalReducer_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Vector_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateCycloidalReducer\(GearTrainDocument, Vector, Vector, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.RVReducer" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "housing", "outputSharft" })]
[MatchTypeObj(new object[] { "outputSharft", typeof(IShaftSet) })]
public static Obj CreateCycloidalReducer(this GearTrainDocument document, Vector referencePosition, Vector rotateAxis, Obj housing, Obj outputSharft, string name = "")
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> to create the RV reducer.

`referencePosition` Vector

The reference position of the RV reducer.

`rotateAxis` Vector

The position of the RV reducer.

`housing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The base entity of the RV reducer.

`outputSharft` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The output sharft of the RV reducer.

`name` string

The name of the RV reducer. If empty, default name starts with 'Cycloidal_Reducer' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.RVReducer" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'housing', 'outputSharft' argument is empty.

 ArgumentException

Will be thrown if the type of 'housing' is not <xref href="VM.Managed.DAFUL.GearTrain.HousingMeshFree" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.GearTrain.HousingFE" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if the type of 'outputSharft' is not <xref href="VM.Managed.DAFUL.GearTrain.IShaftSet" data-throw-if-not-resolved="false"></xref>.

