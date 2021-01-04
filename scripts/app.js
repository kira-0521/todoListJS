// addFrom
const todoAdd = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');


// taskを受けとりhtmlタグを生成
const createTodoList = task => {
    const html = `
        <li>
            <span>${task}</span>
            <i class="fa fa-trash-alt delete"></i>
        </li>
    `;

    // 生成したhtmlをulタグに挿入
    todoList.innerHTML += html;
}


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
