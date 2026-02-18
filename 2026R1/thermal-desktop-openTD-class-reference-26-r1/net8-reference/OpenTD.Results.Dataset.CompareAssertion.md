# <a id="OpenTD_Results_Dataset_CompareAssertion"></a> Class CompareAssertion

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Contains a Comparer and an assertion about whether the Datasets it tests
are expected to be equal.

```csharp
public class CompareAssertion
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_CompareAssertion__ctor_OpenTD_Results_Dataset_Comparer_System_Boolean_"></a> CompareAssertion\(Comparer, bool\)

```csharp
public CompareAssertion(Comparer comparer, bool assertDatasetsSame = true)
```

#### Parameters

`comparer` [Comparer](OpenTD.Results.Dataset.Comparer.md)

`assertDatasetsSame` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_CompareAssertion__ctor_OpenTD_Results_Dataset_IDataset_OpenTD_Results_Dataset_IDataset_System_Boolean_"></a> CompareAssertion\(IDataset, IDataset, bool\)

```csharp
public CompareAssertion(IDataset A, IDataset B, bool assertDatasetsSame = true)
```

#### Parameters

`A` [IDataset](OpenTD.Results.Dataset.IDataset.md)

`B` [IDataset](OpenTD.Results.Dataset.IDataset.md)

`assertDatasetsSame` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="OpenTD_Results_Dataset_CompareAssertion_AssertDatasetsSame"></a> AssertDatasetsSame

```csharp
public bool AssertDatasetsSame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_CompareAssertion_Comparer"></a> Comparer

```csharp
public Comparer Comparer { get; set; }
```

#### Property Value

 [Comparer](OpenTD.Results.Dataset.Comparer.md)

### <a id="OpenTD_Results_Dataset_CompareAssertion_Message"></a> Message

```csharp
public string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_Results_Dataset_CompareAssertion_Success"></a> Success

```csharp
public bool Success { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OpenTD_Results_Dataset_CompareAssertion_ResetResult"></a> ResetResult\(\)

```csharp
public void ResetResult()
```

### <a id="OpenTD_Results_Dataset_CompareAssertion_TestAssertion"></a> TestAssertion\(\)

```csharp
public bool TestAssertion()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

