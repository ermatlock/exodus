let city = "buffalo"

export const queries = {
  allUrbanAreas: "https://api.teleport.org/api/urban_areas/",
  urbanAreaId: `https://api.teleport.org/api/urban_areas/slug:${city}`,
  urbanAreaDetails: `https://api.teleport.org/api/urban_areas/slug:${city}/details`,
  urbanAreaSuburbs: `https://api.teleport.org/api/urban_areas/slug:${city}/cities`,
  urbanAreaImages: `https://api.teleport.org/api/urban_areas/slug:${city}/images`,
  urbanAreaSalaries: `https://api.teleport.org/api/urban_areas/slug:${city}/salaries`,
  urbanAreaScores: `https://api.teleport.org/api/urban_areas/slug:${city}/scores`,
  
}

export const cityNames = [
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:aarhus/",
      "name": "Aarhus"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:adelaide/",
      "name": "Adelaide"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:albuquerque/",
      "name": "Albuquerque"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:almaty/",
      "name": "Almaty"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:amsterdam/",
      "name": "Amsterdam"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:anchorage/",
      "name": "Anchorage"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:andorra/",
      "name": "Andorra"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:ankara/",
      "name": "Ankara"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:asheville/",
      "name": "Asheville"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:asuncion/",
      "name": "Asuncion"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:athens/",
      "name": "Athens"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:atlanta/",
      "name": "Atlanta"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:auckland/",
      "name": "Auckland"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:austin/",
      "name": "Austin"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:baku/",
      "name": "Baku"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bali/",
      "name": "Bali"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:baltimore/",
      "name": "Baltimore"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bangkok/",
      "name": "Bangkok"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:barcelona/",
      "name": "Barcelona"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:beijing/",
      "name": "Beijing"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:beirut/",
      "name": "Beirut"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:belfast/",
      "name": "Belfast"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:belgrade/",
      "name": "Belgrade"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:belize-city/",
      "name": "Belize City"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bengaluru/",
      "name": "Bengaluru"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bergen/",
      "name": "Bergen"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:berlin/",
      "name": "Berlin"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bern/",
      "name": "Bern"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bilbao/",
      "name": "Bilbao"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:birmingham/",
      "name": "Birmingham"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:birmingham-al/",
      "name": "Birmingham, AL"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bogota/",
      "name": "Bogota"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:boise/",
      "name": "Boise"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bologna/",
      "name": "Bologna"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bordeaux/",
      "name": "Bordeaux"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:boston/",
      "name": "Boston"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:boulder/",
      "name": "Boulder"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bozeman/",
      "name": "Bozeman"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bratislava/",
      "name": "Bratislava"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:brighton/",
      "name": "Brighton"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:brisbane/",
      "name": "Brisbane"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bristol/",
      "name": "Bristol"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:brno/",
      "name": "Brno"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:brussels/",
      "name": "Brussels"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:bucharest/",
      "name": "Bucharest"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:budapest/",
      "name": "Budapest"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:buenos-aires/",
      "name": "Buenos Aires"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:buffalo/",
      "name": "Buffalo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cairo/",
      "name": "Cairo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:calgary/",
      "name": "Calgary"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cambridge/",
      "name": "Cambridge"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cape-town/",
      "name": "Cape Town"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:caracas/",
      "name": "Caracas"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cardiff/",
      "name": "Cardiff"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:casablanca/",
      "name": "Casablanca"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:charleston/",
      "name": "Charleston"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:charlotte/",
      "name": "Charlotte"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:chattanooga/",
      "name": "Chattanooga"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:chennai/",
      "name": "Chennai"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:chiang-mai/",
      "name": "Chiang Mai"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:chicago/",
      "name": "Chicago"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:chisinau/",
      "name": "Chisinau"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:christchurch/",
      "name": "Christchurch"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cincinnati/",
      "name": "Cincinnati"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cleveland/",
      "name": "Cleveland"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cluj-napoca/",
      "name": "Cluj-Napoca"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cologne/",
      "name": "Cologne"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:colorado-springs/",
      "name": "Colorado Springs"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:columbus/",
      "name": "Columbus"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:copenhagen/",
      "name": "Copenhagen"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:cork/",
      "name": "Cork"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:curitiba/",
      "name": "Curitiba"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:dallas/",
      "name": "Dallas"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:dar-es-salaam/",
      "name": "Dar es Salaam"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:delhi/",
      "name": "Delhi"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:denver/",
      "name": "Denver"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:des-moines/",
      "name": "Des Moines"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:detroit/",
      "name": "Detroit"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:doha/",
      "name": "Doha"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:dresden/",
      "name": "Dresden"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:dubai/",
      "name": "Dubai"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:dublin/",
      "name": "Dublin"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:dusseldorf/",
      "name": "Dusseldorf"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:edinburgh/",
      "name": "Edinburgh"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:edmonton/",
      "name": "Edmonton"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:eindhoven/",
      "name": "Eindhoven"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:eugene/",
      "name": "Eugene"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:florence/",
      "name": "Florence"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:florianopolis/",
      "name": "Florianopolis"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:fort-collins/",
      "name": "Fort Collins"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:frankfurt/",
      "name": "Frankfurt"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:fukuoka/",
      "name": "Fukuoka"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:gaillimh/",
      "name": "Galway"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:gdansk/",
      "name": "Gdansk"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:geneva/",
      "name": "Geneva"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:gibraltar/",
      "name": "Gibraltar"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:glasgow/",
      "name": "Glasgow"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:gothenburg/",
      "name": "Gothenburg"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:grenoble/",
      "name": "Grenoble"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:guadalajara/",
      "name": "Guadalajara"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:guatemala-city/",
      "name": "Guatemala City"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:halifax/",
      "name": "Halifax"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:hamburg/",
      "name": "Hamburg"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:hannover/",
      "name": "Hannover"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:havana/",
      "name": "Havana"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:helsinki/",
      "name": "Helsinki"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:ho-chi-minh-city/",
      "name": "Ho Chi Minh City"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:hong-kong/",
      "name": "Hong Kong"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:honolulu/",
      "name": "Honolulu"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:houston/",
      "name": "Houston"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:hyderabad/",
      "name": "Hyderabad"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:indianapolis/",
      "name": "Indianapolis"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:innsbruck/",
      "name": "Innsbruck"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:istanbul/",
      "name": "Istanbul"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:jacksonville/",
      "name": "Jacksonville"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:jakarta/",
      "name": "Jakarta"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:johannesburg/",
      "name": "Johannesburg"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:kansas-city/",
      "name": "Kansas City"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:karlsruhe/",
      "name": "Karlsruhe"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:kathmandu/",
      "name": "Kathmandu"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:kiev/",
      "name": "Kiev"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:kingston/",
      "name": "Kingston"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:knoxville/",
      "name": "Knoxville"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:krakow/",
      "name": "Krakow"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:kuala-lumpur/",
      "name": "Kuala Lumpur"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:kyoto/",
      "name": "Kyoto"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:lagos/",
      "name": "Lagos"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:la-paz/",
      "name": "La Paz"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:las-palmas-de-gran-canaria/",
      "name": "Las Palmas de Gran Canaria"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:las-vegas/",
      "name": "Las Vegas"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:lausanne/",
      "name": "Lausanne"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:leeds/",
      "name": "Leeds"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:leipzig/",
      "name": "Leipzig"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:lille/",
      "name": "Lille"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:lima/",
      "name": "Lima"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:lisbon/",
      "name": "Lisbon"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:liverpool/",
      "name": "Liverpool"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:ljubljana/",
      "name": "Ljubljana"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:london/",
      "name": "London"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:los-angeles/",
      "name": "Los Angeles"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:louisville/",
      "name": "Louisville"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:luxembourg/",
      "name": "Luxembourg"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:lviv/",
      "name": "Lviv"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:lyon/",
      "name": "Lyon"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:madison/",
      "name": "Madison"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:madrid/",
      "name": "Madrid"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:malaga/",
      "name": "Malaga"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:malmo/",
      "name": "Malmo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:managua/",
      "name": "Managua"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:manchester/",
      "name": "Manchester"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:manila/",
      "name": "Manila"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:marseille/",
      "name": "Marseille"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:medellin/",
      "name": "Medellin"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:melbourne/",
      "name": "Melbourne"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:memphis/",
      "name": "Memphis"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:mexico-city/",
      "name": "Mexico City"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:miami/",
      "name": "Miami"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:milan/",
      "name": "Milan"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:milwaukee/",
      "name": "Milwaukee"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:minneapolis-saint-paul/",
      "name": "Minneapolis-Saint Paul"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:minsk/",
      "name": "Minsk"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:montevideo/",
      "name": "Montevideo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:montreal/",
      "name": "Montreal"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:moscow/",
      "name": "Moscow"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:mumbai/",
      "name": "Mumbai"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:munich/",
      "name": "Munich"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:nairobi/",
      "name": "Nairobi"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:nantes/",
      "name": "Nantes"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:naples/",
      "name": "Naples"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:nashville/",
      "name": "Nashville"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:new-orleans/",
      "name": "New Orleans"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:new-york/",
      "name": "New York"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:nice/",
      "name": "Nice"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:nicosia/",
      "name": "Nicosia"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:oklahoma-city/",
      "name": "Oklahoma City"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:omaha/",
      "name": "Omaha"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:orlando/",
      "name": "Orlando"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:osaka/",
      "name": "Osaka"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:oslo/",
      "name": "Oslo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:ottawa/",
      "name": "Ottawa"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:oulu/",
      "name": "Oulu"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:oxford/",
      "name": "Oxford"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:palo-alto/",
      "name": "Palo Alto"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:panama/",
      "name": "Panama"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:paris/",
      "name": "Paris"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:perth/",
      "name": "Perth"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:philadelphia/",
      "name": "Philadelphia"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:phnom-penh/",
      "name": "Phnom Penh"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:phoenix/",
      "name": "Phoenix"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:phuket/",
      "name": "Phuket"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:pittsburgh/",
      "name": "Pittsburgh"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:portland-me/",
      "name": "Portland, ME"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:portland-or/",
      "name": "Portland, OR"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:porto/",
      "name": "Porto"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:porto-alegre/",
      "name": "Porto Alegre"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:prague/",
      "name": "Prague"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:providence/",
      "name": "Providence"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:quebec/",
      "name": "Quebec"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:quito/",
      "name": "Quito"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:raleigh/",
      "name": "Raleigh"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:reykjavik/",
      "name": "Reykjavik"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:richmond/",
      "name": "Richmond"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:riga/",
      "name": "Riga"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:rio-de-janeiro/",
      "name": "Rio De Janeiro"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:riyadh/",
      "name": "Riyadh"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:rochester/",
      "name": "Rochester"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:rome/",
      "name": "Rome"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:rotterdam/",
      "name": "Rotterdam"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:saint-petersburg/",
      "name": "Saint Petersburg"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:salt-lake-city/",
      "name": "Salt Lake City"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:san-antonio/",
      "name": "San Antonio"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:san-diego/",
      "name": "San Diego"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/",
      "name": "San Francisco Bay Area"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:san-jose/",
      "name": "San Jose"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:san-juan/",
      "name": "San Juan"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:san-luis-obispo/",
      "name": "San Luis Obispo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:san-salvador/",
      "name": "San Salvador"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:santiago/",
      "name": "Santiago"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:santo-domingo/",
      "name": "Santo Domingo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:sao-paulo/",
      "name": "Sao Paulo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:sarajevo/",
      "name": "Sarajevo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:saskatoon/",
      "name": "Saskatoon"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:seattle/",
      "name": "Seattle"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:seoul/",
      "name": "Seoul"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:seville/",
      "name": "Seville"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:shanghai/",
      "name": "Shanghai"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:singapore/",
      "name": "Singapore"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:skopje/",
      "name": "Skopje"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:sofia/",
      "name": "Sofia"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:st-louis/",
      "name": "St. Louis"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:stockholm/",
      "name": "Stockholm"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:stuttgart/",
      "name": "Stuttgart"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:sydney/",
      "name": "Sydney"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:taipei/",
      "name": "Taipei"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tallinn/",
      "name": "Tallinn"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/",
      "name": "Tampa Bay Area"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tampere/",
      "name": "Tampere"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tartu/",
      "name": "Tartu"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tashkent/",
      "name": "Tashkent"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tbilisi/",
      "name": "Tbilisi"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tehran/",
      "name": "Tehran"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tel-aviv/",
      "name": "Tel Aviv"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:the-hague/",
      "name": "The Hague"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:thessaloniki/",
      "name": "Thessaloniki"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tokyo/",
      "name": "Tokyo"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:toronto/",
      "name": "Toronto"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:toulouse/",
      "name": "Toulouse"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:tunis/",
      "name": "Tunis"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:turin/",
      "name": "Turin"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:turku/",
      "name": "Turku"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:uppsala/",
      "name": "Uppsala"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:utrecht/",
      "name": "Utrecht"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:valencia/",
      "name": "Valencia"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:valletta/",
      "name": "Valletta"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:vancouver/",
      "name": "Vancouver"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:victoria/",
      "name": "Victoria"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:vienna/",
      "name": "Vienna"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:vilnius/",
      "name": "Vilnius"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:warsaw/",
      "name": "Warsaw"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:washington-dc/",
      "name": "Washington, D.C."
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:wellington/",
      "name": "Wellington"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:winnipeg/",
      "name": "Winnipeg"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:wroclaw/",
      "name": "Wroclaw"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:yerevan/",
      "name": "Yerevan"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:zagreb/",
      "name": "Zagreb"
  },
  {
      "href": "https://api.teleport.org/api/urban_areas/slug:zurich/",
      "name": "Zurich"
  }
]

