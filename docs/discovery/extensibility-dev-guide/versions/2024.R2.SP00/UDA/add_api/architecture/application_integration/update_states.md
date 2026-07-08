# Update states

A doc object master has an *update state*, which tells you if the object has changed.

Each time the doc object master is changed, its update state changes. Conversely, if the update state hasn't changed, then the object hasn't changed. When an object is changed due to an undo \(or redo\) operation, its update state is undone \(or redone\) too.

The update state is persistent, so you can store its string representation and use it in another Discovery session.

```
public static void Example(DesignFace desFace) {
	// doc object masters provide an update state
	UpdateState beforeStateA = desFace.UpdateState;

	// the string representation can be recorded
	string stateText = beforeStateA.ToString();

	ModifyDesignBody();

	// test whether the design face was changed
	if (desFace.UpdateState != beforeStateA)
		Debug.WriteLine("Design face was changed.");

	// the update state can be reconstructed from the string
	UpdateState beforeStateB = UpdateState.FromString(stateText);
	Debug.Assert(beforeStateA == beforeStateB);
}

```

Update states aren't provided for occurrences, but you can store the update states of the instances involved in the occurrence chain, along with the update state of the master. PathToMaster returns these instances.

The update state only represents the state of the object itself, and not the state of other objects it contains or references. For example, the update state of a part isn't changed if a child design body is modified. Similarly, although the update state of a component will change if its placement is modified \(since this is a property of the component itself\), the update state won't change if its template part is modified.


