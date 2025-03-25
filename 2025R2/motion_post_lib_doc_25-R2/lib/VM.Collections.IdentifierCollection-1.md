# Class IdentifierCollection<TItem\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```python
public class IdentifierCollection<TItem> : KeyedCollection<Identifier, TItem> where TItem : IHasID
```

#### Type Parameters

`TItem` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[Collection<TItem\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection\-1) ??
[KeyedCollection<Identifier, TItem\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.keyedcollection\-2) ??
[IdentifierCollection<TItem\>](VM.Collections.IdentifierCollection\-1.md)

## Constructors

### IdentifierCollection\(\)

```python
public IdentifierCollection()
```

## Methods

### GetKeyForItem\(TItem\)

```python
protected override Identifier GetKeyForItem(TItem item)
```

#### Parameters

`item` TItem

#### Returns

 [Identifier](VM.Identifier.md)


