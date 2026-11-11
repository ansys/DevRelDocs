# Class AdditionalSindaInfo

Namespace: [OpenTD.PostProcessing](OpenTD.PostProcessing.md)  
Assembly: OpenTD.dll  

Information specific to Sinda results type Datasets.
Implements the <xref href="OpenTD.PostProcessing.AdditionalDatasetInfo" data-throw-if-not-resolved="false"></xref>

```csharp
[MessagePackObject(true)]
public class AdditionalSindaInfo : AdditionalDatasetInfo
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md) ← 
[AdditionalSindaInfo](OpenTD.PostProcessing.AdditionalSindaInfo.md)

## Inherited Members

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

### AdditionalSindaInfo\(\)

```csharp
public AdditionalSindaInfo()
```

## Properties

### AvailableFTieVariables

Read only.

```csharp
public List<string> AvailableFTieVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AvailableIFaceVariables

Read only.

```csharp
public List<string> AvailableIFaceVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AvailableLumpVariables

Read only.

```csharp
public List<string> AvailableLumpVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AvailableNodeVariables

Read only.

```csharp
public List<string> AvailableNodeVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AvailablePathVariables

Read only.

```csharp
public List<string> AvailablePathVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AvailableTieVariables

Read only.

```csharp
public List<string> AvailableTieVariables { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### LinkLumpTempsToNodeTemps

```csharp
public bool LinkLumpTempsToNodeTemps { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MultiTimeSelectOption

```csharp
public AdditionalSindaInfo.MultiTimeSelectOptions MultiTimeSelectOption { get; set; }
```

#### Property Value

 [AdditionalSindaInfo](OpenTD.PostProcessing.AdditionalSindaInfo.md).[MultiTimeSelectOptions](OpenTD.PostProcessing.AdditionalSindaInfo.MultiTimeSelectOptions.md)

### SelectedFTieVariable

```csharp
[IgnoreMember]
public string SelectedFTieVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SelectedFTieVariableIndex

Identifies what variable in the AvailableFTieVariables list will display when post-processed.        /// .

```csharp
public int SelectedFTieVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SelectedIFaceVariable

```csharp
[IgnoreMember]
public string SelectedIFaceVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SelectedIFaceVariableIndex

Identifies what variable in the AvailableIFaceVariables list will display when post-processed.        /// .

```csharp
public int SelectedIFaceVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SelectedLumpVariable

```csharp
[IgnoreMember]
public string SelectedLumpVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SelectedLumpVariableIndex

Identifies what variable in the AvailableLumpVariables list will display when post-processed.        /// .

```csharp
public int SelectedLumpVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SelectedNodeVariable

```csharp
[IgnoreMember]
public string SelectedNodeVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SelectedNodeVariableIndex

Identifies what variable in the AvailableNodeVariables list will display when post-processed.        /// .

```csharp
public int SelectedNodeVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SelectedPathVariable

```csharp
[IgnoreMember]
public string SelectedPathVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SelectedPathVariableIndex

Identifies what variable in the AvailablePathVariables list will display when post-processed.        /// .

```csharp
public int SelectedPathVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SelectedTieVariable

```csharp
[IgnoreMember]
public string SelectedTieVariable { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SelectedTieVariableIndex

Identifies what variable in the AvailableTieVariables list will display when post-processed.        /// .

```csharp
public int SelectedTieVariableIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ShowCondConnTempDiff

```csharp
public bool ShowCondConnTempDiff { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### secondaryTemperatureUnits

Not used.

```csharp
public UnitsData secondaryTemperatureUnits { get; set; }
```

#### Property Value

 [UnitsData](OpenTD.UnitsData.md)

### showTemperatureSecondary

Not used.

```csharp
public bool showTemperatureSecondary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## See Also

[AdditionalDatasetInfo](OpenTD.PostProcessing.AdditionalDatasetInfo.md), 
[Dataset](OpenTD.PostProcessing.Dataset.md)


