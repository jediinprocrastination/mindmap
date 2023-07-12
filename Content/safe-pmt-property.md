Property interface definition

```cs
public class Property
{
	public string Id { get; }
	public string Name { get; }
	public PropertyTypes Type { get; }

	public PropertyValue Value { get; set; }
	public PropertyMetadata Metadata { get; }

	public void SetValue<T>(T value) { /**/ }
}

public enum PropertyTypes
{
	Numeric = 0,
	Boolean = 1,
	Text = 2
}

public class PropertyValue
{
	public static explicit operator int(PropertyValue v) { /**/ }
	public static explicit operator float(PropertyValue v) { /**/ }
	public static explicit operator double(PropertyValue v) { /**/ }
	public static explicit operator bool(PropertyValue v) { /**/ }
	public static explicit operator string(PropertyValue v) { /**/ }
}

public class PropertyMetadata
{
	public PropertyValue Original { get; }
	public PropertyValue? Minimum { get; }
	public PropertyValue? Maximum { get; }
}
```

Example

```cs
const int CUSTOM_VALUE = 42;

var properties = GetProperties();
var numericProperties = properties.Where(x => x.Type == PropertyTypes.Numeric);

foreach (var property in numericProperties)
{
	Console.WriteLine($"Value is {(int)property.Value}");

	var metadata = property.Metadata;

	Console.WriteLine($"Original is {(int)metadata.Original}");

	if (metadata.Maximum == null || metadata.Minimum == null)
	  continue;

	Console.WriteLine($"Maximum is {(int)metadata.Maximum}");
	Console.WriteLine($"Minimum is {(int)metadata.Minimum}");

	if (CUSTOM_VALUE >= (int)metadata.Minimum && CUSTOM_VALUE <= (int)metadata.Maximum)
	{
	  property.SetValue(CUSTOM_VALUE);
	}
}
```
