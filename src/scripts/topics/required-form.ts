type FormDraft = {
  fullName?: string;
  age?: number;
  email?: string;
};

function saveDraft(data: FormDraft) {
  console.log("Draft saved:", data);
}

function submitForm(data: Required<FormDraft>) {
  console.log("Form submitted!", data);
}

submitForm({ fullName: "Rakesh Mondal", age: 33, email: "abc@gmail.com" });
saveDraft({});