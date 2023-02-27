let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let urlInput = document.querySelector('#urlname');

btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let url = urlInput.value;
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${url}</td>
                    
                </tr>`;
    table.innerHTML += template;
});