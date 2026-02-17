# <a id="OpenTD_PostProcessing_AdditionalSindaInfo"></a> Class AdditionalSindaInfo

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Information specific to Sinda results type Datasets.
Implements the <xref href="OpenTD.PostProcessing.AdditionalDatasetInfo" data-throw-if-not-resolved="false"></xref>

```csharp
public class AdditionalSindaInfo : AdditionalDatasetInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md) ← 
[AdditionalSindaInfo](OpenTD.PostProcessing.AdditionalSindaInfo.md)

#### Inherited Members

[AdditionalDatasetInfo.Pathname](OpenTD.PostProcessing.AdditionalDatasetInfo.md\#OpenTD\_PostProcessing\_AdditionalDatasetInfo\_Pathname), 
[AdditionalDatasetInfo.\_pathname](OpenTD.PostProcessing.AdditionalDatasetInfo.md\#OpenTD\_PostProcessing\_AdditionalDatasetInfo\_\_pathname), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo__ctor"></a> AdditionalSindaInfo\(\)

```csharp
public AdditionalSindaInfo()
```

## Properties

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_AvailableFTieVariables"></a> AvailableFTieVariables

Read only.

```csharp
public List<string> AvailableFTieVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_AvailableIFaceVariables"></a> AvailableIFaceVariables

Read only.

```csharp
public List<string> AvailableIFaceVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_AvailableLumpVariables"></a> AvailableLumpVariables

Read only.

```csharp
public List<string> AvailableLumpVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_AvailableNodeVariables"></a> AvailableNodeVariables

Read only.

```csharp
public List<string> AvailableNodeVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_AvailablePathVariables"></a> AvailablePathVariables

Read only.

```csharp
public List<string> AvailablePathVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_AvailableTieVariables"></a> AvailableTieVariables

Read only.

```csharp
public List<string> AvailableTieVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_LinkLumpTempsToNodeTemps"></a> LinkLumpTempsToNodeTemps

```csharp
public bool LinkLumpTempsToNodeTemps { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_MultiTimeSelectOption"></a> MultiTimeSelectOption

```csharp
public AdditionalSindaInfo.MultiTimeSelectOptions MultiTimeSelectOption { get; set; }
```

#### Property Value

 [AdditionalSindaInfo](OpenTD.PostProcessing.AdditionalSindaInfo.md).[MultiTimeSelectOptions](OpenTD.PostProcessing.AdditionalSindaInfo.MultiTimeSelectOptions.md)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedFTieVariable"></a> SelectedFTieVariable

```csharp
public string SelectedFTieVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedFTieVariableIndex"></a> SelectedFTieVariableIndex

Identifies what variable in the AvailableFTieVariables list will display when post-processed.        /// .

```csharp
public int SelectedFTieVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedIFaceVariable"></a> SelectedIFaceVariable

```csharp
public string SelectedIFaceVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedIFaceVariableIndex"></a> SelectedIFaceVariableIndex

Identifies what variable in the AvailableIFaceVariables list will display when post-processed.        /// .

```csharp
public int SelectedIFaceVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedLumpVariable"></a> SelectedLumpVariable

```csharp
public string SelectedLumpVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedLumpVariableIndex"></a> SelectedLumpVariableIndex

Identifies what variable in the AvailableLumpVariables list will display when post-processed.        /// .

```csharp
public int SelectedLumpVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedNodeVariable"></a> SelectedNodeVariable

```csharp
public string SelectedNodeVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedNodeVariableIndex"></a> SelectedNodeVariableIndex

Identifies what variable in the AvailableNodeVariables list will display when post-processed.        /// .

```csharp
public int SelectedNodeVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedPathVariable"></a> SelectedPathVariable

```csharp
public string SelectedPathVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedPathVariableIndex"></a> SelectedPathVariableIndex

Identifies what variable in the AvailablePathVariables list will display when post-processed.        /// .

```csharp
public int SelectedPathVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedTieVariable"></a> SelectedTieVariable

```csharp
public string SelectedTieVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_SelectedTieVariableIndex"></a> SelectedTieVariableIndex

Identifies what variable in the AvailableTieVariables list will display when post-processed.        /// .

```csharp
public int SelectedTieVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_ShowCondConnTempDiff"></a> ShowCondConnTempDiff

```csharp
public bool ShowCondConnTempDiff { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_secondaryTemperatureUnits"></a> secondaryTemperatureUnits

Not used.

```csharp
public UnitsData secondaryTemperatureUnits { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### <a id="OpenTD_PostProcessing_AdditionalSindaInfo_showTemperatureSecondary"></a> showTemperatureSecondary

Not used.

```csharp
public bool showTemperatureSecondary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## See Also

[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md), 
[Dataset](OpenTD.PostProcessing.Dataset.md)

