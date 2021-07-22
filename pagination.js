var current_page = 1;
var records_per_page = 3;

var objJson =[
    { name :"1. The purpose of our lives is to be happy. — Dalai Lama"},
    {name : "2. Life is what happens when you’re busy making other plans. — John Lennon"},
    {name : "3. Get busy living or get busy dying. — Stephen King"},

    {name : "4. You only live once, but if you do it right, once is enough. — Mae West"},

    {name : "5. Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison"},
    {name : "6. If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein"},

    {name : "7. Never let the fear of striking out keep you from playing the game.– Babe Ruth"},

    {name : "8. Money and success don’t change people; they merely amplify what is already there. — Will Smith"},

    {name : "9. Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs"},
    {name : "10. Not how long, but how well you have lived is the main thing. — Seneca"},
    {name : "11. If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt"},

    {name : "12. The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.– Henry Ford"},

    {name : "13. In order to write about life first you must live it.– Ernest Hemingway"},

    {name : "14. The big lesson in life, baby, is never be scared of anyone or anything.– Frank Sinatra"},
    {name : "15. Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.– (Attributed to various sources)"},
];

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function first()
{
    if (current_page = 1) {
        changePage(current_page);
    }
}

function second()
{
    if (current_page = 2) {
        changePage(current_page);
    }
}

function third()
{
    if (current_page = 3) {
        changePage(current_page);
    }
}

function four()
{
    if (current_page = 4) {
        changePage(current_page);
    }
}

function five()
{
    if (current_page = 5) {
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_first = document.getElementById("btn_first");
    var btn_second = document.getElementById("btn_second");
    var btn_third = document.getElementById("btn_third");
    var btn_four = document.getElementById("btn_four");
    var btn_five = document.getElementById("btn_five");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");
 
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
        listing_table.innerHTML += objJson[i].name +"<br>" ;
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == 1) {
        btn_first.style.color = "rgba(0,0,0,.87)";
    } else {
        btn_first.style.color ="#4285f4"
    }

    if (page == 2) {
        btn_second.style.color = "rgba(0,0,0,.87)";
    } else {
        btn_second.style.color ="#4285f4"
    }

    if (page == 3) {
        btn_third.style.color = "rgba(0,0,0,.87)";
    } else {
        btn_third.style.color ="#4285f4"
    }

    if (page == 4) {
        btn_four.style.color = "rgba(0,0,0,.87)";
    } else {
        btn_four.style.color ="#4285f4"
    }

    if (page == 5) {
        btn_five.style.color = "rgba(0,0,0,.87)";
    } else {
        btn_five.style.color ="#4285f4"
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};