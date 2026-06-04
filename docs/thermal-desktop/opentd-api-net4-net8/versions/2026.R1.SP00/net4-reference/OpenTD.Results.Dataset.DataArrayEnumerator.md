# Class DataArrayEnumerator

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Used internally when iterating over the values in a DataArray.

```csharp
public class DataArrayEnumerator : IEnumerator<double>, IDisposable, IEnumerator
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataArrayEnumerator](OpenTD.Results.Dataset.DataArrayEnumerator.md)

## Implements

[IEnumerator<double\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### DataArrayEnumerator\(DataArray\)

```csharp
public DataArrayEnumerator(DataArray _array)
```

#### Parameters

`_array` [DataArray](OpenTD.Results.Dataset.DataArray.md)

## Properties

### Current

Gets the element in the collection at the current position of the enumerator.

```csharp
public double Current { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MoveNext\(\)

Advances the enumerator to the next element of the collection.

```csharp
public bool MoveNext()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the enumerator was successfully advanced to the next element; [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the enumerator has passed the end of the collection.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The collection was modified after the enumerator was created.

### Reset\(\)

Sets the enumerator to its initial position, which is before the first element in the collection.

```csharp
public void Reset()
```

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The collection was modified after the enumerator was created.

## See Also

[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<T\>


