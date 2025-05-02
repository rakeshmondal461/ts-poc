// ------------------- Discriminated Union ------------------ //

type FormField =
  | { type: "text"; value: string }
  | { type: "checkbox"; value: boolean }
  | { type: "select"; value: string; options: string[] };

function processField(field: FormField): void {
  if (field.type === "text") {
    console.log(`Text value is: ${field.value}`);
  } else if (field.type === "checkbox") {
    console.log(`Checked: ${field.value}`);
  } else if (field.type === "select") {
    console.log(`Selected: ${field.value} from [${field.options.join(",")}]`);
  }
}

// ------------------- Discriminated Union ------------------ //