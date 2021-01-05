// addForm
const todoAdd = document.querySelector('.add');
const todoList = document.querySelector('.todos');
// searchInput
const search = document.querySelector('.todo-header__search input');


/* ################ localStorage ################ */

// taskの初期化処理（次ブラウザを開いたとき）
(function(){
    // 初期化処理
    // ローカルストレージに格納されている値を取得し、リストを生成する
    for(let key in localStorage){
        let html = localStorage.getItem(key);
        if (html) {
            todoList.innerHTML += localStorage.getItem(key);
        }
    }
})();

// localStorageにset
const saveTaskToLocalStorage = (task, html) => {
    // nullはセットしない
    if(html) {
        localStorage.setItem(task, html);
        return;
    }
    return;
}

// localStorageからremove
const deleteTaskFromLocalStorage = task => {
    localStorage.removeItem(task);
    return;
}

/* ################ localStorage ################ */


/* ################ 生成 ################ */
// taskを生成
todoAdd.addEventListener('submit', e => {
// submitのデフォルトのイベントを削除(サーバーへの送信無効)
    e.preventDefault();
    
    // taskを定義。入力値から空白を削除。
    const task = todoAdd.add.value.trim();
    
    // taskを渡し、フォームを空に。
    if(task.length) {
        createTodoList(task);
        todoAdd.reset();
    }
    
});

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

    // localStorageに保存
    saveTaskToLocalStorage(task, html);
}
/* ################ 生成 ################ */


/* ################ 削除 ################ */

todoList.addEventListener('click', function(event) {
    if(event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
        // localStorageから削除
        const task = event.target.parentElement.textContent.trim();
        deleteTaskFromLocalStorage(task);
    }
});
/* ################ 削除 ################ */



/* ################ 検索 ################ */
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
/* ################ 検索 ################ */


