# Class JournalUtility

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The utility class for a journal.

```csharp
public class JournalUtility
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JournalUtility](VM.Managed.DAFUL.Operation.JournalUtility.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### JournalUtility\(\)

```csharp
public JournalUtility()
```

## Methods

### ExecuteJournal\(OperationType, ObjectBase\)

Executes the journal.

```csharp
public static void ExecuteJournal(JournalUtility.OperationType typeOp, ObjectBase objEntity)
```

#### Parameters

`typeOp` [JournalUtility](VM.Managed.DAFUL.Operation.JournalUtility.md).[OperationType](VM.Managed.DAFUL.Operation.JournalUtility.OperationType.md)

The type op.

`objEntity` ObjectBase

The object entity.

### ExecuteJournal\(string\[\]\)

Executes the journal.

```csharp
public static void ExecuteJournal(string[] arDeleteNames)
```

#### Parameters

`arDeleteNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar delete names.

### ExecuteJournal\(string\)

Executes the journal.

```csharp
public static void ExecuteJournal(string strDeleteName)
```

#### Parameters

`strDeleteName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string delete.

### ExecuteJournal\(OperationType, ObjectBase, string\[\]\)

Executes the journal.

```csharp
public static void ExecuteJournal(JournalUtility.OperationType typeOp, ObjectBase objEntity, string[] arDeleteNames)
```

#### Parameters

`typeOp` [JournalUtility](VM.Managed.DAFUL.Operation.JournalUtility.md).[OperationType](VM.Managed.DAFUL.Operation.JournalUtility.OperationType.md)

The type op.

`objEntity` ObjectBase

The object entity.

`arDeleteNames` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar delete names.


