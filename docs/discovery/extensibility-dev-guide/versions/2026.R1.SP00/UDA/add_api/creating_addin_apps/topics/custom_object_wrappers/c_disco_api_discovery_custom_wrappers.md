# DiscoveryCustomWrapper

A class derived from *CustomWrapper* that provides additional properties for display in the custom tree. Although it is possible to display a *DiscoveryCustomWrapper* in the design tree, the typical usage involves the display in the custom tree. The position of the objects in the custom tree can be defined in two ways:

1.  By specifying a *TreeId* and *Group* that link the object to the custom tree definition \(see **Custom Tree** section for more information\).
2.  By specifying a *TreeParent* that makes the custom object child of another custom object. The parent child/relationship is for custom tree display only.

    If specified, the *TreeParent* property overrides the *Group* property and places the object underneath its parent objects.


After the initial specification, the *TreeParent* and *Group* properties can be changed dynamically if desired. The drag and drop functionality \(see **Custom Tree** section for more information\) takes advantage of the dynamic specification and allows the User Interface to re-parent an object either in another group or as a child of another object.

The *DiscoveryCustomWrapper* objects can also display a field in the custom tree. The field is defined by a text \(*TreeFieldText*\) and a value \(*TreeFieldValue*\). The *TreeFieldValue* can be specified as a double \(no units\).

A complete list of the properties of *DiscoveryCustomWrapper* objects is given below:

-   **Name**: gets and sets the name of the wrapper object.
-   **Group**: gets and sets the custom tree group of the wrapper object.
-   **TreeId**: gets and sets the tree id of the wrapper object. This is how a tree can automatically find all items that are defined to it when it is refreshed.
-   **ImageKey**: gets and sets the image key for the wrapper objects.
-   **TreeFieldText**: gets and sets the tree field text.
-   **TreeFieldValue**: gets and sets the tree field value \(double is supported\) .
-   **TreeParent**: gets and sets the tree parent object which can be another custom object.
-   **ShowInDesignTree**: specifies whether the custom object should show in the design tree.

