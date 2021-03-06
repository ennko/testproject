let Data ={
    "Global": {
        "NewConfirmed" :  898800,
        "TotalConfirmed" : 876699877,
        "NewDeaths" : 3455,
        "TotalDeaths" : 344,
        "NewRecovered" : 46780,
        "TotalRecovered" : 2890086
    },
    "Countries" : {
        "countriesRoute": {
            "Name": "Get List Of Countries",
            "Description": "Returns all countries and associated provinces. The country_slug variable is used for country specific data",
            "Path": "/countries"
        },
        "countryDayOneRoute": {
            "Name": "Get List Of Cases Per Country Per Province By Case Type From The First Recorded Case",
            "Description": "Returns all cases by case type for a country from the first recorded case. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/dayone/country/:country"
        },
        "countryDayOneTotalRoute": {
            "Name": "Get List Of Cases Per Country By Case Type From The First Recorded Case",
            "Description": "Returns all cases by case type for a country from the first recorded case. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/total/dayone/country/:country"
        },
        "countryRoute": {
            "Name": "Get List Of Cases Per Country Per Province By Case Type",
            "Description": "Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/country/:country"
        },
        "countryRoutePremium": {
            "Name": "Premium Data: Get List Of Cases Per Country By Case Type",
            "Description": "Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/premium/country/:country"
        },
        "countryRoutePremiumData": {
            "Name": "Premium Data: Get Data Per Country",
            "Description": "Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/premium/country/data/:country"
        },
        "countryStatusDayOneLiveRoute": {
            "Name": "Get List Of Cases Per Country Per Province By Case Type From The First Recorded Case, updated with latest live count",
            "Description": "Returns all cases by case type for a country from the first recorded case with the latest record being the live count. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/dayone/country/:country/status/:status/live"
        },
        "countryStatusDayOneRoute": {
            "Name": "Get List Of Cases Per Country Per Province By Case Type From The First Recorded Case",
            "Description": "Returns all cases by case type for a country from the first recorded case. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/dayone/country/:country/status/:status"
        },
        "countryStatusDayOneTotalRoute": {
            "Name": "Get List Of Cases Per Country By Case Type From The First Recorded Case",
            "Description": "Returns all cases by case type for a country from the first recorded case. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/total/dayone/country/:country/status/:status"
        },
        "countryStatusLiveRoute": {
            "Name": "Daily list of cases per Country per Province by Case Type, updated with latest live count",
            "Description": "Returns all cases by case type for a country with the latest record being the live count. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/country/:country/status/:status/live"
        },
        "countryStatusRoute": {
            "Name": "Get List Of Cases Per Country Per Province By Case Type",
            "Description": "Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/country/:country/status/:status"
        },
        "countryStatusTotalRoute": {
            "Name": "Get List Of Cases Per Country By Case Type",
            "Description": "Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/total/country/:country/status/:status"
        },
        "countrySummaryRoutePremium": {
            "Name": "Premium Data: Get Summary Of World Case Data",
            "Description": "Returns summary of all country data",
            "Path": "/premium/summary"
        },
        "countryTestingPremium": {
            "Name": "Premium Data: Get Testing Data Per Country",
            "Description": "Get data around testing",
            "Path": "/premium/country/testing/:country"
        },
        "countryTotalRoute": {
            "Name": "Get List Of Cases Per Country By Case Type",
            "Description": "Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/total/country/:country"
        },
        "exportRoute": {
            "Name": "Get All Data as a zip file",
            "Description": "Returns all data in the system, compressed as a zip file. Warning: this request returns 8MB+ and takes 5+ seconds",
            "Path": "/export"
        },
        "liveCountryRoute": {
            "Name": "Get Live List Of Cases Per Country Per Province By Case Type",
            "Description": "Returns all live cases by case type for a country. These records are pulled every 10 minutes and are ungrouped. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/live/country/:country"
        },
        "liveCountryStatusAfterDateRoute": {
            "Name": "Get a Time Series Of Cases Per Country Per Province By Case Type After A Date",
            "Description": "Returns all live cases by case type for a country after a given date. These records are pulled every 10 minutes and are ungrouped. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/live/country/:country/status/:status/date/:date"
        },
        "liveCountryStatusRoute": {
            "Name": "Get a time series Of Cases Per Country Per Province By Case Type",
            "Description": "Returns all live cases by case type for a country. These records are pulled every 10 minutes and are ungrouped. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/live/country/:country/status/:status"
        },
        "summaryRoute": {
            "Name": "Summary of new and total cases per country",
            "Description": "A summary of new and total cases per country",
            "Path": "/summary"
        },
        "travelAdvicePremium": {
            "Name": "Premium Data: Travel information for a given country",
            "Description": "Returns all cases by case type for a country. Country must be the country_slug from /countries. Cases must be one of: confirmed, recovered, deaths",
            "Path": "/premium/travel/country/:country"
        },
        "webhookRoute": {
            "Name": "Add a webhook to be notified when new data becomes available",
            "Description": "POST Request must be in JSON format with key URL and the value of the webhook. Response data is the same as returned from /summary",
            "Path": "/webhook"
        }
    }

}