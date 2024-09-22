const paises = [
    { pais: "Afeganistão", moedaSigla: "AFN", faSigla: "AF" },
    { pais: "África do Sul", moedaSigla: "ZAR", faSigla: "ZA" },
    { pais: "Albânia", moedaSigla: "ALL", faSigla: "AL" },
    { pais: "Alemanha", moedaSigla: "EUR", faSigla: "DE" },
    { pais: "Andorra", moedaSigla: "EUR", faSigla: "AD" },
    { pais: "Angola", moedaSigla: "AOA", faSigla: "AO" },
    { pais: "Antígua e Barbuda", moedaSigla: "XCD", faSigla: "AG" },
    { pais: "Arábia Saudita", moedaSigla: "SAR", faSigla: "SA" },
    { pais: "Argentina", moedaSigla: "ARS", faSigla: "AR" },
    { pais: "Armênia", moedaSigla: "AMD", faSigla: "AM" },
    { pais: "Aruba", moedaSigla: "AWG", faSigla: "AW" },
    { pais: "Austrália", moedaSigla: "AUD", faSigla: "AU" },
    { pais: "Áustria", moedaSigla: "EUR", faSigla: "AT" },
    { pais: "Azerbaijão", moedaSigla: "AZN", faSigla: "AZ" },
    { pais: "Bahamas", moedaSigla: "BSD", faSigla: "BS" },
    { pais: "Bahrein", moedaSigla: "BHD", faSigla: "BH" },
    { pais: "Bangladesh", moedaSigla: "BDT", faSigla: "BD" },
    { pais: "Barbados", moedaSigla: "BBD", faSigla: "BB" },
    { pais: "Bélgica", moedaSigla: "EUR", faSigla: "BE" },
    { pais: "Belize", moedaSigla: "BZD", faSigla: "BZ" },
    { pais: "Benin", moedaSigla: "XOF", faSigla: "BJ" },
    { pais: "Botswana", moedaSigla: "BWP", faSigla: "BW" },
    { pais: "Brasil", moedaSigla: "BRL", faSigla: "BR" },
    { pais: "Brunei", moedaSigla: "BND", faSigla: "BN" },
    { pais: "Bulgária", moedaSigla: "BGN", faSigla: "BG" },
    { pais: "Burquina Faso", moedaSigla: "XOF", faSigla: "BF" },
    { pais: "Burundi", moedaSigla: "BIF", faSigla: "BI" },
    { pais: "Cabo Verde", moedaSigla: "CVE", faSigla: "CV" },
    { pais: "Camarões", moedaSigla: "XAF", faSigla: "CM" },
    { pais: "Canadá", moedaSigla: "CAD", faSigla: "CA" },
    { pais: "Chile", moedaSigla: "CLP", faSigla: "CL" },
    { pais: "China", moedaSigla: "CNY", faSigla: "CN" },
    { pais: "Colômbia", moedaSigla: "COP", faSigla: "CO" },
    { pais: "Coreia do Norte", moedaSigla: "KPW", faSigla: "KP" },
    { pais: "Coreia do Sul", moedaSigla: "KRW", faSigla: "KR" },
    { pais: "Costa Rica", moedaSigla: "CRC", faSigla: "CR" },
    { pais: "Croácia", moedaSigla: "HRK", faSigla: "HR" },
    { pais: "Cuba", moedaSigla: "CUP", faSigla: "CU" },
    { pais: "Dinamarca", moedaSigla: "DKK", faSigla: "DK" },
    { pais: "Dominica", moedaSigla: "XCD", faSigla: "DM" },
    { pais: "Egito", moedaSigla: "EGP", faSigla: "EG" },
    { pais: "El Salvador", moedaSigla: "USD", faSigla: "SV" },
    { pais: "Emirados Árabes Unidos", moedaSigla: "AED", faSigla: "AE" },
    { pais: "Equador", moedaSigla: "USD", faSigla: "EC" },
    { pais: "Espanha", moedaSigla: "EUR", faSigla: "ES" },
    { pais: "Estados Unidos", moedaSigla: "USD", faSigla: "US" },
    { pais: "Estônia", moedaSigla: "EUR", faSigla: "EE" },
    { pais: "Etiópia", moedaSigla: "ETB", faSigla: "ET" },
    { pais: "Fiji", moedaSigla: "FJD", faSigla: "FJ" },
    { pais: "Filipinas", moedaSigla: "PHP", faSigla: "PH" },
    { pais: "Finlândia", moedaSigla: "EUR", faSigla: "FI" },
    { pais: "França", moedaSigla: "EUR", faSigla: "FR" },
    { pais: "Gabão", moedaSigla: "XAF", faSigla: "GA" },
    { pais: "Gana", moedaSigla: "GHS", faSigla: "GH" },
    { pais: "Geórgia", moedaSigla: "GEL", faSigla: "GE" },
    { pais: "Grécia", moedaSigla: "EUR", faSigla: "GR" },
    { pais: "Guatemala", moedaSigla: "GTQ", faSigla: "GT" },
    { pais: "Guiana", moedaSigla: "GYD", faSigla: "GY" },
    { pais: "Haiti", moedaSigla: "HTG", faSigla: "HT" },
    { pais: "Holanda", moedaSigla: "EUR", faSigla: "NL" },
    { pais: "Honduras", moedaSigla: "HNL", faSigla: "HN" },
    { pais: "Hong Kong", moedaSigla: "HKD", faSigla: "HK" },
    { pais: "Hungria", moedaSigla: "HUF", faSigla: "HU" },
    { pais: "Islândia", moedaSigla: "ISK", faSigla: "IS" },
    { pais: "Índia", moedaSigla: "INR", faSigla: "IN" },
    { pais: "Indonésia", moedaSigla: "IDR", faSigla: "ID" },
    { pais: "Irã", moedaSigla: "IRR", faSigla: "IR" },
    { pais: "Iraque", moedaSigla: "IQD", faSigla: "IQ" },
    { pais: "Irlanda", moedaSigla: "EUR", faSigla: "IE" },
    { pais: "Israel", moedaSigla: "ILS", faSigla: "IL" },
    { pais: "Itália", moedaSigla: "EUR", faSigla: "IT" },
    { pais: "Jamaica", moedaSigla: "JMD", faSigla: "JM" },
    { pais: "Japão", moedaSigla: "JPY", faSigla: "JP" },
    { pais: "Jordânia", moedaSigla: "JOD", faSigla: "JO" },
    { pais: "Letônia", moedaSigla: "EUR", faSigla: "LV" },
    { pais: "Líbano", moedaSigla: "LBP", faSigla: "LB" },
    { pais: "Libéria", moedaSigla: "LRD", faSigla: "LR" },
    { pais: "Lituânia", moedaSigla: "EUR", faSigla: "LT" },
    { pais: "Luxemburgo", moedaSigla: "EUR", faSigla: "LU" },
    { pais: "Macau", moedaSigla: "MOP", faSigla: "MO" },
    { pais: "Macedônia", moedaSigla: "MKD", faSigla: "MK" },
    { pais: "Madagascar", moedaSigla: "MGA", faSigla: "MG" },
    { pais: "Malásia", moedaSigla: "MYR", faSigla: "MY" },
    { pais: "Malta", moedaSigla: "EUR", faSigla: "MT" },
    { pais: "Marrocos", moedaSigla: "MAD", faSigla: "MA" },
    { pais: "México", moedaSigla: "MXN", faSigla: "MX" },
    { pais: "Moçambique", moedaSigla: "MZN", faSigla: "MZ" },
    { pais: "Mônaco", moedaSigla: "EUR", faSigla: "MC" },
    { pais: "Mongólia", moedaSigla: "MNT", faSigla: "MN" },
    { pais: "Montenegro", moedaSigla: "EUR", faSigla: "ME" },
    { pais: "Myanmar", moedaSigla: "MMK", faSigla: "MM" },
    { pais: "Namíbia", moedaSigla: "NAD", faSigla: "NA" },
    { pais: "Nepal", moedaSigla: "NPR", faSigla: "NP" },
    { pais: "Nicarágua", moedaSigla: "NIO", faSigla: "NI" },
    { pais: "Níger", moedaSigla: "XOF", faSigla: "NE" },
    { pais: "Nigéria", moedaSigla: "NGN", faSigla: "NG" },
    { pais: "Noruega", moedaSigla: "NOK", faSigla: "NO" },
    { pais: "Nova Zelândia", moedaSigla: "NZD", faSigla: "NZ" },
    { pais: "Omã", moedaSigla: "OMR", faSigla: "OM" },
    { pais: "Países Baixos", moedaSigla: "EUR", faSigla: "NL" },
    { pais: "Paquistão", moedaSigla: "PKR", faSigla: "PK" },
    { pais: "Panamá", moedaSigla: "PAB", faSigla: "PA" },
    { pais: "Papua Nova Guiné", moedaSigla: "PGK", faSigla: "PG" },
    { pais: "Paraguai", moedaSigla: "PYG", faSigla: "PY" },
    { pais: "Peru", moedaSigla: "PEN", faSigla: "PE" },
    { pais: "Polônia", moedaSigla: "PLN", faSigla: "PL" },
    { pais: "Portugal", moedaSigla: "EUR", faSigla: "PT" },
    { pais: "Qatar", moedaSigla: "QAR", faSigla: "QA" },
    { pais: "Reino Unido", moedaSigla: "GBP", faSigla: "GB" },
    { pais: "República Centro-Africana", moedaSigla: "XAF", faSigla: "CF" },
    { pais: "República Democrática do Congo", moedaSigla: "CDF", faSigla: "CD" },
    { pais: "República Dominicana", moedaSigla: "DOP", faSigla: "DO" },
    { pais: "República Tcheca", moedaSigla: "CZK", faSigla: "CZ" },
    { pais: "Romênia", moedaSigla: "RON", faSigla: "RO" },
    { pais: "Ruanda", moedaSigla: "RWF", faSigla: "RW" },
    { pais: "Rússia", moedaSigla: "RUB", faSigla: "RU" },
    { pais: "Samoa", moedaSigla: "WST", faSigla: "WS" },
    { pais: "Senegal", moedaSigla: "XOF", faSigla: "SN" },
    { pais: "Serra Leoa", moedaSigla: "SLL", faSigla: "SL" },
    { pais: "Sérvia", moedaSigla: "RSD", faSigla: "RS" },
    { pais: "Singapura", moedaSigla: "SGD", faSigla: "SG" },
    { pais: "Síria", moedaSigla: "SYP", faSigla: "SY" },
    { pais: "Somália", moedaSigla: "SOS", faSigla: "SO" },
    { pais: "Sri Lanka", moedaSigla: "LKR", faSigla: "LK" },
    { pais: "Suécia", moedaSigla: "SEK", faSigla: "SE" },
    { pais: "Suíça", moedaSigla: "CHF", faSigla: "CH" },
    { pais: "Suriname", moedaSigla: "SRD", faSigla: "SR" },
    { pais: "Tailândia", moedaSigla: "THB", faSigla: "TH" },
    { pais: "Tanzânia", moedaSigla: "TZS", faSigla: "TZ" },
    { pais: "Timor-Leste", moedaSigla: "USD", faSigla: "TL" },
    { pais: "Togo", moedaSigla: "XOF", faSigla: "TG" },
    { pais: "Tonga", moedaSigla: "TOP", faSigla: "TO" },
    { pais: "Trinidad e Tobago", moedaSigla: "TTD", faSigla: "TT" },
    { pais: "Tunísia", moedaSigla: "TND", faSigla: "TN" },
    { pais: "Turquia", moedaSigla: "TRY", faSigla: "TR" },
    { pais: "Turquemenistão", moedaSigla: "TMT", faSigla: "TM" },
    { pais: "Ucrânia", moedaSigla: "UAH", faSigla: "UA" },
    { pais: "Uganda", moedaSigla: "UGX", faSigla: "UG" },
    { pais: "Uruguai", moedaSigla: "UYU", faSigla: "UY" },
    { pais: "Uzbequistão", moedaSigla: "UZS", faSigla: "UZ" },
    { pais: "Vanuatu", moedaSigla: "VUV", faSigla: "VU" },
    { pais: "Vaticano", moedaSigla: "EUR", faSigla: "VA" },
    { pais: "Venezuela", moedaSigla: "VES", faSigla: "VE" },
    { pais: "Vietnã", moedaSigla: "VND", faSigla: "VN" },
    { pais: "Zâmbia", moedaSigla: "ZMW", faSigla: "ZM" },
    { pais: "Zimbábue", moedaSigla: "ZWL", faSigla: "ZW" }
    ]

        let moedaDe = "BRL";
        let moedaPara = "USD";
    
        let taxaConversao = null;

        let input = document.querySelector("#input");
        let output = document.querySelector("#resultado");
    
        let botao = document.querySelector(".inverter");
        botao.addEventListener("click", swap);
        
        function swap() {
        
            let flag1 = document.querySelector("#flag1");
            let flag2 = document.querySelector("#flag2");
            let selectPais1 = document.querySelector("#pais1");
            let selectPais2 = document.querySelector("#pais2");
        
            let tempFlagSrc = flag1.src;
            let tempPaisSelecionado = selectPais1.value;
            let moedaTemp = moedaDe;

            moedaDe = moedaPara;
            moedaPara = moedaTemp
        
            console.log("moeda de " + moedaDe)
            console.log("moeda para " + moedaPara)

            flag1.src = flag2.src;
            flag2.src = tempFlagSrc;
        
            selectPais1.value = selectPais2.value;
            selectPais2.value = tempPaisSelecionado;
        }  
    
        const listaPaises1 = document.getElementById("pais1");
        const listaPaises2 = document.getElementById("pais2");
        
        for (let i = 0; i < paises.length; i++) {
            let option1 = new Option(`${paises[i].pais} (${paises[i].moedaSigla})`);
            listaPaises1.options[listaPaises1.options.length] = option1;
            option1.value = paises[i].faSigla;
        
            let option2 = new Option(`${paises[i].pais} (${paises[i].moedaSigla})`);
            listaPaises2.options[listaPaises2.options.length] = option2;
            option2.value = paises[i].faSigla;
        }
    
        function trocarBandeira(selectPais, imgBandeira) {
            const siglaPais = selectPais.value;
            imgBandeira.src = `https://flagsapi.com/${siglaPais}/flat/64.png`;
        }
    
        document.getElementById("pais1").addEventListener("change", function() {
            let pais1 = document.getElementById("pais1");
            trocarBandeira(pais1, document.getElementById("flag1"));
        });
            
        document.getElementById("pais2").addEventListener("change", function() {
            let pais2 = document.getElementById("pais2");
            trocarBandeira(pais2, document.getElementById("flag2"));
        }); 
    
    
        function obterMoedaSigla(paisSigla) {
            const pais = paises.find(p => p.faSigla === paisSigla);
            if (pais) {
                return pais.moedaSigla;
            } else {
                console.log("País não encontrado para a sigla:", paisSigla);
                return null;
            }
        }
        
        document.getElementById("pais1").addEventListener("change", function() {
            const siglaPais1 = this.value;
            moedaDe = obterMoedaSigla(siglaPais1);
            console.log("Moeda de:", moedaDe);
        });
        
        document.getElementById("pais2").addEventListener("change", function() {
            const siglaPais2 = this.value;
            moedaPara = obterMoedaSigla(siglaPais2);
            console.log("Moeda para:", moedaPara);
        });
        

        async function pegarTaxaConversao (moedaDe, moedaPara) {
    
            let moedasRequest = moedaDe+"-"+moedaPara;
            let url = "https://economia.awesomeapi.com.br/last/"+moedasRequest;
            let moedasJson = moedaDe+moedaPara;
            const request = new Request(url) ;
            
            const result = await fetch(request)
            dados = await result.json()
            taxaConversao = await dados[moedasJson].ask;
            console.log(taxaConversao)
        }

        async function converter() {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/505b62a422c02bafee92d516/latest/${moedaDe}`);
            const data = await response.json();

            taxaConversao = data.conversion_rates[moedaPara];

            let valorConvertido = input.value * taxaConversao;

            document.querySelector(".resultado").textContent = `${input.value} ${moedaDe} = ${valorConvertido.toFixed(4)} ${moedaPara}`;
            
        }





        