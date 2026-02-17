# <a id="OpenTD_Results_Dataset_DataArrayEnumerator"></a> Class DataArrayEnumerator

Namespace: [OpenTD.Results.Dataset](OpenTD.Results.Dataset.md)  
Assembly: OpenTD.Results.dll  

Used internally when iterating over the values in a DataArray.

```csharp
public class DataArrayEnumerator : IEnumerator<double>, IEnumerator, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataArrayEnumerator](OpenTD.Results.Dataset.DataArrayEnumerator.md)

#### Implements

[IEnumerator<double\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1), 
[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_Results_Dataset_DataArrayEnumerator__ctor_OpenTD_Results_Dataset_DataArray_"></a> DataArrayEnumerator\(DataArray\)

```csharp
public DataArrayEnumerator(DataArray _array)
```

#### Parameters

`_array` [DataArray](OpenTD.Results.Dataset.DataArray.md)

## Properties

### <a id="OpenTD_Results_Dataset_DataArrayEnumerator_Current"></a> Current

Gets the element in the collection at the current position of the enumerator.

```csharp
public double Current { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="OpenTD_Results_Dataset_DataArrayEnumerator_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="OpenTD_Results_Dataset_DataArrayEnumerator_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Results_Dataset_DataArrayEnumerator_MoveNext"></a> MoveNext\(\)

Advances the enumerator to the next element of the collection.

```csharp
public bool MoveNext()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the enumerator was successfully advanced to the next element; <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> if the enumerator has passed the end of the collection.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The collection was modified after the enumerator was created.

### <a id="OpenTD_Results_Dataset_DataArrayEnumerator_Reset"></a> Reset\(\)

Sets the enumerator to its initial position, which is before the first element in the collection.

```csharp
public void Reset()
```

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The collection was modified after the enumerator was created.

 [NotSupportedException](https://learn.microsoft.com/dotnet/api/system.notsupportedexception)

The enumerator does not support being reset.

## See Also

[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<T\>

