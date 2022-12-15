class SearchView {
    #parentElement = document.querySelector('.search');

    getQuery() {
        const query = this.#parentElement.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    };
    #clearInput() {
        return this.#parentElement.querySelector('.search__field').value = '';
    };
    addHandlerSearch(handler) {
        this.#parentElement.addEventListener('submit', function (e) {
            e.preventDefault();
            handler() // passed in constrolSearchResults() from controller
        })
    };
}

export default new SearchView();