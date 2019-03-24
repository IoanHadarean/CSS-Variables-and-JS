const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // gets the dataset sizing (either px or none)
    const suffix = this.dataset.sizing || '';
    // Gets the HTML element and updates the property of the css variable with the value
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));