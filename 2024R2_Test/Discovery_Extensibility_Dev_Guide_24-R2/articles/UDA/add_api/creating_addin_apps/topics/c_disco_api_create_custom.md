# Creating custom commands

## Custom commands

All User Interface \(UI\) objects in Discovery must be associated with a Command. A Command controls the text, tool tip, image, and handles the Executing and Updating events. If a new UI object is added to the Ribbon by the add-in, the add-in must either create a new Command or associate it with an existing Command.

An add-in implements the ICommandExtensibility interface to modify or add commands. Discovery calls the `ICommandExtensibility.Initialize` method at startup which allows the add-in to add or modify commands using the appropriate methods on the Command class.

## Example code

```
using SpaceClaim.Api.V22;
using SpaceClaim.Api.V22.Extensibility;
 
namespace YourCompany.Example {
 public class SampleAddIn : AddIn, IExtensibility, ICommandExtensibility {
 ...
 
#region ICommandExtensibility Members
public void Initialize() {
 Command command = Command.Create("SampleAddIn.CreateGear");
 command.Text = Properties.Resources.CreateGearCommandText;
 command.Hint = Properties.Resources.CreateGearCommandHint;
 command.Image = Resources.CreateGear;
 command.Updating += CreateGear_Updating;
 command.Executing += CreateGear_Executing;
 }
 
 #endregion
 
 ...
 }
}

```

