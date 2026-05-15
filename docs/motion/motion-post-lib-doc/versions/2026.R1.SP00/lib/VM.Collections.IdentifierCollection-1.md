# Class IdentifierCollection<TItem\>
<a id="VM_Collections_IdentifierCollection_1"></a>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class IdentifierCollection<TItem> : KeyedCollection<Identifier, TItem> where TItem : IHasID
```

#### Type Parameters

`TItem` 

#### Inheritance

object ← 
Collection<TItem\> ← 
KeyedCollection<Identifier, TItem\> ← 
[IdentifierCollection<TItem\>](VM.Collections.IdentifierCollection\-1.md)

## Constructors

### <a id="VM_Collections_IdentifierCollection_1__ctor"></a> IdentifierCollection\(\)

```csharp
public IdentifierCollection()
```

## Methods

### <a id="VM_Collections_IdentifierCollection_1_GetKeyForItem__0_"></a> GetKeyForItem\(TItem\)

```csharp
protected override Identifier GetKeyForItem(TItem item)
```

#### Parameters

`item` TItem

#### Returns

 [Identifier](VM.Identifier.md)

