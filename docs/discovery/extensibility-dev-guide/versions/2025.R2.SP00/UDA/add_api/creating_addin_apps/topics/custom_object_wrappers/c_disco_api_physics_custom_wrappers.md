# PhysicsCustomWrapper

A class derived from *DiscoveryCustomWrapper* with two extra properties:

1.  Simulation
2.  TreeFieldQuantity

This wrapper can be used for objects connected to simulations. Each wrapper object is linked to one simulation. The Discovery code deletes/updates when a simulation is deleted or duplicated. It also shows in the custom tree only those objects which are associated with the current simulation. When you create a new simulation or change to a different one, the tree updates and the objects not associated with the simulation are not displayed.

Additionally, while *DiscoveryCustomWrapper* objects has only a value field on the custom tree, *PhysicsCustomWrapper* objects can display *TreeFieldQuantity*, which is a value with units. The *TreeFieldQuantity* field can be used to display a physical quantity associated with the object.

## Sync-ing TreeField and HUD properties

In the Discovery UI paradigm, the *TreeField* is used as a short cut for an entry from the HUD that displays the tool options associated with the object in the tree. The *TreeField* is visible even though the tool is not selected, so custom objects can be modified regardless of whether their tool is active. When an add-in uses the *TreeField,* it is its responsibility to keep its value in sync with the HUD properties.

```
protected override void OnEnable(bool enable)
        {
            if (enable)
            {
                CustomObjectMagnitude.Command.TextChanged += barObjectMagnitudeCommand_TextChanged;
                Document.DocumentChanged += TreeField_Updated;
            }
```

The add-in can register a listener to the *DocumentChanged* event in order to be notified of changes in the quick field. The *DocumentChanged* event can be filtered for changes in the custom object and the appropriate action can be taken to sync the event payload to the corresponding property.

```
private void TreeField_Updated(object sender, DocumentChangedEventArgs e)
        {
            foreach (var changedObj in e.ChangedObjects)
            {
                if (changedObj is CustomObject customobject)
                {
                    var changedLoad = BarObject.GetWrapper(changedObj as CustomObject);
 
                    if ((CustomObjectMagnitude.Command.Text != changedLoad.TreeFieldQuantity.ToString()))
                    {
                        CustomObjectMagnitude.Command.Text = changedLoad.TreeFieldQuantity.ToString();
                        WriteBlock.ExecuteTask("update quantity", () => UpdateTreeQuantity(changedLoad));
                    }              
                }
            }
        }
```

When the HUD property associated with *TreeField* is changed, it is the add-in responsibility to set the *TreeField* property to the updated value.

```
customBarObject.TreeFieldQuantity = customBarObject.RatioQuantity;
```

The Discovery code automatically updates the *User Interface* in response to the *TreeField* change.

