# invokeMenuItem


abstract fun [invokeMenuItem](invoke-menu-item.md)(id: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Called by the Data Explorer to notify the plug-in that a user has selected a menu item. The following items are predefined: Basic Settings = -5, Print Page = -6, Export Page = -7. Optional menu items (see getMenuItems) are positive integers starting at zero.

#### Parameters



| | |
|---|---|
| id | The id of the menu item |
