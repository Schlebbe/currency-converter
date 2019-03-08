let api = (function () {
    async function getData() {
        let url = "https://openexchangerates.org/api/latest.json?app_id=548eceb07c57435397f105655e9f882c";
        let result = await fetchData(url);

        let hour = 3600*1000;
        setTimeout(getData, hour);
        let rates = JSON.stringify(result.rates);
        setCookie(rates)
    }

    function setCookie(cookie) {
        sessionStorage.setItem("rates", cookie);
    }

    function getCookie(cookie) {
        return JSON.parse(sessionStorage.getItem(cookie));
    }

    async function fetchData(url) {
        let promise = await fetch(url);
        let data = await promise.json();
        return data;
    }
    
    return {
        getData: getData,
        setCookie: setCookie,
        getCookie: getCookie
    }
})();
