//导入remove icon svg

var removeSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><circle style="fill:#E21B1B;" cx="256" cy="256" r="256"/><path style="fill:#C40606;" d="M510.28,285.304L367.912,142.936L150.248,368.608l140.928,140.928C406.352,493.696,497.056,401.288,510.28,285.304z"/><g><path style="fill:#FFFFFF;" d="M354.376,371.536c-5.12,0-10.232-1.952-14.144-5.856L146.408,171.848c-7.816-7.816-7.816-20.472,0-28.28s20.472-7.816,28.28,0L368.52,337.4c7.816,7.816,7.816,20.472,0,28.28C364.608,369.584,359.496,371.536,354.376,371.536z"/><path style="fill:#FFFFFF;" d="M160.544,371.536c-5.12,0-10.232-1.952-14.144-5.856c-7.816-7.816-7.816-20.472,0-28.28l193.832-193.832c7.816-7.816,20.472-7.816,28.28,0s7.816,20.472,0,28.28L174.688,365.68C170.784,369.584,165.664,371.536,160.544,371.536z"/></svg>';

//导入complete icon svg
var completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 288.579 288.579" style="enable-background:new 0 0 288.579 288.579;" xml:space="preserve" width="512px" height="512px"><g><path d="M283.127,57.184l-22.871-22.131c-7.101-6.874-18.438-6.683-25.311,0.424L113.442,161.085   c-6.88,7.107-19.404,8.879-27.985,3.962l-42.824-24.542c-8.568-4.917-19.512-1.951-24.428,6.629l-15.83,27.615   c-4.917,8.58-1.951,19.518,6.623,24.434c0,0,103.889,59.46,103.931,59.376c0.048-0.084,137.25-141.57,170.617-176.058   C290.419,75.389,290.228,64.052,283.127,57.184z" fill="#91DC5A"/></svg>';


//add click function
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
});
//function remove
function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}
//function complete
function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}
//function addItemTodo
function addItemTodo(text) {
  var list = document.getElementById('todo');
  var item = document.createElement('li');
  item.innerText = text;
  var buttons = document.createElement('div');
  buttons.classList.add('buttons');
  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;
  remove.addEventListener('click', removeItem);
  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;
  complete.addEventListener('click', completeItem);
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}
