const inputBox = document.querySelector('.input-container input');
const executeButton = document.querySelector('.execute-button');
const heroSubContainer = document.querySelector('.hero-sub-container');

let queryNumber = 0;

const loaderTemplate = `
    <div class="loader-container">
        <div class="start-loader">
            <img src="./assests/reload.svg" alt="Loader" class="start-loading">
        </div>
        <div class="loading-loader hidden">
            <img src="./assests/loading-loader.svg" alt="loading" class="spin-loader">
        </div>
        <div class="completed-loader hidden">
            <img src="./assests/completed-loader.svg" alt="loading">
        </div>
    </div>
`;

const handleLoading = (newQueryContainer) => {
    const startLoader = newQueryContainer.querySelector(".start-loader");
    const loadingLoader = newQueryContainer.querySelector(".loading-loader");
    const completedLoader = newQueryContainer.querySelector(".completed-loader");
    const startLoading = newQueryContainer.querySelector(".start-loading");
    
    startLoading.classList.add("spin-loader");

    setTimeout(() => {
        startLoader.classList.add("hidden");
        loadingLoader.classList.remove("hidden");
        setTimeout(() => {
            loadingLoader.classList.add("hidden");
            completedLoader.classList.remove("hidden");
        }, 10000); 
    }, 10000); 
}

heroSubContainer.addEventListener('click', function(event) {
    const target = event.target;
    if (target && target.classList.contains('start-loader')) {
        const newQueryContainer = target.closest('.query-container');
        handleLoading(newQueryContainer);
    }
});

executeButton.addEventListener('click', function () {
    const queryText = inputBox.value.trim();

    if (queryText !== '') {
        queryNumber++;

        const newQueryContainer = document.createElement('div');
        newQueryContainer.classList.add('query-container');
        newQueryContainer.innerHTML = `
            <span class="query-number">${queryNumber}</span>
            <p class="query-text">${queryText}</p>
            ${loaderTemplate}
        `;

        heroSubContainer.appendChild(newQueryContainer);
        inputBox.value = '';

        newQueryContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
});
