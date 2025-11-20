# Class JournalUtility
<a id="VM_Managed_DAFUL_Operation_JournalUtility"></a>

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The utility class for a journal.

```csharp
public class JournalUtility
```

#### Inheritance

object ← 
[JournalUtility](VM.Managed.DAFUL.Operation.JournalUtility.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_JournalUtility__ctor"></a> JournalUtility\(\)

```csharp
public JournalUtility()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_JournalUtility_ExecuteJournal_VM_Managed_DAFUL_Operation_JournalUtility_OperationType_VM_Managed_ObjectBase_"></a> ExecuteJournal\(OperationType, ObjectBase\)

Executes the journal.

```csharp
public static void ExecuteJournal(JournalUtility.OperationType typeOp, ObjectBase objEntity)
```

#### Parameters

`typeOp` [JournalUtility](VM.Managed.DAFUL.Operation.JournalUtility.md).[OperationType](VM.Managed.DAFUL.Operation.JournalUtility.OperationType.md)

The type op.

`objEntity` ObjectBase

The object entity.

### <a id="VM_Managed_DAFUL_Operation_JournalUtility_ExecuteJournal_System_String___"></a> ExecuteJournal\(string\[\]\)

Executes the journal.

```csharp
public static void ExecuteJournal(string[] arDeleteNames)
```

#### Parameters

`arDeleteNames` string\[\]

The ar delete names.

### <a id="VM_Managed_DAFUL_Operation_JournalUtility_ExecuteJournal_System_String_"></a> ExecuteJournal\(string\)

Executes the journal.

```csharp
public static void ExecuteJournal(string strDeleteName)
```

#### Parameters

`strDeleteName` string

Name of the string delete.

### <a id="VM_Managed_DAFUL_Operation_JournalUtility_ExecuteJournal_VM_Managed_DAFUL_Operation_JournalUtility_OperationType_VM_Managed_ObjectBase_System_String___"></a> ExecuteJournal\(OperationType, ObjectBase, string\[\]\)

Executes the journal.

```csharp
public static void ExecuteJournal(JournalUtility.OperationType typeOp, ObjectBase objEntity, string[] arDeleteNames)
```

#### Parameters

`typeOp` [JournalUtility](VM.Managed.DAFUL.Operation.JournalUtility.md).[OperationType](VM.Managed.DAFUL.Operation.JournalUtility.OperationType.md)

The type op.

`objEntity` ObjectBase

The object entity.

`arDeleteNames` string\[\]

The ar delete names.