console.log(cityData._links.categories)


export const cityData = {
  "_links": {
      "curies": [
          {
              "href": "https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/",
              "name": "location",
              "templated": true
          },
          {
              "href": "https://developers.teleport.org/api/resources/City/#!/relations/{rel}/",
              "name": "city",
              "templated": true
          },
          {
              "href": "https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/",
              "name": "ua",
              "templated": true
          },
          {
              "href": "https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/",
              "name": "country",
              "templated": true
          },
          {
              "href": "https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/",
              "name": "a1",
              "templated": true
          },
          {
              "href": "https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/",
              "name": "tz",
              "templated": true
          }
      ],
      "self": {
          "href": "https://api.teleport.org/api/urban_areas/slug:buffalo/details/"
      }
  },
  "categories": [
      {
          "data": [
              {
                  "float_value": 84.7,
                  "id": "BUSINESS-FREEDOM",
                  "label": "Business freedom",
                  "type": "float"
              },
              {
                  "float_value": 0.8623,
                  "id": "BUSINESS-FREEDOM-TELESCORE",
                  "label": "Business freedom [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 74.0,
                  "id": "CORRUPTION-FREEDOM",
                  "label": "Freedom from corruption",
                  "type": "float"
              },
              {
                  "float_value": 0.7883,
                  "id": "CORRUPTION-FREEDOM-TELESCORE",
                  "label": "Freedom from corruption [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 91.4,
                  "id": "LABOR-RESTRICTIONS",
                  "label": "Lack of labor restrictions",
                  "type": "float"
              },
              {
                  "float_value": 1.0,
                  "id": "LABOR-RESTRICTIONS-TELESCORE",
                  "label": "Lack of labor restrictions [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 5.6,
                  "id": "TIME-TO-OPEN-BUSINESS",
                  "label": "Time to open a business",
                  "type": "float"
              },
              {
                  "float_value": 0.9507,
                  "id": "TIME-TO-OPEN-BUSINESS-TELESCORE",
                  "label": "Time to open a business [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "BUSINESS-FREEDOM",
          "label": "Business Freedom"
      },
      {
          "data": [
              {
                  "float_value": 0.5599,
                  "id": "POPULATION-SIZE",
                  "label": "Urban area population (millions)",
                  "type": "float"
              },
              {
                  "float_value": 861.7522583007812,
                  "id": "POPULATION-UA-CENTER-DENSITY",
                  "label": "Population density in people/sq km in UA center.",
                  "type": "float"
              },
              {
                  "float_value": 1427.4689682234725,
                  "id": "POPULATION-UA-DENSITY",
                  "label": "Population density in people/sq km over full UA as defined by bounding box.",
                  "type": "float"
              }
          ],
          "id": "CITY-SIZE",
          "label": "City Size"
      },
      {
          "data": [
              {
                  "float_value": 12.7,
                  "id": "WEATHER-AV-DAY-LENGTH",
                  "label": "Average day length (hours)",
                  "type": "float"
              },
              {
                  "float_value": 54.0,
                  "id": "WEATHER-AV-NUMBER-CLEAR-DAYS",
                  "label": "Average number of clear days per year",
                  "type": "float"
              },
              {
                  "float_value": 169.0,
                  "id": "WEATHER-AV-NUMBER-RAINY-DAYS",
                  "label": "Average number of rainy days per year",
                  "type": "float"
              },
              {
                  "id": "WEATHER-AV-PERCENT-CHANCE-CLEAR-SKIES",
                  "label": "Average annual percent chance of clear skies",
                  "percent_value": 0.11900000000000001,
                  "type": "percent"
              },
              {
                  "id": "WEATHER-AV-POSSIBILITY-SUNSHINE",
                  "label": "Average annual percent chance of sunshine",
                  "percent_value": 0.48,
                  "type": "percent"
              },
              {
                  "id": "WEATHER-AVERAGE-HIGH",
                  "label": "Average high temperature (Celsius)",
                  "string_value": "13.6",
                  "type": "string"
              },
              {
                  "id": "WEATHER-AVERAGE-LOW",
                  "label": "Average low temperature (Celsius)",
                  "string_value": "4.6",
                  "type": "string"
              },
              {
                  "float_value": "14.5",
                  "id": "WEATHER-SUNSHINE-AMOUNT",
                  "label": "Average daily solar radiation (Mj/m²)",
                  "type": "float"
              },
              {
                  "id": "WEATHER-TYPE",
                  "label": "Weather type",
                  "string_value": "Warm Summer Continental Climate",
                  "type": "string"
              }
          ],
          "id": "CLIMATE",
          "label": "Climate"
      },
      {
          "data": [
              {
                  "float_value": 0.5228,
                  "id": "CONSUMER-PRICE-INDEX-TELESCORE",
                  "label": "Inflation [Teleport score]",
                  "type": "float"
              },
              {
                  "currency_dollar_value": 3.2,
                  "id": "COST-APPLES",
                  "label": "A kilogram of Apples",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 0.97,
                  "id": "COST-BREAD",
                  "label": "Bread",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 3.7,
                  "id": "COST-CAPPUCCINO",
                  "label": "A Cappuccino",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 11.0,
                  "id": "COST-CINEMA",
                  "label": "Movie ticket",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 24.0,
                  "id": "COST-FITNESS-CLUB",
                  "label": "Monthly fitness club membership",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 2.2,
                  "id": "COST-IMPORT-BEER",
                  "label": "A beer",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 68.0,
                  "id": "COST-PUBLIC-TRANSPORT",
                  "label": "Monthly public transport",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 13.0,
                  "id": "COST-RESTAURANT-MEAL",
                  "label": "Lunch",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 12.0,
                  "id": "COST-TAXI",
                  "label": "5km taxi ride",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 72.76,
                  "id": "RESTAURANT-PRICE-INDEX",
                  "label": "Price of a meal at a restaurant",
                  "type": "currency_dollar"
              }
          ],
          "id": "COST-OF-LIVING",
          "label": "Cost of Living"
      },
      {
          "data": [
              {
                  "float_value": 0.6851,
                  "id": "CULTURE-ART-GALLERIES-TELESCORE",
                  "label": "Art galleries [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-ART-GALLERIES-VENUE-COUNT",
                  "int_value": 117,
                  "label": "Art galleries",
                  "type": "int"
              },
              {
                  "float_value": 0.4902,
                  "id": "CULTURE-CINEMA-TELESCORE",
                  "label": "Cinemas [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-CINEMAS-VENUE-COUNT",
                  "int_value": 34,
                  "label": "Cinemas",
                  "type": "int"
              },
              {
                  "float_value": 0.7668,
                  "id": "CULTURE-COMEDY-CLUBS-TELESCORE",
                  "label": "Comedy clubs [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-COMEDY-CLUBS-VENUE-COUNT",
                  "int_value": 37,
                  "label": "Comedy clubs",
                  "type": "int"
              },
              {
                  "float_value": 0.8064,
                  "id": "CULTURE-CONCERTS-TELESCORE",
                  "label": "Concerts [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-CONCERTS-VENUE-COUNT",
                  "int_value": 117,
                  "label": "Concert venues",
                  "type": "int"
              },
              {
                  "float_value": 0.3885,
                  "id": "CULTURE-HISTORICAL-SITES-TELESCORE",
                  "label": "Historical sites [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-HISTORICAL-SITES-VENUE-COUNT",
                  "int_value": 41,
                  "label": "Historical sites",
                  "type": "int"
              },
              {
                  "float_value": 0.4755,
                  "id": "CULTURE-MUSEUMS-TELESCORE",
                  "label": "Museums [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-MUSEUMS-VENUE-COUNT",
                  "int_value": 37,
                  "label": "Museums",
                  "type": "int"
              },
              {
                  "float_value": 0.5697,
                  "id": "CULTURE-PERFORMING-ARTS-TELESCORE",
                  "label": "Performing arts [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-PERFORMING-ARTS-VENUE-COUNT",
                  "int_value": 142,
                  "label": "Performing art venues",
                  "type": "int"
              },
              {
                  "float_value": 0.7477,
                  "id": "CULTURE-SPORTS-TELESCORE",
                  "label": "Sports [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-SPORTS-VENUE-COUNT",
                  "int_value": 69,
                  "label": "Sport venues",
                  "type": "int"
              },
              {
                  "float_value": 0.7876,
                  "id": "CULTURE-ZOOS-TELESCORE",
                  "label": "Zoos [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "CULTURE-ZOOS-VENUE-COUNT",
                  "int_value": 3,
                  "label": "Zoos",
                  "type": "int"
              }
          ],
          "id": "CULTURE",
          "label": "Leisure & Culture"
      },
      {
          "data": [
              {
                  "id": "CURRENCY-URBAN-AREA",
                  "label": "Currency for urban area",
                  "string_value": "USD",
                  "type": "string"
              },
              {
                  "float_value": 1.0,
                  "id": "CURRENCY-URBAN-AREA-EXCHANGE-RATE",
                  "label": "Currency exchange rate per US dollar for urban area",
                  "type": "float"
              },
              {
                  "id": "GDP-GROWTH-RATE",
                  "label": "GDP growth rate",
                  "percent_value": 0.023889999999999998,
                  "type": "percent"
              },
              {
                  "float_value": 0.4329,
                  "id": "GDP-GROWTH-RATE-TELESCORE",
                  "label": "GDP growth rate [Teleport score]",
                  "type": "float"
              },
              {
                  "currency_dollar_value": 54596.653,
                  "id": "GDP-PER-CAPITA",
                  "label": "GDP per capita",
                  "type": "currency_dollar"
              },
              {
                  "float_value": 0.87,
                  "id": "GDP-PER-CAPITA-TELESCORE",
                  "label": "GDP per capita [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "ECONOMY",
          "label": "Economy"
      },
      {
          "data": [
              {
                  "id": "PISA-DETAIL-HAPPINESS",
                  "label": "Percent of happy students",
                  "percent_value": 0.7733456820955176,
                  "type": "percent"
              },
              {
                  "id": "PISA-DETAIL-MATH-HIGH-PERFORMERS",
                  "label": "Percent of top performers in PISA math test",
                  "percent_value": 0.08771701960212558,
                  "type": "percent"
              },
              {
                  "id": "PISA-DETAIL-MATH-LOW-PERFORMERS",
                  "label": "Percent of low performers in PISA math test",
                  "percent_value": 0.2584588802569376,
                  "type": "percent"
              },
              {
                  "float_value": 478.0386354593648,
                  "id": "PISA-DETAIL-MATH-MEAN-SCORES",
                  "label": "Country mean scores in PISA math test",
                  "type": "float"
              },
              {
                  "id": "PISA-DETAIL-READING-HIGH-PERFORMERS",
                  "label": "Percent of top performers in PISA reading test",
                  "percent_value": 0.07920794748744282,
                  "type": "percent"
              },
              {
                  "id": "PISA-DETAIL-READING-LOW-PERFORMERS",
                  "label": "Percent of low performers in PISA reading test",
                  "percent_value": 0.1660408399986399,
                  "type": "percent"
              },
              {
                  "float_value": 497.5817181169522,
                  "id": "PISA-DETAIL-READING-MEAN-SCORES",
                  "label": "Country mean scores in PISA reading test",
                  "type": "float"
              },
              {
                  "id": "PISA-DETAIL-SCIENCE-HIGH-PERFORMERS",
                  "label": "Percent of top performers in PISA science test",
                  "percent_value": 0.074626744723251,
                  "type": "percent"
              },
              {
                  "id": "PISA-DETAIL-SCIENCE-LOW-PERFORMERS",
                  "label": "Percent of low performers in PISA science test",
                  "percent_value": 0.18136898990931935,
                  "type": "percent"
              },
              {
                  "float_value": 497.4098114830862,
                  "id": "PISA-DETAIL-SCIENCE-MEAN-SCORES",
                  "label": "Country mean scores in PISA science test",
                  "type": "float"
              },
              {
                  "id": "PISA-MATHS-RANKING",
                  "int_value": 30,
                  "label": "PISA math ranking (high school)",
                  "type": "int"
              },
              {
                  "id": "PISA-RANKING",
                  "int_value": 24,
                  "label": "PISA ranking",
                  "type": "int"
              },
              {
                  "float_value": 0.7249,
                  "id": "PISA-RANKING-TELESCORE",
                  "label": "PISA ranking (high school) [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "PISA-READING-RANKING",
                  "int_value": 16,
                  "label": "PISA reading (high school)",
                  "type": "int"
              },
              {
                  "id": "PISA-SCIENCE-RANKING",
                  "int_value": 19,
                  "label": "PISA science (high school)",
                  "type": "int"
              },
              {
                  "float_value": 0.1175,
                  "id": "QUALITY-OF-UNIVERSITIES-TELESCORE",
                  "label": "University quality [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "UNIVERSITIES-BEST-RANKED-NAME",
                  "label": "Best university in ranking",
                  "string_value": "University at Buffalo",
                  "type": "string"
              },
              {
                  "id": "UNIVERSITIES-BEST-RANKED-RANK",
                  "int_value": 275,
                  "label": "Best university ranking",
                  "type": "int"
              }
          ],
          "id": "EDUCATION",
          "label": "Education"
      },
      {
          "data": [
              {
                  "float_value": 0.9928,
                  "id": "HEALTHCARE-COST-TELESCORE",
                  "label": "Healthcare expenditure [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 79.2783,
                  "id": "HEALTHCARE-LIFE-EXPECTANCY",
                  "label": "Life expectancy (years)",
                  "type": "float"
              },
              {
                  "float_value": 0.7558,
                  "id": "HEALTHCARE-LIFE-EXPECTANCY-TELESCORE",
                  "label": "Life expectancy [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.8008,
                  "id": "HEALTHCARE-QUALITY-TELESCORE",
                  "label": "Healthcare quality [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "HEALTHCARE",
          "label": "Healthcare"
      },
      {
          "data": [
              {
                  "currency_dollar_value": 1100.0,
                  "id": "APARTMENT-RENT-LARGE",
                  "label": "Large apartment",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 980.0,
                  "id": "APARTMENT-RENT-MEDIUM",
                  "label": "Medium apartment",
                  "type": "currency_dollar"
              },
              {
                  "currency_dollar_value": 830.0,
                  "id": "APARTMENT-RENT-SMALL",
                  "label": "Small apartment",
                  "type": "currency_dollar"
              },
              {
                  "float_value": 0.6949,
                  "id": "RENT-INDEX-TELESCORE",
                  "label": "Rent index [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "HOUSING",
          "label": "Housing"
      },
      {
          "data": [
              {
                  "id": "ELDERLY-PEOPLE",
                  "label": "Percent of elderly people (65+ years) in country",
                  "percent_value": 0.0015249999999999999,
                  "type": "percent"
              },
              {
                  "float_value": 79.8,
                  "id": "LIFE-EXPECTANCY",
                  "label": "Life expectancy at birth in country",
                  "type": "float"
              },
              {
                  "float_value": 37.9,
                  "id": "MEDIAN-AGE",
                  "label": "Median age in country",
                  "type": "float"
              },
              {
                  "id": "UNEMPLOYMENT-RATE",
                  "label": "Unemployment rate in country",
                  "percent_value": 0.00047,
                  "type": "percent"
              }
          ],
          "id": "INTERNAL",
          "label": "Internal application use"
      },
      {
          "data": [
              {
                  "currency_dollar_value": 604.0,
                  "id": "EMPLOYER-SOCIAL-TAXES-CAP-SOC-SEC",
                  "label": "Maximum amount paid by employer as social security taxes per employee",
                  "type": "currency_dollar"
              },
              {
                  "id": "EMPLOYER-SOCIAL-TAXES-OTHER",
                  "label": "Employer social taxes per employee",
                  "percent_value": 0.014499999999999999,
                  "type": "percent"
              },
              {
                  "id": "EMPLOYER-SOCIAL-TAXES-SOC-SEC",
                  "label": "Employer social security taxes per employee",
                  "percent_value": 0.062,
                  "type": "percent"
              },
              {
                  "id": "STARTUP-JOBS-AVAILABLE",
                  "int_value": 7.0,
                  "label": "Startup jobs available",
                  "type": "int"
              },
              {
                  "float_value": 0.2576,
                  "id": "STARTUP-JOBS-AVAILABLE-TELESCORE",
                  "label": "Startup job availability [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.7429,
                  "id": "STARTUP-SALARIES",
                  "label": "Startup salary [Teleport score]",
                  "type": "float"
              },
              {
                  "currency_dollar_value": 67500.0,
                  "id": "STARTUP-SALARIES-DETAIL",
                  "label": "Startup salary",
                  "type": "currency_dollar"
              }
          ],
          "id": "JOB-MARKET",
          "label": "Job Market"
      },
      {
          "data": [
              {
                  "id": "ENGLISH-SKILLS-DETAIL",
                  "int_value": 100.0,
                  "label": "English skills",
                  "type": "int"
              },
              {
                  "float_value": 1.0,
                  "id": "ENGLISH-SKILLS-TELESCORE",
                  "label": "English skills [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "SPOKEN-LANGUAGES",
                  "label": "Spoken languages",
                  "string_value": "English",
                  "type": "string"
              }
          ],
          "id": "LANGUAGE",
          "label": "Language"
      },
      {
          "data": [
              {
                  "id": "LGBT-DETAIL-ADOPTION",
                  "label": "LGBT adoption rights",
                  "string_value": "✔ Legal",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-AGE-OF-CONSENT",
                  "label": "LGBT age of consent",
                  "string_value": "✔ Equal",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-CHANGING-GENDER",
                  "label": "LGBT gender changing rights",
                  "string_value": "✔ Legal, surgery not required",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-CONVERSION-THERAPY",
                  "label": "LGBT conversion therapy regulations",
                  "string_value": "Ambiguous",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-DISCRIMINATION",
                  "label": "LGBT discrimination legality",
                  "string_value": "Illegal in some contexts",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-DONATING-BLOOD",
                  "label": "LGBT blood donation regulations",
                  "string_value": "✖ Banned (indefinite deferral)",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-EMPLOYMENT-DISCRIMINATION",
                  "label": "LGBT employment discrimination legality",
                  "string_value": "Sexual orientation only",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-HOMOSEXUALITY",
                  "label": "LGBT homosexuality rights",
                  "string_value": "✔ Legal",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-HOUSING-DISCRIMINATION",
                  "label": "LGBT housing discrimination legality",
                  "string_value": "Sexual orientation only",
                  "type": "string"
              },
              {
                  "id": "LGBT-DETAIL-MARRIAGE",
                  "label": "LGBT marriage rights",
                  "string_value": "✔ Legal",
                  "type": "string"
              },
              {
                  "float_value": 86.72,
                  "id": "LGBT-INDEX",
                  "label": "LGBT Equality Index",
                  "type": "float"
              },
              {
                  "float_value": 0.8872,
                  "id": "LGBT-INDEX-TELESCORE",
                  "label": "LGBT Equality Index [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.5936,
                  "id": "TOLERANCE-TOWARDS-MINORITIES-TELESCORE",
                  "label": "Tolerance towards minorities [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "MINORITIES",
          "label": "Tolerance"
      },
      {
          "data": [
              {
                  "float_value": 58.325,
                  "id": "NETWORK-DOWNLOAD",
                  "label": "Download speed (Mbps)",
                  "type": "float"
              },
              {
                  "float_value": 0.6761,
                  "id": "NETWORK-DOWNLOAD-TELESCORE",
                  "label": "Internet access (download) [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 19.435,
                  "id": "NETWORK-UPLOAD",
                  "label": "Upload speed (Mbps)",
                  "type": "float"
              },
              {
                  "float_value": 0.6755,
                  "id": "NETWORK-UPLOAD-TELESCORE",
                  "label": "Internet access (upload) [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "NETWORK",
          "label": "Internet Access"
      },
      {
          "data": [
              {
                  "float_value": 197.0,
                  "id": "ELEVATION",
                  "label": "Urban area elevation (meters)",
                  "type": "float"
              },
              {
                  "float_value": 481.0,
                  "id": "ELEVATION-PEAKS",
                  "label": "Median peak in meters",
                  "type": "float"
              },
              {
                  "float_value": 0.2171,
                  "id": "ELEVATION-PEAKS-TELESCORE",
                  "label": "Elevation (hills or mountains) [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.7122,
                  "id": "SEASIDE-ACCESS-TELESCORE",
                  "label": "Water access [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 1.0,
                  "id": "SEASIDE-WATERBODY",
                  "label": "Seaside waterbody",
                  "type": "float"
              }
          ],
          "id": "OUTDOORS",
          "label": "Outdoors"
      },
      {
          "data": [
              {
                  "float_value": 0.7937,
                  "id": "AIR-POLLUTION-TELESCORE",
                  "label": "Air quality [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.7841,
                  "id": "CLEANLINESS-TELESCORE",
                  "label": "Cleanliness [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.8496,
                  "id": "DRINKING-WATER-QUALITY-TELESCORE",
                  "label": "Drinking water quality [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.9043,
                  "id": "URBAN-GREENERY-TELESCORE",
                  "label": "Urban greenery [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "POLLUTION",
          "label": "Environmental Quality"
      },
      {
          "data": [
              {
                  "float_value": 0.5798,
                  "id": "CRIME-RATE-TELESCORE",
                  "label": "Crime rate [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "GUN-DEATH-RATE",
                  "int_value": 4.39,
                  "label": "Gun-related deaths per 100,000 residents per year",
                  "type": "int"
              },
              {
                  "float_value": 0.8817,
                  "id": "GUN-DEATH-SCORE-TELESCORE",
                  "label": "Lack of gun related deaths [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "GUN-OWNERSHIP",
                  "int_value": 26.3085,
                  "label": "Guns per 100 residents",
                  "type": "int"
              },
              {
                  "float_value": 0.8579,
                  "id": "GUN-OWNERSHIP-SCORE-TELESCORE",
                  "label": "Lack of guns [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.8698,
                  "id": "GUN-SCORE-TELESCORE",
                  "label": "Lack of guns and gun-related deaths [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "SAFETY",
          "label": "Safety"
      },
      {
          "data": [
              {
                  "float_value": 0.8623,
                  "id": "COWORKING-SPACES-TELESCORE",
                  "label": "Coworking spaces [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "EVENTS-COUNT",
                  "int_value": 105.0,
                  "label": "Startup events",
                  "type": "int"
              },
              {
                  "id": "EVENTS-LAST-12-MONTHS",
                  "int_value": 358,
                  "label": "Number of startup events in the last 12 months",
                  "type": "int"
              },
              {
                  "float_value": 0.6774,
                  "id": "EVENTS-TELESCORE",
                  "label": "Startup events [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "FUNDERBEAM-TOTAL-STARTUPS",
                  "int_value": 147,
                  "label": "Total number of startups",
                  "type": "int"
              },
              {
                  "id": "MEETUPS-DETAIL-TOTAL-EVENTS",
                  "int_value": 11,
                  "label": "Number of upcoming meetup events",
                  "type": "int"
              },
              {
                  "id": "MEETUPS-GROUPS",
                  "int_value": 34,
                  "label": "Meetups groups",
                  "type": "int"
              },
              {
                  "id": "MEETUPS-MEMBERS",
                  "int_value": 8405,
                  "label": "Meetups members",
                  "type": "int"
              },
              {
                  "float_value": 0.1832,
                  "id": "MEETUPS-TELESCORE",
                  "label": "Meetups [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "STARTUP-CLIMATE-INVESTORS",
                  "int_value": 11,
                  "label": "Number of investors",
                  "type": "int"
              },
              {
                  "id": "STARTUP-CLIMATE-NEW-STARTUPS",
                  "int_value": 2.0,
                  "label": "Average monthly increase in number of startups",
                  "type": "int"
              },
              {
                  "float_value": 0.2702,
                  "id": "STARTUP-CLIMATE-NEW-STARTUPS-TELESCORE",
                  "label": "Average monthly increase in number of startups [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.4154,
                  "id": "STARTUP-CLIMATE-SCENE-TELESCORE",
                  "label": "Startup climate scene [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.5192,
                  "id": "STARTUP-CLIMATE-STARTUPS-TELESCORE",
                  "label": "Startups [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "WORKFROM-COWORKING-SPACES-COUNT",
                  "int_value": 8,
                  "label": "Coworking spaces on WorkFrom.co",
                  "type": "int"
              }
          ],
          "id": "STARTUPS",
          "label": "Startups"
      },
      {
          "data": [
              {
                  "id": "COMPANY-PROFIT-TAX-RATE",
                  "label": "Profit tax (%% of profit)",
                  "percent_value": 0.44,
                  "type": "percent"
              },
              {
                  "float_value": 0.5421,
                  "id": "COMPANY-PROFIT-TAX-RATE-TELESCORE",
                  "label": "Effective company profit tax rate on payouts as dividends [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.242,
                  "id": "INCOME-TAX-TELESCORE",
                  "label": "Income tax level [Teleport score]",
                  "type": "float"
              },
              {
                  "id": "TAX-VAT",
                  "label": "VAT (Sales Tax)",
                  "percent_value": 0.0875,
                  "type": "percent"
              },
              {
                  "id": "TIME-OVERHEAD-COMPANY-TAXES",
                  "int_value": 175.0,
                  "label": "Time overhead to file company taxes",
                  "type": "int"
              }
          ],
          "id": "TAXATION",
          "label": "Taxation"
      },
      {
          "data": [
              {
                  "id": "HUMAN-CITIES-PAGE-URLS",
                  "label": "Human city page",
                  "type": "url",
                  "url_value": "http://cities.human.co/details/United_States/Buffalo"
              },
              {
                  "float_value": 0.8616,
                  "id": "TRAFFIC-INDEX-TELESCORE",
                  "label": "Traffic handling [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "TRAFFIC",
          "label": "Commute"
      },
      {
          "data": [
              {
                  "id": "AIRPORT-HUB-INDEX-DETAIL",
                  "int_value": 24,
                  "label": "Airport hub",
                  "type": "int"
              },
              {
                  "float_value": 0.1818,
                  "id": "AIRPORT-HUB-TELESCORE",
                  "label": "Airport hub [Teleport score]",
                  "type": "float"
              },
              {
                  "float_value": 0.1204,
                  "id": "TRAIN-TRANSPORT-TELESCORE",
                  "label": "Intercity train connectivity [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "TRAVEL-CONNECTIVITY",
          "label": "Travel Connectivity"
      },
      {
          "data": [
              {
                  "float_value": 0.2715,
                  "id": "FUNDERBEAM-VENTURE-CAPITAL-TELESCORE",
                  "label": "Venture capital [Teleport score]",
                  "type": "float"
              }
          ],
          "id": "VENTURE-CAPITAL",
          "label": "Venture Capital"
      }
  ]
}