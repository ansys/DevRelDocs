# Class CompareAssertion

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Contains a Comparer and an assertion about whether the Datasets it tests
are expected to be equal.

```csharp
public class CompareAssertion
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### CompareAssertion\(Comparer, bool\)

```csharp
public CompareAssertion(Comparer comparer, bool assertDatasetsSame = true)
```

#### Parameters

`comparer` [Comparer](OpenTD.Results.Dataset.Comparer.md)

`assertDatasetsSame` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CompareAssertion\(IDataset, IDataset, bool\)

```csharp
public CompareAssertion(IDataset A, IDataset B, bool assertDatasetsSame = true)
```

#### Parameters

`A` [IDataset](OpenTD.Results.Dataset.IDataset.md)

`B` [IDataset](OpenTD.Results.Dataset.IDataset.md)

`assertDatasetsSame` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### AssertDatasetsSame

```csharp
public bool AssertDatasetsSame { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Comparer

```csharp
public Comparer Comparer { get; set; }
```

#### Property Value

 [Comparer](OpenTD.Results.Dataset.Comparer.md)

### Message

```csharp
public string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Success

```csharp
public bool Success { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### ResetResult\(\)

```csharp
public void ResetResult()
```

### TestAssertion\(\)

```csharp
public bool TestAssertion()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


