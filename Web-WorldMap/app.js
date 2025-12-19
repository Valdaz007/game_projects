countryCode = `[{"AD":"Andorra"},{"AE":"United Arab Emirates"},{"AF":"Afghnistan"},{"AG":"Antigua & Barbuda"},
                {"AI":"Anguilla"},{"AL":"Albanida"},{"AM":"Armenia"},{"AN":"Netherland Antilles"},{"AO":"Angola"},
                {"AQ":"Antarctica"},{"AR":"Argentina"},{"AS":"America Somoa"},{"AT":"Austria"},{"AU":"Australia"},
                {"AW":"Aruba"},{"AX":"Aland Islands"},{"AZ":"Azerbaijan"},{"BA": "Bosnia and Herzegovina"},
                {"BB": "Barbados"},{"BD": "Bangladesh"},{"BE": "Belgium"},{"BF": "Burkina Faso"},{"BG": "Bulgaria"},
                {"BH": "Bahrain"},{"BI": "Benin"},{"BJ": "Saint Barthelemy"},{"BM": "Bermuda"},{"BN": "Brunei Darussalam"},
                {"BO": "Bolivia"},{"BR": "Brazil"},{"BS": "Bahamas"},{"BT": "Bhutan"},{"BW": "Botswana"},{"BY": "Belarus"},
                {"BZ": "Belize"},{"CA": "Canada"},{"CC": "Cocos (Keeling) Islands"},
                {"CD": "Rebublic Democratic Republic of Congo"},{"CF": "Central African Republic"},{"CG": "Congo"},
                {"CH": "Switzerland"},{"CI": "Cote Dloire"},{"CK": "Cook Islands"},{"CL": "Chile"},{"CM": "Cameroon"},
                {"CN": "China"},{"CO": "Colombia"},{"CR": "Costa Rica"},{"CU": "Cuba"},{"CV": "Cape Verde"},{"CW": "Curacoa"},
                {"CX": "Christmas Island"},{"CY": "Cyprus"},{"CZ": "Czech Republic"}]`
countryCode = JSON.parse(countryCode)

countryCode.forEach((i)=>{
    $('.flags').append(`
        <img src='https://flagsapi.com/${Object.keys(i).join('')}/flat/64.png'>
    `)
})