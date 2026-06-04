# Class DimensionalList2<T\>

Namespace: [OpenTD.Dimension](OpenTD.Dimension.md)  
Assembly: OpenTD.dll  

A 2D list of Dimensionals.

```csharp
public class DimensionalList2<T> : List<DimensionalList<T>>, IList<DimensionalList<T>>, ICollection<DimensionalList<T>>, IReadOnlyList<DimensionalList<T>>, IReadOnlyCollection<DimensionalList<T>>, IEnumerable<DimensionalList<T>>, IList, ICollection, IEnumerable where T : IDimension, new()
```

#### Type Parameters

`T` 

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[List<DimensionalList<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1) ← 
[DimensionalList2<T\>](OpenTD.Dimension.DimensionalList2\-1.md)

## Implements

[IList<DimensionalList<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1), 
[ICollection<DimensionalList<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1), 
[IReadOnlyList<DimensionalList<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1), 
[IReadOnlyCollection<DimensionalList<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1), 
[IEnumerable<DimensionalList<T\>\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IList](https://learn.microsoft.com/dotnet/api/system.collections.ilist), 
[ICollection](https://learn.microsoft.com/dotnet/api/system.collections.icollection), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[List<DimensionalList<T\>\>.Add\(DimensionalList<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.add), 
[List<DimensionalList<T\>\>.AddRange\(IEnumerable<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.addrange), 
[List<DimensionalList<T\>\>.AsReadOnly\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.asreadonly), 
[List<DimensionalList<T\>\>.BinarySearch\(int, int, DimensionalList<T\>, IComparer<DimensionalList<T\>\>?\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.binarysearch\#system\-collections\-generic\-list\-1\-binarysearch\(system\-int32\-system\-int32\-0\-system\-collections\-generic\-icomparer\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.BinarySearch\(DimensionalList<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.binarysearch\#system\-collections\-generic\-list\-1\-binarysearch\(\-0\)), 
[List<DimensionalList<T\>\>.BinarySearch\(DimensionalList<T\>, IComparer<DimensionalList<T\>\>?\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.binarysearch\#system\-collections\-generic\-list\-1\-binarysearch\(\-0\-system\-collections\-generic\-icomparer\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.Clear\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.clear), 
[List<DimensionalList<T\>\>.Contains\(DimensionalList<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.contains), 
[List<DimensionalList<T\>\>.ConvertAll<TOutput\>\(Converter<DimensionalList<T\>, TOutput\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.convertall), 
[List<DimensionalList<T\>\>.CopyTo\(int, DimensionalList<T\>\[\], int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.copyto\#system\-collections\-generic\-list\-1\-copyto\(system\-int32\-0\(\)\-system\-int32\-system\-int32\)), 
[List<DimensionalList<T\>\>.CopyTo\(DimensionalList<T\>\[\]\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.copyto\#system\-collections\-generic\-list\-1\-copyto\(\-0\(\)\)), 
[List<DimensionalList<T\>\>.CopyTo\(DimensionalList<T\>\[\], int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.copyto\#system\-collections\-generic\-list\-1\-copyto\(\-0\(\)\-system\-int32\)), 
[List<DimensionalList<T\>\>.EnsureCapacity\(int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.ensurecapacity), 
[List<DimensionalList<T\>\>.Exists\(Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.exists), 
[List<DimensionalList<T\>\>.Find\(Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.find), 
[List<DimensionalList<T\>\>.FindAll\(Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findall), 
[List<DimensionalList<T\>\>.FindIndex\(int, int, Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findindex\#system\-collections\-generic\-list\-1\-findindex\(system\-int32\-system\-int32\-system\-predicate\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.FindIndex\(int, Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findindex\#system\-collections\-generic\-list\-1\-findindex\(system\-int32\-system\-predicate\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.FindIndex\(Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findindex\#system\-collections\-generic\-list\-1\-findindex\(system\-predicate\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.FindLast\(Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findlast), 
[List<DimensionalList<T\>\>.FindLastIndex\(int, int, Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findlastindex\#system\-collections\-generic\-list\-1\-findlastindex\(system\-int32\-system\-int32\-system\-predicate\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.FindLastIndex\(int, Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findlastindex\#system\-collections\-generic\-list\-1\-findlastindex\(system\-int32\-system\-predicate\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.FindLastIndex\(Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.findlastindex\#system\-collections\-generic\-list\-1\-findlastindex\(system\-predicate\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.ForEach\(Action<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.foreach), 
[List<DimensionalList<T\>\>.GetEnumerator\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.getenumerator), 
[List<DimensionalList<T\>\>.GetRange\(int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.getrange), 
[List<DimensionalList<T\>\>.IndexOf\(DimensionalList<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.indexof\#system\-collections\-generic\-list\-1\-indexof\(\-0\)), 
[List<DimensionalList<T\>\>.IndexOf\(DimensionalList<T\>, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.indexof\#system\-collections\-generic\-list\-1\-indexof\(\-0\-system\-int32\)), 
[List<DimensionalList<T\>\>.IndexOf\(DimensionalList<T\>, int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.indexof\#system\-collections\-generic\-list\-1\-indexof\(\-0\-system\-int32\-system\-int32\)), 
[List<DimensionalList<T\>\>.Insert\(int, DimensionalList<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.insert), 
[List<DimensionalList<T\>\>.InsertRange\(int, IEnumerable<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.insertrange), 
[List<DimensionalList<T\>\>.LastIndexOf\(DimensionalList<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.lastindexof\#system\-collections\-generic\-list\-1\-lastindexof\(\-0\)), 
[List<DimensionalList<T\>\>.LastIndexOf\(DimensionalList<T\>, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.lastindexof\#system\-collections\-generic\-list\-1\-lastindexof\(\-0\-system\-int32\)), 
[List<DimensionalList<T\>\>.LastIndexOf\(DimensionalList<T\>, int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.lastindexof\#system\-collections\-generic\-list\-1\-lastindexof\(\-0\-system\-int32\-system\-int32\)), 
[List<DimensionalList<T\>\>.Remove\(DimensionalList<T\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.remove), 
[List<DimensionalList<T\>\>.RemoveAll\(Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.removeall), 
[List<DimensionalList<T\>\>.RemoveAt\(int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.removeat), 
[List<DimensionalList<T\>\>.RemoveRange\(int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.removerange), 
[List<DimensionalList<T\>\>.Reverse\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.reverse\#system\-collections\-generic\-list\-1\-reverse), 
[List<DimensionalList<T\>\>.Reverse\(int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.reverse\#system\-collections\-generic\-list\-1\-reverse\(system\-int32\-system\-int32\)), 
[List<DimensionalList<T\>\>.Slice\(int, int\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.slice), 
[List<DimensionalList<T\>\>.Sort\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.sort\#system\-collections\-generic\-list\-1\-sort), 
[List<DimensionalList<T\>\>.Sort\(IComparer<DimensionalList<T\>\>?\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.sort\#system\-collections\-generic\-list\-1\-sort\(system\-collections\-generic\-icomparer\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.Sort\(Comparison<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.sort\#system\-collections\-generic\-list\-1\-sort\(system\-comparison\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.Sort\(int, int, IComparer<DimensionalList<T\>\>?\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.sort\#system\-collections\-generic\-list\-1\-sort\(system\-int32\-system\-int32\-system\-collections\-generic\-icomparer\(\(\-0\)\)\)), 
[List<DimensionalList<T\>\>.ToArray\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.toarray), 
[List<DimensionalList<T\>\>.TrimExcess\(\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.trimexcess), 
[List<DimensionalList<T\>\>.TrueForAll\(Predicate<DimensionalList<T\>\>\)](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.trueforall), 
[List<DimensionalList<T\>\>.Capacity](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.capacity), 
[List<DimensionalList<T\>\>.Count](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.count), 
[List<DimensionalList<T\>\>.this\[int\]](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1.item), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### GetValuesSI\(\)

```csharp
public List<List<double>> GetValuesSI()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

## Operators

### implicit operator DimensionalList2<T\>\(List<List<double\>\>\)

```csharp
public static implicit operator DimensionalList2<T>(List<List<double>> x)
```

#### Parameters

`x` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

#### Returns

 [DimensionalList2](OpenTD.Dimension.DimensionalList2\-1.md)<T\>

### implicit operator List<List<double\>\>\(DimensionalList2<T\>\)

```csharp
public static implicit operator List<List<double>>(DimensionalList2<T> x)
```

#### Parameters

`x` [DimensionalList2](OpenTD.Dimension.DimensionalList2\-1.md)<T\>

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

## See Also

[Dimensional](OpenTD.Dimension.Dimensional\-1.md)<T\>


