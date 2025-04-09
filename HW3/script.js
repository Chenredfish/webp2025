var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

var dataset = [];
var currentPage = 1; // 當前頁數
var itemsPerPage = 10; // 每頁顯示的資料數量

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        try {
            dataset = JSON.parse(this.responseText);
            console.log("收到的資料:", dataset); // 檢查返回的資料
            renderTable(currentPage);
        } catch (error) {
            console.error("解析資料時出錯:", error);
        }
    }
};

function renderTable(page) {
    var myTable = document.getElementById("csie");
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;

    // 清空表格（保留表頭）
    myTable.innerHTML = `
        <tr>
            <th>名稱</th>
            <th>地點</th>
            <th>票價</th>
        </tr>
    `;

    // 顯示當前頁的資料
    var currentData = dataset.slice(start, end);
    currentData.forEach(function (data) {
        var row = myTable.insertRow(-1);
        row.insertCell(0).innerHTML = data['title'] || '無名稱';
        row.insertCell(1).innerHTML = data['showInfo'][0]['location'] || '無地點';
        row.insertCell(2).innerHTML = data['showInfo'][0]['price'] || '無價格';
    });

    // 更新分頁按鈕的顯示
    updatePagination(page);
    //修改ID是currentPage的資料
    var currentPageElement = document.getElementById("currentPage");
    currentPageElement.innerHTML = page + "/" + Math.ceil(dataset.length / itemsPerPage);;
}

function updatePagination(page) {
    var totalPages = Math.ceil(dataset.length / itemsPerPage); // 計算總頁數

    var prevButton = document.getElementById("prevPage");
    var nextButton = document.getElementById("nextPage");

    // 更新上一頁按鈕的狀態
    if (page <= 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // 更新下一頁按鈕的狀態
    if (page >= totalPages) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable(currentPage);
    }
}

function goToNextPage() {
    var totalPages = Math.ceil(dataset.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable(currentPage);
    }
}

function delOldDate() {
    // 清空表格（保留表頭）
    var myTable = document.getElementById("csie");
    myTable.innerHTML = `
        <tr>
            <th>名稱</th>
            <th>地點</th>
            <th>票價</th>
        </tr>
    `;
    dataset = []; // 清空資料
}

//如果searchButton按下去，搜尋有searchInput的資料，searchInput是id
function search() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase(); // 取得搜尋關鍵字
    var filteredData = dataset.filter(function (data) {
        return data['title'].toLowerCase().includes(searchInput); // 過濾資料
    });
    dataset = filteredData; // 更新資料集為過濾後的資料
    currentPage = 1; // 重設頁碼為1
    renderTable(currentPage); // 渲染表格
}
function reset() {
    var searchInput = document.getElementById("searchInput");
    searchInput.value = ""; // 清空搜尋框
    delOldDate(); // 清空資料
    xhr.open('GET', openUrl, true); // 重新發送請求
    xhr.send();
}