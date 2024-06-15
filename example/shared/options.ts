interface NameOptions {
    firstName?: string;
    lastName?: string;
    title?: string;
}

let test: NameOptions = {firstName: 'steve', lastName: 'downey'};

function formatName({firstName = 'John', lastName = 'Doe', title}: NameOptions) {
    let name = `${firstName} ${lastName}`;
    return title ? `${title} ${name}` : name;
}

const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
  });


  console.log(formattedName); // "Dr. Jane Smith"
  console.log(formatName({})); // John Doe
  console.log(formatName(test)); // John Doe