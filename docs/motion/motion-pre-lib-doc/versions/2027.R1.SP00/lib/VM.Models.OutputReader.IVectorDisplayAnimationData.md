# Interface IVectorDisplayAnimationData
<a id="VM_Models_OutputReader_IVectorDisplayAnimationData"></a>

Namespace: [VM.Models.OutputReader](VM.Models.OutputReader.md)  
Assembly: VM.Models.OutputReader.dll  

Provides position, vector, scalar, and label data for each frame of a vector display result.

```csharp
public interface IVectorDisplayAnimationData
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_OutputReader_IVectorDisplayAnimationData_LabelNames"></a> LabelNames

Gets or sets the label names displayed with the vector display data for each frame.

```csharp
List<List<string>> LabelNames { get; set; }
```

#### Property Value

 List<List<string\>\>

### <a id="VM_Models_OutputReader_IVectorDisplayAnimationData_Positions"></a> Positions

Gets or sets the position or start point of each display item for each frame.

```csharp
List<List<double[]>> Positions { get; set; }
```

#### Property Value

 List<List<double\[\]\>\>

#### Remarks

The outer list index is the frame count, the inner list index is the vector count, and each array holds the x, y, and z components.

vector type:position, position type:point, line type:start point

### <a id="VM_Models_OutputReader_IVectorDisplayAnimationData_Vectors"></a> Vectors

Gets or sets the vector, scalar value, or end point paired with each position for each frame.

```csharp
List<List<double[]>> Vectors { get; set; }
```

#### Property Value

 List<List<double\[\]\>\>

#### Remarks

The outer list index is the frame count, the inner list index is the vector count, and each array holds the x, y, and z components or a scalar value.

vector type:vector, position type:none or scala, line type:end point

