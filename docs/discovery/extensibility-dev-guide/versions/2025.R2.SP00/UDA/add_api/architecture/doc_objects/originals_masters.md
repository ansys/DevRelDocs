# Originals and masters

IDocObject is the base for all doc object functionality. It provides members for traversing the parent-child hierarchy \(Children, GetChildren<T\>,GetDescendants<T\>,Parent,GetAncestor<T\>,Root\), which we have already met, and it also provides members for traversing the occurrence structure:

-   Original: Gets the original IDocObject, else null if this is a master.
-   Master: Gets the ultimate original, that is the DocObject master at the end of the occurrence chain. If the object is a master, the object itself is returned.
-   Instance: Gets the instance that produces this occurrence, else null if this is a master.

