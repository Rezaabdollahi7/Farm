/*
 How to use :
    1 create a button to html : 
        <button id="theme-toggle" class="p-2 bg-gray-300 dark:bg-gray-700">
             change theme
        </button>

    2 use 'dark' class to elements : 
      <div class="bg-white dark:bg-gray-900">
            <h1 class="text-black dark:text-white">Hello World </h1>
       </div>

    3 link this script to page    
*/


const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
}  