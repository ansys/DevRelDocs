# Quick reference for tool usage

These guidelines provide comprehensive coverage of several key topics to ensure a clear and thorough understanding of the processes involved. The topics addressed include:

<!-- no toc -->
- [About Tools](#about-tools)
- [Selection Paradigms for Tools](#selection-paradigms-for-tools)
- [Tool Workflows](#tool-workflows)
  - [Immediate Action](#immediate-action)
  - [Interactive](#interactive)
  - [Auto Complete](#auto-complete)
  - [Manual Complete](#manual-complete)
  - [Find and Fix](#find-and-fix)
  - [Review](#review)
  - [Tools With Sub-Tools](#tools-with-sub-tools)
  - [Wizard](#wizard)
  - [Modify Properties](#modify-properties)

## About Tools

Tools are designed for performing simple actions. Refrain from combining different functionality inside a single tool unless the combination helps significantly with workflow optimization or not doing so would cause unwelcome repetition of steps/selections.

An example of this paradigm is seen in the 3D modeling tools for splitting geometry. Different flavors of a Split tool exist because they are respectively optimized for the type of split and for the selection of one or many specific object types.

-   The Combine tool intersects or merges bodies.
-   The Split Body tool splits a body using faces or planes.
-   The Split tool splits a face using selected points on the face or using another face.

The reason for this is to minimize the user choices (and attendant complexity) by using three tools instead of creating one huge splitting tool that could operate on anything with anything.

## Selection Paradigms for Tools

Two selection paradigms exist for tools:

-   Object-action: The user selects objects and then activates the tool.
    -   Objects in the current selection that are incompatible with the tool are rejected.
-   Action-object: The user activates the tool and then makes selections.
    -   Object filtering within the tool ignores irrelevant objects in the current selection.
    -   The tool can adapt to the current selection to configure available options.

In certain scenarios users may set up modifiers (buttons called tool guides or Alt+select) before selecting objects.

When possible, tools should support both paradigms to give users freedom to work in whatever way suits them best.

## Tool Workflows

### Immediate Action

**Description**

An action is applied immediately to a selected object without any user interaction or options needing to be set.

**When to Use**

- When the user selects one object and applies a command. 
  - Selecting more than one object is permitted, but other workflows may be more appropriate in that case. 
- Used for very simple and straightforward operations. 

**Selection**

- Object-action 
- No modifiers 

**Preview**

Not required

**Steps**

1. Select an object in graphics or tree.
2. Activate the tool.

**Examples**

- Fill
- Plane
- Axis

### Interactive

**Description** 

The user clicks and drags an object to make a change, and the geometry is constantly updated as the user interacts with the object.

**When to Use**

When the user can drag an object to make a change.

**Selection**

- Object-action 
- Action-object 
  - Filter to only allow selection of objects relevant to the active tool. 
- Use modifiers (tool guide or Alt+select) for secondary object selection.

**Preview**

Real-time preview is required.

**Steps**

1. Activate the tool.
2. Select one or more objects as the primary selection.
3. (Optional) Use a tool guide or hold Alt to select secondary objects.
   - Secondary objects can control direction, or they anchor the operation, or otherwise modify the base operation of the tool.
4. Select options in an Options panel. Drag the primary objects to make the change (or enter a specific value).
   - Changes are seen in real-time preview.
5. Complete when the user finishes dragging and releases the mouse button.

**Examples**

- Pull
- Move
- Sketch tools

### Auto Complete

**Description**

The user does not need to click a “complete” button (i.e., a check mark button). Undo must be supported so that the user can easily recover if they change their mind or make a mistake.  

There are two types of Auto Complete workflows: 

- Selection-based: Tool completes when all required selections have been made.
- Value-based: Tool completes when the user has entered a valid value.

**When to Use**

- When the change does not require dragging. 
- It can be determined that the operation should be applied based on the user’s selection. 
- The object to be created is defined by a location reference and one or more input values. 
  - For multiple inputs only one valid input value is needed to create the object. 
  - Additional inputs are given reasonable defaults. 
  - Allows for quickly creating multiple similar objects by simply selecting locations.

**Selection**

- Object-action
- Action-object
  - Filter to only allow selection of objects relevant to the active tool.

**Preview**

Use preview when appropriate to display object properties, such as direction for vector objects.

**Steps**: Selection-Based

1. Activate the tool.
2. Select options in the Options panel, if relevant.
3. Select the objects required to perform the operation.
4. The change is automatically applied as soon as the correct objects are selected.

**Steps**: Value-Based

1. Activate the tool in the ribbon or halo.
2. Select an object to create.
3. Select a location reference.
4. Required input fields for the selected object appear in the HUD.
5. Type in a value.
6. Press Enter or click in empty space to create the object.

**Examples**

- Selection-based:

  - Mirror 
  - Combine 
  
- Value-based:

  - Force (Structural) 
  - Flow (Fluid Flow)

### Manual Complete

**Description**

The user decides when to complete the operation by clicking a “complete” button (i.e., a check mark button). Some tools only need to be manually completed the first time an object is created. Once the object is created, subsequent changes to the object properties are automatically saved/committed.

**When to Use**

- When an indeterminate number of selections are needed. 
- When the command does not require dragging. 
- When there are inputs with preview and the user needs to confirm the inputs.

**Selection**

- Object-action 
- Action-object 
  - Filter to only allow selection of objects relevant to the active tool. 
- Use modifiers (tool guide or Alt+select) for secondary object selection.

**Preview**

Use preview when appropriate for user inputs. 
- For example, preview pattern members based on number and spacing inputs.

**Steps**

1. Activate the tool. 
2. Select objects to perform the action on. 
3. Use a tool guide or hold Alt to select secondary objects. 
   - If needed to control direction or otherwise anchor the operation. 
4. Select options in the Options panel (or using on-screen arrows or widgets) if relevant. 
5. Specify any relevant inputs. 
   - Use preview if available to check if inputs are correct. 
7. Click the “complete” button (or tool guide). 
   - Affected areas of the model are highlighted temporarily to show the change whenever possible.

**Examples**

- Midsurface
- Linear Pattern

### Find and Fix

**Description**

Automatically searches for and gathers all objects based on one or more criteria (e.g., a tolerance value). The search is run immediately on invocation and the results are shown to the user.  

The user then chooses to:

- Fix all areas found.
- Fix selected areas.
- Ignore selected areas.

**When to Use**

- Use to detect and repair problems.
- Use in any situation where the goal is to find objects and perform an action on them.

**Selection**

- Action-object
  - Filter to only allow selection of objects relevant to the active tool.
- Box-selection available for fixing/ignoring areas.

**Preview**

Red orbs are placed on detected areas too small to simply highlight in red.

**Steps**
  
1. Activate the tool. 
2. Detected “problem” areas are highlighted with red orbs. 
3. (Optional) User selects areas to ignore. 
4. Apply a “fix” as the user selects detected problem area(s). 
5. (Optional) User clicks “complete” button to fix all areas.

**Examples**

- Split
- Edges
- Extra Edges
- Small Faces

### Review

**Description**

Allows users to review information graphically in the model context and manage relationships that can be references for object creation.

For example, face-to-face contacts may be used as locations for objects such as: 

- Bonded Contacts
- Hinges
- Welds 

Eliminates the need for relying on a long list that makes users go back and forth between the list and the model.

**When to Use**

- When there are, or could be, many similar objects that reference geometric entities in the model.
- When the user has a need to review and perform actions on similar objects.

**Selection**

- Action-object 
  - Filter to only allow selection of objects relevant to the active tool.

**Preview**

- Highlighting should be used to graphically describe the model references. 
- Transparency and object dimming should be used to reduce clutter and focus the user on only references related to selected objects. 

**Steps**

1. Activate the tool. 
2. Detected areas of attention are highlighted visually. 
3. Select one or more objects to indicate areas where the review will focus. 
4. Click on buttons provided to perform actions on the specified areas. 
5. Optionally adjust the settings in the Options panel to assist with further workflow optimization or access advanced settings. 
6. If needed, reduce the scope of detection. 
   - Use tool guides to select primary and secondary bodies/faces.
   - Only areas pertaining to the selected bodies/faces are highlighted.

**Examples**

Contact Review

### Tools With Sub-Tools

**Description**

This is not so much a workflow as it is an organizational arrangement. There is no difference (at the command level) between a ribbon group of tools and a HUD tool group: Tools with Sub-Tools just provides a convenient consolidation of tools that have similar workflows and inputs and/or options.

**When to Use**

When several ribbon tools have similar

- Purpose (e.g., structural boundary conditions) 
- Workflow 
- Inputs and/or options

**Selection**

- Action-object 
  - Filter to only allow selection of objects relevant to the active tool. 
- Object-action 
- Use modifiers (tool guide or Alt+select) for secondary object selection.

**Preview**

Use preview as appropriate to show model changes or object creation.

**Steps**

1. Activate the higher-level tool. 
2. A default sub-tool is automatically activated. 
3. Complete the tool operation once the user provides a set of required inputs such as location reference, value input, etc.

**Examples**

- Structural 
- Fluid Flow 
- Solid Thermal

### Wizard

**Description**

A single tool walks users through a sequence of steps to complete a task. Often this involves simpler versions of more complex tools that make assumptions about tool inputs or about characteristics of the tool’s inputs/outputs. 

**When to Use**

- When you want to offer users a streamlined workflow for a task that involves several steps. 
  - Assumptions and default values streamline the task.

**Selection**

- Action-object to start the wizard. 
- Each step should filter selection to only objects relevant to the current step.

**Preview**

As needed per step to show model changes or object creation. 

**Steps**

1. Activate the wizard. 
2. The first step tool guide is activated. 
3. Make selections for the first step. 
4. Auto advance to the next step tool guide when required selection(s) are made. 
5. When all steps have been completed, the wizard auto-completes.

**Examples**

- Internal Flow 
- External Flow 


### Modify Properties

**Description**

Upon selecting an object, the select tool displays the object’s properties for modification. 

**When to Use**

- When users need to modify properties of objects such as 
  - Blocks in a diagram 
  - Objects in a geometry model  

**Selection**

 Object-action

**Preview**

As needed based on the property.

**Steps** 

Select an object. The Select tool HUD displays the object’s properties. Use tool guides and options to modify the object (e.g., edit its inputs or change its material).

**Examples** 

Modify properties by selecting one of the following objects:

- Plane
- Midsurface
- Offset face (e.g., face of a shelled body)
