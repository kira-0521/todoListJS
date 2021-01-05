// addFrom
const todoAdd = document.querySelector('.add');
const todoList = document.querySelector('.todos');



// htmlタグを生成
const createTodoList = task => {
    const html = `
        <li class="todos__li">
            <span>${task}</span>
            <i class="fa fa-trash-alt delete"></i>
        </li>
    `;

    // 生成したhtmlをulタグに挿入
    todoList.innerHTML += html;
}

// taskを生成
todoAdd.addEventListener('submit', e => {
    // submitのデフォルトのイベントを削除(サーバーへの送信無効)
    e.preventDefault();
    
    // taskを定義。入力値から空白を削除。
    const task = todoAdd.add.value.trim();
    
    // lengthがtrueつまり1以上
    if(task.length) {
        // 引数にtaskを私htmlを作成
        createTodoList(task);
        // フォームの中身をからにする
        todoAdd.reset();
    }
});

// 削除
todoList.addEventListener('click', function(event) {
    if(event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    } 
});

// searchInput
const search = document.querySelector('.todo-header__search input');



// .filteredを削除、付与
const filterTaskes = (inputValue) => {
    const todoArray = Array.from(todoList.children);
    todoArray.filter(todo => {
        return !todo.textContent.toLowerCase().includes(inputValue);
    }).forEach(todo => todo.classList.add('filtered'));
    todoArray.filter(todo => {
        return todo.textContent.toLowerCase().includes(inputValue);
    }).forEach(todo => todo.classList.remove('filtered'));
};

// filterTaskesにinputValueを渡す
search.addEventListener("keyup", () => {
    // valueを取得
    const inputValue = search.value.trim().toLowerCase();
    filterTaskes(inputValue);
});

