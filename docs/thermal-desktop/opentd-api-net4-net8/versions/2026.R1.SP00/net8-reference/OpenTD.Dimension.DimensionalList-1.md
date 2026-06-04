# Class DimensionalList<T\>

Namespace: [OpenTD.Dimension](OpenTD.Dimension.md)  
Assembly: OpenTD.dll  

A list of Dimensionals.

```csharp
[MessagePackObject(true)]
public class DimensionalList<T> : List<Dimensional<T>>, IList<Dimensional<T>>, ICollection<Dimensional<T>>, IReadOnlyList<Dimensional<T>>, IReadOnlyCollection<Dimensional<T>>, IEnumerable<Dimensional<T>>, IList, ICollection, IEnumerable where T : IDimension, new()
```

#### Type Parameters

`T` 

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[List<Dimensional<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1) ← 
[DimensionalList<T\>](OpenTD.Dimension.DimensionalList\-1.md)

## Implements

[IList<Dimensional<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<Dimensional<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IReadOnlyList<Dimensional<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1), 
[IReadOnlyCollection<Dimensional<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1), 
[IEnumerable<Dimensional<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IList](https://learn.microsoft.com/dotnet/api/system.collections.ilist), 
[ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[List<Dimensional<T\>\>.Add\(Dimensional<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.add), 
[List<Dimensional<T\>\>.AddRange\(IEnumerable<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.addrange), 
[List<Dimensional<T\>\>.AsReadOnly\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.asreadonly), 
[List<Dimensional<T\>\>.BinarySearch\(int, int, Dimensional<T\>, IComparer<Dimensional<T\>\>?\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.binarysearch\#system\-collections\-generic\-list\-1\-binarysearch\(system\-int32\-system\-int32\-0\-system\-collections\-generic\-icomparer\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.BinarySearch\(Dimensional<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.binarysearch\#system\-collections\-generic\-list\-1\-binarysearch\(\-0\)), 
[List<Dimensional<T\>\>.BinarySearch\(Dimensional<T\>, IComparer<Dimensional<T\>\>?\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.binarysearch\#system\-collections\-generic\-list\-1\-binarysearch\(\-0\-system\-collections\-generic\-icomparer\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.Clear\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.clear), 
[List<Dimensional<T\>\>.Contains\(Dimensional<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.contains), 
[List<Dimensional<T\>\>.ConvertAll<TOutput\>\(Converter<Dimensional<T\>, TOutput\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.convertall), 
[List<Dimensional<T\>\>.CopyTo\(int, Dimensional<T\>\[\], int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.copyto\#system\-collections\-generic\-list\-1\-copyto\(system\-int32\-0\(\)\-system\-int32\-system\-int32\)), 
[List<Dimensional<T\>\>.CopyTo\(Dimensional<T\>\[\]\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.copyto\#system\-collections\-generic\-list\-1\-copyto\(\-0\(\)\)), 
[List<Dimensional<T\>\>.CopyTo\(Dimensional<T\>\[\], int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.copyto\#system\-collections\-generic\-list\-1\-copyto\(\-0\(\)\-system\-int32\)), 
[List<Dimensional<T\>\>.EnsureCapacity\(int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.ensurecapacity), 
[List<Dimensional<T\>\>.Exists\(Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.exists), 
[List<Dimensional<T\>\>.Find\(Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.find), 
[List<Dimensional<T\>\>.FindAll\(Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findall), 
[List<Dimensional<T\>\>.FindIndex\(int, int, Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findindex\#system\-collections\-generic\-list\-1\-findindex\(system\-int32\-system\-int32\-system\-predicate\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.FindIndex\(int, Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findindex\#system\-collections\-generic\-list\-1\-findindex\(system\-int32\-system\-predicate\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.FindIndex\(Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findindex\#system\-collections\-generic\-list\-1\-findindex\(system\-predicate\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.FindLast\(Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findlast), 
[List<Dimensional<T\>\>.FindLastIndex\(int, int, Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findlastindex\#system\-collections\-generic\-list\-1\-findlastindex\(system\-int32\-system\-int32\-system\-predicate\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.FindLastIndex\(int, Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findlastindex\#system\-collections\-generic\-list\-1\-findlastindex\(system\-int32\-system\-predicate\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.FindLastIndex\(Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findlastindex\#system\-collections\-generic\-list\-1\-findlastindex\(system\-predicate\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.ForEach\(Action<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.foreach), 
[List<Dimensional<T\>\>.GetEnumerator\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.getenumerator), 
[List<Dimensional<T\>\>.GetRange\(int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.getrange), 
[List<Dimensional<T\>\>.IndexOf\(Dimensional<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.indexof\#system\-collections\-generic\-list\-1\-indexof\(\-0\)), 
[List<Dimensional<T\>\>.IndexOf\(Dimensional<T\>, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.indexof\#system\-collections\-generic\-list\-1\-indexof\(\-0\-system\-int32\)), 
[List<Dimensional<T\>\>.IndexOf\(Dimensional<T\>, int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.indexof\#system\-collections\-generic\-list\-1\-indexof\(\-0\-system\-int32\-system\-int32\)), 
[List<Dimensional<T\>\>.Insert\(int, Dimensional<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.insert), 
[List<Dimensional<T\>\>.InsertRange\(int, IEnumerable<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.insertrange), 
[List<Dimensional<T\>\>.LastIndexOf\(Dimensional<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.lastindexof\#system\-collections\-generic\-list\-1\-lastindexof\(\-0\)), 
[List<Dimensional<T\>\>.LastIndexOf\(Dimensional<T\>, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.lastindexof\#system\-collections\-generic\-list\-1\-lastindexof\(\-0\-system\-int32\)), 
[List<Dimensional<T\>\>.LastIndexOf\(Dimensional<T\>, int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.lastindexof\#system\-collections\-generic\-list\-1\-lastindexof\(\-0\-system\-int32\-system\-int32\)), 
[List<Dimensional<T\>\>.Remove\(Dimensional<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.remove), 
[List<Dimensional<T\>\>.RemoveAll\(Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.removeall), 
[List<Dimensional<T\>\>.RemoveAt\(int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.removeat), 
[List<Dimensional<T\>\>.RemoveRange\(int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.removerange), 
[List<Dimensional<T\>\>.Reverse\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.reverse\#system\-collections\-generic\-list\-1\-reverse), 
[List<Dimensional<T\>\>.Reverse\(int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.reverse\#system\-collections\-generic\-list\-1\-reverse\(system\-int32\-system\-int32\)), 
[List<Dimensional<T\>\>.Slice\(int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.slice), 
[List<Dimensional<T\>\>.Sort\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.sort\#system\-collections\-generic\-list\-1\-sort), 
[List<Dimensional<T\>\>.Sort\(IComparer<Dimensional<T\>\>?\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.sort\#system\-collections\-generic\-list\-1\-sort\(system\-collections\-generic\-icomparer\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.Sort\(Comparison<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.sort\#system\-collections\-generic\-list\-1\-sort\(system\-comparison\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.Sort\(int, int, IComparer<Dimensional<T\>\>?\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.sort\#system\-collections\-generic\-list\-1\-sort\(system\-int32\-system\-int32\-system\-collections\-generic\-icomparer\(\(\-0\)\)\)), 
[List<Dimensional<T\>\>.ToArray\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.toarray), 
[List<Dimensional<T\>\>.TrimExcess\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.trimexcess), 
[List<Dimensional<T\>\>.TrueForAll\(Predicate<Dimensional<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.trueforall), 
[List<Dimensional<T\>\>.Capacity](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.capacity), 
[List<Dimensional<T\>\>.Count](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.count), 
[List<Dimensional<T\>\>.this\[int\]](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.item), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### DimensionalList\(\)

```csharp
public DimensionalList()
```

### DimensionalList\(IEnumerable<double\>\)

```csharp
public DimensionalList(IEnumerable<double> x)
```

#### Parameters

`x` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### DimensionalList\(double\[\]\)

```csharp
public DimensionalList(double[] x)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

## Methods

### AddRange\(IEnumerable<double\>\)

```csharp
public void AddRange(IEnumerable<double> x)
```

#### Parameters

`x` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### AddRange\(double\[\]\)

```csharp
public void AddRange(double[] x)
```

#### Parameters

`x` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetValuesSI\(\)

```csharp
public List<double> GetValuesSI()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## Operators

### implicit operator DimensionalList<T\>\(List<double\>\)

```csharp
public static implicit operator DimensionalList<T>(List<double> x)
```

#### Parameters

`x` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

#### Returns

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<T\>

### implicit operator List<double\>\(DimensionalList<T\>\)

```csharp
public static implicit operator List<double>(DimensionalList<T> x)
```

#### Parameters

`x` [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<T\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

## See Also

[Dimensional](OpenTD.Dimension.Dimensional\-1.md)<T\>


