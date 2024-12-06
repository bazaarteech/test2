
        const translationsUrl = "https://raw.githubusercontent.com/bazaarteech/test1/refs/heads/main/test1.json"; // رابط ملف JSON

        fetch("https://ipinfo.io/json?token=7026faa1150bfd")
            .then(response => response.json())
            .then(data => {
                const language = getLanguageByCountry(data.country);
                applyTranslations(language);
            })
            .catch(error => console.error("Error fetching location data:", error));

        function getLanguageByCountry(country) {
            const countryLangMap = {
                "MA": "ar",
                "US": "en",
                "ES": "es",
                "FR": "fr"
            };
            return countryLangMap[country] || "en";
        }

        function applyTranslations(lang) {
            fetch(translationsUrl)
                .then(response => response.json())
                .then(translations => {
                    const texts = translations[lang];
                    if (!texts) return;

                    document.getElementById("subscriptionTitle").textContent = texts.subscriptionTitle;
                    document.getElementById("freeGift1").textContent = texts.freeGift;
                    document.getElementById("freeGift2").textContent = texts.freeGift;
                    document.getElementById("freeGift3").textContent = texts.freeGift;
                    document.getElementById("freeGift4").textContent = texts.freeGift;
                    document.getElementById("freeGift6").textContent = texts.freeGift;
                    document.getElementById("freeGift12").textContent = texts.freeGift;

                    document.getElementById("duration1").textContent = texts.duration["1_month"];
                    document.getElementById("duration2").textContent = texts.duration["2_months"];
                    document.getElementById("duration3").textContent = texts.duration["3_months"];
                    document.getElementById("duration4").textContent = texts.duration["4_months"];
                    document.getElementById("duration6").textContent = texts.duration["6_months"];
                    document.getElementById("duration12").textContent = texts.duration["12_months"];
              
                    document.getElementById("addToCartButton").textContent = texts.addToCartButton;
                    document.getElementById("popularBadge").textContent = texts.popular;
                })
                .catch(error => console.error("Error fetching translations:", error));
        }
                  

                    

              
              
              
                    

     
              
