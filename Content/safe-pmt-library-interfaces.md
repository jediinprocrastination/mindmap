PmtFile

```cs
public class PmtFile
{
	private PmtFile() { }

	public static PmtFile Load(string path) { }

	public IEnumerable<IProperty> Properties { get; set; }
}
```

