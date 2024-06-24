# Comparing lengths and angles

The Accuracy class provides methods for comparing lengths and angles.

The CompareLengths method takes two arguments, *lengthA* and *lengthB*, and returns an integer result:

-   -1 *lengthA* is less than *lengthB*.
-   0 *lengthA* is equal to *lengthB* to within linear resolution.
-   +1 *lengthA* is greater than *lengthB*.

This method provides general comparison of two lengths, but for common situations, such as comparing with zero, or testing whether two values are equal, simpler and more readable methods can be used:

```
public static void Example(double lengthA, double lengthB) {
	// same as CompareLengths(lengthA, lengthB) == 0
	bool equalLengths = Accuracy.EqualLengths(lengthA, lengthB);

	// same as CompareLengths(lengthA, 0) == 0
	bool lengthIsZero = Accuracy.LengthIsZero(lengthA);

	// same as CompareLengths(lengthA, 0) > 0
	bool lengthIsPositive = Accuracy.LengthIsPositive(lengthA);

	// same as CompareLengths(lengthA, 0) < 0
	bool lengthIsNegative = Accuracy.LengthIsNegative(lengthA);
}
```

Corresponding methods are provided for angles: CompareAngles, EqualAngles, AngleIsZero, AngleIsPositive, and AngleIsNegative.

